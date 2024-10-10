import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {Icon, DropDown} from "@neos-project/react-ui-components";
import {neos} from "@neos-project/neos-ui-decorators";
import style from "./style.module.css";
import {connect} from "react-redux";
import {selectors} from "@neos-project/neos-ui-redux-store";
import clsx from "clsx";

const getDataLoaderOptionsForProps = (props) => ({
    contextNodePath: props.focusedNodePath,
    dataSourceIdentifier: 'medienreaktor-iconselecteditor-icon-sources',
    dataSourceAdditionalData: props.options.iconSources,
    dataSourceDisableCaching: false,
});

const defaultOptions = {
    iconSources: [],
};

function Editor(props) {
    const mergedOptions = {...defaultOptions, ...props.options};
    const {value, commit, highlight, i18nRegistry, dataSourcesDataLoader} = props;

    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [options, setOptions] = useState([]);
    const [icons, setIcons] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [selectedIconSource, setSelectedIconSource] = useState('');
    const [selectedIcon, setSelectedIcon] = useState(null);

    useEffect(() => {
        // Load options from data source
        dataSourcesDataLoader.resolveValue(getDataLoaderOptionsForProps(props), value).then((values) => {
            setIsLoading(false);
            setOptions(values);

            if (!icons.length) {
                setIcons(values.iconSources[0]);
                setSelectedIconSource(values.iconSourceNames[0]);
            }

            if (!selectedIcon && !Array.isArray(value)) {
                setIcons(values.iconSources[values.iconSourceNames.indexOf(value.sourceName)]);
                setSelectedIconSource(value.sourceName);
                setSelectedIcon(value);
            }
        });
    }, [mergedOptions]);

    if (isLoading) {
        return (
            <div className={clsx(style.wrapper, style.loading)} title="Loading">
                <Icon icon="spinner" size="lg" spin/>
            </div>
        );
    }

    function handleIconSourceSelection(index) {
        setIcons(options.iconSources[index]);
        setSelectedIconSource(options.iconSourceNames[index]);
        setSearchString('');
    }

    function handleIconSelection(icon) {
        setSelectedIcon(icon);
        setIsOpen(false);
        commit({
            resourceUri: icon.resourceUri,
            sourceName: icon.sourceName,
            label: icon.label,
        });
    }

    return (
        <>
            <DropDown.Stateless isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} onClose={() => false}>
                <DropDown.Header>{selectedIcon?.label}</DropDown.Header>
                <DropDown.Contents scrollable={true} className{...style.dropdownContent}>
                    <div className={style.stickyHeader}>
                        <div className={style.tabs}>
                            {options.iconSourceNames?.map((option, index) =>
                                <button onClick={() => handleIconSourceSelection(index)} type="button"
                                        data-selected={selectedIconSource === option}
                                        data-selected-source={selectedIcon?.sourceName === option}
                                        className={style.tab}>
                                    {option}
                                </button>
                            )}
                        </div>

                        <input onInput={e => setSearchString(e.target.value)}
                               value={searchString} type="text" placeholder="search..."
                               className={style.searchInput}/>
                    </div>

                    <ul className={style.iconList}>
                        {icons.filter(icon => icon.label.toLowerCase().includes(searchString)).map((item) => {
                            return (
                                <li title={item.label} className={style.iconWrapper}>
                                    <button onClick={() => handleIconSelection(item)} type="button"
                                            data-selected={selectedIcon?.resourceUri === item?.resourceUri}
                                            className={style.iconButton}>
                                            <span className={style.icon}
                                                  dangerouslySetInnerHTML={{__html: item.icon}}></span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </DropDown.Contents>
            </DropDown.Stateless>
        </>
    );
}

Editor.propTypes = {
    value: PropTypes.string,
    commit: PropTypes.func.isRequired,
    i18nRegistry: PropTypes.object.isRequired,
    options: PropTypes.shape({
        iconSources: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                path: PropTypes.string,
            }),
        ),
    }).isRequired,
};

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    dataSourcesDataLoader: globalRegistry.get("dataLoaders").get("DataSources"),
}));
const connector = connect((state) => ({
    focusedNodePath: selectors.CR.Nodes.focusedNodePathSelector(state),
}));
export default neosifier(connector(Editor));

(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
  function readFromConsumerApi(key) {
    return (...args) => {
      if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
        return window["@Neos:HostPluginAPI"][`@${key}`](...args);
      }
      throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
  }
  var init_readFromConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js
  var require_react = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().React;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().PropTypes;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js
  var require_react_ui_components = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().ReactUiComponents;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js
  var require_neos_ui_decorators = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiDecorators;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js
  var require_react_redux = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().reactRedux;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js
  var require_neos_ui_redux_store = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiReduxStore;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  init_readFromConsumerApi();
  var dist_default = readFromConsumerApi("manifest");

  // Resources/Private/Editor/IconSelectEditor/index.jsx
  var import_react = __toESM(require_react());
  var import_prop_types = __toESM(require_prop_types());
  var import_react_ui_components = __toESM(require_react_ui_components());
  var import_neos_ui_decorators = __toESM(require_neos_ui_decorators());

  // Resources/Private/Editor/IconSelectEditor/style.module.css
  var style_module_default = { "list": "medienreaktor-iconselecteditor-7yFpEq-list", "error": "medienreaktor-iconselecteditor-7yFpEq-error", "searchInput": "medienreaktor-iconselecteditor-7yFpEq-searchInput", "disabled": "medienreaktor-iconselecteditor-7yFpEq-disabled", "tab": "medienreaktor-iconselecteditor-7yFpEq-tab", "iconList": "medienreaktor-iconselecteditor-7yFpEq-iconList", "highlight": "medienreaktor-iconselecteditor-7yFpEq-highlight", "stickyHeader": "medienreaktor-iconselecteditor-7yFpEq-stickyHeader", "color": "medienreaktor-iconselecteditor-7yFpEq-color", "dropdownContent": "medienreaktor-iconselecteditor-7yFpEq-dropdownContent", "grid": "medienreaktor-iconselecteditor-7yFpEq-grid", "loading": "medienreaktor-iconselecteditor-7yFpEq-loading", "flex": "medienreaktor-iconselecteditor-7yFpEq-flex", "tabs": "medienreaktor-iconselecteditor-7yFpEq-tabs", "iconButton": "medienreaktor-iconselecteditor-7yFpEq-iconButton", "icon": "medienreaktor-iconselecteditor-7yFpEq-icon" };

  // Resources/Private/Editor/IconSelectEditor/index.jsx
  var import_react_redux = __toESM(require_react_redux());
  var import_neos_ui_redux_store = __toESM(require_neos_ui_redux_store());

  // node_modules/clsx/dist/clsx.mjs
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e)
      n += e;
    else if ("object" == typeof e)
      if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++)
          e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
      } else
        for (f in e)
          e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
      (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  var clsx_default = clsx;

  // Resources/Private/Editor/IconSelectEditor/index.jsx
  var getDataLoaderOptionsForProps = (props) => ({
    contextNodePath: props.focusedNodePath,
    dataSourceIdentifier: "medienreaktor-iconselecteditor-icon-sources",
    dataSourceAdditionalData: props.options.iconSources,
    dataSourceDisableCaching: false
  });
  var defaultOptions = {
    iconSources: []
  };
  function Editor(props) {
    const mergedOptions = { ...defaultOptions, ...props.options };
    const { value, commit, highlight, i18nRegistry, dataSourcesDataLoader } = props;
    const [isOpen, setIsOpen] = (0, import_react.useState)(false);
    const [isLoading, setIsLoading] = (0, import_react.useState)(true);
    const [options, setOptions] = (0, import_react.useState)([]);
    const [icons, setIcons] = (0, import_react.useState)([]);
    const [searchString, setSearchString] = (0, import_react.useState)("");
    const [selectedIconSource, setSelectedIconSource] = (0, import_react.useState)("");
    const [selectedIcon, setSelectedIcon] = (0, import_react.useState)(null);
    (0, import_react.useEffect)(() => {
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
      return /* @__PURE__ */ import_react.default.createElement("div", { className: clsx_default(style_module_default.wrapper, style_module_default.loading), title: "Loading" }, /* @__PURE__ */ import_react.default.createElement(import_react_ui_components.Icon, { icon: "spinner", size: "lg", spin: true }));
    }
    function handleIconSourceSelection(index) {
      setIcons(options.iconSources[index]);
      setSelectedIconSource(options.iconSourceNames[index]);
      setSearchString("");
    }
    function handleIconSelection(icon) {
      setSelectedIcon(icon);
      setIsOpen(false);
      commit({
        resourceUri: icon.resourceUri,
        sourceName: icon.sourceName,
        label: icon.label
      });
    }
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(import_react_ui_components.DropDown.Stateless, { isOpen, onToggle: () => setIsOpen(!isOpen), onClose: () => false }, /* @__PURE__ */ import_react.default.createElement(import_react_ui_components.DropDown.Header, null, selectedIcon?.label), /* @__PURE__ */ import_react.default.createElement(import_react_ui_components.DropDown.Contents, { scrollable: true, className: true, ...style_module_default.dropdownContent }, /* @__PURE__ */ import_react.default.createElement("div", { className: style_module_default.stickyHeader }, /* @__PURE__ */ import_react.default.createElement("div", { className: style_module_default.tabs }, options.iconSourceNames?.map(
      (option, index) => /* @__PURE__ */ import_react.default.createElement(
        "button",
        {
          onClick: () => handleIconSourceSelection(index),
          type: "button",
          "data-selected": selectedIconSource === option,
          "data-selected-source": selectedIcon?.sourceName === option,
          className: style_module_default.tab
        },
        option
      )
    )), /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        onInput: (e) => setSearchString(e.target.value),
        value: searchString,
        type: "text",
        placeholder: "search...",
        className: style_module_default.searchInput
      }
    )), /* @__PURE__ */ import_react.default.createElement("ul", { className: style_module_default.iconList }, icons.filter((icon) => icon.label.toLowerCase().includes(searchString)).map((item) => {
      return /* @__PURE__ */ import_react.default.createElement("li", { title: item.label, className: style_module_default.iconWrapper }, /* @__PURE__ */ import_react.default.createElement(
        "button",
        {
          onClick: () => handleIconSelection(item),
          type: "button",
          "data-selected": selectedIcon?.resourceUri === item?.resourceUri,
          className: style_module_default.iconButton
        },
        /* @__PURE__ */ import_react.default.createElement(
          "span",
          {
            className: style_module_default.icon,
            dangerouslySetInnerHTML: { __html: item.icon }
          }
        )
      ));
    })))));
  }
  Editor.propTypes = {
    value: import_prop_types.default.string,
    commit: import_prop_types.default.func.isRequired,
    i18nRegistry: import_prop_types.default.object.isRequired,
    options: import_prop_types.default.shape({
      iconSources: import_prop_types.default.arrayOf(
        import_prop_types.default.shape({
          name: import_prop_types.default.string,
          path: import_prop_types.default.string
        })
      )
    }).isRequired
  };
  var neosifier = (0, import_neos_ui_decorators.neos)((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    dataSourcesDataLoader: globalRegistry.get("dataLoaders").get("DataSources")
  }));
  var connector = (0, import_react_redux.connect)((state) => ({
    focusedNodePath: import_neos_ui_redux_store.selectors.CR.Nodes.focusedNodePathSelector(state)
  }));
  var IconSelectEditor_default = neosifier(connector(Editor));

  // Resources/Private/Editor/manifest.js
  dist_default("Medienreaktor.IconSelectEditor:Editor", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");
    editorsRegistry.set("Medienreaktor.IconSelectEditor/Editor", {
      component: IconSelectEditor_default
    });
  });
})();
//# sourceMappingURL=Plugin.js.map

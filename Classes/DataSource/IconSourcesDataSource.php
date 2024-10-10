<?php

namespace Medienreaktor\IconSelectEditor\DataSource;

use Neos\Neos\Service\DataSource\AbstractDataSource;
use Neos\ContentRepository\Domain\Model\NodeInterface;

class IconSourcesDataSource extends AbstractDataSource
{
    /**
     * @var string
     */
    static protected $identifier = 'medienreaktor-iconselecteditor-icon-sources';

    public function getData(NodeInterface $node = null, array $arguments = []): array
    {
        if (empty($arguments)) {
            return [];
        }

        $iconSources = $arguments;

        $options = [];

        foreach ($iconSources as $index => $iconSource) {
            $packageName = explode('/', $iconSource['path'])[0];
            $absolutePath = FLOW_PATH_ROOT . 'DistributionPackages/' . $packageName . '/Resources/' . str_replace($packageName, '', $iconSource['path']);

            $icons = scandir($absolutePath);

            foreach ($icons as $icon) {
                $iconNameMatches = [];
                preg_match('@(.*).svg@', $icon, $iconNameMatches);

                if (empty($iconNameMatches)) {
                    continue;
                }

                $iconName = str_replace(['-', '.', '_'], ' ', $iconNameMatches[1]);

                $options['iconSources'][$index][] = [
                    'label' => ucwords($iconName),
                    'sourceName' => $iconSource['name'],
                    'icon' => file_get_contents($absolutePath . '/' . $icon),
                    'resourceUri' => 'resource://' . $iconSource['path'] . '/' . $icon,
                ];
                $options['iconSourceNames'][$index] = $iconSource['name'];
            }
        }

        return $options;
    }
}

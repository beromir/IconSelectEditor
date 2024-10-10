# Icon selection Editor for Neos CMS

## Installation

Run the following command in your site package:

```bash
composer require --no-update beromir/neos-icon-select-editor
```

Then run `composer update` in your project root.

## Usage

```yaml
properties:
  icon:
    type: array
    ui:
      label: 'Icon'
      reloadIfChanged: true
      inspector:
        group: 'general'
        editor: 'Medienreaktor.IconSelectEditor/Editor'
        editorOptions:
          iconSources:
            - name: 'Font Awesome'
              path: 'Vendor.Site/Private/Icons/FontAwesome/regular'
            - name: 'Brands'
              path: 'Vendor.Site/Private/Icons/FontAwesome/brands'
```

The following properties are stored in the database for the icon:

- `resourceUri` (e.g.
  `resource://Vendor.Site/Private/Icons/FontAwesome/regular/squirrel.svg`)
- `sourceName` (e.g. `Font Awesome`)
- `label` (e.g. `Squirrel`)

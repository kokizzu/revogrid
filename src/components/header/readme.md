# viewport-header-data-component



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type                        | Default     |
| ----------- | ------------ | ----------- | --------------------------- | ----------- |
| `canResize` | `can-resize` |             | `boolean`                   | `undefined` |
| `colData`   | --           |             | `ColumnDataSchemaRegular[]` | `undefined` |
| `cols`      | --           |             | `VirtualPositionItem[]`     | `undefined` |
| `parent`    | `parent`     |             | `string`                    | `''`        |


## Events

| Event          | Description | Type                                        |
| -------------- | ----------- | ------------------------------------------- |
| `headerClick`  |             | `CustomEvent<ColumnDataSchemaRegular>`      |
| `headerResize` |             | `CustomEvent<{ [index: string]: number; }>` |


## Dependencies

### Used by

 - [revogr-viewport](../viewport)

### Graph
```mermaid
graph TD;
  revogr-viewport --> revogr-header
  style revogr-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
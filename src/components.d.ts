/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Edition, RevoGrid, Selection } from "./interfaces";
import { ObservableMap } from "@stencil/store";
import { DataSourceState, Groups } from "./store/dataSource/data.store";
export namespace Components {
    interface RevoGrid {
        /**
          * Indicates default column size.
         */
        "colSize": number;
        /**
          * Columns - defines an array of grid columns. Can be column or grouped column.
         */
        "columns": (RevoGrid.ColumnDataSchemaRegular|RevoGrid.ColumnDataSchemaGrouping)[];
        /**
          * Custom editors register
         */
        "editors": Edition.Editors;
        /**
          * Defines how many rows/columns should be rendered outside visible area.
         */
        "frameSize": number;
        /**
          * Pinned bottom Source: {[T in ColumnProp]: any} - defines pinned bottom rows data source.
         */
        "pinnedBottomSource": RevoGrid.DataType[];
        /**
          * Pinned top Source: {[T in ColumnProp]: any} - defines pinned top rows data source.
         */
        "pinnedTopSource": RevoGrid.DataType[];
        /**
          * When true, user can range selection.
         */
        "range": boolean;
        /**
          * When true, grid in read only mode.
         */
        "readonly": boolean;
        /**
          * When true, columns are resizable.
         */
        "resize": boolean;
        /**
          * Indicates default row size.
         */
        "rowSize": number;
        /**
          * Source: {[T in ColumnProp]: any} - defines main data source. Can be an Object or 2 dimensional array([][]); ColumnProp - string|number. It is reference for column mapping.
         */
        "source": RevoGrid.DataType[];
    }
    interface RevogrData {
        "canDrag": boolean;
        "colData": RevoGrid.ColumnDataSchemaRegular[];
        "cols": RevoGrid.VirtualPositionItem[];
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore": ObservableMap<DataSourceState<RevoGrid.DataType>>;
        "dimensionRow": ObservableMap<RevoGrid.DimensionSettingsState>;
        "range": boolean;
        "readonly": boolean;
        "rows": RevoGrid.VirtualPositionItem[];
    }
    interface RevogrEdit {
        "column": RevoGrid.ColumnDataSchemaRegular|null;
        "editCell": Edition.EditCell;
        /**
          * Custom editors register
         */
        "editor": Edition.EditorCtr|null;
    }
    interface RevogrHeader {
        "canResize": boolean;
        "colData": RevoGrid.ColumnDataSchemaRegular[];
        "cols": RevoGrid.VirtualPositionItem[];
        "dimensionCol": ObservableMap<RevoGrid.DimensionSettingsState>;
        "groupingDepth": number;
        "groups": Groups;
        "parent": string;
    }
    interface RevogrOverlaySelection {
        "canDrag": boolean;
        "colData": RevoGrid.ColumnDataSchemaRegular[];
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore": ObservableMap<DataSourceState<RevoGrid.DataType>>;
        "dimensionCol": ObservableMap<RevoGrid.DimensionSettingsState>;
        "dimensionRow": ObservableMap<RevoGrid.DimensionSettingsState>;
        /**
          * Custom editors register
         */
        "editors": Edition.Editors;
        /**
          * Last cell position
         */
        "lastCell": Selection.Cell;
        "range": boolean;
        "readonly": boolean;
        /**
          * Dynamic stores
         */
        "selectionStore": ObservableMap<Selection.SelectionStoreState>;
    }
    interface RevogrScrollVirtual {
        "contentSize": number;
        "dimension": RevoGrid.DimensionType;
        "setScroll": (e: RevoGrid.ViewPortScrollEvent) => Promise<void>;
        "virtualSize": number;
    }
    interface RevogrViewport {
        "columnStores": {[T in RevoGrid.DimensionCols]: ObservableMap<DataSourceState<RevoGrid.ColumnDataSchemaRegular>>};
        "dimensions": {[T in RevoGrid.MultiDimensionType]: ObservableMap<RevoGrid.DimensionSettingsState>};
        /**
          * Custom editors register
         */
        "editors": Edition.Editors;
        "range": boolean;
        "readonly": boolean;
        "resize": boolean;
        "rowStores": {[T in RevoGrid.DimensionRows]: ObservableMap<DataSourceState<RevoGrid.DataType>>};
        "uuid": string|null;
        "viewports": {[T in RevoGrid.MultiDimensionType]: ObservableMap<RevoGrid.ViewportState>};
    }
    interface RevogrViewportScroll {
        "contentHeight": number;
        "contentWidth": number;
        "setScroll": (e: RevoGrid.ViewPortScrollEvent) => Promise<void>;
    }
}
declare global {
    interface HTMLRevoGridElement extends Components.RevoGrid, HTMLStencilElement {
    }
    var HTMLRevoGridElement: {
        prototype: HTMLRevoGridElement;
        new (): HTMLRevoGridElement;
    };
    interface HTMLRevogrDataElement extends Components.RevogrData, HTMLStencilElement {
    }
    var HTMLRevogrDataElement: {
        prototype: HTMLRevogrDataElement;
        new (): HTMLRevogrDataElement;
    };
    interface HTMLRevogrEditElement extends Components.RevogrEdit, HTMLStencilElement {
    }
    var HTMLRevogrEditElement: {
        prototype: HTMLRevogrEditElement;
        new (): HTMLRevogrEditElement;
    };
    interface HTMLRevogrHeaderElement extends Components.RevogrHeader, HTMLStencilElement {
    }
    var HTMLRevogrHeaderElement: {
        prototype: HTMLRevogrHeaderElement;
        new (): HTMLRevogrHeaderElement;
    };
    interface HTMLRevogrOverlaySelectionElement extends Components.RevogrOverlaySelection, HTMLStencilElement {
    }
    var HTMLRevogrOverlaySelectionElement: {
        prototype: HTMLRevogrOverlaySelectionElement;
        new (): HTMLRevogrOverlaySelectionElement;
    };
    interface HTMLRevogrScrollVirtualElement extends Components.RevogrScrollVirtual, HTMLStencilElement {
    }
    var HTMLRevogrScrollVirtualElement: {
        prototype: HTMLRevogrScrollVirtualElement;
        new (): HTMLRevogrScrollVirtualElement;
    };
    interface HTMLRevogrViewportElement extends Components.RevogrViewport, HTMLStencilElement {
    }
    var HTMLRevogrViewportElement: {
        prototype: HTMLRevogrViewportElement;
        new (): HTMLRevogrViewportElement;
    };
    interface HTMLRevogrViewportScrollElement extends Components.RevogrViewportScroll, HTMLStencilElement {
    }
    var HTMLRevogrViewportScrollElement: {
        prototype: HTMLRevogrViewportScrollElement;
        new (): HTMLRevogrViewportScrollElement;
    };
    interface HTMLElementTagNameMap {
        "revo-grid": HTMLRevoGridElement;
        "revogr-data": HTMLRevogrDataElement;
        "revogr-edit": HTMLRevogrEditElement;
        "revogr-header": HTMLRevogrHeaderElement;
        "revogr-overlay-selection": HTMLRevogrOverlaySelectionElement;
        "revogr-scroll-virtual": HTMLRevogrScrollVirtualElement;
        "revogr-viewport": HTMLRevogrViewportElement;
        "revogr-viewport-scroll": HTMLRevogrViewportScrollElement;
    }
}
declare namespace LocalJSX {
    interface RevoGrid {
        /**
          * Indicates default column size.
         */
        "colSize"?: number;
        /**
          * Columns - defines an array of grid columns. Can be column or grouped column.
         */
        "columns"?: (RevoGrid.ColumnDataSchemaRegular|RevoGrid.ColumnDataSchemaGrouping)[];
        /**
          * Custom editors register
         */
        "editors"?: Edition.Editors;
        /**
          * Defines how many rows/columns should be rendered outside visible area.
         */
        "frameSize"?: number;
        /**
          * Pinned bottom Source: {[T in ColumnProp]: any} - defines pinned bottom rows data source.
         */
        "pinnedBottomSource"?: RevoGrid.DataType[];
        /**
          * Pinned top Source: {[T in ColumnProp]: any} - defines pinned top rows data source.
         */
        "pinnedTopSource"?: RevoGrid.DataType[];
        /**
          * When true, user can range selection.
         */
        "range"?: boolean;
        /**
          * When true, grid in read only mode.
         */
        "readonly"?: boolean;
        /**
          * When true, columns are resizable.
         */
        "resize"?: boolean;
        /**
          * Indicates default row size.
         */
        "rowSize"?: number;
        /**
          * Source: {[T in ColumnProp]: any} - defines main data source. Can be an Object or 2 dimensional array([][]); ColumnProp - string|number. It is reference for column mapping.
         */
        "source"?: RevoGrid.DataType[];
    }
    interface RevogrData {
        "canDrag"?: boolean;
        "colData"?: RevoGrid.ColumnDataSchemaRegular[];
        "cols"?: RevoGrid.VirtualPositionItem[];
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore"?: ObservableMap<DataSourceState<RevoGrid.DataType>>;
        "dimensionRow"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        "onDragStartCell"?: (event: CustomEvent<DragEvent>) => void;
        "range"?: boolean;
        "readonly"?: boolean;
        "rows"?: RevoGrid.VirtualPositionItem[];
    }
    interface RevogrEdit {
        "column"?: RevoGrid.ColumnDataSchemaRegular|null;
        "editCell"?: Edition.EditCell;
        /**
          * Custom editors register
         */
        "editor"?: Edition.EditorCtr|null;
        "onCellEdit"?: (event: CustomEvent<Edition.SaveDataDetails>) => void;
        "onCloseEdit"?: (event: CustomEvent<any>) => void;
    }
    interface RevogrHeader {
        "canResize"?: boolean;
        "colData"?: RevoGrid.ColumnDataSchemaRegular[];
        "cols"?: RevoGrid.VirtualPositionItem[];
        "dimensionCol"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        "groupingDepth"?: number;
        "groups"?: Groups;
        "onHeaderClick"?: (event: CustomEvent<RevoGrid.ColumnDataSchemaRegular>) => void;
        "onHeaderResize"?: (event: CustomEvent<RevoGrid.ViewSettingSizeProp>) => void;
        "parent"?: string;
    }
    interface RevogrOverlaySelection {
        "canDrag"?: boolean;
        "colData"?: RevoGrid.ColumnDataSchemaRegular[];
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore"?: ObservableMap<DataSourceState<RevoGrid.DataType>>;
        "dimensionCol"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        "dimensionRow"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        /**
          * Custom editors register
         */
        "editors"?: Edition.Editors;
        /**
          * Last cell position
         */
        "lastCell"?: Selection.Cell;
        "onAfterEdit"?: (event: CustomEvent<Edition.BeforeSaveDataDetails>) => void;
        "onBeforeEdit"?: (event: CustomEvent<Edition.BeforeSaveDataDetails>) => void;
        "onChangeSelection"?: (event: CustomEvent<{changes: Partial<Selection.Cell>; isMulti?: boolean; }>) => void;
        "onFocusCell"?: (event: CustomEvent<{focus: Selection.Cell; end: Selection.Cell; }>) => void;
        /**
          * Row dragged, new range ready to be applied
         */
        "onRowDropped"?: (event: CustomEvent<{from: number; to: number;}>) => void;
        /**
          * Selection range changed
         */
        "onSelectionChanged"?: (event: CustomEvent<{
    newRange: {start: Selection.Cell; end: Selection.Cell;};
    oldRange: {start: Selection.Cell; end: Selection.Cell;};
  }>) => void;
        "onSetEdit"?: (event: CustomEvent<string|boolean>) => void;
        "onUnregister"?: (event: CustomEvent<any>) => void;
        "range"?: boolean;
        "readonly"?: boolean;
        /**
          * Dynamic stores
         */
        "selectionStore"?: ObservableMap<Selection.SelectionStoreState>;
    }
    interface RevogrScrollVirtual {
        "contentSize"?: number;
        "dimension"?: RevoGrid.DimensionType;
        "onScrollVirtual"?: (event: CustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
        "virtualSize"?: number;
    }
    interface RevogrViewport {
        "columnStores"?: {[T in RevoGrid.DimensionCols]: ObservableMap<DataSourceState<RevoGrid.ColumnDataSchemaRegular>>};
        "dimensions"?: {[T in RevoGrid.MultiDimensionType]: ObservableMap<RevoGrid.DimensionSettingsState>};
        /**
          * Custom editors register
         */
        "editors"?: Edition.Editors;
        "onSetDimensionSize"?: (event: CustomEvent<{type: RevoGrid.MultiDimensionType, sizes: RevoGrid.ViewSettingSizeProp}>) => void;
        "onSetViewportCoordinate"?: (event: CustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
        "onSetViewportSize"?: (event: CustomEvent<RevoGrid.ViewPortResizeEvent>) => void;
        "range"?: boolean;
        "readonly"?: boolean;
        "resize"?: boolean;
        "rowStores"?: {[T in RevoGrid.DimensionRows]: ObservableMap<DataSourceState<RevoGrid.DataType>>};
        "uuid"?: string|null;
        "viewports"?: {[T in RevoGrid.MultiDimensionType]: ObservableMap<RevoGrid.ViewportState>};
    }
    interface RevogrViewportScroll {
        "contentHeight"?: number;
        "contentWidth"?: number;
        "onResizeViewport"?: (event: CustomEvent<RevoGrid.ViewPortResizeEvent>) => void;
        "onScrollViewport"?: (event: CustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
    }
    interface IntrinsicElements {
        "revo-grid": RevoGrid;
        "revogr-data": RevogrData;
        "revogr-edit": RevogrEdit;
        "revogr-header": RevogrHeader;
        "revogr-overlay-selection": RevogrOverlaySelection;
        "revogr-scroll-virtual": RevogrScrollVirtual;
        "revogr-viewport": RevogrViewport;
        "revogr-viewport-scroll": RevogrViewportScroll;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "revo-grid": LocalJSX.RevoGrid & JSXBase.HTMLAttributes<HTMLRevoGridElement>;
            "revogr-data": LocalJSX.RevogrData & JSXBase.HTMLAttributes<HTMLRevogrDataElement>;
            "revogr-edit": LocalJSX.RevogrEdit & JSXBase.HTMLAttributes<HTMLRevogrEditElement>;
            "revogr-header": LocalJSX.RevogrHeader & JSXBase.HTMLAttributes<HTMLRevogrHeaderElement>;
            "revogr-overlay-selection": LocalJSX.RevogrOverlaySelection & JSXBase.HTMLAttributes<HTMLRevogrOverlaySelectionElement>;
            "revogr-scroll-virtual": LocalJSX.RevogrScrollVirtual & JSXBase.HTMLAttributes<HTMLRevogrScrollVirtualElement>;
            "revogr-viewport": LocalJSX.RevogrViewport & JSXBase.HTMLAttributes<HTMLRevogrViewportElement>;
            "revogr-viewport-scroll": LocalJSX.RevogrViewportScroll & JSXBase.HTMLAttributes<HTMLRevogrViewportScrollElement>;
        }
    }
}

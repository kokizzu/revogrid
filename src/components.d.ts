/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Edition, Observable, RevoGrid, RevoPlugin, Selection, ThemeSpace } from "./interfaces";
import { AutoSizeColumnConfig } from "./plugins/autoSizeColumn";
import { ColumnFilterConfig, FilterCaptions, FilterCollection } from "./plugins/filter/filter.plugin";
import { GroupingOptions } from "./plugins/groupingRow/grouping.row.types";
import { FocusedData } from "./components/revo-grid/viewport.service";
import { ColumnCollection } from "./services/column.data.provider";
import { DataInput } from "./plugins/export/types";
import { VNode } from "@stencil/core";
import { ColumnSource, RowSource } from "./components/data/columnService";
import { MultiFilterItem, ShowData } from "./plugins/filter/filter.pop";
import { LogicFunction } from "./plugins/filter/filter.types";
import { DataSourceState, Groups } from "./store/dataSource/data.store";
import { ViewportData } from "./components/revo-grid/viewport.interfaces";
import { ElementScroll } from "./components/revo-grid/viewport.scrolling.service";
export namespace Components {
    interface RevoGrid {
        /**
          * Add trimmed by type
         */
        "addTrimmed": (trimmed: Record<number, boolean>, trimmedType?: string, type?: RevoGrid.DimensionRows) => Promise<CustomEvent<{ trimmed: Record<number, boolean>; trimmedType: string; type: string; }>>;
        /**
          * Autosize config Enable columns autoSize, for more details check @autoSizeColumn plugin By default disabled, hence operation is not resource efficient true to enable with default params (double header separator click for autosize) or provide config
         */
        "autoSizeColumn": boolean | AutoSizeColumnConfig;
        /**
          * When true cell focus appear.
         */
        "canFocus": boolean;
        /**
          * Enables column move plugin Can be boolean
         */
        "canMoveColumns": boolean;
        /**
          * Clear current grid focus
         */
        "clearFocus": () => Promise<void>;
        /**
          * Clears column sorting
         */
        "clearSorting": () => Promise<void>;
        /**
          * Indicates default column size.
         */
        "colSize": number;
        /**
          * Types Every type represent multiple column properties Types will be merged but can be replaced with column properties
         */
        "columnTypes": { [name: string]: RevoGrid.ColumnType };
        /**
          * Columns - defines an array of grid columns. Can be column or grouped column.
         */
        "columns": (RevoGrid.ColumnRegular | RevoGrid.ColumnGrouping)[];
        /**
          * Custom editors register
         */
        "editors": Edition.Editors;
        /**
          * Enables export plugin Can be boolean Can be export options
         */
        "exporting": boolean;
        /**
          * Enables filter plugin Can be boolean Can be filter collection
         */
        "filter": boolean | ColumnFilterConfig;
        /**
          * Defines how many rows/columns should be rendered outside visible area.
         */
        "frameSize": number;
        /**
          * Provides access to column internal store observer Can be used for plugin support
          * @param type - type of column
         */
        "getColumnStore": (type?: RevoGrid.DimensionCols) => Promise<ColumnSource>;
        /**
          * Receive all columns in data source
         */
        "getColumns": () => Promise<RevoGrid.ColumnRegular[]>;
        /**
          * Get the currently focused cell.
         */
        "getFocused": () => Promise<FocusedData | null>;
        /**
          * Get all active plugins instances
         */
        "getPlugins": () => Promise<RevoPlugin.Plugin[]>;
        /**
          * Get the currently selected Range.
         */
        "getSelectedRange": () => Promise<Selection.RangeArea | null>;
        /**
          * Get data from source
         */
        "getSource": (type?: RevoGrid.DimensionRows) => Promise<RevoGrid.DataType[]>;
        /**
          * Provides access to rows internal store observer Can be used for plugin support
          * @param type - type of source
         */
        "getSourceStore": (type?: RevoGrid.DimensionRows) => Promise<RowSource>;
        /**
          * Get data from visible part of source Trimmed/filtered rows will be excluded
          * @param type - type of source
         */
        "getVisibleSource": (type?: RevoGrid.DimensionRows) => Promise<any[]>;
        /**
          * Group models by provided properties Define properties to be groped by
         */
        "grouping": GroupingOptions;
        /**
          * Pinned bottom Source: {[T in ColumnProp]: any} - defines pinned bottom rows data source.
         */
        "pinnedBottomSource": RevoGrid.DataType[];
        /**
          * Pinned top Source: {[T in ColumnProp]: any} - defines pinned top rows data source.
         */
        "pinnedTopSource": RevoGrid.DataType[];
        /**
          * Custom grid plugins Has to be predefined during first grid init Every plugin should be inherited from BasePlugin
         */
        "plugins": RevoPlugin.PluginClass[];
        /**
          * When true, user can range selection.
         */
        "range": boolean;
        /**
          * When true, grid in read only mode.
         */
        "readonly": boolean;
        /**
          * Refreshes data viewport. Can be specific part as rgRow or pinned rgRow or 'all' by default.
         */
        "refresh": (type?: RevoGrid.DimensionRows | 'all') => Promise<void>;
        /**
          * Register new virtual node inside of grid Used for additional items creation such as plugin elements
         */
        "registerVNode": (elements: VNode[]) => Promise<void>;
        /**
          * When true, columns are resizable.
         */
        "resize": boolean;
        /**
          * Row class property Define this property in rgRow object and this will be mapped as rgRow class
         */
        "rowClass": string;
        /**
          * Row properies applied
         */
        "rowDefinitions": RevoGrid.RowDefinition[];
        /**
          * Excel like show rgRow indexe per rgRow
         */
        "rowHeaders": RevoGrid.RowHeaders | boolean;
        /**
          * Indicates default rgRow size. By default 0, means theme package size will be applied
         */
        "rowSize": number;
        /**
          * Scrolls view port to specified column index
         */
        "scrollToColumnIndex": (coordinate?: number) => Promise<void>;
        /**
          * Scrolls view port to specified column prop
         */
        "scrollToColumnProp": (prop: RevoGrid.ColumnProp) => Promise<void>;
        /**
          * Scrolls view port to coordinate
         */
        "scrollToCoordinate": (cell: Partial<Selection.Cell>) => Promise<void>;
        /**
          * Scrolls view port to specified rgRow index
         */
        "scrollToRow": (coordinate?: number) => Promise<void>;
        /**
          * Bring cell to edit mode
         */
        "setCellEdit": (rgRow: number, prop: RevoGrid.ColumnProp, rowSource?: RevoGrid.DimensionRows) => Promise<void>;
        /**
          * Source - defines main data source. Can be an Object or 2 dimensional array([][]); Keys/indexes referenced from columns Prop
         */
        "source": RevoGrid.DataType[];
        /**
          * Defines stretch strategy for columns with @StretchColumn plugin if there are more space on the right last column size would be increased
         */
        "stretch": boolean | string;
        /**
          * Theme name
         */
        "theme": ThemeSpace.Theme;
        /**
          * Trimmed rows Functionality which allows to hide rows from main data set
          * @trimmedRows are physical rgRow indexes to hide
         */
        "trimmedRows": Record<number, boolean>;
        /**
          * Update column sorting
          * @param column - full column details to update
          * @param index - virtual column index
          * @param order - order to apply
         */
        "updateColumnSorting": (column: RevoGrid.ColumnRegular, index: number, order: 'asc' | 'desc', additive: boolean) => Promise<RevoGrid.ColumnRegular>;
        /**
          * Update columns
         */
        "updateColumns": (cols: RevoGrid.ColumnRegular[]) => Promise<void>;
        /**
          * When true enable clipboard.
         */
        "useClipboard": boolean;
    }
    interface RevogrClipboard {
        "doCopy": (e: DataTransfer, data?: RevoGrid.DataFormat[][]) => Promise<void>;
    }
    interface RevogrData {
        "canDrag": boolean;
        /**
          * Static stores, not expected to change during component lifetime
         */
        "colData": ColumnSource;
        "dataStore": RowSource;
        "dimensionRow": Observable<RevoGrid.DimensionSettingsState>;
        "range": boolean;
        "readonly": boolean;
        "rowClass": string;
        "rowSelectionStore": Observable<Selection.SelectionStoreState>;
        "viewportCol": Observable<RevoGrid.ViewportState>;
        "viewportRow": Observable<RevoGrid.ViewportState>;
    }
    interface RevogrEdit {
        "column": RevoGrid.ColumnRegular | null;
        "editCell": Edition.EditCell;
        /**
          * Custom editors register
         */
        "editor": Edition.EditorCtr | null;
    }
    interface RevogrFilterPanel {
        "disableDynamicFiltering": boolean;
        "filterCaptions": FilterCaptions | undefined;
        "filterEntities": Record<string, LogicFunction>;
        "filterItems": MultiFilterItem;
        "filterNames": Record<string, string>;
        "filterTypes": Record<string, string[]>;
        "getChanges": () => Promise<ShowData>;
        "show": (newEntity?: ShowData) => Promise<void>;
        "uuid": string;
    }
    interface RevogrFocus {
        /**
          * Dynamic stores
         */
        "dataStore": RowSource;
        "dimensionCol": Observable<RevoGrid.DimensionSettingsState>;
        "dimensionRow": Observable<RevoGrid.DimensionSettingsState>;
        "selectionStore": Observable<Selection.SelectionStoreState>;
    }
    interface RevogrHeader {
        "canResize": boolean;
        "colData": RevoGrid.ColumnRegular[];
        "columnFilter": boolean;
        "dimensionCol": Observable<RevoGrid.DimensionSettingsState>;
        "groupingDepth": number;
        "groups": Groups;
        "parent": string;
        "selectionStore": Observable<Selection.SelectionStoreState>;
        "viewportCol": Observable<RevoGrid.ViewportState>;
    }
    interface RevogrOrderEditor {
        "clearOrder": () => Promise<void>;
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore": Observable<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionCol": Observable<RevoGrid.DimensionSettingsState>;
        "dimensionRow": Observable<RevoGrid.DimensionSettingsState>;
        "dragStart": (e: MouseEvent) => Promise<void>;
        "endOrder": (e: MouseEvent) => Promise<void>;
        "parent": HTMLElement;
    }
    interface RevogrOverlaySelection {
        "canDrag": boolean;
        "colData": Observable<DataSourceState<RevoGrid.ColumnRegular, RevoGrid.DimensionCols>>;
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore": Observable<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionCol": Observable<RevoGrid.DimensionSettingsState>;
        "dimensionRow": Observable<RevoGrid.DimensionSettingsState>;
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
        "selectionStore": Observable<Selection.SelectionStoreState>;
        "useClipboard": boolean;
    }
    interface RevogrRowHeaders {
        "dataPorts": ViewportData[];
        "headerProp": Record<string, any>;
        "height": number;
        "resize": boolean;
        "rowHeaderColumn": RevoGrid.RowHeaders;
        "uiid": string;
    }
    interface RevogrScrollVirtual {
        "changeScroll": (e: RevoGrid.ViewPortScrollEvent) => Promise<RevoGrid.ViewPortScrollEvent>;
        "dimension": RevoGrid.DimensionType;
        "dimensionStore": Observable<RevoGrid.DimensionSettingsState>;
        "setScroll": (e: RevoGrid.ViewPortScrollEvent) => Promise<void>;
        "viewportStore": Observable<RevoGrid.ViewportState>;
    }
    interface RevogrTempRange {
        "dimensionCol": Observable<RevoGrid.DimensionSettingsState>;
        "dimensionRow": Observable<RevoGrid.DimensionSettingsState>;
        /**
          * Dynamic stores
         */
        "selectionStore": Observable<Selection.SelectionStoreState>;
    }
    interface RevogrViewportScroll {
        /**
          * update on delta in case we don't know existing position or external change
          * @param e
         */
        "changeScroll": (e: RevoGrid.ViewPortScrollEvent) => Promise<RevoGrid.ViewPortScrollEvent>;
        /**
          * Height of inner content
         */
        "contentHeight": number;
        /**
          * Width of inner content
         */
        "contentWidth": number;
        "setScroll": (e: RevoGrid.ViewPortScrollEvent) => Promise<void>;
    }
}
export interface RevoGridCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRevoGridElement;
}
export interface RevogrClipboardCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRevogrClipboardElement;
}
export interface RevogrDataCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRevogrDataElement;
}
export interface RevogrEditCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRevogrEditElement;
}
export interface RevogrFilterPanelCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRevogrFilterPanelElement;
}
export interface RevogrFocusCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRevogrFocusElement;
}
export interface RevogrHeaderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRevogrHeaderElement;
}
export interface RevogrOrderEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRevogrOrderEditorElement;
}
export interface RevogrOverlaySelectionCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRevogrOverlaySelectionElement;
}
export interface RevogrRowHeadersCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRevogrRowHeadersElement;
}
export interface RevogrScrollVirtualCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRevogrScrollVirtualElement;
}
export interface RevogrViewportScrollCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRevogrViewportScrollElement;
}
declare global {
    interface HTMLRevoGridElement extends Components.RevoGrid, HTMLStencilElement {
    }
    var HTMLRevoGridElement: {
        prototype: HTMLRevoGridElement;
        new (): HTMLRevoGridElement;
    };
    interface HTMLRevogrClipboardElement extends Components.RevogrClipboard, HTMLStencilElement {
    }
    var HTMLRevogrClipboardElement: {
        prototype: HTMLRevogrClipboardElement;
        new (): HTMLRevogrClipboardElement;
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
    interface HTMLRevogrFilterPanelElement extends Components.RevogrFilterPanel, HTMLStencilElement {
    }
    var HTMLRevogrFilterPanelElement: {
        prototype: HTMLRevogrFilterPanelElement;
        new (): HTMLRevogrFilterPanelElement;
    };
    interface HTMLRevogrFocusElement extends Components.RevogrFocus, HTMLStencilElement {
    }
    var HTMLRevogrFocusElement: {
        prototype: HTMLRevogrFocusElement;
        new (): HTMLRevogrFocusElement;
    };
    interface HTMLRevogrHeaderElement extends Components.RevogrHeader, HTMLStencilElement {
    }
    var HTMLRevogrHeaderElement: {
        prototype: HTMLRevogrHeaderElement;
        new (): HTMLRevogrHeaderElement;
    };
    interface HTMLRevogrOrderEditorElement extends Components.RevogrOrderEditor, HTMLStencilElement {
    }
    var HTMLRevogrOrderEditorElement: {
        prototype: HTMLRevogrOrderEditorElement;
        new (): HTMLRevogrOrderEditorElement;
    };
    interface HTMLRevogrOverlaySelectionElement extends Components.RevogrOverlaySelection, HTMLStencilElement {
    }
    var HTMLRevogrOverlaySelectionElement: {
        prototype: HTMLRevogrOverlaySelectionElement;
        new (): HTMLRevogrOverlaySelectionElement;
    };
    interface HTMLRevogrRowHeadersElement extends Components.RevogrRowHeaders, HTMLStencilElement {
    }
    var HTMLRevogrRowHeadersElement: {
        prototype: HTMLRevogrRowHeadersElement;
        new (): HTMLRevogrRowHeadersElement;
    };
    interface HTMLRevogrScrollVirtualElement extends Components.RevogrScrollVirtual, HTMLStencilElement {
    }
    var HTMLRevogrScrollVirtualElement: {
        prototype: HTMLRevogrScrollVirtualElement;
        new (): HTMLRevogrScrollVirtualElement;
    };
    interface HTMLRevogrTempRangeElement extends Components.RevogrTempRange, HTMLStencilElement {
    }
    var HTMLRevogrTempRangeElement: {
        prototype: HTMLRevogrTempRangeElement;
        new (): HTMLRevogrTempRangeElement;
    };
    interface HTMLRevogrViewportScrollElement extends Components.RevogrViewportScroll, HTMLStencilElement {
    }
    var HTMLRevogrViewportScrollElement: {
        prototype: HTMLRevogrViewportScrollElement;
        new (): HTMLRevogrViewportScrollElement;
    };
    interface HTMLElementTagNameMap {
        "revo-grid": HTMLRevoGridElement;
        "revogr-clipboard": HTMLRevogrClipboardElement;
        "revogr-data": HTMLRevogrDataElement;
        "revogr-edit": HTMLRevogrEditElement;
        "revogr-filter-panel": HTMLRevogrFilterPanelElement;
        "revogr-focus": HTMLRevogrFocusElement;
        "revogr-header": HTMLRevogrHeaderElement;
        "revogr-order-editor": HTMLRevogrOrderEditorElement;
        "revogr-overlay-selection": HTMLRevogrOverlaySelectionElement;
        "revogr-row-headers": HTMLRevogrRowHeadersElement;
        "revogr-scroll-virtual": HTMLRevogrScrollVirtualElement;
        "revogr-temp-range": HTMLRevogrTempRangeElement;
        "revogr-viewport-scroll": HTMLRevogrViewportScrollElement;
    }
}
declare namespace LocalJSX {
    interface RevoGrid {
        /**
          * Autosize config Enable columns autoSize, for more details check @autoSizeColumn plugin By default disabled, hence operation is not resource efficient true to enable with default params (double header separator click for autosize) or provide config
         */
        "autoSizeColumn"?: boolean | AutoSizeColumnConfig;
        /**
          * When true cell focus appear.
         */
        "canFocus"?: boolean;
        /**
          * Enables column move plugin Can be boolean
         */
        "canMoveColumns"?: boolean;
        /**
          * Indicates default column size.
         */
        "colSize"?: number;
        /**
          * Types Every type represent multiple column properties Types will be merged but can be replaced with column properties
         */
        "columnTypes"?: { [name: string]: RevoGrid.ColumnType };
        /**
          * Columns - defines an array of grid columns. Can be column or grouped column.
         */
        "columns"?: (RevoGrid.ColumnRegular | RevoGrid.ColumnGrouping)[];
        /**
          * Custom editors register
         */
        "editors"?: Edition.Editors;
        /**
          * Enables export plugin Can be boolean Can be export options
         */
        "exporting"?: boolean;
        /**
          * Enables filter plugin Can be boolean Can be filter collection
         */
        "filter"?: boolean | ColumnFilterConfig;
        /**
          * Defines how many rows/columns should be rendered outside visible area.
         */
        "frameSize"?: number;
        /**
          * Group models by provided properties Define properties to be groped by
         */
        "grouping"?: GroupingOptions;
        /**
          * Triggered after focus rendered Can be used for access to focus element Through @event.target
         */
        "onAfter-focus"?: (event: RevoGridCustomEvent<{ model: any; }>) => void;
        /**
          * After column resize Get resized columns
         */
        "onAftercolumnresize"?: (event: RevoGridCustomEvent<Record<RevoGrid.ColumnProp, RevoGrid.ColumnRegular>>) => void;
        /**
          * Column updated
         */
        "onAftercolumnsset"?: (event: RevoGridCustomEvent<{
    columns: ColumnCollection;
    order: Record<RevoGrid.ColumnProp, 'asc' | 'desc'>;
  }>) => void;
        /**
          * After edit. Triggered when after data applied or Range changeged.
         */
        "onAfteredit"?: (event: RevoGridCustomEvent<Edition.BeforeSaveDataDetails | Edition.BeforeRangeSaveDataDetails>) => void;
        /**
          * After rows updated
         */
        "onAftersourceset"?: (event: RevoGridCustomEvent<{
    type: RevoGrid.DimensionRows;
    source: RevoGrid.DataType[];
  }>) => void;
        /**
          * Notify trimmed applied
         */
        "onAftertrimmed"?: (event: RevoGridCustomEvent<any>) => void;
        /**
          * Before range apply. Triggered before range applied. Use e.preventDefault() to prevent range.
         */
        "onBeforeaange"?: (event: RevoGridCustomEvent<Selection.ChangedRange>) => void;
        /**
          * Before autofill. Triggered before autofill applied. Use e.preventDefault() to prevent edit data apply.
         */
        "onBeforeautofill"?: (event: RevoGridCustomEvent<Selection.ChangedRange>) => void;
        /**
          * Before cell focus changed. Use e.preventDefault() to prevent cell focus change.
         */
        "onBeforecellfocus"?: (event: RevoGridCustomEvent<Edition.BeforeSaveDataDetails>) => void;
        /**
          * Before column applied but after column set gathered and viewport updated
         */
        "onBeforecolumnapplied"?: (event: RevoGridCustomEvent<ColumnCollection>) => void;
        /**
          * Before column update
         */
        "onBeforecolumnsset"?: (event: RevoGridCustomEvent<ColumnCollection>) => void;
        /**
          * Before edit event. Triggered before edit data applied. Use e.preventDefault() to prevent edit data set and use you own. Use e.val = {your value} to replace edit result with your own.
         */
        "onBeforeedit"?: (event: RevoGridCustomEvent<Edition.BeforeSaveDataDetails>) => void;
        /**
          * Before edit started Use e.preventDefault() to prevent edit
         */
        "onBeforeeditstart"?: (event: RevoGridCustomEvent<Edition.BeforeSaveDataDetails>) => void;
        /**
          * Before export Use e.preventDefault() to prevent export Replace data in Event in case you want to modify it in export
         */
        "onBeforeexport"?: (event: RevoGridCustomEvent<DataInput>) => void;
        /**
          * Before filter applied to data source Use e.preventDefault() to prevent cell focus change Update @collection if you wish to change filters
         */
        "onBeforefilterapply"?: (event: RevoGridCustomEvent<{ collection: FilterCollection }>) => void;
        /**
          * Before filter trimmed values Use e.preventDefault() to prevent value trimming and filter apply Update @collection if you wish to change filters Update @itemsToFilter if you wish to filter indexes of trimming
         */
        "onBeforefiltertrimmed"?: (event: RevoGridCustomEvent<{ collection: FilterCollection; itemsToFilter: Record<number, boolean> }>) => void;
        /**
          * Before grid focus lost happened. Use e.preventDefault() to prevent cell focus change.
         */
        "onBeforefocuslost"?: (event: RevoGridCustomEvent<FocusedData|null>) => void;
        /**
          * Before range edit event. Triggered before range data applied, when range selection happened. Use e.preventDefault() to prevent edit data set and use you own.
         */
        "onBeforerangeedit"?: (event: RevoGridCustomEvent<Edition.BeforeRangeSaveDataDetails>) => void;
        /**
          * Before sorting event. Initial sorting triggered, if this event stops no other event called. Use e.preventDefault() to prevent sorting.
         */
        "onBeforesorting"?: (event: RevoGridCustomEvent<{
    column: RevoGrid.ColumnRegular;
    order: 'desc' | 'asc';
    additive: boolean;
  }>) => void;
        /**
          * Before sorting apply. Use e.preventDefault() to prevent sorting data change.
         */
        "onBeforesortingapply"?: (event: RevoGridCustomEvent<{
    column: RevoGrid.ColumnRegular;
    order: 'desc' | 'asc';
    additive: boolean;
  }>) => void;
        /**
          * Before data apply. You can override data source here
         */
        "onBeforesourceset"?: (event: RevoGridCustomEvent<{
    type: RevoGrid.DimensionRows;
    source: RevoGrid.DataType[];
  }>) => void;
        /**
          * Before source update sorting apply. Use this event if you intended to prevent sorting on data update. Use e.preventDefault() to prevent sorting data change during rows source update.
         */
        "onBeforesourcesortingapply"?: (event: RevoGridCustomEvent<any>) => void;
        /**
          * Before trimmed values Use e.preventDefault() to prevent value trimming Update @trimmed if you wish to filter indexes of trimming
         */
        "onBeforetrimmed"?: (event: RevoGridCustomEvent<{ trimmed: Record<number, boolean>; trimmedType: string; type: string }>) => void;
        /**
          * On header click.
         */
        "onHeaderclick"?: (event: RevoGridCustomEvent<RevoGrid.ColumnRegular>) => void;
        /**
          * Row order change started. Use e.preventDefault() to prevent rgRow order change. Use e.text = 'new name' to change item name on start.
         */
        "onRowdragstart"?: (event: RevoGridCustomEvent<{ pos: RevoGrid.PositionItem; text: string }>) => void;
        /**
          * Before rgRow order apply. Use e.preventDefault() to prevent rgRow order change.
         */
        "onRoworderchanged"?: (event: RevoGridCustomEvent<{ from: number; to: number }>) => void;
        /**
          * Triggered when view port scrolled
         */
        "onViewportscroll"?: (event: RevoGridCustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
        /**
          * Pinned bottom Source: {[T in ColumnProp]: any} - defines pinned bottom rows data source.
         */
        "pinnedBottomSource"?: RevoGrid.DataType[];
        /**
          * Pinned top Source: {[T in ColumnProp]: any} - defines pinned top rows data source.
         */
        "pinnedTopSource"?: RevoGrid.DataType[];
        /**
          * Custom grid plugins Has to be predefined during first grid init Every plugin should be inherited from BasePlugin
         */
        "plugins"?: RevoPlugin.PluginClass[];
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
          * Row class property Define this property in rgRow object and this will be mapped as rgRow class
         */
        "rowClass"?: string;
        /**
          * Row properies applied
         */
        "rowDefinitions"?: RevoGrid.RowDefinition[];
        /**
          * Excel like show rgRow indexe per rgRow
         */
        "rowHeaders"?: RevoGrid.RowHeaders | boolean;
        /**
          * Indicates default rgRow size. By default 0, means theme package size will be applied
         */
        "rowSize"?: number;
        /**
          * Source - defines main data source. Can be an Object or 2 dimensional array([][]); Keys/indexes referenced from columns Prop
         */
        "source"?: RevoGrid.DataType[];
        /**
          * Defines stretch strategy for columns with @StretchColumn plugin if there are more space on the right last column size would be increased
         */
        "stretch"?: boolean | string;
        /**
          * Theme name
         */
        "theme"?: ThemeSpace.Theme;
        /**
          * Trimmed rows Functionality which allows to hide rows from main data set
          * @trimmedRows are physical rgRow indexes to hide
         */
        "trimmedRows"?: Record<number, boolean>;
        /**
          * When true enable clipboard.
         */
        "useClipboard"?: boolean;
    }
    interface RevogrClipboard {
        "onCopyRegion"?: (event: RevogrClipboardCustomEvent<DataTransfer>) => void;
        "onPasteRegion"?: (event: RevogrClipboardCustomEvent<string[][]>) => void;
    }
    interface RevogrData {
        "canDrag"?: boolean;
        /**
          * Static stores, not expected to change during component lifetime
         */
        "colData"?: ColumnSource;
        "dataStore"?: RowSource;
        "dimensionRow"?: Observable<RevoGrid.DimensionSettingsState>;
        "onDragStartCell"?: (event: RevogrDataCustomEvent<MouseEvent>) => void;
        "range"?: boolean;
        "readonly"?: boolean;
        "rowClass"?: string;
        "rowSelectionStore"?: Observable<Selection.SelectionStoreState>;
        "viewportCol"?: Observable<RevoGrid.ViewportState>;
        "viewportRow"?: Observable<RevoGrid.ViewportState>;
    }
    interface RevogrEdit {
        "column"?: RevoGrid.ColumnRegular | null;
        "editCell"?: Edition.EditCell;
        /**
          * Custom editors register
         */
        "editor"?: Edition.EditorCtr | null;
        "onCellEdit"?: (event: RevogrEditCustomEvent<Edition.SaveDataDetails>) => void;
        /**
          * Close editor event
         */
        "onCloseEdit"?: (event: RevogrEditCustomEvent<boolean | undefined>) => void;
    }
    interface RevogrFilterPanel {
        "disableDynamicFiltering"?: boolean;
        "filterCaptions"?: FilterCaptions | undefined;
        "filterEntities"?: Record<string, LogicFunction>;
        "filterItems"?: MultiFilterItem;
        "filterNames"?: Record<string, string>;
        "filterTypes"?: Record<string, string[]>;
        "onFilterChange"?: (event: RevogrFilterPanelCustomEvent<MultiFilterItem>) => void;
        "uuid"?: string;
    }
    interface RevogrFocus {
        /**
          * Dynamic stores
         */
        "dataStore": RowSource;
        "dimensionCol": Observable<RevoGrid.DimensionSettingsState>;
        "dimensionRow": Observable<RevoGrid.DimensionSettingsState>;
        "onAfter-focus"?: (event: RevogrFocusCustomEvent<{
    model: any;
  }>) => void;
        "selectionStore": Observable<Selection.SelectionStoreState>;
    }
    interface RevogrHeader {
        "canResize"?: boolean;
        "colData"?: RevoGrid.ColumnRegular[];
        "columnFilter"?: boolean;
        "dimensionCol"?: Observable<RevoGrid.DimensionSettingsState>;
        "groupingDepth"?: number;
        "groups"?: Groups;
        "onHeaderdblClick"?: (event: RevogrHeaderCustomEvent<RevoGrid.InitialHeaderClick>) => void;
        "onHeaderresize"?: (event: RevogrHeaderCustomEvent<RevoGrid.ViewSettingSizeProp>) => void;
        "onInitialHeaderClick"?: (event: RevogrHeaderCustomEvent<RevoGrid.InitialHeaderClick>) => void;
        "parent"?: string;
        "selectionStore"?: Observable<Selection.SelectionStoreState>;
        "viewportCol"?: Observable<RevoGrid.ViewportState>;
    }
    interface RevogrOrderEditor {
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore"?: Observable<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionCol"?: Observable<RevoGrid.DimensionSettingsState>;
        "dimensionRow"?: Observable<RevoGrid.DimensionSettingsState>;
        /**
          * Row dragged, new range ready to be applied
         */
        "onInitialRowDropped"?: (event: RevogrOrderEditorCustomEvent<{ from: number; to: number }>) => void;
        /**
          * Row move
         */
        "onInternalRowDrag"?: (event: RevogrOrderEditorCustomEvent<RevoGrid.PositionItem>) => void;
        /**
          * Row drag ended
         */
        "onInternalRowDragEnd"?: (event: RevogrOrderEditorCustomEvent<any>) => void;
        /**
          * Row drag started
         */
        "onInternalRowDragStart"?: (event: RevogrOrderEditorCustomEvent<{
    cell: Selection.Cell;
    text: string;
    pos: RevoGrid.PositionItem;
    event: MouseEvent;
  }>) => void;
        /**
          * Row mouse move
         */
        "onInternalRowMouseMove"?: (event: RevogrOrderEditorCustomEvent<Selection.Cell>) => void;
        "parent"?: HTMLElement;
    }
    interface RevogrOverlaySelection {
        "canDrag"?: boolean;
        "colData"?: Observable<DataSourceState<RevoGrid.ColumnRegular, RevoGrid.DimensionCols>>;
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore"?: Observable<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionCol"?: Observable<RevoGrid.DimensionSettingsState>;
        "dimensionRow"?: Observable<RevoGrid.DimensionSettingsState>;
        /**
          * Custom editors register
         */
        "editors"?: Edition.Editors;
        /**
          * Last cell position
         */
        "lastCell"?: Selection.Cell;
        "onFocusCell"?: (event: RevogrOverlaySelectionCustomEvent<Selection.FocusedCells>) => void;
        "onInternalCellEdit"?: (event: RevogrOverlaySelectionCustomEvent<Edition.BeforeSaveDataDetails>) => void;
        "onInternalCopy"?: (event: RevogrOverlaySelectionCustomEvent<any>) => void;
        "onInternalFocusCell"?: (event: RevogrOverlaySelectionCustomEvent<Edition.BeforeSaveDataDetails>) => void;
        "onInternalPaste"?: (event: RevogrOverlaySelectionCustomEvent<any>) => void;
        /**
          * Range data apply
         */
        "onInternalRangeDataApply"?: (event: RevogrOverlaySelectionCustomEvent<Edition.BeforeRangeSaveDataDetails>) => void;
        /**
          * Selection range changed
         */
        "onInternalSelectionChanged"?: (event: RevogrOverlaySelectionCustomEvent<Selection.ChangedRange>) => void;
        "onSetEdit"?: (event: RevogrOverlaySelectionCustomEvent<Edition.BeforeEdit>) => void;
        "onSetRange"?: (event: RevogrOverlaySelectionCustomEvent<Selection.RangeArea>) => void;
        "onSetTempRange"?: (event: RevogrOverlaySelectionCustomEvent<Selection.TempRange | null>) => void;
        "range"?: boolean;
        "readonly"?: boolean;
        /**
          * Dynamic stores
         */
        "selectionStore"?: Observable<Selection.SelectionStoreState>;
        "useClipboard"?: boolean;
    }
    interface RevogrRowHeaders {
        "dataPorts"?: ViewportData[];
        "headerProp"?: Record<string, any>;
        "height"?: number;
        "onElementToScroll"?: (event: RevogrRowHeadersCustomEvent<ElementScroll>) => void;
        "onScrollViewport"?: (event: RevogrRowHeadersCustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
        "resize"?: boolean;
        "rowHeaderColumn"?: RevoGrid.RowHeaders;
        "uiid"?: string;
    }
    interface RevogrScrollVirtual {
        "dimension"?: RevoGrid.DimensionType;
        "dimensionStore"?: Observable<RevoGrid.DimensionSettingsState>;
        "onScrollVirtual"?: (event: RevogrScrollVirtualCustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
        "viewportStore"?: Observable<RevoGrid.ViewportState>;
    }
    interface RevogrTempRange {
        "dimensionCol"?: Observable<RevoGrid.DimensionSettingsState>;
        "dimensionRow"?: Observable<RevoGrid.DimensionSettingsState>;
        /**
          * Dynamic stores
         */
        "selectionStore"?: Observable<Selection.SelectionStoreState>;
    }
    interface RevogrViewportScroll {
        /**
          * Height of inner content
         */
        "contentHeight"?: number;
        /**
          * Width of inner content
         */
        "contentWidth"?: number;
        "onResizeViewport"?: (event: RevogrViewportScrollCustomEvent<RevoGrid.ViewPortResizeEvent>) => void;
        "onScrollViewport"?: (event: RevogrViewportScrollCustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
        "onScrollchange"?: (event: RevogrViewportScrollCustomEvent<{ type: RevoGrid.DimensionType; hasScroll: boolean; }>) => void;
    }
    interface IntrinsicElements {
        "revo-grid": RevoGrid;
        "revogr-clipboard": RevogrClipboard;
        "revogr-data": RevogrData;
        "revogr-edit": RevogrEdit;
        "revogr-filter-panel": RevogrFilterPanel;
        "revogr-focus": RevogrFocus;
        "revogr-header": RevogrHeader;
        "revogr-order-editor": RevogrOrderEditor;
        "revogr-overlay-selection": RevogrOverlaySelection;
        "revogr-row-headers": RevogrRowHeaders;
        "revogr-scroll-virtual": RevogrScrollVirtual;
        "revogr-temp-range": RevogrTempRange;
        "revogr-viewport-scroll": RevogrViewportScroll;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "revo-grid": LocalJSX.RevoGrid & JSXBase.HTMLAttributes<HTMLRevoGridElement>;
            "revogr-clipboard": LocalJSX.RevogrClipboard & JSXBase.HTMLAttributes<HTMLRevogrClipboardElement>;
            "revogr-data": LocalJSX.RevogrData & JSXBase.HTMLAttributes<HTMLRevogrDataElement>;
            "revogr-edit": LocalJSX.RevogrEdit & JSXBase.HTMLAttributes<HTMLRevogrEditElement>;
            "revogr-filter-panel": LocalJSX.RevogrFilterPanel & JSXBase.HTMLAttributes<HTMLRevogrFilterPanelElement>;
            "revogr-focus": LocalJSX.RevogrFocus & JSXBase.HTMLAttributes<HTMLRevogrFocusElement>;
            "revogr-header": LocalJSX.RevogrHeader & JSXBase.HTMLAttributes<HTMLRevogrHeaderElement>;
            "revogr-order-editor": LocalJSX.RevogrOrderEditor & JSXBase.HTMLAttributes<HTMLRevogrOrderEditorElement>;
            "revogr-overlay-selection": LocalJSX.RevogrOverlaySelection & JSXBase.HTMLAttributes<HTMLRevogrOverlaySelectionElement>;
            "revogr-row-headers": LocalJSX.RevogrRowHeaders & JSXBase.HTMLAttributes<HTMLRevogrRowHeadersElement>;
            "revogr-scroll-virtual": LocalJSX.RevogrScrollVirtual & JSXBase.HTMLAttributes<HTMLRevogrScrollVirtualElement>;
            "revogr-temp-range": LocalJSX.RevogrTempRange & JSXBase.HTMLAttributes<HTMLRevogrTempRangeElement>;
            "revogr-viewport-scroll": LocalJSX.RevogrViewportScroll & JSXBase.HTMLAttributes<HTMLRevogrViewportScrollElement>;
        }
    }
}

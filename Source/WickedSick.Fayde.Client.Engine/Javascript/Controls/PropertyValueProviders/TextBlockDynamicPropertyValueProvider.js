/// <reference path="../../Core/PropertyValueProviders/FrameworkElementPropertyValueProvider.js"/>
/// CODE

//#region _TextBlockDynamicPropertyValueProvider
var _TextBlockDynamicPropertyValueProvider = Nullstone.Create("_TextBlockDynamicPropertyValueProvider", FrameworkElementPropertyValueProvider, 2);

_TextBlockDynamicPropertyValueProvider.Instance.Init = function (obj, propPrecedence) {
    this.Init$FrameworkElementPropertyValueProvider(obj, propPrecedence);
    this._BaselineOffsetValue = null;
    this._TextValue = null;
};
_TextBlockDynamicPropertyValueProvider.Instance.GetPropertyValue = function (propd) {
    if (propd._ID === TextBlock.BaselineOffsetProperty._ID) {
        var layout = this._Object._Layout;
        if (!layout)
            return 0;
        return layout.GetBaselineOffset();
    }
    return this.GetPropertyValue$FrameworkElementPropertyValueProvider(propd);
};

Nullstone.FinishCreate(_TextBlockDynamicPropertyValueProvider);
//#endregion
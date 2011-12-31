﻿/// <reference path="FrameworkElement.js" />
/// <reference path="PropertyValueProviders/InheritedIsEnabled.js"/>

Control.prototype = new FrameworkElement;
Control.prototype.constructor = Control;
function Control() {
    FrameworkElement.call(this);

    this._Providers[_PropertyPrecedence.IsEnabled] = new _InheritedIsEnabledPropertyValueProvider(this, _PropertyPrecedence.IsEnabled);
}

//////////////////////////////////////////
// DEPENDENCY PROPERTIES
//////////////////////////////////////////
Control.BackgroundProperty = DependencyProperty.Register("Background", Control);
Control.prototype.GetBackground = function () {
    return this.GetValue(Control.BackgroundProperty);
};
Control.prototype.SetBackground = function (value) {
    this.SetValue(Control.BackgroundProperty, value);
};

Control.BorderBrushProperty = DependencyProperty.Register("BorderBrush", Control);
Control.prototype.GetBorderBrush = function () {
    return this.GetValue(Control.BorderBrushProperty);
};
Control.prototype.SetBorderBrush = function (value) {
    this.SetValue(Control.BorderBrushProperty, value);
};

Control.BorderThicknessProperty = DependencyProperty.Register("BorderThickness", Control, new Thickness());
Control.prototype.GetBorderThickness = function () {
    return this.GetValue(Control.BorderThicknessProperty);
};
Control.prototype.SetBorderThickness = function (value) {
    this.SetValue(Control.BorderThicknessProperty, value);
};

Control.FontFamilyProperty = DependencyProperty.Register("FontFamily", Control);
Control.prototype.GetFontFamily = function () {
    return this.GetValue(Control.FontFamilyProperty);
};
Control.prototype.SetFontFamily = function (value) {
    this.SetValue(Control.FontFamilyProperty, value);
};

Control.FontSizeProperty = DependencyProperty.Register("FontSize", Control);
Control.prototype.GetFontSize = function () {
    return this.GetValue(Control.FontSizeProperty);
};
Control.prototype.SetFontSize = function (value) {
    this.SetValue(Control.FontSizeProperty, value);
};

Control.FontStretchProperty = DependencyProperty.Register("FontStretch", Control);
Control.prototype.GetFontStretch = function () {
    return this.GetValue(Control.FontStretchProperty);
};
Control.prototype.SetFontStretch = function (value) {
    this.SetValue(Control.FontStretchProperty, value);
};

Control.FontStyleProperty = DependencyProperty.Register("FontStyle", Control);
Control.prototype.GetFontStyle = function () {
    return this.GetValue(Control.FontStyleProperty);
};
Control.prototype.SetFontStyle = function (value) {
    this.SetValue(Control.FontStyleProperty, value);
};

Control.FontWeightProperty = DependencyProperty.Register("FontWeight", Control);
Control.prototype.GetFontWeight = function () {
    return this.GetValue(Control.FontWeightProperty);
};
Control.prototype.SetFontWeight = function (value) {
    this.SetValue(Control.FontWeightProperty, value);
};

Control.ForegroundProperty = DependencyProperty.Register("Foreground", Control);
Control.prototype.GetForeground = function () {
    return this.GetValue(Control.ForegroundProperty);
};
Control.prototype.SetForeground = function (value) {
    this.SetValue(Control.ForegroundProperty, value);
};

Control.HorizontalContentAlignmentProperty = DependencyProperty.Register("HorizontalContentAlignment", Control, HorizontalAlignment.Center);
Control.prototype.GetHorizontalContentAlignment = function () {
    return this.GetValue(Control.HorizontalContentAlignmentProperty);
};
Control.prototype.SetHorizontalContentAlignment = function (value) {
    this.SetValue(Control.HorizontalContentAlignmentProperty, value);
};

Control.IsEnabledProperty = DependencyProperty.Register("IsEnabled", Control, true);
Control.prototype.GetIsEnabled = function () {
    return this.GetValue(Control.IsEnabledProperty);
};
Control.prototype.SetIsEnabled = function (value) {
    this.SetValue(Control.IsEnabledProperty, value);
};

Control.IsTemplateItemProperty = DependencyProperty.Register("IsTemplateItem", Control);
Control.prototype.GetIsTemplateItem = function () {
    return this.GetValue(Control.IsTemplateItemProperty);
};
Control.prototype.SetIsTemplateItem = function (value) {
    this.SetValue(Control.IsTemplateItemProperty, value);
};

Control.IsTabStopProperty = DependencyProperty.Register("IsTabStop", Control, true);
Control.prototype.GetIsTabStop = function () {
    return this.GetValue(Control.IsTabStopProperty);
};
Control.prototype.SetIsTabStop = function (value) {
    this.SetValue(Control.IsTabStopProperty, value);
};

Control.PaddingProperty = DependencyProperty.Register("Padding", Control, new Thickness());
Control.prototype.GetPadding = function () {
    return this.GetValue(Control.PaddingProperty);
};
Control.prototype.SetPadding = function (value) {
    this.SetValue(Control.PaddingProperty, value);
};

Control.TabIndexProperty = DependencyProperty.Register("TabIndex", Control, Number.MAX_VALUE);
Control.prototype.GetTabIndex = function () {
    return this.GetValue(Control.TabIndexProperty);
};
Control.prototype.SetTabIndex = function (value) {
    this.SetValue(Control.TabIndexProperty, value);
};

Control.TabNavigationProperty = DependencyProperty.Register("TabNavigation", Control);
Control.prototype.GetTabNavigation = function () {
    return this.GetValue(Control.TabNavigationProperty);
};
Control.prototype.SetTabNavigation = function (value) {
    this.SetValue(Control.TabNavigationProperty, value);
};

Control.TemplateProperty = DependencyProperty.Register("Template", Control);
Control.prototype.GetTemplate = function () {
    return this.GetValue(Control.TemplateProperty);
};
Control.prototype.SetTemplate = function (value) {
    this.SetValue(Control.TemplateProperty, value);
};

Control.VerticalContentAlignmentProperty = DependencyProperty.Register("VerticalContentAlignment", Control, VerticalAlignment.Center);
Control.prototype.GetVerticalContentAlignment = function () {
    return this.GetValue(Control.VerticalContentAlignmentProperty);
};
Control.prototype.SetVerticalContentAlignment = function (value) {
    this.SetValue(Control.VerticalContentAlignmentProperty, value);
};

Control.DefaultStyleKeyProperty = DependencyProperty.Register("DefaultStyleKey", Control);
Control.prototype.GetDefaultStyleKey = function () {
    return this.GetValue(Control.DefaultStyleKeyProperty);
};
Control.prototype.SetDefaultStyleKey = function (value) {
    this.SetValue(Control.DefaultStyleKeyProperty, value);
};

//////////////////////////////////////////
// INSTANCE METHODS
//////////////////////////////////////////
Control.prototype._ElementAdded = function (item) {
    var error;
    item._AddParent(this, error);
    this._SetSubtreeObject(item);
    FrameworkElement.prototype._ElementAdded.call(this, item);
};
Control.prototype._ElementRemoved = function (item) {
    var error;
    if (this._TemplateRoot) {
        this._TemplateRoot._RemoveParent(this, error);
        this._TemplateRoot = null;
    }
    item._RemoveParent(this, error);
    FrameworkElement.prototype._ElementRemoved.call(this, item);
};
Control.prototype.GetTemplateChild = function (name) {
    if (this._TemplateRoot)
        return this._TemplateRoot.FindName(name);
    return null;
};

Control.prototype._InsideObject = function (x, y) {
    return false;
};

Control.prototype.SetVisualParent = function (visualParent) {
    if (this.GetVisualParent() != visualParent) {
        FrameworkElement.prototype.SetVisualParent.call(this, visualParent);
        this._Providers[_PropertyPrecedence.IsEnabled].SetDataSource(this._GetLogicalParent());
    }
};

Control.prototype._UpdateIsEnabledSource = function (control) {
    this._Providers[_PropertyPrecedence.IsEnabled].SetDataSource(control);
};

Control.prototype._OnPropertyChanged = function (args, error) {
    if (args.Property.OwnerType !== Control) {
        FrameworkElement.prototype._OnPropertyChanged.call(this, args, error);
        return;
    }

    if (args.Property == Control.TemplateProperty) {
    } else if (args.Property == Control.PaddingProperty
        || args.Property == Control.BorderThicknessProperty) {
        this._InvalidateMeasure();
    } else if (args.Property == Control.IsEnabledProperty) {
        if (!args.NewValue) {
            //TODO: Remove element from focus
            //TODO: Release Mouse Capture
        }
        //TODO: IsEnabledChanged Event
    } else if (args.Property == Control.HorizontalContentAlignmentProperty
        || args.Property == Control.VerticalContentAlignmentProperty) {
        this._InvalidateArrange();
    }
    this.PropertyChanged.Raise(this, args);
};
Control.prototype._OnLogicalParentChanged = function (oldParent, newParent) {
    FrameworkElement.prototype._OnLogicalParentChanged.call(this, oldParent, newParent);
    this._Providers[_PropertyPrecedence.IsEnabled].SetDataSource(newParent);
};
Control.prototype._OnIsAttachedChanged = function (value) {
    FrameworkElement.prototype._OnIsAttachedChanged.call(this, value);
    this._Providers[_PropertyPrecedence.IsEnabled].SetDataSource(this._GetLogicalParent());
};

Control.prototype._DoApplyTemplateWithError = function (error) {
    var t = this.GetTemplate();
    if (!t)
        return FrameworkElement.prototype._DoApplyTemplateWithError.call(this, error);

    var root = t._GetVisualTreeWithError(this, error);
    if (root && !(root instanceof UIElement)) {
        //Warn: root was not a UIElement
        root = null;
    }

    if (!root)
        return FrameworkElement.prototype._DoApplyTemplateWithError.call(this, error);

    if (this._TemplateRoot != root && this._TemplateRoot != null) {
        this._TemplateRoot._RemoveParent(this, null);
        this._TemplateRoot = null;
    }

    this._TemplateRoot = root;

    this._ElementAdded(this._TemplateRoot);

    if (this._IsLoaded) {
        //Deployment Loaded Event (Async)
    }

    return true;
};
/// <reference path="../Runtime/Nullstone.js" />
/// <reference path="Primitives/ButtonBase.js"/>
/// CODE

//#region HyperlinkButton
var HyperlinkButton = Nullstone.Create("HyperlinkButton", ButtonBase);

//#region Dependency Properties

HyperlinkButton.NavigateUriProperty = DependencyProperty.Register("NavigateUri", function () { return Uri; }, HyperlinkButton);
HyperlinkButton.TargetNameProperty = DependencyProperty.Register("TargetName", function () { return String; }, HyperlinkButton);

Nullstone.AutoProperties(HyperlinkButton, [
    HyperlinkButton.NavigateUriProperty,
    HyperlinkButton.TargetNameProperty
]);

//#endregion

HyperlinkButton.Instance.OnApplyTemplate = function () {
    this.OnApplyTemplate$ButtonBase();
    this.UpdateVisualState(false);
};

HyperlinkButton.Instance.OnClick = function () {
    this.OnClick$ButtonBase();
    if (this.NavigateUri != null) {
        this._Navigate();
    }
};

HyperlinkButton.Instance._GetAbsoluteUri = function () {
    /// <returns type="Uri" />
    var destination = this.NavigateUri;
    if (!destination.IsAbsoluteUri) {
        var original = destination.OriginalString;
        if (original && original.charAt(0) !== '/')
            throw new NotSupportedException();
        destination = new Uri(App.Instance.GetHost().GetSource(), destination);
    }
    return destination;
};
HyperlinkButton.Instance._ChangeVisualState = function (useTransitions) {
    if (!this.IsEnabled) {
        this._GoToState(useTransitions, "Disabled");
    } else if (this.IsPressed) {
        this._GoToState(useTransitions, "Pressed");
    } else if (this.IsMouseOver) {
        this._GoToState(useTransitions, "MouseOver");
    } else {
        this._GoToState(useTransitions, "Normal");
    }

    if (this.IsFocused && this.IsEnabled) {
        this._GoToState(useTransitions, "Focused");
    } else {
        this._GoToState(useTransitions, "Unfocused");
    }
};
HyperlinkButton.Instance._Navigate = function () {
    window.location.href = this.NavigateUri.toString();
    //NotImplemented("HyperlinkButton._Navigate(this.NavigateUri, this.TargetName)");
};

//#region Default Style

HyperlinkButton.Instance.GetDefaultStyle = function () {
    var styleJson = {
        Type: Style,
        Props: {
            TargetType: HyperlinkButton
        },
        Children: [
            {
                Type: Setter,
                Props: {
                    Property: DependencyProperty.GetDependencyProperty(HyperlinkButton, "Cursor"),
                    Value: CursorType.Hand
                }
            },
            {
                Type: Setter,
                Props: {
                    Property: DependencyProperty.GetDependencyProperty(HyperlinkButton, "Foreground"),
                    Value: new SolidColorBrush(Color.FromHex("#FF73A9D8"))
                }
            },
            {
                Type: Setter,
                Props: {
                    Property: DependencyProperty.GetDependencyProperty(HyperlinkButton, "Padding"),
                    Value: new Thickness(2, 0, 2, 0)
                }
            },
            {
                Type: Setter,
                Props: {
                    Property: DependencyProperty.GetDependencyProperty(HyperlinkButton, "HorizontalContentAlignment"),
                    Value: HorizontalAlignment.Left
                }
            },
            {
                Type: Setter,
                Props: {
                    Property: DependencyProperty.GetDependencyProperty(HyperlinkButton, "VerticalContentAlignment"),
                    Value: VerticalAlignment.Top
                }
            },
            {
                Type: Setter,
                Props: {
                    Property: DependencyProperty.GetDependencyProperty(HyperlinkButton, "Background"),
                    Value: new SolidColorBrush(Color.FromHex("#00FFFFFF"))
                }
            },
            {
                Type: Setter,
                Props: {
                    Property: DependencyProperty.GetDependencyProperty(HyperlinkButton, "Template"),
                    Value: new ControlTemplate(HyperlinkButton, {
                        Type: Grid,
                        Name: "RootElement",
                        Props: {
                            Cursor: new TemplateBindingMarkup("Cursor"),
                            Background: new TemplateBindingMarkup("Background")
                        },
                        AttachedProps: [
                            {
                                Owner: VisualStateManager,
                                Prop: "VisualStateGroups",
                                Value: [
                                {
                                    Type: VisualStateGroup,
                                    Name: "CommonStates",
                                    Children: [
                                        {
                                            Type: VisualState,
                                            Name: "Normal"
                                        },
                                        {
                                            Type: VisualState,
                                            Name: "MouseOver",
                                            Content: {
                                                Type: Storyboard,
                                                Children: [
                                                    {
                                                        Type: ObjectAnimationUsingKeyFrames,
                                                        Props: { Duration: new Duration(0.0) },
                                                        AttachedProps: [
                                                            { Owner: Storyboard, Prop: "TargetName", Value: "UnderlineTextBlock" },
                                                            { Owner: Storyboard, Prop: "TargetProperty", Value: new _PropertyPath("Visibility") }
                                                        ],
                                                        Children: [
                                                            {
                                                                Type: DiscreteObjectKeyFrame,
                                                                Props:
                                                                {
                                                                    KeyTime: new KeyTime(0.0),
                                                                    Value: Visibility.Visible
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            Type: VisualState,
                                            Name: "Pressed",
                                            Content: {
                                                Type: Storyboard,
                                                Children: [
                                                    {
                                                        Type: ObjectAnimationUsingKeyFrames,
                                                        Props: { Duration: new Duration(0.0) },
                                                        AttachedProps: [
                                                            { Owner: Storyboard, Prop: "TargetName", Value: "UnderlineTextBlock" },
                                                            { Owner: Storyboard, Prop: "TargetProperty", Value: new _PropertyPath("Visibility") }
                                                        ],
                                                        Children: [
                                                            {
                                                                Type: DiscreteObjectKeyFrame,
                                                                Props:
                                                                {
                                                                    KeyTime: new KeyTime(0.0),
                                                                    Value: Visibility.Visible
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            Type: VisualState,
                                            Name: "Disabled",
                                            Content: {
                                                Type: Storyboard,
                                                Children: [
                                                    {
                                                        Type: ObjectAnimationUsingKeyFrames,
                                                        Props: { Duration: new Duration(0.0) },
                                                        AttachedProps: [
                                                            { Owner: Storyboard, Prop: "TargetName", Value: "DisabledOverlay" },
                                                            { Owner: Storyboard, Prop: "TargetProperty", Value: new _PropertyPath("Visibility") }
                                                        ],
                                                        Children: [
                                                            {
                                                                Type: DiscreteObjectKeyFrame,
                                                                Props:
                                                                {
                                                                    KeyTime: new KeyTime(0.0),
                                                                    Value: Visibility.Visible
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                {
                                    Type: VisualStateGroup,
                                    Name: "FocusStates",
                                    Children: [
                                        {
                                            Type: VisualState,
                                            Name: "Unfocused"
                                        },
                                        {
                                            Type: VisualState,
                                            Name: "Focused",
                                            Content: {
                                                Type: Storyboard,
                                                Children: [
                                                    {
                                                        Type: DoubleAnimation,
                                                        Props: { Duration: new Duration(0.0), To: 1.0 },
                                                        AttachedProps: [
                                                            { Owner: Storyboard, Prop: "TargetName", Value: "FocusVisualElement" },
                                                            { Owner: Storyboard, Prop: "TargetProperty", Value: new _PropertyPath("Opacity") }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ]
                            }
                        ],
                        Children: [
                            {
                                Type: TextBlock,
                                Name: "UnderlineTextBlock",
                                Props: {
                                    Text: new TemplateBindingMarkup("Content"),
                                    HorizontalAlignment: new TemplateBindingMarkup("HorizontalContentAlignment"),
                                    VerticalAlignment: new TemplateBindingMarkup("VerticalContentAlignment"),
                                    Margin: new TemplateBindingMarkup("Padding"),
                                    TextDecorations: TextDecorations.Underline,
                                    Visibility: Visibility.Collapsed
                                }
                            },
                            {
                                Type: TextBlock,
                                Name: "DisabledOverlay",
                                Props: {
                                    Text: new TemplateBindingMarkup("Content"),
                                    Foreground: new SolidColorBrush(Color.FromHex("#FFAAAAAA")),
                                    HorizontalAlignment: new TemplateBindingMarkup("HorizontalContentAlignment"),
                                    VerticalAlignment: new TemplateBindingMarkup("VerticalContentAlignment"),
                                    Margin: new TemplateBindingMarkup("Padding"),
                                    Visibility: Visibility.Collapsed
                                }
                            },
                            {
                                Type: ContentPresenter,
                                Name: "Normal",
                                Props: {
                                    Content: new TemplateBindingMarkup("Content"),
                                    ContentTemplate: new TemplateBindingMarkup("ContentTemplate"),
                                    HorizontalAlignment: new TemplateBindingMarkup("HorizontalContentAlignment"),
                                    VerticalAlignment: new TemplateBindingMarkup("VerticalContentAlignment"),
                                    Margin: new TemplateBindingMarkup("Padding")
                                }
                            },
                            {
                                Type: Border,
                                Name: "FocusVisualElement",
                                Props: {
                                    BorderBrush: new SolidColorBrush(Color.FromHex("#FF6DBDD1")),
                                    BorderThickness: new Thickness(1, 1, 1, 1),
                                    Opacity: 0.0,
                                    IsHitTestVisible: false
                                }
                            }
                        ]
                    })
                }
            }
        ]
            };
    return JsonParser.Parse(styleJson);
};

//#endregion

Nullstone.FinishCreate(HyperlinkButton);
//#endregion
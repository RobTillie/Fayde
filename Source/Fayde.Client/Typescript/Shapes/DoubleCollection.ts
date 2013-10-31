/// <reference path="../Core/XamlObjectCollection.ts" />

module Fayde.Shapes {
    export class DoubleCollection extends XamlObjectCollection<XamlObject> {
    }
    Fayde.RegisterType(DoubleCollection, {
    	Name: "DoubleCollection",
    	Namespace: "Fayde.Shapes",
    	XmlNamespace: Fayde.XMLNS
    });
}
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.suite.ui.commons.demokit.tutorial.icecream.01.controller.Inventory", {
                    onNavButtonPressed: function() {
		           	this.getOwnerComponent().getRouter().navTo("Startpage");
                },
                addInventory: function() {
		              	var oModel = this.getView().getModel("Inventory"),
			           	oData = oModel.getData(),
			         	oTemplateEntry = oData.Inventory[0];
                     }
	});
});

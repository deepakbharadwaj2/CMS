sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(jQuery,Controller,JSONModel) {
	"use strict";

	return Controller.extend("sap.suite.ui.commons.demokit.tutorial.icecream.01.controller.Users", {
			onInit : function(){
			var oDataPath=jQuery.sap.getModulePath("sap.suite.ui.commons.demokit.tutorial.icecream.01","/model/data/Users.json");
			var oModel = new sap.ui.model.json.JSONModel(oDataPath);
		     	this.getView().setModel(oModel);
				
			},
             onNavButtonPressed: function() {
                this.getOwnerComponent().getRouter().navTo("Startpage");
           }
          
	});
});

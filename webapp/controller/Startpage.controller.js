sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller, NumberFormat) {
	"use strict";

	return Controller.extend("sap.suite.ui.commons.demokit.tutorial.icecream.01.controller.Startpage", {
		onInit: function() {},
		getProgress: function(aNodes) {
			if (!aNodes || aNodes.length === 0) {
				return 0;
			}
			var iSum = 0;
			for (var i = 0; i < aNodes.length; i++) {
				iSum += aNodes[i].state === "Positive";
			}
			var fPercent = (iSum / aNodes.length) * 100;
			return fPercent.toFixed(0);
		},

		getEntityCount: function(entities) {
			return entities && entities.length || 0;
		},
		
		onNavToOrders: function() {
			this.getRouter().navTo("Orders");
		},
		
		onNavToInventory: function() {
			this.getRouter().navTo("Inventory");
		},
		
		onNavToUsers: function() {
			this.getRouter().navTo("Users");
		},
		
		onNavToRules: function() {
			this.getRouter().navTo("Rules");
		},
		
		onLogout: function() {
			this.getRouter().navTo("Login");
		},

		formatNumber: function(value) {
			var oFloatFormatter = NumberFormat.getFloatInstance({
				style: "short",
				decimals: 1
			});
			return oFloatFormatter.format(value);
		},
		
		getRouter: function() {
			return this.getOwnerComponent().getRouter();
		}

	});
});

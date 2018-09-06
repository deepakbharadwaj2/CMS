sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(jQuery,Controller,JSONModel,MessageToast) {
	"use strict";

	return Controller.extend("sap.suite.ui.commons.demokit.tutorial.icecream.01.controller.Login", {
		onInit : function(){
			var oDataPath=jQuery.sap.getModulePath("sap.suite.ui.commons.demokit.tutorial.icecream.01","/model/data/Login.json");
			var oModel = new sap.ui.model.json.JSONModel(oDataPath);
		     	this.getView().setModel(oModel,"Login");
			},
		onSubmit: function(){
			
			var oModel = this.getView().getModel("Login");
            var oData = oModel.getData();
            
            var UId = this.byId("uid").getValue();
            var Pwd = this.byId("pwd").getValue();
           

                             //           MessageToast.show("Check Login credentials");
                                           var flag = 0;
                                           var object;
                                           var user="";
                                           
                                           for (var i = 0; i < oData.Login.length; i++) 
                                           {
                                               object=oData.Login[i];
                                               
                                               if(object.uid==UId && object.pwd==Pwd)
                                               {
                                                         flag= 1;
                                                         user = object.uid;
                                                         break;
                                               }
                                           }
                                           
                                           if(flag==1)
                                           {
                                                          MessageToast.show("Welcome "+user);
                                                          this.getOwnerComponent().getRouter().navTo("Startpage");
                                           }
                                           else
                                           {
                                                          MessageToast.show("Invalid credentials");
                                           }

		}
	});
});
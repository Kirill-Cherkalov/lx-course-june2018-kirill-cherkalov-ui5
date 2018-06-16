sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
	"use strict";

	return Controller.extend("kirill.cherkalov.app.controller.OrdersOverview", {
		onNextPage: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("OrderDetails");
		}
	});
});

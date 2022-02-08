sap.ui.define(
  ["sap/hr/hire/controllers/BaseController"],
  function (BaseController) {
    BaseController.extend("sap.hr.hire.controllers.App", {
      onInit: function () {
        console.log("inside App controller");
      },
    });
  }
);

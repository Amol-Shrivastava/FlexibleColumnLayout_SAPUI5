sap.ui.define(
  ["sap/hr/hire/controllers/BaseController"],
  function (BaseController) {
    return BaseController.extend("sap.hr.hire.controllers.empty", {
      onInit: function () {
        console.log("Inside empty controller");
      },
    });
  }
);

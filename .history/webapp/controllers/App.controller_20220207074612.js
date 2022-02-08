//jshint esversion: 6

sap.ui.define(
  ["sap/hr/hire/controllers/BaseController"],
  function (BaseController) {
    BaseController.extend("tcs.hr.hire.controllers.App", {
      onInit: function () {
        console.log(`this is app controller`);
        BaseController.prototype.onInit.apply(this);
        console.log(
          `after calling Base controller onInit function, value of this variable here is ${this}`
        );
      },
    });
  }
);

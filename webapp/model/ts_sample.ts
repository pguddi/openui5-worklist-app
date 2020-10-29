sap.ui.define(["sap/m/Button", "sap/m/Select"], function (Button: typeof sap.m.Button, Select: typeof sap.m.Select) {
  "use strict";

  return {
    demo1: function () {
      let fnTest = function (x: string) {
        console.log(x);
      };

      fnTest(true);

      let oBtn = new Button();
      oBtn.setText("Test");
      oBtn.setIcon(true);

      let oFn = (blub) => {
        console.log(this);
      };

      let opromise = new Promise((resolve, reject) => {
        console.log("aaa");
      });

      let oSelect = new Select();
      oSelect.setIcon("sap-icon://user");

      function resolveAfter2Seconds() {
        console.log("starting slow promise");
        return new Promise((resolve) => {
          setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
          }, 2000);
        });
      }

      function resolveAfter1Second() {
        console.log("starting fast promise");
        return new Promise((resolve) => {
          setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
          }, 1000);
        });
      }

      async function sequentialStart() {
        console.log("==SEQUENTIAL START==");

        // 1. Execution gets here almost instantly
        const slow = await resolveAfter2Seconds();
        console.log(slow); // 2. this runs 2 seconds after 1.

        const fast = await resolveAfter1Second();
        console.log(fast); // 3. this runs 3 seconds after 1.
      }
    },
  };
});

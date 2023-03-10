/* global Class */
import View from "./View";
import Toolbar from "./Toolbar";

export default Class.extend({
  NAME: "Application",

  /**
   * @constructor
   *
   * @param {String} canvasId the id of the DOM element to use as paint container
   */
  init: function() {
    this.view = new View("canvas");
    this.toolbar = new Toolbar("toolbar", this.view);
  }
});

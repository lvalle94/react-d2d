import React from "react";
import ReactDOM from "react-dom";
import "./import-jquery.js";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css";
import jsonDocument from "./json-data";
import Application from "./Application";
import TableShape from "./TableShape";

import draw2d from "draw2d";

import "./styles.css";

/* global window jQuery */
window.$ = jQuery;
window.jQuery = jQuery;
window.draw2d = draw2d;
window.TableShape = TableShape;

class App extends React.Component {
  componentDidMount() {
    this.draw();
  }
  draw = () => {
    var routerToUse = new draw2d.layout.connection.InteractiveManhattanConnectionRouter();
    var app = new Application();
    app.view.installEditPolicy(
      new draw2d.policy.connection.DragConnectionCreatePolicy({
        createConnection: function() {
          var connection = new draw2d.Connection({
            stroke: 3,
            outlineStroke: 1,
            outlineColor: "#303030",
            color: "91B93E",
            router: routerToUse
          });
          return connection;
        }
      })
    );
    // unmarshal the JSON document into the canvas
    // (load)
    var reader = new draw2d.io.json.Reader();
    reader.unmarshal(app.view, jsonDocument);
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div id="toolbar" className="navbar-default" />

        <div id="side-nav">
          <span id="logo">Draw2D</span>
          <div id="layer_elements" />
          <div id="layer_header" className="highlight panetitle blackgradient">
            <div
              data-shape="TableShape"
              className="palette_node_element draw2d_droppable"
              title="drag&amp;drop the table into the canvas.."
            >
              Table
            </div>
          </div>
        </div>

        <div id="canvas" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

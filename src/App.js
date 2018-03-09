import React, { Component } from "react";
import header_logo from "./header_logo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="root">
        <div className="shelves_parent_container">
          <header className="shelves_header">
            <div class="shelves_header_content">
              <img src={require("./header_logo.png")} alt="logo" />
              <span class="shelves_header_span">SHELFIE</span>
            </div>
          </header>
          <div class="shelves_child_container">
            <div class="shelf_container">
              <span class="title">Shelf A</span>
            </div>
            <div class="shelf_container">
              <span class="title">Shelf B</span>
            </div>
            <div class="shelf_container">
              <span class="title">Shelf C </span>
            </div>
            <div class="shelf_container">
              <span class="title">Shelf D</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

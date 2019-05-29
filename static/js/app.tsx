import * as React from "react";
import * as ReactDOM from "react-dom";
// entry point for build less files
import "../less/app";
import { TestComponent } from "./components/test-component";

ReactDOM.render(<div className='demo'><TestComponent/></div>, document.getElementById("example"));

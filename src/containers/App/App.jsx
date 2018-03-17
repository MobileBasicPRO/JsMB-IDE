import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import './App.min.css';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

//require('../MobileBasic');

import 'codemirror/mode/javascript/javascript';

import '../../menubar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <CodeMirror
          className="codemirror"
          options={{
            theme: "monokai",
            lineNumbers: true,
            mode: "text/javascript",
            autoCloseBrackets: true
          }}
        />
      </div>
    );
  }
}

export default App;
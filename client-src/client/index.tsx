import * as React from "react";
import * as ReactDOM from "react-dom";
import MainMenu from './components/mainmenu';

function App() {
  return (
    <MainMenu />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));

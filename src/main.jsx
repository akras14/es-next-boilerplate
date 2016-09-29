var React = require("react");
var render = require("react-dom").render;

function renderView(){
  render(
    <App/>,
    document.getElementById('root')
  );
}

class App extends React.Component {
  render(){

    console.log("Hello World");

    return(
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

renderView();

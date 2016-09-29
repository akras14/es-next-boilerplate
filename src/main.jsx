var React = require("react");
var render = require("react-dom").render;
var Navbar = require("./navbar/navbar");
var Dashboard = require("./dashboard/dashboard");
require("../style/main.scss")

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
        <Navbar></Navbar>
        <Dashboard></Dashboard>
      </div>
    );
  }
}

renderView();

import Header  from "./components/Header"; 
import React from "react";//class Based Componet

//This Function Based Component
function App() {
  return (
 <div className="container">  
   <Header  />
  </div>
);
}




// This Class Based Component
// class App extends React.Component{
// render(){
//   return <h1> Hello From Class</h1>
// }
// }


export default App;

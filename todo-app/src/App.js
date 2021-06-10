import './App.css';
import React from "react";
import Todos from './components/Todos';


// import Users from './components/Users';
// import Counter from './components/Counter';
// import Message from './components/Message';

// const Welcome = (props) => {
//   console.log(props)
//   if(props.user === undefined){
//     return <h1>Welcome Guest!</h1>
//   }
//   else return (
    
//     <h1>Welcome {props.user} !</h1>
//   )
// }

// const LevelOne = (props) => {
//   return < LevelTwo  message={props.msg}/>;
// }

// const LevelTwo = (props) => {
//   return <h1>The msg is : {props.message}</h1>;
// }



const App = () => {
  return (
    <div className="container-fluid vw-100 vh-100">
      {/* <h1>Header</h1>
      <hr/> */}
      {/* < Welcome user="Vrushabh" />
      < Welcome user="Rahul" />
      < Welcome /> */}
      {/* < LevelOne msg="this is secrete code" /> */}
      {/* < Message /> */}
      {/* < Counter /> */}
      {/* < Users /> */}
      <div className="d-flex justify-content-center align-items-center vh-100">
        < Todos />
      </div>
     
    </div>
  );
}

export default App;

import React, { useContext, useReducer, useState } from "react";
import dataContext from "../CONTEXT/contextData";
import styles from "./Home.module.css";

const NEW_DATA = {
  numberOfData: [],
  showData: false,
};

const reducerFn =(state,action)=>{
 if(action.type === "PUSH"){
  if(state.numberOfData.length < 1){
    const newD =  state.numberOfData.concat(1)
    return { numberOfData: newD, showData: false }
  }else {
    const newD = state.numberOfData.concat(+state.numberOfData.length  + 1)
    return {numberOfData: newD, showData: false}
  }
 }
 return NEW_DATA;
}

const Home = () => {
  
  const { userData, setUserData } = useContext(dataContext);


  const [dataState, dataDispatch]  = useReducer(reducerFn, NEW_DATA)

  const ChangeHandler = (e) => {
    e.preventDefault();

    dataDispatch({type: "PUSH"})

    if (userData.find((e) => e.name === "nikhil")) {
      setUserData((prev) => prev.filter((e) => e.name !== "nikhil"));
      return;
    }
    setUserData((prev) => [{ name: "nikhil", age: 69 }, ...prev]);
  };

   console.log(dataState.numberOfData);
   
  return (
    <div className={styles.Home}>
      {userData.map((e) => (
        <p>
          {e.name}-----{e.age}
        </p>
      ))}
      <button onClick={ChangeHandler}>Add User</button>
    </div>
  );
};

export default Home;

import { createContext, useState } from "react";

const dataContext = createContext();

const SOME_DATA = [
    {id: Math.random().toString() ,name: "Anurag" , age: 19},
    {id: Math.random().toString() ,name: "sagar" , age: 29},
    {id: Math.random().toString() ,name: "Anu" , age: 39},
    {id: Math.random().toString() ,name: "Royel" , age: 22},
]


export const DataContextProvider =(props)=>{
    const [userData , setUserData] = useState(SOME_DATA)


    return(
        <dataContext.Provider value={{userData, setUserData}}>
           {props.children}
        </dataContext.Provider>
    )
}

export default dataContext;

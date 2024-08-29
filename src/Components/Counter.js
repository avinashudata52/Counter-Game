import React, { useEffect, useState } from "react";

function Counter(){

    let count = 0;
    useEffect(() =>{
        window.alert('I am Clicked');
    });
    const [currentstate, updatestate] = useState(count);
    const handlclick = () =>{
    updatestate(currentstate+1);
};
    return (
        <>
        <div className="counter_parent">
        <h3>COUNTER</h3> 
        <button onClick={handlclick}>{currentstate}</button>
        </div>
        </>
    )
};
export default Counter; 
import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

export default function ShowRoom(props) {
  return (
    <div><br />
      {props.room.map((val) => {
        return <>
         <Link to={`room${val.name}`}>
            <button style={{ backgroundColor: val.color , fontSize:'80px'}} id='room-button' >{val.name}</button>
            </Link><br />
            <button onClick={()=>{props.delRoom()}} style={{ backgroundColor:"black" , color:"red"}}>Del room</button>
         <br /><br /> </>
      })}
      <br />
      <br />
      <br />
      <Link to={"/NewRoom"}>
        <button>Add room</button>
      </Link>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Devices from "./Devices";

export default function Room(props) {
  const [flag, setFlag] = useState(false);

  const [counter , setCounter ]= useState(0)
  const [count , setCount ]= useState(0)

  const counterOfDevices =()=>{
    setCounter(counter + 1 )
  }
  const countOfHeater =()=>{
    setCount(count + 1 )
  }

  const show = () => {
    if (flag === false) {
      return (
        <div>
          <Devices
            type={props.type}
            counter = {counter}
            count = {count}
            countOfHeater={countOfHeater}
            counterOfDevices={counterOfDevices}
            change={change}
            index={props.index}
            addDevices={props.addDevices}
          />
        </div>
      );
    } else {
      return <div> <button onClick={change}>Add device</button> <br />
       <Link to={'/'}><button>All rooms</button> </Link> </div>
    }
  };

  const change = () => {
    setFlag(!flag);
  };

  return (
    <div>
      <h1>Room name : {props.name}</h1>
      <h3>Room type : {props.type}</h3>
      <hr />
      {show()}
      {props.devices.map((val, index) => {
        let condition = val.condition ? "green" : "red";

        return (
          <>
          <button
            onClick={() => {
              props.changeCondition(props.index, index);
            }}
            style={{ backgroundColor: condition }}
          >
            {val.type}
          </button>
          </>
        );
      })}
    </div>
  );
}

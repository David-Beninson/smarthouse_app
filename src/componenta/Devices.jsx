import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Devices(props) {

  const [device, setDevice] = useState("");

  const valid = () => {
    if (
      props.counter > 4||
      props.count >= 1||
      device === "" ||
      (device === "Water-Heater" && props.type !== "Bathroom")
    ) {
      alert("ERROR");
    } else {
      props.counterOfDevices()
      props.change();
      props.addDevices(props.index, device);
    }
    if(device === "stereo-system"){
      props.countOfHeater()
    }
  };

  return (
    <div>
      <select
        onChange={(e) => {
          setDevice(e.target.value);
        }}
      >
        <option value="">select</option>
        <option value="Air-Conditioner">Air-Conditioner</option>
        <option value="lamp">lamp</option>
        <option value="stereo-system">stereo system</option>
        <option value="Water-Heater">Water Heater</option>
      </select>
      <br />
      <button
        onClick={() => {
          valid();
        }}
      >
        add device{" "}
      </button>

      <Link to={"/"}>
        <button>All rooms</button>
      </Link>
    </div>
  );
}

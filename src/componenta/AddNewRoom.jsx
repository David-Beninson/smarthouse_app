import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddNewRoom(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("");

  const valid = () => {
    if (name.length > 5 || name === "" || type === "") {
      alert("ERROR");
    } else {
      props.addRoom(name, type, color);
    }
  };

  return (
    <div>
      <select
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option value=" ">select </option>
        <option value="Bedroom">Bedroom </option>
        <option value="Bathroom">Bathroom </option>
        <option value="kitchen">kitchen </option>
      </select>
      <br />
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Enter a name for room "
      />{" "}
      <br />
      <input
        onChange={(e) => {
          setColor(e.target.value);
        }}
        type="text"
        placeholder="Enter a color for room "
      />
      <br />
      <Link to={"/"}>
        <button
          onClick={() => {
            valid();
          }}
        >
          add room
        </button>
      </Link>
    </div>
  );
}

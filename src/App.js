import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Room from "./componenta/Room";
import ShowRoom from "./componenta/ShowRoom";
import NewRoom from "./componenta/AddNewRoom";
import { useState } from "react";

function App() {
  const [room, setRoom] = useState([]);

  const addRoom = (n, t, c) => {
    setRoom([...room, { name: n, type: t, color: c, devices: [] }]);
  };

  const delRoom = (index) => {
    let temp = [...room];
    temp.splice(index, 1);
    setRoom([...temp]);
  };

  const addDevices = (index, typeOfDevices) => {
    let temp = { condition: false, type: typeOfDevices };
    room[index].devices.push(temp);
    setRoom([...room]);
  };

  const changeCondition = (indexOfRoom, indexOfDevices) => {
    room[indexOfRoom].devices[indexOfDevices].condition =
      !room[indexOfRoom].devices[indexOfDevices].condition;
    setRoom([...room]);
  };

  return (
    <div className="App" >
      <h1>SMART HOSE</h1>
      <hr />
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<ShowRoom room={room} delRoom={delRoom} />}
          />
          <Route
            path="/NewRoom"
            element={<NewRoom room={room} addRoom={addRoom} />}
          />
          {room.map((val, index) => {
            return (
              <Route
                path={`room${val.name}`}
                element={
                  <Room
                    devices={val.devices}
                    changeCondition={changeCondition}
                    addDevices={addDevices}
                    index={index}
                    name={val.name}
                    type={val.type}
                  />
                }
              />
            );
          })}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

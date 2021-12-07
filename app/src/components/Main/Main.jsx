import React, { useState } from "react";
import MyModal from "../MyModal/MyModal";
import "./Main.css";

function Main() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="main">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        architecto!
      </p>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <MyModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Main;

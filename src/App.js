import React, { useState } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const App = () => {
  const [showBlock, setShowBlock] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModalHandler = () => {
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  const toggleHandler = () => {
    setShowBlock(!showBlock);
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      <button className="Button" onClick={toggleHandler}>
        Toggle
      </button>
      <br />
      <Transition
        in={showBlock}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        onEnter={() => console.log("onEnter")}
        onEntering={() => console.log("onEntering")}
        onEntered={() => console.log("onEntered")}
        onExit={() => console.log("onExit")}
        onExiting={() => console.log("onExiting")}
        onExited={() => console.log("onExited")}
      >
        {(state) => {
          return (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            ></div>
          );
        }}
      </Transition>
      <Modal show={modalIsOpen} closed={closeModalHandler} />

      {modalIsOpen ? <Backdrop show={modalIsOpen} /> : null}
      <button className="Button" onClick={showModalHandler}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default App;

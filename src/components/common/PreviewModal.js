import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { CSSTransition } from "react-transition-group";
import "./PreviewModal.scss";

function PreviewModal() {
  const { selectedMovie } = useContext(GlobalContext);

  return (
    <CSSTransition
      in={selectedMovie !== null}
      timeout={200}
      classNames="example"
      unmountOnExit
      appear
      onEnter={() => console.log("hello")}
    >
      <div className="modal-preview">
        <h2>Modal</h2>
        <h2>AHhh</h2>
      </div>
    </CSSTransition>
  );
}

export default PreviewModal;

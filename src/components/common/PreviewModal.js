import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { CSSTransition } from "react-transition-group";
import "./PreviewModal.scss";
import {
  PlayCircleFilled,
  Check,
  ThumbUpOutlined,
  ThumbDownOutlined,
  ExpandMoreOutlined,
} from "@material-ui/icons";

function PreviewModal() {
  const {
    selectedMovie,
    targetElement,
    closeModalFinished,
    closeModal,
    isModalActionInProgress,
  } = useContext(GlobalContext);

  const getPosition = () => {
    const position = targetElement
      ? {
          x: window.pageXOffset + targetElement.getBoundingClientRect().left,
          y: window.pageYOffset + targetElement.getBoundingClientRect().top,
        }
      : { x: 0, y: 0 };
    return position;
  };

  const handleOnEntered = () => {};
  const handleOnExited = () => {
    closeModalFinished();
  };

  return (
    <CSSTransition
      in={isModalActionInProgress}
      timeout={200}
      classNames="example"
      unmountOnExit
      appear
      onEntered={handleOnEntered}
      onExited={handleOnExited}
    >
      <div
        className="modal-preview"
        onMouseLeave={closeModal}
        style={{
          left: `${getPosition().x}px`,
          top: `${getPosition().y}px`,
          width: `${targetElement ? targetElement.width : 0}px`,
        }}
      >
        {/* backgroundImage: `url(${
            selectedMovie ? selectedMovie.backdrop_path : ""
          }) */}
        <div className="modal-preview__info">
          <img src={selectedMovie ? selectedMovie.backdrop_path : ""} alt="" />
          <div className="modal-preview__container">
            <div className="modal-preview__controls">
              <PlayCircleFilled />
              <Check />
              <ThumbUpOutlined />
              <ThumbDownOutlined />
              <ExpandMoreOutlined />
            </div>
            <div className="modal-preview__metadata">
              91% match 18 5 seasons
            </div>
            <div className="modal-preview__evidence">
              <ul>
                <li>Mind Bending</li>
                <li>suspensful</li>
                <li>exicitng</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default PreviewModal;

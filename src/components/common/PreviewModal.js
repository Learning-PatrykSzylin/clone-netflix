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
import EvidenceList from "../moviePreview/evidence/EvidenceList";
import MetaDataContainer from "../moviePreview/metadata/MetaDataContainer";
import { Link } from "react-router-dom";

function PreviewModal() {
  const {
    selectedCard,
    closeModalFinished,
    closeModal,
    isModalActionInProgress,
  } = useContext(GlobalContext);

  const getPosition = () => {
    const position = selectedCard.targetElement
      ? {
          x:
            window.pageXOffset +
            selectedCard.targetElement.getBoundingClientRect().left,
          y:
            window.pageYOffset +
            selectedCard.targetElement.getBoundingClientRect().top,
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
          width: `${
            selectedCard.targetElement ? selectedCard.targetElement.width : 0
          }px`,
        }}
      >
        {selectedCard.movie && (
          <div className="modal-preview__info">
            <Link to={`/watch/${selectedCard.movie.id}`}>
              <img
                src={selectedCard.movie ? selectedCard.movie.backdrop_path : ""}
                alt=""
              />
            </Link>

            <div className="modal-preview__container">
              <div className="modal-preview__controls">
                <PlayCircleFilled />
                <Check />
                <ThumbUpOutlined />
                <ThumbDownOutlined />
                {/* <ExpandMoreOutlined /> */}
              </div>
              <div className="modal-preview__metadata">
                <MetaDataContainer></MetaDataContainer>
                91% match 18 5 seasons
              </div>
              <div className="modal-preview__evidence">
                <EvidenceList
                  evidenceItems={
                    selectedCard.movie && selectedCard.movie.genre_ids
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </CSSTransition>
  );
}

export default PreviewModal;

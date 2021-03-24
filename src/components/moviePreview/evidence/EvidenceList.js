import React from "react";
import EvidenceListItem from "./EvidenceListItem";
import GenreDb from "../../../utils/genreDb";

function EvidenceList({ evidenceItems }) {
  const hasSeperator = (id, length) => {
    if (id != 0) return true;

    return false;
  };

  return (
    <ul className="evidence-list">
      {evidenceItems.map((item, index) => (
        <>
          <EvidenceListItem
            key={item}
            hasSeperator={hasSeperator(index, evidenceItems.length)}
            text={GenreDb[item]}
          />
        </>
      ))}
    </ul>
  );
}

export default EvidenceList;

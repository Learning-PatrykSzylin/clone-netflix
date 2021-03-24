import React from "react";
import EvidenceListItemSeperator from "./EvidenceListItemSeperator";
import "./EvidenceListItem.scss";

function EvidenceItem({ hasSeperator, text }) {
  return (
    <li className="evidence-item">
      {hasSeperator && <EvidenceListItemSeperator />}
      {text}
    </li>
  );
}

export default EvidenceItem;

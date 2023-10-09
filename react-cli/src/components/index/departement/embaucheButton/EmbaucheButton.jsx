import React from "react";
import "./embaucheButton.css";
import { Link, useNavigate } from "react-router-dom";

function EmbaucheButton() {
  return (
    <Link to={"create-annonce"}>
      <button className="buttons" type="button">
        <span className="button__text">Annonce</span>
        <span className="button__icon">
          <svg
            className="svg"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" x2="12" y1="5" y2="19"></line>
            <line x1="5" x2="19" y1="12" y2="12"></line>
          </svg>
        </span>
      </button>
    </Link>
  );
}

export default EmbaucheButton;

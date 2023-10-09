import React from "react";
import "./annonces.css";
import { Link } from "react-router-dom";
function Annonces({ idAnnonce,titre, tag, description, deadline }) {
  const url = `${idAnnonce}/cv`;
  return (
    <>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            Développeur React
            <span className="tag-container">
              <Link to={url} className="link" title="cliquer pour ajouter le CV">
                <span className={"tag is-light " + tag}>CV</span>{" "}
              </Link>
              <Link className="link" title="cliquer pour ajouter le questionnaire">
                <span className={"tag is-light " + tag}>Questionnaire</span>{" "}
              </Link>
            </span>
          </p>
          <button className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </header>
        <div className="card-content">
          <div className="content">
            Le services de développement de la société recherche un développeur
            React pour un projet de 6 mois
            <br />
            <time datetime="2016-1-1">
              Limite depote de dossier:11:09 PM - 1 Jan 2016
            </time>
          </div>
        </div>
        <footer className="card-footer">
          <Link to={""} className="card-footer-item">
            Publier
          </Link>
          <Link to={""} className="card-footer-item">
            Supprimer
          </Link>
        </footer>
      </div>
    </>
  );
}

export default Annonces;

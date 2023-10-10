import React from "react";
import "./listAnnonces.css";
import Annonces from "./annonces/Annonces";

function ListAnnonces() {
  //TODO: fetch data from backend and display it

  return (
    <div className="listAnnonces">
     {/*  <section className="filtre"></section> */}
      <section className="annonce_container">
        <h1 className="title has-text-link">Listes des annonces</h1>
        <Annonces idAnnonce={"ANCS00001"} tag={"is-danger"} />
        <Annonces idAnnonce={"ANCS00002"} tag={"is-success"} />
        <Annonces idAnnonce={"ANCS00003"} tag={"is-info"} />
      </section>
    </div>
  );
}

export default ListAnnonces;

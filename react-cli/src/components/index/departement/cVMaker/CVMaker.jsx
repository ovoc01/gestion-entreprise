import React from 'react';
import './cVMaker.css'
import { useParams } from 'react-router-dom';
function CVMaker() {
  const {idAnnonce} = useParams();
  console.log("idAnnonce",idAnnonce);
  return (

    <div className="cVMaker">
         
    </div>
  );
}

export default CVMaker;

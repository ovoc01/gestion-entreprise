import React from 'react';
import './postulation.css'
import { useLocation, useParams } from 'react-router-dom';

function Postulation() {
  const location = useLocation();
  const params = useParams();
  return (
    <div className="postulation">
            {(params.id)}
    </div>
  );
}

export default Postulation;

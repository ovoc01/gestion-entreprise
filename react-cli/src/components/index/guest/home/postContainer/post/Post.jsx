import React from 'react';
import './post.css'
import { useNavigate } from 'react-router-dom';
function Post({id,title,description}) {
  const navigate = useNavigate();
  const postuler = ()=>{
    navigate("postuler/"+id)
  }
  return (
    <div className="post">
      <header>
        <span className="job-title">OCaml Developer</span>
        <span className="job-publication-date">Today</span>
      </header>
      <body className="job-description">
        Ahrefs is looking for a backend developer with deep understanding of
        networks, distributed systems, OS fundamentals and taste for simple and
        efficient architectural designs. Our backend is mostly implemented in
        OCaml with some D and C++.
      </body>
      <footer>
          <button type="submit" className='button is-dark but' onClick={postuler}>postuler </button>
      </footer>
    </div>
  );
}

export default Post;

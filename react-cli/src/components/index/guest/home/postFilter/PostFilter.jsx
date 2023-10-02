import React from "react";
import "./postFilter.css";

function PostFilter() {
  return (
    <form className="postFilter">
      <h1 className="title">Filter</h1>
      <div className="field">
        <div className="control">
          <input className="input is-dark" type="number" placeholder="" />
        </div>
        <p className="help is-success"></p>
      </div>
      <div className="field">
        <div className="control">
          <input className="input is-dark" type="number" placeholder="" />
        </div>
        <p className="help is-success"></p>
      </div>
      <div class="select is-rounded is-dark ">
        <select>
          <option>Services</option>
          <option>With options</option>
        </select>
      </div>
      <input type="submit" className="button is-dark" />
    </form>
  );
}

export default PostFilter;

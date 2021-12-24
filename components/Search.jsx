import React from "react";

export default function Search(props) {
  return (
    <div>
      <form className="search">
        <input
          type="text"
          className="search--icon"
          placeholder="Search receiver here"
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
}

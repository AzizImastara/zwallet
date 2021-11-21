import React from "react";
import Image from "next/image";
import search from "assets/img/icon/search.svg";

export default function Search(props) {
  return (
    <div>
      <form className="search">
        <Image src={search} alt="search" />
        <input
          type="text"
          placeholder="Search receiver here"
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
}

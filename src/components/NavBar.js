import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map((link, index) => <a href="#home">home</a>)}</nav>;
}

export default NavBar;

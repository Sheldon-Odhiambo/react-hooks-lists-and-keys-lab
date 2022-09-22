import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

 const list = links.map((link) => {
  return <a key ={link} href={`#${link}`}>{link}</a>
 })
 return <nav>{list}</nav>

  // return <nav>{links.map((link, index) => <a href={"#home"}>home</a>)}</nav>;
}

export default NavBar;

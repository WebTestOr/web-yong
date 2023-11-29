import React from "react";
import { useOutlet } from "react-router-dom";
import Main from "./Main";

function Root() {
  const outlet = useOutlet();
  return <> {outlet || <Main />}</>;
}

export default Root;

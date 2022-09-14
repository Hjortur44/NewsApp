import React from "react";

import NewsSections from "../components/newsSections/NewsSections.jsx";

export default function IndexPage() {
  return (
    <NewsSections id={"/"} limit={5} />
  );
}

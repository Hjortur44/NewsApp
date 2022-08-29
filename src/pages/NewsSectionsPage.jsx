import React from "react";
import { useParams } from "react-router";

import NewsSections from "../components/newsSections/NewsSections";

export default function SubNewsSectionPage() {
  const { id } = useParams();

  return (
    <NewsSections id={id} />
  );
}
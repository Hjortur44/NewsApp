import React from "react";
import { useParams } from "react-router";

import NewsSections from "../components/newsSections/NewsSections.jsx";

export default function NewsSectionsPage() {
  const { id } = useParams();

  return (
    <NewsSections id={id} limit={0} />
  );
}
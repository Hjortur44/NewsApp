import React from "react";
import { useParams } from "react-router";

import SubNewsSection from "../components/subNewsSection/SubNewsSection";

export default function SubNewsSectionPage() {
  const { id } = useParams();

  return (
    <SubNewsSection pid={id} />
  );
}
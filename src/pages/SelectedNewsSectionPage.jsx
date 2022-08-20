import React from "react";
import { useParams } from "react-router";

import SelectedNewsSection from "../components/selectedNewsSection/SelectedNewsSection";

export default function SelectedNewsSectionPage () {
    const {id} = useParams();

    return (
      <SelectedNewsSection id={ id } />
    );
}
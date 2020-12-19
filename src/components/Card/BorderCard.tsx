import React from "react";
import "../../styles/components/card.scss";
import CardHeader from "./CardHeader";

export function BorderCard({ width = "100%", height = "150px" }) {
  return (
    <div className="border-card" style={{ width, height }}>
      <CardHeader placeholder="Border" />
    </div>
  );
}

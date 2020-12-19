import React from "react";
import "../../styles/components/card.scss";
import CardHeader from "./CardHeader";

interface BorderCardProps {
    width?: string;
    height?: string;
    placeholder: string;
}

export function BorderCard(props: BorderCardProps) {
    const width = props.width === undefined ? "100%" : props.width;
    const height = props?.height === undefined ? "150px" : props.height;
  return (
    <div className="border-card" style={{ width, height }}>
      <CardHeader placeholder={props.placeholder} />
    </div>
  );
}

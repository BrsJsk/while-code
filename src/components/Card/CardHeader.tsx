import React from "react";

interface CardHeaderProps {
  placeholder: string;
}

function CardHeader(props: CardHeaderProps) {
  const { placeholder } = props;
  return (
    <div className="card-header">
      <span>{placeholder}</span>
      <span>I</span>
    </div>
  );
}

export default CardHeader;

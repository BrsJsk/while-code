import React from "react";
import { FiSettings } from "react-icons/fi";
interface CardHeaderProps {
  placeholder: string;
}

function CardHeader(props: CardHeaderProps) {
  const { placeholder } = props;
  return (
    <div className="card-header">
      <span>{placeholder}</span>
      <span>
        <FiSettings />
      </span>
    </div>
  );
}

export default CardHeader;

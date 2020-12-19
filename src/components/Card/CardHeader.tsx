import React from "react";
import { FiSettings } from "react-icons/fi";
interface CardHeaderProps {
  placeholder: string;
  handleConfigurationClick?: Function;
}

function CardHeader(props: CardHeaderProps) {
  const { placeholder, handleConfigurationClick } = props;
  return (
    <div className="card-header">
      <span>{placeholder}</span>
      <span
        onClick={() => handleConfigurationClick && handleConfigurationClick()}
      >
        <FiSettings />
      </span>
    </div>
  );
}

export default CardHeader;

import React from "react";
import TextField from "@mui/material/TextField";
interface FieldsProps {
  id: string;
  label: string;
  className?: string; // optional prop
  type?: string; // optional prop
}

const Fields: React.FC<FieldsProps> = ({ id, label, className, type }) => {
  return (
    <TextField
      id={id}
      label={label}
      required
      type={type}
      variant="standard"
      InputLabelProps={{
        style: {
          color: "white",
          fontWeight: "500",
        },
      }}
      inputProps={{
        style: {
          color: "white",
          fontWeight: "500",
          borderBottom: "2px solid #1976d2",
          padding: "8px",
        },
      }}
      className={className}
    />
  );
};

export default Fields;

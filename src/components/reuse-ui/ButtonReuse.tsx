import React from "react";
import Button from "@mui/material/Button";
// Define the props interface
interface ButtonReuseProps {
  text: string;
  className?: string;
}
const ButtonReuse: React.FC<ButtonReuseProps> = ({ text, className }) => {
  return (
    <div>
      <Button
        variant="outlined"
        sx={{
          backgroundColor: "blue",
          borderColor: "blue",
          color: "white",
          fontWeight: "600",
          fontSize: "18px",
          textTransform: "capitalize",
        }}
        className={className}
      >
        {text}
      </Button>
    </div>
  );
};

export default ButtonReuse;

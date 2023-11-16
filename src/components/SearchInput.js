import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import * as React from "react";

export default function SearchInput(props) {
  const [val, setVal] = React.useState();

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const inputRef = React.useRef(null);
  return (
    <Input
      type="number"
      placeholder="Type Pokemon Index (between 1 to 1017)"
      value={val}
      onChange={handleChange}
      endDecorator={
        <Button onClick={() => props.submitFunc(val)}>Submit</Button>
      }
      slotProps={{
        input: {
          ref: inputRef,
          min: 1,
          max: 1017,
          step: 1
        }
      }}
      sx={{
        "--Input-minHeight": "45px",
        "--Input-paddingInline": "13px",
        "--Input-radius": "20px",
        "--Input-gap": "9px",
        "--Input-placeholderOpacity": 0.6,
        "--Input-decoratorChildHeight": "34px",
        minWidth: "300px",
        width: "100%", // Make the width 100% to allow it to grow responsively
        maxWidth: "600px" // Set the maximum width to 700px
      }}
    />
  );
}

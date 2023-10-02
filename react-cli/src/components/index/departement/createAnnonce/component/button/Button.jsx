import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function Buttons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        style={{ backgroundColor: "#1f2137" }}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </Stack>
  );
}

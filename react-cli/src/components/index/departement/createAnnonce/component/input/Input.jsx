import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Input(props) {

  const {label , type , variant}= props;
    return (
        <TextField
          id="standard-number"
          sx={{ width: "300px" }}
          label={label}
          type={type}
          InputLabelProps={{
            shrink: true,
          }}
          variant={variant}
        />
    );
}
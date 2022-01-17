import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFill() {
  return (
    <Box
     
    >
      <TextField
       sx={{
        width: 550,
        maxWidth: '100%',
        height:300,
      }}
      id="outlined-multiline-static"
      multiline
      rows={10}
      color="warning"
      defaultValue="nnnnnnnnnnnn"
        />
        
    </Box>
  );
}



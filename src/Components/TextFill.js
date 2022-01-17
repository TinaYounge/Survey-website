import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFill() {
  return (
    <Box
      sx={{
        width: 500,
       
        maxWidth: '100%',
      }}
    >
      <TextField  style={{ height:"400px"}} fullWidth label="fullWidth" id="fullWidth" />
    </Box>
  );
}

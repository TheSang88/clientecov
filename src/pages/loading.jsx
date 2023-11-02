import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const loading =()=>{
      return (
        <div>
           <h3>Please wait for the server</h3>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
        </div>
      );
}
export default loading;
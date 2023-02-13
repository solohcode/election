import React from 'react';
// import 'react-responsive-modal/styles.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
// import { Modal } from 'antd';

const Signup = ({open, onCloseModal}) => {

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Full Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
      
    </Box>
      </Modal>
    </div>
  );
};

export default Signup
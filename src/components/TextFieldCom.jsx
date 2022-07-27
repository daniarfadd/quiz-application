import { FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux'
import { amount_reducer } from '../redux/features/reducer'

function TextFieldCom() {

  const dispatch = useDispatch()

  function changeHandler(e) {
    dispatch(amount_reducer(e.target.value))
  }

  return (
    <Box mt={3} width="100%">
        <FormControl fullWidth>
            <TextField 
              onChange={changeHandler}
              variant="outlined"
              label="Amount of Questions"
              type="number"
              size="small"
            />
        </FormControl>
    </Box>
  )
}

export default TextFieldCom
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useDispatch } from 'react-redux'
import { category_reducer, difficulty_reducer, type_reducer } from '../redux/features/reducer'

function SelectField(props) {

    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    // console.log(props.options)

    function changeHandler(e) {
        setValue(e.target.value)
        switch (props.label) {
            case "Category":
                dispatch(category_reducer(e.target.value))
                break;
            case "Difficulty":
                dispatch(difficulty_reducer(e.target.value))
                break;
            case "Type":
                dispatch(type_reducer(e.target.value))
                break;
            default:
                return;
        }
    }

    return (
        <Box mt={3} width="100%">
            <FormControl size="small" fullWidth>
                <InputLabel>
                    {props.label}
                </InputLabel>
                <Select value={value} label={props.label} onChange={changeHandler}>
                    {props.options.map(item => (
                        // console.log(item.name)
                        <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectField
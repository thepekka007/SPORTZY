import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Controller} from 'react-hook-form'


export default function MySelectField(props) {
      const {lable,width,name,control} = props

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
      <FormControl variant='filled' sx={{width:{width}}}>
        <InputLabel id="demo-simple-select-label">{lable}</InputLabel>
        <Controller
           name = {name}
           control = {control}
           render = {({
            field:{onchange,value},
            fieldState:{error},
            formstate,
           })=>(
                 <Select
                 sx={{width:{width}}}
                 onchange={onchange}
                value={value}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
                >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Open</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
           )
          }
           />
      </FormControl>
  );
}

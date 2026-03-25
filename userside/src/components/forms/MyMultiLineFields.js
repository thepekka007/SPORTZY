import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form'

export default function MultiLineFields(props) {
  const {lable,width,placeholder,name,control} = props

  return (
   <Controller
   name = {name}
   control = {control}
   render = {({
    field:{onchange,value},
    fieldState:{error},
    formstate,
   })=>(
    <TextField
    sx={{width:{width}}}
          id="standard-multiline-static"
          label={lable}
          multiline
          rows={1}
          onchange={onchange}
          value={value}
          name={name}
          defaultValue="Default Value"
          variant="standard"
           placeholder={placeholder} 
        />
   )
  }
    
    />
  );
}
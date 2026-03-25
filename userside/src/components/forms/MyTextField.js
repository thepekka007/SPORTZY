import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form'

export default function MyTextField(props) {
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
        onchange={onchange}
        value={value}
        id="standard-basic"
        label={lable}
        variant="standard" 
        placeholder={placeholder} 
         />
   )
  }
    
    />
  );
}

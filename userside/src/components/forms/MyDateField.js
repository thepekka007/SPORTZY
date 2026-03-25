import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Controller} from 'react-hook-form'


export default function MyDateField(props) {
    const {label,width,control,name} = props

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
         name = {name}
         control = {control}
         render = {({
          field:{onchange,value},
         })=>(
       <DatePicker
       sx={{width:{width}}}
        label={label}
       value={value}
       onchange={onchange} />
         )
        }/>                     
    </LocalizationProvider>
  );
}

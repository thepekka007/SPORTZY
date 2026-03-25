import React from 'react'
import {Box,Button,Typography} from '@mui/material'
import MyTextField from './forms/MyTextField'
import MySelectField from './forms/MySelectField'
import MultiLineFields from './forms/MyMultiLineFields'
import MyDateField from './forms/MyDateField'
import { useForm } from 'react-hook-form'
import { blue } from '@mui/material/colors'
const Create = () => {

  const {handleSubmit, reset, setValue , control} = useForm();  
  const submission = (data) => console.log(data)
  return (
    <div>
<form onSubmit={handleSubmit(submission)}>
      <Box sx={{display:'flex',width:'100%',marginLeft:'5%',backgroundColor:'rgba(31, 5, 56, 1)'}}>
        <Typography sx={{marginLeft:'20px',color:'#dfdbe6ff'}}>
          Create Records
        </Typography>
      </Box>
      <Box sx={{display:'flex',width:'100%',marginLeft:'5%',boxShadow:3,padding:4,flexDirection:'column'}}>
        <Box sx={{display:'flex',justifyContent:'space-around'}}>
            <MyTextField
            name="name"
            control={control}
            label="Name"
              placeholder="Provide A Name"
              width={'20%'}
            />
            <MyDateField 
            label="Start date"
            name="start_date"
            control={control}
            width={'20%'}

            />
            <MyDateField 
            label="End date"
            name="end_date"
            control={control}
            width={'20%'}

            />


        </Box>
      <Box sx={{display:'flex',justifyContent:'space-around',marginLeft:'5%',marginTop:'50px'}}>
            <MultiLineFields
            name="comments"
            control={control}
            label="comments"
              placeholder="Provide comments"
              width={'30%'}
            />
            <MySelectField 
            label="status"
            name="status"
            control={control}
            width={'30%'}

            />
        <Box sx={{width:'30%'}}>
            <Button variant="contained" type="submit" sx={{width:'100%',backgroundColor:'rgba(31, 5, 56, 1)'}}>
              submit
            </Button>
        </Box>


        </Box>
      </Box>
</form>
    </div>
  )
}

export default Create

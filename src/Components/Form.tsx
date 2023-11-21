import { TextField, MenuItem, Button, Stack } from '@mui/material'
import { FieldErrors, useForm  } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import { useEffect } from 'react';

export const Form = () => {
    type data = {
        username:string;
        password:string;
        type:number;
    }

    const form = useForm<data>();
    const { register, control, handleSubmit, formState, reset } = form;
    const { errors, isSubmitSuccessful } = formState;

    const onSubmit = (data:data) =>{
        console.log('form submitted',data);
        
    }
    const onError = (errors: FieldErrors<data>) => {
        console.log("errori: ",errors)
    }

    useEffect(()=>{
        reset()
    },[isSubmitSuccessful])

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <Stack spacing={2}>
        <TextField error={!!errors.username} helperText={errors.username?.message} {...register("username", {required: "username is required"})} sx={{marginBottom:'10px'}} type='text' label='username' id='username' name='username' />
        <TextField error={!!errors.password} helperText={errors.password?.message} {...register("password", {required: "password is required"})} sx={{marginBottom:'10px'}} type='password' label='password' id='password' name='password'  />
        <TextField {...register("type") } select sx={{width:210}} id='type' name='type' label='tipo'  >
            <MenuItem key={1} value={1}>uno</MenuItem>
            <MenuItem key={2} value={2}>due</MenuItem>
            <MenuItem key={3} value={3}>tre</MenuItem>
        </TextField>

        <Button type='submit' sx={{marginTop:'20px', }} color='warning' variant='contained'>submit</Button>
        
        </Stack >
        <DevTool control={ control }/>
    </form>
  )
}

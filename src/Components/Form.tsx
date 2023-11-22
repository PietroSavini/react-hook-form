import { TextField, MenuItem, Button, Stack } from '@mui/material'
import { FieldErrors, useForm  } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import { useEffect } from 'react';

export const Form = () => {

    type data = {
        username: string;
        password: string;
    }

    const form = useForm<data>();
    const { register, control, handleSubmit, formState, reset } = form;
    const { errors, isSubmitSuccessful } = formState;

    const onSubmit = (data: data) =>{
        console.log('form submitted',data);
    }

    const onError = (errors: FieldErrors<any>) => {
        console.log("errori: ",errors)
    }
    //reset del form una volta che isSubmitSuccessful cambia il valore da false a true
    useEffect(()=>{
        reset()
    },[isSubmitSuccessful])

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <Stack spacing={2}>

            <TextField 
                sx={{marginBottom:'10px'}} 
                error={!!errors.username} 
                helperText={errors.username?.message} 
                {...register("username", {required: "username is required"})} 
                type='text' 
                label='username' 
                id='username' 
                name='username' 
            />
            
            
            <Button type='submit' sx={{marginTop:'20px', }} color='warning' variant='contained'>submit</Button>
        
        </Stack >

        <DevTool control={ control }/>
    </form>
  )
}

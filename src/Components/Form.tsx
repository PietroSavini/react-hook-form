import { TextField, MenuItem, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

export const Form = () => {
    type data = {
        username:string;
        password:string;
        type:number;
    }

    const form = useForm<data>();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const onSubmit = (data:data) =>{
        console.log('form submitted',data);
    }


  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
            <TextField {...register("username", {required: "username is required"})} sx={{marginBottom:'10px'}} type='text' label='username' id='username' name='username' />
            <p className='error'>{errors.username?.message}</p>
        </div>
        <br />
        <div className="form-control">
            <TextField {...register("password", {required: "password is required"})} sx={{marginBottom:'10px'}} type='password' label='password' id='password' name='password'  />
            <p className='error'>{errors.password?.message}</p>
        </div>
        <br />
        <TextField {...register("type") } select sx={{width:210}} id='type' name='type' label='tipo'  >
            <MenuItem key={1} value={1}>uno</MenuItem>
            <MenuItem key={2} value={2}>due</MenuItem>
            <MenuItem key={3} value={3}>tre</MenuItem>
        </TextField>
        <br />
        <Button type='submit' sx={{marginTop:'20px', }} color='warning' variant='contained'>submit</Button>
        <DevTool control={ control }/>
    </form>
  )
}

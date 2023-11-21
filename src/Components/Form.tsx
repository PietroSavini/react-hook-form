import { TextField, MenuItem, Button } from '@mui/material'
import { useForm } from 'react-hook-form'


export const Form = () => {
    const form = useForm();
    const { register } = form;
    


  return (
    <div className='form'>

        <TextField {...register("username")} sx={{marginBottom:'10px'}} type='text' label='username' id='username' name='username' />
        <br />
        <TextField {...register("password")} sx={{marginBottom:'10px'}} type='password' label='password' id='password' name='password'  />
        <br />
        <TextField {...register("type")} select sx={{width:210}} id='type' name='type' label='tipo'  >
            <MenuItem key={1} value={1}>uno</MenuItem>
        </TextField>
        <br />
        <Button sx={{marginTop:'20px', }} color='warning' variant='contained'>submit</Button>
           
    </div>
  )
}

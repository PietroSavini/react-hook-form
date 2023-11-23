import { TextField, Button, MenuItem } from '@mui/material'
import { FieldErrors, useForm  } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';



type data = {
    username: string;
    email: string;
    password: string;
    nation: string | number;
}


export const LoginForm = () => {

   
    const form = useForm<data>();
    const { register, control, handleSubmit, formState } = form;
    const { errors} = formState;



    const onSubmit = (data: data) =>{

        console.log(data)
     
    }


    const onError = (errors: FieldErrors<data>) => {
        console.log("errori: ",errors)

    }

    //reset del form al completamento del submit
    // useEffect(()=>{
    //     reset()
    // },[isSubmitSuccessful]);


  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div>
            {/* username */}
            <TextField
                sx={{ marginBottom: '10px' }}
                error={!!errors.username}
                helperText={errors.username?.message as string}
                {...register('username', {required:'username è obbligatorio',minLength:{value:5,message:'minimo 5 caratteri'}})}
                type='text'
                label='Username'
                id='user'
                name='username'
            />
            {/* / username */}

            {/*password */}
            <TextField
                sx={{ marginBottom: '10px' }}
                error={!!errors.password}
                helperText={errors.password?.message as string}
                {...register('password', {required:'password è obbligatorio', })}
                type='password'
                label='password'
                id='psw'
                name='password'
            />
            {/* /password */}

             {/*email */}
             <TextField
                sx={{ marginBottom: '10px' }}
                error={!!errors.email}
                helperText={errors.email?.message as string}
                {...register('email', {required:'email è obbligatorio', })}
                type='email'
                label='Email'
                id='email2'
                name='email'
            />
            {/* /email */}

            {/*nation */}
            <TextField
                select
                sx={{ marginBottom: '10px', width:210 }}
                error={!!errors.nation}
                helperText={errors.nation?.message as string}
                {...register('nation', {required:'nation è obbligatorio', pattern:{
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'digitare un email valida'
                } })}
                label='Seleziona paese'
                id='nation'
                name='nation'
                defaultValue={''}
            >
                <MenuItem key={1} value={1}>Olanda</MenuItem>
                <MenuItem key={2} value={2}>Germania</MenuItem>
                <MenuItem key={3} value={3}>Italia</MenuItem>

            </TextField>
            {/* /nation */}



         
        </div>
            
        <Button type='submit' sx={{marginTop:'20px', }} color='warning' variant='contained'>submit</Button>
        <DevTool control={ control }/>
    </form>
  )
}

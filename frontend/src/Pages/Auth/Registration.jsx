import React,{useState,useContext,useEffect} from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button,IconButton,FormControl,TextField,InputLabel,InputAdornment,OutlinedInput,Grid } from '@mui/material';
import {Link,useLocation,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';



const Registration = ()=> {

  const navigate = useNavigate()
  const {search} = useLocation()
  const rediractUrl  = new URLSearchParams(search).get('redirect')
  const redirect = rediractUrl ? rediractUrl : '/'

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    showPassword: false,
  });

// MUI PROVIDE FOR SHOW AND HIDE PASSWORD -> START
  const handleChange =(props)=>(event) => {
      setValues({ ...values, [props]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };


  const handleMouse = (event) => {
    event.preventDefault();
  };
  // MUI PROVIDE FOR SHOW AND HIDE PASSWORD -> END

  const handleSubmit = (e)=>{
    e.preventDefault()

    const {name, email, password, conPassword} = values

    if(!name || !email || !password ){
      toast.error('Please fill all input box')
    }else if(!name.match(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/)){
      toast.error(`First Letter must be uppercase`)
    }else if(!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)){
      toast.error('Please enter a valid email')
    }else if(!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
      toast.error('Minimum eight characters, at least one letter, one number and one special character')
    }else{

      navigate('/login')

      axios.post('/user/api/signup', {
        name: name,
        email: email,
        password: password
      }).then(()=>{
        setValues({
          ...values,
          name: '', email: '', password: ''
        })
      }) 

      toast.success('Registration Successful')
    }
  }

  // REDIRECT AFTER USER IS AVAILABLE
  // useEffect(()=>{
  //   if(user){
  //     navigate(redirect)
  //   }
  // })

  return (
          <div className='Auth_main'>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
            <h2>Signing Up</h2>
            <p className='auth-subHeading'>Create an account with email</p>
            <FormControl sx={{ m: 1,  width: '425px'}} variant="outlined" className='Auth_form'>
                <TextField 
                  label="Name" 
                  sx={{  width: '425px',fontSize:'10px' }} 
                  onChange={handleChange('name')} 
                  placeholder='Full Name' 
                  value={values.name}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField 
                  label="Email" 
                  sx={{ mt: 2,  width: '425px'}} 
                  onChange={handleChange('email')} 
                  placeholder='Email' 
                  value={values.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                
                   <FormControl sx={{ mt: 2,width: '425px' }} variant="outlined" size='md'>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        placeholder='Password' 
                        startAdornment = {
                          <InputAdornment position="start">
                            <LockOpenOutlinedIcon />
                          </InputAdornment>
                        }
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouse}
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                    <button className='auth-button' onClick={handleSubmit}>Sign Up</button>
                    </FormControl>
                        <p className='auth-divider'>OR</p>

                        <div className='auth-socail-button'>
                          <button className='auth-socail-button-One'><FacebookIcon/> Login With Facebook</button>
                          <button className='auth-socail-button-Two'><GoogleIcon/> Login With Google</button>
                        </div>
                        <h4>Already have a account ? <Link to='/login' className='auth-link'>Login</Link></h4>
                </FormControl>
            </Grid>
        </Grid>
      </div>

       
  );
}


export default Registration

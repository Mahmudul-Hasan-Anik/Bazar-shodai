import React,{useState} from 'react'
import { FormControl,TextField,InputAdornment,Grid } from '@mui/material';
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google'




const Forgot = ()=> {

  const [values, setValues] = useState({
    email: '',
  });

// MUI PROVIDE FOR SHOW AND HIDE PASSWORD -> START
  const handleChange =(props)=>(event) => {
      setValues({ ...values, [props]: event.target.value });
    };

  const handleSubmit = (e)=>{
    e.preventDefault()

    const {email} = values

    if(!email){
      toast.error('Please fill all input box')
    }else if(!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)){
      toast.error('Please enter a valid email')
    }else{
      toast.success('Password Recover Successful')
    }
  }


  return (
          <div className='Auth_main'>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
            <h2>Forget Password</h2>
            <p className='auth-subHeading'>Reset Your Password</p>
            <FormControl sx={{ m: 1,  width: '425px'}} variant="outlined" className='Auth_form'>
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
                    <button className='auth-button' onClick={handleSubmit}>Recover Password</button>
                    
                    <p className='auth-divider'>OR</p>

                    <div className='auth-socail-button'>
                      <button className='auth-socail-button-One'><FacebookIcon/> Login With Facebook</button>
                      <button className='auth-socail-button-Two'><GoogleIcon/> Login With Google</button>
                    </div>
                    <h4>Not have a account ? <Link to='/registration' className='auth-link'>Register</Link></h4>
                </FormControl>
            </Grid>
        </Grid>
      </div>

       
  );
}


export default Forgot

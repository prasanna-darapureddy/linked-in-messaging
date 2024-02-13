import { Box, Button, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material"
import { Formik } from 'formik';
import * as Yup from 'yup';
import { styles } from "./SignInStyles"
import linkedInLogo from '../../assets/linkedInLogo2.png';
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import SignUpFooter from "../signInUpFooter/SignUpFooter";
import { useNavigate } from "react-router-dom";

interface IState{
    showPassword: boolean,
}

function SignIn() {
    const [showPassword, setShowPassword] = useState<IState['showPassword']>(false)
    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
        email: Yup.string()
          .email('Please enter your email address or mobile number.')
          .required('Please enter your email address or mobile number.'),
        password: Yup.string()
          .min(8, '*Password must be at least 8 characters.')
          .min(15, '*Password must be at most 15 characters.')
          .matches(/(?=.*[a-z])\w+/, "Password should contain at least one lowercase character.")
          .matches(/(?=.*[A-Z])\w+/, "Password should contain at least one uppercase character.")
          .matches(/\d/, "Password should contain at least one number.")
          .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character.")      
          .required('Please enter your password.'),
    });

  return (
    <>
        <Box sx={styles.bgContainer}>
            <Box sx={styles.contentContainer}>
                <Box sx={styles.logoContainer}>
                    <Box component={'img'} src={linkedInLogo} alt={'logo'} onClick={() => navigate('/home')} sx={styles.logo}/>
                </Box>
                <Box sx={styles.middleContainer}>                    
                    <Formik
                        initialValues={{email:'', password:''}}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            console.log(values);
                            console.log(actions);
                        }}
                    >
                        {props => (
                            <Paper component={'form'} sx={styles.formBox} onSubmit={props.handleSubmit}> 
                                <Box sx={styles.signInTextBox}>
                                    <Typography variant="h4" sx={styles.signInText}>Sign in</Typography>  
                                    <Typography sx={styles.signInSubText}>Stay updated on your professional world</Typography>
                                </Box>
                                <TextField type='text' sx={styles.userInput}
                                    label="Email or phone"
                                    name="email"                                     
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    onFocus={props.handleBlur}
                                    value={props.values.email}
                                    error={props.touched.email && Boolean(props.errors.email)}
                                    helperText={props.touched.email && props.errors.email}                                                           
                                />  
                                <Box>
                                <TextField type={showPassword ? 'text': 'password'} sx={styles.userInput}
                                    label="Password"
                                    name="password"                                     
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    onFocus={props.handleBlur}
                                    value={props.values.password}
                                    error={props.touched.password && Boolean(props.errors.password)}
                                    helperText={props.touched.password && props.errors.password}
                                    InputProps= {{endAdornment: 
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                            >
                                            {showPassword ? <Button sx={styles.showPswdBtn}>Hide</Button> :  <Button sx={styles.showPswdBtn}>Show</Button> }
                                            </IconButton>
                                        </InputAdornment>
                                    }}                           
                                />
                                <Button sx={styles.forgotBtn}>Forgot Password?</Button> 
                                </Box>                               
                                <Button variant="contained" type='submit' sx={styles.agreeBtn}>Sign in</Button>
                                <Box sx={styles.lineOrBox}>
                                    <Box component={'hr'} sx={styles.line} />
                                    <Typography>or</Typography>
                                    <Box component={'hr'} sx={styles.line} />
                                </Box>                                
                                <Typography sx={styles.policyText}>
                                    By clicking Agree & Join, you agree to the LinkedIn <Box component={'span'} sx={styles.linkedPolicy}>User Agreement</Box>,
                                    <Box component={'span'} sx={styles.linkedPolicy}> Privacy Policy</Box>, and 
                                    <Box component={'span'} sx={styles.linkedPolicy}> Cookie Policy</Box>.
                                </Typography>
                                <Box sx={styles.googleBox}>
                                    <GoogleLogin                        
                                        onSuccess={() => {}}
                                        onError={() => {}}
                                        useOneTap
                                        size='large'
                                        text='continue_with'  
                                        shape="pill"     
                                        width='300px'  
                                        logo_alignment='center'  
                                    />
                                </Box>    
                                <Box sx={styles.googleBox}>
                                    <GoogleLogin                        
                                        onSuccess={() => {}}
                                        onError={() => {}}
                                        useOneTap
                                        size='large'
                                        text='continue_with'  
                                        shape="pill"     
                                        width='300px'  
                                        logo_alignment='center'  
                                    />
                                </Box>    
                                <Box sx={styles.googleBox}>
                                    <GoogleLogin                        
                                        onSuccess={() => {}}
                                        onError={() => {}}
                                        useOneTap
                                        size='large'
                                        text='continue_with'  
                                        shape="pill"     
                                        width='300px'
                                        logo_alignment='center'  
                                    />
                                </Box>                                
                            </Paper>
                        )}                   
                    </Formik>     
                    <Box sx={styles.businessBox}>
                        <Typography sx={styles.getHelpText}>New to linkedIn? <Box component={'span'} sx={styles.joinNowBtn} onClick={()=>navigate('/signup')}>Join now</Box></Typography>
                    </Box>               
                </Box>                
            </Box>
        </Box>
        <Box sx={styles.footerComponent}>
            <SignUpFooter/>
        </Box>
    </>
  )
}
export default SignIn
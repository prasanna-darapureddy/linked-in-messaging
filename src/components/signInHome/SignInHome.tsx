import { Box, Button, IconButton, InputAdornment, InputLabel, Paper, TextField, Typography } from "@mui/material"
import { Formik } from 'formik';
import { IoMdPeople } from "react-icons/io";
import { PiVideoLight } from "react-icons/pi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import * as Yup from 'yup';
import linkedInLogo from '../../assets/linkedInLogo2.png';
import homeImage from '../../assets/linkedInHomeImg.svg';
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { styles } from "./SignInHomeStyles";
import { NewspaperOutlined } from "@mui/icons-material";

interface IState{
    showPassword: boolean,
}

function SignInHome() {
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
            <Box sx={styles.navBarBox}>
                <Box component={'img'} src={linkedInLogo} alt={'logo'} onClick={() => navigate('/home')} sx={styles.logo}/>
                <Box sx={styles.navMenusBox}>
                    <Box sx={styles.eachMenu}>
                        <NewspaperOutlined />
                        <Box component={'span'} sx={styles.menuText}>Articles</Box>
                    </Box>
                    <Box sx={styles.eachMenu}>
                        <IoMdPeople style={styles.peopleIcon}/>
                        <Box component={'span'} sx={styles.menuText}>People</Box>
                    </Box>
                    <Box sx={styles.eachMenu}>
                        <PiVideoLight style={styles.peopleIcon}/>
                        <Box component={'span'} sx={styles.menuText}>Learning</Box>
                    </Box>
                    <Box sx={styles.eachMenu}>
                        <BsFillBriefcaseFill style={styles.peopleIcon}/>
                        <Box component={'span'} sx={styles.menuText}>Jobs</Box>
                    </Box>
                    <Box sx={styles.divide}></Box>                        
                    <Button sx={styles.navJoinBtn} onClick={() => navigate('/signup')}>Join now</Button>
                    <Button variant="outlined" sx={styles.navSignInBtn} onClick={() => navigate('/signin')}>Sign In</Button>
                </Box>
            </Box>
            <Box sx={styles.contentContainer}>
                <Box sx={styles.lognInBox}>
                    <Typography variant="body1" sx={styles.heading}>Welcome to your professional community</Typography>
                    <Formik
                        initialValues={{email:'', password:''}}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            console.log(values);
                            console.log(actions);
                        }}
                    >
                        {props => (
                            <Paper elevation={0} component={'form'} sx={styles.formBox} onSubmit={props.handleSubmit}>
                                <Box sx={styles.eachField}>
                                    <InputLabel sx={styles.label}>Email or phone </InputLabel>
                                    <TextField type='text' sx={styles.userInput}
                                        name="email"                                     
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        onFocus={props.handleBlur}
                                        value={props.values.email}
                                        error={props.touched.email && Boolean(props.errors.email)}
                                        helperText={props.touched.email && props.errors.email}
                                    />
                                </Box>
                                <Box sx={styles.eachField}>
                                    <InputLabel sx={styles.label}>Password </InputLabel>
                                    <TextField type={showPassword ? 'text': 'password'} sx={styles.userInput}
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
                                    <Typography sx={styles.forgotBtn}>Forgot Password?</Typography> 
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
                                        width={'350px'}    
                                        logo_alignment='center'  
                                    />
                                </Box>
                                <Button variant="outlined" sx={styles.joinInBtn}>New to LinedIn? Join now</Button>
                            </Paper>
                        )}                   
                    </Formik>
                </Box>
                <Box>
                    <Box component={'img'} src={homeImage} alt='image' sx={styles.honeImage}/>
                </Box>
            </Box>   
        </Box>
    </>
  )
}
export default SignInHome
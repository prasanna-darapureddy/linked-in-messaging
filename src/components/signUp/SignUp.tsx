import { Box, Button, IconButton, InputAdornment, InputBase, InputLabel, Paper, TextField, Typography } from "@mui/material"
import { Formik } from 'formik';
import * as Yup from 'yup';
import { styles } from "./SignUpStyles"
import linkedInLogo from '../../assets/linkedInLogo.png';
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import SignUpFooter from "../signInUpFooter/SignUpFooter";
import proPic from '../../assets/proPic.jpg'
import { useDispatch } from "react-redux";
import { postUserDetails } from "../../redux/reducers/slice/Slice";

interface IState{
    showPassword: boolean,
    image:string
}

function SignUp() {
    const [showPassword, setShowPassword] = useState<IState['showPassword']>(false)
    const [image, setImage] = useState<IState['image']>(proPic)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onChangeImage = (event:React.ChangeEvent<HTMLInputElement>) => {
        const url:File = (event.target.files as FileList)[0];        
        url && setImage(URL.createObjectURL(url))
    };

    const validationSchema = Yup.object().shape({
        countryCode:Yup.string()
            .required('Please enter your country code.'),
        name:Yup.string()
            .required('Please enter your Name.'),
        email: Yup.string()
          .email('Please enter your email address .')
          .required('Please enter your email address.'),
        mobile:Yup.string()
            .required('Please enter your mobile number.'),          
        password: Yup.string()
          .min(8, '*Password must be at least 8 characters.')
          .max(15, '*Password must be at most 15 characters.')
          .matches(/(?=.*[a-z])\w+/, "Password should contain at least one lowercase character.")
          .matches(/(?=.*[A-Z])\w+/, "Password should contain at least one uppercase character.")
          .matches(/\d/, "Password should contain at least one number.")
          .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character.")      
          .required('Please enter your password.'),
        role:Yup.string()
          .required('Please enter your role.'),
    });

  return (
    <>
        
        <Box sx={styles.bgContainer}>
            <Box sx={styles.contentContainer}>
                <Box sx={styles.logoContainer}>
                    <Box component={'img'} src={linkedInLogo} alt={'logo'} onClick={() => navigate('/home')} sx={styles.logo}/>
                </Box>
                <Box sx={styles.middleContainer}>
                    <Typography sx={styles.heading}>Join LinkedIn now -- it's free!</Typography>
                    <Formik
                        initialValues={{countryCode:'', name:'', email:'', mobile:'', password:'', role:'', }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            let formData = new FormData(); 
                            formData.append('countryCode', values.countryCode);                         
                            formData.append('name', values.name);
                            formData.append('email', values.email);
                            formData.append('mobile', values.mobile);
                            formData.append('password', values.password);
                            formData.append('role', values.role);
                            formData.append('profile', image);
                            dispatch(postUserDetails(formData))
                            console.log(formData);
                        }}
                    >
                        {props => (
                            <Paper elevation={0} component={'form'} sx={styles.formBox} onSubmit={props.handleSubmit}>
                                <Box sx={styles.eachField}>
                                    <InputLabel sx={styles.label}>Country Code</InputLabel>
                                    <TextField type='text' sx={styles.userInput}
                                        name="countryCode"                                     
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        onFocus={props.handleBlur}
                                        value={props.values.countryCode}
                                        error={props.touched.countryCode && Boolean(props.errors.countryCode)}
                                        helperText={props.touched.countryCode && props.errors.countryCode}
                                    />
                                </Box>
                                <Box sx={styles.eachField}>
                                    <InputLabel sx={styles.label}>Name</InputLabel>
                                    <TextField type='text' sx={styles.userInput}
                                        name="name"                                     
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        onFocus={props.handleBlur}
                                        value={props.values.name}
                                        error={props.touched.name && Boolean(props.errors.name)}
                                        helperText={props.touched.name && props.errors.name}
                                    />
                                </Box>
                                <Box sx={styles.eachField}>
                                    <InputLabel sx={styles.label}>Email</InputLabel>
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
                                    <InputLabel sx={styles.label}>Mobile number</InputLabel>
                                    <TextField type='text' sx={styles.userInput}
                                        name="mobile"                                     
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        onFocus={props.handleBlur}
                                        value={props.values.mobile}
                                        error={props.touched.mobile && Boolean(props.errors.mobile)}
                                        helperText={props.touched.mobile && props.errors.mobile}
                                    />
                                </Box>
                                <Box sx={styles.eachField}>
                                    <InputLabel sx={styles.label}>Password (6+ characters)</InputLabel>
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
                                </Box>
                                <Box sx={styles.eachField}>
                                    <InputLabel sx={styles.label}>Role</InputLabel>
                                    <TextField type='text' sx={styles.userInput}
                                        name="role"                                     
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        onFocus={props.handleBlur}
                                        value={props.values.role}
                                        error={props.touched.role && Boolean(props.errors.role)}
                                        helperText={props.touched.role && props.errors.role}
                                    />
                                </Box>
                                <Box>
                                <InputLabel sx={styles.label}>Profile</InputLabel>
                                    <InputBase type="file" name='profile'  id='picInput' 
                                     onChange={onChangeImage}
                                     onBlur={props.handleBlur}
                                     onFocus={props.handleBlur}                                                                        
                                    />
                                </Box>
                                <Typography sx={styles.policyText}>
                                    By clicking Agree & Join, you agree to the LinkedIn <Box component={'span'} sx={styles.linkedPolicy}>User Agreement</Box>,
                                    <Box component={'span'} sx={styles.linkedPolicy}> Privacy Policy</Box>, and 
                                    <Box component={'span'} sx={styles.linkedPolicy}> Cookie Policy</Box>.
                                </Typography>
                                <Button variant="contained" type='submit' sx={styles.agreeBtn}>Agree & Join</Button>
                                <Box sx={styles.lineOrBox}>
                                    <Box component={'hr'} sx={styles.line} />
                                    <Typography>or</Typography>
                                    <Box component={'hr'} sx={styles.line} />
                                </Box>
                                <Box sx={styles.googleBox}>
                                    <GoogleLogin                        
                                        onSuccess={() => {navigate('/signin')}}
                                        onError={() => {}}
                                        useOneTap
                                        size='large'
                                        text='continue_with'  
                                        shape="pill"     
                                        width={'330px'}    
                                        logo_alignment='center'  
                                    />
                                </Box>
                                <Box sx={styles.alreadyBox}>
                                    <Typography>Already on LinedIn? <Box component={'span'} sx={styles.signInBtn} onClick={() => navigate('/signin')}>Sign in</Box></Typography>
                                </Box>
                            </Paper>
                        )}                   
                    </Formik>
                    <Box sx={styles.businessBox}>
                        <Typography sx={styles.getHelpText}>Looking to create a page for a business? <Box component={'span'} sx={styles.signInBtn}>Get help</Box></Typography>
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
export default SignUp
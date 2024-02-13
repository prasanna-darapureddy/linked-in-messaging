export const styles = {
    bgContainer:{
        backgroundColor:{xs:'#fff', md:'#f3f2f0'},
        backgroundSize:'cover',
        display:'flex',
        flexDirection:'column',
        paddingBottom:'30px',
    },
    contentContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems: {lg:'center'},
        padding:'10px',
        gap:2,
        margin:{lg: '0px 200px'},
    },
    heading:{
        fontSize:{xs:'20px', sm:'30px', md:'40px', lg:'50px'},
    },
    logoContainer:{
        alignSelf: 'flex-start',
    },
    logo:{
        cursor: 'pointer',
    },
    middleContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems: {sm:'center'},
        gap:2,
    },
    formBox:{
        padding:'25px',
        display:'flex',
        borderRadius:'8px',
        flexDirection:'column',
        width:{sm:'350px'},
        gap:3
    },
    eachField:{
        display:'flex',
        flexDirection:'column',
        gap:0.5
    },
    userInput:{
        "& .MuiOutlinedInput-root fieldset": {
            border: '1px solid #000',
        },
        "& .MuiOutlinedInput-root":{
            borderRadius: '5px',
            padding: '2px',
        },
        "& .MuiOutlinedInput-input": {
            padding: '2px',
            paddingLeft:'18px',
        },
        "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #000 ",
            
        }
    },
    label:{
        color:'#40434c',
        fontWeight:600,
        fontSize:'14px',
    },
    policyText:{
        width:{xs:'100%', md:'330px'},
        textAlign:'center',
        alignSelf:'center',
        fontSize:'12px',
        color:'#666b6b',
    },
    linkedPolicy:{
        color:'#0a66c2',
        fontSize:'13px',
        fontWeight:600
    },
    agreeBtn:{
        borderRadius:'20px',
        textTransform:'capitalize',
        fontWeight:'bold',
        fontSize:'16px',
        padding:'10px',
        backgroundColor:'#0a66c2',
    },
    showPswdBtn:{
        fontWeight:'bold',
        textTransform:'capitalize',
        fontSize:'16px',
    },
    lineOrBox:{
        display:'flex',
        alignItems: 'center',
    },
    line:{
        color:'#ccc',
        width:'40%',
        height:'0.0px',
    },
    alreadyBox:{
        display:'flex',        
        justifyContent: 'center',
        color:'#000',
    },
    signInBtn:{
        fontWeight:'bold',
        cursor:'pointer',
        color:'#0a66c2',
        "&: hover":{
            textDecoration:'underline',
        }        
    },
    googleBox:{
        display:'flex',
        justifyContent: 'center',
    },
    getHelpText:{
        fontSize:'14px',
        textAlign:'center',
    },
    businessBox:{
        display:'flex',
        justifyContent: 'center',
    },
    footerComponent:{
        display:{xs:'none', md:'flex',},
        justifyContent: 'center',
    },
    profilePic:{
        height:'50px',
        width:'50px',
        borderRadius:'50px',
        border:'1px solid #ccc',
    },    
}
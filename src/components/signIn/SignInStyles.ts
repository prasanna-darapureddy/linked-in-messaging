export const styles = {
    bgContainer:{
        backgroundSize:'cover',
        display:'flex',
        flexDirection:'column',
        padding:'20px',
        paddingBottom:'0px',
    },
    contentContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems: {xl:'center'},
        padding:'10px',
        gap:2,
        margin:{xl: '0px 30px'},
    },
    logo:{
        cursor: 'pointer',
    },
    signInTextBox:{
        display:'flex',
        flexDirection:'column',        
    },
    signInText:{
        fontWeight:'bold',
        marginBottom:'0px',
        paddingBottom:'0px',
    },
    signInSubText:{
        fontSize:'14px',
    },
    logoContainer:{
        alignSelf: 'flex-start',
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
        width:{xs:'100%', sm:'300px'},
        gap:2.5,
        boxShadow: '0px 4px 16px 0px solid #ccc',
        elevation:{xs: 0, sm:2}
    },
    eachField:{
        display:'flex',
        flexDirection:'column',
        gap:0.5
    },
    userInput:{
      width:'100%'
    },
    label:{
        color:'#40434c',
        fontWeight:600,
        fontSize:'14px',
    },
    policyText:{
        width:{xs:'100%', md:'300px'},
        textAlign:'left',
        alignSelf:'center',
        fontSize:'12px',
    },
    linkedPolicy:{
        color:'#0a66c2',
        fontSize:'12px',
        fontWeight:600,
        "&: hover":{
            textDecoration:'underline',
        }    
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
    joinNowBtn:{
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
    },

    forgotBtn:{
        textTransform:'capitalize',
        fontWeight:'bold',
        color:'#0a66c2',
        "&:hover":{
            textDecoration:'underline',
        },
    },
    anotherAccount:{
        textTransform:'capitalize',
        "&:hover":{
            textDecoration:'underline',
        },
    },
    businessBox:{
        display:'flex',
        justifyContent: 'center',
    },
    footerComponent:{
        display:{xs:'none', md:'flex',},
        justifyContent: 'center',
    }
}
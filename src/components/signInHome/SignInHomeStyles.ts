export const styles = {
    bgContainer:{
        backgroundColor:'#fff',
        backgroundSize:'cover',
        display:'flex',
        flexDirection:'column',
        padding:'20px',
        gap:3.8
    },
    navBarBox:{
        display:'flex',
        justifyContent: 'space-between',
        margin:{lg: '0px 200px'},
    },
    contentContainer:{
        display:'flex',        
        alignItems: {lg:'center'},
        padding:'10px',
        gap:6,
        marginLeft:{lg: '200px'},
    },
    lognInBox:{
        width:'50%',
        display:'flex',
        flexDirection:'column',
        gap:3
    },
    logo:{
        cursor: 'pointer',
    },
    heading:{
        fontSize:{xs:'20px', sm:'30px', md:'40px', lg:'55px'},
        color:'#ba5438',
        width:'80%',
        fontFamily:'Dosis',
    },
    
    navMenusBox:{
        display:'flex',
        gap:3
    },
    divide:{
        borderRight: '1px solid #666',
    },
    eachMenu:{
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        color:'#666666',
        gap:0.5
    },
    peopleIcon:{
        fontSize:'28px',
    },
    menuText:{
        fontSize:'12px',
    },
    navJoinBtn:{
        color:'#000',
        fontWeight:'bold',
        borderRadius:'20px',
        padding:'10px',
        textTransform:'capitalize',
        width:'100px',
    },
    navSignInBtn:{
        color:'#0a66c2',
        fontWeight:'bold',
        borderRadius:'20px',
        padding:'10px',
        textTransform:'capitalize',
        border:'1px solid #0a66c2',
        width:'100px',        
    },
    middleContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems: {sm:'center'},
        gap:2,
    },
    formBox:{
        display:'flex',
        borderRadius:'8px',
        flexDirection:'column',
        width:{sm:'380px'},
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
            padding: '12px',
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
        width:{xs:'100%',},
        textAlign:'left',
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
    forgotBtn:{
        textTransform:'none',
        textAlign:'left',
        alignSelf: 'flex-start',
        color:'#0a66c2',
        marginTop:'10px',
        fontWeight:'bold',
        "&:hover":{
            textDecoration:'underline',
        },
    },
    
    honeImage:{
        height:'100%',
        width:'100%',

    },
    joinInBtn:{
        border:'1px solid #000',
        borderRadius:'20px',
        color:'#000',
        textTransform:'none',
        fontWeight:'bold',
    }
    
}
export const styles = {
    bgBox:{
        backgroundColor:'#f4f2ee',
        paddingTop:'50px',
        boxSizing:'border-box',
        minHeight:'100vh'   
    },
    contentBox:{
        display:'flex', 
        flexDirection:{xs:'column', md:'row'},
        gap:2.5,   
    },
    manageNotifBox:{
        padding:'20px',
        border:'1px solid #ccc', 
        display:'flex',
        flexDirection:'column',
        height:'100%',
        gap:1
    },
    manageTxt:{
        fontWeight:'bold',
        width:'50%',
    },
    viewSettings:{
        fontWeight:'bold',
        color:'#0a66c2',
        "&:hover":{
            textDecoration: 'underline',
        }
    },
    notificationTotalBox:{
        display:'flex',
        flexDirection:'column',
        gap: 2,
        flex:1,
        height:'100%',
    },
    buttonsBox:{
        display:'flex',
        alignItems:'center',
        backgroundColor:'#fff',
        border:'1px solid #ccc',
        borderRadius:'5px',
        padding:'10px',
        gap:2
    },
    activeBtn:{
        color:'#fff',
        backgroundColor:'#01754f',
        padding:'3px',
        borderRadius:'20px',
        fontWeight:'bold',
        textTransform:'none',
        fontSize:'16px',
    },
    outlinedBtn:{
        color:'#000',
        border: '1px solid #ccc',        
        borderRadius:'20px',
        fontWeight:'bold',
        textTransform:'none',
        fontSize:'16px',
        "&:hover":{
            outline:'1px solid #ccc',
            border:'1px solid #ccc',
        }
    },
    NotificationBox:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#fff',
        border:'1px solid #ccc',
        borderRadius:'5px',
        padding:'10px',
    },   
}
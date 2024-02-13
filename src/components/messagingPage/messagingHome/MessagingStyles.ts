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
    mobileMessagingBox:{
        backgroundColor:'#fff',
        border:'1px solid #ccc', 
        borderRight:'none',
        borderRadius:'5px',
        display:{xs:'block', sm:'none'},
    },
    totalMessagingBox:{
        border:'1px solid #ccc', 
        backgroundColor:'#fff',
        borderRadius:'10px',
        display:{xs:'none', sm:'flex'},
        width:{sm:'100%', md:'80%'},
    },

    messagingMainBox:{
        width:{sm:'40%'}
    },
   
}
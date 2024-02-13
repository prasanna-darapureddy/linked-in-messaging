 export const styles = {
    salesBox:{
        display:'flex', 
        flexDirection:'column',
    },
    addCard:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        backgroundColor:'#fff',
        border:'1px solid #ccc',
        borderRadius:'5px',
        padding:'10px 30px 30px 30px',
        height:{xs:'100%', md:'250px'},
        width:{md:'280px'},
    },
    salesContentBox:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        gap:1
    },
    addBox:{
        alignSelf:'flex-end',
        display:'flex',
        alignItems:'center',
        fontSize:'12px',
    },
    topText:{
        color:'#737373',
        fontSize:'13px',
        textAlign:'center',
    },
    addImage:{
        height:'100px',
        width:'100px',
    },
    addMainText:{
        textAlign:'center',
    },
    followBtn:{
        textTransform:'capitalize',
        fontWeight:'bold',
        borderRadius:'20px',
        outlineColor:'primary'
    },
    footerBox:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
    },
    footerContentBox:{
        padding:'10px 30px 20px 30px',
        display:'flex',
        flexWrap:'wrap',
        justifyContent: 'center',
        gap:1.5,
        width:{md:'250px'},
    },
    footerItem:{
        color:'#756a64',
        fontSize:'12px',
        "&:hover":{
            color:'#0a66c2',
            textDecoration:'underline',
        },
        
    },
    iconItem:{
        display:'flex',
        alignItems: 'center',
    },
    copyRightBox:{
        display:'flex',
        alignItems: 'center',
    },
    copyRightItem:{
        color:'#181817',
        fontSize:'13px',
    }
    
}
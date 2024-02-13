export const styles = {
    messagingBox:{        
        display:'flex',
        flexDirection:'column',
    },
    msgHeadersItem:{
        display:'flex',
        justifyContent: 'space-between',        
        borderBottom:'1px solid #ccc',
        padding:'10px',
    },
    msgHeading:{
        fontWeight:'bold',
        fontFamily:'Oxygen mono'
    },
    messagIconsBox:{
        fontSize:'26px',
        color:'#666666',
        display:'flex',
        alignItems: 'center',
        gap:2
    },
    searchBoxItem:{
        padding:'10px',
    },
    searchBox:{
        backgroundColor:'#edf3f8',
        borderRadius:'5px',
        display:'flex',
        "&:hover":{
            outline:'2px solid #000',
        }
    },
    searchIcon:{
        color:'#3b3d3e',
        fontSize:{xs:'18px', sm:'20px',}
    },
    searchFilterIcon:{
        alignSelf:'flex-end',
        textAlign:'right',
    },
    searchInput:{
        fontFamily:'Oxygen mono',
        width:'100%',
        "& input": { color:'#3b3d3e', "&::placeholder": { color:'#3b3d3e', opacity: 1, fontSize:'13px' }}
    },
    tabsMainContainer:{        
        position: 'relative',
    },
    appBar:{
        position:"static",
        backgroundColor:"transparent",
        elevation:"0px",
        boxShadow:"none",
        borderBottom:"1px solid #ccc",
    },
    tabItem:{
        textTransform:"capitalize",
        color:'#444444',
        fontWeight:'bold'
    },
    allUsersLit:{
        display:'flex',
        flexDirection:'column',
        maxHeight:500,
        overflowY:'auto',
        visibility:'scroll',
    },
    moreLoaderBox:{
        display:'flex',
        justifyContent: 'center',
        padding:'15px',
    },
    loaderText:{
        fontWeight:'bold',
        color:'#888a8e',
    },
    moreMenus:{
        width:'250px',
        fontWeight:'bold',
    }
}
export const styles = {
    tabContentBox:{
        paddingLeft:'8px',        
        display:'flex',
        flexDirection:'column',    
        "&:hover":{
            backgroundColor:'#e8e8e8',
        },
    },
    eachUserItem:{
        display:'flex',
        gap:1,
        alignItems: 'center',
    },
    profilePic:{
        height:'50px',
        width:'50px',
        borderRadius:'50px',
        border:'1px solid #ccc',
    },
    contentBox:{
        display:'flex',
        justifyContent: 'space-between',        
        borderBottom: '1px solid #ccc',
        padding:'8px',
        paddingBottom: '20px',
        width:'100%',  
    },
    subText:{
        color:'#888a8e',
        fontSize:'14px',
    },
    dateBox:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'flex-end',
    },
    date:{
        fontSize:'12px',
        textAlign:'right',
    },
    favStarIcon:{
        color:'#c37d16',      
        fontSize:'20px',
    },
    activeUser:{
        backgroundColor:'#edf3f8',
        borderLeft: '3px solid #01754f',
    },

}
import { Box, Typography } from "@mui/material";
import { styles } from "./MsgUserItemStyles";
import { Star } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { getSelectedChattingUser } from "../../../../redux/reducers/slice/Slice";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
  eachUserDetails: {
      userId: number;
      firstName: string;
      lastName: string;
      designation: string;
      location: string;
      connections: number;
      profilePicture: string;
      contactInfo: {
        yourProfile: string;
        email: string;
        phoneNumber: string;
      };
      posts: [
        {
          postId: number;
          content: string;
          attachment: string;
        }
      ];
      messages: [
        {
          to: string;
          from: string;
        }
      ];
      isFavorite: boolean;
  };
  isActiveUser: boolean;
}

function MessagingUserItem(props: TabPanelProps) {
    const { children, value, index, eachUserDetails, isActiveUser, ...other } = props;
    const dispatch = useDispatch()

    const onClickUser = (userId: number) => {
      dispatch(getSelectedChattingUser(userId))
    }
    
    const activeUserStyle = isActiveUser && styles.activeUser

    return (
      <Box
        sx={{...styles.tabContentBox, ...activeUserStyle}}
        role="tabpanel"
        hidden={value !== index}
        id={`action-tabpanel-${index}`}
        aria-labelledby={`action-tab-${index}`}
        {...other}
        onClick={() => onClickUser(eachUserDetails.userId)}
      >
        {value === index && 
        <Box sx={styles.eachUserItem}>
            <Box component={'img'} src={eachUserDetails.profilePicture} alt='profile image' sx={styles.profilePic}/>
            <Box sx={styles.contentBox}>
                <Box>
                    <Typography>{eachUserDetails.firstName +" "+ eachUserDetails.lastName}</Typography>  
                    <Typography sx={styles.subText}>{eachUserDetails.firstName}: last message</Typography>  
                </Box>
                <Box sx={styles.dateBox}>
                  <Typography sx={styles.date}>Dec 28, 2023</Typography>
                  {eachUserDetails.isFavorite ? <Star sx={styles.favStarIcon}/> : null}
                </Box>
            </Box>            
        </Box>
        }
      </Box>
    );
}

export default MessagingUserItem
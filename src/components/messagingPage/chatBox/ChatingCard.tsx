import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputBase, Menu, MenuItem, Typography } from "@mui/material"
import { MdVideoCall } from "react-icons/md";
import { FaRegImage } from "react-icons/fa6";
import { ImAttachment } from "react-icons/im";
import { styles } from "./ChatingStyles"
import { Bolt, CalendarMonth, Close, LinkedIn, MoreHoriz, SentimentSatisfiedAlt, Star, StarOutline, TripOrigin } from "@mui/icons-material"
import { useState } from "react";
// import EmojiPicker from 'emoji-picker-react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/Store";
import { isFavoriteChatUser } from "../../../redux/reducers/slice/Slice";

function ChatingCard() {
  const [moreIcon, setMoreIcon] = useState<null | HTMLElement>(null);
  const [videoIcon, setVideoIcon] = useState<null | HTMLElement>(null);
  const openMore = Boolean(moreIcon);
  const openVideo = Boolean(videoIcon);
  const dispatch = useDispatch()

  const {selectedChattingUser} = useSelector((state:RootState) => state.linkedIn)
  
  const onClickMoreIcon = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMoreIcon(event.currentTarget);
  };
  const onCloseMore = () => {
      setMoreIcon(null);
  };

  const onClickVieoIcon = (event: React.MouseEvent<HTMLButtonElement>) => {
    setVideoIcon(event.currentTarget);
  };
  const onCloseVideoIcon = () => {
    setVideoIcon(null);
  };

  const onClickStarIcon = (userId: number) => {
    dispatch(isFavoriteChatUser(userId))  
  }

  return (
    <>
      <Box sx={styles.bgContainer}>
        <Box sx={styles.chatHeadersItem}>
          <Box sx={styles.userInfoBox}>
            <Typography sx={styles.userName}>{selectedChattingUser.firstName + selectedChattingUser.lastName}</Typography>
            <Box sx={styles.userAvlblity}>
              <TripOrigin sx={styles.onlineIcon}/>
              <Typography sx={styles.onlineText}>Available on mobile</Typography>
            </Box>
          </Box>
          <Box sx={styles.HeadersiconsBox}>
            <IconButton
              id="icon-button"
              aria-controls={openMore ? 'more-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openMore ? 'true' : undefined}
              onClick={onClickMoreIcon}
              >
                <MoreHoriz />                       
            </IconButton>                               
            <Menu
              id="more-menu"
              anchorEl={moreIcon}
              open={openMore}
              onClose={onCloseMore}
              
            > 
              <Box sx={styles.moreMenus}>
                <MenuItem >Move to Other</MenuItem>
                <MenuItem >Mark as Unread</MenuItem>
                <MenuItem >Star</MenuItem>
                <MenuItem >Mute</MenuItem>
                <MenuItem >Archive</MenuItem>
                <MenuItem >Report/Block</MenuItem>
                <MenuItem >Delete Conversation</MenuItem>
                <MenuItem >Manage Settings</MenuItem>
              </Box>
            </Menu>
            <IconButton
              id="icon-button"
              aria-controls={openVideo ? 'video-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openVideo ? 'true' : undefined}
              onClick={onClickVieoIcon}
              >
                <MdVideoCall />
            </IconButton>  
            <Dialog
              onClose={onCloseVideoIcon}
              aria-labelledby="customized-dialog-title"
              open={openVideo}
            >
              <DialogTitle sx={styles.title} id="customized-dialog-title">
                Create a video meeting
              </DialogTitle>
              <IconButton
                aria-label="close"
                onClick={onCloseVideoIcon}
                sx={styles.modalCloseBtn}
              >
                <Close   />
              </IconButton>
              <DialogContent dividers sx={styles.modelContent}>
                <Box sx={styles.modelContentItem}>
                  <Bolt/>
                  <Typography>Send instant meeting</Typography>
                </Box>
                <Box sx={styles.modelContentItem}>
                  <CalendarMonth/>
                  <Typography>Schedule meeting for later</Typography>
                </Box>
              </DialogContent>
              <DialogActions>
                <Box sx={styles.modalactionsBox}>
                  <Box sx={styles.modelContentItem}>
                    <LinkedIn sx={styles.linkedInIcon}/>
                    <Typography>You are using linkedIn video meetings</Typography>
                  </Box>
                  <Button sx={styles.modelBtn}>
                    Select a different provider
                  </Button>
                </Box>
              </DialogActions>
            </Dialog>  
            <IconButton onClick={() => onClickStarIcon(selectedChattingUser.userId)}>
              {selectedChattingUser.isFavorite ? <Star sx={styles.favStarIcon}/> : <StarOutline />}
            </IconButton>          
          </Box>          
        </Box>
        <Box sx={styles.profileChatBox}>
          <Box sx={styles.chatProfileBox}>
            <Box sx={styles.proPicBox}>
              <Box component={'img'} src={selectedChattingUser.profilePicture} alt='Profile' sx={styles.profilePic}/>
              <TripOrigin sx={styles.profileOnlineIcon}/>
            </Box>
            <Box sx={styles.profileContent}>
              <Typography sx={styles.chatUserName}>{selectedChattingUser.firstName + selectedChattingUser.lastName}</Typography>
              <Typography sx={styles.chatUserSubTxt}>{selectedChattingUser.designation}Aspiring MERN Stack Developer | CCBPian  at NxtWave</Typography>
            </Box>
          </Box>

          <Box sx={styles.chatFlowBox}>

          </Box>
        </Box>
        <Box sx={styles.chatInputBox}>
          <InputBase multiline rows={4} type="text" sx={styles.chatInput} placeholder="Write a message..." />
        </Box>
        <Box sx={styles.attachmentsBox}>
          <Box sx={styles.footersIconsBox}>
            <IconButton component={'label'} htmlFor='imgIcon'>
              <FaRegImage style={styles.imgIcon}/>
            </IconButton>
            <InputBase type="file"  id='imgIcon' sx={styles.fileInput}/>
            <IconButton component={'label'} htmlFor='attachIcon'>
              <ImAttachment style={styles.pinIcon}/>
            </IconButton>
            <InputBase type="file"  id='attachIcon' sx={styles.fileInput}/> 

            <IconButton>
              <Typography style={styles.gifIcon}>GIF</Typography>
            </IconButton>

            <IconButton>
              <SentimentSatisfiedAlt sx={styles.smileIcon}/>
            </IconButton>
          </Box>
          <Box sx={styles.sendMoreBox}>
            <Button sx={styles.sendBtn} variant="contained">Send</Button>
            <IconButton>
              <MoreHoriz/>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ChatingCard
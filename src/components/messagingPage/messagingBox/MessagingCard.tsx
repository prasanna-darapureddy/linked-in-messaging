import { MoreHoriz, Search, TuneSharp } from "@mui/icons-material"
import { AppBar, Box, IconButton, InputBase, Menu, MenuItem, Tab, Tabs, Typography } from "@mui/material"
import SwipeableViews from 'react-swipeable-views';
import { BiEdit } from "react-icons/bi";
import { styles } from "./MessagingCardStyles"
import MessagingUserItem from "./messagingUserItem/MsgUserItem"
import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/Store";
import { getSearchedChatUsers } from "../../../redux/reducers/slice/Slice";


interface IState{
    tabValue: number;
}

function a11yProps(index: number) {
    return {
      id: `action-tab-${index}`,
      'aria-controls': `action-tabpanel-${index}`,
    };
}

function MessagingBox() {
    const [tabValue, setTabValue] = useState<IState['tabValue']>(0);
    const [filterIcon, setFilterIcon] = useState<null | HTMLElement>(null);
    const openFilterIcon = Boolean(filterIcon);    
    const [moreIcon, setMoreIcon] = useState<null | HTMLElement>(null);
    const openMoreIcon = Boolean(moreIcon);
    const dispatch = useDispatch()

    const {usersData, selectedChattingUser} = useSelector((state:RootState) => state.linkedIn)
  
    const onClickMoreIcon = (event: React.MouseEvent<HTMLButtonElement>) => {
      setMoreIcon(event.currentTarget);
    };
    const onClickMoreClose = () => {
        setMoreIcon(null);
    };

    const onClickFilterIcon = (event: React.MouseEvent<HTMLButtonElement>) => {
        setFilterIcon(event.currentTarget);
    };
    const onClickFilterClose = () => {
        setFilterIcon(null);
    };

  const handleChange = (event: unknown, newTabValue: number) => {
    setTabValue(newTabValue);
  };

  const handleChangeIndex = (index: number) => {
    setTabValue(index);
  };

  const onChangeSearchMessage = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(getSearchedChatUsers(event.target.value));
  }

  return (
    <>
        <Box sx={styles.messagingBox}>
            <Box sx={styles.msgHeadersItem}>
                <Typography sx={styles.msgHeading}>Messaging</Typography>
                <Box sx={styles.messagIconsBox}>
                <IconButton
                    id="icon-button"
                    aria-controls={openMoreIcon ? 'more-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMoreIcon ? 'true' : undefined}
                    onClick={onClickMoreIcon}
                    >
                        <MoreHoriz />                       
                    </IconButton>                               
                    <Menu
                    id="more-menu"
                    anchorEl={moreIcon}
                    open={openMoreIcon}
                    onClose={onClickMoreClose}
                    > 
                    <MenuItem>Manage Conversastions</MenuItem>
                    <MenuItem>Set away messages</MenuItem>
                    <MenuItem>Manage Settings</MenuItem>
                    </Menu>                    
                    <BiEdit/>
                </Box>
            </Box>
            <Box sx={styles.searchBoxItem}>
                <Box sx={styles.searchBox}>
                    <IconButton>
                        <Search sx={styles.searchIcon}/>
                    </IconButton>
                    <InputBase
                        sx={styles.searchInput}
                        placeholder="Search messages"  
                        onChange={onChangeSearchMessage}                                  
                    />
                    <IconButton
                    id="icon-button"
                    aria-controls={openFilterIcon ? 'filter-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openFilterIcon ? 'true' : undefined}
                    onClick={onClickFilterIcon}
                    >
                        <TuneSharp sx={{...styles.searchIcon, ...styles.searchFilterIcon}}/>                        
                    </IconButton>                               
                    <Menu
                        id="filter-menu"
                        anchorEl={filterIcon}
                        open={openFilterIcon}
                        onClose={onClickFilterClose}
                    >
                        <MenuItem>Unread</MenuItem>
                        <MenuItem>Stared</MenuItem>
                        <MenuItem>InMail</MenuItem>
                        <MenuItem>My Connections</MenuItem>
                        <MenuItem>Archived</MenuItem>
                        <MenuItem>Span</MenuItem>
                    </Menu>
                </Box>
            </Box>
            <Box sx={styles.tabsMainContainer}>
                <AppBar sx={styles.appBar}>
                    <Tabs                                                   
                    value={tabValue}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="fullWidth"                                
                    >
                        <Tab label="Focused" {...a11yProps(0)} sx={styles.tabItem}/>
                        <Tab label="Other" {...a11yProps(1)}  sx={styles.tabItem}/>                                
                    </Tabs>
                </AppBar>
                <SwipeableViews 
                    axis='x'                    
                    index={tabValue}
                    variant="fullWidth" 
                    onChangeIndex={handleChangeIndex}
                    >
                        <Box sx={styles.allUsersLit}>
                            {usersData.map(eachUser => (
                                <MessagingUserItem value={tabValue} index={0} eachUserDetails={eachUser} 
                                key={eachUser.userId}
                                isActiveUser = {eachUser.userId === selectedChattingUser.userId}
                                />                                        
                            ))}  
                            <Box sx={styles.moreLoaderBox}>
                                <Typography sx={styles.loaderText}>Load more conversations</Typography>
                            </Box>  
                        </Box>
                        <Box sx={styles.allUsersLit}>
                            {usersData.slice(0,1).map(eachUser => (
                                <MessagingUserItem value={tabValue} index={1} eachUserDetails={eachUser} 
                                key={eachUser.userId}
                                isActiveUser = {eachUser.userId === selectedChattingUser.userId}
                                /> 
                            ))}  
                        </Box>                                                                              
                </SwipeableViews>    
            </Box>
        </Box>
    </>    
  )
}
export default MessagingBox
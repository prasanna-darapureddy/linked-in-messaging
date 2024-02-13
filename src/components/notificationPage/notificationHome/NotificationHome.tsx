import { Box, Button, Container, Paper, Typography} from '@mui/material'
import { styles } from './NotificationHomeStyles'
import SalesCard from '../../messagingPage/salesBox/SalesCard'
import NotificationCard from '../notificationsCard/NotificationCard'


function Notifications() {    
  return (
    <>
        <Box sx={styles.bgBox}>
            <Container maxWidth={'lg'} sx={styles.contentBox}>
                <Paper sx={styles.manageNotifBox}>
                    <Typography sx={styles.manageTxt}>Manage Your notifications</Typography>
                    <Typography sx={styles.viewSettings}>View Settings</Typography>
                </Paper>

                <Box sx={styles.notificationTotalBox}>
                    <Box sx={styles.buttonsBox}>
                        <Button variant='contained' sx={styles.activeBtn}>All</Button>
                        <Button variant='outlined' sx={styles.outlinedBtn}>My posts</Button>
                        <Button variant='outlined' sx={styles.outlinedBtn}>Mentions</Button>                        
                    </Box>
                    <Box sx={styles.NotificationBox}>
                        <NotificationCard />
                    </Box>
                </Box>
                
                <Box>
                    <SalesCard/>
                </Box>
            </Container>
        </Box>
    </>
  )
}
export default Notifications
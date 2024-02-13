import { Box, Container} from '@mui/material'
import { styles } from './MessagingStyles'
import ChatingCard from '../chatBox/ChatingCard';
import MessagingCard from '../messagingBox/MessagingCard';
import SalesCard from '../salesBox/SalesCard';


function Messaging() {    
  return (
    <>
        <Box sx={styles.bgBox}>
            <Container fixed sx={styles.contentBox}>
                <Box sx={styles.mobileMessagingBox}>
                    <MessagingCard />
                </Box>
                <Box sx={styles.totalMessagingBox}>
                    <Box sx={styles.messagingMainBox}>
                        <MessagingCard />
                    </Box>
                    <ChatingCard />
                </Box>
                <Box>
                    <SalesCard/>
                </Box>
            </Container>
        </Box>
    </>
  )
}
export default Messaging
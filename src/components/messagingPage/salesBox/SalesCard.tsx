import { Box, Button, Typography} from '@mui/material'
import { ArrowDropDown, MoreHoriz } from '@mui/icons-material';
import footerLogo from '../../../assets/footerLogo.png'
import addImg from '../../../assets/adImg.png'
import { styles } from './SalesCardStyles';


function SalesCard() {    
  return (
    <>
        <Box sx={styles.salesBox}>
            <Box sx={styles.addCard}>
                <Typography sx={styles.addBox}>Add  <MoreHoriz/></Typography>
                <Box sx={styles.salesContentBox}>
                    <Typography sx={styles.topText}>Follow to get updates on green energy and mobility.</Typography>
                    <Box component={'img'} src={addImg} alt='Add img' sx={styles.addImage}/>
                    <Typography sx={styles.addMainText}>Hitachi Social Innovation is POWERING GOOD</Typography>
                    <Button variant='outlined' sx={styles.followBtn}>Follow</Button>
                </Box>   
            </Box>
            <Box sx={styles.footerBox}>
                <Box sx={styles.footerContentBox}>
                    <Typography sx={styles.footerItem}>About</Typography>
                    <Typography sx={styles.footerItem}>Accebility</Typography>
                    <Typography sx={styles.footerItem}>Help Center</Typography>
                    <Typography sx={{...styles.footerItem, ...styles.iconItem}}>Privacy & Terms <ArrowDropDown/></Typography>
                    <Typography sx={styles.footerItem}>Add Choices</Typography>
                    <Typography sx={styles.footerItem}>Advertising</Typography>
                    <Typography sx={{...styles.footerItem, ...styles.iconItem}}>Bussiness Services <ArrowDropDown/></Typography>
                    <Typography sx={styles.footerItem}>Get the LinkedIn app</Typography>
                    <Typography sx={styles.footerItem}>More</Typography>  
                </Box>
                <Box sx={styles.copyRightBox}>
                    <Box component={'img'} src={footerLogo} alt='LinkedIn'/>
                    <Typography sx={styles.copyRightItem}>LinkedIn Corporation © 2024</Typography>
                </Box>                      
            </Box>
        </Box>
    </>
  )
}
export default SalesCard
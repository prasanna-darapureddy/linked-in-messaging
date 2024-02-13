import { Box } from '@mui/material'
import { SiLinkedin } from "react-icons/si";
import { KeyboardArrowDownSharp } from "@mui/icons-material";
import { styles } from './SignUpFooterStyles'

function SignUpFooter() {
  return (
        <Box sx={styles.footerBox}>
            <Box sx={styles.linkedOrgBox}>
                LinkedIn<SiLinkedin />
            </Box>
            <Box sx={styles.footerItem}>
                <Box component={'span'} sx={styles.copyRightText}>© 2024 </Box>
            </Box>
            <Box sx={styles.footerItem}>
                <Box component={'span'} sx={styles.eachMenu}>About</Box>                 
            </Box>
            <Box sx={styles.footerItem}>
                <Box component={'span'} sx={styles.eachMenu}>Accessibility</Box>                 
            </Box>
            <Box sx={styles.footerItem}>
                <Box component={'span'} sx={styles.eachMenu}>User Agreement</Box>                   
            </Box>
            <Box sx={styles.footerItem}>
                <Box component={'span'} sx={styles.eachMenu}>Privacy Policy</Box> 
            </Box>
            <Box sx={styles.footerItem}>
                <Box component={'span'} sx={styles.eachMenu}>Cookie Policy</Box>                 
            </Box>
            <Box sx={styles.footerItem}>
                <Box component={'span'} sx={styles.eachMenu}>Copyright Policy</Box>
            </Box>
            <Box sx={styles.footerItem}>
                <Box component={'span'} sx={styles.eachMenu}>Brand Policy</Box>                  
            </Box>
            <Box sx={styles.footerItem}>
                <Box component={'span'} sx={styles.eachMenu}>Guest Controls</Box>
            </Box>
            <Box sx={styles.footerItem}>
                <Box component={'span'} sx={styles.eachMenu}>Community Guidelines</Box>
            </Box>
            <Box sx={styles.footerItem}>
                <Box component={'span'} sx={styles.eachMenu}>Language <KeyboardArrowDownSharp /></Box>                
            </Box>
        </Box>
  )
}

export default SignUpFooter
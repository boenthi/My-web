import { AppBar,Typography,Box,Button,Grid} from '@mui/material'
import React from 'react'
import Logo from "@/components/photo";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export const Nav = () => {
// const pages = ['Home', 'Contact', 'About',];
  return (
   <div>
     <AppBar>
      <Grid container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        padding={'25px'}>
        <Grid>
             <Typography variant="h6"  component="div" >
              <Logo/>
            </Typography>
        </Grid>
        <Grid>
      
        
        </Grid>
        <Grid>
            <Box>
                <Button variant="contained" endIcon={<ArrowDownwardIcon/>} fullWidth>
                  download
               </Button>
            </Box>
        </Grid>
     </Grid>
       
    </AppBar>
   </div>
  )
}

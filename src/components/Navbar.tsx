
import { AppBar,Typography,Box,Button,Grid2} from '@mui/material'
import React from 'react'
import Logo from '@/components/Logo'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export const Nav = () => {
// const pages = ['Home', 'Contact', 'About',];
  return (
    <AppBar >
      <Grid2 container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        padding={'25px'}>
        <Grid2>
             <Typography variant="h6"  component="div" >
              <Logo/>
            </Typography>
        </Grid2>
        <Grid2>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>

            ))}
          </Box> */}
        
        </Grid2>
        <Grid2>
            <Box>
                <Button variant="contained" endIcon={<ArrowDownwardIcon/>} fullWidth>


            ))}
          </Box>
        
        </Grid2> */}
        <Grid2>
            <Box>
                <Button variant="contained" fullWidth endIcon={<ArrowDownwardIcon/>}>

                  download
               </Button>
            </Box>
        </Grid2>
     </Grid2>
       
    </AppBar>
  )
}

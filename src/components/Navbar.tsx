
import { AppBar,Typography,Box,Button,Grid, Grid2} from '@mui/material'
import React from 'react'
import Logo from'../components/Logo'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export const Nav = () => {
// const pages = ['Home','About','Contact'];
  return (

    <Navbar fluid rounded className="fixed top-0 left-0 w-full z-30 bg-white shadow-md">
      <div className="flex items-center justify-between w-full px-4 py-2">
        <NavbarBrand href="/" className="flex items-center">
          <Logo />
        </NavbarBrand>
        {/* <NavbarToggle /> */}
        <NavbarCollapse>
          <div className="flex items-center space-x-4">
            <NavbarLink href="http://localhost:3000/">
              <button className=" ml-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center" >
              Download  <BsChevronCompactRight  /> 
              </button>
            </NavbarLink>
  
          </div>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;


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

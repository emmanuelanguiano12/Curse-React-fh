import { Box } from '@mui/material'
import { Navbar, SideBar } from '../components';

const drowerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}} className="animate__animated animate_fadeIn animate__faster">

      <Navbar drowerWidth={drowerWidth} />

      <SideBar drowerWidth={drowerWidth} />


        <Box component='main' sx={{flexGrow: 1, p: 3, mt: 6}}>
            {/* toolbar */}

            {children}
            
        </Box>
        
    </Box>
  )
}

import React from 'react';
import "../App.css"
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import { IoHomeOutline } from "react-icons/io5";
import { TfiSearch } from "react-icons/tfi";
import { IoIosList } from "react-icons/io";
import { RiProfileLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { PiButterflyFill } from "react-icons/pi";

export const Rightbar = () => {
  return (
    <div className='sidebar'>
      <Sidebar
        collapsed={true}
        breakPoint="md"
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent:'space-between' }}>
            <Menu>
              <MenuItem icon={<PiButterflyFill/>}></MenuItem>
              <MenuItem  icon={<TfiSearch/>}>
                
              </MenuItem>
            </Menu>
            <Menu>
              <div style={{backgroundColor:'#4433FF', borderRadius:'100px', color:"white"}}><MenuItem icon={<IoHomeOutline/>}></MenuItem>
              </div>
              
              <MenuItem  icon={<RiProfileLine/>}>
                
              </MenuItem>
              <MenuItem icon={<IoIosList/>}></MenuItem>
              <MenuItem  icon={<CgProfile/>}>
                
              </MenuItem>
            </Menu>
            <Menu>
              <MenuItem icon={<IoIosNotificationsOutline/>}></MenuItem>
              <MenuItem  icon={<IoExitOutline/>}>
                
              </MenuItem>
            </Menu>
          </div>
      </Sidebar>
    </div>
  );
};

export default Rightbar;
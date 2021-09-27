import React, {useState, useEffect} from 'react'
import './Topbar.css';
import {Search, Person, Chat, Notifications, PersonAdd, Settings, LocalGasStation} from '@material-ui/icons'
import { Badge, Avatar, Menu, MenuItem, Tooltip, Box, IconButton, Divider, ListItemIcon } from '@material-ui/core';




const Topbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className='Logo'>MR.Socio</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search style= {{fontSize: '1.5rem'}} />
                    <input type="text" placeholder='search for friends, post' className='searchInput' />
                </div>
            </div>
            <div className="topbarRight">
                
                <span className='topbarLink'>Homepage</span>

                <span className='topbarLink'>Timeline</span>

                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        
                        <Badge badgeContent={4} color="secondary">
                            <Person />
                        </Badge>

                    </div>
                    <div className="topbarIconItem">
                        
                        <Badge badgeContent={4} color="secondary">
                            <Chat />
                        </Badge>

                    </div>
                    <div className="topbarIconItem">
                        
                        <Badge badgeContent={4} color="secondary">
                            <Notifications/>
                        </Badge>
                    </div>

                    <div className="topbarIconItem">
                    <React.Fragment>
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                
                            <Tooltip title="Account settings">
                            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                                <Avatar alt="Travis Howard" src="assets/person/1.jpeg" style={{marginTop: '-.2em'}}/>
                            </IconButton>
                            </Tooltip>
                        </Box>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                width: 20,
                                height: 20,
                                ml: -0.5,
                                mr: 1,
                                },
                                '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                                },
                            },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem>
                            <Avatar style={{width: '24px', height: '24px', marginRight: '.5em'}} /> Profile
                            </MenuItem>
                            <MenuItem>
                            <Avatar style={{width: '24px', height: '24px', marginRight: '.5em'}} /> My account
                            </MenuItem>
                            <Divider />
                            
                            <MenuItem>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>

                        </Menu>
                        </React.Fragment>
                        


                    
                        
                    </div>
                    
                </div>
            </div>

            
        </div>
    )
}

export default Topbar

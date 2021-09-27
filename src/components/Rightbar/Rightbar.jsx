import React from 'react'
import './Rightbar.css'
import {List, ListItem, ListItemText, Avatar, Badge} from '@material-ui/core'
import { Users } from '../../sampleData'


const Rightbar = () => {
    return (
        <div className='rightbar'>

            <div className="rigthbarContainer">

                <div className="birthdayContainer">

                    <img src="assets/gift.png" alt="bday" className='birthdayImg'/>

                    <span className="birthdayText"> <b>Michelle</b> and <b>3 others</b> have birthday today.</span>
                </div>
                <img src='assets/ad.png'  alt='ads' className="rightbarAd"></img>


                <h4 className='title'>Online Friends</h4>


                <List component="nav">

                    {
                        Users.map(user => {
                            return <ListItem key={user.id} button className='listItem'>

                            <Badge
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            variant="dot"
                            color='secondary'
                            overlap="circular"
                            >
                                <Avatar className='Icon' alt="Remy Sharp" src={user.profilePicture} />
                            </Badge>
                            <ListItemText primary={user.username} />
                        </ListItem>
                        })
                    }
                                       
                </List>
            </div>
        </div>
    )
}

export default Rightbar

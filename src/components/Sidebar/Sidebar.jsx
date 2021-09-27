import React from 'react'
import './Sidebar.css'
import { List, Divider, ListItem, ListItemText, Avatar } from '@material-ui/core'
import { RssFeed, Chat, PlayCircleFilled, Group, Bookmark, QuestionAnswerOutlined , WorkOutline, Event, School} from '@material-ui/icons'
import {Users} from '../../sampleData';

import User from '../User/User';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <List  component="nav" aria-label="mailbox folders">

                    <ListItem button className='listItem'>
                        <RssFeed className='Icon' />
                        <ListItemText primary="Inbox" />
                    </ListItem>

                    <ListItem className='listItem'>
                        <Chat className='Icon'/>
                        <ListItemText primary="Chats" />
                    </ListItem>

                    <ListItem button className='listItem'>
                        <PlayCircleFilled className='Icon' />
                        <ListItemText primary="Videos" />
                    </ListItem>

                    <ListItem button className='listItem'>
                        <Group className='Icon' />
                        <ListItemText primary="Groups" />
                    </ListItem>

                    <ListItem button className='listItem'>
                        <Bookmark className='Icon' />
                        <ListItemText primary="Bookmarks" />
                    </ListItem>

                    <ListItem button className='listItem'>
                        <QuestionAnswerOutlined className='Icon' />
                        <ListItemText primary="Questions" />
                    </ListItem>

                    <ListItem button className='listItem'>
                        <WorkOutline className='Icon' />
                        <ListItemText primary="Jobs" />
                    </ListItem>

                    <ListItem button className='listItem'>
                        <Event className='Icon' />
                        <ListItemText primary="Events" />
                    </ListItem>

                    <ListItem button className='listItem'>
                        <School className='Icon' />
                        <ListItemText primary="Courses" />
                    </ListItem>
                    <ListItem button className='listItem'>
                        
                        <ListItemText primary="show more" style={{marginLeft: '.5em'}} />
                    </ListItem>

                    
                    {/* <button className='button'>show more</button> */}
                    <Divider light />
                </List>
                
                <List component="nav" aria-label="mailbox folders">


                    <ListItem className='listItem'>
                        <ListItemText primary="Friends" />
                    </ListItem>

                    {Users.map(user => {
                        return <User key={user.id} User={user} />
                    })}

                    
                </List>
                
            </div>
        </div>
    )
}

export default Sidebar

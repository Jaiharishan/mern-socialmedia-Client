import React from 'react';
import { ListItem, Avatar, ListItemText } from '@material-ui/core';

const User = ({User}) => {
    return (
        <ListItem button className='listItem'>
            <Avatar className='Icon' alt="Remy Sharp" src={User.profilePicture} /> 
            <ListItemText primary={User.username} />
        </ListItem>
    )
}

export default User

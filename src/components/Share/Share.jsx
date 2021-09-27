import React from 'react'
import './Share.css'
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons'
import { Avatar, Button } from '@material-ui/core'
const Share = () => {
    return (
        <div className='share'>

            <div className="shareWrapper">

                <div className="shareTop">

                    <Avatar src='/assets/person/1.jpeg' alt="pic" className="shareProfileImg" style={{width:60 ,height:60}}/>
                    <input type="text" placeholder='express your mind Jai?' className='shareInput' />

                </div>

                <div className='shareBr'/>

                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon' />
                            <span className='shareOptionText'>Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor='green' className='shareIcon' />
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='lightblue' className='shareIcon' />
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='gold' className='shareIcon' />
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                        <Button variant="contained" className='shareBtn' style={{background:'rgb(0, 177, 0)',boxShadow:'none', color: 'white'}}>Share</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share

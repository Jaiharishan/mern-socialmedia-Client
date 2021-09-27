import React from 'react'
import './Feed.css'
import Share from '../Share/Share'
import Post from '../Post/Post'
import { Posts } from '../../sampleData'
const Feed = () => {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                {Posts && Posts.map(post => {
                    return <Post key={post.id} post={post} />
                })}

            </div>
        </div>
    )
}

export default Feed

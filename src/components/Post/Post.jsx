
import './Post.css';
import { MoreVert } from '@material-ui/icons';
import { Avatar} from '@material-ui/core';
import { Users } from '../../sampleData';
import { useState } from 'react';
const Post = ({post}) => {

    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);


    const likeHandle = () => {

        setLike(like => isLiked ? like - 1 : like + 1)

        setIsLiked(!isLiked)
    }


    return (
        <div className="post">
            <div className='postWrapper'>

                {/* post header */}
                <div className="postTop">
                    <div className="postTopLeft">
                    
                        <Avatar src='/assets/person/4.jpeg' />
                        <span className='postUsername'>{Users.filter(u => u.id === post.userId)[0].username}</span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    
                    <MoreVert style={{cursor:'pointer'}} />
                </div>


                {/* actual post image */}
                <div className="postCenter">
                    <img src={post.photo} alt="img" className='postImg' />
                    <div className="postText">{post.desc}</div>
                </div>

                {/* bottom of post */}
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className = 'postIcon'  src="assets/like.png" onClick={likeHandle} alt="like" />
                        <img className = 'postIcon' src="assets/heart.png" alt="heart" />
                        <span className='likeCounter'>{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="postCommentText">{post.comment} comments</div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Post
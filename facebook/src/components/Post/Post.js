import React from 'react'
import "./Post.css"

export default function Post() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
              <div className="postTopLeft">
                <img src="/images/2.jpg" alt="" className="postImage" />
                <span className="postuserName">Achini Imesha</span>
                <span className="postTime">5 mins ago</span>
              </div>  

            </div>
            <div className="postCenter">
              <div className="postCaption">
                Hello I am Achini...
              </div>
              <img src="/images/2.jpg" alt="" className="postedImage" />
            </div>

            <div className="postBottom">
              <div className="postBottomleft">
                <img src="images/3.png" alt="" className="reactionPic" />
                <img src="images/4.png" alt="" className="reactionPic" />
                <img src="images/5.png" alt="" className="reactionPic" />
                <span className="likeCount">Achini and 220 other</span>
              </div>
              <div className="postBottomRight">
                <span className="commentCount">
                  15 comments
                </span>
              </div>
            </div>
        </div>
    </div>
  )
}

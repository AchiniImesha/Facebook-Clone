import React from 'react'
import "./AddPost.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';


export default function AddPost() {
  return (
    <div className='addPost'>
        <div className="addPostContainer">
            <div className="addPosttop">
                <img src="./images/1.jpg" alt="" className="addPostPic" />
                <input placeholder='Whats in your mind?' type="text" className="addPostInput" />
            </div>
            <hr className='postHr'/>
            <div className="addPostBottom">
                <div className="addPostOptions">
                    <div className="addPstOption">
                       <InsertPhotoIcon htmlColor='orange' className='addPhoto'/>
                       <span className="addPostOPtionText">Add Photo/Video</span>
                    </div>
                    <div className="addPstOption">
                       <AddLocationAltIcon htmlColor='red' className='addPhoto'/>
                       <span className="addPostOPtionText">Add Location</span>
                    </div>
                    <div className="addPstOption">
                       <LocalOfferIcon htmlColor='blue' className='addPhoto'/>
                       <span className="addPostOPtionText">Add Tag</span>
                    </div>
                    <div className="addPstOption">
                       <LiveTvIcon htmlColor='tomato' className='addPhoto'/>
                       <span className="addPostOPtionText">Go Live</span>
                    </div>
                </div>
                <button className="PostButton">Post</button>

            </div>
        </div>
    </div>

  )
}

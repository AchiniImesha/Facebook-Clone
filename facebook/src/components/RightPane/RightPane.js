import React from 'react'
import "./RightPane.css"
export default function RightPane() {
  return (
    <div className='rightPanebox'>
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponsored">Sponsored</span>
          <img src="/images/ad.jpeg" alt="" className="adImage" />
          <span className="adText">
            Order your food with Ima Food delivery service. We can deliver your foods into your door-step within seconds. Order now.
          </span>
        </div> 
        <div className="birthdayContainer">
          <img src="/images/birthday.jpeg" alt="" className="birthdayImage" />
          <span className="birthdayText"><b>Achini Imesha</b> and <b>2 others</b> having birthday today..!</span>
          
        </div> 
        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/boy.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Kavindu Liyanage</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/boy.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Tharushi Nadeeshani</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/boy.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Chamoth Nimsara</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/boy.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Diwyandi Ruvinara</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/boy.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Kumarasiri Perera</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/boy.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Sandya Darshani</span>
          </li>
        </div>
      </div>
    </div>
    

  )
}

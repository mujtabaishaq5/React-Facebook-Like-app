import React from 'react';
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
    return (
    
        <div className="storyReel">
    <Story
        image ="https://static.dw.com/image/48173465_303.jpg"
        profileSrc="https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2017/04/asaduddin_fp_0211_dlhtoi_4c-243x300.jpg"
        title="Muhammad Musa"
      />
      <Story
        image="https://miro.medium.com/max/1838/1*4VtgriScq9r0WAz45590dg.jpeg"
        profileSrc="https://i.pinimg.com/564x/79/d1/40/79d14015aaa17b35aaf86228f937b47d.jpg"
        title="Ali Hasan"
      />
      <Story
        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2019-12-10-at-12-14-03-pm-1575998085.png?crop=1xw:1xh;center,top&resize=480:*"
        profileSrc="https://i.pinimg.com/originals/7f/ca/35/7fca352320db21d50047dd52d75cc83e.jpg"
        title="Mishal Khan"
      />
      <Story
        image="https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk="
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4.jpg"
        title="Shajar Imdad"
      />
      <Story
        image="https://cdn2.momjunction.com/wp-content/uploads/2015/03/100-Most-Popular-And-Funny-Baby-Names-Of-2018-Revealed.jpg"
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4.jpg"
        title="Imdad Husayn"
      />
            
        </div>
    )
}

export default StoryReel

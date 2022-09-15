import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faHeart, faComment, faBookmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import profile from "./img/profile.jpg";
import postImg from "./img/pak.jpg";
import toyImg from "./img/toys.webp";
import bookImg from "./img/book.jpg";
import shopImg from "./img/tshop.png";
import post2Img from "./img/post2.jpg";
import './index.css';

const InstaCard = ({ profile, name, faEllipsisVertical, faHeart, faComment, faBookmark, faPaperPlane, imageUrl, likes, text, pageName, comment, date }) => (
  <div className='body'>
    <div className='header'>
      <p className='intro'>
        <img class="profile" src={profile} alt="" /> <h3 className='name'>{name}</h3>
      </p>

      <p className='dots'> <FontAwesomeIcon icon={faEllipsisVertical} /></p>
    </div>

    <img className='img' src={imageUrl} alt="" />
    <p className='icons'>
      <div className='interact'>
        <span className='heart'><FontAwesomeIcon icon={faHeart} /></span>
        <span className='heart'><FontAwesomeIcon icon={faComment} /></span>
        <span className='heart'><FontAwesomeIcon icon={faPaperPlane} /></span>
      </div>
      <span className='save'><FontAwesomeIcon icon={faBookmark} /></span>
    </p>
    <h4>{likes}</h4>
    <p>
      <span><b>{pageName}</b></span> <span>{text}</span>
    </p>
    <p className='grey'>{comment}</p>
    <p className='grey'>{date}</p>
    <br />
  </div>
)
const InstaPage = () => (
  <div>
    <InstaCard
      profile={profile}
      name="Farya Jamal"
      faEllipsisVertical={faEllipsisVertical}
      faHeart={faHeart}
      faComment={faComment}
      faPaperPlane={faPaperPlane}
      faBookmark={faBookmark}
      imageUrl={postImg}
      likes="100 likes"
      text="hAPPY Independence Day"
      pageName="FaryaJamal"
      comment="View all comments"
      date={"14 August"}
    />
    <InstaCard
      profile={shopImg}
      name="Toy Mart"
      faEllipsisVertical={faEllipsisVertical}
      faHeart={faHeart}
      faComment={faComment}
      faPaperPlane={faPaperPlane}
      faBookmark={faBookmark}
      imageUrl={toyImg}
      likes="100 likes"
      text="Stock Alert!"
      pageName="Toy Mart"
      comment="View all 79 comments"
      date={"1 month ago"}
    />
    <InstaCard
      profile={bookImg}
      name="Book Shop"
      faEllipsisVertical={faEllipsisVertical}
      faHeart={faHeart}
      faComment={faComment}
      faPaperPlane={faPaperPlane}
      faBookmark={faBookmark}
      imageUrl={post2Img}
      likes="100 likes"
      text="Read what you want, where you"
      pageName="Book Shop"
      comment="View all comments"
      date={"2 months ago"}
    />



  </div>
)

ReactDOM.render(<InstaPage />, document.querySelector("#root"));

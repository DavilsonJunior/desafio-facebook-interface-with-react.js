import React from 'react';

import profile1 from '../assets/img/profile1.png';

function PostHeader({ author, date }) {
    return (
      <div className="media-profile">
        <img src={author.avatar} alt="profile"/>
        <div className="media-text">
          <div className="media-title">{author.name}</div>
          <div className="media-subtitle">{date}</div>
        </div>
      </div>
    );
  }

function PostComents({ comments }) {
    return (
      <>
        <div className="risco"></div>
        {comments.map(comment => (
          <div key={comment.id} className="media-coments">
          <img src={comment.author.avatar} alt="profile"/>
          <div className="media-text-coments">
            <div className="coments-title">
              <span>{comment.author.name}</span> {comment.content}
            </div>  
          </div>
        </div>
        ))}
      </>
    );
  }

function PostItem({ author, date, content, comments }) {
    return (
      <div className="post">
        <div className="post-item">
          <PostHeader author={author} date={date} />
          <div className="description">
            {content}
          </div>
          <PostComents comments={comments}/>
        </div>
      </div>  
    );
  }

export default PostItem;
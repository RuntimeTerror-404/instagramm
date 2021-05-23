import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt="Mohit P"
          src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900"
        />
        <h3>{username}</h3>
      </div>

      {/* header -> avatar + usename */}

      <img
        className="post_image"
        src={imageUrl}
        // src="https://i.pinimg.com/originals/55/9d/50/559d509bdf0a86ba9424f295f7c1de2e.png"
        alt=""
      />
      {/* image */}

      <h3 className="post_text">
        <strong>{username} </strong>
        {caption}
      </h3>
      {/* username + caption */}
    </div>
  );
}

export default Post;

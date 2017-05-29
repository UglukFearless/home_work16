import React from 'react';

const CommentBlock = (props) => {

  const { comment , removeComment, focusComment, unfocusComment } = props;
  let treshClass = comment.focus ? "trash" : "trash invisible";

  return (<div
          className={"comment-block"}
          onMouseOver={ev => focusComment(comment.id)}
          onMouseLeave={ev => unfocusComment(comment.id)}>
          <span className={"user-name"}>{comment.user}</span>
          <span  className={"time-stamp"}>{comment.timestamp}</span>
          <p className={"comment text-justify"}>{comment.text}</p>
          <img className={treshClass} onClick={ ev => removeComment(comment.id)} src="images/trash.png" />
          </div>);
}

export default CommentBlock;

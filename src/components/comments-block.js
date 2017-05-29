import React from 'react';
import DefaultBlock from './default-block';
import CommentBlock from './comment-block';


const CommentsBlock = (props) => {

  const { comments, removeComment, focusComment, unfocusComment } = props;

  let commentBlock;
  if (!comments||comments.length===0) {
    commentBlock = <DefaultBlock />;
  } else {
    commentBlock = (
            comments.map( (comment) => {
              return (<CommentBlock
                key={comment.id}
                comment = { comment }
                removeComment={ removeComment }
                focusComment={ focusComment }
                unfocusComment={ unfocusComment } />);
                    })
                  );
  }
  return (<div>{ commentBlock }</div>);
}

export default CommentsBlock;

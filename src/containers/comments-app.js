import React from 'react';
import { connect } from 'react-redux';

import CommentsBlock from '../components/comments-block';
import InputBlock from '../components/input-block';

import { addComment, removeComment, focusComment, unfocusComment } from '../actions';

let App = (props) => {

  const { state, addComment, removeComment, focusComment, unfocusComment } = props;

  const comments = state.comments;
  const nextCommentId = state.nextCommentId;

  return (
    <div>
      <img
      src={"images/banner.png"}
      width={"550px"} />

      <hr className={"half-line"} />

      <CommentsBlock  comments={ comments } removeComment={ removeComment } focusComment={ focusComment } unfocusComment={ unfocusComment } />

      <hr className={"half-line"} />

      <InputBlock nextCommentId={ nextCommentId } addComment={ addComment } />

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (newComment) => dispatch(addComment(newComment)),
    removeComment: (id) => dispatch(removeComment(id)),
    focusComment: (id) => dispatch(focusComment(id)),
    unfocusComment: (id) => dispatch(unfocusComment(id))
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;

const comments = (state, action) => {

  let new_state;
  let buffer;

  let new_state_str;

  switch (action.type) {
    case 'ADD_COMMENT':
      new_state = {
        comments: [],
        nextCommentId: state.nextCommentId
      };
      buffer = [
        ...state.comments,
        { id: action.id, user: action.user, timestamp: action.timestamp, text: action.text, focus: false }
      ];
      new_state.comments = buffer;
      new_state.nextCommentId++;

      new_state_str = JSON.stringify(new_state);
      window.localStorage.setItem('save_state_hw16', new_state_str);

      return new_state;
      break;

    case 'REMOVE_COMMENT':
      new_state = {
        comments: [],
        nextCommentId: state.nextCommentId
      };
      buffer = state.comments;
      for (var i = 0; i < state.comments.length; i++) {
        if (state.comments[i].id === action.id) {
          buffer.splice(i ,1);
        }
      }
      new_state.comments = buffer;

      new_state_str = JSON.stringify(new_state);
      window.localStorage.setItem('save_state_hw16', new_state_str);

      return new_state;
      break;

    case 'FOCUS_COMMENT':
      new_state = {
        comments: [],
        nextCommentId: state.nextCommentId
      };
      buffer = state.comments.map( comment => {
        if (comment.id === action.id) {
          return { id: comment.id, user: comment.user, timestamp: comment.timestamp, text: comment.text, focus: true };
        }
        return comment;
      });
      new_state.comments = buffer;
      return new_state;
      break;

    case 'UNFOCUS_COMMENT':
      new_state = {
        comments: [],
        nextCommentId: state.nextCommentId
      };
      buffer = state.comments.map( comment => {
        if (comment.id === action.id) {
          return { id: comment.id, user: comment.user, timestamp: comment.timestamp, text: comment.text, focus: false };
        }
        return comment;
      });
      new_state.comments = buffer;
      return new_state;
      break;

    default:
      return state;

  }
}

export default comments;

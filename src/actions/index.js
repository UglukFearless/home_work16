

// action creators

export const addComment = (newComment) => {

  return {
    type: 'ADD_COMMENT',
    id: newComment.id,
    user: newComment.user,
    timestamp: newComment.timestamp,
    text: newComment.text
  };
}

export const removeComment = (id) => {
  return {
    type: 'REMOVE_COMMENT',
    id: id
  };
}

export const focusComment = (id) => {
  return {
    type: 'FOCUS_COMMENT',
    id: id
  };
}

export const unfocusComment = (id) => {
  return {
    type: 'UNFOCUS_COMMENT',
    id: id
  };
}

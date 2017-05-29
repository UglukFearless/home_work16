import React from 'react';

const InputBlock = ({ nextCommentId, addComment }) => {

  const getMonthName = (monthNum) => {
    switch (monthNum) {
      case 0:
        return ' января ';
        break;
      case 1:
        return ' февраля ';
        break;
      case 2:
        return ' марта ';
        break;
      case 3:
        return ' апреля ';
        break;
      case 4:
        return ' мая ';
        break;
      case 5:
        return ' июня ';
        break;
      case 6:
        return ' июля ';
        break;
      case 7:
        return ' августа ';
        break;
      case 8:
        return ' сентября ';
        break;
      case 9:
        return ' октября ';
        break;
      case 10:
        return ' ноября ';
        break;
      case 11:
        return ' декабря ';
        break;
    }
  }


  return (<div className={"comment-form"}>

            <input
            id="input-user"
            className={"form-control"}
            type={"text"} placeholder={"Ваше имя..."}/>

            <textarea
            id="input-comment"
            className={"form-control text-justify"}
            placeholder={"Текст комментария..."}></textarea>

            <button
            className={"btn"}
            onClick={ ev => {

              const userName = document.querySelector('#input-user').value;
              document.querySelector('#input-user').value = '';

              const date = new Date();
              const timestamp = date.getDate() + getMonthName(date.getMonth()) + date.getFullYear() + " в " + date.getHours() + ":"
                                + ( date.getMinutes()<10 ? ("0" + date.getMinutes()): date.getMinutes());

              const commentText = document.querySelector('#input-comment').value;
              document.querySelector('#input-comment').value = '';

              const newComment = {
                id: nextCommentId,
                user: userName,
                timestamp: timestamp,
                text: commentText
              }
              addComment(newComment);
            }}>{"Отправить"}</button>

          </div>);
}

export default InputBlock;

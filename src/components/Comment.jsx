import { ThumbsUp } from "phosphor-react";
import { Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({content, onDeleteComment}) {

  const [likeCount , setLikeCount] = useState(0);

  function handleDeleteComment (){
    onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/50343150?v=4" alt=""/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jennifer</strong>
              <time
                title="22 de Agosto ás 10:30h"
                dateTime="2022-08-22 10:30:00"
              >
                Cerca de 1 hora atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="deletar comentario">
              <Trash size={24}></Trash>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

//before é como se fosse um elemento dentro do <span>

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  
  const [comments, setComments] = useState([
    'Post muito nice'
  ])

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {locale: ptBr,});
  
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, 
    {
      locale: ptBr, 
      addSuffix: true,
    })
    
    function handleCreacteNewComment(){
      event.preventDefault()
      
      //... copia os valores que existem na variavel
      setComments([...comments, newCommentText]);
      setNewCommentText('');
      //estado que armazena o conteudo da textarea
    }
  
    function handleNewCommentChange(){
      event.target.setCustomValidity('');
      setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(){
      event.target.setCustomValidity('Este campo é obrigatório!');
    }

    function deleteComment(commentToDelete){
      const commentsWithoutDeleteOne = comments.filter(comment => {
        return comment !== commentToDelete;
      })
      setComments(commentsWithoutDeleteOne);
    }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreacteNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea 
          name="comment"
          placeholder="Deixe um comentário" 
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
          />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          // funcao deleteComment passada como propriedade
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}/>
          )
        })}
      </div>
    </article>
  );
}

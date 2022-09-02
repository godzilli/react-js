import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://avatars.githubusercontent.com/u/50343150?v=4"/>
          <div className={styles.authorInfo}>
            <strong>Jennifer Zilli</strong>
            <span>Analista de Projeto TV</span>
          </div>
        </div>
        <time title="22 de Agosto ás 10:30h" dateTime="2022-08-22 10:30:00">
          Publicado há 1 hora
        </time>
      </header>
      <div className={styles.content}>
        <p>Olá</p>
        <p>Segue teste de React JS</p>
        <p>
          Segue <a href="">https://github.com/godzilli</a>
        </p>
        <p>Estudos!</p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment /> 
        <Comment /> 
      </div>
    </article>
  );
}

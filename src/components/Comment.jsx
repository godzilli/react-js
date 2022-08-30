import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src='src="https://avatars.githubusercontent.com/u/50343150?v=4' />
            <div className={styles.commentBox}>

                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jennifer</strong>
                            <time title="22 de Agosto ás 10:30h" dateTime="2022-08-22 10:30:00">Cerca de 1 hora atrás</time>

                        </div>
                    </header>

                    <p>Muito Bom!!!</p>
                </div>

                <footer>
                    Aplaudir
                </footer>

            </div>
        </div>
    )
}
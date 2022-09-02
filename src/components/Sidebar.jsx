import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar (){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
                src="https://images.unsplash.com/photo-1574137909559-82597cfeef21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=500" />
                <div className={styles.profile}>
                    <Avatar src="https://avatars.githubusercontent.com/u/50343150?v=4"/>
                    <strong>Jennifer Zilli</strong>
                    <span>Analista de Projeto TV</span>
                </div>

            <footer>
                <a href="#">
                    <PencilLine size={22}/>
                    Editar perfil
                </a>
            </footer>
        </aside>
    );
}
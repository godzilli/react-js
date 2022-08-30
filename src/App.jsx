import { Header } from "./components/Header";
import { Post } from ".//components/Post";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jennifer"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum corrupti culpa enim voluptates tenetur, a ratione aliquid. Quisquam et a voluptates nisi beatae vero consequuntur praesentium provident repellat quis!"
          />
          <Post
            author="Gabriel"
            content="Post legal de teste de componentes!"
          />
          <Post />
        </main>
      </div>
    </div>
  );
}
//Em Post o author e content são parametros
//componente é: função que retorna html e deve ter extensão JSX -> java + html
//escopo do css -> especifico de um componente e nao afetar outras partes do codigo

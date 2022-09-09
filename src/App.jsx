import { Header } from "./components/Header";
import { Post } from ".//components/Post";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

//iteraçao: cria estrutura de repetição

const posts =[
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/50343150?v=4',
      name: 'Jennifer',
      role: 'Analista na RPC',
    },
    content: [
      { type: 'paragraph', content: 'Olá'},
      { type: 'paragraph', content:'Segue teste de React JS'},
        
      { type: 'link', content:'github.com/godzilli'},
        
      { type: 'paragraph', content:'Estudos!'}
    ],
    publishedAt: new Date('2022-09-09 13:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/43991948?v=4',
      name: 'Gabriel',
      role: 'Analista na MadeiraMadeira',
    },
    content: [
      { type: 'paragraph', content: 'Olá'},
      { type: 'paragraph', content:'Segue teste de React JS'},
        
      { type: 'link', content:'github.com/lam0glia'},
        
      { type: 'paragraph', content:'Estudos!'}
    ],
    publishedAt: new Date('2022-09-10 20:30:00'),
  },
];

// posts.forEach(post => { return 1;}) nao retornará nada
// posts.map(post => { return 1;}) retornará um number. Então se utiliza um map.

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (<Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  );
}
//Em Post o author e content são parametros
//componente é: função que retorna html e deve ter extensão JSX -> java + html
//escopo do css -> especifico de um componente e nao afetar outras partes do codigo
//quando algo repete muito, deve virar componente. Outro momento é quando retira algo de um Component maior
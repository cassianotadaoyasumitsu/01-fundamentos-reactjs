import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      name: "Cassiano Tadao Yasumitsu",
      avatarUrl: "https://avatars.githubusercontent.com/u/60116462?v=4",
      role: "Software Engineer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala Galera 👋🏻",
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifólio 🚀",
      },
      {
        type: "link",
        content: "cassiano.dev/ignite",
      },
    ],
    publishedAt: new Date("2024-01-11 12:00:00"),
  },
  {
    id: 2,
    author: {
      name: "Carise Yasumitsu",
      avatarUrl:
        "https://www.linkedin.com/in/carise-yasumitsu-a82890219/overlay/photo/",
      role: "Economista",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala Galera 👋🏻",
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifólio 🚀",
      },
      {
        type: "link",
        content: "carise.econ/ignite",
      },
    ],
    publishedAt: new Date("2024-01-09 12:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                // key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

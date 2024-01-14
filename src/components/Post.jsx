import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/42375242?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Cassiano Tadao Yasumitsu</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="14 de Janeiro ás 23:55h" dateTime="2024-01-14 23:55:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala Galera 👋🏻</p>
        <p>Acabei de subir mais um projeto no meu portifólio 🚀</p>
        <p>
          👉🏻 <a href="#">cassiano.dev/ignite</a>
        </p>
        <p>
          <a href="#">#novoprojeto #nlw # rocketseat</a>
        </p>
      </div>
    </article>
  );
}

import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Cassiano Tadao Yasumitsu"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad perspiciatis, eum eveniet voluptatibus, deserunt reprehenderit magnam eligendi ex totam iusto asperiores, ducimus dolore nobis fugiat! Ea odit sit provident harum?"
      />
      <Post
        author="Carise Yasumitsu"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad perspiciatis, eum eveniet voluptatibus, deserunt reprehenderit magnam eligendi ex totam iusto asperiores, ducimus dolore nobis fugiat! Ea odit sit provident harum?"
      />
    </div>
  );
}

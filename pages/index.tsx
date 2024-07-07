import { useState } from "react";

interface Message {
  author: string;
  text: string;
}

function Home() {
  const [message, setMessage] = useState<Message>({
    author: "Me",
    text: "Hello",
  });

  const WriteMessage = ({ author, text }: Message) => (
    <div>
      <h1>Author: {author}</h1>
      <h1>Text: {text}</h1>
    </div>
  );

  return (
    <>
      <WriteMessage author={""} text={""} />
    </>
  );
}

export default Home;

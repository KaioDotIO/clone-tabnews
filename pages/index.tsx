interface testInterface {
  text: string;
}

function Home() {
  const writeMessage = (message: string) => <h1>{message}</h1>;

  return <>{writeMessage("Oi aaa")}</>;
}

export default Home;

import { useEffect, useState } from "react";
import Contador from "./Contador";
import Post from "./Post";

//JSON: JavaScritp Object Notatio
function App() {
  const [entradasBlog, setEntradasBlog] = useState([]);

  useEffect(() => {
    //Obtener registros de una API

    const leerPost = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        { method: "GET", headers: { "content-type": "application/json" } }
      );

      const data = await response.json();
      setEntradasBlog(data);
    };

    leerPost();
  });

  const listaPosts = entradasBlog.map((elemento) => {
    return (
      <Post key={elemento.id} title={elemento.title} body={elemento.body} />
    );
  });

  return (
    <>
      <h1>Lista de Posts</h1>
      {listaPosts}
    </>
  );
}

export default App;

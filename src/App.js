import React, { useEffect, useState } from "react";
import "./App.css";

const preRenderTime = performance.now();

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => {
        const postRenderTime = performance.now();
        console.log(
          `Component rendering time: ${postRenderTime - preRenderTime} ms`
        );
      });
  }, []);

  return (
    <div className="App">
      <h1>Comment data</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Post ID</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.postId}</td>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

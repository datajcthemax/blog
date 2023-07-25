import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "first post!";
  let [title, setTitle] = useState(["다람쥐람쥐", "나비야 나비야", "강남우동"]);
  let [like, setLike] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>Jai's Blog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자코트 추천";
          setTitle(copy);
        }}
      >
        edit title
      </button>

      <button
        onClick={() => {
          let copy = [...title];
          setTitle(copy.sort());
        }}
      >
        sort title
      </button>

      <div className="list">
        <h4>
          {title[0]}{" "}
          <span
            className="like-btn"
            onClick={() => {
              setLike(like++);
            }}
          >
            👍
          </span>{" "}
          {like}{" "}
        </h4>
        <p>date</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>date</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>date</p>
      </div>

      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  );
}

export default App;

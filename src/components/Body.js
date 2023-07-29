import React, { useState } from "react";

export default function Body(props) {
  const clear = () => {
    setText("");
  };
  const handle = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handle1 = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handlechange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the text");
  return (
    <>
      <div className="container text-center my-3">
        <h3>{props.title}</h3>
      </div>
      <div className="container">
        <div class="mb-3">
          <textarea
            class="form-control"
            value={text}
            id="exampleFormControlTextarea1"
            rows="10"
            onChange={handlechange}
          ></textarea>
          <div className="container my-3 mx-3">
            <p>
              {text.split(" ").length}words and {text.length} characters
            </p>
          </div>
        </div>
        <button className="btn btn-primary my-5 mx-2" onClick={handle}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary my-5 mx-2" onClick={handle1}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary my-5 mx-2" onClick={clear}>
          Clear Text
        </button>
      </div>
      <h2 className="text-center">Preview</h2>
      <div className="container border">
        <p>{text}</p>
      </div>
    </>
  );
}

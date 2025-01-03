import { useState, useRef, useContext } from "react";
import "./Editor.css";
import {TodoDispatchContext} from "../App"

const Editor = () => {
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const {onCreate} = useContext(TodoDispatchContext);
  
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return ;
    }
    onCreate(content);
    setContent("");
  };
  
  const onKeyDown = (e) => {
    if(e.keyCode===13) {
      onSubmit();
    }
  }
  
  const onChangeContent =(e) => {
    setContent(e.target.value);
  }

  return (
    <div className="Editor">
      <input onKeyDown={onKeyDown} ref={contentRef} value={content} onChange={onChangeContent} placeholder="새로운 Todo..." /> <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;

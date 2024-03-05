import { useDispatch } from "react-redux";
import { remove } from "./Store/todoSlice";
import { useState } from "react";

const TodoList = (item) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState({
    data: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContent({
      ...content,
      [name]: value,
    });
    setContent({data:""})
  };

  return (
    <>
      {" "}
      <input type="text" name="data" value={item.data} onChange={handleInput} />
      <div>{item.data}</div>
      <button onClick={() => dispatch(remove(item.id))}>Add</button>
    </>
  );
};

export default TodoList;

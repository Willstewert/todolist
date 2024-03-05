import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { add, remove, save, update } from "./Store/todoSlice";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineSave } from "react-icons/md";
import { MdDelete } from "react-icons/md";
function App() {
  const dispatch = useDispatch();
  const listItems = useSelector((state) => state.list);
  const [content, setContent] = useState("");
  const [text, setText] = useState("");
  const updateElem = (id) => {
    const updateItem = listItems.find((elem) => {
      return elem.id === id;
    });

    dispatch(update(id));
    setText(updateItem.data);
  };

  const saveElem = (id) => {
    const newElem = {
      id,
      data: text,
    };
    dispatch(save(newElem));
  };

  return (
    <>
    <div className="w-[300px]">
    <div className="flex items-center justify-between">
    <input
        className="border rounded-md border-slate-800 outline-none"
        type="text"
        onChange={(e) => setContent(e.target.value)}
        name=""
        id=""
      />
      <button
        className="border border-black rounded-sm px-5 hover:bg-slate-700 hover:text-white"
        onClick={() => dispatch(add(content))}
      >
        Add
      </button>
    </div>
      {listItems.map((item) => (
        <div key={item.id}>
          <div className="flex items-center justify-between ">
            {item.edit ? (
              <p>{item.data}</p>
            ) : (
              <input
                className="border border-black outline-none"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            )}
            <div className="flex items-center">
            {item.edit ? (
              <button
                className="border rounded-sm border-black p-1 hover:bg-slate-700 hover:text-white"
                onClick={() => updateElem(item.id)}
              >
                {" "}
                <MdModeEdit></MdModeEdit>
              </button>
            ) : (
              <button
                className="border rounded-sm border-black p-1 hover:bg-slate-700 hover:text-white"
                onClick={() => saveElem(item.id)}
              >
                {" "}
                <MdOutlineSave></MdOutlineSave>
              </button>
            )}

            <button
              className="border rounded-sm border-black p-1 hover:bg-slate-700 hover:text-white"
              onClick={() => dispatch(remove(item.id))}
            >
              {" "}
              <MdDelete></MdDelete>
            </button></div>
          </div>
        </div>
        
      ))}
      </div>
    </>
  );
}

export default App;

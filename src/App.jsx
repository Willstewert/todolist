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
    <div className=  "flex items-center justify-center bg-slate-800 w-[100%] h-[100vh]">
    <div className="w-[400px] bg-slate-700 p-5 rounded-md">
    <div className="flex items-center justify-between ">
    <input
        className="border rounded-md border-slate-800 outline-none p-1"
        type="text"
        onChange={(e) => setContent(e.target.value)}
        name=""
        id=""
      />
      <button
        className="bg-slate-900 text-white rounded-md px-5 hover:bg-slate-500 hover:text-white p-1"
        onClick={() => dispatch(add(content))}
      >
        Add
      </button>
    </div>
      {listItems.map((item) => (
        <div key={item.id}>
          <div className="flex items-center justify-between  ">
            {item.edit ? (
              <p>{item.data}</p>
            ) : (
              <input
                className="border rounded-md border-slate-800 outline-none p-1 bg-slate-600"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            )}
            <div className="flex items-center mt-2 p-1 ">
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
      </div>
    </>
  );
}

export default App;

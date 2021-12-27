import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('drag');
  }

  const overHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('drop');
  }

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  }

  return (
    <div>
      <input onChange={changeHandler} value={value} type="text" placeholder="Управляемый" />
      <input ref={inputRef} type="text" placeholder="Неуправляемый" />
      <button onClick={clickHandler}>click</button>
      <div onDrag={dragHandler} draggable
        style={{ width: "200px", height: "200px", background: "green" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={overHandler}
        style={{
          width: "200px",
          height: "200px",
          background: isDrag? 'blue' : 'green',
          marginTop: "20px",
          
        }}
      ></div>
    </div>
  );
};

export default EventsExample;

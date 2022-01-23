import { useEffect, useRef, useState } from "react";

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState(""); //value - переменная, setValue - функция для изменения перменной value
  const inputRef = useRef();
  const handleChange = (e) => {
    //функция, в которой изменяем значение переменной value на занчение введенное в input, используя свойство target из события Event
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //остановка события отправки формы
    inputRef.current.focus();
    setValue(""); //обновление переменной value на пустую строку
    onSubmit(value); //функция добавляющая объект сообщение в чат
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} value={value} onChange={handleChange} />
      <input type="submit" />
    </form>
  );
};

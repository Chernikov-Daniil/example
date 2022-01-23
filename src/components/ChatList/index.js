import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { addChat } from "../../store/Chats/actions";
import { Form } from "../Form";

export const ChatList = () => {
  const chats = useSelector((state) => state.chats);
  const dispatch = useDispatch();

  const handleAddChat = (nameChatName) => {
    const newChatId = `chat${Date.now()}`;
    const newChat = { name: nameChatName, id: newChatId };
    dispatch(addChat(newChat));
  };
  return (
    <>
      <ul>
        {chats.map(({ name, id }) => (
          <li key={id}>
            <Link to={`/chats/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Form onSubmit={handleAddChat} />
      <Outlet />
    </>
  );
};

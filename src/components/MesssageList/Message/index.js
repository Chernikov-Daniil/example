import { useSelector } from "react-redux";
import { AUTHORS } from "../../../utils/constants";
import "./message.css";

export const Message = ({ author, text }) => {
  const name = useSelector((state) => state.profile.name);
  return (
    <div className={author === AUTHORS.human ? "msg-human" : "msg-bot"}>
      {author === AUTHORS.human ? name : author}: {text}
    </div>
  );
};

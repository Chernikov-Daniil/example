import { Message } from "./Message";

export const MessageList = ({ messages }) =>
  messages.map(({ author, text, id }) => (
    <Message key={id} author={author} text={text} />
  ));

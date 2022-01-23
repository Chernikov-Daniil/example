import "./Chats.css";
import { Form } from "../../Form";
import React, { useEffect, useMemo } from "react";
import { MessageList } from "../../MesssageList";
import { AUTHORS } from "../../../utils/constants";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../store/Messages/actions";
import {
  selectMessages,
  selectMessagesByChatId,
} from "../../../store/Messages/selectors";

export const Chats = () => {
  const { chatId } = useParams();
  const messages = useSelector(selectMessages);

  const getMessagesByChatId = useMemo(
    () => selectMessagesByChatId(chatId),
    [chatId]
  );

  const messagesForCurrentChat = useSelector(getMessagesByChatId);
  const dispatch = useDispatch();

  const onAddMessage = (newMessage, chatId) => {
    dispatch(addMessage(newMessage, chatId));
  };

  const handleSubmit = (text) => {
    const newMessage = { text, author: AUTHORS.human, id: `msg-${Date.now()}` };
    onAddMessage(newMessage, chatId);
  };

  useEffect(() => {
    let timeout;
    if (
      messages[chatId]?.[messages[chatId].length - 1]?.author === AUTHORS.human
    ) {
      timeout = setTimeout(() => {
        onAddMessage(
          {
            author: AUTHORS.bot,
            text: "Сообщение доставлено",
            id: `msg-${Date.now()}`,
          },
          chatId
        );
      }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messages]);

  if (!messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <div className="wrp">
        <Form onSubmit={handleSubmit} />
        <MessageList messages={messagesForCurrentChat} />
      </div>
    </>
  );
};

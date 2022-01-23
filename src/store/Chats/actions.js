export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE = "CHATS::DELETE_CHAT";

export const addChat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat,
});

export const deleteChat = (chat) => ({
  type: ADD_CHAT,
  payload: chat,
});

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { ChatList } from "../ChatList";
import { NoMatch } from "../NoMatch";
import { Chats } from "../Pages/Chats";
import { Home } from "../Pages/Home";
import { Profile } from "../Pages/Profile";

export const Router = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "blue" : "green" })}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chats"
            style={({ isActive }) => ({ color: isActive ? "blue" : "green" })}
          >
            CHATS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({ color: isActive ? "blue" : "green" })}
          >
            PROFILE
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chats" element={<ChatList />}>
          <Route path=":chatId" element={<Chats />} />
        </Route>
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

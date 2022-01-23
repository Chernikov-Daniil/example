import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setName, toggleName } from "../../../store/Profile/actions";
import {
  selectShowName,
  selectUserName,
} from "../../../store/Profile/slectors";
import { Form } from "../../Form";

export const Profile = () => {
  const showName = useSelector(selectShowName, shallowEqual);
  const userName = useSelector(selectUserName, shallowEqual);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleName);
  };

  const handleSubmit = (newName) => {
    dispatch(setName(newName));
  };

  return (
    <>
      <h3>This is Profile</h3>
      <input type="checkbox" checked={showName} onChange={handleChange} />
      {showName && <span>{userName}</span>}
      <Form onSubmit={handleSubmit} />
    </>
  );
};

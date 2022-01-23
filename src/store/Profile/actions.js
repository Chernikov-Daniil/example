export const SHOW_NAME = "PROFILE::SHOW_NAME";
export const CHANGE_NAME = "PROFILE::CHANGE_NAME";

export const toggleName = {
  type: SHOW_NAME,
};

export const setName = (newName) => ({
  type: CHANGE_NAME,
  payload: newName,
});

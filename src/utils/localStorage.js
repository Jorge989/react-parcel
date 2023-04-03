export const addUserToLocalStorage = (user) => {
  const json = user ? JSON.stringify(user) : null;
  localStorage.setItem("user", json);
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  if (result !== null) {
    try {
      const user = JSON.parse(result);
      return user;
    } catch (error) {
      console.error("Failed to parse user from local storage:", error);
    }
  }
  return null;
};

export const checkValidData = (email, password, name) => {
  const isNameValid = name === "na" || name.length > 3;
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

  if (!isNameValid) return "Not a Valid Name !";
  if (!isEmailValid) return "Not a Valid Email !";
  if (!isPasswordValid) return "Not a Valid Password !";

  return null;
};

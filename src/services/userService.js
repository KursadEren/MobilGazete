import usersData from '../data/users.json';

export const getUsers = () => {
  return usersData;
};

export const addUser = (newUser) => {
  // Yeni kullanıcıyı ekleyin (mock)
  usersData.push(newUser);
  return newUser;
};

export const findUserByEmailAndPassword = (email, password) => {
  return usersData.find(user => user.email === email && user.password === password);
};

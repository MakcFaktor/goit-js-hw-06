'use strict';

console.group(`Задание 7`);
import users from './users.js';

const calculateTotalBalance = users => {
  return users.reduce((acc, item) => acc + item.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

console.groupEnd();
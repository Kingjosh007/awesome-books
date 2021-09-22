export const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
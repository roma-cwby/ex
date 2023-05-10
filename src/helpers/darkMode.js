export const getDarkMode = () => {
  return JSON.parse(localStorage.getItem('darkMode'));
};

export const setDarkMode = mode => {
  localStorage.setItem('darkMode', JSON.stringify(mode));
};

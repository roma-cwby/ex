export function isDarkMode() {
  const mode = JSON.parse(localStorage.getItem('dark'));
  if (mode) return true;

  return false;
}

export function setDarkMode(mode) {
  if (mode) localStorage.setItem('dark', JSON.stringify(true));
  else localStorage.setItem('dark', JSON.stringify(false));
}

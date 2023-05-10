import './themeSwitcher.scss';
import { BsMoonStarsFill } from 'react-icons/bs';
import { RiSunFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { getDarkMode, setDarkMode } from '../../helpers/darkMode';

export const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(getDarkMode());

  useEffect(() => {
    if (isDarkMode) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [isDarkMode]);

  function changeTheme(e) {
    setDarkMode(!isDarkMode);
    setIsDarkMode(getDarkMode());
  }

  return (
    <>
      {isDarkMode ? (
        <RiSunFill className="switcher-icon" onClick={changeTheme} />
      ) : (
        <BsMoonStarsFill className="switcher-icon" onClick={changeTheme} />
      )}
    </>
  );
};

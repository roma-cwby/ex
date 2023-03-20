import { setDarkMode, isDarkMode } from 'helpers/localStorage';
import { useEffect, useState } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const styles = {
  fill: 'white',
  width: '25px',
  height: '25px',
  cursor: 'pointer',
};

export const Switcher = () => {
  const [mode, setMode] = useState(isDarkMode());

  useEffect(() => {
    if (isDarkMode()) {
      document.body.classList.add('dark');
    }
  }, []);

  function darkMode(e) {
    if (isDarkMode()) {
      setDarkMode(false);
      setMode(isDarkMode());
    } else {
      setDarkMode(true);
      setMode(isDarkMode());
    }
    document.body.classList.toggle('dark');
  }
  return (
    <>
      {mode ? (
        <BsFillSunFill style={styles} onClick={darkMode} />
      ) : (
        <BsFillMoonStarsFill
          style={{ ...styles, fill: 'black' }}
          onClick={darkMode}
        />
      )}
    </>
  );
};

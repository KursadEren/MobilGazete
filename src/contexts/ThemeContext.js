import React, { createContext, useState } from 'react';

const themes = {
  light: {
    background: '#f5f5dc', // Eski gazete sarısı
    text: '#000000',
    primary: '#a0522d', // Koyu kahverengi
  },
  dark: {
    background: '#2f4f4f', // Koyu gri
    text: '#ffffff',
    primary: '#a0522d', // Koyu kahverengi
  },
};

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

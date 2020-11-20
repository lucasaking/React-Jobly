import React from 'react';

function useLocalStorage(localStorageKey) {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey,value);
  }, [value]);

  if (value) {
    return [JSON.parse(value), setValue];
  }
  
  return [value, setValue];
};

export default useLocalStorage;
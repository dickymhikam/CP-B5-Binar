import  { createContext, useState } from 'react';

const ProgressContext = createContext('ALL');

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState('ALL');

  const changeProgress = (progress) => {
    setProgress(progress);
  };

  return (
    <ProgressContext.Provider value={{ progress, changeProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContext;
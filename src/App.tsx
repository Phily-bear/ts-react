import React, { FC, createContext } from 'react';
import './App.css';
import { Person } from './components/Person';
import { HairColor } from './Enums';
import { AppContextInterface } from './Interfaces';

const AppContext = createContext<AppContextInterface | null>(null);
const App: FC = () => {
  const contextValue = {
    name: 'Pedro',
    age: 20,
    country: 'Brazil',
  };
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person
          name="sanbing"
          age={20}
          email="123@gmail.com"
          hairColor={HairColor.Blonde}
        ></Person>
      </div>
    </AppContext.Provider>
  );
};

export default App;

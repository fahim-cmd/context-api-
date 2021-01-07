import './App.css';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import { createContext, useState } from 'react';

export const CategoryContext = createContext();

function App() {

  const [category, setCategory] = useState("laptop"); 

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <Main></Main>
      <Home></Home>
    </CategoryContext.Provider>
  );
}

export default App;

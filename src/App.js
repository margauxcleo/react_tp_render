import { useState } from "react";
import './App.css';
import Fetch from "./components/Fetch/Fetch";
import ContactInfo from './components/ContactInfo/ContactInfo';


function App() {
  const [userId, setUserId] = useState(1);

  const url = "https://jsonplaceholder.typicode.com/users/";

  const handlePlus = (event) => {
    event.preventDefault();
    setUserId(userId + 1);
  }

  const handleMinus = (event) => {
    event.preventDefault();
    if (userId - 1 > 0) setUserId(userId - 1);
  }

  // dans Fetch ci-dessous, on met la fonction render, qui prend en argument data (récupérer dans render)
  // et on met ainsi en props data dans le component ContactInfo 
  // Contact info va donc récupérer data, et afficher les infos nécessaires (data.name et data.email)
  // la fonction appelée render renvoit donc le render d'un autre Component 
  return (
    <div className='App'>
      <h1>User ID: {userId}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <Fetch 
        url={url + userId} 
        render={(data) => <ContactInfo data={data} />} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Card from './components/Card';

function App() {
  const [state, setState] = useState({
    card: [
      {
        header: 'Hobby',
        title: 'All the bassics for the starting bussiness',
        number: 12,
        month: '/mon',
        button: 'Buy Hobby',
        headerInfor: "WHAT'S INCLUDE",
        detail: ['Potenti feils, in cars at  ligula nunc.','Orci neque eget pellentesque'],
      }
    ]
  })
  return (
    <>
      {
        state.card.map((card) => (
          <Card
            header = {card.header}
            title = {card.title}
            number = {card.number}
            month = {card.month}
            button = {card.button}
            headerInfor = {card.headerInfor}
            detail = {card.detail}
          />
        ))
      }
    </>
    
  );
}

export default App;

import React from 'react';
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const PersonName = {
    first: "Danny",
    last : "Myles"
  }
  const nameList =[
    {
    first : 'Danny',
    last : 'Muhadi',
    },
    {
      first: "Jane",
      last : 'Wambui'
    },
    {
      first :'Tyson',
      last : 'Ambani'
    }
]
  return (
    <div className="App">
      <Greet name='Danny' messageCount={20}  isLoggedIn={false}/>
      <Person name={PersonName}/>
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>PlaceHolder</Heading>
      <Oscar><Heading>Oscar goes to Mombassa</Heading></Oscar>
      <Button handleClick={(event)=>{console.log(event); }}/>

      <Input value=""  handleChange={(event)=>{console.log(event);}}/>

      <Container style ={{border:'1px solid red',padding: '1rem',}}/>
       </div>
  );
}

export default App;

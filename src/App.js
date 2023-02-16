import React, { useEffect, useState } from 'react';
import { FormControl} from '@mui/material';
import { Input} from '@mui/material';
import './App.css';
import Message from './Message.jsx';
import db from './firebase.js';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import { IconButton, Button } from '@mui/material';


function App() {

  const [input, setInput] = useState('');
  const [messeges, setMesseges] = useState([]);
  const [username, SetUsername] = useState('');

 

  // This useEffect can take snapshot or capture on every single time when there is change made in messages collection and for every snapshot it 
  // will loop through or map through every single doc in docs and set them in setMessages so when useEffect run all the messages in db will display.

  useEffect(()=>{
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMesseges(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, []);

  console.log(input);
  console.log(messeges);

  const onChange = (event) => {
    setInput(event.target.value);
  };

  // eslint-disable-next-line
  const onClick = (event) => {
    event.preventDefault();
    // logic to send messeges
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()         // This will add time according to the place timezone where your firebase is hosted.
    })
    setInput('');
  }

  useEffect(()=>{
    SetUsername(prompt('Enter your name.'));

  },[]);


  return (
    <div className="App">
      <h1>Messenger Clone !!</h1>
      <form className='app_form'>
        <FormControl className='form_control'>
          <Input className='app_input' placeholder='Enter a message...' value={input} onChange={onChange}/>
          <IconButton  className='app_iconbutton' disabled={!input} variant='contained' color='primary' type='submit' onClick={onClick}>
            <Button>send</Button>
          </IconButton>
        </FormControl>
        
      </form>

    <FlipMove>
      {
      messeges.map(({message, id}) => {
        return(
        <Message key={id} username={username} message={message} />
      )})
      }
      </FlipMove>


    </div>
  );
}

export default App;

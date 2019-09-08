import React from 'react';
import ParticipantList from './ParticipantList';
import Stage from './Stage';
import ChatLog from './ChatLog'
import './App.css';

App.defaultProps = {
  store : {
    participants : [],
    chatEvents : [],
    notation: {}
  }
}

function App(props) {
  return (
    <main className='App'>
        <section className='mainContainer'>
            <div className='stageLeft'>
                <div className='topBar left'>
                    <ul>
                      <li>Chat</li>
                      <li>Participants (2)</li>
                      <li>Buttons</li>
                    </ul>
                </div>
                  <ParticipantList participants={props.store.participants} />
                  <ChatLog chatEvents={props.store.chatEvents} participants={props.store.participants} notation={props.store.notation}/>
            </div>
            <div className='stageRight'>
                <div className='topBar right'>
                    <ul>
                        <li>Left Arrow Button</li>
                        <li>Stage</li>
                        <li>Leon's Screen X</li>
                    </ul>
                </div>
                 <Stage participants={props.store.participants}/>
            </div>
        </section>
        <section className='bottomFooter'>
          <div className="randomButtons">Button 1 2 3 and 4</div>
          <div className="joinstuff">Join stage</div>
        </section>
    </main>
  );
}

export default App;

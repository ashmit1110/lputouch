import React from 'react';
import StatusBar from './components/StatusBar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MessageCard from './components/MessageCard';
import { messages } from './data/messages';

function App() {
  return (
    <div className="app-container">
      <div className="mobile-view">
        <div className="fixed-top">
          <StatusBar />
          <Header />
        </div>
        <div className="scrollable-content">
          <SearchBar />
          <div className="messages-list">
            {messages.map((msg) => (
              <MessageCard key={msg.id} message={msg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

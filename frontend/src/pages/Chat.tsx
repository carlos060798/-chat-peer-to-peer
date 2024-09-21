import React, { useState } from 'react';
import ConversionHistory from '../components/SidePanel';
import Chat from '../components/chatform';


const ChatPage: React.FC = () => {
 

  return (
    <div className="container-fluid vh-100 d-flex">
     
      <ConversionHistory />

      <Chat/>
    </div>
  );
};

export default ChatPage;
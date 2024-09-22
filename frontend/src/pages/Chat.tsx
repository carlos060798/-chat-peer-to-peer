
import ConversionHistory from '../components/SidePanel';
import Chat from '../components/chatform';


function ChatPage() {


  return (
    <div className="container-fluid vh-100 d-flex">

      <ConversionHistory />

      <Chat />
    </div>
  );
};

export default ChatPage;
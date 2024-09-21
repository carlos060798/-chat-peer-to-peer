import{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ChatConverter() {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [conversionHistory, setConversionHistory] = useState<string[]>([
    // Historial simulado
    '1000 pesos = 50 dólares',
    '500 dólares = 10,000 pesos'
  ]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      // Aquí podrías manejar el envío al backend para realizar la conversión
      const convertedMessage = `Conversión solicitada: ${message}`;
      setChatMessages([...chatMessages, convertedMessage]);
      setMessage('');  // Limpiar el campo de entrada
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex">
      {/* Panel Izquierdo: Historial de Consultas */}
      <div className="bg-light border-end" style={{ width: '25%' }}>
        <h5 className="text-center mt-3">Historial</h5>
        <ul className="list-group list-group-flush">
          {conversionHistory.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Área Principal: Chat */}
      <div className="d-flex flex-column flex-grow-1">
        {/* Chat */}
        <div className="flex-grow-1 bg-white p-3 border-bottom overflow-auto">
          {chatMessages.map((msg, index) => (
            <div key={index} className="my-2 p-2 bg-secondary text-white rounded">
              {msg}
            </div>
          ))}
        </div>

        {/* Input para enviar mensajes */}
        <div className="p-3 border-top bg-light">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa una cantidad para convertir (ej. 1000 pesos a dólares)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleSendMessage}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatConverter;

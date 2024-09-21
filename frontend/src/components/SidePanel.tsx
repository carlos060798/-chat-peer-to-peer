import { useQuery } from "@tanstack/react-query";
import { getLogs } from "../api/convertApi";
import Loader from "./Louder";
import { IRegisterLog } from "../interfaces/registerlog.interface";



function ConversionHistory() {

  const { data, isLoading } = useQuery({
    queryKey: ["logs"],
    queryFn: getLogs,
  });

 

  if (isLoading ) return <Loader/>;

  if (data)

  return (
    <div className="bg-light border-end" style={{ width: '40%' }}>
      <h5 className="text-center mt-3">Historial</h5>
      <ul className="list-group list-group-flush">
        {data.map((register:IRegisterLog, index: number) => (
          <li key={index} className="list-group-item">
            <p>De: {register.fromCurrency}</p>
            <p>Para: {register.toCurrency}</p>
            <p>Monto: {register.amount}</p>
            <p>Resultado: {register.result}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversionHistory;
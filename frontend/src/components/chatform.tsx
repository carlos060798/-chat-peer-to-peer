
import { useForm } from "react-hook-form";
import { useMutation ,useQueryClient } from "@tanstack/react-query";

import { ICurrencyConversion } from '../interfaces/convert.interface';
import { Convercurrency } from '../api/convertApi';
import { useMessage } from '../helpers/mensaje.helper';

function Chat() {
  const { Messages, dataMenssages } = useMessage();


  const { register, handleSubmit, formState: { errors }, reset } = useForm<ICurrencyConversion>({
    defaultValues: {
      from: '',
      to: '',
      amount: 0,
    }
  });
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: Convercurrency,
    onError: () => {
       'Error en la conversión'
    },
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({ queryKey: ["logs"] });
      dataMenssages(data);
    
      reset();
    }
  });


  const handleConversion = (formData: ICurrencyConversion) => {
    console.log(formData);
    mutate(formData);
  };

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 bg-white p-3 border-bottom overflow-auto">
        {
          Messages.map((msg, index) => (
            <div key={index} className="my-2 p-2 bg-secondary text-white rounded">
              {msg}
            </div>))
        }
      </div>

      <div className="p-3 border-top bg-light">
        <form onSubmit={handleSubmit(handleConversion)}>
          <div className="mb-2">
            <div className="row">
              <div className="col">
                <select
                  className="form-select"
                  {...register("from", { required: "Moneda de origen es requerida" })}
                >
                  <option value="">Selecciona moneda origen</option>
                  <option value="COP">COP</option>
                  <option value="USD">USD</option>
                </select>
                {errors.from && (
                  <div className="text-danger">{errors.from.message}</div>
                )}
              </div>
              <div className="col">
                <select
                  className="form-select"
                  {...register("to", { required: "Moneda de destino es requerida" })}
                >
                  <option value="">Selecciona moneda destino</option>
                  <option value="USD">USD</option>
                  <option value="COP">COP</option>
                </select>
                {errors.to && (
                  <div className="text-danger">{errors.to.message}</div>
                )}
              </div>
            </div>
          </div>

          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              placeholder="Ingresa el monto a convertir"
              {...register("amount", {
                required: "El monto es obligatorio",
                min: { value: 1, message: "El monto debe ser mayor a 0" }
              })}
            />
            {errors.amount && (
              <div className="text-danger">{errors.amount.message}</div>
            )}
          </div>

          <div className="input-group">
            <button type="submit" className="btn btn-success w-100">
              Convertir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;

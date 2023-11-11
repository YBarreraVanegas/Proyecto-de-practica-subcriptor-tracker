import { useState } from "react";

export const FormAddMoney = ({ setCount, setIsValid }) => {
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)

    const handleForm = (e) => {
        e.preventDefault()

        if (input === '' || Number(input) < 0 ){
            setError(true);
            return;
        }
        setError(false)
        setCount(Number(input))
        setIsValid(true)
        // console.log(input)
    }


  return (
    <div className="form-add-money">
      <form onSubmit={handleForm} >
        <h3>Agregar presupuesto</h3>
        <input type="number" placeholder="$3005" onChange={e => setInput(e.target.value)} />
        <input type="submit" value="Agregar" />
      </form>
      { error ? <p className="error">Presupuesto invalido</p> : null  }
      
    </div>
  );
};

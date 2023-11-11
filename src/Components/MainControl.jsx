import { useState } from "react";
import Balance from "./Balance";
import FormAdSubs from "./FormAddSubs";
import DisplayItems from "./DisplayItems";

const MainControl = ({ count }) => {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [subs, setSubs] = useState([])
  const [editId, setEditId] = useState('')
  const [spent, setSpent] = useState(0)

  const eliminarItem = id => {
    const newList = subs.filter(item => item.id != id );
    setSubs(newList);
  }

  const editItem = id => {
    setEditId(id);
    subs.map(item => {
        if (item.id=== id){
            setType(item.type);
            setPrice(item.price);
        }

    })
  }

  return (
    <>
    <div className="main-form">
      <Balance count={count} subs={subs} spent={spent} setSpent={setSpent} />
      <FormAdSubs
        setType={setType}
        setPrice={setPrice}
        type={type}
        price={price}
        subs={subs}
        setSubs={setSubs}
        editId={editId}
        setEditId={setEditId}
        spent={spent}
        setSpent={setSpent}
        count={count}
      />
    </div>
    <DisplayItems  subs={subs} eliminarItem={eliminarItem} editItem={editItem} />
    </>
  );
};

export default MainControl;

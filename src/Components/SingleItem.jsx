import { moneyFormat } from '../helpers'
const SingleItem = ({ price, type, id, eliminarItem, editItem }) => {


    const handleDelete = (e) => {
        e.preventDefault()
        const answer = window.confirm(`Borrar Suscripción de ${type}`);
        if (answer) {
            eliminarItem(id)
        }

    }

    const handleEdit = e => {
        e.preventDefault();
        editItem(id);
    }



    const urlImage = `/src/images/${type}.png`
    return ( 
        <div className="single-item">
            <img src={ urlImage } alt="services" />
            <h3>Precio: {moneyFormat(Number(price))}  </h3>
            <a href="" onClick={handleDelete}>Borrar</a>
            <a href="" onClick={handleEdit} >Editar</a>
        </div>
     );
}
 
export default SingleItem;
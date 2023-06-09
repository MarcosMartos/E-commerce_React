import { useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = () => {
  const [producto, setProducto] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productoSeleccionado = products.find(
      (elemento) => elemento.id === parseInt(id)
    );
    const tarea = new Promise((res, rej) => {
      res(productoSeleccionado);
    });
    tarea.then((res) => setProducto(res));
  }, [id]);

  const onAdd = (cantidad) => {
    console.log(producto);
    console.log(cantidad);
  };

  return (
    <div className="contenedor">
      <img className="imagenDetalle" src={producto.img} alt="" />
      <h2>{producto.title}</h2>
      <h4>{producto.price}</h4>

      <CounterContainer stock={producto.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;

import Eliminar from "../assets/icons/basura.png";
import Editar from "../assets/icons/editar.png";
import Swal from "sweetalert2";

const ProductsList = ({ dataApi, deleteProduct, editProduct }) => {
  const eliminarProducto = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción.",
      type: "warning",

      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "¡Eliminado!",
          "El registro se eliminó correctamente.",
          "success"
        );
        deleteProduct(id);
      } else if (result.isDenied) {
        Swal.fire("Información", "No pasó nada", "info");
      }
    });
  };

  return (
    <div className="container-table">
      <article className="table">
        <div className="table_card">
          {dataApi.map((dataApi, index) => (
            <div className="info_table" key={index}>
              <h2>Producto</h2>
              <div>
                <h3>Nombre:</h3> {dataApi.name}
              </div>
              <div>
                <h3>Categoría:</h3>
                {dataApi.category}
              </div>
              <div>
                <h3>Precio:</h3>
                <p>$ {dataApi.price}</p>
              </div>
              <div className="Estatus">
                <h3>Estatus:</h3>

                {dataApi.isAvailable ? "DISPONIBLE" : "AGOTADO"}
              </div>
              <div>
                <h3 className="bt_modify">Editar</h3>
                <button
                  className="bt_edit"
                  onClick={() => editProduct(dataApi)}
                >
                  <img className="icon_2" src={Editar} alt="" />
                </button>
              </div>

              <div>
                <h3 className="bt_modify">Borrar</h3>
                <button
                  className="bt_trash"
                  onClick={() => eliminarProducto(dataApi.id)}
                >
                  <img className="icon_2" src={Eliminar} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default ProductsList;

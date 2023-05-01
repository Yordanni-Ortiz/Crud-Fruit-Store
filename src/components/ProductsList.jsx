import Eliminar from "../assets/icons/basura.png";
import Editar from "../assets/icons/editar.png";
import Swal from "sweetalert2";
import '../assets/styles/ProductList.css'

const ProductsList = ({ dataApi, deleteProduct, editProduct }) => {
  const eliminarProducto = (id) => {
    Swal.fire({
      title: '<h2 class="orange">¿Estás seguro?</h2>',
      html: '<b class="red">No podrás revertir esta acción.</b>',
      imageUrl: "/fruta-pensante.png",
      imageWidth: "30%",
      background: "#0A1C3E",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '<h2 class="red">¡Eliminado!</h2>',
          html: '<b class="green">El producto se eliminó correctamente.</b>',
          imageUrl: "/papaya-podrida.png",
          imageWidth: "30%",
          background: "#0A1C3E",
        });
        deleteProduct(id);
      } else if (result.isDismissed) {
        Swal.fire({
          title: '<h2 class="orange">Información</h2>',
          html: '<b class="green">El producto NO fue eliminado.</b>',
          imageUrl: "/brocoli-asustado.png",
          imageWidth: "30%",
          background: "#0A1C3E",
        });
      }
    });
  };

  return (
    <div className="container-table">
      <article className="table">
        <div className="table_card" style={{display: "flex", justifyContent: "center"}}>
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
                <p>💲 {dataApi.price}</p>
              </div>
              <div>
                <p className="Estatus">
                  {dataApi.isAvailable ? "✅ DISPONIBLE" : "❌ AGOTADO"}
                </p>
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

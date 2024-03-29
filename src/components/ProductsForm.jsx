import { useForm } from "react-hook-form";
import { useEffect } from "react";
import tienda from "../assets/icons/tienda.png";
import categoria from "../assets/icons/categorias.png";
import precio from "../assets/icons/precio.png";
import Swal from "sweetalert2";
import '../assets/styles/ProductForm.css'

const product_Create = () => {
  Swal.fire({
    title: '<h2 class="orange">¡Creado con Éxito!</h2>',
    html: '<b class="green">¡Operacion Éxitosa!</b>',
    imageUrl: "/naranja-feliz.png",
    imageWidth: "40%",
    background: "#0A1C3E",
    text: "center",
    button: "aceptar",
    timer: "2000",
    backdrop: false,
    timerProgressBar: true,
    position: "top-start",
  });
};
const product_Edit = () => {
  Swal.fire({
    title: '<h2 class="orange">¡Editado con Éxito!</h2>',
    html: '<b class="green">¡Operacion Éxitosa!</b>',
    imageUrl: "/mango-molesto.png",
    imageWidth: "30%",
    background: "#0A1C3E",
    button: "aceptar",
    timer: "2000",
    backdrop: false,
    timerProgressBar: true,
    position: "top-end",
  });
};

const ProductsForm = ({
  createProduct,
  productSelectToEdit,
  modifiedProduct,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const submit = (data) => {
    productSelectToEdit
      ? modifiedProduct(data)
      : (createProduct(data), reset(resetForm()), product_Create());
  };

  useEffect(() => {
    productSelectToEdit ? reset(productSelectToEdit) : reset(resetForm());
  }, [productSelectToEdit]);

  const resetForm = () => {
    return { name: null, category: null, price: null, isAvailable: false };
  };
  return (
    <div className="PrincipalContainer">
      <form className="Form" onSubmit={handleSubmit(submit)}>
        <div className="contentForm">
          <div className="textStockLetters">
            <h2 className="textStockLetter">A</h2>
            <h2 className="textStock">dministrar Inventario</h2>
          </div>
          <br />
          <label htmlFor="product_name" className="category_text">
            Producto
          </label>
          <div className="containerInpBtn">
            <div className="btInp">
              <img className="icons" src={tienda} alt="" />
            </div>

            <input
              className="inp"
              type="text"
              id="product_name"
              {...register("name", {
                required: true,
              })}
            />
          </div>
        </div>
        <div className="contentForm">
          <label htmlFor="product_category" className="category_text">
            Categoria
          </label>
          <div className="containerInpBtn">
            <div className="btInp">
              <img className="icons" src={categoria} alt="" />
            </div>
            <input
              className="inp"
              type="text"
              id="product_category"
              {...register("category", {
                required: true,
              })}
            />
          </div>
        </div>
        <div className="contentForm">
          <label htmlFor="product_price" className="category_text">
            Precio
          </label>
          <div className="containerInpBtn">
            <div className="btInp">
              <img className="icons" src={precio} alt="" />
            </div>
            <input
              className="inp"
              type="number"
              id="product_price"
              {...register("price", {
                required: true,
              })}
            />
          </div>
        </div>
        <div className="checkB">
          <label htmlFor="isAvailable">Disponible</label>
          <label className="switch">
            <input
              type="checkbox"
              id="isAvailable"
              placeholder="is Available"
              {...register("isAvailable")}
            />
            <span className="slider round"></span>
          </label>
        </div>
        {productSelectToEdit ? (
          <button
            onClick={() => product_Edit()}
            className="btnForm"
            type="submit"
          >
            Modificar
          </button>
        ) : (
          <button className="btnForm" type="submit">
            Enviar
          </button>
        )}
      </form>
    </div>
  );
};

export default ProductsForm;

import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import * as yup from "yup";
import {
  actionAddWorkerAsync,
  actionEditWorkerAsync,
} from "../../redux/actions/adminAction";
import { categoryWorker, inputList } from "../../services/data";
import { fileUpLoad } from "../../services/fileUpload";

const schema = yup.object({
  name: yup.string().required("Debe ingresar el nombre del contratista"),
  profession: yup.string().required("Debe incluir la profesión"),
  expertise: yup.string().required("Debe ingresar los años de experiencia"),
  phone: yup.string().required("Debe ingresar el celular"),
});

const AddWorker = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { contratista, error } = useSelector((store) => store.contratistaStore);

  const userLogin = sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : false;

  if (userLogin.admin === true) {
    console.log("es admin");
  } else {
    console.log("no es admin");
    navigate("/contratistas");
  }

  const cont = contratista.find((item) => item.id === id);
  const defaulValues = {
    name: cont ? cont.name : "",
    profession: cont ? cont.profession : "",
    expertise: cont ? cont.expertise : "",
    phone: cont ? cont.phone : "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaulValues,
  });

  const onSubmit = async (data) => {
    if (id) {
      console.log(data);
      console.log(data.image.length);
      const editContratista = { id: cont.id, ...data };
      if (data.image.length) {
        const URLimg = await fileUpLoad(data.image[0]);
        editContratista.image = URLimg;
      } else {
        editContratista.image = cont.image;
      }
      console.log(editContratista);
      dispatch(actionEditWorkerAsync(editContratista));
      Swal.fire("Se ha actualizado el contratista", "success").then(() => {
        navigate("/eliminarEditarContratistas");
      });
    } else {
      const URLimg = await fileUpLoad(data.image[0]);
      const cont = {
        ...data,
        image: URLimg,
      };
      dispatch(actionAddWorkerAsync(cont));
      console.log(error);
      if (error.error) {
        Swal.fire(
          "Upp ha ocurrido un error:",
          `${error.errorMessage}`,
          "error"
        );
      } else {
        Swal.fire(
          "De maravilla!!",
          "Se ha agregado el contratista",
          "success"
        ).then(() => {
          navigate("/contratista");
        });
      }
    }
  };

  return (
    <div className="p-5">
      <h1>
        {cont && id
          ? `Actualice la informacion de ${cont.name}`
          : "Agregue un nuevo contratista"}{" "}
      </h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {inputList.map((item, index) => {
          if (item.type === "select") {
            return (
              <FloatingLabel key={index} label={item.label} className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  defaultValue={defaulValues[item.name]}
                  {...register(item.name)}
                >
                  <option value="">Selecciona la profesión</option>
                  {categoryWorker.map((element) => (
                    <option
                      key={element.value}
                      value={element.label}
                      className="text-capitalize"
                    >
                      {element.label}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            );
          }
          if (item.type === "textarea") {
            return (
              <FloatingLabel key={index} label={item.label} className="mb-3">
                <Form.Control
                  as="textarea"
                  defaultValue={defaulValues[item.name]}
                  {...register(item.name)}
                />
              </FloatingLabel>
            );
          }

          return (
            <FloatingLabel key={index} label={item.label} className="mb-3">
              <Form.Control
                type={item.type}
                size={item.type === "file" ? "sm" : ""}
                defaultValue={defaulValues[item.name]}
                {...register(item.name)}
              />
            </FloatingLabel>
          );
        })}

        <Button variant="warning" type="submit" className="mb-3">
          {cont && id ? `Actualizar contratista` : "Agregar nuevo contratista"}
        </Button>
      </Form>
    </div>
  );
};

export default AddWorker;

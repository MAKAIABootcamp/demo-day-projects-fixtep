import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/fixtep.svg";
import {
  actionFilterWorkerAsync,
  actionGetWorkerAsync,
} from "../../redux/actions/workerAction";
import { categoryWorker } from "../../services/data";
import "./contratistas.scss";
// https://previews.123rf.com/images/dolgachov/dolgachov1610/dolgachov161012005/64860816-profesi%C3%B3n-carpinter%C3%ADa-ebanister%C3%ADa-y-el-concepto-de-la-gente-carpintero-con-tablones-de-madera-martil.jpg

import Lottie from "react-lottie";
import animationData from "../../lotties/plumber.json";

const Contratistas = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const details = () => {
    navigate("/details");
  };

  useEffect(() => {
    dispatch(actionGetWorkerAsync());
  }, [dispatch]);

  const { contratista } = useSelector((store) => store.contratistaStore);
  console.log(contratista);

  const onFiltered = (searchValue) => {
    const searchParam = "profession";
    dispatch(actionFilterWorkerAsync(searchParam, searchValue));
  };

  return (
    <>
      {" "}
      <div>
        <Lottie options={defaultOptions} height={300} width={300} />{" "}
      </div>
      <div className="worker">
        <div className="worker__buttons">
          <Button
            onClick={() => {
              dispatch(actionGetWorkerAsync());
            }}
            variant="outline-secondary"
          >
            Todos
          </Button>
          {categoryWorker.map((item) => (
            // <button key={item.value}>{item.label}</button>
            <Button
              onClick={() => {
                onFiltered(item.label);
              }}
              variant="secondary"
              key={item.value}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <div className="worker__card">
          {contratista && contratista.length ? (
            contratista.map((item, index) => (
              <article
                className="description"
                onClick={() => {
                  navigate(`/details/${item.name}`);
                }}
                key={index}
              >
                <img src={item.image} />
                <h4>{item.profession}</h4>
              </article>
            ))
          ) : (
            <div>no hay contratistas</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contratistas;

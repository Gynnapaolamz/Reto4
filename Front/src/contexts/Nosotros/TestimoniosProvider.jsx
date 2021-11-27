import React, { useState } from "react";
import TestimoniosContext from "./TestimoniosContext";
import DatosTestimonios from "../../consts json/Nosotros/DatosTestimonios.json";

const TestimoniosProvider = ({ children }) => {
  const [modalTestimoniales, setModalTestimoniales] = useState(DatosTestimonios);

  const handleChangeModalTestimoniales = (valor) => {
    setModalTestimoniales(valor);
  };

  const data = {
    modalTestimoniales,
    handleChangeModalTestimoniales,
  };

  return (
    <TestimoniosContext.Provider value={data}>
      {children}
    </TestimoniosContext.Provider>
  );
};

export default TestimoniosProvider;

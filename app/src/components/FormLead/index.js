import React, { useState } from "react";

import { Form } from "./styles";
import InputSomar from "../../objects/InputSomar";
import BtnSomarCidade from "../Btn/BtnSomarCidade";

const FormLead = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("Buscar");

  return (
    <Form>
      <InputSomar placeholder="Cidade desejada" />
      <BtnSomarCidade
        onClick={event => {
          event.preventDefault();
          setLoading(true);
          setContent("Enviando..");
        }}
      >
        {content}
      </BtnSomarCidade>
    </Form>
  );
};

export default FormLead;

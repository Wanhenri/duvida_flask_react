import React, { useState } from "react";

import { Form } from "./styles";
import InputSomar from "../../objects/InputSomar";
import BtnSomarCidade from "../Btn/BtnSomarCidade";

const FormLead = props => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <Form>
      <InputSomar
        placeholder="Cidade desejada"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <BtnSomarCidade
        onClick={event => {
          event.preventDefault();
          setLoading(true);
          props.onSubmit(search, () => {
            setLoading(false);
          });
        }}
      >
        {loading ? "Buscando..." : "Buscar"}
      </BtnSomarCidade>
    </Form>
  );
};

export default FormLead;

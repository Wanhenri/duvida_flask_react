import React from "react";

import moment from "moment";

export default function satelite(props) {
  return(
    <img
      height={props.height}
      src={`http://img0.cptec.inpe.br/~rgrafico/portal_tempo/satelite/atual_ams.jpg`}
    ></img>
  )
}



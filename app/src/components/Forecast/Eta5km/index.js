import React from "react";

import moment from "moment";

export default function Eta5km(props) {
  return(
    <img
      height={props.height}
      alt={props.title}
      src={`http://ftp.cptec.inpe.br/etamdl/Products/Eta5km/${props.date}00/Exp/precip+${props.fct}.gif`}
    ></img>
  )
}



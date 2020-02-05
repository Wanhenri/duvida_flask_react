import React from "react";

import moment from "moment";

export default function ObsMerge(props) {
  return(
    <img
      height={props.height}
      alt={props.title}
      src={`http://ftp.cptec.inpe.br/etamdl/Products/OBS-MERGE/${props.date}/precip_${props.date}.gif`}
    ></img>
  )
}



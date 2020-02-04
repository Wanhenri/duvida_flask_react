import React, { useState } from "react";

import moment from "moment";

//export default function ObsMerge() {
//  const [date, setDate] = useState(
//    moment()
//      .subtract(1, "days")
//      .format("YYYYMMDD")
//  );
//  return (
//    <img
//      height="720"
//      alt="preciptation gif for yesterday"
//      src={`http://ftp.cptec.inpe.br/etamdl/Products/OBS-MERGE/${date}/precip_${date}.gif`}
//    ></img>
//  );
//}
//
//const dateYesterday =  moment().subtract(1, "days").format("YYYYMMDD")
//console.log(dateYesterday)

export default function ObsMerge(props) {
  return(
    <img
      height={props.height}
      alt={props.title}
      src={`http://ftp.cptec.inpe.br/etamdl/Products/OBS-MERGE/${props.date}/precip_${props.date}.gif`}
    ></img>
  )
}



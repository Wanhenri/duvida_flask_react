import React, { useState } from "react";

import moment from "moment";

export default function ObsMerge() {
  const [date, setDate] = useState(
    moment()
      .subtract(1, "days")
      .format("YYYYMMDD")
  );
  return (
    <img
      height="720"
      alt="preciptation gif for yesterday"
      src={`http://ftp.cptec.inpe.br/etamdl/Products/OBS-MERGE/${date}/precip_${date}.gif`}
    ></img>
  );
}

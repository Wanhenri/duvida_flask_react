import React from "react";
import { Wrapper, Section } from "./styles";
import ObsMerge from "../../components/Observer/ObsMerge";
import Eta5km from "../../components/Forecast/Eta5km";
import Satelite from "../../components/Observer/Satelite";
import moment from "moment";

const dateNow = moment().format("YYYYMMDD");
const dateY1 = moment()
  .subtract(1, "days")
  .format("YYYYMMDD");
const dateY2 = moment()
  .subtract(2, "days")
  .format("YYYYMMDD");
const dateY3 = moment()
  .subtract(3, "days")
  .format("YYYYMMDD");
const dateY4 = moment()
  .subtract(4, "days")
  .format("YYYYMMDD");
const dateY5 = moment()
  .subtract(5, "days")
  .format("YYYYMMDD");

const FTP = () => (
  <Wrapper>
    <Section>
      <Satelite height="684" title="Satellite image" />
    </Section>
    <Section style={{ flexDirection: "row" }}>
      <ObsMerge
        height="410"
        title="preciptation gif for 5 days ago"
        date={dateY5}
      />
      <ObsMerge
        height="410"
        title="preciptation gif for 4 days ago"
        date={dateY4}
      />
      <ObsMerge
        height="410"
        title="preciptation gif for 3 days ago"
        date={dateY3}
      />
      <ObsMerge
        height="410"
        title="preciptation gif for 2 days ago"
        date={dateY2}
      />
      <ObsMerge
        height="410"
        title="preciptation gif for yesterday"
        date={dateY1}
      />
    </Section>
    <Section style={{ flexDirection: "row" }}>
      <Eta5km
        height="684"
        title="preciptation gif for today"
        date={dateNow}
        fct="24"
      />
      <Eta5km
        height="684"
        title="preciptation gif for today"
        date={dateNow}
        fct="48"
      />
      <Eta5km
        height="684"
        title="preciptation gif for today"
        date={dateNow}
        fct="72"
      />
    </Section>
  </Wrapper>
);

export default FTP;

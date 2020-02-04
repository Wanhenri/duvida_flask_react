import React from "react";
import { Wrapper, Section } from "./styles";
import ObsMerge from "../../components/ObsMerge";
import moment from "moment";

const dateY1 =  moment().subtract(1, "days").format("YYYYMMDD")
const dateY2 =  moment().subtract(2, "days").format("YYYYMMDD")
const dateY3 =  moment().subtract(3, "days").format("YYYYMMDD")
const dateY4 =  moment().subtract(4, "days").format("YYYYMMDD")
const dateY5 =  moment().subtract(5, "days").format("YYYYMMDD")

const  FTP = () => (
  <Wrapper>
    <Section style={{ flexDirection: "row"}}>      
      <ObsMerge height="415" title="preciptation gif for yesterday" date={dateY1} />
      <ObsMerge height="415" title="preciptation gif for yesterday" date={dateY2} />
      <ObsMerge height="415" title="preciptation gif for yesterday" date={dateY3} />
      <ObsMerge height="415" title="preciptation gif for yesterday" date={dateY4} />
      <ObsMerge height="415" title="preciptation gif for yesterday" date={dateY5} />
    </Section>
  </Wrapper> 
);

export default FTP;


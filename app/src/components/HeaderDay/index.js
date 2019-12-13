import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

import { Container, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import TimeSummary from "../../objects/TimeSummary"

const HeaderDays = (props) => {

    return (
        <TimeSummary >
          <b>{moment($props => props.day).locale('pt-br').format('dddd')}</b>
        </TimeSummary >
    )
};

export default HeaderDays;


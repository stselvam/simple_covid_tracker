import React from 'react'
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import "./Cards.css";

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
  if(!confirmed) return "Loading....";
  return (
    <div className="cards___container">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className="card infected">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2.5} seperator=","></CountUp>
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card recovered">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2.5} seperator=","></CountUp>
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card deaths">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2.5} seperator=","></CountUp>
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of deaths cases of COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards

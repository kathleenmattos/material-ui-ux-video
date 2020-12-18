import React from 'react';
import CoffeeCard from './CoffeeCard';
import { Grid } from "@material-ui/core";
import coffeemakerList from "./constants";

const Content = () => {

  const getCoffeeMakerCard = (coffeeMakerObj) => {
    const { title, price, description, avatarUrl } = coffeeMakerObj
    return (
      <Grid item xs={12} sm={6} md={4}>
      <CoffeeCard { ...coffeeMakerObj} />
      </Grid>
      );
  }

  return (
    <Grid container spacing={4}>
        {coffeemakerList.map(coffeeMakerObj => getCoffeeMakerCard(coffeeMakerObj))}
    </Grid>
  );
}

export default Content;
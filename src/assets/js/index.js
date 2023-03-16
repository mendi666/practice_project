"use strict";

import getPlanets from "./getPlanets";
import renderPlanets from './renderPlanets';

const planetsRef = document.querySelector(".planets_info") || false;
if (planetsRef) {
planetsRef.innerHTML = renderPlanets()
} else {
  alert('test')
}

console.log('test')




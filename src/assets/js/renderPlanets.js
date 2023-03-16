
import getPlanets from './getPlanets';
export default function renderPlanets (planets = []) {
  let pageCount = 0;
  let totalCount = 0;
  let previousLink, nextLink = "";
  getPlanets().then((response) => {
    let output = `<div class='container'>`

if(response.count){
  totalCount = response.count
  output += `<span class='total_count'>Total Count of Planets: ${totalCount}</span> `
}
    if(response.results){
      pageCount = response.results.length !== 0 ? totalCount/response.results.length : 0
      output += `<span class='total_count'>Total Count of Pages: ${pageCount}</span> `

      const planetsData = response.results
      planetsData.forEach((planet) => {
       output += `<div class='planet__info'>
<span class='planet__info_name'>${planet.name}</span>
</div>`
        output += `</div>`
        insertIntoWrapper('.planets_info', output)



      })
    }

  })

}

function insertIntoWrapper (elSel = '', data) {
  const wrapper = document.querySelector(elSel) || false
  if(wrapper) {
    wrapper.innerHTML = data
  }
}



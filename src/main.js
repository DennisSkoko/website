import 'normalize.css'
import './global.css'
import './journey'
import './jumbotron'

document.querySelector('#app').innerHTML = `
  <app-jumbotron anchor="#journey"></app-jumbotron>
  <app-journey id="journey"></app-journey>
`

import { create } from 'ackee-tracker'
import 'normalize.css'
import './global.css'
import './journey'
import './jumbotron'

document.querySelector('#app').innerHTML = `
  <app-jumbotron anchor="#journey"></app-jumbotron>
  <app-journey id="journey"></app-journey>
`

if (import.meta.env.PROD) {
  ;(function() {
    create('https://analytics.dennisskoko.com', {
      ignoreOwnVisits: false,
    })
      .record('53cf9fd5-9d55-42d0-9a23-5f0ca1926074')
  })()
}

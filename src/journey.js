import { html, render } from 'lit-html'
import './timespan'
import classes from './journey.module.css'

export class Journey extends HTMLElement {
  connectedCallback() {
    const template = html`
      <div class=${classes.container}>
        <div class=${classes.header}>
          <h1>Journey</h1>
        </div>

        <section class=${classes.section}>
          <div>
            <h2>Position Green</h2>
            <app-timespan .from=${new Date(2021, 8)}></app-timespan>
            <div class=${classes.tags}>
              <span>React</span>
              <span>Relay</span>
              <span>GraphQL</span>
              <span>.NET</span>
              <span>Kubernetes</span>
            </div>
          </div>

          <div class=${classes.content}>
            <p>
              Dennis helped develop a platform where companies could report their data, also
              collect their suppliers data by sending questionnaires and visualise their data in
              graphs.
            </p>

            <p>
              Starting as a front-end developer, Dennis acquired C# skills to support backend
              operations. As the project and company grew, he transitioned to infrastructure,
              contributing to the team's migration to a self-hosted Kubernetes environment
            </p>
          </div>
        </section>

        <section class=${classes.section}>
          <div>
            <h2>Cygni</h2>
            <app-timespan .from=${new Date(2021, 2)} .to=${new Date(2021, 7)}></app-timespan>
            <div class=${classes.tags}>
              <span>React</span>
              <span>Node.js</span>
              <span>GraphQL</span>
              <span>Cypress</span>
            </div>
          </div>

          <div class=${classes.content}>
            <p>
              During his time at Cygni, Dennis contributed to three projects. The first involved
              developing features for an internal Cygni project utilizing React and GraphQL for
              both front-end and back-end tasks.
            </p>

            <p>
              In the second project, he implemented BankID authentication for a WordPress platform
              used by a company called
              <a href="https://maryland.se" target="_blank" rel="noreferrer">Maryland</a>,
              employing PHP for the back-end and JavaScript for the front-end.
            </p>

            <p>
              Lastly, Dennis assisted
              <a href="https://www.sonynetworkcom.com/nimway" target="_blank" rel="noreferrer">Sony</a>
              by creating integration and end-to-end tests for their application, utilizing Cypress
              for test automation and React for the front-end.
            </p>
          </div>
        </section>

        <section class=${classes.section}>
          <div>
            <h2>Knowit</h2>
            <app-timespan .from=${new Date(2018, 7)} .to=${new Date(2021, 1)}></app-timespan>
            <div class=${classes.tags}>
              <span>React</span>
              <span>Node.js</span>
              <span>AWS</span>
            </div>
          </div>

          <div class=${classes.content}>
            <p>
              Dennis was part of a large project that was the
              <a href="https://kitchen.planner.ikea.com/se/sv/" target="_blank" rel="noreferrer">IKEA</a> kitchen
              planner during the entire employment on Knowit. He started out as a front-end
              developer, then learned working with AWS and Node.js to become a fullstack developer.
            </p>
          </div>
        </section>
      </div>
    `

    render(template, this)
  }
}

customElements.define('app-journey', Journey)

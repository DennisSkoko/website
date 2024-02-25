import { html, render } from 'lit-html'
import './timespan'
import classes from './journey.module.css'

export class Journey extends HTMLElement {
  connectedCallback() {
    const template = html`
      <div class=${classes.container}>
        <div class=${classes.header}>
          <h1>Journey</h1>

          <p>
            <a href="#" @click=${this.#handleClick}>Click here</a> if you would like to go through the Journey from the
            beginning instead.
          </p>
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
            <div>
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
            <section class=${classes.project}>
              <h3>Maryland</h3>
              <app-timespan .from=${new Date(2021, 4)} .to=${new Date(2021, 4)}></app-timespan>

              <p>
                Implementing BankID authentication on a Wordpress website.
              </p>
            </section>

            <section class=${classes.project}>
              <h3>Sony</h3>
              <app-timespan .from=${new Date(2021, 5)} .to=${new Date(2021, 7)}></app-timespan>

              <p>
                Adding end-to-end tests to the project using Cypress.
              </p>
            </section>
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

          <div id="first-job" class=${classes.content}>
            <section>
              <h3>IKEA</h3>
              <app-timespan .from=${new Date(2018, 7)} .to=${new Date(2021, 1)}></app-timespan>

              <p>
                Dennis was part of a large project that was the IKEA kitchen planner. He started
                out as a front-end developer, then learned working with AWS and Node.js to become
                a fullstack developer.
              </p>
            </section>
          </div>
        </section>
      </div>
    `

    render(template, this)
  }

  #handleClick = (event) => {
    event.preventDefault()
    this.querySelector('#first-job').scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
}

customElements.define('app-journey', Journey)

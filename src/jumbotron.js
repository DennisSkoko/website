import { html, render } from 'lit-html'
import classes from './jumbotron.module.css'

export class Jumbotron extends HTMLElement {
  connectedCallback() {
    const template = html`
      <div class=${classes.section}>
        <div class=${classes.content}>
          <h1>Dennis is a developer who likes learning and simplicity</h1>

          <p>
            Dennis's journey began as a front-end developer specializing in React, before
            transitioning to a full-stack role with expertise in Node.js and AWS. Subsequently, he
            focused on developing end-to-end tests using Cypress. His latest project involved
            starting as a front-end developer, then learning C# for backend development, eventually
            moving to a full-stack position. Currently, he is developing the infrastructure on a
            self-hosted Kubernetes environment.
          </p>
        </div>

        <button class=${classes.arrow} @click=${this.#handleClick}></button>
      </div>
    `

    render(template, this)
  }

  #handleClick = () => {
    const anchor = this.getAttribute('anchor')
    document.querySelector(anchor).scrollIntoView({ block: 'start', behavior: 'smooth' })
  }
}

customElements.define('app-jumbotron', Jumbotron)

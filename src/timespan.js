import { html, render } from 'lit-html'
import { format, formatDistanceStrict, startOfMonth, endOfMonth } from 'date-fns'

export class Journey extends HTMLElement {
  connectedCallback() {
    const from = startOfMonth(this.from)
    const to = endOfMonth(this.to || new Date())

    const template = html`
      <p>
        ${format(from, 'MMM yyyy')} - ${this.to ? format(this.to, 'MMM yyyy') : 'now'}
        <em>(~${formatDistanceStrict(to, from)})</em>
      </p>
    `

    render(template, this)
  }
}

customElements.define('app-timespan', Journey)

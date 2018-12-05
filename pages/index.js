import './css/reset.css'
import './index.css'
import './Block' // importing css from this dir
import * as React from 'react'
import data from '../data/data.json'
import Card from './Card'

export default class Index extends React.Component {
  static async getInitialProps () {
    return { cards: data }
  }
  render () {
    return (
      <div>
        {this.props.cards.map(card => (
          <Card
            key={card.id}
            description={card.description}
          />))}
      </div>
    )
  }
}

import './css/reset.css'
import './index.css'
import './Block/' // importing css from this dir
import * as React from 'react'
import data from '../data/data.json'

const Card = ({ description }) => <p>{description}</p>

export default class Index extends React.Component {
  static async getInitialProps () {
    return { cardz: data }
  }
  render () {
    return (
      <div>
        {this.props.cardz.map(card => (
          <Card
            key={card.id}
            description={card.description}
          />))}
      </div>
    )
  }
}

import './css/reset.css'
import './index.css'
import './Block' // importing css from this dir
import * as React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, initialCards, addItem } from '../Store'
import withRedux from 'next-redux-wrapper'

import Card from './Card'

class Index extends React.Component {
  static async getInitialProps ({ store }) {
    store.dispatch(initialCards())
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
const mapDispatchToProps = (dispatch) => {
  return {
    initialCards: bindActionCreators(initialCards, dispatch),
    addItem: bindActionCreators(addItem, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index)

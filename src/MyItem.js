import React from 'react'
class Item extends React.Component {
  constructor (props) {
    super(props)
    this.state = { clicks: 0 }
  }

  clickMe () {
    console.log('I clicked:', this.props.name)
    this.setState({
      clicks: this.state.clicks + 1
    })
  }

  render () {
    return (
      <div>
        <h1 onClick={() => this.clickMe()}>Hello World! from {this.props.name}
        </h1>
        <span>
          {this.state.clicks}: is the times I was clicked
        </span>
      </div>

    )
  }
}
export default Item

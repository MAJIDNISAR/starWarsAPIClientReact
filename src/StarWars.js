import React from 'react'
class IntroStarWars extends React.Component {
  render () {
    return (
      <div className='starwars-demo'>
        <img src='https://cssanimation.rocks/demo/starwars/images/star.svg' alt='Star' className='star' />
        <img src='https://cssanimation.rocks/demo/starwars/images/wars.svg' alt='Wars' className='wars' />
        <h2 className='byline' id='byline'>The Force Awakens</h2>
      </div>
    )
  }
}
class FilmItemRow extends React.Component {
  render () {
    return (
      <li>
        <a href={this.props.url}>{this.props.url}</a>
      </li>
    )
  }
}
class StarWars extends React.Component {
  constructor () {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      image: null,
      films: []
    }
  }

  randomize () {
    const randomNumber = Math.round(Math.random() * 88)
    // const randomNumber = Math.round(Math.random() * 100)
    const URL = `https://swapi.dev/api/people/${randomNumber}/`
    const imageRequestURL = `https://github.com/akabab/starwars-api/tree/master/api/id/${randomNumber}.json/`
    // fetch(imageRequestURL)
    // .then(response=>{
    //   console.log(response)
    // })

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.table(data)
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          loadedCharacter: true
        })
      })
  }

  render () {
    const movies = this.state.films.map((film, i) => {
      return <FilmItemRow key={i} url={film} />
    })
    return (
      <div>
        {
          this.state.loadedCharacter &&
            <div>
              <table className='starwars'>
                <tbody>
                  <tr>
                    <td>Name </td><td> {this.state.name}</td>
                  </tr>
                  <tr>
                    <td>Height </td> <td>{this.state.height} cm</td>
                  </tr>
                  <tr>
                    <td>HomeWorld</td><td><a href={this.state.homeworld}>{this.state.homeworld}</a></td>
                  </tr>
                  <tr>
                    <td>Movies </td> <td><ul>{movies}</ul></td>
                  </tr>
                </tbody>
              </table>
            </div>
        }
        <div> <IntroStarWars />
        </div>
        <button
          onClick={() => this.randomize()}
          type='button' className='btnRandomizer'
        > Randomise! Character
        </button>
      </div>
    )
  }
}

export default StarWars

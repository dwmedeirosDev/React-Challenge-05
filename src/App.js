import React, { Component } from 'react';
import "./style.css"

class App extends Component{
  state = {
    movies: [
        {
        name: "Titanic",
        year: 1998
      },
      {
        name: "Lagoa Azul",
        year: 1980
      },
      {
        name: "De volta para o futuro",
        year: 1985
      },
      {
        name: "Robocop",
        year: 1987
      },
      {
        name: "Top Gun",
        year: 1986
      },
      {
        name: "Curtindo a vida adoidado",
        year: 1986
      }
    ]
  }
    render(){
      return(
        < >
          {this.state.movies.map((item) => (
            <div className="movies">
              <h1>{item.name}</h1>   
              <h1>{item.year}</h1>
            </div>
          ))}
        </>
      )   
  }
}

export default App
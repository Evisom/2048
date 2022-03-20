import React, { Component } from 'react';
import styled from 'styled-components'

import './App.css';
import Block from './Block.js'
import colors from './colors.js'

import game from './game.js'

const Game = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  border: 10px solid ${colors.border};
  width: 500px;
  height: 500px;
  background-color: ${colors.border};
  border-radius: 20px;
`

const BlockWrapper = styled.div`
  border: 10px solid ${colors.border};
  background-color: ${colors.background};
  border-radius: 20px;
`

const move = (e, dir) => {
// 0 - left
// 1 - up
// 2 - right
// 3 - down
  e.setState(game.move(e.state, dir))
}


class App extends Component {

  constructor(props) {
    super(props)
    let map = game.newGame()
    this.state = {
      arr: map,
      status: true
    }

  }  
  componentDidMount() {
    document.addEventListener('keydown' , (event) => {
      switch (event.keyCode) {
        case 37:
          move(this, 0)
          break
        case 38:
          move(this, 1)
          break
        case 39:
          move(this, 2)
          break
        case 40:
          move(this, 3)
          break
        default:
          break
      }
    });
  }
  render() {
    return (
      <div className="App">
        <Game>
          <BlockWrapper>
            <Block num={this.state.arr[0][0]} />
          </BlockWrapper>
          <BlockWrapper>
            <Block num={this.state.arr[0][1]} />
          </BlockWrapper>
          <BlockWrapper>
            <Block num={this.state.arr[0][2]} />
          </BlockWrapper>
          <BlockWrapper>
            <Block num={this.state.arr[0][3]} />
          </BlockWrapper>

          <BlockWrapper>
            <Block num={this.state.arr[1][0]} />
          </BlockWrapper>
          <BlockWrapper>
            <Block num={this.state.arr[1][1]} />
          </BlockWrapper>
          <BlockWrapper>
            <Block num={this.state.arr[1][2]} />
          </BlockWrapper>
          <BlockWrapper>
            <Block num={this.state.arr[1][3]} />
          </BlockWrapper>

          <BlockWrapper>
            <Block num={this.state.arr[2][0]} />
          </BlockWrapper>
          <BlockWrapper>
            <Block num={this.state.arr[2][1]} />
          </BlockWrapper>
          <BlockWrapper>
            <Block num={this.state.arr[2][2]} />
          </BlockWrapper>
          <BlockWrapper>
            <Block num={this.state.arr[2][3]} />
          </BlockWrapper>

          <BlockWrapper>
            <Block num={this.state.arr[3][0]} />
          </BlockWrapper>
          <BlockWrapper>
            <Block num={this.state.arr[3][1]} />
          </BlockWrapper>
          <BlockWrapper>
            <Block num={this.state.arr[3][2]} />
          </BlockWrapper>
          <BlockWrapper>
            <Block num={this.state.arr[3][3]} />
          </BlockWrapper>
        </Game>
        
      </div>
    );
  }

}

export default App;
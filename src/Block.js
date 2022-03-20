import React, { Component } from 'react';
import styled from 'styled-components'

import colors from './colors.js'


class Block extends Component {

    render() {
        let blockColor = '#fff'
        let blockTextColor = '#000'
    
        switch (this.props.num) {
            case 0:
                blockColor = colors.background
                blockTextColor = colors.background
                break
            case 2:
                blockColor = colors.b2.bg
                blockTextColor = colors.b2.c
                break
            case 4:
                blockColor = colors.b4.bg
                blockTextColor = colors.b4.c
                break
            case 8:
                blockColor = colors.b8.bg
                blockTextColor = colors.b8.c
                    break
            default:
                blockColor = colors.b8.bg
                blockTextColor = colors.b8.c
        }
        const BlockContainer = styled.div`
            background: white;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            font-weight: bold;
            color: ${blockTextColor};
            background-color: ${blockColor}
        `
        return (
            <BlockContainer>
                {this.props.num}
            </BlockContainer>
        )
    }
    
}

export default Block;
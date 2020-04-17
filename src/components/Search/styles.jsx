import React from 'react'
import styled, { css } from 'styled-components'
import { Search } from 'styled-icons/fa-solid'
import { Algolia } from 'styled-icons/fa-brands'
import { Clear } from 'styled-icons/material-outlined'


export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
  
  
`


export const ClearIcon = styled(Clear)`
display: ${props => (props.show ? `grid` : `none`)};
  width: 1.2em;
  pointer-events: auto;
  
`

const focus = css`
  background: white;
  color: ${props => props.theme.gray};
  cursor: text;
  width: 5em;
  + ${SearchIcon} {
    color: ${props => props.theme.gray};
    margin: 0.3em;
  }
`

const collapsed = css`
  width: 0;
  cursor: pointer;
  color: ${props => props.theme.lightBlue};
  + ${SearchIcon} {
    color: white;
  }
  ${props => props.focus && focus}
  margin-left: ${props => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${props => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: ${props => props.theme.gray};
  }
`

const expanded = css`
  background: white;
  width: 30em;
  height:2em;
  
  margin-right: -1.6em;
  padding-right: 1.6em;
 
  + ${ClearIcon} {
    margin: 0.3em; 
    color: grey;  
  }
  /*adding placeholder tag to change the color*/ 
  ::placeholder {
    color: grey;
  
  }
`

const test = css`
  //background: white;
  width: 30em;
  height:2em;
  + ${SearchIcon} {
    margin: 0.3em; 
    color: grey;  
  }

`

export const Input = styled.input`
  outline: 1;
  border: 1;
  font-size: 1em;
  background: transparent;
  transition: 0.3s;
  border-radius: 0.2em; /*${props => props.theme.smallBorderRadius};*/
  ${props => (props.collapse ? collapsed : expanded)};
`

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${props => (props.test ? test : test)};

`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 80vh;  /*If this is reduced then height of search result box will reduce and automatically scrollbar will appear for large results*/
  overflow: scroll;
  z-index: 2;
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
  width: 80vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 0.7em 1em 0.4em;
  background: white;
  border-radius: 0.2em; /*${props => props.theme.smallBorderRadius};*/
  * {
    margin-top: 0;
  }
  > div {
    padding-top: 0.6em;
  }
  div + div {
    margin-top: 0.6em;
    border-top: 1px solid #f1f1f1 ; /*${props => props.theme.lighterGray};*/
  }
  mark {
    color: ${props => props.theme.lightBlue};
    background: ${props => props.theme.darkBlue};
  }
  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid darkgray; /*${props => props.theme.darkGray};*/
    margin-bottom: 0.8em;
    color: black;
    h3 {
      color: white;
      background: #9E9E9E; /*${props => props.theme.lightGreen};*/
      padding: 0.1em 0.4em;
      border-radius: 0.2em; /*${props => props.theme.smallBorderRadius};*/
      margin-bottom: 0.3em;
    }
  }
  * + header {
    padding-top: 1em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`

export const PoweredBy = () => (
    <span css="font-size: 0.6em; text-align: end; padding: 0;">
    Powered by{` `}
        <a href="https://algolia.com">
      <Algolia size="1em" /> Algolia
    </a>
  </span>
)


/*
blue: `#2A4FA8`,
    darkBlue: `#002e9d`,
    lightBlue: `#97C9F4`,

    lightGreen: `#0fc5b6`,

    orange: `#ecb517`,

    yellow: `#fffa00`,

    lightestGray: `#fafafa`,
    lighterGray: `#f1f1f1`,
    lightGray: `#dcdcdc`,
    gray: `#2b363f`,
    darkGray: `#1d242a`,

    maxWidth: `40em`,

    smallBorder: `0.1em`,
    mediumBorder: `0.15em`,
    largeBorder: `0.2em`,

    smallBorderRadius: `0.2em`,
    mediumBorderRadius: `0.5em`,
    largeBorderRadius: `1em`,

    shortTrans: `0.3s`,
    mediumTrans: `0.6s`,
    longTrans: `1s`,*/

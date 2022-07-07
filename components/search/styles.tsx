import React from 'react'
import styled, { css } from 'styled-components'

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

export const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 44px;
  height: 44px;
  fill: var(--color-tina-blue);
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: inherit;
    padding: 0;
    width: 1.5rem;
    height: auto;
  }
`

interface InputProps {
  focus?: boolean
  expanded?: boolean
}

export const Input = styled.input<InputProps>`
  outline: none;
  border: none;
  width: 2.75rem;
  background: transparent;
  transition: all 150ms ease-out;
  opacity: 0;
  padding: 0 1.25rem;
  box-sizing: border-box;
  cursor: pointer;
  color: inherit;

  @media (max-width: 684px) {
    width: 100%;
  }

  ${p =>
    p.focus &&
    css`
      width: 12rem;
      opacity: 1;
      cursor: text;
    `};

  ${p =>
    p.expanded &&
    css`
      width: 100%;
      opacity: 1;
      cursor: text;
      padding: 0 2.25rem 0 1rem;
    `};
`

interface SearchContainerProps {
  expanded?: boolean
}

export const SearchContainer = styled.div<SearchContainerProps>`
  position: relative;
  font-size: 1rem;
  padding: 0.625rem 0;
  font-family: var(--font-sans);
  background-color: white;
  box-shadow: 3px 3px 4px var(--blue-100), -4px -4px 6px white;
  color: var(--blue-800);
  display: flex;
  align-items: center;
  transition: filter 250ms ease;
  border-radius: 100px;
  text-transform: uppercase;
  :hover,
  :focus {
    text-decoration: none;
    transition: filter 250ms ease;
  }

  ${p =>
    p.expanded
      ? css`
          border: 1px solid var(--blue-150);
        `
      : css`
          @media (max-width: 684px) {
            /* Begin temp fix */
            display: none;
            /* End temp fix */
            margin: 1rem;
            border: 1px solid var(--blue-150);
          }
        `};
`

export const IndexContainer = styled.div`
  flex: 1 0 auto;
  overflow-y: auto;
  overflow-x: auto;
  padding: 1rem 1.25rem 0 1.5rem;
`

export const HitsResults = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`

interface HitsWrapperProps {
  show: boolean
}

export const HitsWrapper = styled.div<HitsWrapperProps>`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: calc(80vh - 4rem);
  overflow: hidden;
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  right: 0;
  top: calc(100% + 1.5rem);
  width: 80vw;
  max-width: 35rem;
  border-radius: 5px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1),
    0 3rem 6rem 0rem rgba(0, 0, 0, 0.2);
  color: var(--blue-700);
  padding: 0;
  background: white;
  li {
    margin: 0 !important;
    padding: 0.5rem 0;
  }
  li + li {
    border-top: 1px solid var(--blue-150);
  }
  ul {
    list-style: none;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    flex: 0 0 auto;
    position: sticky;
    top: 0;
    color: rgba(0, 0, 0, 0.5);
    h3 {
      margin: 0;
      color: var(--color-tina-blue);
      font-family: var(--font-sans);
      font-weight: bold;
      text-transform: uppercase;
      font-size: 1.125rem;
    }
  }
  h4 {
    margin-bottom: 0.3em;
    cursor: pointer;
    text-decoration: underline rgba(0, 0, 0, 0.3);
    transition: all 185ms ease-out;

    &:hover,
    &:focus {
      opacity: 1;
      color: var(--color-tina-blue);
      text-decoration-color: var(--color-tina-blue);
    }
  }
  a {
    color: var(--color-tina-blue);
  }
`

export const NoResultsLabel = styled.div`
  padding: 1rem 1.25rem 0 1.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--color-tina-blue);
`

export const PoweredBy = styled(({ ...styleProps }) => (
  <span {...styleProps}>
    Powered by{` `}
    <a href="https://algolia.com">Algolia</a>
  </span>
))`
  opacity: 0.5;
  font-size: 0.8rem;
  padding: 0;
  display: block;
  padding: 0.5rem 1.25rem 0.5rem 1.5rem;
`

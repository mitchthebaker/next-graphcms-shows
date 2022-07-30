import styled, { css } from 'styled-components'

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: none;
  margin-top: 1rem;
  width: 90%;
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  margin: 1rem;
`

export const TotalShows = css`
  color: black;
`

export const ListContent = css`
  display: flex;
  flex-direction: row;
  flex-wrap: none;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  width: 100%;
  border-top: 1px solid black;
  color: black;
`

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: none;
  justify-content: center;
  align-items: center;
`

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: none;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  span {
    padding: 0.5rem;
  }
`
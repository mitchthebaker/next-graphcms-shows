import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: none;
  background: transparent;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  padding: 0.5rem;
  margin: 1rem;

  :hover {
    color: #000;
    background-color: var(--gallery-grey);
  }
`

export const StyledUl = styled.ul`
  position: absolute;
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style-type: none;
  background: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border: 1px solid white;
  border-radius: 5px;
  color: black;
  padding: 0;
`

export const StyledOption = styled.div`
  cursor: pointer;
  padding: 0.5rem 1rem 0.5rem 1rem;

  :hover,
  :focus,
  :active {
    color: #000;
    background-color: var(--gallery-grey);
  }
`
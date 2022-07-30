import styled from 'styled-components'
import { BsFillGrid3X3GapFill, BsCardChecklist } from 'react-icons/bs'

const Toggle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: none;
  justify-content: center;
  align-items: center;
`

const StyledButton = styled.div`
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

export function ToggleView({ grid, setGrid }) {
  return (
    <>
      <p> Toggle view </p>
      <Toggle>
        <StyledButton onClick={() => { if(!grid) setGrid(!grid) }}> 
          <span> Grid </span> 
          <BsFillGrid3X3GapFill /> 
        </StyledButton>

        <StyledButton onClick={() => { if(grid) setGrid(!grid) }}> 
          <span> List </span> 
          <BsCardChecklist /> 
        </StyledButton>
      </Toggle>
    </>
  )
}
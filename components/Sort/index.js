import { useState, useContext } from 'react'
import styled, { css } from 'styled-components'
import { FaAngleDown, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'
//import { applySort } from '@l/utils'
import { ShowsContext } from '../../pages/shows'
import { sortByProperty } from '@l/utils'

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: none;
`

const StyledUl = styled.ul`
 list-style-type: none;
 background: white;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
 color: black;
 padding: 1rem;
`

function Button({ type, icon, property }) {
  const [data, setData] = useContext(ShowsContext)

  const applySort = (property) => {
    /**
     * Arrays in JS are referenced types, so even though sorting takes place it doesn't 
     * change the reference to the original array. 
     * 
     * Solution here is to use spread operator inside new Array.
     */
    setData([
      ...data.sort(sortByProperty(property))
    ])
  }

  return (
    <StyledButton onClick={() => applySort(property)}> 
      <span> { type } </span>
      { icon }
    </StyledButton>
  )
}

export function Sort({ title, options }) {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <StyledButton onClick={() => setToggle(!toggle)}> 
        <span> { title } </span>
        <FaAngleDown />
      </StyledButton>

      {toggle && (
        <StyledUl>
          <li> 
            <Button 
              type={"Ascending"} 
              icon={<FaSortAmountUp />} 
              property={"title"}
            />
          </li>
          <li> 
            <Button 
              type={"Descending"} 
              icon={<FaSortAmountDown />} 
              property={"-title"}
            /> 
          </li> 
          
        </StyledUl>
      )}
    </>
  )
}
import React, { useState, useContext } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { ShowsContext } from '../../pages/shows'
import { sortByProperty } from '@l/utils'
import { Wrapper, StyledButton, StyledUl, StyledOption } from './Sort.css'

/**
 * Why perform sorting on the client side? 
 * 
 * Sorting is a tricky one, and the solution for this issue depends entirely on the size of the data set givem, 
 * and what constraints may need to be applied to this data set. 
 * 
 * If we were dealing with 1000's of objects to sort through, then sorting would be more efficient on the server side. 
 * We could also implement pagination to break down the problem of sorting 1000's of objects into smaller subsets to sort. 
 * 
 * I thought about approaching issue #3 with GraphQL, using some sort of dynamic query where I could pass in the property
 * to be sorted on, plus ascending/descending order. However, sorting with GraphQL is not realistic in this case because these 
 * queries are executed at build time, therefore you cannot change GraphQL queries from the client. The only other option 
 * would be to write a new query for both ascending/descending, then pass in the property you want to sort on, but I disagree
 * with this approach due to scaling issues.  
 * 
 * Ultimately I decided that for an array of objects, containing show metadata, it is much faster to sort the data on the client side due
 * to the array's small size. If this were a real application with larger data set, I would definitely think about adding pagination to 
 * reduce the overall size of the array of objects. 
 */
function SortOption({ type, icon, property }) {
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
    <StyledOption onClick={() => applySort(property)}> 
      <span> {icon} </span>
      <span> {type} </span>
    </StyledOption>
  )
}

/**
 * @param {string} title The title of the property we'd like to sort shows on 
 * @param {array} options An array of objects which contains meta data for sorting (by title/scheduledStartTime, ascending/descending, icon, etc.)
 * @returns {ReactFragment}
*/
export function Sort({ title, options }) {
  const [toggle, setToggle] = useState(false)

  return (
    <Wrapper>
      <StyledButton onClick={() => setToggle(!toggle)}> 
        <span> {title} </span>
        <FaAngleDown />
      </StyledButton>

      {toggle && (
        <StyledUl>
          {options.map(option => (
            <li key={option.id}>
              <SortOption 
                property={option.property}
                type={option.type}
                icon={option.icon}
              />
            </li>
          ))}
        </StyledUl>
      )}
    </Wrapper>
  )
}
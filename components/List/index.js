import Link from 'next/link'
import styled, { css } from 'styled-components'
import { formatDate } from '@l/utils'

const StyledList = styled.div`
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
  margin: 5rem;
`

const TotalShows = css`
  color: black;
`

const ListContent = css`
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

const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: none;
  justify-content: center;
  align-items: center;
`

const ContentDescription = styled.div`
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

function Content({ href, show }) {
  return href ? (
    <Link href={href}>
      <a css={ListContent}>
        <ContentHeader>
          <h2> { show.title } </h2>
          <h4> {show.artists.map(({ fullName }) => fullName).join(', ')} </h4>
        </ContentHeader>
        <ContentDescription>
          <span> { formatDate(show.scheduledStartTime) } </span>
          <span> $ { show.ticketPrice } </span>
        </ContentDescription>
      </a>
    </Link>
  ) : (
    <div>
      <ContentHeader>
        <h2> { show.title } </h2>
        <h4> {show.artists.map(({ fullName }) => fullName).join(', ')} </h4>
      </ContentHeader>
      <ContentDescription>
        <span> { formatDate(show.scheduledStartTime) } </span>
        <span> $ { show.ticketPrice } </span>
      </ContentDescription>
    </div>
  )
}

export function List({ shows }) {
  return (
    <StyledList>
      <div css={TotalShows}>
        <p> <b> {shows.length} </b> shows in all locations </p>
      </div>
      {shows.map(show => {
        if(show.title) {
          return (
            <Content href={`/show/${show.slug}`} show={show} key={show.id} />
          )
        }
      })}
    </StyledList>
  )
}

/**
 * <thead>
        <tr>
          <th> Name </th>
          <th> Artists </th>
          <th> Scheduled Start Time </th>
          <th> Ticket Price </th>
        </tr>
      </thead>
      <tbody>
        {shows.map(show => {
          if(show.title) {
            return (
              <tr key={show.id}>
                <td> { show.title } </td>
                <td> {show.artists.map(({ fullName }) => fullName).join(', ')} </td>
                <td> { formatDate(show.scheduledStartTime) } </td>
                <td> $ { show.ticketPrice } </td>
              </tr>
            )
          }
        })}
      </tbody>
 */
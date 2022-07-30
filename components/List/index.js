import Link from 'next/link'
import { formatDate } from '@l/utils'
import { StyledList, TotalShows, ListContent, ContentHeader, ContentDescription } from './List.css'

function Content({ href, show }) {
  return href && (
    <Link href={href}>
      <a css={ListContent}>
        <ContentHeader>
          <h2> {show.title} </h2>
          <h4> {show.artists.map(({ fullName }) => fullName).join(', ')} </h4>
        </ContentHeader>
        <ContentDescription>
          <span> {formatDate(show.scheduledStartTime)} </span>
          <span> $ {show.ticketPrice} </span>
        </ContentDescription>
      </a>
    </Link>
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
import Layout from '@c/Layout'
import FlexyRow from '@c/FlexyRow'
import Link from 'next/link'
import { Title } from '@c/Title'
import { getShowBySlug } from '@l/graphcms'
import { formatUSD, formatDate } from '@l/utils'
import { Markdown, ArtistName, Portrait } from '../artist/[slug]'

export default function Shows({ show }) {
  return (
    <Layout title={`${show.title} / next-graphcms-shows`} maxWidth="900px" padding="0 2em">
      <Title>{show.title}</Title>

      <FlexyRow>
        <span>Price: {formatUSD(show.ticketPrice)}</span>
        <span>{formatDate(show.scheduledStartTime)}</span>
      </FlexyRow>

      <Markdown source={show.description} />

      {show.artists.map((artist) => {
        if(artist.slug) {
          return (
            <Link href={`/artist/${artist.slug}`} passHref key={artist.id}>
              <a>
                <Portrait images={artist.images} />
                <ArtistName> {artist.fullName} </ArtistName>
              </a>
            </Link>
          )
        }
      })}
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params
  const show = (await getShowBySlug(slug))

  if(show) {
    return {
      props: { show },
    }
  }
  else {
    // Throw a 404 if page does not exist 
    return {
      notFound: true,
    }
  }
}

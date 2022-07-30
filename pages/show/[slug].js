import Layout from '@c/Layout'
import { Link } from '@c/Link'
import FlexyRow from '@c/FlexyRow'
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

      {show.artists.map(artist => (
        <div key={artist.id}>
          <ArtistName>{artist.fullName}</ArtistName>

          <Portrait images={artist.images} />

          <FlexyRow justify="flex-start">
            <Link url={artist.webUrl} title={"Website"} />
            <Link url={artist.facebookUrl} title={"Facebook"} />
            <Link url={artist.instagramUrl} title={"Instagram"} />
            <Link url={artist.youTubeUrl} title={"YouTube"} />
          </FlexyRow>

          <Markdown source={artist.bio} />
        </div>
      ))}
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

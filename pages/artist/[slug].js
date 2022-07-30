import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import Layout from '@c/Layout'
import { Link } from '@c/Link'
import FlexyRow from '@c/FlexyRow'
import { getArtistBySlug } from '@l/graphcms'

export const Markdown = styled(ReactMarkdown)`
  img {
    width: 100%;
    border-radius: 20px;
    border: 4px solid currentColor;
  }
`

export const ArtistName = styled.h2`
  text-align: center;
`

export const ArtistPhoto = styled.div`
  background-image: url(${(p) => p.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 4px solid currentColor;
  margin: 0 auto;
`

export const Portrait = ({ images = [] }) => {
  if (images.length > 0) {
    const img = images[0]
    return (
      <ArtistPhoto imageUrl={img.url} />
    )
  }
  return null
}

export default function Artist({ artist }) {
  return (
    <Layout title={`${artist.fullName} / next-graphcms-shows`} maxWidth="900px" padding="0 2em">
      <ArtistName> {artist.fullName} </ArtistName>

      <Portrait images={artist.images} />

      <FlexyRow justify="flex-start">
        <Link url={artist.webUrl} title={"Website"} />
        <Link url={artist.facebookUrl} title={"Facebook"} />
        <Link url={artist.instagramUrl} title={"Instagram"} />
        <Link url={artist.youTubeUrl} title={"YouTube"} />
      </FlexyRow>

      <Markdown source={artist.bio} />
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params
  const artist = (await getArtistBySlug(slug))

  if(artist) {
    return {
      props: { artist },
    }
  }
  else {
    return {
      notFound: true,
    }
  }
}
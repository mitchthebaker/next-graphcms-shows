import { useEffect, useState } from "react";
import Layout from '@c/Layout'
import { Grid, Card } from '@c/Grid'
import { Title } from '@c/Title'
import { getAllShows } from '@l/graphcms'
import { sortByProperty } from '@l/utils'

export default function Shows({ data }) {
  const [shows, setShows] = useState([]);

  useEffect(() => setShows(data), [])

  const sortShows = (property) => {
    /**
     * Arrays in JS are referenced types, so even though sorting takes place it doesn't 
     * change the reference to the original array. 
     * 
     * Solution here is to use spread operator inside new Array.
     */
    setShows([...shows.sort(sortByProperty(property))])
  }

  return (
    <Layout title="next-graphcms-shows / Shows">
      <Title>Shows</Title>

      <button onClick={() => sortShows("title")}> Sort by title ascending </button>
      <button onClick={() => sortShows("-title")}> Sort by title descending </button>

      <button onClick={() => sortShows("scheduledStartTime")}> Sort by scheduledStartTime ascending </button>
      <button onClick={() => sortShows("-scheduledStartTime")}> Sort by scheduledStartTime descending </button>

      <Grid>
        {shows.map(show => (
          <Card href={`/show/${show.slug}`} header={show.title} key={show.id}>
            <p>{show.artists.map(({ fullName }) => fullName).join(', ')}</p>
          </Card>
        ))}
      </Grid>
    </Layout>
  )
}

export async function getServerSideProps() {
  const data = (await getAllShows()) || []
  return {
    props: { data },
  }
}

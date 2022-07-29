import { useEffect, useState, createContext } from "react";
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'
import Layout from '@c/Layout'
import { Grid, Card } from '@c/Grid'
import { Title } from '@c/Title'
import { Sort } from '@c/Sort'
import { getAllShows } from '@l/graphcms'
import { sortByProperty } from '@l/utils'

export const ShowsContext = createContext([{}, () => {}])

export default function Shows({ data }) {
  const [shows, setShows] = useState([]);

  useEffect(() => setShows(data), [])

  return (
    <Layout title="next-graphcms-shows / Shows">
      <Title>Shows</Title>

      {
        /**
         * To avoid prop drilling, pass [shows, setShows] into our Sort components with a context provider
         */
      }
      <ShowsContext.Provider value={[shows, setShows]}>
        <Sort 
          title={"Title"} 
          options={[
            {
              id: 0,
              property: "title",
              type: "Ascending",
              icon: <FaSortAmountUp />
            },
            {
              id: 1,
              property: "-title",
              type: "Descending",
              icon: <FaSortAmountDown />
            }
          ]} 
        />
        <Sort 
          title={"Scheduled Start Time"} 
          options={[
            {
              id: 0,
              property: "scheduledStartTime",
              type: "Ascending",
              icon: <FaSortAmountUp />
            },
            {
              id: 1,
              property: "-scheduledStartTime",
              type: "Descending",
              icon: <FaSortAmountDown />
            }
          ]} 
        />
      </ShowsContext.Provider>

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

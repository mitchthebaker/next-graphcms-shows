import { useEffect, useState, createContext } from 'react'
import styled, { css } from 'styled-components'
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'
import Layout from '@c/Layout'
import { Grid, Card } from '@c/Grid'
import { List } from '@c/List'
import { Title } from '@c/Title'
import { Sort } from '@c/Sort'
import { ToggleView } from '@c/ToggleView'
import { getAllShows } from '@l/graphcms'

const StyledWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem 0rem 4rem 0rem;
`

export const ShowsContext = createContext([{}, () => {}])

export default function Shows({ data }) {
  const [shows, setShows] = useState([]);
  const [grid, setGrid] = useState(true)

  useEffect(() => setShows(data), [])

  return (
    <Layout title="next-graphcms-shows / Shows">
      <Title>Shows</Title>
      <ToggleView 
        grid={grid}
        setGrid={setGrid}
      />
      {
        /**
         * To avoid prop drilling, pass [shows, setShows] into our Sort components with a context provider
         * 
         * Issue #3: reasoning for sorting in client-side explained in <Sort /> component 
         */
      }
      <ShowsContext.Provider value={[shows, setShows]}>
        <div css={StyledWrapper}>
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
        </div>
      </ShowsContext.Provider>
      
      {grid ? (
        <Grid>
          {shows.map(show => (
            <Card href={`/show/${show.slug}`} header={show.title} key={show.id}>
              <p>{show.artists.map(({ fullName }) => fullName).join(', ')}</p>
            </Card>
          ))}
        </Grid>
      ) : (
        <List shows={shows} />
      )}
    </Layout>
  )
}

export async function getServerSideProps() {
  const data = (await getAllShows()) || []
  return {
    props: { data },
  }
}

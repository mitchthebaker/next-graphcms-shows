import Layout from '@c/Layout'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  font-size: 50px;
`

export default function Error404() {
  return (
    <Layout>
      <StyledH1> 404 </StyledH1>
      <h3> Nothing to see here! </h3>
    </Layout>
  )
}
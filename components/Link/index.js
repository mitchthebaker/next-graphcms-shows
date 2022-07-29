import { containsProtocol, prependHttps } from '@l/utils'

export const Link = ({url, title}) => 
  url && (
    <a href={(containsProtocol(url)) ? url : prependHttps(url)} target="_blank"> 
      {title} 
    </a>
  )


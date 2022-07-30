import { containsProtocol, prependHttps } from '@l/utils'

export function Link({url, title}) {
  return (
    url && (
      <a href={(containsProtocol(url)) ? url : prependHttps(url)} target="_blank"> 
        {title} 
      </a>
    )
  )
}


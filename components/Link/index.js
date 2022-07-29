import { containsProtocol, prependHttp } from '@l/utils'

export const Link = ({url, title}) => {
  return <a href={(containsProtocol(url)) ? url : prependHttp(url)} target="_blank"> {title} </a>
};


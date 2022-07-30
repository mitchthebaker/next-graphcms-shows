I've setup the project and flipped through the project structure. 

My current understanding is /components contains components, obviously, 
/lib contains query info and async fetch API + various util functions.

/pages is where dynamic routes for individual schemas/shows lives, plus static pages schemas.js and shows.js where these 
individual routes can be directed to respectively. 

Going down the list of issues, I really like the Create show list view feature. Keep this one on the backburner for now though as I'd like to familiarize myself with the innerworkings of this app first.

Issue #4 and #5 are more warmup bug fixes to get started with.. 

Priority 1: 

For artist website URLs if a url does not have a protocol this can be checked and then appended to the string so it operates correctly 

- Issue #4: Artist website URLs without http(s) are broken ✅


For conditionally showing artist URLs.. well, if the field is not null, then load it. 

(Update) After completing the broken artist website URL issue, I'm thinking I can refactor <a> tags to be its own component. I don't want to repeat the logic with containsProtocol()/prependHttp(), and if I'm checking if a URL is null this can be made universal in a single component. 

- Issue #5: Conditionally show artist URLs ✅


Sorting is a tricky one, and the solution for this issue depends. For the data set I am currently given, it is much faster to sort the data on the client side. However, if we were dealing with 1000's of rows to sort, then sorting would be more efficient on the server side. 

Sorting with GraphQL is not realistic here because these queries are executed at build time, therefore you cannot change GraphQL queries in the client. 

- Issue #3: Add ability to sort shows 


- Issue #1: Create show list (not grid) view 
- Issue #2: Page /404 for `shows`

Priority 2: 

- Issue #8: Shows uniform display on mobile 
- Issue #9: Shows page is stupid-wide, not centered 
- Issue #6: Add `spotifyUrl` to list of Artist links 
- Issue #7: Add Artist Route 

I've setup the project and flipped through the project structure. 

My current understanding is /components contains components, obviously, 
/lib contains query info and async fetch API + various util functions.

/pages is where dynamic routes for individual schemas/shows lives, plus static pages schemas.js and shows.js where these 
individual routes can be directed to respectively. 

Going down the list of issues, I really like the Create show list view feature. Keep this one on the backburner for now though as I'd like to familiarize myself with the innerworkings of this app first.

Priority 1: 

These two are more warmups issues to get started with.. 

For artist website URLs if a url does not have a protocol this can be checked and then appended to the string so it operates correctly 
- Artist website URLs without http(s) are broken 

For conditionally showing artist URLs.. well, if the field is not null, then load it. 
- Conditionally show artist URLs

Priority 2: 

- Create show list view 
- Page /404 for `shows`
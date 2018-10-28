## youtube-search-lib
You can easily search for videos on Youtube using their v3 API.

## install
npm i youtube-search-lib

## Options
You can pass four optional parameters as the second parameter. Such as, part, query, key, maxResults.

## Rate limiting
Google enforces a rate limit on the Youtube Data API. You will probably need to register your application for a key and supply this key in the options object..

## Usages
```sh
var Search = require("youtube-search-lib");

Search({ key: YOUR_API_KEY, term: "JavaScript", maxResults: 8 }, function(resp){
  console.log(resp)
});
```

var axios = require("axios");

var URL = `https://www.googleapis.com/youtube/v3/search`;

module.exports = function(opts, cb) {
  if (!opts.key) throw new Error("Youtube search expected API key!");

  var params = {
    type: "video",
    part: opts.part || "snippet",
    q: opts.term,
    key: opts.key,
    maxResults: opts.maxResults || 20
  };

  axios(URL, { params: params })
    .then(function(res) {
      if (cb) {
        cb(res.data.items);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
};

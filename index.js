const axios = require("axios");

const URL = `https://www.googleapis.com/youtube/v3/search`;

module.exports = function(opts) {
  if (!opts.key) throw new Error("Youtube search expected API key!");

  const params = {
    type: "video",
    part: opts.part || "snippet",
    q: opts.term,
    key: opts.key,
    maxResults: opts.maxResults || 500
  };

  return new Promise((resolve, reject) => {
    axios
      .get(URL, { params })
      .then(res => resolve(res.data.items))
      .catch(error => reject(error));
  });
};

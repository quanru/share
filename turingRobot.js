const request = require('request');

function getTuringResponse(info) {
  if(typeof info !== 'string') {
    info = info.toString();
  }
  let options = {
    method:'GET',
    url: 'http://www.tuling123.com/openapi/api?key=13a74dbd0f6b45d69ac49334e7027742&info='+info
  };
  return new Promise((resolve, reject) => {
    request(options,  (err, res, body) => {
      if (res) {
        resolve(body);
      } else {
        reject(err);
      }
    });
  })
}

module.exports = getTuringResponse;
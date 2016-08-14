  const getTuringResponse = require('./turingRobot');
  const autoReply = require('./autoReply');
  const wechat = require('wechat');
  const jsSHA = require('jssha');
  module.exports = function(app) {
    
    app.get('/wechat', (req, res) => {
      var token = "quanru";
      var signature = req.query.signature;
      var timestamp = req.query.timestamp;
      var echostr = req.query.echostr;
      var nonce = req.query.nonce;

      var oriArray = [nonce, timestamp, token];
      oriArray.sort();
      var original = oriArray.join('');

      var shaObj = new jsSHA(original, 'TEXT');
      var scyptoString = shaObj.getHash('SHA-1', 'HEX');
      if (signature == scyptoString) {
        //验证成功
        res.send(echostr);
      } else {
        //验证失败
        res.send(false);
      }
    });

    app.post('/wechat', (req, res) => {
      res.writeHead(200, {'Content-Type': 'application/xml'});

      var content = req.body.xml.content;

      getTuringResponse(encodeURI(content)).then((data) => {
        var response = JSON.parse(data);
        var resMsg = autoReply(req.body.xml, response.text);
	console.log(resMsg);
        res.end(resMsg);
      });
  });
}

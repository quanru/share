function autoReply(requestData, info) {
    if(requestData.msgtype == 'text') {
      var resMsg = '<xml>' +
        '<ToUserName><![CDATA[' + requestData.fromusername + ']]></ToUserName>' +
        '<FromUserName><![CDATA[' + requestData.tousername + ']]></FromUserName>' +
        '<CreateTime>' + parseInt(new Date().valueOf() / 1000) + '</CreateTime>' +
        '<MsgType><![CDATA[text]]></MsgType>' +
        '<Content><![CDATA['+info+']]></Content>' +
        '</xml>';
  }
  return resMsg;
}

module.exports = autoReply;
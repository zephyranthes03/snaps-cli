wallet.registerRpcMessageHandler(async (originString, requestObject) => {
  console.log("requestObject",requestObject);
  switch (requestObject.method) {
    case 'hello':
      return wallet.send({
        method: 'alert',
        params: [`Hello!, ${requestObject.method} =  ${originString}!`]
      })
      break;
    case 'bye':
      return wallet.send({
        method: 'alert',
        params: [`Bye!!, ${originString}!`]
      })
      break;
    default:
      throw new Error('Method not found.')
  }
})

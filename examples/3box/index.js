const IdentityWallet = require('identity-wallet')

let threeIdProvider

wallet.registerRpcMessageHandler(async (_origin, req) => {

  if (!threeIdProvider) {

    let seed = await wallet.getAppKey()
    if (!seed.startsWith('0x')) seed = '0x' + seed // it errors without this

    const idWallet = new IdentityWallet({ seed })
    threeIdProvider = idWallet.get3idProvider()
  }

  return threeIdProvider.send(req)
})

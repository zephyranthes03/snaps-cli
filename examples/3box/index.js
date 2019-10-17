const IdentityWallet = require('identity-wallet');
wallet.onUnlock(async () => {
  const idWallet = new IdentityWallet({ seed: await wallet.getAppKey() });
  const threeIdProvider = idWallet.get3idProvider();
  wallet.registerRpcHandler((origin, req) => { return threeIdProvider.send(req) });
})

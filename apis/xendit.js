const Xendit = require('xendit-node');

const xenditAPI = new Xendit({
  secretKey: process.env.XENDIT_API_SECRET_KEY,
  xenditURL: process.env.XENDIT_URL,
});

const paymentXendit = async ( amount, email ) => {
  const { payout } = Xendit
  const payment = new payout
  
  try {
    const createPayment = await payment.createPayout({
      externalID: Date.now().toString(),
      amount: amount,
      email: email,
    });
    console.log('created payout:', createPayment);
    
    const { id } = payout;
    const retrievedPayout = await p.getPayout({ id });
    console.log('retrieved payout:', retrievedPayout);

    const voidedPayout = await p.voidPayout({ id });
    console.log('payout voided:', voidedPayout.id);

    process.exit(0);
  } catch (error) {
    console.error(e);
    process.exit(1);
  }
}

module.exports = { xenditAPI, paymentXendit }
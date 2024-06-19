import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, email, phone } = req.body;

    const razorpayKey = process.env.RAZORPAY_KEY_ID;
    const razorpaySecret = process.env.RAZORPAY_SECRET;

    const orderOptions = {
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      payment_capture: '1',
    };

    try {
      const orderResponse = await axios.post(
        'https://api.razorpay.com/v1/orders',
        orderOptions,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          auth: {
            username: razorpayKey,
            password: razorpaySecret,
          },
        }
      );

      res.status(200).json({
        id: orderResponse.data.id,
        currency: orderResponse.data.currency,
        amount: orderResponse.data.amount,
      });
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

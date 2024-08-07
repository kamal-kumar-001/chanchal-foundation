const handleDonation = async (formData) => {
    const url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    
    const amount = parseFloat(formData.amount);
    const txnid = `TXN${Math.random().toString(36).substring(2, 15)}`;
    const data = {
      txnid,
      amount: amount.toFixed(2),
      productinfo: "Donation",
      firstname: formData.name,
      email: formData.email,
      phone: formData.phone,
    };
  
    try {
      const hashResponse = await fetch('/api/pay/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const { hash } = await hashResponse.json();
  
      return {
        key: process.env.NEXT_PUBLIC_PAYU_KEY || 'f29e0a',
        txnid,
        amount: data.amount,
        productinfo: data.productinfo,
        firstname: data.firstname,
        email: data.email,
        phone: data.phone,
        surl: `${url}/api/pay/response`,
        furl: `${url}/api/pay/response`,
        hash,
        service_provider: "payu_paisa",
      };
    } catch (error) {
      console.error("Payment Error:", error);
      return null;
    }
  };
  
  export default handleDonation;
  
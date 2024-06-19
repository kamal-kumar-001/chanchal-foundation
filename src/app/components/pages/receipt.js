import { useEffect, useState } from 'react';
import Link from 'next/link';
const ReceiptPage = ({ member }) => {
  const [email, setEmail] = useState(member ? member.email : '');
  const [phone, setPhone] = useState('');
  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchReceipts = async () => {
    setLoading(true);
    try {
      const query = email ? `email=${email}` : `phone=${phone}`;
      const response = await fetch(`/api/donation?${query}`);
      const result = await response.json();
      if (result.success) {
        setReceipts(result.donations);
      } else {
        console.error('Failed to fetch receipts:', result.message);
      }
    } catch (error) {
      console.error('Error fetching receipts:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (member) {
      fetchReceipts();
    }
  }, [member]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchReceipts();
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h1 className="text-2xl font-bold text-center">Get Your Donation Receipts</h1>
          {!member && (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="rounded-md  -space-y-px">
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    // required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div className="py-5 text-center text-gray-600">
                    or
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="phone"
                    // required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Search
                </button>
              </div>
            </form>
          )}

          {loading && <p>Loading...</p>}

          <div className="mt-8 space-y-4">
            {receipts.length > 0 ? (
              receipts.map((receipt) => (
                <Link href={`/receipt/${receipt._id}`} key={receipt._id}>
                <div  className="bg-white shadow-md rounded-lg p-6 my-6">
                  <h2 className="text-xl font-bold">Receipt #{receipt._id}</h2>
                  <p><strong>Name:</strong> {receipt.name}</p>
                  <p><strong>Email:</strong> {receipt.email}</p>
                  <p><strong>Phone:</strong> {receipt.phone}</p>
                  <p><strong>Amount:</strong> {receipt.amount}</p>
                  <p><strong>Date:</strong> {new Date(receipt.createdAt).toLocaleDateString()}</p>
                  <p><strong>Payment Status:</strong> {receipt.paymentStatus ? 'Paid' : 'Unpaid'}</p>
                </div>
                </Link>
              ))
            ) : (
              <p>No receipts found</p>
            )}
          </div>
        </div>
      </div>
  );
};

export default ReceiptPage;

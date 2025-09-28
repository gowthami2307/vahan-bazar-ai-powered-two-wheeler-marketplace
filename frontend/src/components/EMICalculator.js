import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

function EMICalculator() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [months, setMonths] = useState('');
  const [emi, setEmi] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(amount);
    const R = parseFloat(rate) / 1200;
    const N = parseInt(months);
    
    if (P && R && N) {
      const emiVal = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      const total = emiVal * N;
      const interest = total - P;
      
      setEmi(emiVal.toFixed(2));
      setTotalAmount(total.toFixed(2));
      setTotalInterest(interest.toFixed(2));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <Calculator className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">EMI Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Amount (₹)
          </label>
          <input
            type="number"
            placeholder="e.g. 100000"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Interest Rate (% per annum)
          </label>
          <input
            type="number"
            step="0.1"
            placeholder="e.g. 12"
            value={rate}
            onChange={e => setRate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Tenure (months)
          </label>
          <input
            type="number"
            placeholder="e.g. 24"
            value={months}
            onChange={e => setMonths(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <button
        onClick={calculateEMI}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Calculate EMI
      </button>

      {emi && (
        <div className="mt-8 space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-green-800 mb-2">EMI Calculation Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">₹{emi}</div>
                <div className="text-sm text-green-700">Monthly EMI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">₹{totalAmount}</div>
                <div className="text-sm text-green-700">Total Amount</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">₹{totalInterest}</div>
                <div className="text-sm text-green-700">Total Interest</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EMICalculator;

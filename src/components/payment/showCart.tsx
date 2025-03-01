import React from 'react'

const ShowCart = () => {
  return (
    <div className="space-y-7">
                <div>
                  <label className="block text-sm font-medium mb-1">Card Number *</label>
                  <input
                    type="text"
                    placeholder="****  ****  ****  ****"
                    className="w-full px-3 py-2 border rounded text-sm"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Expiry Date *</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border rounded text-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">CVV2 *</label>
                    <input
                      type="text"
                      placeholder="CVV2"
                      className="w-full px-3 py-2 border rounded text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Name on Card *</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-3 py-2 border rounded text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-3 py-2 border rounded text-sm"
                  />
                </div>

                <button className="w-full bg-indigo-500 text-white py-2 rounded mt-64 hover:bg-indigo-600">
                  Pay $253.00
                </button>
                <p className="text-xs text-gray-500 text-center italic mt-2">
                  Bioaqua
                </p>
              </div>
  )
}

export default ShowCart
import Head from 'next/head'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Head>
        <title>Dashboard</title>
      </Head>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Customers */}
          <div className="bg-white p-4 shadow rounded-lg">
            <div className="text-xl font-bold text-gray-900">Customers</div>
            <div className="text-2xl text-green-500 mt-2">3,812</div>
            <div className="text-sm text-gray-500 mt-1">15.73% increase</div>
          </div>
          {/* Orders */}
          <div className="bg-white p-4 shadow rounded-lg">
            <div className="text-xl font-bold text-gray-900">Orders</div>
            <div className="text-2xl text-green-500 mt-2">1,658</div>
            <div className="text-sm text-gray-500 mt-1">21.15% increase</div>
          </div>
          {/* Revenue */}
          <div className="bg-white p-4 shadow rounded-lg">
            <div className="text-xl font-bold text-gray-900">Revenue</div>
            <div className="text-2xl text-green-500 mt-2">$2,000</div>
            <div className="text-sm text-gray-500 mt-1">12.76% increase</div>
          </div>
          {/* Growth */}
          <div className="bg-white p-4 shadow rounded-lg">
            <div className="text-xl font-bold text-gray-900">Growth</div>
            <div className="text-2xl text-green-500 mt-2">32.56%</div>
            <div className="text-sm text-gray-500 mt-1">increase</div>
          </div>
        </div>
        <div className="bg-white mt-6 p-4 shadow rounded-lg">
          <h2 className="text-xl font-bold text-gray-900">Total Customers</h2>
          <div className="h-64 mt-4 bg-gray-200 rounded-lg"></div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-bold text-gray-900">Projections vs Actuals</h2>
            <div className="h-64 mt-4 bg-gray-200 rounded-lg"></div>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-bold text-gray-900">Customer Segmentations</h2>
            <div className="h-64 mt-4 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
        <div className="bg-white mt-6 p-4 shadow rounded-lg">
          <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
          <div className="mt-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invoice
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">#1023</td>
                  <td className="px-6 py-4 whitespace-nowrap">Jan 6, 2022</td>
                  <td className="px-6 py-4 whitespace-nowrap">$25.50</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-500">Paid</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">#1024</td>
                  <td className="px-6 py-4 whitespace-nowrap">Jan 8, 2022</td>
                  <td className="px-6 py-4 whitespace-nowrap">$15.15</td>
                  <td className="px-6 py-4 whitespace-nowrap text-red-500">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

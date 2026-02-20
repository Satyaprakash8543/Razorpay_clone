"use client";
import React from "react";

export default function AdminDashboard() {
  return (
    <div className="flex flex-wrap h-screen bg-gray-500">

      {/* Left Sidebar */}
      <aside className="w-64 bg-gray-900 text-white hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>

           {/* flex-1 fill availabal space */}
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            Dashboard
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            Users
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            Orders
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            Products
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
            Settings
          </a>
        </nav>

        <div className="p-4 border-t text-right border-gray-700 text-sm">
          © 2026 Admin
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Navbar */}
        <header className="bg-gray-600 shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>

          <div className="flex items-center space-x-4">
            <button className="bg-gray-200 px-3 py-1 rounded">
              🔔
            </button>
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-gray-500">Total Users</h2>
              <p className="text-3xl font-bold mt-2 text-gray-400">12,540</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-gray-500">Revenue</h2>
              <p className="text-3xl font-bold mt-2 text-gray-400">$48,200</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-gray-500">Orders</h2>
              <p className="text-3xl font-bold mt-2 text-gray-400">1,320</p>
            </div>

          </div>

          {/* Table */}
          <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b font-semibold text-gray-500">
              Recent Users
            </div>

            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody className="bg-gray-600">
                <tr className="border-t">
                  <td className="p-3">John Doe</td>
                  <td className="p-3">john@example.com</td>
                  <td className="p-3">Admin</td>
                  <td className="p-3 text-green-600">Active</td>
                </tr>

                <tr className="border-t">
                  <td className="p-3">Jane Smith</td>
                  <td className="p-3">jane@example.com</td>
                  <td className="p-3">User</td>
                  <td className="p-3 text-yellow-600">Pending</td>
                </tr>

                <tr className="border-t">
                  <td className="p-3">Mike Ross</td>
                  <td className="p-3">mike@example.com</td>
                  <td className="p-3">Editor</td>
                  <td className="p-3 text-red-600">Blocked</td>
                </tr>
              </tbody>
            </table>
          </div>

        </main>
      </div>
      
    </div>
  );
}
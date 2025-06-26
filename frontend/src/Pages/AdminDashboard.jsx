import React from 'react';
export default function AdminDashboard() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-serif font-bold text-gold mb-6">Admin Dashboard</h1>
      <p className="text-lg text-gray-700 mb-4">Manage your reservations and jets here.</p>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Reservations</h2>
        {/* Reservations table or list will go here */}
      </div>
    </div>
  );
}
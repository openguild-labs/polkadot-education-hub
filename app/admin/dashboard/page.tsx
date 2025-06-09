'use client';

import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

function AdminDashboard() {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    // The AuthProvider will handle the redirect
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
              <h2 className="text-lg font-medium text-gray-900">Welcome, {user?.email}</h2>
              <p className="mt-2 text-gray-600">
                This is the admin dashboard. Here you can manage all the educational content.
              </p>
              {/* Add your admin components here */}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default AdminDashboard;

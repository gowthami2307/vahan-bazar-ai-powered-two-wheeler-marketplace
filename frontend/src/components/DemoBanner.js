import React, { useState } from 'react';
import { X, Info } from 'lucide-react';

const DemoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-blue-600 text-white py-3 px-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Info className="h-5 w-5 flex-shrink-0" />
          <div className="text-sm">
            <strong>Demo Mode:</strong> This is a demo version with mock data. 
            Use these credentials to test the app:
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      {/* Demo Credentials */}
      <div className="container mx-auto mt-2">
        <div className="text-xs space-y-1">
          <div><strong>Admin:</strong> admin@demo.com / admin123</div>
          <div><strong>Users:</strong> john@demo.com / user123 | jane@demo.com / user123</div>
        </div>
      </div>
    </div>
  );
};

export default DemoBanner;

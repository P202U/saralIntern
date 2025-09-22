// src/components/LocationSelector.tsx

import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface LocationSelectorProps {
  onLocationUpdate: (newLocation: string) => void;
  currentLocation: string; // To show the selected value
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  onLocationUpdate,
  currentLocation,
}) => {
  const [pincode, setPincode] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isPincodeActive, setIsPincodeActive] = useState(false);

  const handleGetCurrentLocation = () => {
    setMessage('Fetching location...');
    setIsPincodeActive(false);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          const locationString = `Lat: ${latitude.toFixed(
            2
          )}, Lon: ${longitude.toFixed(2)}`;
          setMessage(`Location found! ${locationString}`);
          onLocationUpdate(locationString);
        },
        error => {
          setMessage(`Error: ${error.message}`);
        }
      );
    } else {
      setMessage('Geolocation is not supported by your browser.');
    }
  };

  const handleEnterPincode = () => {
    if (pincode.length === 6 && /^\d{6}$/.test(pincode)) {
      setMessage(`Pincode submitted: ${pincode}`);
      onLocationUpdate(pincode);
    } else {
      setMessage('Please enter a valid 6-digit pincode.');
    }
  };

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={handleGetCurrentLocation}
        className={`location-selector-button ${
          currentLocation.startsWith('Lat')
            ? 'border-purple-500 bg-purple-50 text-purple-700'
            : 'border-gray-200 text-gray-700'
        }`}
      >
        <MapPin className="h-6 w-6 mr-3" />
        <span className="font-medium">Get Current Location</span>
        {currentLocation.startsWith('Lat') && (
          <ArrowRight className="h-5 w-5 ml-auto text-purple-600" />
        )}
      </button>

      <div className="flex items-center space-x-3">
        <input
          type="text"
          value={pincode}
          onChange={e => {
            setPincode(e.target.value);
            setIsPincodeActive(true);
            onLocationUpdate(''); // Clear the location when typing starts
          }}
          placeholder="Enter Pincode"
          maxLength={6}
          className={`location-selector-input ${
            isPincodeActive ? 'border-purple-500' : 'border-gray-200'
          }`}
        />
        <button
          type="button"
          onClick={handleEnterPincode}
          className="location-selector-submit"
        >
          Submit
        </button>
      </div>

      {message && <p className="location-selector-message">{message}</p>}
    </div>
  );
};

export default LocationSelector;

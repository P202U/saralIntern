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
      {/* Get Current Location Button */}
      <button
        type="button"
        onClick={handleGetCurrentLocation}
        className={`
          w-full p-4 rounded-xl border-2 transition-all text-left min-h-[60px] flex items-center justify-center font-semibold
          ${
            currentLocation.startsWith('Lat')
              ? 'border-purple-500 bg-purple-50 text-purple-700'
              : 'border-gray-200 hover:border-gray-300 text-gray-700'
          }
        `}
      >
        <MapPin className="h-6 w-6 mr-3" />
        <span className="font-medium">Get Current Location</span>
        {currentLocation.startsWith('Lat') && (
          <ArrowRight className="h-5 w-5 ml-auto text-purple-600" />
        )}
      </button>

      {/* Pincode Input & Submit Button */}
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
        <input
          type="text"
          value={pincode}
          onChange={e => {
            setPincode(e.target.value);
            setIsPincodeActive(true);
            onLocationUpdate('');
          }}
          placeholder="Enter Pincode"
          maxLength={6}
          className={`
      w-full p-4 rounded-xl border-2 transition-all text-lg min-h-[60px]
      ${
        isPincodeActive
          ? 'border-purple-500'
          : 'border-gray-200 focus:border-purple-500 focus:outline-none'
      }
    `}
        />
        <button
          type="button"
          onClick={handleEnterPincode}
          className="
      w-full sm:w-auto flex-shrink-0 px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold transition-all
      hover:bg-orange-600
    "
        >
          Submit
        </button>
      </div>

      {/* Message */}
      {message && (
        <p className="mt-4 text-center text-sm font-medium text-gray-600">
          {message}
        </p>
      )}
    </div>
  );
};

export default LocationSelector;

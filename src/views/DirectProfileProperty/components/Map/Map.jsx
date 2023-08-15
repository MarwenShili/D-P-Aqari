import React, { useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { Spin } from 'antd';
import { ReactComponent as Info1Icon } from '../../../../assets/images/Favorites/info1.svg';

const Map = ({ property }) => {
  const [selectedPlace, setSelectedPlace] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  });

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = useMemo(
    () => ({
      lat: Number(property?.lat_long?.split(',')[0].trim()) || 35.83426185090107,
      lng: Number(property?.lat_long?.split(',')[1].trim()) || 10.607890187419523,
    }),
    []
  );

  if (!isLoaded) return <Spin />;

  return (
    <div style={{ height: '275px', width: '100%', marginTop: '12px' }}>
      <GoogleMap zoom={12} center={center} mapContainerStyle={containerStyle}>
        <MarkerF
          position={{
            lat: Number(property?.lat_long?.split(',')[0].trim()),
            lng: Number(property?.lat_long?.split(',')[1].trim()),
          }}
          onClick={() => setSelectedPlace(!selectedPlace)}
        />

        {selectedPlace && (
          <InfoWindowF
            position={{
              lat: Number(property?.lat_long?.split(',')[0].trim()),
              lng: Number(property?.lat_long?.split(',')[1].trim()),
            }}
            zIndex={1}
            options={{
              pixelOffset: {
                width: 0,
                height: -40,
              },
            }}
            onCloseClick={() => setSelectedPlace(undefined)}
          >
            <div className='map-info-window-content'>
              <img src={property?.images[0]} alt='placeimage' />
              <div>
                <p className='title'>{property?.name}</p>
                <p className='subtitle'>
                  {property?.price?.daily?.price} RS{' '}
                  <span>{property?.price?.daily?.price_per_meter} RS/Meter</span>
                </p>
                <p className='info'>
                  <Info1Icon /> 700 Meter
                </p>
              </div>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;

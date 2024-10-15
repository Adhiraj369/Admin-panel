import React, { useEffect, useRef, useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import fetchComplaints from '../utilis/fetchComplains'

const defaultCenter = { lat: 30.3165, lng: 78.0322 }; 

const mapOptions = {
  styles: [
    { "featureType": "poi.business", "stylers": [{ "visibility": "off" }] },
    { "featureType": "poi.government", "stylers": [{ "visibility": "off" }] },
    { "featureType": "poi.school", "stylers": [{ "visibility": "off" }] },
    { "featureType": "poi.sports_complex", "stylers": [{ "visibility": "off" }] },
    { "featureType": "poi.medical", "stylers": [{ "visibility": "off" }] },
    { "featureType": "poi.place_of_worship", "stylers": [{ "visibility": "off" }] },
    { "featureType": "transit.station.rail", "stylers": [{ "visibility": "off" }] },
    { "featureType": "transit.station.bus", "stylers": [{ "visibility": "off" }] }
  ],
};

const MapContainer = ({category}) => {
  const [markers, setMarkers] = useState([]);
  const mapStyles = { height: "60vh", width: "40vw" };
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAU4SEzLK-hc2pBfE_xggoyAigxopPQ7mw' 
  });

  // Memoizing the createMarkers function using useCallback
  const createMarkers = useCallback((map) => {
    markers.forEach(({ lat, lng, title, icon }) => {
      new window.google.maps.Marker({
        position: { lat, lng },
        map: map,
        title,
        icon,
        animation: window.google.maps.Animation.DROP
      });
    });
  }, [markers]); // Dependency array includes markers

  useEffect(() => {
    const loadMarkers = async () => {
      const fetchedMarkers = await fetchComplaints(category);
      setMarkers(fetchedMarkers); 
    };

    loadMarkers();
  }, [category]);

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      createMarkers(mapRef.current); 
    }
  }, [isLoaded, createMarkers]);

  return isLoaded ? (
    <GoogleMap
      onLoad={(map) => {
        mapRef.current = map;
        createMarkers(map);  
      }}
      mapContainerStyle={mapStyles}
      zoom={13}
      center={defaultCenter}
      options={mapOptions}  
    />
  ) : (
    <div>Loading...</div>
  );
};

export default MapContainer;

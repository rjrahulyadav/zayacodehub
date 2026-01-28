"use client";

import { APIProvider, Map as GoogleMap, Marker } from "@vis.gl/react-google-maps";

const mapStyles = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];


export function Map() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const position = { lat: 11.6643, lng: 78.1460 }; // Salem, Tamil Nadu coordinates

  if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center text-center p-4">
        <p className="text-muted-foreground">
          Google Maps API key is missing or is a placeholder. <br />
          Please add your key to the <code className="bg-muted-foreground/20 p-1 rounded">.env.local</code> file.
        </p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <GoogleMap
        defaultCenter={position}
        defaultZoom={13}
        mapId="zaya-code-hub-map"
        styles={mapStyles}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        <Marker position={position} />
      </GoogleMap>
    </APIProvider>
  );
}

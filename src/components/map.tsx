"use client";

import { APIProvider, Map as GoogleMap, Marker } from "@vis.gl/react-google-maps";

export function Map() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const position = { lat: 11.6643, lng: 78.1460 }; // Salem

  if (!apiKey) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center text-center p-4">
        <p className="text-muted-foreground">
          Google Maps API key is missing. <br />
          Add key to <code>.env.local</code>
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
        gestureHandling="greedy"
        disableDefaultUI={true}
        className="w-full h-full rounded-xl"
      >
        <Marker position={position} />
      </GoogleMap>
    </APIProvider>
  );
}

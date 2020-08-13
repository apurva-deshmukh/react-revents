import GoogleMapReact from "google-map-react";
import React from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function TestMap({ location }) {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyComVFqnTs1bqg5gSz964BSdT6iSLgrONQ" }}
        center={location.center}
        zoom={location.zoom}
      >
        <AnyReactComponent
          lat={location.center.lat}
          lng={location.center.lng}
          text='My Marker'
        />
      </GoogleMapReact>
    </div>
  );
}

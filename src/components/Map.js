import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { Marker } from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './Map.css'

mapboxgl.accessToken = 'pk.eyJ1Ijoia2llcmFuZHVuY2giLCJhIjoiY2t6OHc3M29qMGU0NTJvcDRhdXdocWwxMyJ9.CM5M8CABtGzLbEQxFBfc1A';


export default function Map() {

  // creating event list
  const eventList = [
    {
      title: "Sex Garage",
      date: 1990,
      description: "Sex Garage was an event that shaped the course of the follwoing decades. Lots of shit happened, including a kiss in, a riot, etc. Currently the old police station is now an Allo Mon Coco.",
      id: 1,
      lngLat: [-73.580313, 45.494594]
    },
    {
      title: "Bud's Raid",
      date: 1973,
      description: "The city’s queer bars moved east to the Village following a concentrated Montréal police crackdown on downtown LGBTQ establishments that began before the 1976 summer Olympic games and peaked with the police raid on Bud’s (1250 Stanley Street) in June 1984, when 75 officers charged 122 men with being found in a common bawdy house. - Richard Burnett",
      id: 2,
      lngLat: [-73.572932, 45.498911]
    },
    {
      title: "Coming soon",
      date: "TBA",
      description: "TBA",
      id: 3,
      lngLat: [-73.55798, 45.521289]
    }
  ]

  // map container creation
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-73.5673);
  const [lat] = useState(45.5017);
  const [zoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/kierandunch/cl1igres0007i14npg5jlc4ho',
    center: [lng, lat],
    zoom: zoom
    });

    // for (const event of eventList) {
    //   new mapboxgl.Marker()
    //     .setLngLat(event.lngLat)
    //     .addTo(map)
    // }
  });

  return (
    <div>
      <h2 className="title">Map</h2>
      <div className='map-box'>
        <div ref={mapContainer} className="map-container" />
        <div className="map-text">
        <ul>
          {eventList.map((event) => (
            <div>
              <li className="card">
                <h3>{event.title}, {event.date}</h3>
                <p>{event.description}</p>
              </li>
            </div>
          ))}
        </ul>
        </div>
      </div>
    </div>
  )
}

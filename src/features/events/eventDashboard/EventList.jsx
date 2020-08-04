import React from "react";
import EventListItem from "./EvenListItem";

export default function EventList({ events }) {
  return (
    <>
      {events.map((event) => (
        <EventListItem event={event} key={event.id} />
      ))}
    </>
  );
}

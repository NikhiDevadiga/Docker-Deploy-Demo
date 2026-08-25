import EventCard from "./EventCard";

const EventList = ({ events, onEdit, onDelete }) => {
  console.log("EVENTS:", events);
  if (events.length === 0) {
    return <p>No events found.</p>;
  }

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard
          key={event._id}
          event={event}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default EventList;

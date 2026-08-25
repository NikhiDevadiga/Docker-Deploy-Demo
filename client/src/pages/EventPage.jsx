import { useState } from "react";
import useEvents from "../hooks/useEvents";
import EventForm from "../components/events/EventForm";
import EventList from "../components/events/EventList";

const EventsPage = () => {
  const {
    events,
    loading,
    error,
    addEvent,
    editEvent,
    removeEvent,
  } = useEvents();

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSubmit = async (formData) => {
    if (selectedEvent) {
      await editEvent(selectedEvent._id, formData);
      setSelectedEvent(null);
    } else {
      await addEvent(formData);
    }
  };

  const handleEdit = (event) => {
    setSelectedEvent(event);
  };

  const handleDelete = async (event) => {
    const confirmed = window.confirm(
      `Delete "${event.name}"?`
    );

    if (!confirmed) {
      return;
    }

    await removeEvent(event._id);
  };

  return (
    <main>
      <h1>Event Manager</h1>

      <EventForm
        selectedEvent={selectedEvent}
        onSubmit={handleSubmit}
        onCancel={() => setSelectedEvent(null)}
      />

      {loading && <p>Loading events...</p>}

      {error && <p>{error}</p>}

      {!loading && (
        <EventList
          events={events}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </main>
  );
};

export default EventsPage;
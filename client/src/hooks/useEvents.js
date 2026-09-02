import { useEffect, useState } from "react";

import {
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../services/eventService";

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addEvent = async (eventData) => {
    try {
      setError(null);

      const data = await createEvent(eventData);

      setEvents((previousEvents) => {
        const updatedEvents = [...previousEvents, data.demo];

        return updatedEvents;
      });
    } catch (error) {
      console.log("CREATE ERROR:", error);
      setError(error.message);
    }
  };

  // FETCH
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getEvent();

        setEvents(data.demo);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents(); // IMPORTANT
  }, []);

  // UPDATE
  const editEvent = async (id, eventData) => {
    try {
      setError(null);

      const data = await updateEvent(id, eventData);

      setEvents((previousEvents) =>
        previousEvents.map((event) => (event._id === id ? data.demo : event)),
      );
    } catch (error) {
      setError(error.message);
    }
  };

  // DELETE
  const removeEvent = async (id) => {
    try {
      setError(null);

      await deleteEvent(id);

      setEvents((previousEvents) =>
        previousEvents.filter((event) => event._id !== id),
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    events,
    loading,
    error,
    addEvent,
    editEvent,
    removeEvent,
  };
};

export default useEvents;

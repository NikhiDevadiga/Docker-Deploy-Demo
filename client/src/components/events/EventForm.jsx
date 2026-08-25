import { useEffect, useState } from "react";
import Button from "../common/Button";

const EventForm = ({
  selectedEvent,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    content: "",
  });

  useEffect(() => {
    if (selectedEvent) {
      setFormData({
        name: selectedEvent.name,
        content: selectedEvent.content,
      });
    } else {
      setFormData({
        name: "",
        content: "",
      });
    }
  }, [selectedEvent]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Event name"
        value={formData.name}
        onChange={handleChange}
      />

      <textarea
        name="content"
        placeholder="Event content"
        value={formData.content}
        onChange={handleChange}
      />

      <Button type="submit">
        {selectedEvent ? "Update Event" : "Create Event"}
      </Button>

      {selectedEvent && (
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>
      )}
    </form>
  );
};

export default EventForm;
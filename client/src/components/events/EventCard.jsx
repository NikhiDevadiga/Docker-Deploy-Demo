import Button from "../common/Button";

const EventCard = ({ event, onEdit, onDelete }) => {
  return (
    <div className="event-card">
      <div>
        <h3>{event.name}</h3>
        <p>{event.content}</p>
      </div>

      <div>
        <Button onClick={() => onEdit(event)}>
          Edit
        </Button>

        <Button
          variant="danger"
          onClick={() => onDelete(event)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
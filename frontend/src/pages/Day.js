// WeekEnd.js
import React, { useState } from "react";
import NewEvent from "./../components/NewEvent";
import PostWeekend from "./Private/PrivateProfil/components/PostWeekend";

const WeekEnd = () => {
  const [eventData, setEventData] = useState([]);

  const handleNewEventSubmit = (data) => {
    setEventData([...eventData, { ...data }]);
  };

  return (
    <div className="seeMore">
      <h1>Journée Bien-être</h1>
      <div className="weekend-container">
        <div className="weekend-content">
          <NewEvent onSubmitCallback={handleNewEventSubmit} />
        </div>
      </div>
      <div className="event">
        {eventData.map((event, index) => (
          <PostWeekend data={event} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WeekEnd;

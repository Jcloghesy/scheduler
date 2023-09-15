import React from 'react'
import DayListItem from "components/DayListItem";

export default function DayList({ days, day, onChange }) {

  const dayListItems = days.map((dayItem) => (
    <DayListItem
      key={dayItem.id}
      name={dayItem.name}
      spots={dayItem.spots}
      selected={dayItem.name === day}
      setDay={onChange}
    />
  ));

  return <ul>{dayListItems}</ul>;
}
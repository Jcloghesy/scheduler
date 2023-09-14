import React, { useState, useEffect } from "react";
import axios from "axios";
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from 'components/Appointment';
import { getAppointmentsForDay } from "helpers/selectors";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });
  const setDay = day => setState({ ...state, day });

  const getDays = "/api/days";
  const getAppointments = "/api/appointments";

  useEffect(() => {
    Promise.all([
      axios.get(getDays),
      axios.get(getAppointments),
    ])
      .then((all) => {
        const [daysAPI, appointmentsAPI] = all;
        setState((prev) => ({
          ...prev,
          days: daysAPI.data,
          appointments: appointmentsAPI.data,
        }));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
            onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {Object.values(dailyAppointments).map(appointment => (
          <Appointment key={appointment.id} {...appointment} />
        ))}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
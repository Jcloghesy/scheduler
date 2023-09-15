import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState((prev) => ({ ...prev, day }));

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ])
      .then((all) => {
        const [daysAPI, appointmentsAPI, interviewersAPI] = all;
        setState((prev) => ({
          ...prev,
          days: daysAPI.data,
          appointments: appointmentsAPI.data,
          interviewers: interviewersAPI.data,
        }));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const bookInterview = (id, interview) => {
    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => {
        const appointment = {
          ...state.appointments[id],
          interview: { ...interview },
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment,
        };
        setState((prev) => ({
          ...prev,
          appointments,
        }));
        return true;
      })
      .catch((error) => {
        console.error("Error updating appointment:", error);
        return false;
      });
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        setState((prev) => ({
          ...prev,
          appointments,
        }));
        return true;
      })
      .catch((error) => {
        console.error("Error deleting interview:", error);
        return false;
      });
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
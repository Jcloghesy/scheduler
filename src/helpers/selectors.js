export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.find((d) => d.name === day);

  if (!selectedDay || selectedDay.interviewers.length === 0) {
    return [];
  }

  const appointmentsForDay = selectedDay.appointments.map((appointmentId) => {
    return state.appointments[appointmentId];
  });

  return appointmentsForDay;
}

export function getInterview(state, interview) {
  if (interview && interview.interviewer) {
    const { student, interviewer } = interview;
    const interviewerInfo = state.interviewers[interviewer];
    if (interviewerInfo) {
      return {
        student,
        interviewer: {
          id: interviewerInfo.id,
          name: interviewerInfo.name,
          avatar: interviewerInfo.avatar,
        },
      };
    }
  }
  return null;
}

export function getInterviewersForDay(state, day) {
  const selectedDay = state.days.find((d) => d.name === day);
  if (!selectedDay || selectedDay.interviewers.length === 0) {
    return [];
  }

  return selectedDay.interviewers.map((id) => state.interviewers[id]);
}
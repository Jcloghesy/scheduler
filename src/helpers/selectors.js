export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.find((d) => d.name === day);

  if (!selectedDay) {
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
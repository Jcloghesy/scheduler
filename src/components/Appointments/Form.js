import React, { useState } from 'react';
import Button from 'components/Button';
import InterviewerList from 'components/InterviewerList';

export default function Form({ onCancel, onSave, interviewers, student, interviewer }) {

  const [studentState, setStudent] = useState(student || "");
  const [interviewerState, setInterviewer] = useState(interviewer || null);

  const handleStudentChange = (event) => {
    setStudent(event.target.value);
  };
  const handleInterviewerChange = (selectedInterviewer) => {
    setInterviewer(selectedInterviewer);
  };

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    onCancel();
  };

  const handleSave = () => {
    onSave(studentState, interviewerState);
  };
  const handleSubmit = (event) => {
    event.preventDefault()
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={studentState}
            onChange={handleStudentChange}
          />
        </form>
        <InterviewerList
          interviewers={interviewers}
          value={interviewerState}
          onChange={handleInterviewerChange}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm onClick={handleSave}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
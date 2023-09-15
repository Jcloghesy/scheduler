import React from 'react';
import 'components/Appointment/styles.scss';
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import Form from 'components/Appointment/Form';
import Status from 'components/Appointment/Status';
import Confirm from 'components/Appointment/Confirm';
import Error from "components/Appointment/Error"
import useVisualMode from 'hooks/useVisualMode';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment({ time, interview, bookInterview, cancelInterview, id, interviewers }) {
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );

  async function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    try {
      const success = await bookInterview(id, interview);
      if (success) {
        transition(SHOW);
      } else {
        transition(ERROR_SAVE, true);
      }
    } catch (error) {
      transition(ERROR_SAVE, true);
    }
  }

  async function onDelete() {
    transition(DELETING, true);
    try {
      const success = await cancelInterview(id);
      if (success) {
        transition(EMPTY);
      } else {
        transition(ERROR_DELETE, true);
      }
    } catch (error) {
      transition(ERROR_DELETE, true);
    }
  }

  function onConfirmDelete() {
    transition(CONFIRM);
  }
  function onEdit() {
    transition(EDIT);
  }

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onEdit={onEdit}
          onDelete={onConfirmDelete}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={interviewers}
          onCancel={() => back()}
          onSave={save}
          onDelete={onDelete}
        />
      )}
      {mode === SAVING && <Status message="Saving..." />}
      {mode === DELETING && <Status message="Deleting..." />}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you want to delete?"
          onCancel={() => back()}
          onConfirm={onDelete}
        />
      )}
      {mode === EDIT && (
        <Form
          interviewers={interviewers}
          onCancel={() => back()}
          onSave={save}
          name={interview.student}
          interviewer={interview.interviewer.id}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error
          onClose={() => back()}
          message={"Could not delete appointment"}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error
          onClose={() => back()}
          message={"Could not save appointment"}
        />
      )}

    </article>
  )
}
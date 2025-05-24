import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { addTask } from '../services/api';

const TaskForm = () => {
  const [task, setTask] = useState({ slno: '', title: '', due_date: '' });

  const handleChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    await addTask(task);
    setTask({ slno: '', title: '', due_date: '' });
    window.location.reload(); // refresh to get updated list
  };

  return (
    <Stack direction="row" spacing={2} mb={3}>
      <TextField label="Serial No" name="slno" value={task.slno} onChange={handleChange} />
      <TextField label="Task" name="title" value={task.title} onChange={handleChange} style={{width:'45rem'}}/>
      <TextField type="date" name="due_date" value={task.due_date} onChange={handleChange} />
      <Button variant="contained" onClick={handleSubmit}>Add</Button>
    </Stack>
  );
};

export default TaskForm;

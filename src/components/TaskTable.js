import React, { useEffect, useState } from 'react';
import {
  Table, TableHead, TableRow, TableCell,
  TableBody, IconButton, Checkbox, TextField, Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { getTasks, deleteTask, updateTask } from '../services/api';

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);
  const [editRow, setEditRow] = useState(null); // store slno of the row being edited
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const handleDelete = async (slno) => {
    await deleteTask(slno);
    setTasks(tasks.filter(t => t.slno !== slno));
  };

  const handleEditClick = (task) => {
    setEditRow(task.slno);
    setEditedData({
      title: task.title,
      due_date: task.due_date,
      completed: task.completed
    });
  };

  const handleCancel = () => {
    setEditRow(null);
    setEditedData({});
  };

  const handleSave = async (slno) => {
    await updateTask(slno, editedData);
    setTasks(tasks.map(task =>
      task.slno === slno ? { ...task, ...editedData } : task
    ));
    setEditRow(null);
    setEditedData({});
  };

  const handleCheckboxToggle = async (task) => {
    const updated = { ...task, completed: !task.completed };
    await updateTask(task.slno, { completed: updated.completed });
    setTasks(tasks.map(t =>
      t.slno === task.slno ? updated : t
    ));
  };

  const cellStyle = {
    textAlign: 'center',
  };

  const headerStyle = {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center'
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell sx={headerStyle}>Serial No</TableCell>
          <TableCell sx={headerStyle}>Task</TableCell>
          <TableCell sx={headerStyle}>Due Date</TableCell>
          <TableCell sx={headerStyle}>Completed</TableCell>
          <TableCell sx={headerStyle}>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task, i) => {
          const isEditing = editRow === task.slno;
          const rowStyle = {
            backgroundColor: i % 2 === 0 ? "action.hover" : "inherit",
            textDecoration: task.completed ? "line-through" : "none"
          };

          return (
            <TableRow key={task.id} sx={rowStyle}>
              <TableCell sx={cellStyle}>{task.slno}</TableCell>

              <TableCell sx={cellStyle}>
                {isEditing ? (
                  <TextField
                    value={editedData.title}
                    onChange={(e) => setEditedData({ ...editedData, title: e.target.value })}
                  />
                ) : (
                  task.title
                )}
              </TableCell>

              <TableCell sx={cellStyle}>
                {isEditing ? (
                  <TextField
                    type="date"
                    value={editedData.due_date}
                    onChange={(e) => setEditedData({ ...editedData, due_date: e.target.value })}
                  />
                ) : (
                  task.due_date
                )}
              </TableCell>

              <TableCell sx={cellStyle}>
                <Checkbox
                  checked={task.completed}
                  onChange={() => handleCheckboxToggle(task)}
                />
              </TableCell>

              <TableCell sx={cellStyle}>
                {isEditing ? (
                  <>
                    <IconButton onClick={() => handleSave(task.slno)}>
                      <SaveIcon />
                    </IconButton>
                    <IconButton onClick={handleCancel}>
                      <CancelIcon />
                    </IconButton>
                  </>
                ) : (
                  <>
                    <IconButton onClick={() => handleEditClick(task)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(task.slno)}>
                      <DeleteIcon />
                    </IconButton>
                  </>
                )}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TaskTable;

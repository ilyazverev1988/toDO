import Button from '@mui/material/Button';
import React from 'react';
import { clearTasks } from '../../service/workerStore';

const ClearTaskButton = () => {
  return (
    <div>
      <Button variant="outlined" onClick={clearTasks}>
        Очистить все задачи
      </Button>
    </div>
  );
};

export default ClearTaskButton;

import React, { useEffect, useMemo, useState } from 'react';
import Header from '../Header/Header';
import Board from '../Board/Board';
import { returnTasks } from '../../service/workerStore';
import { sortArray } from '../../utils/utils';

const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const checkStorage = () => {
      returnTasks() ? setTasks(returnTasks()) : setTasks([]);
    };
    checkStorage();
    window.addEventListener('storage', checkStorage);
    return () => {
      window.removeEventListener('storage', checkStorage);
    };
  }, []);

  const memoValue = useMemo(() => sortArray(tasks, 'title'), [tasks]);

  return (
    <>
      <Header />
      <Board tasks={memoValue} />
    </>
  );
};

export default App;

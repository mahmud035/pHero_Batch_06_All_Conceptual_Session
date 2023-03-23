import { useState } from 'react';
import LessonOne from './components/useState/LessonOne';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <LessonOne />
    </div>
  );
}

export default App;

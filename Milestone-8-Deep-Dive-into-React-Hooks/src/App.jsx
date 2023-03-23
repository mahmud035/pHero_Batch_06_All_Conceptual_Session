import { useState } from 'react';
import Explain from './components/useState/Explain';
import LessonFour from './components/useState/LessonFour';
import LessonOne from './components/useState/LessonOne';
import LessonThree from './components/useState/LessonThree';
import LessonTwo from './components/useState/LessonTwo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <LessonOne />
      {/* <LessonTwo /> */}
      {/* <LessonThree /> */}
      {/* <LessonFour /> */}
      {/* <Explain /> */}
    </div>
  );
}

export default App;

import NavBar from './NavBar';
import MyFigure from './MyFigure';
import MySection from './MySection';

import './App.css';

function App() {
  return (
    <><NavBar />
    <main className='flex justify-between'>
      <MySection />
      <MyFigure />
    </main></>
  );
 
}

export default App;

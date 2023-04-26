import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home';
import { Resume } from './Components/Resume'
import { Work } from './Components/Work'
import { Activities } from './Components/Activities'
import { Github } from './Components/Github';
import { LinkedIn } from './Components/Linkedin';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <Navbar />
    <div className='Container'>
    <Routes> {/* Every route of the website goes in between these tags */}
      <Route path='/' element={<Home />}></Route> {/* Render one specific route of the website*/}
      <Route path='resume' element={<Resume />}></Route>
      <Route path='work' element={<Work />}></Route>
      <Route path='activities' element={<Activities />}></Route>
      <Route path='github' element={<Github />}></Route>
      <Route path='linkedin' element={<LinkedIn />}></Route>
    </Routes>
    </div>
    </>
  );
}

// const MobileNavbar = {
//   Wrapper: styled(Navbar.Wrapper)`
//     position: fixed;
//     width: 100vw;
//     bottom: 0;

//     justify-content: center;
//   `,
//   Items: styled(Navbar.Items)`
//     flex: 1;
//     padding: 0 2rem;

//     justify-content: space-around;
//   `,
//   Item: styled(Navbar.Item)``,
// };

export default App;

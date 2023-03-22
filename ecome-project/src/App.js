import Home from '../src/routes/home/home';
import Navigation from '../src/routes/navigation/navigation';
import SignIn from '../src/routes/sign-in/sign-in';
import { Routes, Route } from 'react-router-dom';



const Test = () => {
  return (
    <div>
      Shop component
    </div>
  )
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Test />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;

import { SignpostOutlined } from '@mui/icons-material';
import './App.css';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase.js"
import Line from './components/Line';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <Line /> : <SignIn />}
    </div>
  );
}

export default App;

import './App.css';
import Student from './Student.js'


function App(){
  return (
    <>
      <Student name="Kelvin" age='30' isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="bob" age={88} isStudent={false} />
      <Student name="Sandy" age={18} isStudent={true} />
      <Student  />
    </>
  );
}

export default  App
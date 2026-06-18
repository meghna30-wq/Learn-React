import Header from './Header.jsx'
import Button from './Button.jsx'
import Props from './props.jsx'
import Student from './Student.jsx'
function App(){
  const intro= <h1>Welcome to the Login Form</h1>;
  const heading = <h2>Login Form</h2>;
  
  return(

    <div>
      <form>
        {/* JSX-> Html can be used with JavaScript */}
        <div>
          <Header />
          <Button />
          <Props name="John Doe" age={30} />
        </div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" /><br/><br/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" /><br/><br/>
        <button type="submit">Login</button>   <br/><br/>
        
      </form>
      <div>
        <Student name="Ajay" id={123} course="CSE" fees={5000} />
        <Student name="Aman" id={345} course="IT" fees={3000} />
        <Student name="Amit" id={897} course="AI" fees={2000} />
      </div>

    </div>
  )
}
export default App
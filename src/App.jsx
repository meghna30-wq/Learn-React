import Header from "./Header"
import Button from "./Button"
function App(){
  const intro= <h1>Welcome to the Login Form</h1>;
  const heading = <h2>Login Form</h2>;
  
  return(

    <div>
      <form>
        {/* JSX-> Html can be used with JavaScript */}
        <Header />
        <Button />
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" /><br/><br/>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" /><br/><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default App
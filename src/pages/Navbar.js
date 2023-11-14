import {Link} from "react-router-dom";

const Navbar = () =>{
    return(
       
        <nav class="navbar navbar-expand-lg navbar-dark p-3 w-auto">
        {/* <Link class="navbar-brand" to="#" >Navbar</Link> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class=" navbar-nav">
      <li class="nav-item">
        <Link class="nav-link active" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active" to="login">EmployeeLogin</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active" to="admin">AdminLogin</Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link active" to="register">EmployeeRegister</Link>
      </li>
      
    </ul>
    
  </div>
</nav>
    );
}
export default Navbar;
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import QueryAllCars from './components/queryallcars';
import AddCar from './components/addcar';
import ChangeOwner from './components/changeowner';

function App() {
  return (
	<Router>
		 <div className="container">
		 <Navbar />
		 <br/>
		 <Route path="/" exact component={QueryAllCars} />
		 <Route path="/addcar" component={AddCar} />
		 <Route path="/changeowner" component={ChangeOwner} />
		 </div>
	</Router>
  );
}

export default App;

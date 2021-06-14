import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Screens/Home";
import Services from "./Screens/Services";
import About from "./Screens/About";
import Contacts from "./Screens/Contacts";
import Proposal from "./Screens/Proposal";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/services' component={Services} exact />
				<Route path='/about' component={About} exact />
				<Route path='/contact' component={Contacts} exact />
				<Route path='/proposal' component={Proposal} exact />
			</Switch>
		</BrowserRouter>
	);
}

export default App;

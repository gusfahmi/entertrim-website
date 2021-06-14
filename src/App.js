import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./Screens/Index";
import Services from "./Screens/Services";
import About from "./Screens/About";
import Contacts from "./Screens/Contacts";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' component={Index} exact />
				<Route path='/services' component={Services} exact />
				<Route path='/about' component={About} exact />
				<Route path='/contact' component={Contacts} exact />
			</Switch>
		</BrowserRouter>
	);
}

export default App;

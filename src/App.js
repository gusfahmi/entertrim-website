import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Screens/Home";
import Services from "./Screens/Services";
import About from "./Screens/About";
import Contacts from "./Screens/Contacts";
import NotFound from "./Components/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/services' component={Services} exact />
				<Route path='/about' component={About} exact />
				<Route path='/contact' component={Contacts} exact />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;

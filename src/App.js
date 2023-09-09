import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoTypes from "./components/LogoTypes";
import Research from "./components/Research";
import Work from "./components/Work";
import OurBackers from "./components/OurBackers";
import OurTeam from "./components/OurTeam";
import WorkWithUs from "./components/WorkWithUs";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
function App() {
	return (
		<div className="overflow-x-hidden">
			<Header />
			<Hero />
			<Research />
			<Work />
			<LogoTypes />
			<OurTeam />
			<OurBackers />
			<WorkWithUs />
			<Footer />
			<ContactUs />
		</div>
	);
}

export default App;

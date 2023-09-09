import economicTimes from "../assets/economicTimes.png";
import ANI from "../assets/ANI.png";
import thePrint from "../assets/thePrint.png";
import timesBureau from "../assets/timesBureau.png";
export default function LogoTypes() {
	return (
		<div className="flex py-9 px-24 flex-wrap justify-center item-center gap-8 bg-ourWorkGradient md:justify-between">
			<img src={economicTimes} />
			<img src={thePrint} />
			<img src={timesBureau} />
			<img src={ANI} />
		</div>
	);
}

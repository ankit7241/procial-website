import kitakiVentures from "../assets/kitakiVentures.png";
import ventures from "../assets/ventures.png";
export default function OurBackers() {
	return (
		<div className="flex py-9 px-6 flex-wrap items-center justify-around gap-9 bg-secondaryGradient">
			<div className="flex flex-col items-start gap-2">
				<span className="SourceSans font-normal text-3xl text-headerBg">
					Our Backers
				</span>
			</div>
			<img src={kitakiVentures} className="h-14 w-40" />
			<img src={ventures} className="h-14 w-14" />
		</div>
	);
}

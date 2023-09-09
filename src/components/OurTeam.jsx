import anantProfile from "../assets/anantProfile.png";
import abhayProfile from "../assets/abhayProfile.png";
import manidharProfile from "../assets/manidharProfile.png";
import linkedIn from "../assets/linkedIn.png";
export default function OurTeam() {
	return (
		<div className="flex py-12 px-6 flex-col justify-center items-center gap-2 self-stretch">
			<div className="flex flex-col items-center gap-9 2xl:items-start">
				<div className="flex flex-col items-center gap-3">
					<span className="SourceSans bg-ourWorkGradient text-transparent bg-clip-text font-normal text-3xl">
						Our Team
					</span>
				</div>
				<div className="flex flex-wrap justify-center items-center gap-9">
					<div className="flex p-6 flex-col justify-center items-center gap-6 border border-solid border-iceland rounded-s-3xl rounded-r-3xl bg-tertiaryGradient shadow-xl">
						<div className="w-40 h-40">
							<div className="w-36 h-36 shrink-0 rounded bg-linkedInGradient pb-2 pr-2 relative">
								<img
									className="w-36 h-36 shrink-0 rounded absolute bottom-2 right-2"
									src={anantProfile}
								/>
							</div>
						</div>
						<div className="flex justify-end items-start gap-6">
							<div className="flex flex-col items-start justify-center">
								<div className="flex px-2 py-1 flex-col items-start rounded-md">
									<span className="WorkSans text-xl font-medium bg-secondaryGradient text-transparent bg-clip-text w-36">
										Anant
									</span>
									<span className="WorkSans text-xl font-medium bg-secondaryGradient text-transparent bg-clip-text w-36">
										Moona
									</span>
								</div>
								<div className="flex w-44 px-2 py-1 flex-col items-start gap-2 rounded-md">
									<span className="WorkSans text-base font-normal text-heroContent">
										CEO and Founder
									</span>
								</div>
							</div>
							<div className="flex p-1 items-center gap-4 bg-linkedInGradient rounded">
								<img className="w-6 h-6" src={linkedIn} />
							</div>
						</div>
					</div>
					<div className="flex p-6 flex-col justify-center items-center gap-6 border border-solid border-iceland rounded-s-3xl rounded-r-3xl bg-tertiaryGradient shadow-xl">
						<div className="w-40 h-40">
							<div className="w-36 h-36 shrink-0 rounded bg-linkedInGradient pb-2 pr-2 relative">
								<img
									className="w-36 h-36 shrink-0 rounded absolute bottom-2 right-2"
									src={manidharProfile}
								/>
							</div>
						</div>
						<div className="flex justify-end items-start gap-6">
							<div className="flex flex-col items-start justify-center">
								<div className="flex px-2 py-1 flex-col items-start rounded-md">
									<span className="WorkSans text-xl font-medium bg-secondaryGradient text-transparent bg-clip-text w-36">
										Manidhar
									</span>
									<span className="WorkSans text-xl font-medium bg-secondaryGradient text-transparent bg-clip-text w-36">
										Kodurupaka
									</span>
								</div>
								<div className="flex w-44 px-2 py-1 flex-col items-start gap-2 rounded-md">
									<span className="WorkSans text-base font-normal text-heroContent">
										CTO and Founder
									</span>
								</div>
							</div>
							<div className="flex p-1 items-center gap-4 bg-linkedInGradient rounded">
								<img className="w-6 h-6" src={linkedIn} />
							</div>
						</div>
					</div>
					<div className="flex p-6 flex-col justify-center items-center gap-6 border border-solid border-iceland rounded-s-3xl rounded-r-3xl bg-tertiaryGradient shadow-xl">
						<div className="w-40 h-40">
							<div className="w-36 h-36 shrink-0 rounded bg-linkedInGradient pb-2 pr-2 relative">
								<img
									className="w-36 h-36 shrink-0 rounded absolute bottom-2 right-2"
									src={abhayProfile}
								/>
							</div>
						</div>
						<div className="flex justify-end items-start gap-6">
							<div className="flex flex-col items-start justify-center">
								<div className="flex px-2 py-1 flex-col items-start rounded-md">
									<span className="WorkSans text-xl font-medium bg-secondaryGradient text-transparent bg-clip-text w-36">
										Abhay Dev
									</span>
									<span className="WorkSans text-xl font-medium bg-secondaryGradient text-transparent bg-clip-text w-36">
										Sharma
									</span>
								</div>
								<div className="flex w-44 px-2 py-1 flex-col items-start gap-2 rounded-md">
									<span className="WorkSans text-base font-normal text-heroContent">
										COO and Founder
									</span>
								</div>
							</div>
							<div className="flex p-1 items-center gap-4 bg-linkedInGradient rounded">
								<img className="w-6 h-6" src={linkedIn} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

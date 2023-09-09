import arrow from "../assets/arrow.png";
import ourWorkLogo1 from "../assets/ourWorkLogo1.png";
import ourWorkLogo2 from "../assets/ourWorkLogo2.png";
export default function Work() {
	return (
		<div className="flex px-6 py-12 flex-col justify-center items-center gap-2 self-stretch w-full">
			<div className="flex flex-col items-center gap-6 md:items-start">
				<span className="sourceSans bg-ourWorkGradient text-transparent bg-clip-text text-3xl items-start gap-3 font-normal">
					Our Work
				</span>
				<div className="flex flex-col items-center justify-center gap-9 md:flex-row md:w-[780px] 2xl:w-[1000px]">
					<div className="flex p-6 gap-9 items-center justify-around border border-solid border-iceland rounded-s-3xl rounded-r-3xl bg-tertiaryGradient shadow-xl h-[250px] md:w-1/2">
						<div className="flex flex-col items-start justify-center gap-12 ">
							<div className="WorkSans text-xl font-normal bg-secondaryGradient text-transparent bg-clip-text">
								<div>DSI</div>
								<div>Foundation</div>
							</div>
							<a
								href="https://anant-moona.gitbook.io/dsi-docs/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2"
							>
								<img src={arrow} className="w-3 h-2" />
								<span className="WorkSans text-base font-normal underline decoration-solid text-heroContent">
									Learn More
								</span>
							</a>
						</div>
						<div className="flex items-center justify-center w-36 h-36">
							<img
								src={ourWorkLogo1}
								className="w-36 h-36 bg-cover bg-no-repeat"
							/>
						</div>
					</div>
					<div className="flex p-6 gap-9 items-center justify-around border border-solid border-iceland rounded-s-3xl rounded-r-3xl bg-tertiaryGradient shadow-xl h-[250px] md:w-1/2">
						<div className="flex flex-col items-start justify-center gap-12">
							<div className="WorkSans text-xl font-normal bg-secondaryGradient text-transparent bg-clip-text">
								<div>Lucid</div>
								<div>Credit</div>
							</div>

							<a
								href="https://anant-moona.gitbook.io/dsi-docs/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2"
							>
								<img src={arrow} className="w-3 h-2" />
								<span className="WorkSans text-base font-normal underline decoration-solid text-heroContent">
									Learn More
								</span>
							</a>
						</div>
						<div className="flex items-center justify-center w-36 h-36">
							<img
								src={ourWorkLogo2}
								className="w-36 h-36 bg-cover bg-no-repeat"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

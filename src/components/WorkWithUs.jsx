import productDesignerIcon from "../assets/productDesignerIcon.png";
import blockchainDevIcon from "../assets/blockchainDevIcon.png";
import fullStackDevIcon from "../assets/fullStackDevIcon.png";
import marketingLeadIcon from "../assets/marketingLeadIcon.png";
import blueArrow from "../assets/blueArrow.png";
export default function WorkWithUs() {
	return (
		<div className="flex py-12 px-6 flex-col justify-center items-center gap-2 self-stretch">
			<div className="flex flex-col justify-center items-center gap-2">
				<div className="flex flex-col items-center justify-center gap-9">
					<div className="flex flex-col justify-between gap-6 md:flex-row">
						<div className="SourceSans flex-shrink-0 bg-ourWorkGradient text-transparent bg-clip-text text-3xl font-normal text-center ">
							Work With Us
						</div>
						<div className="text-center text-workWithUs WorkSans font-normal text-base max-w-xl">
							We actively are on a lookout for geniuses in tech, marketing and
							research. If you are looking to contribute to the next revolution
							in decentralized finance, apply below to join our team.
						</div>
					</div>

					<div className="flex flex-wrap justify-center items-center gap-10">
						<div className="flex p-6 flex-col justify-center items-center gap-6 border border-solid border-iceland rounded-s-3xl rounded-r-3xl bg-tertiaryGradient shadow-xl">
							<div className="flex w-32 h-32 justify-center items-center">
								<img src={productDesignerIcon} className="w-32 h-32" />
							</div>
							<div className="flex justify-end items-center gap-6">
								<div className="WorkSans text-xl font-medium underline decoration-iceland bg-secondaryGradient text-transparent bg-clip-text flex w-32 h-20 flex-col justify-center">
									Product Designer
								</div>
								<img src={blueArrow} className="w-9 h-9 " />
							</div>
						</div>
						<div className="flex p-6 flex-col justify-center items-center gap-6 border border-solid border-iceland rounded-s-3xl rounded-r-3xl bg-tertiaryGradient shadow-xl">
							<div className="flex w-32 h-32 justify-center items-center">
								<img src={blockchainDevIcon} className="w-32 h-32" />
							</div>
							<div className="flex justify-end items-center gap-6">
								<div className="WorkSans text-xl font-medium underline decoration-iceland bg-secondaryGradient text-transparent bg-clip-text flex w-32 h-20 flex-col justify-center">
									Blockchain Developer
								</div>
								<img src={blueArrow} className="w-9 h-9 " />
							</div>
						</div>
						<div className="flex p-6 flex-col justify-center items-center gap-6 border border-solid border-iceland rounded-s-3xl rounded-r-3xl bg-tertiaryGradient shadow-xl">
							<div className="flex w-32 h-32 justify-center items-center">
								<img src={fullStackDevIcon} className="w-32 h-32" />
							</div>
							<div className="flex justify-end items-center gap-6">
								<div className="WorkSans text-xl font-medium underline decoration-iceland bg-secondaryGradient text-transparent bg-clip-text flex w-32 h-20 flex-col justify-center">
									Full Stack Developer
								</div>
								<img src={blueArrow} className="w-9 h-9 " />
							</div>
						</div>
						<div className="flex p-6 flex-col justify-center items-center gap-6 border border-solid border-iceland rounded-s-3xl rounded-r-3xl bg-tertiaryGradient shadow-xl">
							<div className="flex w-32 h-32 justify-center items-center">
								<img src={marketingLeadIcon} className="w-32 h-32" />
							</div>
							<div className="flex justify-end items-center gap-6">
								<div className="WorkSans text-xl font-medium underline decoration-iceland bg-secondaryGradient text-transparent bg-clip-text flex w-32 h-20 flex-col justify-center">
									Marketing Lead
									<div>(MENA)</div>
								</div>
								<img src={blueArrow} className="w-9 h-9 " />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

import procialLogo from "../assets/procialLogo.png";
import linkedInLogo from "../assets/linkedInLogo.png";
import telegramLogo from "../assets/telegramLogo.png";
export default function Footer() {
	// const rectangles = Array(48)
	// 	.fill(null)
	// 	.map((_, index) => (
	// 		<div
	// 			key={index}
	// 			className="w-[0.392px] h-[1440px] origin-center rotate-90 bg-red-600"
	// 		></div>
	// 	));
	return (
		<div className="flex flex-col gap-10 items-center justify-center py-16">
			<div className="inline-flex flex-col justify-center items-center gap-9 md:flex-row">
				<div className="flex items-center gap-2">
					<img src={procialLogo} className="w-7 h-12" />
				</div>
				<div className="flex flex-wrap justify-center items-center gap-6">
					<div className="WorkSans text-lg font-bold capitalize bg-ourWorkGradient text-transparent bg-clip-text">
						Research
					</div>
					<div className="flex flex-wrap justify-center items-center gap-4">
						<div className="WorkSans underline decoration-iceland text-sm font-normal bg-secondaryGradient text-transparent bg-clip-text">
							DID Protocol
						</div>
						<div className="WorkSans underline decoration-iceland text-sm font-normal bg-secondaryGradient text-transparent bg-clip-text">
							On-Chain Credit Scores
						</div>
					</div>
				</div>
				<div className="flex h-12 justify-end items-center gap-2">
					<img src={linkedInLogo} className="w-12 h-12" />
					<div className="flex h-12 w-12 items-center justify-center">
						<img src={telegramLogo} className="w-12 h-12 shrink-0" />
					</div>
				</div>
			</div>
			<div className="flex items-center gap-4">
				<div className="WorkSans text-sm font-normal bg-secondaryGradient text-transparent bg-clip-text">
					© 2000-2021, All Rights Reserved
				</div>
			</div>
		</div>
	);
}

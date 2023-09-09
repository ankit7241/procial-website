import crossIcon from "../assets/crossIcon.png";
export default function ContactUs() {
	return (
		<div className="flex w-full p-6 items-center gap-2 border border-solid border-iceland bg-contactCard shadow-sm rounded-s-xl rounded-r-xl">
			<div className="flex flex-col items-center justify-center gap-6 flex-1 w-full">
				<div className="flex justify-between items-center self-stretch">
					<div className="items-center SourceSans text-2xl font-semibold bg-secondaryGradient text-transparent bg-clip-text">
						Contact Us
					</div>
					<div className="flex h-6 w-6 justify-center items-center">
						<img src={crossIcon} className="w-6 h-6 shrink-0" />
					</div>
				</div>
				<div className="flex justify-center items-start gap-3 self-stretch ">
					<div className="flex flex-col items-start gap-6 self-stretch ">
						<div className="flex flex-col items-start gap-3 self-stretch xl:flex-row">
							<div className="flex flex-col gap-3 xl:mr-12">
								<div className="self-stretch h-24 flex justify-between flex-col">
									<div className="Sora font-normal text-base bg-linkedInGradient text-transparent bg-clip-text">
										Name
									</div>
									<input
										className="flex items-center pl-4 shrink-0 w-[302px] h-14 rounded-r-lg rounded-s-lg border border-solid border-darkBlue bg-borderBackground sm:w-[400px] md:w-[480px]"
										placeholder="Enter full name"
										type="text"
									></input>
								</div>
								<div className="self-stretch h-24 flex justify-between flex-col">
									<div className="Sora font-normal text-base bg-linkedInGradient text-transparent bg-clip-text">
										Company
									</div>
									<div className="flex items-center relative shrink-0 w-[302px] h-14 rounded-r-lg rounded-s-lg border border-solid border-darkBlue bg-borderBackground sm:w-[400px] md:w-[480px]">
										<input
											className="flex items-center pl-4 shrink-0 w-[302px] h-14 rounded-r-lg rounded-s-lg border border-solid border-darkBlue bg-borderBackground sm:w-[400px] md:w-[480px]"
											placeholder="Enter the name of your company."
											type="text"
										></input>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-3 xl:ml-20">
								<div className="self-stretch h-24 flex justify-between flex-col">
									<div className="Sora font-normal text-base bg-linkedInGradient text-transparent bg-clip-text">
										Email
									</div>
									<div className="flex items-center relative shrink-0 w-[302px] h-14 rounded-r-lg rounded-s-lg border border-solid border-darkBlue bg-borderBackground sm:w-[400px] md:w-[480px]">
										<input
											className="flex items-center pl-4 shrink-0 w-[302px] h-14 rounded-r-lg rounded-s-lg border border-solid border-darkBlue bg-borderBackground sm:w-[400px] md:w-[480px]"
											placeholder="Please enter your Email ID"
											type="text"
										></input>
									</div>
								</div>
								<div className="self-stretch h-24 flex justify-between flex-col">
									<div className="Sora font-normal text-base bg-linkedInGradient text-transparent bg-clip-text">
										Purpose
									</div>
									<div className="flex items-center relative shrink-0 w-[302px] h-14 rounded-r-lg rounded-s-lg border border-solid border-darkBlue bg-borderBackground sm:w-[400px] md:w-[480px]">
										<input
											className="flex items-center pl-4 shrink-0 w-[302px] h-14 rounded-r-lg rounded-s-lg border border-solid border-darkBlue bg-borderBackground sm:w-[400px] md:w-[480px]"
											placeholder="Write a bit about your purpose."
											type="text"
										></input>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button className="h-12 w-48">
					<div className="flex items-center justify-center w-48 h-12 shrink-0 rounded-s-xl rounded-r-xl bg-linkedInGradient shadow-xs">
						<div className="Sora text-base font-semibold text-black">
							Submit
						</div>
					</div>
				</button>
			</div>
		</div>
	);
}

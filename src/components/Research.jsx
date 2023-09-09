import arrow from "../assets/arrow.png";
export default function Research() {
	return (
		<div className="flex px-6 py-12 justify-center items-center gap-2 self-stretch w-full">
			<div className="flex flex-col items-center gap-6 md:items-start ">
				<div className="Sora text-3xl font-normal bg-ourWorkGradient text-transparent bg-clip-text">
					Our Research
				</div>
				<div className="flex py-6 px-9 flex-col gap-2 items-between justify-center border border-solid border-iceland rounded-s-3xl rounded-r-3xl bg-tertiaryGradient shadow-xl 2xl:w-[1000px]">
					<div className="flex flex-col items-between justify-around gap-6 md:flex-row">
						<div className="flex flex-col items-start gap-5 max-w-xs">
							<div className="WorkSans text-xl font-normal bg-secondaryGradient text-transparent bg-clip-text">
								Decentralized Identities
							</div>
							<div className="WorkSans text-base font-normal text-heroContent">
								DSI Protocol is an identity and credential protocol providing
								entire identity infrastructure over public and permissioned
								blockchains to Dapps, protocols and Enterprises.
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

						<div className="w-full border border-white border-r-2 md:border-r-0 md:w-0 md:h-[300px] md:border-t-2 lg:h-[220px] xl:h-[250px] 2xl:h-[200px]"></div>

						<div className="flex flex-col items-start gap-5 max-w-sm">
							<div className="WorkSans text-xl font-normal bg-secondaryGradient text-transparent bg-clip-text">
								On-Chain Credit Scores
							</div>
							<div className="WorkSans text-base font-normal text-heroContent">
								Credit Scoring Model is a generalized methodology depicting the
								credit worthiness of a user based on their on-chain and
								off-chain data. Our scoring methodology follows multiple
								differentiated models with the main goal of verifying whether
								the user is financial responsible or not.
							</div>
							<a
								href="https://anant-moona.gitbook.io/credit-scoring-model/"
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
					</div>
				</div>
			</div>
		</div>
	);
}

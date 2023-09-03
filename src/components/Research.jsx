import arrow from "../assets/arrow.png";
export default function Research() {
	return (
		<div className="flex px-6 py-12 justify-center items-center gap-2 self-stretch bg-headerBg">
			<div className="flex flex-col items-center gap-6">
				<span className="Sora text-heroContent text-3xl font-normal">
					Our Research
				</span>
				<div className="flex py-6 px-9 flex-col gap-2 items-start justify-center border border-solid border-iceland rounded-s-3xl rounded-r-3xl bg-tertiaryGradient shadow-xl">
					<div className="flex flex-col items-center justify-center gap-6">
						<div className="flex flex-col items-start gap-5">
							<span className="WorkSans text-xl font-normal bg-secondaryGradient text-transparent bg-clip-text">
								Decentralized Identities
							</span>
							<span className="WorkSans text-base font-normal text-heroContent">
								DSI Protocol is an identity and credential protocol providing
								entire identity infrastructure over public and permissioned
								blockchains to Dapps, protocols and Enterprises.
							</span>
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
							<span className="WorkSans text-xl font-normal bg-secondaryGradient text-transparent bg-clip-text">
								On-Chain Credit Scores
							</span>
							<span className="WorkSans text-base font-normal text-heroContent">
								Credit Scoring Model is a generalized methodology depicting the
								credit worthiness of a user based on their on-chain and
								off-chain data. Our scoring methodology follows multiple
								differentiated models with the main goal of verifying whether
								the user is financial responsible or not.
							</span>
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

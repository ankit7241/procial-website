import envolope from "../assets/envelope.png";
import procialLogoHero from "../assets/procialLogoHero.png";

export default function Hero() {
	return (
		<div className="h-[980px] overflow-x-hidden self-stretch bg-headerBg pt-24">
			<div className="h-[600px] shrink-0 opacity-100 bg-procialLogoBackground bg-cover bg-no-repeat space-y-10">
				<div className="flex-col items-start gap-9 inline-flex justify-center pl-14">
					<div className="Source-Sans text-3xl bg-heroText text-transparent bg-clip-text w-full flex flex-col">
						<span>Reshaping Finance,</span>
						<span> One Block at a Time</span>
					</div>
					<p className="Sora text-xl font-normal text-heroContent pr-10">
						We are a team of researchers, community builders and engineers
						researching and building infrastructure for Decentralized Finance
						and blockchain.
					</p>
					<button className="flex items-center gap-2 rounded">
						<img src={envolope} className="w-8 h-8" />
						<span className="WorkSans text-xl font-normal leading-7 text-heroContent">
							Contact Us
						</span>
					</button>
				</div>

				<div className="h-[400px] w-[393px] bg-vector12 flex items-center justify-center ">
					<div className="h-[363px] w-[368px] bg-vector11 flex items-center justify-center">
						<div className="h-[335px] w-[332px] bg-vector10 flex items-center justify-center">
							<div className="h-[303px] w-[302px] opacity-100 bg-vector9 flex items-center justify-center">
								<div className="h-[272px] w-[271px] opacity-100 bg-vector8 flex items-center justify-center">
									<div className="h-[240px] w-[240px] opacity-100 bg-vector7 flex items-center justify-center">
										<div className="h-[209px] w-[209px] opacity-100 bg-vector6 flex items-center justify-center">
											<div className="h-[176px] w-[179px] opacity-100 bg-vector5 flex items-center justify-center">
												<div className="h-[145px] w-[149px] opacity-100 bg-vector4 flex items-center justify-center">
													<div className="h-[113px] w-[118px] opacity-100 bg-vector3 flex items-center justify-center">
														<div className="h-[84px] w-[87px] opacity-100 bg-vector2 flex items-center justify-center">
															<div className="h-[61px] w-[60px] opacity-100 bg-vector1 flex items-center justify-center">
																<img
																	src={procialLogoHero}
																	className="h-40 w-20 shrink-0"
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

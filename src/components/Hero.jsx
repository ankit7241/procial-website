import envolope from "../assets/envelope.png";
import procialLogoHero from "../assets/procialLogoHero.png";

export default function Hero() {
	return (
		<div className="h-[980px] self-stretch pt-24 ">
			<div className="h-[600px] shrink-0 opacity-100 bg-procialLogoBackground bg-contain bg-no-repeat space-y-10 md:h-[800px]">
				<div className="flex-col items-start gap-9 inline-flex justify-center pl-14">
					<div className="Source-Sans font-bold text-3xl bg-heroText text-transparent bg-clip-text w-full flex flex-col 2xl:text-5xl">
						<span>Reshaping Finance,</span>
						<span> One Block at a Time</span>
					</div>
					<p className="Sora text-xl font-normal text-heroContent pr-10 md:w-3/4 2xl:w-1/3">
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

				{/* <div className="flex justify-end opacity-50 items-end ">
					<div className="h-[400px] w-[393px] bg-vector12 flex items-center justify-center">
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
				</div> */}
				<div className="flex justify-end opacity-50 items-end 2xl:absolute 2xl:right-40 2xl:top-80">
					<div
						style={{ height: "25em", width: "24.5625em" }}
						className="bg-vector12 flex items-center justify-center 2xl:transform 2xl:scale-[2] "
					>
						<div
							style={{ height: "22.6875em", width: "23em" }}
							className="bg-vector11 flex items-center justify-center"
						>
							<div
								style={{ height: "20.9375em", width: "20.75em" }}
								className="bg-vector10 flex items-center justify-center"
							>
								<div
									style={{ height: "18.9375em", width: "18.875em" }}
									className="bg-vector9 flex items-center justify-center"
								>
									<div
										style={{ height: "17em", width: "16.9375em" }}
										className="bg-vector8 flex items-center justify-center"
									>
										<div
											style={{ height: "15em", width: "15em" }}
											className="bg-vector7 flex items-center justify-center"
										>
											<div
												style={{ height: "13.0625em", width: "13.0625em" }}
												className="bg-vector6 flex items-center justify-center"
											>
												<div
													style={{ height: "11em", width: "11.1875em" }}
													className="bg-vector5 flex items-center justify-center"
												>
													<div
														style={{ height: "9.0625em", width: "9.3125em" }}
														className="bg-vector4 flex items-center justify-center"
													>
														<div
															style={{ height: "7.0625em", width: "7.375em" }}
															className="bg-vector3 flex items-center justify-center"
														>
															<div
																style={{ height: "5.25em", width: "5.4375em" }}
																className="bg-vector2 flex items-center justify-center"
															>
																<div
																	style={{
																		height: "3.8125em",
																		width: "3.75em",
																	}}
																	className="bg-vector1 flex items-center justify-center"
																>
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
		</div>
	);
}

import procialLogo from "../assets/procialLogo.png";
import telegramLogo from "../assets/telegramLogo.png";
import linkedInLogo from "../assets/linkedInLogo.png";
export default function Header() {
	return (
		<div className="flex pt-12 pb-4 px-9 flex-col justify-center items-center gap-2.5 self-stretch">
			<div className="flex w-full	justify-between items-center">
				<div className="flex justify-end items-center gap-2 ">
					<img src={procialLogo} className="w-5 h-9" />
					<span className="Khand bg-primaryGradient text-transparent bg-clip-text text-4xl">
						PROCIAL
					</span>
				</div>
				<div className="flex justify-end items-center gap-2">
					<img src={linkedInLogo} className="w-9 h-9" />
					<img src={telegramLogo} className="w-9 h-9" />
				</div>
			</div>
		</div>
	);
}

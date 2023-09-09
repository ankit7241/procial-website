/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				headerBg: "#0D0D0D",
				heroContent: "#D1D1D1",
				iceland: "#338BC2",
				boxColour: "#191A23",
				workWithUs: "#C4D4F2",
				iceland: "#6D98C2",
				rectangle: "#8395BC1A",
				contactCard: "rgba(186, 186, 186, 0.51)",
				darkBlue: "#4285F4",
				borderBackground: "#FFF",
				placeholderFont: "#191A23",
			},
			fontFamily: {
				khand: ["Khand"],
				sourceSans: ["Source-Sans"],
				sora: ["Sora"],
				workSans: ["Work-Sans"],
			},
			backgroundImage: {
				primaryGradient:
					"linear-gradient(295deg, #E33FC5 10.16%, #7D0AE8 90.53%)",
				secondaryGradient:
					"linear-gradient(224deg, #B9D0E6 3.65%, #6D98C2 102.22%)",
				tertiaryGradient:
					"radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
				ourWorkGradient:
					"linear-gradient(224deg, #B9D0E6 3.65%, #6D98C2 102.22%)",
				linkedInGradient: "linear-gradient(135deg, #338BC2 0%, #DFFEE6 100%)",
				heroText: "linear-gradient(295deg, #E33FC5 10.16%, #7D0AE8 90.53%)",
				procialLogoBackground: "url(/src/assets/procialLogoBackground.png)",
				vector1: "url(/src/assets/vector1.png)",
				vector2: "url(/src/assets/vector2.png)",
				vector3: "url(/src/assets/vector3.png)",
				vector4: "url(/src/assets/vector4.png)",
				vector5: "url(/src/assets/vector5.png)",
				vector6: "url(/src/assets/vector6.png)",
				vector7: "url(/src/assets/vector7.png)",
				vector8: "url(/src/assets/vector8.png)",
				vector9: "url(/src/assets/vector9.png)",
				vector10: "url(/src/assets/vector10.png)",
				vector11: "url(/src/assets/vector11.png)",
				vector12: "url(/src/assets/vector12.png)",
			},
			boxShadow: {
				xl: " 0px 5px 0px 0px #191A23",
				sm: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
				xs: "0px 4px 19px 0px rgba(119, 147, 65, 0.30)",
			},
		},
	},
	plugins: [],
};

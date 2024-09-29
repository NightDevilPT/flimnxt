import React from "react";
import IconComponent from "@/utils/icons";
import { Icons } from "@/interfaces/icons.enum";
import HorizontalLogo from "../../horizontal/horizontalLogo";

const HorizontalHeader = () => {
	return (
		<header className="h-16 hidden max-md:block">
			<div className="container h-full flex justify-between items-center">
				<div className="w-auto flex justify-center items-center gap-3 cursor-pointer">
					<IconComponent
						name={Icons.LOGO}
						size={36}
						className="text-secondary"
					/>
					<HorizontalLogo />
				</div>
				<div></div>
			</div>
		</header>
	);
};

export default HorizontalHeader;

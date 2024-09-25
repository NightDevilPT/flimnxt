import { Icons } from "@/interfaces/icons.enum";
import IconComponent from "@/utils/icons";
import React from "react";
import HorizontalLogo from "../../horizontal/horizontalLogo";
import { Divider } from "@nextui-org/react";

const VerticalLogo = () => {
	return (
		<div className="w-full h-auto flex justify-center items-center flex-col gap-4 px-4 max-lg:px-2 max-lg:hidden">
			<div className="w-full flex justify-center items-center gap-3 cursor-pointer">
				<IconComponent
					name={Icons.LOGO}
					size={36}
					className="text-secondary"
				/>
				<HorizontalLogo className="hidden lg:block" />
			</div>
			<Divider orientation="horizontal" className="w-full" />
		</div>
	);
};

export default VerticalLogo;

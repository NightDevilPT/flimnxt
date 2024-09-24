import React from "react";
import VerticalLogo from "../VerticalLogo";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
	Tooltip,
} from "@nextui-org/react";
import IconComponent from "@/utils/icons";
import { Icons } from "@/interfaces/icons.enum";

const VerticalSidebar = () => {
	const commonClasses =
		"text-[12px] flex justify-start items-center flex-col h-auto py-2 w-auto px-0 w-auto rounded-md bg-transparent hover:bg-secondary text-foreground/80 hover:text-foreground transition-all duration-300";
	return (
		<div className="flex flex-col justify-between w-20 border-r-1 border-default-100 py-5">
			<VerticalLogo />
			<div className="w-full flex flex-col gap-2 px-4">
				<Tooltip content="Home" placement="right" color="secondary">
					<Button
						className={commonClasses}
						isIconOnly={true}
						size="sm"
					>
						{IconComponent({ name: Icons.HOMEFILL, size: 24 })}
					</Button>
				</Tooltip>
				<Dropdown placement="right">
					<DropdownTrigger>
						<Button
							className={commonClasses}
							isIconOnly={true}
							size="sm"
						>
							{IconComponent({
								name: Icons.CATEGORYFILL,
								size: 24,
							})}
						</Button>
					</DropdownTrigger>
					<DropdownMenu color="default">
						<DropdownItem color="secondary">Action</DropdownItem>
						<DropdownItem color="secondary">Comedy</DropdownItem>
						<DropdownItem color="secondary">Drama</DropdownItem>
						<DropdownItem color="secondary">Horror</DropdownItem>
						<DropdownItem color="secondary">Romance</DropdownItem>
						<DropdownItem color="secondary">Thriller</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
			<div className="w-full px-4 flex flex-col gap-2">
				<Tooltip content="Setting" placement="right" color="secondary">
					<Button
						className={commonClasses}
						isIconOnly={true}
						size="sm"
					>
						{IconComponent({ name: Icons.SETTINGFILL, size: 24 })}
					</Button>
				</Tooltip>
			</div>
		</div>
	);
};

export default VerticalSidebar;

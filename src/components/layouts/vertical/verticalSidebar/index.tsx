import React, { useState, useEffect } from "react";
import VerticalLogo from "../VerticalLogo";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
	Tooltip,
	Divider,
} from "@nextui-org/react";
import IconComponent from "@/utils/icons";
import { Icons } from "@/interfaces/icons.enum";

const VerticalSidebar = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [isMediumScreen, setIsMediumScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 768);
			setIsMediumScreen(window.innerWidth < 1280);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const commonClasses =
		"w-full flex justify-start items-center h-auto py-2 gap-3 px-5 rounded-md bg-transparent hover:bg-secondary text-foreground/80 hover:text-foreground transition-all duration-300 max-lg:px-2 max-lg:justify-center";

	const wrapWithTooltip = (content: string, button: React.ReactNode) => {
		return isMediumScreen ? (
			<Tooltip
				content={content}
				placement={isSmallScreen ? "top" : "right"}
				color="secondary"
				size="md"
			>
				{button}
			</Tooltip>
		) : (
			button
		);
	};

	return (
		<div
			className={`flex flex-col justify-between border-r-1 border-default-100 py-2 bg-background
				${isSmallScreen ? "absolute bottom-0 w-full z-50" : "w-48"}
				${isSmallScreen ? "max-md:flex-row left-0" : "max-lg:w-20"}
				${isSmallScreen ? "max-md:border-t-1" : ""}`}
		>
			<VerticalLogo />
			<div className="w-full grid grid-cols-1 gap-2 px-4 max-md:px-2 max-md:grid-cols-5">
				{wrapWithTooltip(
					"Home",
					<Button className={commonClasses} size="md" isIconOnly>
						{IconComponent({ name: Icons.HOMEFILL, size: 24 })}
						<span className="hidden ml-2 lg:block !text-md">Home</span>
					</Button>
				)}
				{wrapWithTooltip(
					"Movies",
					<Button className={commonClasses} size="md" isIconOnly>
						{IconComponent({ name: Icons.MOVIEFILL, size: 24 })}
						<span className="hidden ml-2 lg:block !text-md">Movies</span>
					</Button>
				)}
				{wrapWithTooltip(
					"Tv Series",
					<Button className={commonClasses} size="md" isIconOnly>
						{IconComponent({ name: Icons.TVFILL, size: 24 })}
						<span className="hidden ml-2 lg:block !text-md">Tv Series</span>
					</Button>
				)}
				<Dropdown placement={isSmallScreen ? "top" : "right"}>
					<DropdownTrigger>
						<Button className={commonClasses} size="md" isIconOnly>
							{IconComponent({ name: Icons.CATEGORYFILL, size: 24 })}
							<span className="hidden ml-2 lg:block !text-md">Categories</span>
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
				{wrapWithTooltip(
					"Settings",
					<Button className={`${commonClasses} md:hidden`} size="md" isIconOnly>
						{IconComponent({ name: Icons.SETTINGFILL, size: 24 })}
						<span className="hidden ml-2 lg:block !text-md">Settings</span>
					</Button>
				)}
			</div>
			<div className="w-full px-4 grid grid-cols-1 gap-2 max-md:hidden">
				<Divider orientation="horizontal" className="w-full max-md:hidden" />
				{wrapWithTooltip(
					"Settings",
					<Button className={commonClasses} size="md" isIconOnly>
						{IconComponent({ name: Icons.SETTINGFILL, size: 24 })}
						<span className="hidden ml-2 lg:block !text-md">Settings</span>
					</Button>
				)}
			</div>
		</div>
	);
};

export default VerticalSidebar;

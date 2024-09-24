"use client";

import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import React, { useState } from "react";

const HorizontalNav = () => {
	const [active, setActive] = useState("home");
	const handleClick = (tab: string) => {
		setActive(tab);
	};
	const commonClasses =
		"text-sm px-4 py-1 rounded-md bg-transparent hover:bg-secondary text-foreground/80 hover:text-foreground transition-all duration-300";
	return (
		<div className="flex items-center gap-1">
			<button className={commonClasses}>Home</button>
			<button className={commonClasses}>Movies</button>
			<button className={commonClasses}>Tv Series</button>
			<Dropdown>
				<DropdownTrigger>
					<button className={commonClasses}>Categories</button>
				</DropdownTrigger>
				<DropdownMenu>
					<DropdownItem color="secondary">Action</DropdownItem>
					<DropdownItem color="secondary">Comedy</DropdownItem>
					<DropdownItem color="secondary">Drama</DropdownItem>
					<DropdownItem color="secondary">Horror</DropdownItem>
					<DropdownItem color="secondary">Romance</DropdownItem>
					<DropdownItem color="secondary">Thriller</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export default HorizontalNav;

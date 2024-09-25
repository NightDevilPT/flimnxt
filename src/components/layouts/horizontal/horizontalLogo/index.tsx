import React from "react";

const HorizontalLogo = ({ className }: { className?: string }) => {
	return (
		<div className={`h-full w-auto flex justify-center items-center text-2xl font-bold text-foreground ${className}`}>
			<span className="text-secondary">F</span>ilm
			<span className="text-secondary">N</span>xt
		</div>
	);
};

export default HorizontalLogo;

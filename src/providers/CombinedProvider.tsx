// app/providers.tsx
"use client";

import React from "react";
import { NextProviders } from "./NextProvider/NextProvider";
import ReduxProvider from "./ReduxProvider/ReduxProvider";

export function CombinedProvider({ children }: { children: React.ReactNode }) {
	return (
		<React.Fragment>
			<NextProviders>
				<ReduxProvider>{children}</ReduxProvider>
			</NextProviders>
		</React.Fragment>
	);
}

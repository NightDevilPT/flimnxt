// app/providers.tsx
"use client";

import React from "react";
import { NextProviders } from "./NextProvider/NextProvider";
import ReduxProvider from "./ReduxProvider/ReduxProvider";
import HorizontalLayout from "@/components/layouts/horizontal";
import VerticalLayout from "@/components/layouts/vertical";

export function CombinedProvider({ children }: { children: React.ReactNode }) {
	return (
		<React.Fragment>
			<NextProviders>
				<ReduxProvider>
					<VerticalLayout>{children}</VerticalLayout>
				</ReduxProvider>
			</NextProviders>
		</React.Fragment>
	);
}

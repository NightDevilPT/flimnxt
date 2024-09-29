// app/providers.tsx
"use client";

import React from "react";
import ReduxProvider from "./ReduxProvider/ReduxProvider";
import VerticalLayout from "@/components/layouts/vertical";
import { NextProviders } from "./NextProvider/NextProvider";
import VerticalHeader from "@/components/layouts/vertical/VerticalHeader";

export function CombinedProvider({ children }: { children: React.ReactNode }) {
	return (
		<React.Fragment>
			<NextProviders>
				<ReduxProvider>
					<VerticalLayout>
						<VerticalHeader />
						{children}
					</VerticalLayout>
				</ReduxProvider>
			</NextProviders>
		</React.Fragment>
	);
}

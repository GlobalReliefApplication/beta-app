import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderServer from "@/components/header/header-server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Shelter - Host Refugees and Displaced People",
	description: "Host refugees and displaced people.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="h-full bg-background-800">
			<body className={inter.className}>
				<HeaderServer />
				{children}
			</body>
		</html>
	);
}

import "./globals.css";
import Navbar from "@/components/Navbar"; // client component

export const metadata = {
  title: "My Portfolio",
  description: "Next.js Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, minHeight: "100vh" }}>
        <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}

import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: 'Firman',
    lastName: 'Khoiril'
  }
  
  return (
   <main className="flex h-screen w-full font-inter">
    <Sidebar users={loggedIn} />
    {children}
   </main>
  );
}

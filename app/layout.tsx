import './globals.css';
import MainNav from '../components/MainNav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="w-44">
          <MainNav />
        </div>
        <div className="ml-44">{children}</div>
      </body>
    </html>
  );
}

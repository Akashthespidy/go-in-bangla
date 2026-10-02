import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LearnLayoutClient } from '../components/LearnLayoutClient';

export default function LearnLayout({ children }: LayoutProps<'/learn'>) {
  return (
    <>
      <Navbar />
      <LearnLayoutClient>{children}</LearnLayoutClient>
      <Footer />
    </>
  );
}

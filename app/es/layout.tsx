import { ReactNode } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function EsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header lang="es" />
      <main>{children}</main>
      <Footer lang="es" />
    </>
  );
}

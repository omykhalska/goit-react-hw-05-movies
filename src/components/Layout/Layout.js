import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation';
import { Header } from './Layout.styled';

export function Layout() {
  return (
    <>
      <Header>
        <Navigation></Navigation>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

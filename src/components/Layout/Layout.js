import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation';
import { Header, Main } from './Layout.styled';

export function Layout() {
  return (
    <>
      <Header>
        <Navigation></Navigation>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

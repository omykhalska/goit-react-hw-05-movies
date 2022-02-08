import { Suspense } from 'react';
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
        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
}

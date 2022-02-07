import { Nav, StyledNavLink } from './Navigation.styled';

export function Navigation() {
  return (
    <Nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </Nav>
  );
}

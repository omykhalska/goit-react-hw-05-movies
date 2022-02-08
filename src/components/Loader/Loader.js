import { BallTriangle } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export function Loader() {
  return (
    <LoaderWrapper>
      <BallTriangle color="#333" ariaLabel="loading" />
    </LoaderWrapper>
  );
}

import { useNavigate } from 'react-router-dom';
import { Button } from './GoBackButton.styled';

export function GoBackButton({ location }) {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(location?.state?.from ?? '/movies')}>
      ← Go back
    </Button>
  );
}

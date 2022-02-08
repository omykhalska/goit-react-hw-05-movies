import PropTypes from 'prop-types';
import { H1 } from './PageTitle.styled';

export function PageTitle({ text }) {
  return <H1>{text}</H1>;
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

import { Btn, MainButtonStyle } from './MainButton.styles';
import { Link } from 'react-router-dom';

interface MainButtonTypes {
  to: string;
  buttonText: string;
}

export default function MainButton(props: MainButtonTypes) {

  return (
    <MainButtonStyle>
      {props.to ? (
        <Link to={props.to}>
          <Btn>
            <span>{props.buttonText}</span>
          </Btn>
        </Link>
      ) : (
        <Btn>
          <span>{props.buttonText}</span>
        </Btn>
      )}
    </MainButtonStyle>
  );
}

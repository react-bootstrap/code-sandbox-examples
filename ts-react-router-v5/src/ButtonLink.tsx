import * as React from 'react';
import Button, { ButtonProps } from 'react-bootstrap/Button';

interface ButtonLinkProps extends ButtonProps {
  navigate: () => void;
  children?: React.ReactNode;
}

function isModifiedEvent(event: React.MouseEvent) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ navigate, ...props }) => {
  const handleClick = (event: React.MouseEvent) => {
    props.onClick?.(event as any);

    if (
      !event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      (!props.target || props.target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
      event.preventDefault();
      navigate();
    }
  }

  return (
    <Button {...props} onClick={handleClick} />
  )
}

export default ButtonLink;
import * as React from 'react';
import Button, { ButtonProps } from 'react-bootstrap/Button';
import { LinkProps, useHref, useLinkClickHandler } from 'react-router-dom';

interface ButtonLinkProps
  extends ButtonProps,
    Pick<LinkProps, 'replace' | 'state' | 'to'> {
  children?: React.ReactNode;
}

const ButtonLink = React.forwardRef<HTMLButtonElement, ButtonLinkProps>(
  ({ onClick, replace = false, state, target, to, ...props }, ref) => {
    let href = useHref(to);
    let handleClick = useLinkClickHandler(to, { replace, state, target });

    return (
      <Button
        {...props}
        href={href}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) {
            handleClick(event as any);
          }
        }}
        ref={ref}
        target={target}
      />
    );
  }
);

export default ButtonLink;

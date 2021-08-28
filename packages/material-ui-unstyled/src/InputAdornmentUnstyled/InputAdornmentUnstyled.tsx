import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useInputAdornment, { UseInputAdornmentProps } from './useInputAdornment';
import classes from './inputAdornmentUnstyledClasses';
import appendOwnerState from '../utils/appendOwnerState';

export interface InputAdornmentUnstyledProps extends UseInputAdornmentProps {
  /**
   * Class name applied to the root element.
   */
  className?: string;
  /**
   * The component used for the Root slot.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType;
}

/**
 *
 * Demos:
 *
 * - [Text Fields](https://material-ui.com/components/text-fields/)
 *
 * API:
 *
 * - [InputAdornmentUnstyled API](https://material-ui.com/api/input-adornment-unstyled/)
 */
 const InputAdornmentUnstyled = React.forwardRef(function InputAdornment(
  props: InputAdornmentUnstyledProps,
  ref: React.ForwardedRef<any>,
 ) {
  const {
    children,
    className,
    component = 'div',
    disablePointerEvents = false,
    position,
    ...otherProps
  } = props;

  const ownerState: InputAdornmentState = {
    ...props,
    position,
  };

  const Root: React.ElementType = component ?? 'span';
  const rootProps = appendOwnerState(Root, { ...otherProps }, ownerState);

  return (
    <Root>
      {/* To have the correct vertical alignment baseline */}
      {position === 'start' ? (
        /* notranslate needed while Google Translate will not fix zero-width space issue */
        /* eslint-disable-next-line react/no-danger */
        <span className="notranslate" dangerouslySetInnerHTML={{ __html: '&#8203;' }} />
      ) : null}
      {children}
    </Root>
  );
});

export default InputAdornmentUnstyled;

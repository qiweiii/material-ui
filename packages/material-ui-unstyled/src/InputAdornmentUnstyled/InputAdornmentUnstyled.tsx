import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import InputAdornmentProps from './InputAdornmentProps';
import classes from './inputAdornmentUnstyledClasses';
import appendOwnerState from '../utils/appendOwnerState';

export interface InputAdornmentUnstyledProps extends InputAdornmentProps {
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
    component,
    disablePointerEvents = false,
    position,
    ...otherProps
  } = props;

  const ownerState = {
    ...props,
    disablePointerEvents,
  };

  const Root: React.ElementType = component ?? 'span';
  const rootProps = appendOwnerState(Root, { ...otherProps }, ownerState);

  const stateClasses = {
    [classes.disablePointerEvents]: disablePointerEvents,
  };

  return (
    <Root
      ref={ref}
      {...rootProps}
      className={clsx(classes.root, stateClasses, className, rootProps?.className)}
    >
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

InputAdornmentUnstyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: PropTypes.node,
  /**
   * Class name applied to the root element.
   */
  className: PropTypes.string,
  /**
   * The component used for the Root slot.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents: PropTypes.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: PropTypes.oneOf(['end', 'start']).isRequired,
} as any;

export default InputAdornmentUnstyled;

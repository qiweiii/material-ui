import * as React from 'react';

export default interface InputAdornmentProps {
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children?: React.ReactNode;
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: 'start' | 'end';
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents?: boolean;
}

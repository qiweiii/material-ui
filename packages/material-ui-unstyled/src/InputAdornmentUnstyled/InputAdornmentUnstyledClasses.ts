import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';

export interface inputAdornmentUnstyledClasses {
  /** Class applied to the root element. */
  root: string;
  /** Class applied to the root element if `position="start"`. */
  positionStart: string;
  /** Class applied to the root element if `position="end"`. */
  positionEnd: string;
  /** Class applied to the root element if `disablePointerEvents={true}`. */
  disablePointerEvents: string;
}

export type inputAdornmentUnstyledClassKey = keyof inputAdornmentUnstyledClasses;

export function getInputAdornmentUtilityClass(slot: string): string {
  return generateUtilityClass('MuiInputAdornment', slot);
}

const inputAdornmentUnstyledClasses: inputAdornmentUnstyledClasses = generateUtilityClasses('MuiInputAdornment', [
  'root',
  'positionStart',
  'positionEnd',
  'disablePointerEvents',
]);

export default inputAdornmentUnstyledClasses;

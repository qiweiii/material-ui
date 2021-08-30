import generateUtilityClass from '../generateUtilityClass';
import generateUtilityClasses from '../generateUtilityClasses';

export interface InputAdornmentUnstyledClasses {
  /** Class applied to the root element. */
  root: string;
  /** Class applied to the root element if `disablePointerEvents={true}`. */
  disablePointerEvents: string;
}

export type InputAdornmentUnstyledClassKey = keyof InputAdornmentUnstyledClasses;

export function getInputAdornmentUtilityClass(slot: string): string {
  return generateUtilityClass('MuiInputAdornment', slot);
}

const inputAdornmentUnstyledClasses: InputAdornmentUnstyledClasses = generateUtilityClasses('MuiInputAdornment', [
  'root',
  'disablePointerEvents',
]);

export default inputAdornmentUnstyledClasses;

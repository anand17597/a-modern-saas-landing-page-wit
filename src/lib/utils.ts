type ClassValue = string | boolean | undefined | null | { [key: string]: boolean } | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];
  inputs.forEach(input => {
    if (typeof input === 'string') {
      classes.push(input);
    } else if (typeof input === 'boolean' && input) {
      // do nothing for true boolean, it's just a condition
    } else if (typeof input === 'object' && input !== null) {
      if (Array.isArray(input)) {
        classes.push(cn(...input)); // Recursively flatten arrays
      } else {
        for (const key in input) {
          if (Object.prototype.hasOwnProperty.call(input, key) && input[key]) {
            classes.push(key);
          }
        }
      }
    }
  });
  // Filter out any empty strings or falsey values that might result from recursive calls
  return classes.filter(Boolean).join(' ');
}
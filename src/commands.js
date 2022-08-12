/**
 * Share command metadata from a common spot to be used for both runtime
 * and registration.
 */

export const COMMAND = {
  name: 'eurydice',
  description: 'Evaluate an Eurydice expression.',
  options: [
    {
      type: 3,
      name: 'expression',
      description: 'The Eurydice expression to evaluate.',
      required: true,
    },
  ],
};

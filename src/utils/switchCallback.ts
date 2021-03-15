/**
 * @name switchCallback
 * @description Switch callback based on condition. If the condition evaluates to true, it returns the callback, otherwise returns an empty function.
 */
export const switchCallback = <C>(condition: boolean, callback: C): C | (() => void) => {
  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  if (!condition) return () => {}
  return callback
}

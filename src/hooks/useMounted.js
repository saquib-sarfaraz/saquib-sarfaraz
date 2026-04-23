/**
 * Custom hook to track if component is mounted
 * Simple boolean - initialized to false, set to true on first call
 */
let _isMounted = false;

export default function useMounted() {
  if (!_isMounted) {
    _isMounted = true;
  }
  return _isMounted;
}

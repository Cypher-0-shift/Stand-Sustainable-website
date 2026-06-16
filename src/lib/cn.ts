/**
 * Utility: Merge class names with conflict resolution
 * Simple implementation — no external dependency needed for this project scope.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function cn(...inputs: (string | false | undefined | null | 0)[]) {
  return inputs.filter(Boolean).join(' ')
}

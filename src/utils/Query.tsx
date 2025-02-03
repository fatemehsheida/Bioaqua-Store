export default function Query(
  currentParams: Record<string, string>,
  key: string,
  value: string | null | undefined
): string {
  const newParams = { ...currentParams };

  if (value === null || value === undefined || value === "") {
    delete newParams[key];
  } else {
    newParams[key] = value;
  }

  return new URLSearchParams(newParams).toString();
}

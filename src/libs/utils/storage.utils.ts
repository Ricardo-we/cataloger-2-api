<<<<<<< HEAD
export function localStorageExists(storageKey: string) {
  const storedItemExists =
    typeof window !== "undefined" && !!localStorage.getItem(storageKey);
  return storedItemExists;
}
=======
export function localStorageExists(storageKey: string){
    const storedItemExists = (typeof window !== "undefined" && !!localStorage.getItem(storageKey));
    return storedItemExists;
}
>>>>>>> f3d221612365ef0158bda0608cb83552dd3c74e9

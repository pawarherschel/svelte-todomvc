export function generateRandomID(): string {
    return Math.random().toString(16).slice(2);
}

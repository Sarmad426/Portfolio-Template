export function calculateAge(
    birthYear: number,
    birthMonth: number,
    birthDate: number
): number {
    const birthDateObj = new Date(birthYear, birthMonth - 1, birthDate);
    const now = new Date();
    let age = now.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = now.getMonth() - birthDateObj.getMonth();
    if (
        monthDiff < 0 ||
        (monthDiff === 0 && now.getDate() < birthDateObj.getDate())
    ) {
        age--;
    }
    return age;
}
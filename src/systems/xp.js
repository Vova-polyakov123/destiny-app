export function addXP(xp, value) {
    return xp + value
}

export function getLevel(xp) {
    return Math.floor(xp / 100) + 1
}
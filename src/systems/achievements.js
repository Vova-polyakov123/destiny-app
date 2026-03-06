export function checkAchievements(xp) {

    let list = []

    if (xp >= 20) list.push("Первый расклад")
    if (xp >= 50) list.push("Искатель судьбы")
    if (xp >= 100) list.push("Мастер таро")

    return list

}
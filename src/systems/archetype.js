export function getArchetype() {

    const types = [
        "Мистик",
        "Воин",
        "Творец",
        "Странник",
        "Пророк",
        "Хранитель"
    ]

    return types[Math.floor(Math.random() * types.length)]

}
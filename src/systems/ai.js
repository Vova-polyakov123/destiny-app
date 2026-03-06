export async function aiPrediction(name) {

    const texts = [

        "Сегодня судьба готовит тебе неожиданный поворот",

        "В ближайшие дни откроется новая возможность",

        "Слушай интуицию — она приведёт тебя к успеху",

        "Вселенная уже готовит тебе подарок"

    ]

    return texts[Math.floor(Math.random() * texts.length)]

}
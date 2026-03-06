import fool from "../assets/tarot/fool.jpg"
import magician from "../assets/tarot/magician.jpg"
import empress from "../assets/tarot/empress.jpg"
import emperor from "../assets/tarot/emperor.jpg"
import tower from "../assets/tarot/tower.jpg"
import sun from "../assets/tarot/sun.jpg"
import moon from "../assets/tarot/moon.jpg"
import star from "../assets/tarot/star.jpg"
import world from "../assets/tarot/world.jpg"
import judgement from "../assets/tarot/judgement.jpg"

const deck = [

    { name: "Шут", img: fool },
    { name: "Маг", img: magician },
    { name: "Императрица", img: empress },
    { name: "Император", img: emperor },
    { name: "Башня", img: tower },
    { name: "Солнце", img: sun },
    { name: "Луна", img: moon },
    { name: "Звезда", img: star },
    { name: "Мир", img: world },
    { name: "Суд", img: judgement }

]

export function drawTarot() {

    let cards = []

    for (let i = 0; i < 3; i++) {

        const card = deck[Math.floor(Math.random() * deck.length)]

        cards.push({
            ...card,
            reversed: Math.random() > 0.5
        })

    }

    return cards

}
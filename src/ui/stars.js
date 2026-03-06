export function createStars() {

    let stars = []

    for (let i = 0; i < 100; i++) {

        stars.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3
        })

    }

    return stars

}
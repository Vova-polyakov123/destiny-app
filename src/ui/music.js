export function playMusic() {

    const audio = new Audio(
        "https://cdn.pixabay.com/audio/2022/10/25/audio_946cbe1e6d.mp3"
    )

    audio.loop = true
    audio.volume = 0.3

    audio.play().catch(() => { })

}
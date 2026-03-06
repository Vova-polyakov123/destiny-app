import bridge from "@vkontakte/vk-bridge"

export function shareApp() {

    bridge.send("VKWebAppShowWallPostBox", {
        message: "🔮 Я получил мистический прогноз в Destiny Oracle!",
        attachments: "54470177"
    })

}
import bridge from "@vkontakte/vk-bridge"

export function payVIP() {

    bridge.send("VKWebAppOpenPayForm", {
        app_id: 123456,
        action: "pay-to-service",
        params: {
            amount: 100,
            description: "VIP прогноз судьбы"
        }
    })

}
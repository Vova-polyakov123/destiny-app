import bridge from "@vkontakte/vk-bridge"

export async function vkAuth() {

    try {

        const user = await bridge.send("VKWebAppGetUserInfo")
        return user

    } catch (e) {

        return null

    }

}
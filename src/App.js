import "./App.css"
import { useState, useEffect } from "react"

import {
    View,
    Panel,
    PanelHeader,
    Group,
    Button,
    Title,
    Text
} from "@vkontakte/vkui"

import "@vkontakte/vkui/dist/vkui.css"

import bridge from "@vkontakte/vk-bridge"



export default function App() {

    const [user, setUser] = useState(null)
    const [tarot, setTarot] = useState([])
    const [archetype, setArchetype] = useState("")
    const [xp, setXp] = useState(0)
    const [achievements, setAchievements] = useState([])
    const [stars, setStars] = useState([])



    useEffect(() => {

        bridge.send("VKWebAppInit")

        createStars()

    }, [])



    // АВТОРИЗАЦИЯ

    async function auth() {

        try {

            const data = await bridge.send("VKWebAppGetUserInfo")

            setUser(data)

        } catch (e) {

            // если не внутри VK — тестовый пользователь

            setUser({
                first_name: "Гость"
            })

        }

    }



    // КОСМОС

    function createStars() {

        let s = []

        for (let i = 0; i < 120; i++) {

            s.push({

                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3

            })

        }

        setStars(s)

    }



    // ТАРО

    function tarotReading() {

        const cards = [

            "Шут",
            "Маг",
            "Императрица",
            "Император",
            "Башня",
            "Солнце",
            "Луна",
            "Звезда",
            "Мир",
            "Суд"

        ]

        let result = []

        for (let i = 0; i < 3; i++) {

            result.push({

                name: cards[Math.floor(Math.random() * cards.length)],
                reversed: Math.random() > 0.5

            })

        }

        setTarot(result)

        let newXP = xp + 20

        setXp(newXP)

        checkAchievements(newXP)

    }



    // АРХЕТИП

    function getArchetype() {

        const types = [

            "Мистик",
            "Странник",
            "Воин",
            "Творец",
            "Пророк",
            "Хранитель",
            "Маг судьбы"

        ]

        const t = types[Math.floor(Math.random() * types.length)]

        setArchetype(t)

        setXp(xp + 10)

    }



    // ДОСТИЖЕНИЯ

    function checkAchievements(value) {

        let a = []

        if (value >= 20) a.push("Первое гадание")

        if (value >= 50) a.push("Искатель судьбы")

        if (value >= 100) a.push("Мастер пророчеств")

        setAchievements(a)

    }



    // ПОДЕЛИТЬСЯ

    function share() {

        bridge.send("VKWebAppShowWallPostBox", {

            message: "🔮 Я проверил свою судьбу в Destiny Oracle!"

        })

    }



    // VK PAY

    function payVIP() {

        bridge.send("VKWebAppOpenPayForm", {

            app_id: 123456,
            action: "pay-to-service",
            params: {
                amount: 100,
                description: "VIP прогноз судьбы"
            }

        })

    }



    return (

        <View activePanel="main">

            <Panel id="main">

                <PanelHeader>

                    🔮 Destiny Oracle

                </PanelHeader>

                <Group>



                    {/* КОСМОС */}

                    <div style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "black",
                        zIndex: -1
                    }}>

                        {stars.map(star => (

                            <div
                                key={star.id}
                                style={{
                                    position: "absolute",
                                    top: star.y + "%",
                                    left: star.x + "%",
                                    width: star.size,
                                    height: star.size,
                                    background: "white",
                                    borderRadius: "50%"
                                }}
                            />

                        ))}

                    </div>



                    {/* ЕСЛИ НЕ АВТОРИЗОВАН */}



                    {!user && (

                        <div style={{ marginTop: 40 }}>

                            <Title level="2">

                                Добро пожаловать

                            </Title>

                            <Text style={{ marginTop: 10 }}>

                                Войдите через VK

                            </Text>

                            <Button
                                size="l"
                                stretched
                                style={{ marginTop: 20 }}
                                onClick={auth}
                            >

                                👤 Войти через VK

                            </Button>

                        </div>

                    )}



                    {/* ЕСЛИ АВТОРИЗОВАН */}



                    {user && (

                        <>

                            <Title level="2">

                                Привет {user.first_name}

                            </Title>

                            <Text>

                                XP: {xp}

                            </Text>



                            <Button
                                stretched
                                style={{ marginTop: 20 }}
                                onClick={tarotReading}
                            >

                                🎴 Сделать расклад

                            </Button>



                            {tarot.length > 0 && (

                                <div style={{
                                    display: "flex",
                                    gap: "15px",
                                    marginTop: "20px"
                                }}>

                                    {tarot.map((card, i) => (

                                        <div key={i} style={{ textAlign: "center" }}>

                                            <div
                                                style={{
                                                    width: "110px",
                                                    height: "170px",
                                                    background: "#1b0f2e",
                                                    borderRadius: "12px",
                                                    boxShadow: "0 0 15px purple",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    transform: card.reversed ? "rotate(180deg)" : "none"
                                                }}
                                            >

                                                <Text style={{ color: "white" }}>

                                                    {card.name}

                                                </Text>

                                            </div>

                                            <Text>

                                                {card.reversed ? "Перевернутая" : "Прямая"}

                                            </Text>

                                        </div>

                                    ))}

                                </div>

                            )}



                            <Button
                                stretched
                                style={{ marginTop: 20 }}
                                onClick={getArchetype}
                            >

                                🔮 Архетип судьбы

                            </Button>



                            {archetype && (

                                <Text style={{ marginTop: 10 }}>

                                    Ваш архетип: {archetype}

                                </Text>

                            )}



                            <Button
                                stretched
                                style={{ marginTop: 10 }}
                                onClick={share}
                            >

                                📢 Поделиться судьбой

                            </Button>



                            <Button
                                stretched
                                mode="commerce"
                                style={{ marginTop: 10 }}
                                onClick={payVIP}
                            >

                                💳 VIP прогноз

                            </Button>



                            {achievements.length > 0 && (

                                <div style={{ marginTop: 20 }}>

                                    <Title level="3">

                                        🏆 Достижения

                                    </Title>

                                    {achievements.map((a, i) => (

                                        <Text key={i}>{a}</Text>

                                    ))}

                                </div>

                            )}

                        </>

                    )}



                </Group>

            </Panel>

        </View>

    )

}
import { useState } from "react";

const cards = [
    { name: "Шут", text: "Новый путь и неожиданные возможности." },
    { name: "Маг", text: "У тебя есть сила изменить судьбу." },
    { name: "Жрица", text: "Слушай интуицию." },
    { name: "Императрица", text: "Рост и изобилие." },
    { name: "Император", text: "Контроль и власть." },
    { name: "Отшельник", text: "Время подумать о себе." },
];

export default function App() {
    const [opened, setOpened] = useState([]);
    const [xp, setXp] = useState(0);
    const [level, setLevel] = useState(1);

    const openCard = () => {
        if (opened.length >= 3) return;

        const card = cards[Math.floor(Math.random() * cards.length)];

        const newCards = [...opened, card];
        setOpened(newCards);

        const newXp = xp + 10;
        setXp(newXp);

        if (newXp >= level * 50) {
            setLevel(level + 1);
        }
    };

    return (
        <div style={styles.app}>
            <h1>🔮 Destiny App</h1>

            <p>Уровень: {level} | XP: {xp}</p>

            <button style={styles.button} onClick={openCard}>
                🎴 Открыть карту
            </button>

            <div style={styles.cards}>
                {opened.map((card, i) => (
                    <div key={i} style={styles.card}>
                        <h3>{card.name}</h3>
                        <p>{card.text}</p>
                    </div>
                ))}
            </div>

            <div style={styles.shop}>
                <button style={styles.pay}>
                    💳 Открыть ещё 3 карты — 49₽
                </button>
            </div>

            <div style={styles.ai}>
                🤖 AI прогноз:
                Сегодня судьба готовит неожиданный шанс. Будь внимателен.
            </div>
        </div>
    );
}

const styles = {
    app: {
        minHeight: "100vh",
        background:
            "linear-gradient(180deg,#0f0c29,#302b63,#24243e)",
        color: "white",
        textAlign: "center",
        padding: "40px",
        fontFamily: "sans-serif",
    },

    button: {
        padding: "15px 30px",
        fontSize: "18px",
        background: "#6b4cff",
        border: "none",
        borderRadius: "10px",
        color: "white",
        cursor: "pointer",
    },

    cards: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px",
        flexWrap: "wrap",
    },

    card: {
        width: "160px",
        background: "#1b1b3a",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 0 20px #6b4cff",
    },

    shop: {
        marginTop: "40px",
    },

    pay: {
        padding: "15px 25px",
        fontSize: "16px",
        background: "#ff8a00",
        border: "none",
        borderRadius: "10px",
        color: "white",
    },

    ai: {
        marginTop: "40px",
        fontSize: "18px",
        opacity: 0.9,
    },
};
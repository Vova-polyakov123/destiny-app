import React, { useState } from 'react';
import { View, Panel, PanelHeader, Button, Div } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

const predictions = [
  "Сегодня тебя ждёт неожиданная удача 🍀",
  "День принесёт приятный сюрприз 🎁",
  "Будь осторожен — судьба проверяет тебя 😏",
  "Скоро получишь хорошие новости 📩",
  "Ты притягиваешь деньги 💰"
];

const legendary = [
  "🔥 ЛЕГЕНДАРНОЕ: В ближайшие 7 дней исполнится твоё желание!"
];

export const App = () => {
  const [text, setText] = useState("");

  const getPrediction = () => {
    const chance = Math.random();

    if (chance < 0.1) {
      setText(legendary[0]);
    } else {
      const random =
        predictions[Math.floor(Math.random() * predictions.length)];
      setText(random);
    }
  };

  return (
    <View activePanel="main">
      <Panel id="main">
        <PanelHeader>🔮 Генератор судьбы</PanelHeader>
        <Div>
          <Button size="l" stretched onClick={getPrediction}>
            Узнать судьбу
          </Button>

          {text && (
            <>
              <Div style={{ marginTop: 20, fontSize: 18 }}>
                {text}
              </Div>

              <Button
                style={{ marginTop: 15 }}
                stretched
                onClick={() => {
                  window.open(
                    `https://vk.com/share.php?comment=${text}`
                  );
                }}
              >
                Поделиться в ВК
              </Button>
            </>
          )}
        </Div>
      </Panel>
    </View>
  );
};
<Button
  style={{ marginTop: 15 }}
  stretched
  mode="secondary"
  onClick={() => {
    setText("💎 СУПЕР ПРЕДСКАЗАНИЕ: Через месяц твоя жизнь изменится!");
  }}
>
  Получить супер-предсказание (10₽)
</Button>
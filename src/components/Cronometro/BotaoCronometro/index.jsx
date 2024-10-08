import styles from "./styles.module.css";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";
import pauseImg from "/src/assets/imgs/pause.png";
import audioPlaySom from "/src/assets/sons/play.wav";
import audioPauseSom from "/src/assets/sons/pause.mp3";

import { useCronometroStore } from "../../../store";

export default function BotaoCronometro() {
  const intervaloId = useCronometroStore((estado) => estado.intervaloId);
  const iniciarCronometro = useCronometroStore((estado) => estado.iniciarCronometro);
  const pausarCronometro = useCronometroStore((estado) => estado.pausarCronometro); 

  const textoIniciarOuPausar = intervaloId ? "Pausar" : "Começar";
  const iconeIniciarOuPausar = intervaloId ? pauseImg : play_arrowImg;

  const audioPlay = new Audio(audioPlaySom); // só isso foi alterado
  const audioPause = new Audio(audioPauseSom); // só isso foi alterado

  function iniciarOuPausar() {
    if (!intervaloId) {
      audioPlay.play(); // só isso foi alterado
      iniciarCronometro();
    } else {
      audioPause.play(); // só isso foi alterado
      pausarCronometro();
    }
  }

  return (
    <div className={styles["cronometer__primary-button-wrapper"]}>
      <button onClick={iniciarOuPausar} className={styles["cronometer__primary-button"]}>
        <img
          className={styles["cronometer__primary-button-icon"]}
          src={iconeIniciarOuPausar}
          alt=""
        />
        <span>{textoIniciarOuPausar}</span>
      </button>
    </div>
  );
}

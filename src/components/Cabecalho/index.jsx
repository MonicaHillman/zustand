import styles from "./styles.module.css";
import logoImg from "/src/assets/imgs/logo.png";
import focoImg from "/src/assets/imgs/foco.png";

import { useCronometroStore } from "../../store";

export default function Cabecalho() {
  const modoCronometro = useCronometroStore((estado) => estado.modoCronometro);

  const [primeiroTexto, segundoTexto] = modoCronometro.frase;

  return (
    <header className="header">
      <figure className={styles["header__logo-figure"]}>
        <img src={logoImg} alt="Logotipo do Fokus" />
      </figure>

      <section className={styles["header__section-banner-container"]}>
        <h1 className={styles["header__title"]}>
          {primeiroTexto} <strong className={styles["header__title-strong"]}>{segundoTexto}</strong>
        </h1>

        <figure className={styles["header__image-figure"]}>
          <img className={styles["header__image"]} src={focoImg} alt="" />
        </figure>
      </section>
    </header>
  );
}

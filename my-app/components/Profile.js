"use client";

import Image from "next/image";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.name}>Vítor Paraíso</h2>
        <p className={styles.bio}>
          Especialista Técnico em CRM e Analista de Dados Comercial na{" "}
          <strong>Flutter Brazil</strong> – Grupo Betnacional e Betfair.
        </p>
        <p className={styles.bio}>
          Estudante de <strong>Sistemas para Internet</strong> na{" "}
          Universidade Católica de Pernambuco.
        </p>
      </div>
      <div className={styles.photoWrapper}>
        <Image
          src="/me.jpg"
          alt="Minha foto"
          width={220}
          height={220}
          className={styles.photo}
        />
      </div>
    </div>
  );
}

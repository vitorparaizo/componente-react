'use client';

import Image from 'next/image';
import styles from './Profile.module.css';

type ProfileProps = {
  name: string;
  headline: string; 
  bio: string;     
  photoSrc: string; 
  photoAlt?: string;
  reverseOnDesktop?: boolean; 
};

export default function Profile({
  name,
  headline,
  bio,
  photoSrc,
  photoAlt,
  reverseOnDesktop = false,
}: ProfileProps) {
  return (
    <section className={styles.wrapper} aria-label={`Perfil de ${name}`}>
      <div className={`${styles.inner} ${reverseOnDesktop ? styles.reverse : ''}`}>
        <div className={styles.photo}>
          <Image
            src={photoSrc}
            alt={photoAlt ?? `Foto de ${name}`}
            fill
            priority
            sizes="(max-width: 900px) 70vw, 360px"
            className={styles.img}
          />
        </div>

        <div className={styles.text}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.headline}>{headline}</p>
          <p className={styles.bio}>{bio}</p>
        </div>
      </div>
    </section>
  );
}

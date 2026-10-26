"use client";

import styles from "./GlobalEarthHero.module.css";

export default function GlobalEarthHero() {
  return (
    <section className={styles.hero} aria-labelledby="global-earth-title">
      <div className={styles.photo} aria-hidden="true" />
      <div className={styles.stars} aria-hidden="true" />
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.copy}>
        <p className={styles.eyebrow}>
          <span className={styles.dot} /> DEVOPSTRIO <span className={styles.separator}>•</span> GLOBAL TECHNOLOGY SOLUTIONS
        </p>
        <h1 id="global-earth-title" className={styles.title}>
          <span>Global Delivery.</span>
          <span className={styles.highlight}>Local Expertise.</span>
        </h1>
      </div>
    </section>
  );
}

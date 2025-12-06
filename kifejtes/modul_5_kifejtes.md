# 5. Modul: Megszakítási Rendszer - Analógiás Kifejtés

A megszakítás (Interrupt) az a mechanizmus, amivel a külvilág (vagy egy hiba) jelzi a CPU-nak, hogy "Hahó, figyelj rám!".

## 5.1 Mi a megszakítás?
**Analógia (Tanár és Diák):**
*   A tanár (CPU) magyaráz (fut a program).
*   A diák (I/O eszköz) jelentkezik (Megszakítás kérés - INTR).
*   A tanár eldönti, mikor szólítja fel (Prioritás).
*   Ha felszólítja, abbahagyja a magyarázatot, megjegyzi hol tartott (Kontextus mentése), válaszol a diáknak (Megszakítás kezelése - ISR), majd folytatja az órát (Visszatérés).

### Típusai:
*   **Szinkron (Kivétel/Exception):** Belülről jön, a program hibájából. Pl. 0-val való osztás. (Mintha a tanár nyelvbotlást vétene). Mindig ugyanott történik a programban.
*   **Aszinkron (Interrupt):** Kívülről jön, váratlanul. Pl. leütöttek egy billentyűt. Bármikor megtörténhet.

---

## 5.2 A Megszakítás Kezelése (A folyamat)

1.  **Kérés (INTR):** Valaki kopogtat az ajtón.
2.  **Engedélyezés:** A CPU megnézi, hogy "fogadóórát" tart-e (be van-e kapcsolva a megszakítás figyelés - IF flag).
3.  **Prioritás:** Ha egyszerre tűzriadó van és kopogtatnak, a tűzriadó (magasabb prioritás) nyer.
4.  **Nyugtázás (INTACK):** A CPU kiszól: "Hallom, gyere be!".
5.  **Mentés:** A CPU gyorsan leírja egy papírra (Stack), hogy hol tartott a munkában (PC, Flag-ek elmentése), hogy ne felejtse el.
6.  **Kiszolgálás (ISR - Interrupt Service Routine):** Elvégzi a kért feladatot (pl. elmenti a leütött karaktert). Ez egy kis program.
7.  **Visszatérés:** Előveszi a papírt (Stack), visszatölti az állapotot, és folytatja a munkát, mintha mi sem történt volna.

---

## 5.3 Rendszerek felépítése

*   **Egyszintű:** Ha a tanár foglalkozik egy diákkal, senki más nem szólhat bele, még az igazgató sem. (Egyszerű, de lassú reagálású).
*   **Többszintű (Multilevel):** Van rangsor. Ha a tanár beszél egy diákkal, de benyit az igazgató (magasabb prioritás), akkor a tanár a diákot is félreteszi, és az igazgatóval foglalkozik. (Egymásba ágyazható megszakítások).

### Maszkolható vs. Nem Maszkolható
*   **Maszkolható (Maskable):** "Most ne zavarjanak." (Kikapcsolható, pl. billentyűzet).
*   **Nem Maszkolható (NMI):** "Tűz van!" (Nem lehet kikapcsolni, muszáj reagálni, pl. hardverhiba, áramszünet).

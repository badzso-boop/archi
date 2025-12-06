# 7. Modul: Memória - Analógiás Kifejtés

## 7.1 SRAM vs. DRAM

### SRAM (Statikus RAM) - A "Kapcsolók"
**Felépítés:** Flip-Flop áramkörök (4-6 tranzisztor). A tranzisztorok körbe kergetik a jelet, "emlékeznek" rá.
**Analógia:** Egy villanykapcsoló. Ha felkapcsolod, úgy marad, amíg van áram. Nem kell piszkálni.
*   **Jellemző:** Nagyon gyors, de drága és sok helyet foglal. (Ezért ez a Cache).

### DRAM (Dinamikus RAM) - A "Vödrök"
**Felépítés:** 1 kondenzátor + 1 tranzisztor. A kondenzátor tárolja a töltést (bitet).
**Analógia:** Egy lyukas vödör víz. Ha tele van (1-es), üres (0-ás).
*   **Probléma:** A vödör lyukas (szivárog a töltés). Időnként újra kell tölteni (Frissítés/Refresh), különben elfelejti az adatot.
*   **Jellemző:** Lassú, de olcsó és nagyon kicsi helyen elfér. (Ezért ez a rendszermemória).

---

## 7.2 SDRAM és DDR (A szinkronizálás)

### SDRAM (Synchronous DRAM)
**Analógia:** A "Vödrös ember" (DRAM) felvesz egy fülhallgatót, amiben hallja a karmester (CPU órajel) ütemét.
*   Nem össze-vissza dolgozik, hanem pontosan ütemre adja a vizet.

### DDR (Double Data Rate)
**Analógia:** A munkás eddig csak akkor adott egy vödröt, amikor a karmester *felemelte* a pálcáját (felmenő él).
*   **DDR:** A munkás már akkor is ad egy vödröt, amikor a karmester *leengedi* a pálcáját (lefutó él).
*   **Eredmény:** Ugyanannyi idő alatt kétszer annyi adatot (vödröt) mozgatunk meg.

---

## 7.3 Memória szervezés és Időzítés

### Logikai Bankok
**Analógia:** A raktár (Memória) több helyiségre (Bank) van osztva.
*   Amíg az egyik helyiségben a takarítók dolgoznak (Precharge), a targoncás bemehet a másik helyiségbe áruért. Párhuzamos munka!

### Időzítések (A "késleltetések")
**Folyamat:** Könyvet akarsz kivenni.
1.  **tRAS (Sor nyitvatartása):** Kinyitod az ajtót. Nem csukhatod be azonnal, nyitva kell tartanod, hogy lásd a polcokat.
2.  **tRCD (Sor-Oszlop késleltetés):** Odalépsz a megfelelő polchoz (Sor kiválasztása), majd megkeresed a könyvet (Oszlop kiválasztása). Ez a séta időbe telik.
3.  **tCL (CAS Latency):** Megfogod a könyvet, és elviszed a pultig. Ez a szállítási idő.
4.  **tRP (Precharge):** Mielőtt átmennél másik sorba, vissza kell tenned a könyveket és rendet rakni.

---

## 7.4 DIMM típusok
*   **Registered (Pufferelt):** Van egy "előszoba" (Regiszter) a memóriamodulon. A CPU ide kiabál be, és a Regiszter adja tovább a parancsot a chipeknek. (Stabilabb, de picit lassabb).
*   **ECC (Error Correcting Code):** Van egy plusz jegyzetfüzet, ahova felírjuk az adatok összegét (Paritás). Ha valaki átír egy számot, az összeg nem fog stimmelni -> Észrevesszük a hibát.

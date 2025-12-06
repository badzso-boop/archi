# 8. Modul: Tranzisztorok - Analógiás Kifejtés

A tranzisztor a digitális világ "atomja". Egy vezérelhető kapcsoló.

## 8.1 A MOSFET (A Kerti Csap)
**Működés:**
*   **Source (Forrás):** A vízhálózat.
*   **Drain (Nyelő):** A slag vége.
*   **Gate (Kapu):** A csap tekerője.
*   **Substrate (Hordozó):** A föld.

Ha eltekered a csapot (feszültséget adsz a Gate-re), a föld alatt megnyílik egy csatorna, és a víz (elektron) átfolyik a forrásból a nyelőbe. Ez az "1-es" állapot. Ha elzárod, nincs víz, ez a "0-s".

---

## 8.2 A Probléma: Szivárgás
Ahogy a csapok egyre kisebbek lettek (nanométerek), a tömítés (oxid réteg) túl vékony lett.
*   **Gond:** Zárt állapotban is csöpögött a csap (szivárgási áram). Ez melegíti a processzort és meríti az aksit.
*   **HKMG (High-k Metal Gate):** Kicserélték a gumi tömítést egy speciális kerámiára, ami jobban szigetel, de mégis engedi a vezérlést.

---

## 8.3 FinFET (A "Marokra fogott" slag)
A régi (Planáris) tranzisztornál felülről léptünk rá a slagra, hogy elzárjuk. De a víz oldalt kiszökött.
**Megoldás:** Emeljük ki a slagot a földből (ez a Fin/Uszony)!
*   A Kapu most már nem csak felülről, hanem **három oldalról** (bal-jobb-fent) öleli körbe a csatornát.
*   **Eredmény:** Sokkal jobban el tudjuk szorítani a csövet -> Kevesebb szivárgás, gyorsabb kapcsolás.

---

## 8.4 GAAFET (Gate All Around - A Gyűrű)
A 3 nanométeres tartományban már a 3 oldal sem elég.
**Megoldás:** A Kapu **mind a 4 oldalról** (teljesen körbe) veszi a csatornát, mint egy gyűrű.
*   **Nano-sheet:** A "cső" nem henger, hanem lapos szalag, és több van belőle egymáson. Több vizet szállít, de tökéletesen vezérelhető.

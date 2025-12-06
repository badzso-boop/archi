# 2. Modul: A CPU Alkatrészei - Analógiás Kifejtés

## 2.1 ALU (Arithmetical Logical Unit) - A Számolóagy
**Fogalom:** A processzor izma. Ez végzi a tényleges munkát (összeadás, kivonás, logikai döntések).

### Összeadók
*   **Félösszeadó:** Csak két bitet ad össze. (Mint egy kisgyerek, aki az ujján számol, de nem tudja, mi az a "maradék").
*   **Teljes összeadó:** Két bitet + az előzőből jött maradékot (Carry) adja össze.
*   **CILA (Carry Look-ahead):** A "jós". Nem várja meg, amíg az egyes számjegyek összeadása végigmegy (mint a soros összeadónál), hanem a számokból előre "megjósolja", hol lesz maradék, így sokkal gyorsabb.

### Szorzás (Booth algoritmus)
**Analógia:** Ha meg kell szoroznod a 99-et 5-tel.
*   **Hagyományos:** 99 + 99 + 99 + 99 + 99. (Sok munka).
*   **Booth:** Kerekítsünk! 100 * 5 = 500. Aztán vonjunk ki belőle egy 5-öst. 500 - 5 = 495. (Sokkal kevesebb lépés). A Booth algoritmus a sok 1-es bitet (pl. 99 = 1100011) így vonja össze.

### Lebegőpontos Számok (Floating Point)
**Fogalom:** Törtszámok tárolása. Nem fix helyen van a tizedesvessző.
**Analógia (Tudományos írásmód):** Ahelyett, hogy azt írnánk le, hogy `0.000000123`, azt írjuk: `1.23 x 10^-7`.
*   **Mantissza:** A "hasznos" számjegyek (`1.23`).
*   **Karakterisztika:** A nagyságrend, avagy mennyivel toljuk el a tizedesvesszőt (`-7`).
*   **Előjel:** Plusz vagy mínusz.

---

## 2.2 Vezérlőegység (Control Unit) - A Karmester
**Fogalom:** Ő mondja meg a többieknek (ALU, Memória), hogy mit csináljanak.

### Működési elvek:
1.  **Szinkron (Órajel alapú):**
    *   **Analógia:** Egy zenekar, ahol mindenki a karmester (órajel) ütemére lép. "EGY-re emeld a hegedűt, KETTŐ-re húzd meg".
    *   **Előny:** Kiszámítható, egyszerű.
    *   **Hátrány:** Ha valaki hamarabb kész van, várnia kell a következő ütemig (késleltetés).
2.  **Aszinkron (Kézfogásos):**
    *   **Analógia:** Egy stafétaváltó. Amint az egyik futó odaér, átadja a botot, és a másik *azonnal* indul. Nem várnak sípszóra.
    *   **Előny:** Nagyon gyors, nincs várakozás.
    *   **Hátrány:** Nehéz megtervezni, hogy ne gabalyodjanak össze a dolgok (drága, bonyolult).

### Vezérlés megvalósítása:
*   **Huzalozott:** "Kőbe vésett". Az áramkörök fixen úgy vannak összekötve, hogy mit csináljanak. Gyors, de ha változtatni kell, ki kell dobni az egész chipet.
*   **Mikroprogramozott:** "Programozható". A processzoron belül van egy mini-program, ami megmondja, hogyan kell végrehajtani egy utasítást. Lassabb, de rugalmasabb (javítható).

# 1. Modul: Architektúrák - Analógiás Kifejtés

## 1.1 Mi az a számítógépes architektúra?
**Fogalom:** A gép "lelke" és "testének" leírása. Az a struktúra, amit a programozónak ismernie kell, hogy programot írhasson rá.
**Analógia (Autó):** Ha autót vezetsz, tudnod kell, hol a kormány, a fék, a váltó (ez az architektúra, amit a "felhasználó/programozó" lát). Nem kell tudnod, hogyan robban be a benzin a hengerben (az már a mélyebb mérnöki megvalósítás), de a kezelőszerveket ismerned kell.

### Részei:
*   **Regiszterek:** A "zsebeid". Ami itt van, azt azonnal eléred.
*   **Memória:** A "hátizsákod". Sok minden fér bele, de le kell venni a hátadról, hogy kivedd.
*   **Utasításkészlet:** A "szókincsed". Milyen parancsokat ért meg a gép (pl. "Ugorj!", "Számolj!").

---

## 1.2 Számítási modellek

### Neumann modell (Vezérlés meghajtott)
**Működés:** Van egy recepted (program), és szigorúan sorban haladsz a lépéseken. "Vedd a lisztet. Most add hozzá a tojást."
**Analógia (Szakács):** Egy szakács, aki egyetlen receptkönyvet olvas, és az ujja mindig a következő soron van (ez a **Program Counter**). Nem ugrik előre, nem csinál mást, csak amit a soron következő utasítás mond.
*   **Jellemző:** Szekvenciális (soros). Az adatok és a recept (utasítások) egy helyen vannak (a konyhapulton/memóriában).
*   **Hátrány (Előzményérzékenység):** Ha az előző lépésben véletlenül kiöntötted a tejet (felülírtál egy változót), akkor a következő lépésnél már hiányozni fog.

### Adatfolyam modell (Adat meghajtott)
**Működés:** Nincs fix sorrend. Amint megvan minden hozzávaló egy lépéshez, azonnal megcsináljuk.
**Analógia (Gyári összeszerelő szalag):**
*   A munkás nem vár utasításra. Ha elé kerül egy karosszéria és egy ajtó (bejövő adatok), akkor azonnal felszereli (végrehajtás).
*   Nem kell "főnök" (Program Counter), aki mondja, hogy "most szerelj!", a munka "magától" megy, amint ott az alapanyag.
*   **Előny:** Könnyű párhuzamosítani (több munkás dolgozhat egyszerre).

---

## 1.3 Fizikai vs. Logikai Architektúra

### Fizikai Architektúra
**Fogalom:** A tényleges vas, a drótok, a chipek.
**Analógia (Házépítés):** A téglák, a beton, a vízvezetékek a falban. Azt írja le, *miből* van a ház.

### Logikai Architektúra
**Fogalom:** Hogyan látja ezt a programozó/felhasználó. A funkciók.
**Analógia (Lakberendezés):** "Ez a konyha, itt lehet főzni." Nem érdekel, hogy a vízcső rézből vagy műanyagból van a falban (fizikai), csak az, hogy ha megnyitom a csapot, jön a víz (logikai funkció).

---

## 1.4 Memória vs. Regiszterek (Adattér)

### Memória (RAM)
*   **Virtuális Memória:** A "képzelt" raktár. A programozó azt hiszi, övé az egész világ, végtelen helye van.
*   **Fizikai Memória:** A valós raktár. Ami ténylegesen be van építve a gépbe.
*   **MMU (Memory Management Unit):** A "Raktáros". A programozó kér valamit a "képzelt" címről, a Raktáros pedig tudja, hogy az a valóságban melyik polcon (fizikai címen) van.

### Regiszterek
*   **Akkumulátor:** Az "egyetlen kezed". Régi gépeken mindent ebbe kellett fogni, hogy dolgozz vele.
*   **Általános célú:** "Több zseb". Bármit rakhatsz beléjük.
*   **Stack (Verem):** Egy "tányéradagoló rugós szerkezet". Csak a legfelső tányért látod, és csak a tetejére tehetsz újat. (Last In, First Out).

---

## 1.5 Utasítástípusok (Címek száma szerint)

Képzeld el, hogy a feladat: `A = B + C`.

*   **3 címes:** "Add össze **B**-t és **C**-t, és tedd az **A**-ba." (Mindent megmondunk egy mondatban. Kényelmes, de hosszú mondat).
*   **2 címes:** "Add hozzá **B**-t az **A**-hoz." (Feltételezzük, hogy az egyik szám már az A-ban van, és az eredmény is oda megy. Rövidebb, de felülírjuk az A-t).
*   **1 címes:** "Add hozzá **B**-t." (Mihez? Hát ahhoz, ami épp a kezedben/akkumulátorban van! Nagyon rövid parancs, de előtte kézbe kell venni a dolgokat).
*   **0 címes (Stack):** "Összeadás!" (A gép leveszi a verem tetejéről a két legfelső számot, összeadja, és visszateszi az eredményt. Nem kell megmondani, kik ők, mindig a legfelsők).

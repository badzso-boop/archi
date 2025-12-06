# 9. Modul: Párhuzamos Architektúrák - Analógiás Kifejtés

Hogyan végezzünk el több munkát ugyanannyi idő alatt?

## 9.1 Időbeli vs. Térbeli Párhuzamosság

### Időbeli (Pipeline / Futószalag)
**Analógia:** Autómosó.
*   Nem várod meg, amíg az első autó teljesen kész (mosás+öblítés+szárítás), mire beengeded a következőt.
*   Amint az első átmegy a szárítóba, a második jöhet az öblítőbe, a harmadik a mosóba.
*   **Eredmény:** Mindenki folyamatosan dolgozik, dőlnek ki a kész autók.

### Térbeli
**Analógia:** Több kassza a boltban.
*   Ha nagy a sor, kinyitunk még 3 kasszát.
*   Egyszerre 3 vevőt szolgálunk ki, egymás mellett. (Több mag, több ALU).

---

## 9.2 Flynn-féle osztályozás (Utasítások és Adatok)

1.  **SISD (Single Instruction, Single Data):**
    *   **Analógia:** Egy szakács vág egy répát. (Hagyományos PC).
2.  **SIMD (Single Instruction, Multiple Data):**
    *   **Analógia:** A szakács egy bárdcsapással egyszerre 4 répát vág el.
    *   A parancs ("Vágj!") ugyanaz, de sok adaton (4 répa) hajtódik végre. (Videókártyák, multimédia).
3.  **MISD (Multiple Instruction, Single Data):**
    *   **Analógia:** Egy répát vizsgál 3 tudós egyszerre (Mérik, kóstolják, nézik).
    *   Ritka, biztonsági rendszerekben használják (űrsikló), hogy ne hibázzanak.
4.  **MIMD (Multiple Instruction, Multiple Data):**
    *   **Analógia:** Étteremkonyha. Minden szakács mást csinál (egyik süt, másik mosogat) más alapanyagokkal. (Szuperszámítógépek, szerverek).

---

## 9.3 Függőségek (A "Homokszemek")

### Adatfüggőség (RAW - Read After Write)
**Analógia:** Nem sütheted ki a húst, amíg nem paníroztad be.
*   Meg kell várni az előző lépés eredményét. Ez megakasztja a futószalagot.

### Ál-adatfüggőség (WAR / WAW)
**Analógia:** Két szakács veszekszik az egyetlen piros tányéron.
*   Nem az étel (adat) miatt függnek össze, hanem az eszköz (regiszter) miatt.
*   **Megoldás (Regiszter átnevezés):** "Itt egy kék tányér, használd azt!". Ha van elég erőforrás, mindenki dolgozhat tovább.

### Vezérlésfüggőség
**Analógia:** Útelágazás.
*   A futószalag nem tudja, melyik utat töltse be előre, amíg a "sofőr" el nem olvassa a táblát (ki nem számolja a feltételt).
*   **Megoldás (Elágazásbecslés):** "Tippeljünk! Általában balra megyünk." Ha bejön, nyertünk. Ha nem, tolatni kell (üríteni a pipeline-t).

---

## 9.4 Konzisztencia (A Látszat)
A processzor belül trükközik (előre dolgozik, tippel, sorrenden kívül hajt végre), de a programozó felé azt a látszatot kell keltenie, mintha mindent szépen sorban csinált volna.
**Analógia:** Az étteremben a pincér először a levest hozza, aztán a főételt. Nem érdekel, hogy a konyhán a főétel már kész volt, amikor a levest még csak melegítették. A tálalás sorrendje a lényeg.

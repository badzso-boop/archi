# Nagy Számítógép Architektúrák Összefoglaló

## 1. Modul: Architektúrák Alapjai

Ez a modul fekteti le az alapokat: hogyan gondolkodunk a számítógépekről, milyen elvek alapján működnek, és hogyan épülnek fel logikailag.

### 1.1 Számítási modell tulajdonságai
A számítási modell egy absztrakció, ami leírja, hogyan végzünk el egy feladatot a géppel.
*   **Végrehajtás módja:**
    *   *Szekvenciális:* Egyszerre egy dolgot csinálunk, sorban (pl. olvasol egy könyvet).
    *   *Párhuzamos:* Egyszerre több dolgot csinálunk (pl. ketten olvassátok ugyanazt a könyvet két külön fejezetnél).
*   **Vezérlés (Mi hajtja a számítást?):**
    *   *Vezérlés meghajtott:* Van egy fix recept (kódsor), és azt követjük vakon.
    *   *Adat meghajtott:* Akkor csinálunk valamit, ha megvan hozzá az alapanyag (adat).
    *   *Igény meghajtott:* Csak akkor számolunk ki valamit, ha valaki kéri az eredményt.
*   **Leírás módja:**
    *   *Procedurális:* Lépésről lépésre megmondjuk, *hogyan* kell csinálni (pl. C nyelven).
    *   *Deklaratív:* Csak azt mondjuk meg, *mi* legyen a végeredmény (pl. SQL).

---

### 1.2 Mi a számítások alapja?
Ez alapján csoportosítjuk a modelleket:
1.  **Adat alapú modellek:** Adatokon végzünk műveleteket (ez a legelterjedtebb). Ide tartozik a Neumann és az Adatfolyam modell is.
2.  **Objektum alapú:** Objektumok kommunikálnak egymással.
3.  **Tudás alapú:** Mesterséges intelligencia, következtetések.

---

### 1.3 Neumann modell (Vezérlés meghajtott)
Ez a mai számítógépek 99%-ának az alapja.
*   **Működés:** Van egy közös memória, ahol az **adatok** és a **programkód** (utasítások) is vannak. A gép sorban, lépésről lépésre hajtja végre az utasításokat.
*   **Program Counter (PC):** Ez a "könyvjelző", ami mutatja, hol tartunk a programban.
*   **Analógia (A Szakács):** A szakács (CPU) a konyhapulton (Memória) tartja a hozzávalókat (Adat) és a receptkönyvet (Program) is. Az ujjával (PC) mutatja, melyik sor következik. Szigorúan sorban halad.
*   **Hátrány:** Előzményérzékeny (ha elrontod a levest az elején, a végén is rossz lesz), és a közös memória miatt lassú lehet (Neumann-elvű szűk keresztmetszet).

---

### 1.4 Adatfolyam modell (Adat meghajtott)
*   **Működés:** Nincs fix sorrend (nincs PC). Egy utasítás akkor hajtódik végre, amint az összes bemenő adata rendelkezésre áll ("Stréber modell").
*   **Analógia (Autógyár):** A szalagon álló munkás nem vár főnöki parancsra. Ha elé kerül egy ajtó és egy csavar, azonnal becsavarozza. Ha több szalag van, sok munkás dolgozhat egyszerre.
*   **Előny:** Könnyű párhuzamosítani.

---

### 1.5 Logikai Architektúra
Ez a "felhasználói kézikönyv". Nem azt írja le, hogy milyen drótok vannak a gépben (Fizikai), hanem hogy a programozó milyen funkciókat érhet el.
**Részei processzori szinten:**
1.  **Adattér:** Hol tároljuk az adatokat?
2.  **Adatmanipulációs fa:** Mit csinálhatunk az adatokkal?
3.  **Állapottér:** Milyen állapotban van a gép?
4.  **Állapotműveletek:** Hogyan változik az állapot?

---

### 1.6 Logikai architektúra &gt; Adattér
Két fő része van:
1.  **Memóriatér (A Raktár):**
    *   Nagy, lassú, de sok minden fér bele.
    *   **Virtuális memória:** A programozó azt hiszi, övé az egész világ (hatalmas címtér).
    *   **Fizikai memória:** A valós RAM, ami a gépben van. Az **MMU (Raktáros)** fordítja le a virtuális címeket fizikaira.
2.  **Regisztertér (A Zsebek):**
    *   Kicsi, szupergyors, a CPU belsejében van.
    *   **Típusai:**
        *   *Akkumulátor:* Egyetlen "kéz", amiben dolgozunk.
        *   *Általános célú:* Több zseb, bármit tehetünk bele.
        *   *Stack (Verem):* Tányéradagoló. Csak a legfelsőt látjuk.
        *   *Átfedő regiszterkészlet:* Trükkös megoldás, ahol a függvényhívásoknál a bemenő/kimenő adatok közös regisztereken osztoznak, így nem kell másolgatni őket (mint egy közös polc két iroda között).

---

### 1.7 Logikai architektúra &gt; Adatmanipulációs fa
Megmutatja, milyen típusú adataink vannak és mit kezdhetünk velük.
*   **Adattípusok:**
    *   *Elemi:* Számok (Fixpontos, Lebegőpontos), Karakterek (ASCII, Unicode), Logikai (Bitek).
    *   *Összetett:* Tömb, Rekord, Lista.
*   **Műveletek:** Összeadás, Szorzás, Logikai ÉS/VAGY.

---

### 1.8 Utasítás
A legkisebb parancs, amit a gép megért.
**Felépítése:** `[Mit kell csinálni? (Opkód)]` + `[Kivel? (Operandusok)]`

#### Utasítás típusok (Címek száma szerint)
*   **3 címes:** `A = B + C`. (Kényelmes, de hosszú utasítás).
*   **2 címes:** `A = A + B`. (Rövidebb, de felülírjuk A-t).
*   **1 címes:** `Akkumulátor = Akkumulátor + B`. (Még rövidebb, de előtte be kell tölteni az akkumulátorba).
*   **0 címes (Stack):** `POP, POP, ADD, PUSH`. (A verem tetején lévő két számmal dolgozik. Nem kell megnevezni őket).

#### Operandus típusok
*   **Regiszter:** Gyors, de kevés van.
*   **Memória:** Lassú, de sok hely van.
*   **Immediate (Azonnali):** Maga a szám van az utasításban (pl. `ADD 5`). Nagyon gyors.

#### Címzési módok
Hogyan találjuk meg az adatot?
*   **Abszolút:** "A 1024-es házszám alatt lakik." (Pontos cím).
*   **Relatív:** "Innen a harmadik ház." (PC-hez képest).
*   **Indirekt:** "A 1024-es házban van egy papír, amire fel van írva a valódi cím." (Mutató).

---

### 1.9 Logikai architektúra &gt; Állapottér
Olyan tárolók, amik a program futásának állapotát jelzik.
*   **Program Counter (PC):** Hol tartunk? (Melyik a következő utasítás címe?).
*   **Status Register (Flag-ek):** Mi történt legutóbb?
    *   *Zero Flag:* Nulla lett az eredmény?
    *   *Carry Flag:* Volt átvitel (túlcsordulás)?
    *   *Sign Flag:* Negatív lett az eredmény?

<br>

## 2. Modul: A CPU Alkatrészei

Ez a modul bemutatja a processzor belső felépítését, különös tekintettel a számításokat végző egységekre és a vezérlésre.

### 2.1 Műveletvégző (ALU - Arithmetic Logic Unit)
A processzor "izomzata", ami a tényleges munkát végzi.
**Részei:**
1.  **Regiszterek:** Látható (programozható) és Rejtett (puffer) tárolók.
2.  **Adatutak:** A "vezetékek", amiken az adat áramlik.
3.  **Kapcsolópontok:** Tranzisztorok, amik megnyitják vagy lezárják az adatutakat.
4.  **Szűkebb értelemben vett ALU:** A logikai kapuk halmaza, ami számol (pl. összead).

---

### 2.2 Összeadók (A számolás alapjai)

#### Egybites Félösszeadó (Half Adder)
Két bitet ad össze (`A` és `B`), de nem tudja kezelni az előző műveletből jövő maradékot.
*   **Kimenetei:** Eredmény (`S` - Sum), Átvitel (`C` - Carry).
*   **Igazságtábla:**
    *   0 + 0 = 0 (C=0)
    *   0 + 1 = 1 (C=0)
    *   1 + 0 = 1 (C=0)
    *   1 + 1 = 0 (C=1) -> Túlcsordulás!
*   **Áramkör:** Egy XOR kapu (S) és egy AND kapu (C).

#### Egybites Teljes Összeadó (Full Adder)
Két bitet (`A`, `B`) és az előző helyiértékről jövő maradékot (`Cin`) adja össze.
*   **Kimenetei:** Eredmény (`S`), Új átvitel (`Cout`).
*   **Felépítése:** Két félösszeadó összekapcsolva.

#### N bites Párhuzamos Összeadó (CILA-val)
Sok teljes összeadó egymás mellett (pl. 32 db).
*   **Probléma:** A sima soros összeadónál meg kell várni, amíg a maradék (Carry) végigcsorog az összes biten (lassú).
*   **Megoldás (CILA - Carry Look-Ahead):** A "jós". Egy külön áramkör, ami a bemenetekből (`A` és `B` összes bitje) előre kiszámolja, hol lesz átvitel, anélkül, hogy megvárná az összeadást. Így minden biten egyszerre végezhető el a művelet.

---

### 2.3 Szorzás (Fixpontos)
Bonyolultabb, mint az összeadás. A gép is úgy csinálja, mint mi papíron: összeadások és eltolások sorozata.
*   **BOOTH Algoritmus:** A szorzás gyorsítása.
    *   **Analógia:** Ha meg kell szorozni valamit 99-cel, nem adjuk össze 99-szer. Inkább megszorozzuk 100-zal (kerekítés) és kivonunk belőle egyet.
    *   **Működés:** A bináris számban lévő sok egymás melletti 1-est (pl. `011110` -> 15+8+4+2) összevonja egy kivonássá és egy összeadássá (`100000 - 000010` -> 32 - 2). Kevesebb művelet = gyorsabb futás.

---

### 2.4 Lebegőpontos Számok (Floating Point)
Törtszámok ábrázolása (pl. $1.23 \times 10^{-5}$). 
**Felépítése (IEEE 754 szabvány):**
1.  **Előjel (1 bit):** Pozitív (0) vagy Negatív (1).
2.  **Karakterisztika (Kitevő):** A nagyságrend. "Mennyivel toljuk el a tizedesvesszőt?". (Többletes kódolással tároljuk, hogy a negatív kitevőket is kezelni tudjuk).
3.  **Mantissza:** A számjegyek. (A normalizált alak miatt az első 1-est nem tároljuk, ez a rejtett bit).

**Pontosság növelése:**
*   **Rejtett bit:** Mivel binárisban minden szám 1-gyel kezdődik (kivéve a 0), ezt nem kell tárolni, így nyerünk +1 bit pontosságot.
*   **Őrző bitek (Guard bits):** A számítások közben (pl. két szám kivonásakor) keletkező extra biteket megőrizzük, hogy a végén pontosabban tudjunk kerekíteni, ne vesszen el információ.

**Formátumok:**
*   *Szabványos:* 32 bit (Single) vagy 64 bit (Double). (Memóriában tárolásra).
*   *Kiterjesztett:* 80 bit vagy több. (A CPU belsejében, hogy számolás közben pontosabbak legyünk).

**BCD (Binary Coded Decimal):**
Nem binárisra váltjuk az egész számot, hanem számjegyenként kódoljuk (pl. 19 -> `0001` `1001`).
*   **Előny:** Nincs kerekítési hiba (pénzügyi számításoknál fontos).
*   **Hátrány:** Több helyet foglal és lassabb vele számolni.

---

### 2.5 Vezérlőegység (Control Unit)
A processzor "agya", ami irányítja az adatokat.
**Két fajtája:**
1.  **Huzalozott:** Fix áramkörök. Gyors, de nem módosítható. (Régi gépek, RISC).
2.  **Mikroprogramozott:** A CPU-ban van egy kis memória ("mikrokód"), ami leírja, mit kell csinálni egy utasításnál. Lassabb, de rugalmasabb, javítható. (CISC).

<br>

## 3. Modul: Buszrendszerek

A buszrendszerek a számítógép különböző részei közötti kommunikációs utakat biztosítják. Olyanok, mint a "hardveres autópályák".

### 3.1 Mi a buszrendszer?
**Fogalom:** Elektromos vezetékek (párhuzamosan vagy sorosan), amiken az adatok, címek és vezérlőjelek utaznak a CPU, memória, I/O eszközök között.
**Analógia (Autópálya):** Az a közlekedési úthálózat, amin a "szállítmányok" (adatok) és a "szállító járművek" (jelek) közlekednek a városrészek (hardverkomponensek) között.

### 3.2 Buszrendszerek csoportosítása

#### A) Átvitel iránya szerint
*   **Szimplex:** Egyirányú. Analógia: Egyirányú utca (pl. rádióadó).
*   **Félduplex:** Kétirányú, de egyszerre csak az egyik irányba. Analógia: Felváltva használható sáv (pl. walkie-talkie).
*   **Full-duplex:** Kétirányú, egyszerre mindkét irányba. Analógia: Kétsávos autópálya (pl. telefonbeszélgetés).

#### B) Átvitel jellege szerint
*   **Dedikált:** Minden "városrész" (komponens) között külön "autópálya" van.
    *   **Előny:** Nincs dugó.
    *   **Hátrány:** Nagyon sok vezeték (drága, bonyolult), nehéz bővíteni.
*   **Megosztott:** Mindenki ugyanazt a "főautópályát" (buszt) használja.
    *   **Előny:** Kevesebb vezeték (olcsóbb, egyszerűbb), könnyű bővíteni.
    *   **Hátrány:** Dugóveszély (konfliktus), kell "forgalomirányító" (buszvezérlő).

#### C) Átviteli mód szerint
*   **Soros:** Az adatok bitről bitre, egymás után haladnak egyetlen sávon. Analógia: Egyetlen vonat viszi a rakományt, de gyorsan.
*   **Párhuzamos:** Az adatok több sávon egyszerre, több bit formájában haladnak. Analógia: Több vonat halad egymás mellett.

#### D) Összekapcsolt területek alapján
*   **Rendszerbusz:** A CPU és a Memória közötti fő busz. Adat-, cím- és vezérlősín.
*   **Bővítőbusz:** Perifériákat (pl. USB, PCIe) csatlakoztat.

#### E) Átviteli tartalom szerint (A busz főbb "sávjai")
*   **Címbusz (Address Bus):** A CPU ezen a sávon mondja meg, *hová* akar nyúlni (melyik memóriahelyre vagy I/O eszközre).
*   **Adatbusz (Data Bus):** Ezen a sávon utaznak maga az *adatok* (amit írni vagy olvasni akarunk).
*   **Vezérlővonal (Control Bus):** Ezek a "közlekedési táblák", amik jelzik, *mit* kell csinálni (olvasás, írás, megszakítás).

---

### 3.3 Vezérlővonal (Vezérlőjelek típusai)
A vezérlőbusz különböző jeleket hordoz:
*   **Adatátvitelt vezérlő jelek:** `Read/Write` (olvasni vagy írni), `Memory/IO` (memória vagy I/O eszköz), `D/S` (Data Strobe - adat érvényes), `A/S` (Address Strobe - cím érvényes).
*   **Megszakítást vezérlő jelek:** `INTR` (Interrupt Request - megszakítási kérés), `INTACK` (Interrupt Acknowledge - megszakítás nyugtázása).
*   **Buszvezérlő jelek:** `Bus Request` (busz kérése), `Bus Grant` (busz megadása).

### 3.4 Chipset Evolúció (Új)
*   **Régi (IBM PC):** Rengeteg különálló chip.
*   **Pentium korszak:**
    *   *Északi híd (Northbridge):* Gyors eszközök (RAM, Videókártya/AGP).
    *   *Déli híd (Southbridge):* Lassú eszközök (HDD, USB, Billentyűzet).
*   **Modern (Core i):**
    *   Az Északi hidat beintegrálták a CPU-ba (System Agent). A memória-vezérlő a processzorban van (gyorsabb!).
    *   A Déli híd szerepét a PCH (Platform Controller Hub) vette át.

---

### 3.5 PCIe (PCI Express)
**Fogalom:** Modern, nagy sebességű, pont-pont (dedikált) soros busz.
**Analógia (Dedikált gyorsvasút):** Minden PCIe eszköznek (pl. videókártya, NVMe SSD) saját, közvetlen, gyors "vasútvonala" van a processzorhoz.
*   **Előny:** Nincs dugó, hatalmas sebesség, párhuzamosan működhetnek az eszközök.
*   **"Sávok" (Lanes):** x1, x4, x16. Minél több "vágány", annál több adat fér át.

---

### 3.6 USB-C (Univerzális Soros Busz - C típus)
**Fogalom:** Egy univerzális csatlakozó, ami sok mindenre jó (adat, töltés, videó).
**Analógia (Mindenes svájci bicska):** Egyetlen csatlakozó, ami tud:
*   Tölteni telefont (áram).
*   Másolni adatot (pendrive).
*   Kijelzőt vezérelni (monitor).
*   **Fordítható:** Mindegy, hogy hogyan dugod be.

#### USB által szállított csomagok típusai
*   **Időkritikus csomagok:** Állandó sebességgel érkeznek. Analógia: Élő közvetítés, nem késhet. (Pl. audio, videó).
*   **Nagy adatcsomagok:** Kevésbé prioritásosak. Analógia: Hatalmas fájl letöltése, ráér. (Pl. backup).

---

### 3.7 Párhuzamos Buszok vs. Soros Buszok

#### Párhuzamos Buszok (A régi autópálya)
**Analógia:** Több sávos autópálya. Sok autó (bit) egyszerre.
*   **Probléma:** Magas frekvencián a bitek "szétcsúsznak" (Jitter).
    *   **Delay Skew (Időbeli eltérés):** Az autók nem egyszerre érnek célba. Késni kell a leglassabbra, hogy mindenki megérkezzen.
    *   **EMI (Elektromágneses Interferancia):** "Zaj" az úton, ami eltorzítja a jeleket. Mintha a rádió bezörögne.
        ```
        Jel:       _--__--__--_
        EMI hatás: _-x_-x_-x-_ (torzult jel)
        ```
    *   **Keresztirányú áthallás (Crosstalk):** A szomszéd sávon (vezeték) hallani a forgalmat.

#### Soros Buszok (A modern gyorsvasút)
**Analógia:** Egy sáv, de a vonatok (bitek) hihetetlen gyorsan, szorosan egymás mögött haladnak.
*   **Előny:** Nincs Delay Skew, mert csak egy sáv van. Könnyebb kezelni a jelet.
*   **Eredmény:** Sokkal nagyobb sebesség, nagyobb távolságra is megbízható.

---

### 3.8 Modern Rendszerbuszok (A CPU belső "autópályái")

#### HyperTransport (HT) - AMD
**Analógia:** Egy kétirányú, pont-pont "alagút" két CPU között, vagy CPU és I/O között.
*   **Előny:** Alacsony késleltetés, magas sávszélesség.

#### QPI (QuickPath Interconnect) - Intel
**Analógia:** Az Intel válasza a HyperTransportra. Szintén pont-pont, nagy sebességű kapcsolat.
*   **Felépítése:** Pontosan 20 adatvonal (lane) irányonként. Ebből 16 adat, 2 protokoll, 2 CRC (hibaellenőrzés).
*   **Előny:** A memóriavezérlő közvetlenül a CPU-ban van (NUMA).
*   **DMI (Direct Media Interface):** Az olcsóbb Intel processzoroknál (i3/i5) a chipset felé nem a drága QPI-t, hanem a lassabb DMI-t használják.

<br>

## 4. Modul: I/O Rendszer (Bemenet/Kimenet)

Ez a modul arról szól, hogyan kommunikál a "agy" (CPU) a "kezekkel és szemekkel" (Perifériák).

### 4.1 Programozott I/O (A "Kézi vezérlés")
A legegyszerűbb, de leglassabb módszer. A CPU végzi a munka oroszlánrészét.
*   **Analógia:** A cégvezető (CPU) maga megy oda a fénymásolóhoz, beteszi a papírt, megvárja, kiveszi.
*   **Lekérdezéses (Polling):** A CPU folyton kérdezgeti az eszközt: "Kész vagy? Kész vagy?".
    *   **Hátrány:** A CPU nem tud mással foglalkozni, pazarolja az idejét.
*   **Megszakításos (Interrupt):** A CPU elindítja a folyamatot, majd visszamegy dolgozni. Az eszköz "szól" (megszakítás), ha végzett.
    *   **Előny:** Jobb, de az adatátvitelt (a papír elvételét) még mindig a CPU-nak kell csinálnia.

### 4.2 Az I/O port részei (A "Portásfülke")
Minden eszköznek van egy ilyen "fülkéje", amin keresztül kommunikál.
1.  **Parancs regiszter:** Ide írja a CPU, mit akar ("Olvass!").
2.  **Adat regiszterek (Input/Output):** Itt cserélnek gazdát az adatok ("Itt a csomag").
3.  **Állapotregiszter:** Itt jelzi az eszköz, hogy van-e (Ready/Busy).

### 4.3 Memóriában leképzett I/O működése
Hogyan éri el a CPU az eszközt?
*   **Feltétel nélküli adatátvitel:** A CPU nem kérdez, csak küld/fogad. Feltételezi, hogy az eszköz mindig készen áll (pl. egyszerű LED).
*   **Feltételes adatátvitel:** Először ellenőrzi az állapotot (Ready?), és csak akkor lép, ha az eszköz készen áll (Polling vagy Interrupt módszerrel).

### 4.4 DMA (Direct Memory Access - Közvetlen Memória Hozzáférés)
**Analógia:** A cégvezető (CPU) felvesz egy titkárnőt (DMA Vezérlő).
*   **Feladat:** "Másold át ezt a 100 oldalt a raktárba!"
*   **Működés (Blokkos adatátvitel folyamata):**
    1.  **Felparaméterezés:** A CPU megmondja a DMA-nak: *Honnan* (Eszköz), *Hova* (Memória), *Mennyit* (Blokk méret).
    2.  **Busz átadás:** A DMA kér engedélyt a busz használatára (`Bus Request`). A CPU megadja (`Bus Grant`) és hátralép.
    3.  **Munka:** A DMA önállóan átlapátolja az adatokat a memóriába. A CPU közben pihenhet vagy dolgozhat a Cache-ből.
    4.  **Vége:** Ha kész a blokk, a DMA szól a CPU-nak (Megszakítás), hogy végzett.
*   **Előny:** Tehermentesíti a CPU-t a favágó munkától.

### 4.5 I/O Csatornák (A "Nagyokos" DMA)
Főleg nagygépeknél (Mainframe). Ezek okosabbak, mint a DMA, saját kis programjuk van.
**Két típusuk:**
1.  **Szelektor csatorna:** Gyors eszközökhöz (pl. HDD).
    *   **Működés:** Egyszerre csak *egyetlen* eszközzel foglalkozik, de azzal teljes sebességgel. (Mint egy cső, amit teljesen kitölt a víz).
2.  **Multiplexer csatorna:** Lassú eszközökhöz (pl. nyomtató, billentyűzet).
    *   **Működés:** Egyszerre *több* eszközt szolgál ki felváltva (bájtonként vagy blokkonként). (Mint egy körforgalom, ahova sokan behajthatnak).

<br>

## 5. Modul: Megszakítási Rendszer (Interrupt System)

A megszakítás az a mechanizmus, amivel a "külvilág" jelezni tud a CPU-nak, hogy valami fontos történt.

### 5.1 Megszakítás definíciója
Olyan váratlan esemény (vagy hiba), ami miatt a processzornak abba kell hagynia az éppen futó programot, és azonnal reagálnia kell a problémára.
**Analógia (Tanóra):** A tanár (CPU) éppen magyaráz (program fut). Egy diák (Periféria) felemeli a kezét. A tanárnak el kell döntenie, hogy felszólítja-e (megszakítás kezelése) vagy figyelmen kívül hagyja.

### 5.2 Megszakítási okok és források
Prioritási sorrendben (a legfontosabbtól):
1.  **Géphibák:** "Tűz van!" (Pl. áramszünet, memória hiba). Nem lehet figyelmen kívül hagyni.
2.  **Külső források:** Valaki kívülről szólt. (Pl. Reset gomb, Hálózati adat érkezett).
3.  **I/O források:** A perifériák szólnak. (Pl. "Kész a nyomtatás", "Leütöttek egy billentyűt").
4.  **Programozási források:** A futó program csinált valamit.
    *   *Szándékos:* A program kér valamit az Operációs Rendszertől (System Call).
    *   *Nem várt (Kivétel):* Hiba történt (pl. 0-val való osztás, túlcsordulás).

### 5.3 Megszakítások csoportosítása
*   **Szinkron (Kivétel):** Mindig ugyanott történik a programban (pl. a 10. sornál van a hibás osztás).
*   **Aszinkron (Interrupt):** Bármikor, véletlenszerűen történhet (pl. mikor nyomja meg a felhasználó az 'A' betűt).
*   **Maszkolható:** "Most ne zavarjanak." (Letiltható).
*   **Nem maszkolható (NMI):** "Ezt muszáj meghallgatni!" (Nem tiltható le, pl. hardverhiba).

### 5.4 Megszakítás kiszolgálásának általános folyamata
1.  **Kérés (INTR):** A periféria jelet küld.
2.  **Engedélyezés:** A CPU megnézi, engedélyezve vannak-e a megszakítások.
3.  **Nyugtázás (INTACK):** A CPU visszaszól: "Rendben, figyelek".
4.  **Mentés (Kontextus váltás):** A CPU elmenti a `PC`-t (hol tartott) és a `Flag`-eket a Verembe (Stack), hogy később folytatni tudja.
5.  **Kiszolgálás (ISR - Interrupt Service Routine):** A CPU elugrik a megszakítást kezelő programrészhez (pl. elmenti a leütött karaktert).
6.  **Visszatérés:** A munka végeztével visszatölti a mentett állapotot (PC, Flag), és folytatja a főprogramot.

### 5.5 Megszakítási rendszerek szintjei

#### Egyszintű (A szigorú tanár)
Ha a tanár elkezd foglalkozni egy diákkal (megszakítás), senki más nem szólhat közbe, amíg be nem fejezte. Még az igazgató sem.
```text
[ Program ] ---> [ Megszakítás A ] ---> [ Program ]
                     ^
                     |
                     (B hiába próbálkozik, várnia kell)
```

#### Többszintű (A rangsorolt rendszer)
Ha egy "fontosabb" megszakítás jön, az félbeszakíthatja a "kevésbé fontosat".
**Analógia:** A tanár beszél a diákkal (A). Bejön az igazgató (B). A tanár félreteszi a diákot, beszél az igazgatóval, majd visszatér a diákhoz.
```text
[ Program ] -> [ Megszak. A ] -> [ Megszak. B (Fontosabb) ] -> [ Megszak. A ] -> [ Program ]
```

#### Többszintű, többvonalas (Osztályozott)
A megszakításokat csoportokba (osztályokba) soroljuk.
*   **Osztályok között:** Szigorú sorrend (pl. 1. osztály > 2. osztály).
*   **Osztályon belül:** Prioritás (pl. 'a' fontosabb mint 'b').
Ez a legrugalmasabb rendszer.

<br>

## 6. Modul: Gyorsítótár (Cache)

A Cache egy kisméretű, szupergyors memória a CPU és a RAM között, ami a sebességkülönbséget hidalja át.

### 6.1 Gyorsítótár definíciója
A processzorba integrált (SRAM) tároló, ami a memóriából (DRAM) leggyakrabban használt adatokat és utasításokat tárolja, hogy a CPU-nak ne kelljen várnia a lassú RAM-ra.
**Analógia (Íróasztal):**
*   **CPU:** Te, aki dolgozol.
*   **RAM (Memória):** A városi könyvtár (sok könyv, de messze van).
*   **Cache:** A könyvespolc az íróasztalodon (kevés könyv, de karnyújtásnyira).

### 6.2 Cache szintek (Hierarchia)
*   **L1 (Level 1):** A legkisebb és leggyorsabb, közvetlenül a magban. Külön van adatnak és utasításnak. (Analógia: A kezedben lévő könyv).
*   **L2 (Level 2):** Nagyobb, kicsit lassabb. (Analógia: A polc az asztalodon).
*   **L3 (Level 3):** A legnagyobb, leglassabb, gyakran közös a magok között. (Analógia: A szekrény a szobában).

### 6.3 Működése és Fogalmak
*   **Találati arány (Hit Rate):** Milyen gyakran találja meg a CPU az adatot a Cache-ben. Ha megtalálja: **Cache Hit**. Ha nem (és ki kell menni a RAM-ba): **Cache Miss**.
*   **Adatok a Cache-ben:** Nem csak egy bájtot hozunk át, hanem egy egész **blokkot** (Cache Line), mert valószínűleg a szomszédos adatokra is szükség lesz.
*   **TAG-ek:** Címkék, amik megmondják, hogy a Cache-ben lévő adat eredetileg melyik RAM címről származik.
*   **Visszakeresés:** A CPU a TAG alapján keresi az adatot (tartalom szerinti asszociatív keresés).

### 6.4 Helyettesítési stratégiák (Mit dobjunk ki?)
Ha megtelt a Cache (a polc), valaminek mennie kell, hogy jöhessen az új.
*   **FIFO (First In First Out):** A legrégebben betett blokkot dobjuk ki.
*   **LRU (Least Recently Used):** Azt dobjuk ki, amit a legrégebben *használtunk* (olvastunk/írtunk). Ez a leggyakoribb, mert a "népszerű" adatokat megtartja.
*   **LFU (Least Frequently Used):** Azt dobjuk ki, amit a legkevesebbszer használtunk.

### 6.5 Vezérlő bitek (Állapotjelzők)
*   **V (Valid) bit:** Érvényes-e az adat a Cache-ben? (Induláskor minden 0).
*   **D (Dirty) bit:** Módosult-e az adat a Cache-ben a RAM-hoz képest? (Ha igen, vissza kell írni, mielőtt kidobjuk).

### 6.6 Cache típusok (Leképzés szerint)
*   **Direct Mapping (Közvetlen):** Minden RAM blokknak *fix* helye van a Cache-ben. (Pl. a 10-es könyv csak a 2-es polcra mehet).
    *   *Előny:* Gyors, olcsó.
    *   *Hátrány:* Ütközések (ha két "2-es polcra való" könyv kell egyszerre).
*   **Full Associative (Teljesen asszociatív):** Bármelyik blokk bárhova kerülhet.
    *   *Előny:* Rugalmas.
    *   *Hátrány:* Lassú keresés (az egész polcot át kell nézni).
*   **N-way Set Associative (Csoport-asszociatív):** A Cache csoportokra (Set) van osztva. A blokknak fix csoportja van, de azon belül bárhova tehetjük (pl. 4 helyre).
    *   *Ez az arany középút.*

### 6.7 Adatszervezési módok
*   **Inclusive:** Az L1 tartalma benne van az L2-ben is. (Pazarlóbb, de egyszerűbb).
*   **Exclusive:** Ami az L1-ben van, az nincs az L2-ben. (Több hely, de bonyolultabb).

### 6.8 Cache Koherencia (Több mag esetén)
Ha több CPU mag van saját Cache-el, de közös memóriával, baj lehet, ha az egyik módosít egy adatot, de a másik még a régit látja.
*   **Cél:** Mindenki a legfrissebb adatot lássa.
*   **Érvényesítés módjai:**
    *   *Invalidáció:* Ha írok egy adatot, szólok a többieknek: "Dobjátok el a tiéteket, mert elavult!".
    *   *Felülírás:* Ha írok, elküldöm a többieknek az új értéket: "Frissítsétek a tiéteket!".

#### Koherencia Protokollok
*   **MESI:** 4 állapotot használ minden Cache Line-hoz.
    *   **M (Modified):** Én módosítottam, csak nálam van meg az új (Dirty), a RAM-ban régi van.
    *   **E (Exclusive):** Csak nálam van meg, de megegyezik a RAM-mal (Tiszta).
    *   **S (Shared):** Többünknél is megvan, megegyezik a RAM-mal (csak olvasásra).
    *   **I (Invalid):** Érvénytelen, üres.
*   **MOESI:** Bevezet egy **O (Owned)** állapotot. Ez lehetővé teszi, hogy a Cache-ek egymásnak küldjék át a módosított adatot anélkül, hogy előbb a lassú RAM-ba írnák vissza. (Gyorsabb adatcsere a magok között).

<br>

## 7. Modul: Memória

Ez a modul a számítógép elsődleges adattárolóját, a memóriát és annak fejlődését tárgyalja.

### 7.1 Memóriák csoportosítása
*   **RAM (Random Access Memory):** Írható/olvasható, nem maradandó (kikapcsoláskor törlődik). Ez az operatív tár.
*   **ROM (Read Only Memory):** Csak olvasható, maradandó. (BIOS).
*   **CMOS:** Kis fogyasztású memória, ami elemről is elmegy (dátum, beállítások tárolása).

### 7.2 Statikus vs. Dinamikus RAM

#### SRAM (Statikus RAM)
*   **Felépítés:** Flip-Flop áramkörök (4-6 tranzisztor). A tranzisztorok körbe kergetik a jelet, "emlékeznek" rá.
*   **Analógia (Villanykapcsoló):** Ha felkapcsolod, úgy marad, amíg van áram. Nem kell vele foglalkozni.
*   **Jellemző:** Nagyon gyors, de drága és sok helyet foglal. -> **Cache**.

#### DRAM (Dinamikus RAM)
*   **Felépítés:** 1 kondenzátor + 1 tranzisztor. A kondenzátor tárolja a töltést (bitet).
*   **Analógia (Lyukas vödör):** A vödörben lévő víz jelenti az adatot. A vödör picit lyukas, szivárog.
*   **Frissítés (Refresh):** Időnként újra kell tölteni a vödröt (kiolvasni és visszaírni), különben elveszik az adat.
*   **Jellemző:** Lassabb, de olcsó és nagyon kicsi (nagy kapacitás). -> **Rendszermemória**.

### 7.3 SDRAM és DDR Fejlődése

#### SDRAM (Synchronous DRAM)
**Analógia:** A "Vödrös ember" (DRAM) felvesz egy fülhallgatót, amiben hallja a karmester (CPU órajel) ütemét.
*   Szinkronban működik a rendszersínnel, pontosan ütemre adja az adatot.

#### DDR (Double Data Rate)
**Analógia:** A munkás eddig csak akkor adott egy vödröt, amikor a karmester *felemelte* a pálcáját (felmenő él).
*   **DDR:** A munkás már akkor is ad egy vödröt, amikor a karmester *leengedi* a pálcáját (lefutó él).
*   **Eredmény:** Ugyanannyi idő alatt kétszer annyi adatot mozgatunk meg.

#### DDR Evolúció (A sebesség növelése)
A cél: minél több adatot átvinni egyszerre.
*   **DDR1 (2n Prefetch):** 2 adatot készítünk elő a belső tárolóból a kimenetre.
*   **DDR2 (4n Prefetch):** 4 adatot készítünk elő. Magasabb órajel.
*   **DDR3 (8n Prefetch):** 8 adatot készítünk elő.
*   **DDR4:** Még gyorsabb, alacsonyabb fogyasztás, bankcsoportok bevezetése.
*   **DDR5 (16n Prefetch):** Két külön 32 bites csatorna modulonként, beépített hibajavítás (On-die ECC), PMIC (Power Management IC) a modulon.

### 7.4 Adattárolás és Kiolvasás (A Mátrix)
A memória cellák egy hatalmas táblázatban (mátrixban) vannak, sorokra és oszlopokra osztva. Több ilyen mátrix alkot egy **Bankot**.

#### SDRAM Időzítései (A "Késleltetések")
Amikor kérünk egy adatot, nem kapjuk meg azonnal. Fizikai lépéseken kell végigmenni.
**Analógia (Könyvtár):**
1.  **tRAS (Active to Precharge):** Kinyitod az ajtót (Sor aktiválása). Nyitva kell tartanod, amíg dolgozol.
2.  **tRCD (RAS to CAS Delay):** Odasétálsz a megfelelő polchoz (Sor kiválasztása) majd megkeresed a könyvet (Oszlop kiválasztása). Ez a séta időbe telik.
3.  **tCL (CAS Latency):** Kiveszed a könyvet és elviszed a pultig (Kimenet). Ez a szállítási idő. (Ez a legismertebb paraméter).
4.  **tRP (Row Precharge):** Mielőtt átmennél egy másik sorba, vissza kell tenned a könyveket és rendet rakni (Sor bezárása / Töltés visszaállítása).
5.  **tRC (Row Cycle):** A teljes kör: kinyitás, olvasás, bezárás. Ennyi idő kell, mire újra nyithatunk egy sort.

### 7.5 DIMM (Dual In-line Memory Module)
A "RAM stick", amit a gépbe dugsz.
*   **Registered (Pufferelt):** Van rajta egy "előszoba" (Regiszter chip). A CPU ide küldi a parancsot, és a Regiszter adja tovább a memóriachipeknek. Stabilabb, sok RAM esetén kötelező (Szerverek), de picit lassabb.
*   **ECC (Error Correcting Code):** Extra biteket tárol hibajavításra. Ha egy bit "átfordul" (pl. kozmikus sugárzás miatt), észreveszi és kijavítja.

<br>

## 8. Modul: Tranzisztortechnológiák

Ez a modul a processzorok legkisebb építőelemének, a tranzisztornak a fejlődését mutatja be a "csöpögő kerti csaptól" a modern 3D-s kapukig.

### 8.1 Mi a tranzisztor?
Egy elektronikusan vezérelhető **kapcsoló**. Ha áramot (feszültséget) adunk a vezérlő lábára (Gate), akkor átengedi az áramot (1-es), ha nem, akkor elzárja (0-s). Ezekből a kapcsolókból épül fel minden logikai kapu és processzor.

### 8.2 Fontos méretek
*   **Pitch:** Két tranzisztor közötti távolság (minél kisebb, annál többet zsúfolhatunk egy lapkára).
*   **Gate Length (Kapu hossza):** A kapcsoló "mérete". Ez határozza meg a gyártástechnológiát (pl. 14nm, 5nm).

### 8.3 A MOSFET Tranzisztor (A klasszikus, "síkbeli" tranzisztor)
**Részei és Működése (A Kerti Csap Analógia):**
*   **Source (Forrás):** A vízhálózat, ahonnan az elektronok jönnek.
*   **Drain (Nyelő):** A slag vége, ahova az elektronoknak el kell jutniuk.
*   **Gate (Kapu):** A csap tekerője.
*   **Substrate (Hordozó):** A föld, amiben a cső fut.
*   **Oxid réteg:** A tömítés a csap tekerője alatt.

**Működés:** Ha feszültséget adunk a Gate-re (eltekerjük a csapot), az elektromos tér egy "hidat" (csatornát) hoz létre a földben a Source és a Drain között, amin átfolyhat az áram.

### 8.4 A miniatürizálás problémái és megoldásai

#### Szivárgás (Leakage)
Ahogy a tranzisztorok egyre kisebbek lettek, a "tömítés" (oxid réteg) túl vékony lett.
*   **Probléma:** A csap akkor is csöpögött (folyt az áram), amikor el volt zárva. Ez melegedést és fogyasztást okoz.

#### Megoldások:

1.  **Feszített Szilícium (Strained Silicon):**
    *   **Analógia:** Széthúzzuk az atomokat, mint egy gumit, így több hely lesz közöttük az elektronoknak.
    *   **Eredmény:** Gyorsabb áramlás, nagyobb teljesítmény.

2.  **HKMG (High-k Metal Gate):**
    *   **Analógia:** Kicserélték a régi gumi tömítést (szilícium-dioxid) egy speciális, vastagabb kerámia anyagra (High-k), ami jobban szigetel, de mégis engedi a vezérlést.
    *   **Eredmény:** Kevesebb szivárgás.

3.  **FinFET (3D Tranzisztor - A "Marokra fogott" slag)**
    *   A régi MOSFET síkban volt (csak ráléptünk a slagra felülről). Ez kis méretnél már nem zárt rendesen.
    *   **Megoldás:** Kiemelték a csatornát a síkból (ez a Fin/Uszony). A Kapu most már **három oldalról** (bal, jobb, fent) öleli körbe.
    *   **Eredmény:** Sokkal jobb kontroll, gyorsabb kapcsolás, kevesebb szivárgás.

4.  **GAAFET (Gate All Around - A "Gyűrű")**
    *   A legújabb technológia (3nm és alatta). A 3 oldal sem elég már.
    *   **Megoldás:** A Kapu **mind a 4 oldalról** (teljesen körbe) veszi a csatornát, mint egy gyűrű.
    *   **Nano-sheet:** A csatorna nem egy drót, hanem lapos szalagok (sheet) egymás fölött, hogy több áram férjen át.
    *   **Eredmény:** Tökéletes vezérlés, maximális hatékonyság.

### 8.5 Adatok és Chipek (Tanári anyagból)
*   **1971:** Intel 4004 (10 µm).
*   **2023:** Apple M3 Max (3 nm, GAAFET, 92 milliárd tranzisztor).
*   **2025:** AMD EPYC 9965 (192 mag).
*   **AI Chipek:** Tenzor magok a mátrixszorzáshoz (MAC műveletek).

<br>

## 9. Modul: Párhuzamos Technológiák

Ez a modul bemutatja, hogyan lehet a számításokat felgyorsítani több erőforrás egyidejű használatával.

### 9.1 Párhuzamosság típusai

#### Funkció szerint
*   **Rendelkezésre álló:** Elméletileg mennyi párhuzamosság van a feladatban.
*   **Kihasználható:** Mennyit tudunk ebből ténylegesen megvalósítani a hardveren.

#### Elhelyezkedés szerint (A két nagy iskola)
1.  **Időbeli (Pipeline / Futószalag):**
    *   **Analógia (Autómosó):** Nem várjuk meg, amíg az első autó teljesen kész, hanem amint átmegy a mosásból az öblítésbe, már engedjük is be a következőt.
    *   **Eredmény:** Egyszerre több fázisban dolgozunk különböző autókon.
2.  **Térbeli:**
    *   **Analógia (Több kassza):** Kinyitunk még 3 kasszát a boltban. Egyszerre 3 vevőt szolgálunk ki egymás mellett. (Több mag, több ALU).

### 9.2 Flynn-féle osztályozás (A 4 kategória)
Utasítások (Instruction) és Adatok (Data) száma szerint.

1.  **SISD (Single Instruction, Single Data):**
    *   **Analógia:** Egy szakács vág egy répát. (Hagyományos, régi PC).
2.  **SIMD (Single Instruction, Multiple Data):**
    *   **Analógia:** A szakács egyetlen bárdcsapással egyszerre 4 répát vág el. (Videókártyák, Multimédia).
3.  **MISD (Multiple Instruction, Single Data):**
    *   **Analógia:** Egy répát vizsgál 3 tudós egyszerre. (Ritka, űrsiklóknál hibaellenőrzésre).
4.  **MIMD (Multiple Instruction, Multiple Data):**
    *   **Analógia:** Étteremkonyha. Mindenki mást csinál más alapanyaggal. (Szerverek, többmagos CPU-k).

### 9.3 Utasítás végrehajtás lépései (Pipeline fázisok)
1.  **F (Fetch):** Utasítás lehívása.
2.  **D (Decode):** Dekódolás (Mit kell tenni?).
3.  **E (Execute):** Végrehajtás.
4.  **W/B (Write Back):** Eredmény visszaírása.

### 9.4 Függőségek (A párhuzamosítás ellenségei)

#### Adatfüggőség
*   **Valós (RAW - Read After Write):** Nem sütheted ki a húst, amíg be nem paníroztad. Meg kell várni az előző lépés eredményét.
*   **Ál-adatfüggőség (WAR / WAW):** Két szakács veszekszik ugyanazon a tányéron (Regiszter), pedig az ételek nem függnek össze.
    *   *Megoldás:* **Regiszter átnevezés** ("Használj egy tiszta tányért!").
*   **Ciklusbeli:** Az egyik kör eredménye kell a következőhöz.

#### Vezérlésfüggőség
*   **Analógia (Útelágazás):** Nem tudjuk, merre menjen a busz (Pipeline), amíg a sofőr el nem olvassa a táblát (`if` feltétel).
*   **Megoldás:** **Elágazásbecslés** ("Tippeljünk, és menjünk arra!").

#### Erőforrásfüggőség
*   **Analógia:** Mindenki az egyetlen éles kést akarja használni.
*   **Megoldás:** Több végrehajtó egység.

### 9.5 Konzisztencia (A rend fenntartása)
A processzor belül "csalhat" (sorrenden kívüli végrehajtás), de kifelé azt a látszatot kell keltenie, hogy mindent szépen sorban csinált.
*   **Szekvenciális konzisztencia:** A programozó sorrendjének betartása.
*   **Kivételkezelés konzisztenciája:** Ha hiba történik, pontosan tudnunk kell, hol álltunk meg, és a hiba utáni (már esetleg végrehajtott) utasításokat vissza kell vonni ("Pontos kivételkezelés").

<br>

## 10. Modul: Futószalagos Processzorok (Pipeline)

A futószalagos processzorok (pipeline) alapvető módosítást hoztak a CPU működésében, felgyorsítva a feladatok végrehajtását.

### 10.1 Mi az a futószalag (Pipeline)?

**Fogalom:** Az utasítások végrehajtását több, egymástól elkülöníthető lépésre bontjuk, és ezeket a lépéseket párhuzamosan, de különböző utasításokon hajtjuk végre.
**Analógia (Autómosó):** Képzelj el egy autómosót, ahol a mosás, öblítés és szárítás külön állomáson történik.
*   **Hagyományos (Nem pipeline):** Az első autó beáll, lemossák, leöblítik, megszárítják. Csak amikor ez az autó teljesen kihajtott, akkor állhat be a következő. Nagyon lassú, az állomások sokat várnak.
*   **Futószalagos:**
    1.  Beáll az első autó a mosásra.
    2.  Amikor az első autó átmegy az öblítésre, a mosó állomás felszabadul, és **azonnal** beállhat a második autó a mosásra.
    3.  Amikor az első autó a szárítóra megy, a mosó és az öblítő állomás is foglalt.
*   **Eredmény:** Bár egyetlen autó "átfutási ideje" (latency) nem csökken (ugyanannyi idő alatt lesz tiszta), sokkal több autót (utasítást) tudunk óránként kimosni (megnő az áteresztőképesség / throughput).

### A pipeline lépései (Tipikus 4-5 lépcső)
1.  **Fetch (Lehívás):** Az utasítás "kigyűjtése" a memóriából.
2.  **Decode (Dekódolás):** Az utasítás értelmezése (mit kell csinálni, kivel kell csinálni).
3.  **Execute (Végrehajtás):** A tényleges munka (összeadás, kivonás).
4.  **Writeback (Visszaírás):** Az eredmény beírása egy regiszterbe.

---

### 10.2 RISC vs. CISC Architektúrák

Ez két alapvető filozófia, hogyan "beszél" a processzor a programokkal.

### CISC (Complex Instruction Set Computing) - A "Svájci Bicska"
**Filozófia:** Kevés, de nagyon "okos" és komplex utasítás.
**Analógia (Konyhai robotgép "Gulyásleves" funkcióval):
*   **Utasítás:** Van egy "Gulyásleves készítés" gomb (egy utasítás).
*   **Működés:** Ez a gomb lenyomva automatikusan elindítja az összes szükséges lépést: húst vág, hagymát pirít, paprikát ad hozzá, vizet tölt rá, főzi. (A CISC utasítás sok mikro-utasításból áll).
*   **Előny:** A szakácsnak (programozónak) nagyon kevés utasítást kell adnia. A program (recept) nagyon rövid.
*   **Hátrány:** A robotgép belül iszonyatosan bonyolult, mert mindent tudnia kell. Nehéz megépíteni és ha csak hagymát akarsz vágni, akkor is be kell indítani a bonyolult rendszert (lassabb, pazarlóbb).

### RISC (Reduced Instruction Set Computing) - A "Profi Késkészlet"
**Filozófia:** Sok, de nagyon egyszerű és atomi utasítás.
**Analógia (Profi séf és a kései):
*   **Utasítások:** Nincs "Gulyásleves" gomb. Van "Vágd a húst", "Pirítsd a hagymát", "Adj vizet".
*   **Működés:** A séf (vagyis a Fordítóprogram) összeállítja a "receptet" ezekből az egyszerű lépésekből.
*   **Előny:** A kései (hardver) egyszerűek, gyorsak, és olcsón gyárthatók. A séf (Fordítóprogram) rugalmasan tudja kombinálni őket, és villámgyorsan dolgozhat.
*   **Hátrány:** A recept (programkód) sokkal hosszabb lesz, mert mindent lépésről lépésre kell leírni.

### A fő különbségek és miért született a RISC:
*   **Utasítások hossza:** CISC = változó; RISC = fix (pl. 32 bit). A fix hossz megkönnyíti a Pipeline működését.
*   **Operandusok:** CISC = gyakran 2 operandus, memóriával is dolgozik; RISC = gyakran 3 regiszter operandus, memóriához csak LOAD/STORE nyúl.
*   **Regiszterek:** CISC = kevés; RISC = sok. A sok regiszter gyorsítja a munkát, mert nem kell a lassú memóriába nyúlni.
*   **Compiler:** A RISC-et a fordítóprogramok számára tervezték.

---

### 10.3 Hibrid Architektúra (A ma - x86 processzorok)

**Fogalom:** Kívülről CISC (x86 kompatibilitás), belülről RISC (hatékony végrehajtás).
**Analógia (A konyhai robotgép, ami tele van profi séfekkel):
*   **Kívülről (a programozó felé):** Még mindig megnyomhatod a "Gulyásleves" gombot (CISC utasítás).
*   **Belülről (a processzor):** A gép "szája" (Dekóder) azonnal lefordítja ezt a bonyolult parancsot egy sor egyszerű "vágd, pirítsd, kavard" utasításra (RISC mikro-utasításokra).
*   Ezeket a mikro-utasításokat a belső, RISC-elveken működő "profi séfek" (végrehajtó egységek) villámgyorsan, párhuzamosan és sorrenden kívül végrehajtják.
*   **Eredmény:** Fenntartjuk a régi szoftverekkel való kompatibilitást, de ki tudjuk használni a RISC alapú belső architektúra sebességét és hatékonyságát.

Ezért van az, hogy a modern Intel és AMD CPU-k (amik x86 CISC utasításokat fogadnak) belül tulajdonképpen RISC magokból állnak.

<br>

## 11. Modul: Szuperskalár Architektúrák

A szuperskalár architektúrák célja, hogy egyetlen órajelciklus alatt több utasítást is elkezdjenek végrehajtani.

### 11.1 Szuperskalár Működés
**Fogalom:** Egy órajelciklus alatt több utasítást indítunk el a futószalagon (párhuzamosan).
**Analógia (Több sávos autómosó):**
*   **Futószalag (Pipeline):** Egy autó áll be a mosóba.
*   **Szuperskalár:** Több mosó "sávot" építünk egymás mellé. Így egy időben 2-4 autót is be tudunk engedni (kibocsátani).
*   **Eredmény:** Még nagyobb áteresztőképesség, még több utasítás végez el egy időben.

### 11.2 Harvard Architektúra
**Fogalom:** Különálló buszok (és Cache) az utasításoknak és az adatoknak.
**Analógia (Konyha külön bejárattal):
*   **Neumann:** Egyetlen ajtó van a konyhára. Ezen járnak be a rendelések (utasítások) és hordják ki az ételeket (adatok). Folyton útban vannak egymásnak.
*   **Harvard:** Van egy külön bejárat a rendeléseknek és egy külön ajtó az ételek kihozatalára.
*   **Előny:** Nem akadályozzák egymást, gyorsabb a ki- és bejárás. A modern processzorok belül, az L1 Cache szinten gyakran használnak Harvard architektúrát (külön L1 I-Cache az utasításoknak és L1 D-Cache az adatoknak).

---

### 11.3 Generációk és Dinamikus Végrehajtás

#### Első Generáció (Kezdetek)
*   Statikus elágazásbecslés (mindig ugyanazt tippeli).
*   Sorrendi végrehajtás (ha egy utasítás megakadt, a mögötte lévők is vártak).

#### Második Generáció (A nagy áttörés)
*   **Dinamikus Sorrenden Kívüli Végrehajtás (Out of Order):**
    *   **Analógia (Okos postás):** A postás nem vár a liftre a 10. emeleti csomaggal, hanem közben kézbesíti a levelet a földszinten. Megcseréli a sorrendet a hatékonyságért.
*   **Regiszter Átnevezés:** Megszünteti az ál-adatfüggőségeket (WAR, WAW).
    *   **Analógia (Tiszta tányér):** Két vendég is a "Piros tányért" kéri. Ahelyett, hogy várakoztatnánk a másodikat, adunk neki egy Kék tányért, de ráírjuk egy cetlire, hogy "Ez most a Piros".
*   **Dinamikus Elágazásbecslés:** A processzor "tanul". Megjegyzi, hogy az előző 10 alkalommal merre mentünk az elágazásnál, és most is arra tippel.

#### Harmadik Generáció
*   Még több párhuzamos szál, még okosabb becslés.
*   **SIMD (Single Instruction Multiple Data):**
    *   **Analógia:** A szakács egyetlen bárdcsapással egyszerre 8 répát vág el.
    *   **Használat:** Multimédia (kép, videó), ahol sok pixelre kell ugyanazt a műveletet (pl. fényerő növelés) alkalmazni.
    *   Különösen széles regisztereket igényel (pl. 128 vagy 256 bit).

<br>

## 12. Modul: Netburst és Szálszintű Párhuzamosítás

Ez a modul a modern processzorok utolsó, nagy ugrását tárgyalja a sebesség növelésében, és bevezeti a szálak fogalmát.

### 12.1 Netburst Architektúra (Intel Pentium 4 - A "Versenyautó")

**Filozófia:** Azt hitték, a processzor órajelének (MHz/GHz) növelése a minden.
**Analógia (Egy versenyautó, ami forrófejű):
*   **Hosszú Futószalag:** A Netburst-ben (Pentium 4) iszonyatosan hosszú futószalagot építettek (20-30 lépcső). Az autók (utasítások) sebessége elképesztő volt.
*   **Hatalmas büntetés:** Ha az elágazásbecslés hibázott, a hosszú futószalagot teljesen ki kellett üríteni és újra feltölteni. Ez óriási időveszteség volt. (Mintha a 30 állomásos autómosóból kellene kitolatni).
*   **Túlmelegedés:** A hatalmas órajel miatt rengeteget fogyasztott és melegedett. (A motor iszonyatosan forró volt).
*   **Replay System:** Egy "biztonsági háló", ami újra elküldte az utasításokat, ha azok nem hajtódtak végre elsőre (pl. adatfüggőség miatt).

--- 

### 12.2 Szálszintű Párhuzamosítás (SMT / Hyper-Threading)

**Fogalom:** Egy fizikai processzormag (vagy annak végrehajtó egységei) több program szálat is képes párhuzamosan futtatni, a kihasználatlan erőforrások kiaknázásával.
**Analógia (A zsonglőr, aki két labdával is tud egyszerre):
*   **Zsonglőr (CPU mag):** Egyetlen fizikai mag.
*   **Labdák (Programszálak):** Amikor egy program fut (egy szál), néha várnia kell valamire (pl. adat a memóriából), ekkor a zsonglőr keze üres.
*   **Hyper-Threading (SMT - Simultaneous MultiThreading):** A processzor azt mondja: "Amíg az egyik szál vár, miért ne kezdeném el a másik szál feladatát?".
    *   A zsonglőr egyszerre 4 labdával zsonglőrködik (2 szál feladatai).
    *   Amikor az egyik labda a levegőben van (1. szál vár), a zsonglőr a másik labdával (2. szál) folytatja a játékot. Így a keze (a CPU végrehajtó egységei) sosem áll meg.
*   **Eredmény:** Az operációs rendszer azt hiszi, két külön "zsonglőr" (logikai mag) van, pedig csak egy, aki nagyon ügyesen használja ki az idejét. Ezáltal növeli a mag kihasználtságát és a teljesítményt.

---

### 12.3 A Szál (Thread)

**Fogalom:** A program legkisebb önállóan futtatható része.
**Analógia (Főzés közben a szakács):
*   **Program:** Egy komplett receptkönyv.
*   **Szál:** Egy konkrét recept, pl. a "Húsleves recept". Ez a recept önállóan megfőzhető.
*   **Több szál:** A szakács (CPU) egyszerre több receptet (húslevest, pörköltet) főz, párhuzamosan.
*   **Szálszintű párhuzamosítás:** A CPU-n belüli üresjáratokat használjuk ki, hogy több receptet (szálat) futtassunk egyszerre.

### 12.4 Szemcsézettség (Granularity) - Milyen sűrűn váltunk?
*   **Finoman szemcsézett:** Nagyon gyakran váltunk a receptek (szálak) között (pl. minden kanál keverés után, órajelenként). A "zsonglőr" nagyon gyorsan vált a labdák között.
*   **Durván szemcsézett:** Csak akkor váltunk receptet, ha az aktuálisnál valami komolyabb gát (pl. elfogyott a víz) van. A "zsonglőr" csak akkor vált labdát, ha az aktuális labda leesik vagy nagyon sokáig van a levegőben.

# Kérdések és Válaszok - Számítógép Architektúrák

Ez a dokumentum a `vizsga/feltoltott_kerdesek.md` alapján készült, strukturált formában.

## 1. Modul: Számítási Modellek és Alapok

**1. Mit jelent a számítási modell kifejezés, sorolja fel a jellemzőit!**
_(Gyakoriság: ritka)_
A szamitasi modell a szamitasi feladat, vegrehajto mechanizmus és a vezérlés közti kapcsolatot irja le. Nem foglalkozik konkrét hardverrel csak az elvekkel
Három fő jellemzője:

- Min hajtjuk végre (adatok, objektumok)
- Hogyan képezzük le a feladatot (milyen programozasi paradigmaval irjuk le -> procedurális, deklaratív)
- Milyen modon vezereljuk a sorrendet? (vezerles meghajtott, adat meghajtott, igeny meghajtott)

---

**2. Mi alapján csoportosítjuk a számítási modelleket? Az elsőben milyen modellek vannak?**
_(Gyakoriság: kevésbé ritka)_

- Szamitasi modelljuk szerint
  - Szekvenciális -> egy utasítás fut egyszerre
  - Párhuzamos -> tobb utasitas fut parhuzamosan egyszerre
- Vezérlés meghajtasa szerint
  - vezerles meghajtott -> van egy program counter ami lepesrol lepesre vegigmegy mindenen
  - adat meghajtott -> streber modell, amint van adat rogton nekilat a munkank
  - igeny meghajtott -> csak akkor szamol amikor muszaj a vegeredmenytol szamol visszafele.
- Problema leirasa szerint
  - Procedurális -> leirjuk a lepeseket hogyan kell megoldani a problemat
  - Deklarativ -> csak a vegeredmenyt irjuk le hogy mit varunk el a hatterben o csinalhat barmit

---

**3. Jellemezze a Neumann adatmodellt!**
_(Gyakoriság: gyakori)_
A neumann modell proceduralis modell aminel leirjuk lepesrol lepesre mit szeretnenk csinalni. Valtozokat dekralalunk majd az ebben levo adatokat manipulaljuk. Egy program counter megy vegig a lepeseken es hajtja oket vegre. Vigyazni kell mert elozmeny erzekeny igy ha ugrunk a-bol b-be es kozben adatot modositunk lehet arra az adatra mashol is hivatkozunk egy a kesobbiekben hibaba futhatunk. Nehezen lehet parhuzamositani hiszen a lepesek egymas utan kovetkeznek.

Helyesbítés:
Az adatok és a programkód közös memoriaban van. Implicit statikus szekvencia -> pc mindig lepesenkent halad elore.

---

**4. Jellemezze az adatfolyam modellt!**
_(Gyakoriság: gyakori)_
Az adatfolyam modell a streber modell neven hiresult el. Itt amint megjelenik az adat amit egy halmazkent tarolunk azonnal nekilat a munkanak. Egy grafkent kell elkepzelni ahol az eleken mozognak az adatok a csomopontokban pedig muveleteket vegzunk el. Egyszeru parhuzamositani mert ket csomoponton az adatok tudnak egyszerre szamolodni. Itt nincs program counter hanem egybol a megvalositasra torekszik.

Helyesbites
Nincs mellekhatas igy ha egy fuggvenyt meghivsz egy atahalmazzal akkor mindig egy kimenetet fogsz kapni. Mivel nincsenek globalis valtozok. Nincsen kozos memoria az adatok tokenkent kozlekednek a fuggvenyek kozott es ezert csak az az adat letezik ami epp a fuggvenynel van.

---

**5. Hasonlítsa össze a Neumann és az adatfolyam modellt a tanult jellemzők alapján!**
_(Gyakoriság: ritka)_

A neumann modellt nehez parhuzamositani mivel lepesenkent megy vegig minden utasitason ezzel szemben az adatfolyam modellt konnyu parhuzamositani hiszen az adatok tokenkent mennek vegig es egyszerre lehet tobb szamitast vegezni egy adathalmazzal. A neumann modell elozmeny erzekeny mert a valtozokat hasznalunk amiket ha nem megfelelo sorrendben hivunk meg megzavarhatjak a szamitast, mig az adatfolyamnal nincs is memoria es valtozok igy nem kell az adatok manipulalasa miatt aggodni.

---

## 2. Modul: Logikai és Fizikai Architektúra

**6. Sorolja fel a processzor szintű logikai és fizikai architektúra elemeit, illetve a rendszerszintű fizikai architektúra elemeit!**
_(Gyakoriság: kevésbé ritka)_

a fizikai architekturanak az elepei ha szamitogep szemszogebol nezzuk akkor van a cpu a buszrendszer az io rendszer ha processzor szinten nezzuk akkor van az alu, megszakitasok, program counter, memoria A fizikai architekturanal az a fontos hogy az alkatreszeket tudjuk mit szeretnenk belerakni ahhoz hogy elerjuk a celunkat a logikai architekturanal azt irjuk le hogy mi mit csinaljon es hogyan teljesen lenyegtelen milyen alkatresszel oldjuk meg csak a lenyeg hogy meg legyen oldva. A szamitogep szinten az OS ellenorzi egy egy feladat megoldasat processzori szinten pedig a programozo felelossege jol megirni a program kodot hogy a gep azt csinalja amit szeretne logikai szinten a processzor es a szamitogep is egy feketedobozkent mukodik

Javitas:
Rendszer szintu fizikai

- CPU
- MEMORIA
- IO
- BUSZRENDSZER

Processzor szintu fizikai

- ALU
- Vezerloegyseg
- Regiszterek
- Belso buszok

Processzor szintu logikai

- Adattér
- Adatmanipulacios fa
- Allapotter
- Allapotmuveletek

---

**7. Mit jelent az adattér kifejezés, milyen 2 részből áll? Hasonlítsa össze ezeket! Mi határozza meg a címtér méretét?**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: A címbusz szélessége határozza meg a méretét. A 2 rész a memóriatér és a regisztertér._

Az adattér az ahol az adatok várakoznak a felhasznalasra. Van a memoriater es a regiszterter.
A memoriaterben van

- virtualis memoria -> lassu, nagy, programozo latja, hattertaron helyezkedik el
- fizikai memoria -> pici gyors es kulon lapkan van de ezt a cpu kezeli mit hova rak eppen

A regiszterterben tobb fajt regiszter van

- univerzalis regiszter -> a gyakran hasznalt dolgok itt varakoznak ide barmilyen adatot fel lehet venni
- egyszeru regiszter -> ez tulajdonkepp egy akkumulator amin egy adatot lehet tarolni
- Stack regiszter -> elonye nem kell cimezni es egyszeru utasitas -> gyors, hatranya -> operandusos kiolvasas csak szekvencialisan
- Dedikalt regiszter -> csak egy fajta adathoz lehet csak hasznalni
- tobbszoros regiszterkeszlet, amikor egy regiszternek a vege vagyis az out bitje egy masik input regiszternek az input bitjevel egy helyen van igy nem kell kontextust valtani tehat sokkal gyorsabb az adatfeldolgozas. Ezeket tobb szinten szoktak csinalni, de altalaban max 8 ilyen fuznek ossze mert az meg pont a hataron van a gazdasagi es felhasznalasi kerdes miatt. Valamint van a cimezheto regiszterter ahol van egy nagy regiszterter es oda lehet cimezni hogy az elso 4 az egyik programnak kell a masodik 4 egy masiknak, nyolvan az in es out regiszterek ertelemszeruen egy helyre mutatnak a gyorsabb adatvaltas vegett.

Az adatter merete a cimbusz szelessegetol fugg

---

**8. Hasonlítsa össze a virtuális és fizikai memóriateret!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Virtuális és a fizikai memória összehasonlítása + itt szokott kelleni a 2 felhasználó számára transzparens rész is a virtuális memóriához._

A virtualis memoriateret a programozo latja es vegtelennek tunik o ugy latja mintha a sajat elso adata a 0x0000 cimen lenne pedig ez nem igy van. Van egy memory management unit ami adatmozgatas kozben cimezi a virtualis memoriabol a fizikaiba az adatokat. Ez az oda vissza cimzes teljesen transzparens es nem veszi eszre a felhasznalo. Minden programnak sajat virtualis memoriaja van. A fizikai memoriater veges de gyors mert sajat busza van ami a cpuhoz koti. Ez fregmentalt, lyukacsos lehet es veges mert csak annyi van ami eppen a modulon van.

---

**9. Milyen típusai vannak a többszörös regiszterkészletnek? Jellemezze a legfejlettebbet!**
_(Gyakoriság: gyakori)_

A többszöri regiszterkeszletet azert talaltak ki, hogy gyorsitsak a kontextusok kozti valtast es ezt ugy oldjak meg hogy egy egy regiszterkeszletnek az in es out regiszterei ugyan ott vannak igy amikor valtani kell az elso adat rogton ott is van igy nem kell meg kulon beolvasni, hanem lehet vele ugykodni. Az egyik megvalositasi mod hogy fizikailag ugy helyezik el a regisztereket egymas mellett hogy atfedesek legyenek a masik, hogy van egy nagy regiszterkeszlet es ezen belul lehet cimezni. Ez azert jo mert nincs fix meret lehet valaminek csak ketto regiszter kell valaminek meg 5 ilyenkor tudnak egymasra cimezni hogy az elso ketto az egyik utasitase mig a masik 5 egy masik utasitase. Itt is vannak ugyan ugy atfedesek a gyorsabb valtas vegett.

---

**10. Jellemezze a többszörös regiszterkészletet!**
_(Gyakoriság: ritka)_
_Megjegyzés: Inkább az ez előtti kérdés szokott lenni._
<Hely a válasznak>

---

**11. Mit jelent az adatmanipulációs fa kifejezés, milyen szintjei vannak?**
_(Gyakoriság: kihalt)_

Adattipusok: leirja hogy milyen adattipusokat ertelmezhetunk
Muveletek: Megmutatja hog yaz adott atattipusokon milyen muveletek ertelmezhetok
Operandus tipusai: megkulonboztetjuk az operandusokat szamuk es tipusuk szerint
CImzesi modok: engedelyezett lepesek
Gepi kod: minden architekturan mas

---

**12. Mit jelent a gépi kódú utasítás, milyen részekből áll?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Gondolom ez az MK + Címrész dolog akar lenni._

A gepi kodu utasitas ket reszbol all maga az muveleti kod ami megmondja hogy mit kell csinalni, valamint a cimresz ezek az operandusokat adjak megmondja melyik adat hol talalhato.
A gepi kodu utasitasokat fel lehet bontani az operandusok szama szerint:
3 operandusos amikor a ket elso operandussal dolgozunk es a harmadikba mentunk,
2 operandusos amikor a kettovel csinalunk valamit majd ezt a masodikba mentjuk
1 operandusos amikor az accumulatort is hasznalatba vesszuk igy es az operandusunkat hasznaljuk pl Acc = Acc + A
0 operandusos amikor az adatok egy stackben vannak mi megadjuk, hogy add o kiveszi a felso kettot osszeadja majd visszairja.

---

**13. Mutassa be az architektúra rajzát! (CPU felépítés rajza)**
_(Gyakoriság: kihalt)_
_Megjegyzés: Elvileg ilyen rajzokat nem kér már. VISZONT! A CPU regiszterei kellenek (MAR, MDR, IR, PC stb.)_

A cpu legfontosabb regiszterei a kovetkezok:
MAR - Memory Address Register, ide irja ki a cpu hogy eppen melyik memoria cimet fogja olvasni
MDR - Memory Data Register, ide irja ki a cpu az adatokat amit a memoriabol kiolvasott
PC - Program counter, ez mindig a kovetkezo feladat cimere mutat
IR - Instruction Register, ez az eppen futo folyamat vagyis az instrukcio
DEC - Decoder, ez forditja a feladatot a gep szamara erthetore
ALU - ez hajtja vegre a feladatot
AC - Accumulator regiszter ez az ALU fog munka regisztere ide jonnek a muveletek eredmenyei
CU - COntrol Unit, ez iranyit mindent hogy mi mit csinaljon

---

**14. Gépi kód levezetése, utasítás lehívás + tárolás bemutatása**
_(Gyakoriság: ritka)_
_Megjegyzés: Van egy ilyen dia, amit elvileg csak BSc-n kér, gyakorlatilag ki tudja. Nem tudom, hogy amikor a "gépi utasítást" kéri az ez, vagy a "gépi kódú utasítás"._

ADD m1 m2

Fetch

- MAR <- PC
- MDR <- [MAR]
- IR <- MDR
- PC <- PC + 1

Execution 1

- DEC <- IR
- MAR <- DEC cimresz (m1)
- MDR <- [MAR]
- AC <- MDR

Execution 2

- DEC <- IR
- MAR <- DEC cimresz (m2)
- MDR <- [MAR]
- AC <- ACC + MDR => ALU muvelet

Store

- DEC <- IR
- MAR <- DEC cimresz (m1)
- MDR <- AC
- [MAR] <- MDR

---

**15. 0, 1, 2, 3, 4 operandus mit csinálnak, sorolja fel az előnyeiket illetve hátrányaikat!**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Utasítás típusoknak is lehet őket hívni (4 címes utasítás, 3 címes utasítás stb.)._
<Hely a válasznak>

---

**16. Mit jelent az állapottér kifejezés, rajzolja fel a csoportosítás ágrajzát!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Definíció + ágrajz._

Olyan programbol lathato es nem lathato tarolokbol all, melyek az adott programra vonatkozo allaptinformaciokat hordozzak.

A flagek nem adatot, hanem allapotot tarolnak. Specialis utasitasokkal mentheto, beallithato, torolheto.
A transzparens allapotter olyan mechanizmusokbol all amelyeket a program nem kezel kozvetlenul, megis hat a vegrehajtasra

állapottér

- látható
  - PC
  - Státusz indíkátorok (flagek)
    - condition code
    - univerzalis allapotjelzok
    - adattipusonkent kotelezo allapotjelzok
  - egyéb
    - debug
    - címzési módok
    - indexelés
- transzparens
  - virtualis memoriakezeles
  - veremkezeles
  - megszakitaskezeles

---

**17. Milyen műveletek végezhetőek el flagek és Program Counter esetén?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Általában ez az állapotteres feladattal van egyben._

A flagnél lehet Beállítani (SET), Lekérni (Check), Mentés/Visszatöltés.
A PC-nél lehet inkrementálni, felülírni, menteni -> stackre

PC

- Inkrementáls
- Dekrementálás
- Felülírás

Flag

- Save
- Set
- Reset
- Load
- Clear

---

**18. Jellemezze az állapot indikátorokat (flageket)!**
_(Gyakoriság: kihalt)_
_Megjegyzés: Az ez alatt lévő szokott lenni._
<Hely a válasznak>

---

## 3. Modul: ALU és Számábrázolás

**19. Sorolja fel az ALU felépítési elemeit!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Eddig rajz is kellett (adatutak miatt), sajnos most fogalmam sincs, hogy itt mit kérdez, mert no way, hogy csak 4 dolgot kell felsorolni._

- Regiszterek
  - Dedikált regiszter, egyszeru regiszter, stack regiszter, többszörös regiszter, univerzális regiszter
- Adatutak
  - ez koti ossze a cpu-t a regiszterekkel, de fontos ez nem adatbusz. Itt nincs cimzes csak adatkuldes. Egyszerre csak egy adat folyik rajta.
- Kapcsolópontok
  - ezzel tudja iranyitani az alu, hogy az adatok eppen merre menjenek ezek tranzisztorok
- Szűkebb értelembe vett ALU
  - ez maga a szamito egyseg ami elvegzi a muveleteket

---

**20. Mit jelent az adatút kifejezés? Rajzolja fel a két utas csatolási módot, és magyarázza meg mi mit jelent?**
_(Gyakoriság: kihalt)_
_Megjegyzés: Eddig elég sokszor volt (gyakori), főleg az előző kérdéssel együtt. Mostmár viszont szinte teljesen ki került a diákból és azt mondta, nem is fogja kérni._

Az adatút ami összeköti a CPUn belul a dolgokat, a regisztereket alut pc-t. Mindent. Ez egy nagy vezetekrendszer amin egyszerre csak egy adat mehet az egyik iranyba. Nem kell cimezni csak elkuldeni a megfelelo vezeteken az adatot.

Két utas csatolási mód amikor van egy bemenet (Load / Enable)
Ez vezérli a bemenetet, csak akkor irodik be az adat a regiszterbe, ha a vezerlojel aktiv
A kimenet harom allapotu
0,1 valamint a zart. Ha eppen nem ő az aktív regiszter akkor lekapcsolódik a sínről a zárt részével

---

**21. Rajzolja fel az 1 bites félösszeadót, mutassa be a működését, előnyeit, hátrányait!**
_(Gyakoriság: ritka)_
_Megjegyzés: Félösszeadót kérheti, gyakorlatban nagyon ritkán van csak._

Az egybites félösszeadónál van két bemenet, majd ebből lesz egy kimenet valamint egy carry kimenet. Az igazságtáblája egyszerű. A bekötése is egyszerű, kell egy xor amibe az a és b van bekötve ez adja az S-t valamint egy and amibe ugyan ugy az a es b van bekotve ez adja a carryt.

Előnye: egyszerű és gyors, hátránya, hogy nem tud mit kezdeni az elozo helyiertekrol jovo atvitellel, tehat nem tudja a carry int feldolgozni.

A|B|S|C
0|0|0|0
1|0|1|0
0|1|1|0
1|1|1|1

---

**22. Rajzolja fel az 1 bites teljes összeadót, mutassa be a működését, előnyeit, hátrányait!**
_(Gyakoriság: gyakori)_

Az egybites teljes összeadó tudja kezelni az elozo helyiertekrol jovo carryt illetve a vegeredmenyt is ki tudja adni az uj carryvel. Az igazságtáblája bonyolultabb. Kb meg is tudtam csinalni :D. A kapcsolása a háttérben: A és B egy xor kapuba, ennek a kimenete és a Cin is egy xor kapuba es ebbol megkapjuk az S-t. Majd az A, B, Cin 3 and kapuba mindegyik mindegyikkel össze van kötve és ezeknek a kimenete egy or kapuba, ez adja meg a Cout-ot.A hátránya, hogy bonyolultabb és több alkatrész kell hozzá.

A|B|Cin|S|Cout
0|0|0|0|0
1|0|0|1|0
0|1|0|1|0
1|1|0|0|1
1|1|1|1|1
0|0|1|1|0
0|1|1|0|1
1|0|1|0|1

---

**23. Rajzolja fel az N-bites soros összeadót, mutassa be a működését, előnyeit, hátrányait!**
_(Gyakoriság: gyakori)_

Az N bites soros összeadónál van kettő léptető ami a biteket lépteti A-nál és B-nél is, valamint van egy tároló ami a carry-ket vezeti vissza, ha keletkezik. Rajzolni itt nem tudok a markdown fajlba de kepzeld ide :D. ELőnye, hogy már komplexebb számokat is össze tud adni, viszont a hátránya, hogy minél nagyobb a szám annál tovább tart. Főleg ha sok a carry is. Mert egy összeadás egy órajel idejéig tart.
Egyetlen teljes összeadó csinálja az összeadásokat. Az idő, hogy összeadja pontosan annyi mint a bitek száma amit összead.

---

**24. Rajzolja fel az N-bites párhuzamos összeadót, mutassa be a működését, előnyeit, hátrányait!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Szokta a "ripple carry adder" kifejezést is használni._

Az n bites párhuzamos összeadónál a bemenetet fel tudják bontani több teljes összeadóra, így ezek tudnak párhuzamosan számolni. A carryt is bekötik és egymásnak tovább is adják. Akkor van gond ha sok carry keletkezik, hiszen akkor visszavált szinte a soros összeadó sebességére, mivel meg kell várnia az utolsónak is mire a carry odaér hozzá. Előny: Tud gyorsabb lenni mint a soros, viszont hátrány, ha sok a carry akkor szinte azonos sebessége van a sorossal.

---

**25. Rajzolja fel a módosított teljes összeadót, mutassa be a működését, előnyeit, hátrányait! Mit jelent a "P" és "G", hogyan állnak elő?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Itt a CLA-ra gondol a költő, de előfordult már, hogy csak a "módosított összeadó" részét kérte, de végül is az a lényeg. Azt is mondta, hogy le kell vezetni a C0-ig, de csak addig._

A modositott teljes osszeado azert gyorsabb mert van egy olyan reszegysege ami ki tudja szamolni elore a carryket igy lehet gyorsitani a szamitast. Előnye: hogy kevesebb ido alatt tud kiszamolni egy egy muveletet hatranya, viszont hogy bonyolult es sok plusz aramkorre van szuksege.

Erre nem emlekszek most nezem ki
P = A + B
G = AB
Cout = BCin + ACin + AB => AB + (A+B)Cin

Cout = G + PCin
C0 = G0 + P0Cin

---

**26. Hogyan gyorsítható a fixpontos szorzás, mutassa be ezeket! (Bitcsoporttal való szorzás, Booth-algoritmus)**
_(Gyakoriság: gyakori)_

Bitcsoportos szorzassal gyorsithato a szorzas, mert a szorzasi lepeseket a felere lehet csokkenteni pl egy 32 bites szorzast meg lehet oldani 16 ciklusbol. 3 bitet vizsgalunk egyszerre az elozo 1-t valamint 2t a mostaniakbol i + 1, i, i - 1 az i - 1 azert kell mert meg tudjuk vizsgalni hogy az elozobol maradt-e valami maradek vagy atvitel.

Booth algoritmus, amikor sok egyes van egy helyen akkor lehet azt csinalni, hogy felkerekitunk a legkozelebbi egesz szamhoz es kivonunk belole annyit, hogy visszakapjuk azt a szamot amit akarunk.
pl: 62-vel szeretnenk szorozni, akkor szorzunk 64-el majd kivonunk belole kettot igy a sok szorzas meg eltolas helyett eleg egy szorzas illetve egy negalttal valo osszeadas.

---

**27. Hogyan néz ki a lebegőpontos számok értelmezési tartománya, rajzolja fel az ÉT számegyenesét!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Általában másik kérdésekkel együtt van._

A fixpontos szamok abrazolasa 16 bit eseten -32768;+32767 ig van ami eleg kicsi tartomany es a pontossaga sem tul jo.

Ertelmezesi tartomany:

```
Karakterisztika bitek szama | legnagyobb ertek | ertelmezesi tartomany
1                           | 1 = 1            |  2 ^ +- 1
2                           | 11 = 3           |  2 ^ +- 3
3                           | 111 = 7          |  2 ^ +- 7
4                           | 1111 = 15        |  2 ^ +- 15 (=FX16 32768)
```

Tizes szamrendszer alapjan pontossaga

```
felhasznalhato regio                 alulcsordulasi regio   felhasznalhato regio      tulcsordulasi regio
|-----------------------------------|---------|--------|--------------------------|--------------
min -> -0.9999 * 10^n-1         -0.1*10^n   0      0.1*10^n            max -> -0.9999 _ 10^-n-1
```

FP = M \* r^k
M: Mantissza r: radix k: karakterisztika. AZ elvaras hogy a radix egyezzen meg a mantisszanal hasznalt szamrendszer alapjaval.

---

**28. Hogyan kezelhető a túlcsordulás, illetve alulcsordulás?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Általában a számegyeneses kérdéssel együtt van._

Ha tulcsordulas van akkor vagy a pozitiv vegtelent jeleniti meg a rendszer vagy a legnagyobb megjelenitheto szamot jeleniti meg
Ha alulcsordulas van akkor kijelzi es konvergal 0-ra vagy a denormalizalt szamot jelzi ki

---

**29. Jellemezze az örző bitet és rejtett bitet, hogyan őrizhető meg velük a pontosság?**
_(Gyakoriság: gyakori)_

A rejtett bit egyszeru, mivel normalizalasnal mindig 1-essel kezdodik a szam ezert azt az elso bitet ugymond elhagyhatjuk (valojaban elrakjuk a rejtett bitbe) es majd amikor ki kell irni a memoriaba akkor onnan beolvassuk.

Az orzo bit arra hivatott, hogy van par plusz bit a szamok vegenel igy ha kerekites vagy valami miatt le kene vagni bitet a vegerol akkor azt oda menjtuk ki es amikor normalizalni kell vagy menteni akkor meg onnan olvasunk be biteket igy megmaradhat a nagy pontossag

---

**30. Mi jellemzi a lebegőpontos számok kódolását?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Általában másik kérdésekkel együtt van._

Mantissza kodolasa -> kettes komplemens
Karakterisztika kodolasa -> tobbletes kodolassal

Mert a karakterisztika eseten a tobbletes kod kialakitasa gyorsabb, de a mantisszanal azert nem hasznaljok mert csak alap muveletet lehet elvegezni plus minus

---

**31. Jellemezze az IEEE lebegőpontos szabványt, milyen részei vannak?**
_(Gyakoriság: gyakori)_

Ez a szabvany megadja hogy kulonbozo CPU-k kozott a szamitas egyseges maradjon. A szabvanynak valo megfeleles hogy a harver es a softver is kielegitse a kovetelmenyeket. Pontossag:
Egyszeres 32 bit -> gyors, keves hely, pontatlan
Kétszeres 64 bit -> lassabb, cserebe nagyon pontos
Bővített 80bit  
Négyszeres 128 bit -> ultra magas pontosság, tudományos körökben alkalmazott

Tárolás

Egyszeres
1 elojel bit, 8 karakterisztika bit, 23 mantissza bit
Kétszeres
1 elojel but, 11 karakterisztika bit, 52 mantissza bit

Kerekitesek:
Legközelebbre valo kerekites (nem tudjuk melyik iranyba)
0hoz valo kerekites (eldobjuk az orzo biteket)
Minusz vegtelenhez valo kerekites
Plusz vegtelenhez valo kerekites

Kivételkezelés
Ha alul vagy tulcsordulas van, 00val osztunk stb akkor kivetelek kepezodnek

---

**32. Hogyan történik a műveletvégzés lebegőpontos számok esetében?**
_(Gyakoriság: kihalt)_
**33. Rajzolja fel és mutassa be a lebegőpontos műveletvégzőt!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Így is szerepelhet a táblázatban: DF ábra, dedikált lebegőpontos műveletvégző. Fontos megemlíteni a párhuzamos műveletvégzést._

Parhuzamosan vegezheto a mantissza es a karakterisztikanak a szamolasa. AxB -> ma x mb; ka + kb

```
   Vezerlojel
       |
     Vezerlo
  |         |
Mantissza  Karakterisztika
egyseg          egyseg
  |               |
---------------------
      ADATBUSZ
```

---

**34. Rajzolja fel a BCD összeadőt, mutassa be a működését, előnyeit, hátrányait!**
_(Gyakoriság: kihalt)_
_Megjegyzés: Elvileg ez már nem tananyag F tanterven, azelőtt elég gyakran volt._
<Hely a válasznak>

---

**35. Hasonlítsa össze az FX, az FP és a BCD számábrázolást!**
_(Gyakoriság: kihalt)_
<Hely a válasznak>

---

**36. Jellemezze a huzalozott áramköri vezérlést!**
_(Gyakoriság: kihalt)_
A huzalozott vezerloegysegek gyorsabbak mivel minden egy alaplapon van elektronikabol osszerakva viszont cserebe nagyon nehezen modosithato es rendkivul bonyolult, ezzel szemben a mikroporgramozottnal van egy egyszerubb vezerlo egyseg majd ebbe programoznak valami logikat. Ez olcsobb kevesbe bonyolultabb es az algoritmus konnyebben modosithato, de cserebe eleg lassu a masikhoz kepest.

---

**37. Jellemezze a mikroprogramozott vezérlést!**
_(Gyakoriság: kihalt)_
A huzalozott vezerloegysegek gyorsabbak mivel minden egy alaplapon van elektronikabol osszerakva viszont cserebe nagyon nehezen modosithato es rendkivul bonyolult, ezzel szemben a mikroporgramozottnal van egy egyszerubb vezerlo egyseg majd ebbe programoznak valami logikat. Ez olcsobb kevesbe bonyolultabb es az algoritmus konnyebben modosithato, de cserebe eleg lassu a masikhoz kepest.

---

## 4. Modul: Memóriák

**38. Hogyan lehet csoportosítani a memóriákat?**
_(Gyakoriság: ritka)_
_Megjegyzés: Itt az ágrajzra gondol, gyakorlatban sosem láttam ezt a kérdést. Szóval lehet, hogy kihalt, vagy nem is volt._

A felvezeto memoriak, nagysagrendekkel gyorsabbak a hattertaraknal, ezert kozvetlen a CPU-t szolgaljak ki.

1. RAM (Random Access Memory) - Írható, olvashato, nem maradando

- SRAM - statikus
- DRAM - dinamikus

2. ROM (Read Only Memory) - csak olvashato, maradando

- BIOS
- POST tesztek
- Eszközspecifikus adatok (MAC cim)

3. CMOS - specialis elemrol taplalt memoria

- BIOS beallitasok es valos idejo ora
  - kikapcsolt allapotban is megorzi az adatokat
  - nagyon alacsony fogyasztas

---

**39. Jellemezze a DDR4-et! Milyen újdonságok vannak a DDR3-hoz képest?**
_(Gyakoriság: gyakori)_

- A DDR3-hoz képes csokkent a tapfeszultseg 1.5 V -> 1.2 V: kisebb hotermeles, jobb energiahatekonysag
- 8N prefetch eljaras
  - alacsonyabb orafekvencia meghajtas -> alacsonyabb energiafogyasztas
  - Kulso adatatviteli frekvencia novelheto -> savszelesseg megno
  - Nagyobb kesleltetes, mint DDR3 eseten ugyanazon orafrekvencia mellett
  - Bankok: 16 csoportositva (4 csoport x 4 bank) => DDR3 8 kulonallo bank chipenkent
    - vezerles egyszerre 2-4 bankot valaszthat ki
    - idoosztasos multiplexeles elven

Megbizhatosag javitasa

- ECC mellett CRC (Cycnlic Redundancy Check)
- Chipenkent extra paritas => bitcsoport osszeget vizsgalja (paros vagy paratlan)
- ODT: ON-Die Termination es feszultsegszabalyozas => memoriachipbe epitett ellenallas ami elnyeli a visszaverodo jeleket.
- Gear Down Mode: Csokkenti a prefetch erteket ha szukseges

DDR4 288 DIMM pin > DDR3 240 DIMM pin

---

**40. Ismertesse a DDR4 memóriánál tanult 8n prefetch eljárást!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Lehet együtt a DDR4-el, de szokott külön is szerepelni._

A DRAM cellak nem kepesek a kulso adatbusz sebessegevel mukodni. Ezért kell a prefetch algoritmus

Prefetch lenyege:

- A memoria belso magja egyszerre tobb bitet olvas ki
- Ezek egy belso pufferbe kerulnek
- A kulso busz tobb lepesben tovabbitja az adatokat

Kovetkezmeny:

- A belso busz szelesebb mint a kulso (2N, 4N, 8N, 16N)
- Ez noveli a ciklusban mert kesleltetest, de noveli a saveszelesseget

A ddr4-ben egyszerre 8 adatot olvas ki a memoriachippekbol es ezt viszi tovabb aprankent a busz.

---

**41. Jellemezze a DDR5-öt! Milyen újdonságai vannak a DDR4-hez képest?**
_(Gyakoriság: gyakori)_

Fo fejlesztesek: savszelesseg, parhuzamositas es megbizhatosag novelese.
Tapfeszultseg 1.1 V -> meg alacsonyabb energiafogyasztas

- 16N prefetch eljaras
- Nagyobb savszelesseg: magasabb kulso frekvencia
- Nagyobb kesleltetes, mint DDR4 eseten
- 32 bank csoportositva (8 csoport x 4 bank)
- Modulonkent 2 csatorna (32 bit)
- On-Die ECC memoria chipbe integralva -> chip szintu hibajavitas
- Operacionkent 64 Byte adat tovabbitasa
- Akár 12 NYÁK réteg

---

**42. Írja fel az SDRAM időzítési paramétereit, jellemezze is ezeket egy-egy mondattal!**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Ez inkább a későbbi vizsgákon szokott előfordulni. Elvileg Bprofosoktól nem kéri, gyakorlatban pedig hiszem, ha látom, mert eddig is kérte._

- tCL (CAS Latency) - varakozas az oszlopcim kiadasa utan az elso adat megjeleneseig
- tRCD (RAS to CAS delay) - sor megnyitasa es az oszlopcim kivalasztasi parancs kozott
- tRAS (Row Active Time) - minimalis ido amig egy sor nyitva kell maradjon
- tRP (Row Precharge) - varakozasi ido egy sor lezarasa utan uj sor nyitasaig
- tRC (Row Cycle Time) - minimalis ido ket azonos bankbeli sor aktivalasa kozott

Olvasasi ciklus menete:

1. Bank (sor) megnyitasa
2. Oszlopadatok olvasasa a megnyitott sorbol
3. Bank lezarasa (precharge)
4. Legalabb tRP varakozas ujra nyitas elott

---

**43. Írja le a DRAM teljes olvasási ciklusának lépéseit!**
_(Gyakoriság: kihalt)_

Olvasasi ciklus menete:

1. Bank (sor) megnyitasa
2. Oszlopadatok olvasasa a megnyitott sorbol
3. Bank lezarasa (precharge)
4. Legalabb tRP varakozas ujra nyitas elott

---

**44. Jellemezze a DIMM-et! Mi a Registered, ECC, PLL DIMM?**
_(Gyakoriság: gyakori)_

DIMM -> DUal Inline Memory Module. DRAM chipeket tartalmazo memoria modul, tipikusan 64 bites adatuttal 168-288 erintkezovel.

Registered DIMM

- A memoriachip es a memoriavezerlo koze regiszter kerul
- Csokkenti az elektromos terhelest a vezerlon
- Egy orajelnyi kesleltetest okoz
- Nagyobb stabilitas sok modul eseten

ECC DIMM

- Extra DRAM chip az ECC/paritas bitekhez
- Paritásbit: egybites hiba felismerese, javitani nem tud. Tobszoros hibat sem tudja konzisztensen felfedezni
- ECC bit
  - Egybites hiba felfedezese es javitasa
  - Tobb egymas mellett bithiba felismerese es javitasa
  - Kijavitatlan hiba eseten rendszerleallitas es naplozas

PLL (Phase Locked Loop)

- Fáziszért hurok: órajel elcsuszas mentesitese
- Orajel szinkronizalas
- Stabilabb, pontosabb mukodes nagy frekvencian

---

## 5. Modul: Buszrendszerek

**45. Csoportosítsa a buszrendszereket, mik vannak bennük?**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Ezt is későbbi vizsgákra szokta rakni._

Átvitel iránya szerint

- szimplex -> az adat csak egy irányba tud menni pl CLK, RST
- fél duplex -> az adat ket iranyba tud menni, de egyszerre csak az egyikbe
- full duplex -> ket irany egy idoben. (PCIe)

Átvitel jellege szerint

- Dedikált busz -> minden mindennel kommunikál (Intel QPI)
  - előny: gyors, közvetlen kommunikáció
  - hátrány: merev, nehezen bővíthető
- megosztott -> egy nagy egységes vezetéken kommunikál minden, Buszvezérlő utasításokra van szükség az ütközések elkerülésére
  - Előny: olcsó, egyszerű megvalósítás, könnyen bővíthető
  - Hátrány: lassu, buszfoglalást kell alkalmazni, hiba több eszközt is befolyásol, vezérlés bonyolult
- Átvitt tartalom szerint

  - címbusz: eszközök és memória címzésére szolgál.
  - Adatbusz: Adatok szállítása a CPU és a memória / perifériák között. Sávszélesség nőtt az idők folyamán: 1bit, 2bit, 4bit, 8bit, 16bit, 32bit

  Soros buszok

  - elég egy vezetékpár
  - biteket bitsorozatonkent lehet atkuldeni (ehhez plusz hardver kell)
  - egy gyors soros erparon tobb adat tovabbithato mint tobb lassun
  - Nagyobb frekvencian nagy tavolsagra biztosit atvitelt jitter nelkul

  Parhuzamos buszok

  - Tobb vezeteket hasznal -> tobb adat atvitel
  - Sok vezetek hatranya, hogy komplex, draga, sok helyet foglal
  - Viszont hardver vonatkozasban konnyu implementalni
  - Magasabb frekvencian jonnek a gondok -> jitter

  Manapsag csak a cpu es memoria kozott van parhuzamos busz

---

**46. Hasoníltsa össze a PCI és PCIe busz (soros és párhuzamos) buszokat, sorolja fel az előnyeiket illetve hátrányaikat!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Szokott lenni a PCIe külön is (PCI NEM lehet külön), volt olyan, hogy 1-1 mondatot kért, hogy miért jó egyes tulajdonsága. Olyan is szokott lenni, hogy "miért gyorsabb, mint az USB?"_

- PCI

  - párhuzamos, megosztott buszrendszer
  - Minden csatlakoztatott eszköz azonos címbuszt, adatbuszt, vezérlővonalat használ
  - Közvetlen a CPU által látott címtérből kapnak adatot
  - buszfoglalás kell
  - egy időben csak egy master végezhet munkát
  - Előnyök: közel a CPUhoz, viszonylag olcsó, egyszerű felépítés
  - Hátrány: megosztott busz, ütközésveszély, párhuzamos átvitel, sok eszköznél jelentősen lassul

- PCIe
  - soros, pont-pont topologiaju buszrendszer
  - Nem megosztott busz: minden eszkoz kulon osszekottetest kap a vezeerlo fele
  - kulon kuldes es fogadas
  - full duplex mukodes
  - egy idoben tobb vegpont parhuzamosan kommunikal
  - csomagokba agyazott adatatvitel
  - tobbfele szelesseg x1, x4, x8, x16, x32
  - Elonyok: Nagy adatatviteli sebesseg, kevesebb erintkezo, full duplex, hot-plug tamogatas
  - Osszetett protokoll -> nagy vezerlesi overhead, teljesitmeny cpu-tol fugg, dragabb implementacio mint a PCI

---

**47. USB 4.0 v2 tulajdonságok, gyorsítási lehetőségek!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Itt USB-C rajzot is kérhet pinekkel, volt olyan, hogy miért gyors stb. A gyorsítási lehetőség nem tudom mit takar._

Hagyományos usb-a, usb-b

- 2 erpart tartalmaz
- teljesitmenye max 5W

USB-C

- 4 erpart tartalmaz
- 24 pines csatlakozo 2x12 erintkezo
- teljesitmenye: 15W - 100W

Csatlakozók

- GND
- RX+, RX- -> nagysebessegu adatfogadasi vezetekpar
- TX+, TX- -> nagysebessegu adatkuldesi vezetekpar
- Vbusz -> aramellatast biztositja
- D+, D- -> USB 2.0 adatatviteli vezetek
- CC, SBU -> alternativ vezetekek

```
  GND RX+ RX- Vbusz D- D+ CC Vbusz TX- TX+ GND
/-----------------------------------------------\
\-----------------------------------------------/
  GND TX+ TX- Vbusz D+ D- SBU Vbusz RX- RX+ GND
```

- Asszimetrikus adatatvitelre is kepes 80-120Gbit/sec => 10-15 GB/s
- Csomagkapcsolt adatatvitel

4 tipusu csomag

- Idokritikus csomag: allando sebesseggel kozlekednek, adatatvitelben fellepo hibakat nem javitja
- Nagy adatcsomag: alacsony prioritasuak, sok adat tovabbitasara
- Megszakitasi csomag: az egysegek kiszolgalasi kereseire hasznaljak
- Vezerlesi csomagok: cimkiosztashoz, eszkozok azonositasahoz, handshake elven

---

**48. Jellemezze a PAM3-at, PAM4-et!**
_(Gyakoriság: nem volt még)_
_Megjegyzés: Valamiért idén sokszor kiemelte, lehet új kérdés lesz?_

Adatsuruseg novelesere a jelkodolas egy jo megoldas lehet, nem kuldunk gyorsabban jelet, hanem tobb informacio kerul egyetlen jelalakba

PAM3 (USB 4 2.0, GDDR7 memoria)

- 3 amplitudo szint -1, 0, +1, (0, 1, 2)
- Tritek: harmas szamrendszer
- Kozepso szint stabil referencia
- Fizikailag stabilabb
- Orajelenkent 1.58 bit atvitel tortenik

PAM4 (2024 Nvidia GPU)

- 2bit/szimbolum
- nagy bithiba arany miatt nem gyorsabb mint a PAM3
- Orajelenkent 2 bit atvitel tortenik

---

**49. Jellemezze az Intel QPI-t és HT-t!**
_(Gyakoriság: nem volt még)_
_Megjegyzés: Ezt mindig mondta, hogy kell, gyakorlatban csak ZV-n volt eddig._

HyperTransport rendszerbusz

- Kétirényu soros/parhuzamos szelessavu, alacsony kesleltetesu kapcsolat
- Fo feladata a front side bus kivaltasa
- CPU lapkajara van integralva, de nagy savszelessegu IO buszkent is alkalmazzak
- Ket fele egyseget tartalmaz
  - Alagut: vegen talalhato 2 HT port -> tobb HT egyseget tudunk osszefuzni
  - Cave: Ez zarja le a tunnelt lancot
- PCI-tol elteroen a HT nem rendelkezik dedikalt IO cimterrel, ehelyett mamoriabol lekepzett IO-val rendelkezik

QuickPath Interconnect

- Feladata a front side bus kivaltasa
- A QPI-t hasznalo procik is lapkara integralt memoria vezerlokkel es non-uniform memory accessel rendelkeznek
- Distributed Shared memory: fizikailag elosztott memogira egyetlen logikailag kozos cimterben
- 5 reteges architekturat hasznal (2 vezetek minden egyseg kozott): 1 orajel alatt 20 adatbizet tud atvinni parhuzamosan

---

## 6. Modul: I/O Rendszer

**50. Rajzolja fel a blokkos DMA rajzát, és mutassa be a működését!**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Rajzot már nem fog elvileg kérni. Viszont a DMA-nál a blokkos átvitel folyamatát tudni kell. Fontos, hogy ezek NEM a DMA paraméterei._

A blokkos atvitel lepesei:

- CPU felparameterezi es elinditja a DMA-t
- DMA buszhasznalatot ker (DMA request)
- CPU lemond a buszrol (DMA ack)
- DMA adatot ker a periferiatol az I/O DR-be (data register)
- DMA adatit ír a memoriaba az I/O AR (address register) altal meghatarizitt memoria cimre
- DC-- (data counter), cim++ ismetles vagy megszakitas kuldese

---

**51. Írja fel a DMA paramétereit!**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Nem összetévesztendő a blokkos átvitel folyamatával._

DMA jellemzok:

- nagy adatmennyiseg -> blokkos atvitel
- csak gyors periferiaknal hasznaljak
- CPU nem mozgat adatot

Feltetelei:

- Kozvetlen memoria-cimgeneralas
- Buszvezerlesi funkciok
- DMA vezerlo jelenlete

Regiszterei:

- DC - Data counter
- I/O cimregiszter - I/O AR
- I/O adatregiszter - I/O DR
- Belso transzparens regiszterek

DMA parameterei:
A felparameterezest a cpu vegzi, a programozott I/O-n keresztul tortenik

- Atvitel iranya (R/W)
- I/O egyseg cime
- Memoria kezdocim (I/O AR)
- Adat tipusa (byte, char, string)
- Atvivendo egysegek szama (DC)
- Atvitel modja (blokkos / cikluslopasos)
- DMA csatorna prioritasa
- Resztvevo egysegek tipusa (I/O-memoria, memoria-memoria, I/O-I/O)

---

**52. Sorolja fel a feltétel nélküli adatátvitel előfeltételeit! (I/O rendszer)**
_(Gyakoriság: gyakori)_

Az adatatvitel ellenorzes es visszacsatolas nelkul tortenik

Elofeltetelei:

- Preiferianak mindig adatatvitelre alkalmas allapotban kell lennie
- Nincs ellenorzes
- Semmilyen szinkronizalas nincs a CPU es periferia kozott

---

**53. Rajzolja fel az I/O felosztását, előnyök hátrányok.**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Ez is ágrajz, nem tudom, hogy ezt mennyire kéri és hogy pontosan mit lehet írni előnyökhöz, hátrányokhoz._

- I/O rendszer

  - Programozott I/O ==> elonyok: egyszeru felepites, olcso megvalositas, konnyen programozhato
    - cimzes
      - kulonallo I/O cimter
      - Memoriaban lekepzett I/O
    - mukodes
      - Lekerdezes I/O
      - Megszakitasos I/O
  - DMA
    - Blokkos
    - Cikluslopasos
  - I/O csatorna
    - Szelektor csatorna
    - Multiplexer csatorna

- Programozott I/O
  - elonyok: egyszeru felepites, olcso megvalositas, konnyen programozhato
  - hatranyok: lassu, erosen terheli a CPU-t, nagy adatmennyisegnel nem hatekony
- DMA
  - elonyok: a cpu csak megcimzi es utana foglalkozhat massal a dma dolgozik a hatterben
  - hatranyok: dragabb es komplexebb
- I/O csatorna
  - elonyok: a lassabb periferiakat is tudja kezelni ugy mintha egy dma lenne
  - hatranyok: a cpunak az elejen foglalkozni kell vele

---

**54. Ismertesse az programozott I/O tulajdonságait, adatátviteli módjait! (feltétel nélküli adatátvitel, feltételes adatátvitel: lekérdezéses, megszakításos)**
_(Gyakoriság: új)_
_Megjegyzés: Első felbukkanás: 2025. 12. 16. (2025/26/1 1. vizsga)_

Olyan adatatviteli modszer ahol a CPU kozvetlenul iranyitja az I/O muveletet. Elinditja, vezeri, figyeli az allapototo es lezarja az adatatvitelt

Jellemzok:

- CPU vezerelt adatatvitel
- Lekerdezeses vagy megszakitasos vezerles
- kozos buszhasznalat a memoria es az IO kozott
- Egyszeru hardveres megvalositas
- Jelentos cpu idot igenyel

ELonyok:

- egyszeru felepites
- olcso megvalositas
- konnyen programozhato

Hatranyok

- lassu, erosen terheli a CPU-t
- nagy adatmennyisegnel nem hatekony

Adatatviteli modok:

- Feltetel nelkuli adatatvitel
  - Az adatatvitel ellenorzes es visszacsatolas nelkul tortenik
  - periferianak mindig adatatvitelre kepes allapotban kell lennie
  - nincs ellenorzes
  - semmilyen szinkronizalas nincs a cpu es a periferia kozott
- felteteles adatatvitel
  - Lekerdezeses
    - A CPU folyamat olvassa az allapot regisztert amig az eszkoz keszen nem all. Beirja a kivansagat az I/O vezerlobe es varja a valaszt.
    - Aktivan varakozik, nem ismert varakozasi ido
    - Rendkivul pazarlo, lassu periferiahoz kulonosen rossz
  - Megszakitasos
    - A CPU elinditj az I/O muveletet, majd mas feladatot vegez. A periferia megszakitassal jelez ha kesz
    - elony: a CPU kihasznaltsag jobb, gyorsabb mint a lekerdezeses
    - hatrany: nagy mennyisegu adat eseten sok megszakitas, meg mindig a CPU kezdemenyezi es vezerli az atvitelt

---

**55. Milyen típusai vannak az I/O csatornának? Jellemezze ezeket!**
_(Gyakoriság: kihalt)_
_Megjegyzés: Elméletben kérheti a szelektor csatornát és multiplexer csatornát, azok jellemzőit, gyakorlatban sose kérte eddig._

DMA tovabbfejlesztese lassabb periferiakhoz. A CPU nem parameterez hanem a memoriaban tarolt I/O programot indit el amelyez az I/O csatorna hajt vegre. Nincs felparameterezes, onallo vezerloegyseg

Szelektor csatorna
lassabb periferiak kozul a gyorsabbakhozá

- egyetlen I/O vonal, amire tobb I/O vezerlo is racsatlakozhat
- egyszerre csak 1 aktiv
- elony: gyors atvitel
- hatrany: nincs parhuzamossag

Multiplexer csatorna
lassu periferiak kozul is a lassabbhoz -> parhuzamos kezeles

- Byte multiplexer: byteonkenti adatkuldes
- Blokk multiplexer: blokkonkenti adatkuldes

---

## 7. Modul: Megszakítási Rendszer

**56. Mutassa be az általános megszakítás ábráját!**
_(Gyakoriság: kihalt?)_
_Megjegyzés: Nem nagyon láttam még kérdésben, de lehet volt._

1. utasítas vegrehajtas

- erkezett megszakitas?
  - Igen
    - Elfogadhato?
      - Igen
        - Analizis
        - Allapot mentese
        - Megszakitas kiszolgalasa
        - Allapot visszatoltese
        - Kovetkezo utasitas
      - Nem
        - Kovetkezo utasitas
  - Nem
    - kovetkezo utasitas

---

**57. Mi a megszakítás definíciója, célja?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Definíció, célok, általában másik kérdésekkel szokott szerepelni._

Definicioja: A feldolgozas szempontjabol varatlannak tekingheto esemenyek kezelesere szolgalo muvelet

Celja: Nem csak a reagalas hanem a folyamatosan valtozo korulmenyek kozott az optimalis mukodes biztositasa

Lényege: Csak akkor foglalja le a CPU figyelmet amikor arra tenyleg szukseg van.

---

**58. Milyen megszakítási okok, források vannak?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Ez szokott szerepelni az előzővel. Elvileg itt fontos a sorrend (mert prioritási sorrend van)._

1. Géphibák

- nem letilthato, legmagasabb prioritas, nem kesleltetheto

2. I/O források

- perfieriak jelzik

3. Kulso forrasok

- felhasznalo vagy kulso rendszer

4. Programozasi forrasok

- szandekos: amikor egy program megszakitast ker
- nem szandekos (hibakezeles): mindig valamilyen utasitas vegrehajtasa vagy a vegrehajtas megkiserlese soran alakul ki
  1. memoriavedelem megsertese
  2. fizikai cim tulcimzese
  3. cimzesi eloirasok megsertese
  4. aritmetikai hibak

---

**59. Hogyan lehet csoportosítani a megszakításokat?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Itt nem kell annyira mélyre menni, ez is szokott szerepelni az előzőkkel._

- Szinkron vs aszinkron
  - szinkron: program mindig ugyan ott jelentkezik megszakitassal
  - aszinkron: veletlenszeruen lepnek fel
- Utasitasok kozott vagy kozben
  - Kozott: Utasitas vegrehajtasanak eredmenyekepp kovetkezik be (overflow)
  - Kozben: Utasitas vegrehajtasa alatt, nincs szinkronban a ciklussal (hardverhiba)
- Felhasznalo altal kert vs nem kert
  - kert: rendszerhivasokk. OS rutinok, BIOS rutinok
  - nem kert: overflow, I/O egyseg altal kert, hardverhiba
- Megszakitott program folytathato vs nem folytathato
  - folytathato: I/O megszakitas
  - nem folytathato: hardverhiba
- Maszkolhato vs nem maszkolhato:
  - maszkolhato: le lehet tiltani, prioritas alapjan nem lep ervenybe
  - nem maszkolhato: sulyos hardverhiba

---

**60. Mikor érvényes a megszakítás?**
_(Gyakoriság: gyakori)_
_Megjegyzés: 3 feltétel, szokott szerepelni az előzőkkel._

- Az aktualis folyamat megszakithato
- a megszakitas prioritasa megfelelo
- A megszakitas nincs maszkolva

---

**61. Milyen megszakítási rendszerek vannak?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Egyszintű, többszintű, többszintű és többvonalú. Kis magyarázat és rajz is szokott kelleni._

- egyszintu megszakitasi rendszer

  - nem megszakithato
  - uj megszakitas csak a normal allapotba valo visszateres utan kezdodhet

  ```
  megszakitasi szint
  ----------------------|--------------|--------------|--------------|
                        |              |              |              |
  futo folyamat         |              |              |              |
  ----------------------|      2       |      1       |      3       |
                        |              |              |              |
                        |              |              |              |
  ----------------------|       |      |              |              |
  erkezo megszakitas    2,3     1
  ```

- tobbszintu megszakitasi rendszer

  - megszakitasok megszakithatjak egymast
  - vegrehajtas fontossagi sorrendben
  - hatrany, ha tul sok megszakitas van -> nem lehet mindegyikhez kiulon prioritasi szintet rendelni

  ```
    1
    -----------------------------|-------|--------------|
                                |       |              |
    2                            |   1   |              |
    -----------------------------|-------|---|----------|
                          |                  |          |
    3                     |                  |          |
    ----------------------|      2           |----------|
                          |                  |          |
    futo folyamat         |                  |    3     |
    ----------------------|       |          |          |
    erkezo megszakitas    2,3     1
  ```

- tobbszintu, tobbvonalo megszakitasi rendszer
  - megszakitasi okokat osztalyokba soroljak
  - minden osztalyhoz prioritasi szint tartozik
    - osztalyok: 1, 2, 3
    - Prioritasok: 1, 2, 3
  - osztalyon belul:
    - megszakitasi tipusok: a, b, c, d
  - mukodes:
    - osztalyok kozott: tobbszintu
    - osztalyon belul: egyszintu
    - osztalyon belul is leteznek prioritasok

---

## 8. Modul: Tranzisztorok

**62. Sorolja fel a tranzisztorok fajtáit, melyik mit tud?**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: nMosFET, feszített szilícium, HKMG, FinFET, GAAFET, MBCFET. Mindegyikhez 1-1 mondat, illetve mi az előny az előzőhöz képest._

A trenzisztor egy felvezeto alapu aktiv elem, amelyet digitalis aramkorokben leggyakrabban kapcsolokent hasznalunk.

- Source (forrás): Az a terulet ahonnan a tolteshordozok elindulnak
- Drain (nyelő): Az a terulet ahova a tolteshordozok erkeznek
- Gate (kapu): A vezerlo elektroda amely a csatorna vezetokepesseget szabalyozza

Legfontosabb meretek:

- Pitch: A tranzisztor teljes szelessege
- Gate length
  - Elmeleti hossz: A kapu fizikai szelessege a gyartasi terv szerint
  - Fizikai hossz: A tenlyeges csatorna hossz a source es a drain kozott.

Fajták:

nMOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor)

- Substrate: p-tipusu szilicium lapka
- Source/Drain: erosen doppingolt negativ szigetek
- Szigetelo (Oxid): egy vekony szilicium-dioxid
- Mukodese
  - Kikapcsolt allapot: alaphelyzetben a p-tipusu hordozoban nincs elegendo szabad elektron igy nem folyik aram
  - Bekapcsolas: a kapu pozitiv feszultseget kap es ez elektromos teret hoz letre
  - Csatorna kialakulasa: Ez a ter eltaszitja a pozitiv lyukakat es oda vonzza az elektronokat a kapu ala.

Feszített szilícium technologia

- Megfelelő gyártási eljárással a szilícium atomok kozotti tavolsagot megnovelik
- Előnye: np az elektronok és a lyukak mozgékonysága ami 10%-20%-os teljesítmenyjavulast eredmenyez
- Hatranya: Tobb lepesbol all a gyartasi folyamat igy az ara is

HKMG
A problema hogy a tranzisztorok zsugorodtak a Sziliciom-oxid is vekony lett => szivargas jott letre

- Megoldás: lecserélik egy High-k (nagy dielektromos állandójú) anyagra és fémkapura
  - Csökkent a bekapcsoláshoz szükséges áram
  - Gyorsabban lehet a tranzisztort kapcsolni
  - Csökkent a szivargas.

FinFET
Eddig a Source es a Drain kozotti hidat a kapu alatt alakitottak ki. 2D

A FinFET-nél ez már 3D-s struktura ahol van egy fesu fog amelyet a kapu 3 oldalrol vesz korbe. Igy ha a kapu kinyilik akkor a hid sokkal nagyobb feluleten tud kialakulni.

Ezt kesobb noveltek, ugy hogy tobb fesufogat is osszekapcsoltak

A 2. generacios FinFET pedig a fesu magassagaval es a suruseg javitsavala ismet tovabb gyorsult es hatekonyabb lett.

GAAFET
Tobb aramlasi reteg van kis szalagokban. Ezt veszi korbe a gate es igy mikor megengedjuk az aramlast akkor 4 iranybol tud aramolni az elektron. (nanowire)

MBCFET
A lapok szelessege valtoztathato igy mar nem nanowire lesz hanem inkabb nanosheet. Nagyobb aramerosseget es jobb teljesitmenyt lehet elerni ugyan azon a feszultsegen

---

**63. Rajzolja fel és mutassa be az nMOSFET tranzisztort!**
_(Gyakoriság: gyakori)_

Az nMOSFET tranzisztor áll egy Source és Drainből, amik erősen doppingolt negatív szigetek a p-tipusu substratetol. Es van egy szigetelo oxid ami szilicium oxid es ez a reteg valasztja el a kaput a substratetol

```
             gate
        _______________
       -----------------
       |     oxide     |
|-------------------------------
|source|               | drain |
|-------               ---------
|           substrate          |
|------------------------------|
```

---

**64. Rajzolja fel és mutassa be a HKMG tranzisztort!**
_(Gyakoriság: gyakori)_

Ahogy zsugorodtak a tranzisztorok a szilicium-oxid szigetelo mar tul vekony lett igy gyakran szivargas alakult ki. Ezt a reteget lecsereltek egy High (nagy dioelektromos allandoju) anyagra es femkapura

- Csokkent a bekapcsolashoz szukseges aram
- gyorsabban lehet a tranzisztort kapcsolni
- gyokkent a szivargas az oxid es a source-drain kozott

```
    -----------------------
    | low resistance layer|
    -----------------------
    |    metal gate       |
    -----------------------
    |  HIGH-k gate oxid   |
|-------------------------------
|source|               | drain |
|-------               ---------
|    Silicon substrate         |
|------------------------------|
```

---

**65. Rajzolja fel és mutassa be a 3D FinFET tranzisztort!**
_(Gyakoriság: gyakori)_

FinFET
Eddig a Source es a Drain kozotti hidat a kapu alatt alakitottak ki. 2D

A FinFET-nél ez már 3D-s struktura ahol van egy fesu fog amelyet a kapu 3 oldalrol vesz korbe. Igy ha a kapu kinyilik akkor a hid sokkal nagyobb feluleten tud kialakulni.

Ezt kesobb noveltek, ugy hogy tobb fesufogat is osszekapcsoltak

A 2. generacios FinFET pedig a fesu magassagaval es a suruseg javitsavala ismet tovabb gyorsult es hatekonyabb lett.

3d-be mar nem tudok rajzolni .md fajlba :D

---

## 9. Modul: Cache Memória

**66. Sorolja fel a cache típusait, és ismertesse ezeket! (aszerint hogy a blokkok hova kerülnek)**
_(Gyakoriság: gyakori)_
_Megjegyzés: Full associative, direct mapping, N-way associative, mindegyikhez 1-1 mondat, előny, hátrány. Szokott külön lenni az N-way associative (mert az a legjobb)._

- Full associative
  - egy memoriablokk barmely cache sorba kerulhet
  - elhelyezes sorat a helyettesitesi strategia hatarozza meg
  - kereseskor a cpu a tageket vizsgalja minden sorban egyszerre, mivel az adat barhol lehet
  - nagy talalalti arany es rugalmassag
  - draga, bonyolult, nagy fogyasztas
- direct mapping
  - egy memoriablokk csak egy adott cache lineba kerulhet
  - egy cache linehoz tobb memoria blokk hozza van rendelve, elofordulhat, hogy gyakran cserelni kell a cache tartalmat
  - elony, gyors es olcso
  - hatrany, rugalmatlan, alacsonyabb talalati aran
- n-way associative

  - Kompromisszum az elozo ketto kozott

    - egy blokk N kulonbozo cache lineba kerulhet
    - N tipikusan 2, 4, 8, 16
    - Kevesebb osszehasonlito aramkor szukseges
    - Jo talalati arany es elfogadhato koltseg

    Pl.: 4 utas eseten egy blokk 4 cache lineba kerulhet -> CPU csoport index alapjan 4 darab cache line-ra tudja szukiteni a keresest igy eleg 4 osszehasonlito aramkor

- sector mapping cache
  - A csoport barhova kerulhet, viszont a blokknak a helye a csoporton belul kotott

---

**67. Röviden ismertesse a cache-eknél tanult két legfontosabb vezérlő bitet!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Dirty bit, Valid bit._

- Dirty bit: jelzi, hogy az adat modosult-e
  - az ilyen blokk helyere nem lehet uj adatot betolteni
  - elobb a modositott adatokat ki kell irni a memoriaba
- Valid bit: jelzi, hogy a cache sor vagy blokk ervenyes-e
  - Ha V=1 akkor ervenyes az adat
  - Torles utan V=0, ezzel jelzi a CPU-nak, hogy szabadon irhato terulet

---

**68. Mi az a "TAG" és mire való?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Más kérdésekkel szokott együtt lenni._

A cache-ben a memoria egyes, egymast koveto rekeszeinek a tartalmat taroljuk. Ezek melle el kell tarolni az adatok memoria cimet is.

TAG: memoriacim cache-ben tarolt resze
A TAG alapjan dontheto el, hogy a keresett adat az adott cache sorban talalhato-e

A TAG szarmazhat

- fizikai cimbol (cache az MMU utan)
- virtualis cimbol (cache az MMU elott)

Virtualis TAG hatranya

- nagyobb TAG meret, mert a virtualis cimter is nagyobb
- Virtualzaciobol adodo helyettesitesek kezelese (-> ugyan az a virtualis cim mutathat tobb kulonbozo fizikai cimre attol fuggoen melyik folyamat fut eppen)

Virtualis TAG elonye: kisebb cache miss kesleltetes

Cache hit: a keresett adat a cache-ben megtalalhato => gyorsan elerheto
Cache miss: a keresett adat nincs a cache-ben => RAM-ból olvas - lassu, az adat betoltodik a regiszterbe es a CACHE-be is.

---

**69. Mi az a "cache line", miből épül fel?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Felsorolás, rajz._

64 byte-os cache line eseten a felepites:

- Directory Entry: TAG es egyeb allapotjelzok
- Tprot: TAG protection bitek => biztositjak a tag egyezoseget elirasok ellen
- Dprot: Data protection bitek => biztositjak az adat egyezoseget elirasok ellen
- State: allapot bitek (V bit, D bit)
- Data: az adat

```

---

## |TAG|Tprot|Dprot|State|Data |

```

---

**70. Milyen adatszervezési módokat ismer?**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Nem nagyon láttam eddig, de simán kérdezheti._

- Exclusive cache
  - cache szintek nem tartalmazzak egymas adatait
  - ugyanaz az adat csak egy szinten jelenhet meg
  - tobb CPU vagy mag eseten komplikalt
  - Adatok betoltese ketfelekeppen tortenhet:
    - Eloszor L3-ba ls ha szukseges akkor onnan L2-be, L1-be
    - Eloszor L1-be, majd ami nem fer be L2-be, ami oda se az L3-ba
- Inclusive cache
  - magasabb szintu cache tartalmazhatja az alacsonyabb szint adatait
  - Hatrany: duplikacio es csokken az alacsonyabb szintu cache merete
  - Elonye:
    - Magasabb szintu cache sora szabadon cserelheto, mert alacsonyabban is megtalalhato az adat
    - Tobb mag eseten, masik mag cacheben kell keresni akkor duplikalas miatt eleg az alacsony szintuben

Megjegyzés: tobb magos CPU eseten L1, L2 gyakran inclusive, L3 nem

---

**71. Milyen replacement policy-k vannak?**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Ez a FIFO, LIFO, LFU, LRU, ez is inkább más kérdéssel szerepel együtt._

Állapot: cache tele van

Fobb tipusok:

- FIFO: legregebben betoltott blokk
- LIFO: legutobb betoltott blokk
- LFU: legritkabban hasznalt blokk
- LRU: legregebben hasznalt blokk

---

**72. Mi az a koherencia kezelés, ismertesse a MESI koherencia kezelést!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Lehet a MOESI is. A többit is fel kell tudni sorolni, csak nem kell részletesen ismertetni._

Tobb CPU-s vagy tobbmagos rendszerek eseteben figyelni kell arra hogy egyes CPU-k (vagy magok) gyorsitotaraban megegyezo adatok legyenek.
Cel, hogy a modositott adat a leheto leggyorsabban bekeruljon az osszes processzor gyorsitotaraba, mielott a tobbi esetletgesen muveletet vegezne rajta

Adatervenyesites modja:

- invalidacio: az erintett cache line ervenytelenitese (V bit = 0)
- Feluliras: a modositott adat kozvetlen elkuldese a tobbi cachebe

Cache koherencia protokollok

- Snoopy -> minden cache figyeli a kozos buszt
- Snorf -> snoopy egy variansa
- Konyvtar alapu -> kozponti nyilvatartas kezeli mely cache-ek tartalmazzak az adatot
- MESI
- MOESI

MESI

- M - Modified: az adat modosult csak ez a tar valid a tobbi invalid
- E - Exclusive: az adat megegyezik a memoriaval, csak ebben a cache-ben van
- S - Shared: az adat tobb cache-ben is megtalalhato es egyezik a memoriaval
- I - Invalid: a cache line ervenytelen, nem tartalmaz hasznalhato adatot

MOESI

(- M - Modified: az adat modosult csak ez a tar valid a tobbi invalid)

- O - Owned: A modosult es megosztott allapotot helyettesiti. Egyetlen cache tulajdonaban van, ezzel elkerulheto, hogy vissza keljen irni a memoriaba megosztas elott.
  Elony: a modositott adat kozvetlenul atadhato egyik cachebol a masikba.

- E - Exclusive: az adat megegyezik a memoriaval, csak ebben a cache-ben van
  (- S - Shared: az adat tobb cache-ben is megtalalhato es egyezik a memoriaval)
- I - Invalid: a cache line ervenytelen, nem tartalmaz hasznalhato adatot

---

## 10-11. Modul: Párhuzamosság és Pipeline

**73. Párhuzamosság szintjei (funkcionális), típusai felsorolás, kik/mik törekednek a számítások felgyorsítása érdekében.**
_(Gyakoriság: ritka)_
_Megjegyzés: Szerintem ilyen mélyen már nem fogja ezt kérdezni._

Párhuzamosság típusai

- Funkcio szerint

  - Rendelkezesre allo parhuzamossag: Magaban a feladatban vagy a programkodban rejlo elvi lehetoseg, fuggetlen a konkret hardvertol
  - Kihasznalhato parhuzamossag: amit az adott architektura a vegrehajtas soran tenylegesen kepes megvalositani

- Elhelyezkedes szerint

  - Idobeli parhuzamossag: tobb vegrehajto egyseg mukodik idoben elcsusztatva (futoszallag/pipeline), jellemzeon nem ugyan azon a reszfeladaton

  ```
  -> VE1 -> VE2 -> VE3
  ```

  - Terbeli parhuzamossag: Tobb azonos tipusu vegrehajto egyseg egy idoben ugyan azt a muvelettipust vegzi

  ```
   -> VE1 ->
   -> VE2 ->
   -> VE2 ->
  ```

- Tipus szerint
  - Adatparhuzamossag
    - Adatparhuzamos architekturak
      - Adat-elemeken parhuzamos vagy futoszallag elvi vegrehajtast teszik lehetovet
    - Atalakitas funkcionalis parhuzamossagga
      - Adat elemeken vegrehajthato muveletek ciklusok formajaban torteno megfogalmazasa
  - Funkcionalis parhuzamossag
    - A feladat logikajabol kovetkezo parhuzamossag. Kulonbozo muveletek fuggetlenul vegezhetok

Funkcionalis programozas szintjei

- Utasitas szint: Programutasitasok parhuzamos vegrehajtasa
- Ciklus szint: Egymast koveto iteraciok parhuzamositasa (fuggosegek akadalyozhatjak)
- Eljaras szint: Parhuzamosan vegrehajthato eljarasok formajaban jelenik meg, merteke a feladat jellegetol fugg
- Program szint: Egymastol fuggetlen programok parhuzamos futtatasa
- Felhasznalo szint: tobb fuggelten felhasznalo egyideju kiszolgalasa

Parhuzamossagra torekedes:

- Programozo: Ugy irja meg a kodot hogy parhuzamosithato legyen
- Forditoprogram: Elemzi a kodot es megprobalja az utasitasokat atrendezni, vagy optimalizalni a ciklusokat
- Operacios rendszer: Menedzseli a szalakat es a folyamatokat, es osztja el oket a CPU magok kozott

---

**74. Hogyan csoportosítható a párhuzamosság?**
_(Gyakoriság: ritka)_

- Funkcio szerint

  - Rendelkezesre allo parhuzamossag: Magaban a feladatban vagy a programkodban rejlo elvi lehetoseg, fuggetlen a konkret hardvertol
  - Kihasznalhato parhuzamossag: amit az adott architektura a vegrehajtas soran tenylegesen kepes megvalositani

- Elhelyezkedes szerint

  - Idobeli parhuzamossag: tobb vegrehajto egyseg mukodik idoben elcsusztatva (futoszallag/pipeline), jellemzeon nem ugyan azon a reszfeladaton

  ```
  -> VE1 -> VE2 -> VE3
  ```

  - Terbeli parhuzamossag: Tobb azonos tipusu vegrehajto egyseg egy idoben ugyan azt a muvelettipust vegzi

  ```
   -> VE1 ->
   -> VE2 ->
   -> VE2 ->
  ```

- Tipus szerint
  - Adatparhuzamossag
    - Adatparhuzamos architekturak
      - Adat-elemeken parhuzamos vagy futoszallag elvi vegrehajtast teszik lehetovet
    - Atalakitas funkcionalis parhuzamossagga
      - Adat elemeken vegrehajthato muveletek ciklusok formajaban torteno megfogalmazasa
  - Funkcionalis parhuzamossag
    - A feladat logikajabol kovetkezo parhuzamossag. Kulonbozo muveletek fuggetlenul vegezhetok

---

**75. Mi az a rendelkezésre álló párhuzamosság - [Szálak fontosak, gondolom a létrehozás] --> Programozó, OS, Párhuzamos fordító**
_(Gyakoriság: ritka)_
_Megjegyzés: Bprofon be se jelölte, hogy ez kellene._

Utasitas szintu

- parhuzamos architektura vagy megfelelo forditoprogram segitsegevel

Ciklus vagy eljaras szintu: Szalak vagy folyamatok formajaban. Szal/folyamat a targykod legkisebb onalloan vegrehajthato resze. Letrehozhatja:

- Programozo
- Operacios rendszer
- Parhuzamos fordito

Program es felhasznaloi szint: Parhuzamos rendszerek, megfelelo hardver es szoftvertamogatassal

---

**76. Mi a compiler, milyen feladatai vannak?**
_(Gyakoriság: ritka)_

Forditoprogram ami leforditja a magas szintu programnyelvben irt programot a processzor szamara ertheto formatumra. Kulcsszerepet jatszik a parhuzamossag kihasznalasaban

1. Analizis: lexikalis (konstansok, valtozok, operatorok), szintaktikai es szemantikai elemzes
2. Szintetizalas: Targykod generalasa es kodomptimalizalas, amely soran a fordito fuggetlen, parhuzamosan futtathato reszeket keres

---

**77. Írja fel a párhuzamos architektúrák Flynn-féle és korszerű osztályozását!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Táblázat (Flynn) + ágrajz (korszerű)._
**78. Mi a Flynn-modell, milyen osztályai vannak (csak felsorolás)?**
_(Gyakoriság: ritka)_
_Megjegyzés: Előző szokott inkább lenni._
**79. A Flynn-féle osztályozásban mit jelent a SIMD, mit lehet róla tudni?**
_(Gyakoriság: ritka)_
_Megjegyzés: Kettővel ezelőttivel lehet együtt._

Négy fogalom

- SI (Single instruction strem): Egyszeres utasitasfolyam, a gepnek egyetlen vezerloegysege van ami mondja mit kell tenni
- MI (Multiple instruction stream): Tobbszoros utasitasfolyam, a gep egyszerre tobb kulonbozo utasitasfolyamot tud egy idoben vegrehajtani
- SD (Single data stream): Egyszeres adatfolyam, egyszerre egy adaton vegzunk muveletet
- MD (Multiple data stream): Tobszoros adatfolyam, egyszerre sok fuggetlen adaton dolgozik a gep

- SISD (Single Input, Single Data): Neumann modell
- SIMD (Single Input, Multiple Data): Multimedias feldolgozas
- MISD (Multiple Input, Single Data): Elmeleti kategoria
- MIMD (Multiple Input, Multiple Data): Teljes parhuzamos feldolgozas

Modern osztalyozas

- Funkcionalisan parhuzamos architekturak
  - Utasitas szinten parhuzamos architekturak (ILP)
    - Futoszallag
    - VLIW
    - Szuperskalar
  - Szal szinten parhuzamos architekturak (SMT)
  - Folyamat szinten parhuzamos architekturak
    - ELosztott memoria hasznalato
    - Kozos memoria hasznalatu

---

**80. Milyen példákat ismer adatpárhuzamos architektúrákra? felsorolás ábra**
_(Gyakoriság: ritka)_
_Megjegyzés: Elvileg ezt már nem fogja tőlünk kérni, de ki tudja._

NO ANSWER

---

**81. Funkcionálisan párhuzamos architektúrák? felsorolás ábra**
_(Gyakoriság: gyakori)_
_Megjegyzés: Ez szokott lenni az "Írja fel a párhuzamos architektúrák Flynn-féle és korszerű…" kérdéssel._

- Funkcionalisan parhuzamos architekturak
  - Utasitas szinten parhuzamos architekturak (ILP)
    - Futoszallag
    - VLIW
    - Szuperskalar
  - Szal szinten parhuzamos architekturak (SMT)
  - Folyamat szinten parhuzamos architekturak
    - ELosztott memoria hasznalato
    - Kozos memoria hasznalatu

---

**82. Mik az ILP CPU-kra vonatkozó általános követelmények + Kibocsátási párhuzamosság?**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Inkább későbbi vizsgákon szokott lenni, de amúgy ez nem olyan nehéz._

Mindne olyan processzornak amely utasitas szintu parhuzamossagot alkalmaz, ket szigoru szabalynak kell megfelelnie:

1. Fuggosegek kezelese

- A processzornak figyelnie kell az utasitasok kozti fuggosegeket

2. Soros vegrehajtas konzisztenciaja

- A programnak a parhuzamos vegrehajtas mellet pontosan ugy kell viselkednei mintha a programozo altal megirt sorrendben egymas utan futottak volna le az utasitasok

Kibocsatasi parhuzamossag

- Kibocsatasi parhuzamossagnak nevezzuk, ha a CPU a dekodolo egysege egyetlen oraciklus alatt egynel tobb utasitast kepes tovabb kuldeni vegrehajtasra.
- A kibocsatas az a folyamat amikor a dekodolt utasitasok atkerulnek a vegrehajto egysegbe. Ha a CPU kepes parhuzamosan tobb utasitas vegrehajtasara a kibocsatasi kapacitast novelni kell.

---

**83. Milyen szintű párhuzamosságokat használnak a mai processzorokban? Sorolja fel és mindegyik mellé írjon legalább egy gyakorlati példát!**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Őszintén fogalmam sincs, mi akar ez lenni, pedig már többször volt._

- Utasitas szintu parhuzamossag (ILP - Instruction Level Parallelism)
  - futoszalag vagy szuperskalar vegrehajtas
- Szal szintu parhuzamossag (TLP - Thread Level Parallelism)
  - Hyper-Threading (SMT) - egyetlen mag ket programszalat hajt vegre parhuzamosan
- Adat szintu parhuzamossag (DLP - Data Level Parallelism)
  - SIMD utasitasok, amikor egy utasitassal 8db 32 bites szamot adunk ossze egyszerre
- Folyamat/Mag szintu parhuzamossag (Multi-Core)
  - Tobmagos processzorok

---

**84. Milyen adatfüggőségeket ismer?**
_(Gyakoriság: kevésbé ritka)_

- Valos adatfuggoseg (RAW - Read After Write)
  - muveleti adatfuggoseg
  - lehivasi adatfuggoseg
- Al adatfuggoseg
  - WAR (Write After Read)
  - WAW (Write After Write)
- Ciklusbeli adatfuggoseg

---

**85. Sorolja fel a függőségek 3 fő csoportját és ismertesse a RAW függőséget (probléma felvetés, kezelés)!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Itt beszélni kell a műveleti adatfüggőségről és a lehívási adatfüggőségről is._

Muveleti adatfuggoseg

Problema: Az I2 utasitas olvasni akar egy adatot amit az I1 meg nem irt vissza
Pelda: Ket szamot ossze akarunk szorozni majd az eredmenyeket ossze akarjuk adni.

Kezelese:

1. NOP (No Operand) -> varakozo ciklusok beiktatasa => Lassitja a vegrehajtast es mas is csuszik
2. Operandus elorehozas (Forwarding) -> Extra hardverrel az eredmenyt az ALU vegerol azonnal visszavezetik, megsporolva a varakozast

Lehivasi adatfuggoseg
Az operandusokat vegrehajtas elott az adatcache/operativ tarbol a regiszterekbe kell tolteni

Problema: Ha az adat nincs a regiszterben a betoltese idoigenyes ami varakozasra kenyszeriti az ALU-t
Kezeles: Betoltesi operandus elore hozasa: extra hardverrel az adatot a regiszter mellet kozvetlenul az ALU bemenetere is tovabbitjak
Kovetkezmeny: Legalabb 1 oraciklus nyereseg a vegrehajtasi idoben

---

**86. Ismertesse a WAR és WAW ál-adatfüggőségeket! (probléma felvetés, kezelés)**
_(Gyakoriság: gyakori)_

WAR (Write After Read)

Az iras hamarabb tortenne meg mint az elozo utasitas olvasasa

I1 -> MUL r3 r2 r1 = r1 es r2 erteket szorozzuk es beleirjuk r3-ba
I2 -> ADD r2 r4 r5 = r2be irjuk az r4 es r5 osszeadas eredmenyet

Elorodulhat, hogy az I2 ADD utasitas eredmenye hamarabb irja felul az r2 eredmenyet, mint a megelozo utasitas operandusainak beolvasasa.

Megoldas (regiszter atnevezese):
I1 MUL r3 r2 r1
I2 ADD r23 r4 r5

=> Az r23 -> r2 hozzarendelest nyilvan kell tartani, majd amikor a MUL utasitas vegzett, vissza kell irni r23 tartalmat r2-be

WAW (Write After Write)

Ket iras korul a kesobbi logikai utasitas (pl: ADD) hamarabb irna felul a regisztert mint a korabbi (pl: MUL)

I1 MUL r3 r2 r1
I2 ADD r3 r4 r5

Elofordulhat, hogy az I2 ADD utasitas elobb fut le mint a az I1 MUL, igy az I2 utasitas felulirja I1 eredmenyet -> Serul a szekvencialis konzisztencia

Megoldas: regiszter atnevezes

Atnevezesi regiszterek tulajdonsagai:

- uj onallo regiszter
- sajat cimtartomannyal rendelkezik
- programozo szamara transzparens
- extra hardvernek szamit

Ebbol adodik hogy ket fele regiszterkeszletet kulonboztetunk meg

1.  Architekturalis regiszterkeszlet
2.  Atnevezesi regiszterkeszlet

---

**87. Ismertesse a vezérlés függőséget (probléma felvetés, kezelés)!**
_(Gyakoriság: gyakori)_

- Feltetel nelkuli elagazas
  - Problema: Az ugras parancs keson allitja be a PC-t, addigra mag a futoszalag vegrehajtas miatt a kovetkezo parancs lehivasra kerult vagy akar le is futott -> hibas mukodes
  - Kezeles:
    - Ugrasi buborek: A JMP utasitas moge egy vagy tobb NOP utasitas kerul be, ezzel lassitva a futoszallagot, mig elo nem all az ugrasi cim => csokken a teljesitmeny
    - Utasitasok atrendezese: optimalizalo compiler segitsegevel
- Felteteles elagazas
  - kezelese: ma mar csak dinamikusan a vegrehajtas soran tortenhet, hiszen a feltetel teljesulesetol vagy nem teljesulesetol fugg, hogy ugras vagy soros folytatas kovetkezik-e

---

**88. Mi az az erőforrás függőség?**
_(Gyakoriság: kihalt)_
_Megjegyzés: Ezt nem fogja kérni tőlünk._

NO ANSWER

---

**89. Párhuzamos végrehajtás esetén milyen esetekben sérülhet a szekvenciális konzisztencia, és hogyan lehet ezeket kezelni?**
_(Gyakoriság: gyakori)_

- Utasitas feldolgozas soros konzisztenciaja (WAR/WAW)

  - Az egyik utasitas gyorsabban tud lefutni es ezzel felulirhatja egy elotte levo meg le nem futott utasitas regiszteret es ezzel felboritja a rendszer egyensulyat. Ennek a megoldasa, ha neha atnevezunk regisztereket, majd kesobb visszairjuk az adatokat amikor a lassabb elso utasitas is lefutott, valamint hardveres biztositas (pl, belso kovetes, kulon allapotjelzok), hogy a felteteles utasitas csak a kozvetlen elozo utasitas eredmenyet lassa

- Kivetelkezeles
  - Ha az egyik utasitasnal exception lepett fel de mar 3 utasitast is kiszamoltunk elore, akkor biztositani kell, hogy a szamitogep allapota a hiba pillanataban pontosan olyan legyen, mintha szekvencialisan futottunk volna.

---

**90. Mit tud a kivételkezelés soros konzisztenciájáról?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Pontatlan (gyenge konzisztencia) és pontos (erős konzisztencia) részét is tudni kell, ezek szoktak külön kérdések is lenni._

A megszakitasokat az utasitasok eredeti programsorrendjeben kell kezelni, akkor is ha a vegrehajtas parhuzamos.

- Pontatlan kivetelkezeles (gyenge konzisztencia)

  - A CPU azonnal fogadja a megszakitast, fuggetlenul attol, hogy az elozo utasitasok befejezodtek-e

  ```
  I1 MUL r3 r2 r1
  I2 ADD r5 r6 r7 -> tulcsordul es ker egy megszakitast
  I3 JZ cimke     -> ha az eredmeny 0, akkor ugras
  ```

  - Ha a gyorsabb utasitas hibaja miatt a CPU azonnal menti a kontextust, nem tudhato, hogy a logikailag korabbi, lassabb muvelet befejezodott-e -> ez definialatlan regiszterallapotot es sulyos mukodesi hibakat okoz

- Pontos kivetelkezeles
  - Megszakitas csak akkor fogadhato el, ha minden korabbi utasitas
    - befejezodott
    - vagy szinten megszakitast ker
  - Eredmeny: A mentett allapot mindig egy valos, szekvencialis programsorrendi allapot
  - Megvalositas
    - atrendezo puffer (ROB - reorder buffer)
    - cimkezes: utasitasok sorszamozasa, csak akkor fogadjuk el, ha egyetlen megelozo sorszamu sem kert

---

**91. Sorolja fel az ideális futószalagos feldolgozás előfeltételeit 2 fokozat esetén!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Gyakori elővizsga/vizsga kérdés._

- 2 db egymastol teljesen fuggetlen vegrehajto egyseggel rendelkezik
- Egyik fokozat kimenete a masik fokozat bemenete kell legyen
- Mindket fokozat vegrehajtasi ideje azonos
- Orajelre szinkronizaltan 1 oraciklus alatt elvegzik a feladatukat
  T: szekvencialis vegrehajtasi ido
  t: futoszallagos vegrehajtasi ido
  t = T/2
  Fuggosegek kezelese:
  - Operandus elorehozas
  - Ujrafeldolgozas

---

**92. Sorolja fel a RISC CPU-k tanult jellemzőit!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Előny, hátrány is szokott lenni._

Reduced Instruction Set Computing

- Utasitasok: Keves (50-150) -> egyszeru cimzesi modok, azonos hosszusagu utasitasok pl.: 64/128 bit
- Muveletvegzes: Kizarolag regisztereken vegez muveletet; memoria es cache eleres csak a LOAD/STORE utasitassal erheto el
- Felepites: Sok regiszter, huzalozodd dekodolas (hardveres dekodolas)
- Vegrehajtas: 3 operandusos, cel az 1 oraciklusos futas
- Szoftver: Bonyolultabb compiler

- Elonyok: alacsonyabb fogyasztas, gyorsabb utasitas szintu vegrehajtas
- Hatranyok: bonyolultabb feladatokat instrukcio szekvenciakkal kell megoldani, kisebb kompatibilitas, kisebb teljesitmeny ugyan azon a frekvencian (x86-64-hez kepest)

---

**93. Sorolja fel a CISC CPU-k tanult jellemzőit!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Előny, hátrány is szokott lenni._

Complex Instruction Set Computing

- Utasitasok
  - nagy szamu utasitaskeszlet (tobb szaz)
  - valtozo hosszusagu, akar osszetett utasitasok -> dekodolonak nem csak dekodolnia kell az utasitast, hanem azonositani a veget, plusz hardvert es idot igenyel
  - egy utasitas tobb elemi muveletet is vegre tud hajtani
- Muveletvegzes: kozvetlen memoriaeleres lehetseger (2. operandus lehet memoria/cache)
- Felepites: Nagy belso mikroprogramtar, kevesebb regiszter
- Vegrehajtas: 2 operandusos - elso operandus nem lehet memoria vagy cache cim, utasitasok feldolgozasa tobb ciklusido lehet -> bonyolultabb feldolgozas
- Futoszalag: Altalaban +2 fokozat, sebessegkulonbseg eseten Interlock varakoztatas
- Szoftver: Egyszerubb compiler es gepi kodu programozas
- Extrak: Regi programokkal kompatibilis, HyperThreading es virtualizacio tamogatasa

- Elonyok: egyszerubb compilerek, szeles termekskala, kompatibilitas, nagy nyers teljesitmeny
- Hatranyok: komplex hardver, lassabb dekodolas, magasabb energiafogyasztas

---

**94. Miért hosszabb a CISC futószalag a RISC-nél?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Előző két kérdések valamelyikével szokott együtt lenni, külön általában nincsen._

A CISC pipelineba pluszba kell:

- AG - cimszamitas
- DC1-2 - Data cache

---

**95. Milyen következményekei lettek a futószalagos architektúráknak? Milyen új problémák jelentkeztek (problémák okai és kezelésük 1-1 mondatban)?**
_(Gyakoriság: ritka)_
_Megjegyzés: Későbbi vizsgákon szokott lenni._

- Adatfuggosegek (RAW)
  - ok: egy utasitasnak szuksege van az elozo eredmenyere ami meg nem keszult el
  - kezeles: varakoztatas, vagy operandus elorehozas
- Vezerlesfuggoseg
  - ok: ugro utasitasoknal nem tudjuk mi a kovetkezo utasitas, mig a feltetel ki nem ertekelodik
  - kezeles: elagazas becsles vagy futoszalag uritese
- Eroforras konfliktus
  - ok: ket utasitas egyszerre akarja hasznalni ugyanazt a hardvert
  - kezeles: tobbportos memoria / harvard architektura

---

**96. Milyen közös jellemzői vannak az I. és II. generációs szuperskalár architektúráknak?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Gyakori elővizsga/vizsga kérdés._

- Parhuzamos kibocsatas: dekodolo egysegbol egy oraciklusban tobb utasitas kibocsatas
  - 1.gen: 2-3 utasitas/ciklus
  - 2.gen: 4-6 utasitas/ciklus
- Idobeli + terbeli parhuzamossag: tobb futoszalag parhuzamosan
- Maguk kuzdenek meg fuggosegekkel: dinamikusan, extra hardver segitsegevel
- Kompatibilitas: regi programok is futtathatok maradnak

---

**97. Ismertesse a Harvard architektúrát!**
_(Gyakoriság: ritka)_
_Megjegyzés: Elvileg rajzot is kérhet ide._

- Utasitas es adat kulon uton mozog -> parhuzamos eleres
- Kulon adatutaok, novekszik a teljesitmeny

Szuperskalar CPU-kban:

- L1 cache: Harvard: utasitas + adat kulon tarolodik
- L2, L3 cache: Neumann: utasitas + adat kozosen tarolodnak
- Modositott Harvard architektura
  - program adatkent is kezelheto
  - Mai CPU-k Harvard + Neumann egyutt

Vezerlesi vazlat

- Vezerloegyseg (CONTROLL): lehivja az utasitast az Instruction Cachebol (INSTR adatut)
  - Ez alapjan jelet kuld a Data Cache-nek, hogy az ALU-ba milyen cim keruljon
  - Kozben az Instruction Cache fele is kuld jelet: kovetkezo utasitas + aktualis adat egyszerre erkezik meg
- ALU: IN es OUT adatutakon kommunikalhat a periferiakkal
  - vezerloegyseg iranyitja az ALU-t, STATUS adatuton visszacsatolat biztosit fele

Minden muvelet orajelre szinkronizalt

- Elonyei:
  - kepes parhuzamosan adatot es utasitast olvasni vagy irni cache nelkul
  - Az adat es utasitas tarolok kulonallo cimtartomannyal rendelkeznek

---

**98. Milyen fajtái vannak a szűk keresztmetszeteknek?**
_(Gyakoriság: ritka)_

- Kibocsatas: kozvetlen kibocsatas miatt a gyakorlati teljesitmeny (kb 1 utasitas / ciklus) messze elmaradt az elmeleti lehetosegektol
- Memoria: a memoria lassusagot csokkentettek a cache bevezetesevel
- Elagazasfeldolgozas: csokkentese statikus elagazasbecslessel
- Blokkolo adatfuggosegek: ez volt a legnagyobb problema: az adatfuggosegek es az al-adatfuggosegek is teljesen blokkoltak a vegrehajtast, mert a rendszer meg nem tudta ezeket kezelni

---

**99. Sorolja fel a II. generációs szuperskalárok újdonságait (1-1 mondat magyarázatként mindegyikhez)!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Gyakori elővizsga/vizsga kérdés._

- Dinamikus utasitas utemezes
  - A cpu nem ragad le egy hibas vagy varakozo utasitasnal, hanem atugorja azt es halad tovabb a tobbiel.
  - Kibocsatas: a dekodolobol a varakoztato allomasba meg sorrendbe erkeznek az utasitasok
  - Kikuldes: a varakoztato allomasbol a vegrehajto egysegek fele mar sorrenden kivul mennek az utasitasok amint felszabadulnak a szukseges adatok (streber modell)
  - Eredmeny: Megszunteti a kibocsatasi szuk keresztmetszetet es noveli az atbocsatokepesseget
- Regiszter atnevezes
  - Az al adatfuggosegek felszamolasa. A cpu minden eredeti regiszterhez egy kulon atnevezesi regisztert rendel. Tamogatja a dinamikus elagazasbecslest, ha a CPU rossz agon indult el az eredmenyek csak az atnevezesi regiszterben vannak
- Dinamikus elagazasbecsles
  - Az elagazasok kimenetet tortenet bitekben tarolja a CPU es ebbol josol a kovetkezo alkalomra.
  - Becsles tipusai:
    - 1 bites: csak az utolso elagazas alapjan dont.
    - 2 bites
      - 11 - hatarozott
      - 10 - gyenge
      - 01 - gyenge soros
      - 00 - hatarozott soros folytatas
- Kifinomult es kibovitett gyorsitotar alrendszer
- Sorrenden kivuli kikuldes
  - kibocsataskor mar nincs fuggosegvizsgalat.
  - Ez a puffer valasztja el a folyamat elso reszet (lehivas/dekodolas) a hatso reszetol (tenyleges vegrehajtas)
- RISC mag
- Reorder Buffer
  - Kor alaku puffer: A ROB egy folytonos korpufferkent mukodik ahol az utasitasok a bemeneti mutatoknal lepnek be es a vegmutatonal tavoznak
  - Parhuzamos kikuldes: a ket mutato kozotti teruleten varakozo utasitasok korul barmelyik fuggetlen utasitas kikuldheto vegrehajtasra, fuggetlenul az eredeti sorrendtol

---

**100. A reorder buffer (ROB) működése ÁBRÁVAL + Kiírási szabályok!**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: A kiírási szabályok külön kérdés is lehet szerinte. NAGYON FONTOS TUDNI KÉSŐBBI VIZSGÁKRA! Elővizsgán szerintem nem lehet._

- Kor alaku puffer
  - A ROB egy folytonos korpufferkent mukodik ahol az utasitasok a bemeneti mutatoknal lepnek be es a vegmutatonal tavoznak
- Parhuzamos kikuldes
  - a ket mutato kozotti teruleten varakozo utasitasok korul barmelyik fuggetlen utasitas kikuldheto vegrehajtasra, fuggetlenul az eredeti sorrendtol
- Spekulativ vegrehajtas es biztonsag
  - Spekulativ bit: minden utasitashoz tartozik egy bit: ha erteke 1 az utasitas feltetele meg nem kerult kiertekelesre
  - Amig a spekulativ bit 1 az eredmeny nem irhati ki a vegleges memoriaba
- Feltetel kiertekelese utan
  - helyes irany eseten a spekulativ bit erteke 0-ra all
  - hibas irany eseten a ROB-bol torlesre kerul az utasitas es az atnevezesi regiszterek felszabadulnak
- Kiirasi szabalyok
  - Csak akkor irhati ki, ha minden korabbi utasitas kiirasa mar megtortent
  - SPekulativ allapotban levo utasitas nem irhato ki
  - CISC-rekonverzio utasitas tobb belso RISC muveletre bomlik, a kiiras csak akkor tortenik meg, ha az osszes hozzatartozo RISC egyseg elkeszult. Itt tortenik a rekonverzio is

---

**101. Ismertesse az utasításon belüli párhuzamosság elvét! Milyen gyakorlati megvalósításokat ismer?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Fogalmam sincs, mi szeretne lenni a "gyakorlati megvalósítás". Talán felsorolni a duál műveleti, VLIW és SIMD-et és a SIMD-ről írni?_

- Dual muveleti utasitasok
  - Egy utasitas ket muveletet vegez (multiply-add: y = ax + b)
- SIMD utasitasok
  - Egyetlen utasitas, tobb egymastol fuggetlen operanduson hajtja vegre ugyanazt a muveletet
- VLIW architekturak
  - A forditoprogram csomagol tobb fuggetlen muveletet egyetlen hosszu utasitasszoba

---

**102. SIMD-nél fontos tudni fixpontos és lebegőpontos multimédiát, de alapjáraton a jellemzőket több vizsgán is kérte már!**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Számomra ez rejtély. Valóban szerepel a táblázatban több helyen, hogy SIMD, de nem tudom, hogy mit kért ott. Nehéz kérdésnek titulálnám._

- Logikai architektura kiterjesztese
  - uj multimedias utasitas keszletet alkottak
- Memoriaigeny
  - Egy utasitas akar 8 operandust is kerhet, ami drasztikusan novelte a savszekesseg igenyt
  - Megoldas: Az L2 cache beepult a processzorba
- Buszrendszer
  - Megjelent az AGP, majd a PCI Express a grafikai adatok gyorsabb mozgatasahoz
- MMX (Multimedia Extension)
  - fixpontos multimedias utasitasok
- SSE (Streaming SIMD Extension)
  - ami mar lebegopontos muveleteket is tamogatta
- Alkalmazas
  - Multimedias alkalmazasoknal mint video, kep es 3d jatekok eseten oriasi gyorsulast jelentett

---

**103. SIMD Logikai Architektúra + 3D Ábrázolás**
_(Gyakoriság: kihalt?)_
_Megjegyzés: Lehet hogy a fizikai/logikai architektúrát kérdezi, amikor SIMD-et kérdez, viszont elvileg 3D ábrázolást tőlünk már nem fog kérdezni._

Logikai architektura kibovitese

- Pakolt adattipusok: 64 bites egysegekbe tobb kisebb adatot csomagolnak
  - Pakolt byte (8 bit hossz x 8db = 64 bit)
  - Pakolt felszo (16bit hossz x 4db = 64 bit)
  - Pakolt szo (32 bit hossz x 2db = 64 bit)
  - SSE pakotl tipus - egyszeres pontossag (32 bit x 4db = 128 bit)
  - SSE pakotl tipus - ketszeres pontossag (64 bit x 2db = 128 bit)
- Bit-blokk atvitel
  - Az ablakokat/kepeket egyseges blokkonkent kezeli a rendszer, igy nem kell elemenkent mozgatni a hatalmas adatmennyiseget

Fizikai architektura kibovitese

- SSE (lebegopontos): 8 darab uj 128 bites regiszterek kerultek a cpu-ba
- Operacios rendszer tamogatasa: AZ uj regiszterek es a megvaltozott megszakitasrendszer miatt szikseg volt az OS egyutmukodesere

---

**104. Mutassa be a VLIW működési elvét!**
_(Gyakoriság: kihalt)_
_Megjegyzés: VLIW már nem az anyag része._

NO ANSWER

---

**105. Milyen előnyei és hátrányai vannak a VLIW-nek a szuperskalárokhoz képest?**
_(Gyakoriság: kihalt)_
_Megjegyzés: VLIW már nem az anyag része._

NO ANSWER

## 12. Modul: Netburst és Szálak

**106. Hogyan növelhető a frekvencia, milyen következményekkel jár? (Netburst)**
_(Gyakoriság: gyakori)_

- Gyartasi csikszelesseg csokkentese (180nm -> 65nm) Kisebb tranzisztorok = gyorsabb elektronaramlas = magasabb orajel
- Futoszalag-fokozatok roviditese
  - A logikai kapuk szamanak csokkentese egy fokozatun belul
  - Ez kenyszeruen novelte a fokozatok szamat
  - Tobb fokozat -> parhuzamosan vegrehajtott utasitasok szama nott -> fuggosegek szama is no -> csokkenhet a hatekonysag es egy ertek folott a teljesitmeny is

---

**107. Ismertesse a "rapid execution engine", a "replay system" és az "execution trace cache" tulajdonságait, előnyök, hátrányok (Netburst architektúra)!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Gyakori elővizsga kérdés._

- Execution Trace Cache:
  - Az L1 cache mar dekodolt RISC utasitasokat tarol a vegrehajtas sorrendjeben, igy sporol a dekodolasi idon
- Execution Engine
  - Az egyszeru FX muveletek gyors vegrehajtasara Az orajel felfuto es lefuto elere is kepes muveletvegzesre -> vegrehajtasi ido akar fel oracuklus
- Replay System
  - RISC szeru utasitasok ismetelt vegrehajtasa
  - Ha egy utasitas adata meg nincs keszm nem allitja meg a futoszalagot, hanem beleteszi egy varolistaba es kesobb ujraprobalja

---

**108. Sorolja fel a Netburst architektúra újdonságait rövid magyarázatokkal!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Ide a kell az Execution Trace Cache, Rapid Execution Engine, Replay System ÉS Hyper futószalag, Quad Data Rate Bus, Enchanced Branch Prediction._

- Execution Trace Cache:
  - Az L1 cache mar dekodolt RISC utasitasokat tarol a vegrehajtas sorrendjeben, igy sporol a dekodolasi idon
- Execution Engine
  - Az egyszeru FX muveletek gyors vegrehajtasara Az orajel felfuto es lefuto elere is kepes muveletvegzesre -> vegrehajtasi ido akar fel oracuklus
- Replay System
  - RISC szeru utasitasok ismetelt vegrehajtasa
  - Ha egy utasitas adata meg nincs keszm nem allitja meg a futoszalagot, hanem beleteszi egy varolistaba es kesobb ujraprobalja
- Quad Data Rate Bus
  - Orajelenkent 4x-es adattovabbitas (felfuto/lefuto + faziseltolas) L1 es L2 gyorsitotarak fele. Szukseges 2 orajel generator
- Enchanced Branch Prediction
  - Uj elagazasbecslo logika 94%-97%-os hatekonysagu, hogy a futoszalagot ne keljen gyakran uriteni
- Hyper futoszalag
  - A dekodolast kihelyeztek a futoszalagon kivulre, hogy ne akadalyozza a magas frekvenciat

---

**109. Ismertesse a Netburst architektúra hátrányait! + idén ahogy mondta: Fejlődési korlátok**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Úgy is szokott lenni, hogy Netburst következményei._

- Hatekonysagi korlat
- Disszipacios korlat (ho)
  - Statikus disszipacio
    - A szivargasi aram hoveszteseget okoz. Ahogy csokkentettek a csikszelesseget es noveltek a frekvenciat a szivargasi aram exponencialisan novekedni kezdett
  - Dinamikus disszipacio
    - A frekvencia novelese linearisan mig a feszultseg novelese negyzetesen novelo a hot -> frekvencia emeleset a feszultseg csokkentesevel probaljak ellensulyozni
- Parhuzamos buszok frekvencia korlatja

---

**110. Pentium 4 Legfontosabb Újítások**
_(Gyakoriság: kihalt?)_
_Megjegyzés: Nem hinném, hogy ezt már kérné, de ki tudja._

- CISC kivul, de belul egy gyors RISC mag
- Hosszu futoszallagok: tobb fuggoseg, de magasabb frekvencia
- Vedelem: bevezettek a Thermal Monitort ami tulmalegedesor visszavette az orajelet

---

**111. Mi az a statikus disszipáció, ismertesse, írja fel a képletét!**
_(Gyakoriság: kevésbé ritka)_

- Ahogy csokkentettek a csikszelesseget es noveltek a frekvenciat a szivargasi aram exponencialisan novekedni kezdett

```
Ds = V * Ileak
V = frekvencia
Ileak = szivargasi aram
```

---

**112. Sorolja fel a disszipáció típusait képlettel, és jellemezze ezeket!**
_(Gyakoriság: kevésbé ritka)_

- A frekvencia novelese linearisan mig a feszultseg novelese negyzetesen novelo a hot -> frekvencia emeleset a feszultseg csokkentesevel probaljak ellensulyozni

```
Dd = A * C * V^2 * fc
A = az aktiv kapuk reszaranya
C = a kapuk osszesitett elosztott kapacitasa
V = tapfeszultseg
fc = megfrekvencia
```

---

**113. Mi az a Data Valid Window? Ábrázolja és magyarázza el!**
_(Gyakoriság: ?)_
_Megjegyzés: Ezt inkább a párhuzamos buszok frekvencia korlátaival sorolnám fel, elvileg eddig nem nagyon kérte, de simán kérheti._

- A digitalis jelek a valosagban nem tokeletesek. A jel felfutasahoz es lefutasahoz ido kell, raadasul a zaj es kesleltetesi kulonbsegek miatt a jel remeg
  - A data valid window az az ablak az orajel ciklus kozepen ahol a jel mar megnyugodott

---

**114. Mi a "Jitter", az LVDS, a DVFS és a "Skew"?**
_(Gyakoriság: ?)_
_Megjegyzés: Itt egyedül a DVFS-t vettük, illetve a Jitter/Skew az szintén a párhuzamos buszok frekvencia korlátaira jellemző (buszrendszerek témakör)._
<Hely a válasznak>

---

**115. Sorolja fel a thread (szál) tulajdonságait, miért rosszabb mint az ILP?**
_(Gyakoriság: kevésbé ritka)_

Thread: A program legkiseb onalloan vegrehajthato resze -> parhuzamosan futtathato

- implicit parhuzamossag
  - A programozo hagyomanyos soros kodot ir. A parhuzamositast a hardver es a compiler vegzi
- explicit parhuzamossag
  - A programozo tudatosan parhuzamos szerkezetu kodot ir, kulon meghatarozva a szalakat es azok egyuttmukodeset

---

**116. Szál definíció**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Más kérdésekkel szokott együtt lenni._

Thread: A program legkiseb onalloan vegrehajthato resze -> parhuzamosan futtathato

---

**117. Szálak származtatása**
_(Gyakoriság: ?)_
_Megjegyzés: Fogalmam sincs, hogy ezt mikor/hol kérte._

- implicit parhuzamossag
  - A programozo hagyomanyos soros kodot ir. A parhuzamositast a hardver es a compiler vegzi
- explicit parhuzamossag
  - A programozo tudatosan parhuzamos szerkezetu kodot ir, kulon meghatarozva a szalakat es azok

---

**118. SMP SMT (Többszálú CPU), SMT Megvalósítási célok**
_(Gyakoriság: ?)_
_Megjegyzés: Fogalmam sincs, hogy ezt mikor/hol kérte._

Tobbszalusag csoportositasa

- Szoftveres: Tobbszalu alkalmazasok, vagy OS futtatasa egyszali CPU-n
- Hardveres: A CPU maga tamogatja tobb szal kezeleset
- SMP - Symmetric multiprocessing: tobb kulon mag egy lapkan
- SMT - Simultaneous multithreading: Egy mag futtat egyszerre tobb szalat (HyperThreading)

---

**119. Röviden ismertesse a szál szintű párhuzamosság tanult típusait (3 db)!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Gyakori elővizsga/vizsga kérdés._

- Finoman szemcsézett
  - Működési elv: Órajelenként vált a szálak között
  - Előny: Nincs váltási késleltetés; az egyik szál elakadása nem állítja meg a CPU-t
  - Hátrány: Az egyedu szálak végrehajtási ideje megnő, mivel ritkán kapnak vezérlést
- Durván szemcsézett
  - Működési elv: Akkor vált szálat, ha az aktuális elakad
  - Előny: Egyetlen szál képes a teljes CPU eroforrast maximalis sebesseggel kihasznalni
  - Hátrány: A valtas felusmerese es a kontextus csere 1-2 ciklus vesztesggel jar
- SMT
  - Működési elv: Egyetlen orajelen belul tobb kulonbozo szal utasitasait futtatja egyszerre
  - Előny: Kitolti a fuggosegek miatti uresjaratokat a vegrehajto egysegekben
  - Hátrány: -

---

**120. Miért "éri meg" a szál szintű párhuzamosságot használni?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Gyakori elővizsga/vizsga kérdés._

Kitolti a fuggosegek miatti uresjaratokat a vegrehajto egysegekben. Mivel az egymagos CPU-k komplexitasanak novelese mar nem hozott aranyos teljesitmenyjavulast a fejlesztes az utasitasszintu parhuzamossagrol a szalszintuparhuzamossag fele fordult.

---

**121. Ismertesse az Intel Hyper Threading technológiát!**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Inkább későbbi vizsgákon szokott lenni._

Egy két szálas SMT megoldás amely először a Pentium 4-el jelent meg.

Lényege:

- Egyetlen fizikai mag; az operacios rendszer fele ket logikai CPU-kent jelenik meg. A processzor ket kulonbozo szal utasitasait kezeli es kuldi vegrehajtasra (sorrenden kivul)
- A CPU-ban ekkor egyszerre ket achitekturalis allapot van jelen
  - ket kulon PC, regiszterkeszlet, de a vegrehajto egysegeken osztoznak

Uzemmodok:

- ST (Single Task)
  - egy szal vegrehajtas tortenik
  - A szal az osszes vegrehajtp eroforrast megkapja
  - Ket lehetseges allapot ST0 vagy ST1 attol fugg melyik logikai CPU aktiv
- MT (Multi task)
  - Tobb szal vegrehajtasa tortenik parhuzamosan
  - A szalak osztoznak a vegrehajto egysegeken

Mukodes

- A CPU alapertelmeuetten MT modban indul
- Ha az egyik szal megszakad ST modba valt
- Fuggoseg megszunesekor visszater MT modba
- Uzemmod valtas HALT utasitassal tortenik
  - Megszakitja a CPU futast
  - Energiatakarekot allapotba helyezi
- HALT utan ST0 vagy ST1 allapotba kerul
- HALT utasitast kizarolag az OS vagy mas alacsony szintu szoftver adhatja ki.

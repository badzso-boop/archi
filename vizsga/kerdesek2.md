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
<Hely a válasznak>

---

**39. Jellemezze a DDR4-et! Milyen újdonságok vannak a DDR3-hoz képest?**
_(Gyakoriság: gyakori)_
<Hely a válasznak>

---

**40. Ismertesse a DDR4 memóriánál tanult 8n prefetch eljárást!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Lehet együtt a DDR4-el, de szokott külön is szerepelni._
<Hely a válasznak>

---

**41. Jellemezze a DDR5-öt! Milyen újdonságai vannak a DDR4-hez képest?**
_(Gyakoriság: gyakori)_
<Hely a válasznak>

---

**42. Írja fel az SDRAM időzítési paramétereit, jellemezze is ezeket egy-egy mondattal!**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Ez inkább a későbbi vizsgákon szokott előfordulni. Elvileg Bprofosoktól nem kéri, gyakorlatban pedig hiszem, ha látom, mert eddig is kérte._
<Hely a válasznak>

---

**43. Írja le a DRAM teljes olvasási ciklusának lépéseit!**
_(Gyakoriság: kihalt)_
<Hely a válasznak>

---

**44. Jellemezze a DIMM-et! Mi a Registered, ECC, PLL DIMM?**
_(Gyakoriság: gyakori)_
<Hely a válasznak>

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
<Hely a válasznak>

---

**57. Mi a megszakítás definíciója, célja?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Definíció, célok, általában másik kérdésekkel szokott szerepelni._

Definicioja: A feldolgozas szempontjabol varatlannak tekingheto esemenyek kezelesere szolgalo muvelet

---

**58. Milyen megszakítási okok, források vannak?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Ez szokott szerepelni az előzővel. Elvileg itt fontos a sorrend (mert prioritási sorrend van)._
<Hely a válasznak>

---

**59. Hogyan lehet csoportosítani a megszakításokat?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Itt nem kell annyira mélyre menni, ez is szokott szerepelni az előzőkkel._
<Hely a válasznak>

---

**60. Mikor érvényes a megszakítás?**
_(Gyakoriság: gyakori)_
_Megjegyzés: 3 feltétel, szokott szerepelni az előzőkkel._
<Hely a válasznak>

---

**61. Milyen megszakítási rendszerek vannak?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Egyszintű, többszintű, többszintű és többvonalú. Kis magyarázat és rajz is szokott kelleni._
<Hely a válasznak>

---

## 8. Modul: Tranzisztorok

**62. Sorolja fel a tranzisztorok fajtáit, melyik mit tud?**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: nMosFET, feszített szilícium, HKMG, FinFET, GAAFET, MCBFET. Mindegyikhez 1-1 mondat, illetve mi az előny az előzőhöz képest._
<Hely a válasznak>

---

**63. Rajzolja fel és mutassa be az nMOSFET tranzisztort!**
_(Gyakoriság: gyakori)_
<Hely a válasznak>

---

**64. Rajzolja fel és mutassa be a HKMG tranzisztort!**
_(Gyakoriság: gyakori)_
<Hely a válasznak>

---

**65. Rajzolja fel és mutassa be a 3D FinFET tranzisztort!**
_(Gyakoriság: gyakori)_
<Hely a válasznak>

---

## 9. Modul: Cache Memória

**66. Sorolja fel a cache típusait, és ismertesse ezeket! (aszerint hogy a blokkok hova kerülnek)**
_(Gyakoriság: gyakori)_
_Megjegyzés: Full associative, direct mapping, N-way associative, mindegyikhez 1-1 mondat, előny, hátrány. Szokott külön lenni az N-way associative (mert az a legjobb)._
<Hely a válasznak>

---

**67. Röviden ismertesse a cache-eknél tanult két legfontosabb vezérlő bitet!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Dirty bit, Valid bit._
<Hely a válasznak>

---

**68. Mi az a "TAG" és mire való?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Más kérdésekkel szokott együtt lenni._
<Hely a válasznak>

---

**69. Mi az a "cache line", miből épül fel?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Felsorolás, rajz._
<Hely a válasznak>

---

**70. Milyen adatszervezési módokat ismer?**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Nem nagyon láttam eddig, de simán kérdezheti._
<Hely a válasznak>

---

**71. Milyen replacement policy-k vannak?**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Ez a FIFO, LIFO, LFU, LRU, ez is inkább más kérdéssel szerepel együtt._
<Hely a válasznak>

---

**72. Mi az a koherencia kezelés, ismertesse a MESI koherencia kezelést!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Lehet a MOESI is. A többit is fel kell tudni sorolni, csak nem kell részletesen ismertetni._
<Hely a válasznak>

---

## 10-11. Modul: Párhuzamosság és Pipeline

**73. Párhuzamosság szintjei (funkcionális), típusai felsorolás, kik/mik törekednek a számítások felgyorsítása érdekében.**
_(Gyakoriság: ritka)_
_Megjegyzés: Szerintem ilyen mélyen már nem fogja ezt kérdezni._
<Hely a válasznak>

---

**74. Hogyan csoportosítható a párhuzamosság?**
_(Gyakoriság: ritka)_
<Hely a válasznak>

---

**75. Mi az a rendelkezésre álló párhuzamosság - [Szálak fontosak, gondolom a létrehozás] --> Programozó, OS, Párhuzamos fordító**
_(Gyakoriság: ritka)_
_Megjegyzés: Bprofon be se jelölte, hogy ez kellene._
<Hely a válasznak>

---

**76. Mi a compiler, milyen feladatai vannak?**
_(Gyakoriság: ritka)_
<Hely a válasznak>

---

**77. Írja fel a párhuzamos architektúrák Flynn-féle és korszerű osztályozását!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Táblázat (Flynn) + ágrajz (korszerű)._
<Hely a válasznak>

---

**78. Mi a Flynn-modell, milyen osztályai vannak (csak felsorolás)?**
_(Gyakoriság: ritka)_
_Megjegyzés: Előző szokott inkább lenni._
<Hely a válasznak>

---

**79. A Flynn-féle osztályozásban mit jelent a SIMD, mit lehet róla tudni?**
_(Gyakoriság: ritka)_
_Megjegyzés: Kettővel ezelőttivel lehet együtt._
<Hely a válasznak>

---

**80. Milyen példákat ismer adatpárhuzamos architektúrákra? felsorolás ábra**
_(Gyakoriság: ritka)_
_Megjegyzés: Elvileg ezt már nem fogja tőlünk kérni, de ki tudja._
<Hely a válasznak>

---

**81. Funkcionálisan párhuzamos architektúrák? felsorolás ábra**
_(Gyakoriság: gyakori)_
_Megjegyzés: Ez szokott lenni az "Írja fel a párhuzamos architektúrák Flynn-féle és korszerű…" kérdéssel._
<Hely a válasznak>

---

**82. Mik az ILP CPU-kra vonatkozó általános követelmények + Kibocsátási párhuzamosság?**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Inkább későbbi vizsgákon szokott lenni, de amúgy ez nem olyan nehéz._
<Hely a válasznak>

---

**83. Milyen szintű párhuzamosságokat használnak a mai processzorokban? Sorolja fel és mindegyik mellé írjon legalább egy gyakorlati példát!**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Őszintén fogalmam sincs, mi akar ez lenni, pedig már többször volt._
<Hely a válasznak>

---

**84. Milyen adatfüggőségeket ismer?**
_(Gyakoriság: kevésbé ritka)_
<Hely a válasznak>

---

**85. Sorolja fel a függőségek 3 fő csoportját és ismertesse a RAW függőséget (probléma felvetés, kezelés)!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Itt beszélni kell a műveleti adatfüggőségről és a lehívási adatfüggőségről is._
<Hely a válasznak>

---

**86. Ismertesse a WAR és WAW ál-adatfüggőségeket! (probléma felvetés, kezelés)**
_(Gyakoriság: gyakori)_
<Hely a válasznak>

---

**87. Ismertesse a vezérlés függőséget (probléma felvetés, kezelés)!**
_(Gyakoriság: gyakori)_
<Hely a válasznak>

---

**88. Mi az az erőforrás függőség?**
_(Gyakoriság: kihalt)_
_Megjegyzés: Ezt nem fogja kérni tőlünk._
<Hely a válasznak>

---

**89. Párhuzamos végrehajtás esetén milyen esetekben sérülhet a szekvenciális konzisztencia, és hogyan lehet ezeket kezelni?**
_(Gyakoriság: gyakori)_
<Hely a válasznak>

---

**90. Mit tud a kivételkezelés soros konzisztenciájáról?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Pontatlan (gyenge konzisztencia) és pontos (erős konzisztencia) részét is tudni kell, ezek szoktak külön kérdések is lenni._
<Hely a válasznak>

---

**91. Sorolja fel az ideális futószalagos feldolgozás előfeltételeit 2 fokozat esetén!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Gyakori elővizsga/vizsga kérdés._
<Hely a válasznak>

---

**92. Sorolja fel a RISC CPU-k tanult jellemzőit!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Előny, hátrány is szokott lenni._
<Hely a válasznak>

---

**93. Sorolja fel a CISC CPU-k tanult jellemzőit!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Előny, hátrány is szokott lenni._
<Hely a válasznak>

---

**94. Miért hosszabb a CISC futószalag a RISC-nél?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Előző két kérdések valamelyikével szokott együtt lenni, külön általában nincsen._
<Hely a válasznak>

---

**95. Milyen következményekei lettek a futószalagos architektúráknak? Milyen új problémák jelentkeztek (problémák okai és kezelésük 1-1 mondatban)?**
_(Gyakoriság: ritka)_
_Megjegyzés: Későbbi vizsgákon szokott lenni._
<Hely a válasznak>

---

**96. Milyen közös jellemzői vannak az I. és II. generációs szuperskalár architektúráknak?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Gyakori elővizsga/vizsga kérdés._
<Hely a válasznak>

---

**97. Ismertesse a Harvard architektúrát!**
_(Gyakoriság: ritka)_
_Megjegyzés: Elvileg rajzot is kérhet ide._
<Hely a válasznak>

---

**98. Milyen fajtái vannak a szűk keresztmetszeteknek?**
_(Gyakoriság: ritka)_
<Hely a válasznak>

---

**99. Sorolja fel a II. generációs szuperskalárok újdonságait (1-1 mondat magyarázatként mindegyikhez)!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Gyakori elővizsga/vizsga kérdés._
<Hely a válasznak>

---

**100. A reorder buffer (ROB) működése ÁBRÁVAL + Kiírási szabályok!**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: A kiírási szabályok külön kérdés is lehet szerinte. NAGYON FONTOS TUDNI KÉSŐBBI VIZSGÁKRA! Elővizsgán szerintem nem lehet._
<Hely a válasznak>

---

**101. Ismertesse az utasításon belüli párhuzamosság elvét! Milyen gyakorlati megvalósításokat ismer?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Fogalmam sincs, mi szeretne lenni a "gyakorlati megvalósítás". Talán felsorolni a duál műveleti, VLIW és SIMD-et és a SIMD-ről írni?_
<Hely a válasznak>

---

**102. SIMD-nél fontos tudni fixpontos és lebegőpontos multimédiát, de alapjáraton a jellemzőket több vizsgán is kérte már!**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Számomra ez rejtély. Valóban szerepel a táblázatban több helyen, hogy SIMD, de nem tudom, hogy mit kért ott. Nehéz kérdésnek titulálnám._
<Hely a válasznak>

---

**103. SIMD Logikai Architektúra + 3D Ábrázolás**
_(Gyakoriság: kihalt?)_
_Megjegyzés: Lehet hogy a fizikai/logikai architektúrát kérdezi, amikor SIMD-et kérdez, viszont elvileg 3D ábrázolást tőlünk már nem fog kérdezni._
<Hely a válasznak>

---

**104. Mutassa be a VLIW működési elvét!**
_(Gyakoriság: kihalt)_
_Megjegyzés: VLIW már nem az anyag része._
<Hely a válasznak>

---

**105. Milyen előnyei és hátrányai vannak a VLIW-nek a szuperskalárokhoz képest?**
_(Gyakoriság: kihalt)_
_Megjegyzés: VLIW már nem az anyag része._
<Hely a válasznak>

## 12. Modul: Netburst és Szálak

**106. Hogyan növelhető a frekvencia, milyen következményekkel jár? (Netburst)**
_(Gyakoriság: gyakori)_
<Hely a válasznak>

---

**107. Ismertesse a "rapid execution engine", a "replay system" és az "execution trace cache" tulajdonságait, előnyök, hátrányok (Netburst architektúra)!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Gyakori elővizsga kérdés._
<Hely a válasznak>

---

**108. Sorolja fel a Netburst architektúra újdonságait rövid magyarázatokkal!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Ide a kell az Execution Trace Cache, Rapid Execution Engine, Replay System ÉS Hyper futószalag, Quad Data Rate Bus, Enchanced Branch Prediction._
<Hely a válasznak>

---

**109. Ismertesse a Netburst architektúra hátrányait! + idén ahogy mondta: Fejlődési korlátok**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Úgy is szokott lenni, hogy Netburst következményei._
<Hely a válasznak>

---

**110. Pentium 4 Legfontosabb Újítások**
_(Gyakoriság: kihalt?)_
_Megjegyzés: Nem hinném, hogy ezt már kérné, de ki tudja._
<Hely a válasznak>

---

**111. Mi az a statikus disszipáció, ismertesse, írja fel a képletét!**
_(Gyakoriság: kevésbé ritka)_
<Hely a válasznak>

---

**112. Sorolja fel a disszipáció típusait képlettel, és jellemezze ezeket!**
_(Gyakoriság: kevésbé ritka)_
<Hely a válasznak>

---

**113. Mi az a Data Valid Window? Ábrázolja és magyarázza el!**
_(Gyakoriság: ?)_
_Megjegyzés: Ezt inkább a párhuzamos buszok frekvencia korlátaival sorolnám fel, elvileg eddig nem nagyon kérte, de simán kérheti._
<Hely a válasznak>

---

**114. Mi a "Jitter", az LVDS, a DVFS és a "Skew"?**
_(Gyakoriság: ?)_
_Megjegyzés: Itt egyedül a DVFS-t vettük, illetve a Jitter/Skew az szintén a párhuzamos buszok frekvencia korlátaira jellemző (buszrendszerek témakör)._
<Hely a válasznak>

---

**115. Sorolja fel a thread (szál) tulajdonságait, miért rosszabb mint az ILP?**
_(Gyakoriság: kevésbé ritka)_
<Hely a válasznak>

---

**116. Szál definíció**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Más kérdésekkel szokott együtt lenni._
<Hely a válasznak>

---

**117. Szálak származtatása**
_(Gyakoriság: ?)_
_Megjegyzés: Fogalmam sincs, hogy ezt mikor/hol kérte._
<Hely a válasznak>

---

**118. SMP SMT (Többszálú CPU), SMT Megvalósítási célok**
_(Gyakoriság: ?)_
_Megjegyzés: Fogalmam sincs, hogy ezt mikor/hol kérte._
<Hely a válasznak>

---

**119. Röviden ismertesse a szál szintű párhuzamosság tanult típusait (3 db)!**
_(Gyakoriság: gyakori)_
_Megjegyzés: Gyakori elővizsga/vizsga kérdés._
<Hely a válasznak>

---

**120. Miért "éri meg" a szál szintű párhuzamosságot használni?**
_(Gyakoriság: gyakori)_
_Megjegyzés: Gyakori elővizsga/vizsga kérdés._
<Hely a válasznak>

---

**121. Ismertesse az Intel Hyper Threading technológiát!**
_(Gyakoriság: kevésbé ritka)_
_Megjegyzés: Inkább későbbi vizsgákon szokott lenni._
<Hely a válasznak>

# 2. Modul Teszt: Alkatrészek számítógép szinten #1: A CPU

Válaszolj az alábbi kérdésekre a tananyag alapján. Minden kérdés 10 pontot ér.

1. **Hasonlítsa össze a Szinkron és az Aszinkron CPU működését!** Milyen előnyei és hátrányai vannak az órajel alapú működésnek a kézfogásos (handshake) elvvel szemben?
   A szinkron cpu orajel alapjan mukodik minden amit csinal minimum 1 orajel idot vesz igenybe. Ez sokszor jo mert megad egy utemet es ezzel lehet kalkulalni, de van amikor sokkal gyorsabban vegez el egy utasitast mint egy orajel es ilyenkor holtido keletkezik. Ezzel szemben van az Asszinkron cpu aminel amint elkeszult egy szamitas rogton jon a kovetkezo ezzel sok idot megsporolva. Ilyen cpu csak elmeletben letezik es tudomanyos korokben. Mindenhol mashol az orajelet hasznaljuk referenciakent.

2. **Részletezze a lebegőpontos számábrázolás összetevőit (Mantissza, Radix, Karakterisztika)!** Hogyan befolyásolja a pontosságot és az ábrázolható tartományt a bitek eloszlása?
   A lebegopontos szamabrazolasnak harom osszetevoje van a mantissza az egesz resz ami szamrendszerenkent eltero tartomanyt jelent kettes szamrendszerben ez 0.5 es 1 kozott van. A radix a szamrendszer alapja azaz mennyivel kell megszorozni a mantisszat hogy a tizedesvesszo alrebb keruljon 1-el es a karakterisztika az azt jelenti hogy hanyszor kell megszorozni radixxal a mantisszat hogy megkapjuk a kivant szamot. Pl.: 1,02362 \* 10 ^3 a mantissza az 1023,62 = 1,02362 a radix a 10 es a karakterisztika pedig a 3. Kettes szamrendszerben is igy mukodik. A pontossagot ugy befolyasolja az abrazolhato tartomany, hogy minel tobb bit van annal pontosabb, de annal tobb ido is kiszamitani, mert a vegen mar nagyon nagy szamokkal kell szorozni hogy kijojjon a kivant eredmeny. Ezeknek a gyorsiatasara dolgoztak ki szamitasokat.

3. **Magyarázza el a "Carry Look-ahead" (CILA) összeadók működési elvét és előnyét a soros összeadókkal szemben!** Miért gyorsabb ez a megoldás?
   A CILA mukodese egyszeru, minden lepest osszeadas elott fel lehet irni a kiindulo ertekekken es igy ki is lehet szamitani hogy egyes osszeadasoknak lesz-e maradekja vagy sem. Ezzel sokkal gyorsabba lehet tenni egy egy szamolast, mert ameddig nincs maradek meg tudja csinalni gyorsan csak az eredeti operandusokbol es amikortol mar van maradek onnantol hasznalja csak a lassabb carrys szamitasokat

4. **Mi a Booth-algoritmus lényege és hogyan gyorsítja a szorzást?** Adjon egy egyszerű példát az elvre (pl. sok 1-es bit esetén)!
   A booth algoritmusnal nem a bonyolult egymas utan osszeadogatjuk lepeseket visszuk vegbe hanem inkabb kerekitjuk egesz szamra majd azt eloallitjuk egy szorzassal es utana ehhez megfeleloen kivonjuk a kerekitest es ezzel gyorsabban megkapjuk a vegeredmenyt.

5. **Hasonlítsa össze a Huzalozott és a Mikroprogramozott vezérlőegységeket!** Melyik milyen előnyökkel rendelkezik a sebesség, bonyolultság és módosíthatóság terén?
   A huzalozott vezerloegysegek gyorsabbak mivel minden egy alaplapon van elektronikabol osszerakva viszont cserebe nagyon nehezen modosithato es rendkivul bonyolult, ezzel szemben a mikroporgramozottnal van egy egyszerubb vezerlo egyseg majd ebbe programoznak valami logikat. Ez olcsobb kevesbe bonyolultabb es az algoritmus konnyebben modosithato, de cserebe eleg lassu a masikhoz kepest.

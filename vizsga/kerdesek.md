# Számítógép Architektúrák - Átfogó Vizsgafelkészítő Kérdéssor

Ez a dokumentum a teljes féléves tananyagot lefedi, beleértve a 2024/2025-ös tananyagfrissítéseket is. A kérdések kifejtős jellegűek.

## 1. Modul: Számítási Modellek és Alapok

1.  **Architektúra definíciója:** Hogyan definiálta Amdahl (1964, IBM 360) a számítógép-architektúrát? Mi a különbség az architektúra (amit a programozó lát) és az implementáció (szervezés) között?
2.  **Neumann vs. Adatfolyam modell:** Hasonlítsa össze a Neumann-elvű (vezérlés vezérelt) és az Adatfolyam (adatvezérelt, "stréber modell") architektúrákat! Mi a _Program Counter_ szerepe (vagy hiánya) a két modellben? Milyen analógiával írná le a működésüket?
3.  **Flynn-féle osztályozás:** Ismertesse a 4 kategóriát (SISD, SIMD, MISD, MIMD)! Mondjon mindegyikre gyakorlati példát.
4.  **Logikai Architektúra részei:** Fejtse ki a logikai architektúra összetevőit: Adattér (Memória/Regiszterek), Adatmanipulációs fa, Állapottér (Flag-ek, PC).

## 2. Modul: CPU Alkatrészek, Regiszterek és Utasítások

5.  **Regiszterkészletek típusai:**
    - Hasonlítsa össze az általános célú és az akkumulátor alapú regiszterezést!
    - **Átfedő regiszterkészlet (Overlapping Register Windows):** Hogyan működik a paraméterátadás (INS, LOCALS, OUTS) és hogyan gyorsítja ez a függvényhívásokat (RISC)?
6.  **Utasítás típusok címek száma szerint:** Hasonlítsa össze a 3, 2, 1 és 0 címes utasításokat! Melyiknek mi az előnye/hátránya (kódhossz, hardver bonyolultság)?
7.  **Összeadók:** Vezesse le az Egybites Félösszeadó és az Egybites Teljes Összeadó működését! Mi a _Carry Look-Ahead (CILA)_ szerepe? Hogyan épül fel a "Generate" (G) és "Propagate" (P) jelekből ($C_{out} = G + P \cdot C_{in}$)?
8.  **Szorzó algoritmusok:**
    - **Booth-algoritmus:** Fejtse ki a működési elvét! Hogyan kezeli a sorozatos 1-es biteket (pl. $X \cdot (2^{k+1} - 2^m)$)?
    - **Bitcsoportos szorzás (Bit-pair recoding):** Miben tér el a Booth-tól? (Fix 2 bites csoportok kezelése).
9.  **IEEE 754 Lebegőpontos számok:**
    - Felépítés (előjel, karakterisztika, mantissza).
    - Történeti érdekesség: Melyik gép használta először a **rejtett bitet** (Zuse Z3)?
    - Rejtett bit, "ozo" bitek, kiterjesztett pontosság, Kerekítési módok.
10. **BCD (Binary Coded Decimal):** Mi a BCD ábrázolás előnye (pénzügyi számítások)? Mik azok az "érvénytelen tetrádok"?
11. **Vezérlőegység:** Huzalozott vs. Mikroprogramozott vezérlőegység összehasonlítása.

## 3. Modul: Buszrendszerek

12. **Busz topológiák és típusok:** Csoportosítsa a buszokat átvitel iránya és módja szerint. Miért tértek át a soros átvitelre (Delay Skew, EMI)?
13. **Jelminőség és Kódolás (ÚJ 2025):**
    - Mire való a **Szemábra** (Eye Diagram)? Mit jelez a "szem nyitottsága" (Jitter)?
    - Mi a különbség a **PAM3** (USB4) és **PAM4** (PCIe 6.0) kódolás között a hagyományos NRZ-hez képest?
14. **Chipset fejlődése:** IBM PC -> Északi/Déli híd -> PCH és System Agent.
15. **Modern Buszok (QPI és PCIe):**
    - QPI felépítése (20 sáv, CRC), DMI különbségek.
    - PCIe működése (sávok, pont-pont kapcsolat).
    - **USB:** Ismertesse a 4 átviteli típust (Control, Interrupt, Isochronous/Időkritikus, Bulk)!

## 4. Modul: I/O Rendszer

16. **Programozott I/O:** Polling vs Interrupt. Miért pazarolja a CPU idejét a polling?
17. **DMA (Direct Memory Access):**
    - Blokkos (Burst) átvitel lépései.
    - Mi a különbség a **Cikluslopásos** (Cycle Stealing) és a Blokkos mód között?
18. **I/O Csatornák:** Szelektor vs Multiplexer csatorna.

## 5. Modul: Megszakítási Rendszer

19. **Megszakítások kezelése:**
    - A folyamat lépései (Kérés -> ... -> Visszatérés).
    - Mi a **Géphibák** prioritása és maszkolhatósága?
20. **Megszakítási rendszerek szintjei:** Egyszintű, Többszintű, Többszintű-többvonalas (vektorizált) rendszerek.

## 6. Modul: Cache Memória

21. **Cache leképzések:** Direct Mapping, Full Associative, Set Associative.
22. **Cache vezérlés és írás:**
    - Valid bit, Dirty bit, Csere-stratégiák (FIFO, LRU).
    - **Write-through vs Write-back:** Melyik mikor ír a memóriába? Melyik a biztonságosabb?
23. **Cache Koherencia:**
    - MESI és MOESI protokollok állapotai.
    - Mit jelent a **MESIF** protokollnál az 'F' (Forward) állapot?
    - Mi a **Victim Cache** szerepe?
24. **Modern példa:** Milyen Cache struktúrát használ a **Qualcomm Oryon** (klaszterek, L2 megosztás)?

## 7. Modul: Memória Technológiák

25. **SRAM vs DRAM:** Működés, felépítés.
26. **SDRAM Időzítések:** tRAS, tRCD, tCL magyarázata.
27. **DDR Evolúció:** Prefetch (2n->16n), DDR5 újdonságok (PMIC, On-die ECC).
28. **Memóriamodul típusok:** Registered, ECC.

## 8. Modul: Tranzisztor Technológiák

29. **Miniatürizálás:** Szivárgási áram, Strained Silicon, HKMG, FinFET, GAAFET.

## 9-11. Modul: Párhuzamosítás, Pipeline, Szuperskalár

30. **Párhuzamosítás szintjei:** Mit jelent az **ILP** (Instruction Level Parallelism)? Mi a különbség az utasítás-szintű és a szál-szintű párhuzamosítás között?
31. **Pipeline (Futószalag):**
    - Ismertesse a 4-5 elemi lépést (Fetch, Decode, Source Operand, Execute, Writeback)!
    - Hogyan oldható fel a **WAR** (Write After Read) és **WAW** (Write After Write) adatfüggőség? (Válasz: **Regiszter átnevezés**).
    - Mi az a **Precíz kivételkezelés** (Precise Exception), és miért nehéz megvalósítani sorrenden kívüli (Out-of-Order) végrehajtásnál (Reorder Buffer)?
    - Hogyan kezeli a vezérlésfüggőséget a **Statikus** (Fordító általi átrendezés, NOP beszúrás) és a **Dinamikus** (Elágazásbecslés) módszer?
32. **Szuperskalár:**
    - Definíció: Egynél több utasítás kibocsátása órajelciklusonként.
    - **Pentium I:** Ismertesse az **U és V futószalag** (pairing) szabályait!
    - **Utasításablak (Instruction Window):** Mi a szerepe a sorrenden kívüli végrehajtásban?

## 12. Modul: Szálkezelés és Netburst

33. **Netburst:** Miért bukott meg (hosszú pipeline, replay)?
34. **SMT (Hyper-Threading):** Finoman vs Durván szemcsézett szálváltás.

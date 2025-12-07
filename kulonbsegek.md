# Különbségek a Tanári Anyagok és a Jegyzet között

Ez a dokumentum azokat a részleteket tartalmazza, amelyek a tanári prezentációkban (különösen a 2024-es frissítésekben) szerepelnek, de az `osszefoglalas.md` (és vélhetően a `note_for_gemini.pdf`) nem vagy csak érintőlegesen tárgyalja őket. **Ezek a vizsgán "kieső" kérdések lehetnek!**

---

## 1. Tranzisztor Technológiák (Nagyon sok új infó!)
A `Tranzisztor technológiák fejlődése_2024.pdf` rengeteg konkrét ipari adatot tartalmaz, ami a jegyzetből hiányzik.

### Konkrét gyártástechnológiai adatok (Évszámok és nm-ek)
*   **Intel 4004 (1971):** 10 µm, 2300 tranzisztor.
*   **Intel 8080 (1974):** 6 µm, 4500 tranzisztor.
*   **Intel Pentium (1993):** 800 nm, 3.1 millió tranzisztor.
*   **Intel Core 2 Quad:** Két különálló lapka egy tokban.
*   **Moore-törvény lassulása:** Az Intel "Tick-Tock" modellje 2016 körül megakadt (14nm-en ragadtak sokáig).
*   **Ostya (Wafer) méretek:** 2"-tól indult, ma 300mm (és tervezik a 450mm-t). Egy 300mm-es wafer ára kb. 350 millió Euró (ASML gép).

### Modern chipek adatai (2024-2025)
*   **Apple M3 Max (2023):** 3nm technológia, 92 milliárd tranzisztor (GAAFET), 16 mag, dedikált AI Neural Engine.
*   **AMD EPYC 9965 (2025):** 192 mag, 384 szál, 500W TDP, 6TB DDR5 RAM támogatás.
*   **Nvidia Rubin System:** 1300 milliárd tranzisztor (multi-chip modul).
*   **Nvidia Quantum-X800:** 4nm (TSMC), 107 milliárd tranzisztor, 28.8 Tb/s sávszélesség.

### AI Chipek sajátosságai
*   Szorzás-halmozási műveletek (MAC - Multiply Accumulate) és skalár szorzatok masszív párhuzamosítása szükséges.
*   Dedikált **Tenzor magok** (Tensor Cores) a mátrixszorzásokhoz.
*   **Power-Performance-Area (PPA):** Az új optimalizálási szentháromság.

---

## 2. Memóriák (2024-es frissítések)
A `Memóriák 2024_2.pdf` tartalmaz pár olyan részletet, ami a jegyzetben általánosabban szerepel.

*   **Sávszélességek összehasonlítása:** Konkrét táblázatok vannak a DDR1-től DDR4-ig (pl. DDR4-2400: 19.2 GB/s).
*   **DDR5 részletek:**
    *   **Két csatorna modulonként:** Egy DDR5 modul (DIMM) nem egy 64 bites csatornának látszik, hanem *két* független 32 bites csatornának. Ez növeli a párhuzamosságot.
    *   **On-die ECC:** A DDR5 chipen belül van hibajavítás, nem csak a modulon kívül (mint a szerver RAM-oknál régen).
    *   **PMIC:** A feszültségszabályzó (Power Management IC) átkerült az alaplapról magára a memória modulra.
*   **Nyák rétegek:** A DDR5 modulok akár 12 rétegű nyáklapra is épülhetnek a bonyolultság miatt.

---

## 3. Buszrendszerek
A `Buszrendszerek 2024_2.pdf` alapján:

*   **Chipset evolúció:**
    *   Régen (IBM PC): Külön chipek.
    *   Később (Pentium): Északi híd (gyors: RAM, AGP) + Déli híd (lassú: USB, HDD).
    *   Ma: Az Északi híd teljesen beintegrálódott a CPU-ba (System Agent, Memory Controller).
    *   Déli híd helyett PCH (Platform Controller Hub) van.
*   **QPI (QuickPath Interconnect) felépítése:**
    *   Pontosan **20 adatvonal** (lane) irányonként.
    *   Ebből 16 adat, 2 protokoll, 2 CRC (hibajellenőrzés).
*   **DMI (Direct Media Interface):** Az Intel olcsóbb processzorainál (Core i3/i5) QPI helyett DMI-t használnak a chipset felé, ami lassabb (kb. PCIe x4 sebesség).

---

## 4. Párhuzamos Architektúrák és Utasítások
A prezentáció (`11-12. ea`) alapján:

*   **Teljesítmény mérés:** **FLOPS** (Floating Point Operations Per Second).
    *   Mai asztali CPU: 10-20 TeraFLOPS.
    *   Szupercomputerek: 100 PetaFLOPS felett (ExaFLOPS korszak).
*   **Utasításkészlet fejlődése:**
    *   Evolúciós: x86 -> x86-64.
    *   Revolúciós: VLIW (IA64 - Itanium) -> Ez elbukott.
*   **Elágazáskezelés:** Kiemeli, hogy a modern 15-25 fokozatú pipeline-oknál a *compiler általi* (statikus) átrendezés már hatástalan, csak a *hardveres* (dinamikus) működik.

---

## Összegzés (Mit tanulj még meg?)
A jegyzeted az **elméletet** (Hogyan működik a cache? Mi a pipeline?) tökéletesen lefedi.
Ami hiányzik, és a tanári anyagokban hangsúlyos, az a **konkrét technológia-történet és a mai piaci helyzet**:
1.  **Cégnévek és Típusok:** Tudd, hogy a *Nehalem, Sandy Bridge, Skylake* Intel mikroarchitektúrák voltak. Tudd, hogy a *Zen* az AMD-é.
2.  **Számok:** Nagyságrendileg tudd a tranzisztorszámokat (ezrek -> milliárdok) és a csíkszélességeket (10 µm -> 3 nm).
3.  **Új hívószavak:** PPA (Power-Performance-Area), GAAFET (Gate-All-Around), On-die ECC, PMIC a DDR5-ön.

# Rendszer Szimuláció: Modern Számítógép Működése

Ez a dokumentum egy modern, kétmagos processzorral rendelkező számítógép működését szimulálja végig lépésről lépésre, a tanult 1-12. modulok alapján.

---

## 1. A Rendszer Felépítése (Architektúra)

Mielőtt bekapcsoljuk a gépet, nézzük át a "vasat" (**1. Modul: Fizikai Architektúra**).

### Processzor (CPU)
*   **Típus:** Modern Szuperskalár, RISC magokkal, de CISC (x86) utasításkészlettel (Hibrid architektúra - **10. Modul**).
*   **Magok:** 2 Fizikai mag (Core 0, Core 1).
*   **SMT (Hyper-Threading):** Magokként 2 logikai szál (Thread 0, Thread 1) -> Az OS összesen 4 logikai magnak látja (**12. Modul**).
*   **Cache Hierarchia (**6. Modul**):
    *   **L1 Cache:** 32KB Utasítás (I-Cache) + 32KB Adat (D-Cache) *per mag*. (Write-through).
    *   **L2 Cache:** 256KB Egyesített *per mag*. (Write-back, MESI protokollal védve).
    *   **L3 Cache:** 8MB Közös (Shared) a két mag között (**Inclusive** szervezés).

### Memória és Buszrendszer
*   **RAM:** 16GB DDR4 SDRAM (Szinkron, Double Data Rate - **7. Modul**).
*   **Rendszerbusz:** Dedikált pont-pont összeköttetések (pl. QPI jellegű) a CPU és a Memóriavezérlő között (**3. Modul**).
*   **I/O:**
    *   **USB Vezérlő:** Billentyűzet, Egér, Pendrive, Mikrofon.
    *   **SATA Vezérlő:** Régi CD-ROM, HDD.
    *   **GPU:** Monitor (PCIe buszon).

---

## 2. Fázis: Boot Folyamat (Bekapcsolás)

1.  **Power On:** Megnyomod a gombot. A tápegység stabilizálja a feszültséget.
2.  **Reset:** A CPU egy speciális `RESET` jelet kap. Minden regiszter törlődik, kivéve a **Program Counter (PC)**, ami egy fix kezdőcímre áll be (ez a ROM/BIOS címe) (**2. Modul**).
3.  **Fetch (Lehívás):** A CPU a Címbuszon kiadja a BIOS címét.
4.  **ROM olvasás:** A BIOS (Flash ROM) tartalmát a CPU elkezdi végrehajtani.
    *   *POST (Power On Self Test):* Ellenőrzi a RAM-ot és a perifériákat.
5.  **OS Betöltés:** A BIOS megkeresi a rendszertöltő rekordot (Bootloader) a háttértáron, és beolvassa a **RAM**-ba.
6.  **Átadás:** A PC a RAM-ban lévő OS kernel címére ugrik. A Linux elindul, inicializálja a megszakítástáblát (IDT), a virtuális memóriát (MMU), és a hardvereket.

*A felhasználó látja a grafikus felületet. A rendszer készen áll.*

---

## 3. Fázis: Számológép Alkalmazás (Adatfeldolgozás mélyfúrás)

A felhasználó elindítja a számológépet. A CPU **Core 0 / Thread 0**-ja kapja a feladatot.

### A) Egész számok műveletei (ALU és Regiszterek)

A programkód betöltődik az L1 I-Cache-be.

#### 1. Művelet: `5 + 5`
*   **Utasítás:** `ADD R1, R2, R3` (RISC logikával: R2+R3 -> R1).
*   **Regiszter töltés:**
    *   `LOAD R2, 5` (Bináris: `...000101`)
    *   `LOAD R3, 5` (Bináris: `...000101`)
*   **ALU Működés (**2. Modul**):
    *   A vezérlőegység jelet küld az ALU-nak: "ÖSSZEADÁS".
    *   Az ALU **Teljes Összeadó (Full Adder)** áramkörei bitről bitre összeadják a számokat.
    *   `101 + 101 = 1010` (Tizesben: 10).
*   **Eredmény:** Az R1 regiszter értéke `10` lesz. A **Status Register (Flag)**-ek frissülnek (pl. Zero Flag = 0, Carry Flag = 0).

#### 2. Művelet: `10 - 5`
*   **Utasítás:** `SUB R1, R1, R3` (R1 - R3 -> R1).
*   **ALU Működés:**
    *   A kivonást az ALU **kettes komplemens** hozzáadásával végzi!
    *   5 binárisan: `0000...0101`.
    *   -5 kettes komplemense: Invertál (`1111...1010`) + 1 = `1111...1011`.
    *   Az ALU összeadja a 10-et (`...001010`) és a -5-öt (`...111011`).
    *   Eredmény: `5`.

#### 3. Művelet: `10 * 5`
*   **Utasítás:** `MUL R1, R2, R3`.
*   **ALU Működés:**
    *   A szorzás bonyolultabb. A modern ALU-k a **Booth-algoritmust** (**2. Modul**) használják, hogy ne kelljen sok összeadást végezni.
    *   A biteltolásokkal és összeadásokkal gyorsan kijön az `50`.

#### 4. Művelet: `50 / 5`
*   **Utasítás:** `DIV`. Ez a leglassabb művelet, sok órajelciklust igényel (kivonogatásos módszer).

---

### B) Lebegőpontos Művelet: `2.5 * 2` (IEEE 754 Szabvány)

Itt az **FPU (Floating Point Unit)** dolgozik, nem a sima ALU. 
A tárolás **IEEE 754 Single Precision (32 bit)** szabvány szerint történik (**2. Modul**).

#### 1. Számok ábrázolása biteken

**Szám 1: `2.5`**
*   Előjel (1 bit): Pozitív -> **0**
*   Bináris alak: $2 = 10_2$, $0.5 = 0.1_2$ => $10.1_2$
*   Normalizálás: $1.01 	imes 2^1$.
*   Karakterisztika (8 bit): A kitevő $1$. A "bias" (eltolás) 127. Tehát $127 + 1 = 128$.
    *   128 binárisan: **10000000**
*   Mantissza (23 bit): A tizedesvessző utáni rész: $01$. (Az elején az 1-est "rejtett bitként" nem tároljuk).
    *   Feltöltve nullákkal: **01000000000000000000000**
*   **Teljes kód:** `0 10000000 01000000000000000000000` (Hex: 0x40200000)

**Szám 2: `2.0`**
*   Előjel: **0**
*   Bináris alak: $10_2$ -> Normalizálva: $1.0 	imes 2^1$.
*   Karakterisztika: $1 + 127 = 128$ -> **10000000**
*   Mantissza: csupa 0 -> **00000000000000000000000**
*   **Teljes kód:** `0 10000000 00000000000000000000000` (Hex: 0x40000000)

#### 2. A szorzás folyamata (FPU-ban)
1.  **Karakterisztikák összeadása:** $(128 - 127) + (128 - 127) + 127$ (Visszaállítjuk a torzítást).
    *   $1 + 1 + 127 = 129$.
    *   Új karakterisztika: **10000001** ($2^2$).
2.  **Mantisszák szorzása:** $1.01 	imes 1.0 = 1.01$.
    *   Új mantissza: **010000...**
3.  **Eredmény:** $1.01 	imes 2^2 = 101_2 = 5.0$.
4.  Az eredmény (`5.0`) bekerül egy lebegőpontos regiszterbe (pl. F0).

---

## 4. Fázis: Multitasking Szimfónia (Komplex Szcenárió)

Most kezdődik az igazi terhelés. Két fő feladat fut párhuzamosan, és jön egy megszakítás.

**Állapot:**
*   **Core 0 (Thread 0):** Filmlejátszó alkalmazás (DVD -> Kép/Hang).
*   **Core 1 (Thread 0):** Fájlmásolás (Pendrive -> HDD).

### 1. Fájlmásolás: DMA használata (**4. Modul**)
A CPU nem akar minden egyes byte másolásával foglalkozni, mert az lefoglalná.
1.  **Core 1** felprogramozza a **DMA vezérlőt**:
    *   *Honnan:* Pendrive USB címe.
    *   *Hova:* HDD SATA címe (vagy először RAM puffer).
    *   *Mennyit:* 100 MB blokk.
2.  **Busz átadás:** A DMA vezérlő kér a CPU-tól buszhasználati jogot (Bus Request). A CPU megadja (Bus Grant).
3.  **Másolás:** A DMA önállóan, a CPU nélkül lapátolja az adatokat a memórián keresztül. A **Core 1** közben szabadon végezhet más adminisztrációt (vagy alhat).
4.  **Vége:** Ha kész a blokk, a DMA küld egy **Interruptot** a Core 1-nek: "Kész vagyok!".

### 2. Filmlejátszás: SIMD és Cache Koherencia (**11. és 6. Modul**)
A film adatai a RAM-ban vannak. A **Core 0** dekódolja a videót.
1.  **SIMD Utasítások:** Mivel a videó pixelekből áll (RGB), a processzor **SIMD (Single Instruction Multiple Data)** utasításokat használ.
    *   Egyetlen `ADD_PACKED` parancs egyszerre 8 pixel fényerejét növeli meg. Ez a **térbeli párhuzamosság** egy formája az ALU-n belül.
2.  **Adatbetöltés:** A pixelek bekerülnek a **Core 0 L1 Cache**-ébe.

**Szituáció: MESI Protokoll Akcióban**
Tegyük fel, hogy a filmlejátszó egy "status flag"-et (pl. `is_playing = 1`) tárol a memóriában.
1.  **Core 0** olvassa ezt a változót. Az állapota az ő cache-ében: **Exclusive (E)**.
2.  A felhasználó a **Core 1**-en futó háttérfolyamattal módosítani akarja ezt a flaget (pl. egy script leállítja a lejátszást).
3.  **Core 1** írni akarja a címet.
    *   A Buszon küld egy "Read for Ownership" jelet (Snoop).
    *   **Core 0** észreveszi a buszon a saját címét (Snooping).
    *   **Core 0** átállítja az állapotot **Invalid (I)**-ra (eldobja a saját példányát).
    *   **Core 1** betölti és módosítja az adatot. Állapota: **Modified (M)**.
    *   Ha a Core 0 újra olvasni akarja, a Core 1-nek először ki kell írnia a memóriába (Write-back), hogy a Core 0 a friss adatot kaphassa meg. **Ez a Cache Koherencia.**

### 3. A Megszakítás: Mikrofon bemenet (**5. Modul**)
Miközben a Core 0 a filmmel, a Core 1 (és a DMA) a másolással van elfoglalva, a felhasználó belebeszél a mikrofonba.

1.  **Hardver jel:** Az USB vezérlő érzékeli a jelet és küld egy **INTR (Interrupt Request)** jelet a CPU-nak.
2.  **Prioritás vizsgálat:** A CPU a **Vezérlőegységben** megnézi, hogy az aktuális feladatnál (film) fontosabb-e a mikrofon? Igen (I/O inputnak magas a prioritása).
3.  **Kontextus mentés:**
    *   A Core 0 "megfagyasztja" a filmlejátszást.
    *   A regiszterek (PC, Flag-ek, R1-Rxx) tartalmát kimenti a memóriában lévő **Verembe (Stack)**.
4.  **ISR (Interrupt Service Routine):**
    *   A PC az "IDT tábla" alapján a hangrögzítő driver kódjára ugrik.
    *   A CPU gyorsan átmásolja a mikrofon buffer tartalmát a RAM-ba.
5.  **Visszatérés (Context Restore):**
    *   Az ISR lefutott (`IRET` utasítás).
    *   A CPU visszatölti a veremből a filmlejátszó regisztereit.
    *   A filmlejátszás onnan folytatódik, ahol abbamaradt (a felhasználó ebből semmit sem vett észre, ez mikroszekundumok alatt történt).

---

## Összefoglaló Folyamatábra (Text Diagram)

```text
[ FELHASZNÁLÓ ] 
      |
      v
[ PERIFÉRIÁK ] ---> (Mikrofon hang) ---+
      |
[ DMA VEZÉRLŐ ] <--- (Másolás)         |
      |
      v                                |
[ RENDSZERSÍN (BUSZ) ] <=========================> [ MEMÓRIA (RAM) ]
      ^              ^
      |              | INTR (Megszakítás)
      | MESI         | MESI
      v              v
[ L2 CACHE ]    [ L2 CACHE ]
      ^
      |              |
[ CORE 0 ]      [ CORE 1 ]
(Filmlejátszás) (Másolás felügyelet)
      |
   [ ALU ]        [ ALU ]
   (SIMD)
      ^
      |              |
[ REGISZTEREK]  [ REGISZTEREK]
(Kontextus)     (Kontextus)
      |
      +--------------+--------------------+
             (Adatcsere és szinkronizáció)
```

Ez a szimuláció bemutatta, hogyan működnek együtt a tranzisztoroktól kezdve (ALU műveletek), a logikai szervezésen át (Cache, Pipeline), egészen a rendszerszintű vezérlésig (DMA, Megszakítások) a modern számítógép részei.

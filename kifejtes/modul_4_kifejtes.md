# 4. Modul: I/O Rendszer - Analógiás Kifejtés

Az I/O (Input/Output) rendszer a számítógép "külvilággal való kommunikációja" (billentyűzet, egér, HDD).

## 4.1 Programozott I/O (A "Főnök mindent maga csinál")
**Analógia:** A CPU a cégvezető. Ha fénymásolni kell, ő maga megy oda a géphez, beteszi a papírt, megnyomja a gombot, és megvárja, amíg kijön.
*   **Lekérdezéses (Polling):** A főnök 5 másodpercenként odanéz: "Kész már? Kész már?".
    *   **Hátrány:** A főnök nem tud dolgozni, mert folyton a fénymásolót figyeli. (Pazarolja a CPU időt).
*   **Megszakításos (Interrupt):** A főnök elindítja a másolást, és visszamegy dolgozni. A fénymásoló csipog (megszakítás), ha kész.
    *   **Előny:** Jobb, de a főnöknek még mindig oda kell mennie elvenni a papírt (adatátvitel).

---

## 4.2 DMA (Direct Memory Access) - A "Titkárnő"
**Analógia:** A főnök (CPU) felvesz egy titkárnőt (DMA Vezérlő).
*   **Feladat:** "Másold le ezt a 100 oldalt a raktárba!"
*   **Működés:**
    1.  A főnök megmondja a titkárnőnek: *Honnan* (I/O eszköz), *Hova* (Memória cím), *Mennyit* (100 oldal).
    2.  A főnök visszamegy dolgozni.
    3.  A titkárnő intézi a másolást. Amíg ő használja a folyosót (Busz), a főnöknek lehet, hogy várnia kell kicsit, ha ki akar menni (Buszfoglalás / Cycle Stealing), de alapvetően nem ő dolgozik.
    4.  Ha kész a 100 oldal, a titkárnő szól a főnöknek (Megszakítás).
*   **Előny:** A CPU szabadon számolhat, amíg az adatok vándorolnak.

---

## 4.3 I/O Csatornák (A "Részlegvezetők")
Ez a DMA "nagyokos" változata (főleg mainframe gépeknél).
**Analógia:** Nem csak egy titkárnő, hanem egy komplett logisztikai osztály saját processzorral.
*   A CPU csak annyit mond: "Intézzétek el a szállítást."
*   A csatorna saját kis programot futtat a memóriából, ami levezényli a bonyolult I/O műveleteket.

### Típusai:
*   **Szelektor:** Gyors eszközökhöz (pl. HDD). Egyszerre csak eggyel foglalkozik, de azzal teljes sebességgel.
*   **Multiplexer:** Lassú eszközökhöz (pl. billentyűzet, nyomtató). Sok eszközt kezel egyszerre, mindenkire szán egy kis időt (mint egy körforgó).

---

## 4.4 I/O Címzés
Hogyan mondja meg a CPU, hogy a memóriába akar írni, vagy a nyomtatóra?
*   **Különálló (Isolated) I/O:** Külön parancs van: `LOAD` (memóriához) és `IN` (eszközhöz). Külön "lakcímkártyák" vannak.
*   **Memóriában leképzett (Memory-mapped) I/O:** A CPU úgy látja, mintha a nyomtató is egy memóriacím lenne (pl. a 999-es cím). Ha oda ír adatot, az papíron jön ki.
    *   **Előny:** Nem kellenek új parancsok, a sima `MOV` utasítás működik mindennel.

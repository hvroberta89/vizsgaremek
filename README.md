# User Story - Adminisztrátori szerepkör

---

---

## Férj/Feleség kölcsönző

---

> _Az alkalmazás célja, hogy lehetőséget adjon a felhasználóknak a házkörüli feladatok elvégzésében segítséget, illetve szabadidőben alkalmi munkát találni._

---

### _1. Főoldal_

---

**1. Agilis felhasználói történet:**

> _A főoldalon egy rövid ismertetőt követően, 3db-3db kártyán a legfrissebb munka, illetve munkaerő lehetőségek olvashatóak._

**Elfogadási kritérium:**

-  Üdvözlés
-  Rövid ismertető,
-  3db kártya a legfrissebb munkalehetőséggel
-  3db kártya a legújabb munkaerőkkel
-  Bejelentkezési lehetőség

---

### _*2. Bejelentkezési oldal*_

---

**1. Agilis felhasználói történet:**

> _Be lehet jelentkezni az oldalra._

**Elfogadási kritérium:**

-  Űrlapot tartalmaz (felhasználónév és jelszó)
-  A helyes azonosító adatok megadásával be lehet jelentkezni a felületre.

**2. Agilis felhasználói történet:**

> _A bejelentkezési kísérlet sikeres vagy sikertelen._

**Elfogadási kritériumok:**

-  Sikeres bejelentkezés esetén a Főoldalra navigál
-  Sikertelen bejelentkezés esetén hibaüzenetet jelenít meg

---

### _*3. Munkalehetőség adatbázis*_

---

**1. Agilis felhasználói történet:**

> _Táblázatos formában láthatóak a munkalehetőségek._

**Elfogadási kritériumok:**

-  A munkák minden adata megjelenik.
-  Tartalmazza:
   -  Munka megnevezését
   -  Munka kategóriáját
   -  Munka leírását
   -  Munkavégzés helyét
   -  Munkavégzés időpontját
   -  Munkavégzés hosszát
   -  Szükséges eszközök rendelkezésre állását
   -  Munka bérét
   -  Munka státuszát
   -  Munkaadó felhasználó nevét
   -  Elvégző felhasználó nevét

**2. Agilis felhasználói történet:**

> _Különböző szempontok alapján lehet szűrni a munkalehetőségeket._

**Elfogadási kritériumok:**

-  A szűrési paraméterek minden kategóriát tartalmazzanak
-  Lehetőséget biztosít szűrések elvégzésére

**3. Agilis felhasználói történet:**

> _Új munkalehetőséget lehet felvinni az adatbázisba._

**Elfogadási kritériumok:**

-  Egy üres adatlap jelenik meg az új munkalehetőség felvitelére.
-  Mezők validációja az adatok felvitele során megtörténik.
-  Az adatok bevitele után a munkalehetőségek listája betöltődik újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására és betölti újra az adatbázist.

**4. Agilis felhasználói történet:**

> _Lehet módosítani a munkalehetőségeket._

**Elfogadási kritériumok:**

-  Munkalehetőségek mellett található szerkesztő gombok egy új felületre irányítanak.
-  Mezők validációja az adatok módosítása során megtörténik.
-  Az adatok módosítása után a munkalehetőségek listája betöltődik újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására, ebben esetben az adatok módosítása nélkül betölti újra az adatbázist.

**5. Agilis felhasználói történet:**

> _Lehet törölni a munkalehetőségeket._

**Elfogadási kritériumok:**

-  Munkalehetőségek mellett található törlő gombokkal tudunk egy-egy rekordot törölni.
-  A munkalehetőség törlése után az adatbázis betöltődik újra automatikusan.
-  Van lehetőséget a folyamat megszakítására az adatbázis módosítása nélkül.

---

### _*4. Munkaerő adatbázis*_

---

**1. Agilis felhasználói történet:**

> _Táblázatos formában láthatóak a munkaerők._

**Elfogadási kritériumok:**

-  A munkaerők minden adata megjelenik.
-  Tartalmazza:
   -  Felhasználó nevét
   -  Rendelkezésre állást
   -  Vállalt munka kategóriáját
   -  Helyét

**2. Agilis felhasználói történet:**

> _Különböző szempontok alapján lehet szűrni a munkaerőket._

**Elfogadási kritériumok:**

-  A szűrési paraméterek minden kategóriát tartalmaznak
-  Lehetőséget biztosít szűrések elvégzésére

**3. Agilis felhasználói történet:**

> _Új munkaerőket lehet felvinni az adatbázisba._

**Elfogadási kritériumok:**

-  Egy üres adatlap jelenik meg az új munkaerő felvitelére.
-  Mezők validációja az adatok felvitele során megtörténik.
-  Az adatok bevitele után a munkaerők listája betöltődik újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására és betölti újra az adatbázist.

**4. Agilis felhasználói történet:**

> _Lehet módosítani a munkaerőket._

**Elfogadási kritériumok:**

-  Munkaerők mellett található szerkesztő gombok egy új felületre irányítanak.
-  Mezők validációja az adatok módosítása során megtörténik.
-  Az adatok módosítása után a munkalehetőségek listája betöltődik újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására, ebben esetben az adatok módosítása nélkül betölti újra az adatbázist.

**5. Agilis felhasználói történet:**

> _Lehet törölni a munkaerőket._

**Elfogadási kritériumok:**

-  Munkaerő mellett található törlő gombokkal tudunk egy-egy rekordot törölni.
-  A munkaerő törlése után az adatbázis betöltődik újra automatikusan.
-  Van lehetőséget a folyamat megszakítására az adatbázis módosítása nélkül.

---

### _*5. Véleményyek adatbázisa*_

---

**1. Agilis felhasználói történet:**

> _Táblázatos formában lehet látni az egyes felhasználók értékelését._

**Elfogadási kritériumok:**

-  Az értékelések minden adata megjelenik.
-  Tartalmazza:
   -  Értékelő felszasználó neve
   -  Értékelt felhasználó neve
   -  Pontszáma
   -  Pozitívum az értékelt felhaználóról
   -  Negatíum az értékelt felhaználóról

**2. Agilis felhasználói történet:**

> _Különböző szempontok alapján lehet szűrni az értékeléseket._

**Elfogadási kritériumok:**

-  A szűrési paraméterek minden kategóriát tartalmaznak
-  Lehetőséget biztosít szűrések elvégzésére

**3. Agilis felhasználói történet:**

> _Új értékeléseket lehet felvinni az adatbázisba._

**Elfogadási kritériumok:**

-  Egy üres adatlap jelenik meg az új értékelések felvitelére.
-  Mezők validációja az adatok felvitele során megtörténik.
-  Az adatok bevitele után az értékelések listája betöltődik újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására és betölti újra az adatbázist.

**4. Agilis felhasználói történet:**

> _Lehet módosítani az értékeléseket._

**Elfogadási kritériumok:**

-  Az értékelések mellett található szerkesztő gombok egy új felületre irányítanak.
-  Mezők validációja az adatok módosítása során megtörténik.
-  Az adatok módosítása után az értékelések listája betöltődik újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására, ebben esetben az adatok módosítása nélkül betölti újra az adatbázist.

**5. Agilis felhasználói történet:**

> _Lehet törölni az értékeléseket._

**Elfogadási kritériumok:**

-  Az értékelések mellett található törlő gombokkal tudunk egy-egy rekordot törölni.
-  Az értékelések törlése után az adatbázis betöltődik újra automatikusan.
-  Adjon lehetőséget a folyamat megszakítására az adatbázis módosítása nélkül.

---

### _*6. Regisztrált felhasználók adatbázisa*_

---

**1. Agilis felhasználói történet:**

> _Táblázatos formában lehet látni a regisztrált felhasználókat._

**Elfogadási kritériumok:**

-  A felhasználók minden adata megjelenik.
-  Tartalmazza:
   -  Felhasználónevét
   -  Vezeték-, keresztnevét
   -  Nemét
   -  Profilképét
   -  Születési idejét
   -  Lakcímét
   -  Email címét
   -  Mobiltelefonszámát
   -  Jogosultságát
   -  Jelszavát

**2. Agilis felhasználói történet:**

> _Különböző szempontok alapján lehet szűrni a felhasználókat._

**Elfogadási kritériumok:**

-  A szűrési paraméterek minden kategóriát tartalmaznak
-  Lehetőséget biztosít szűrések elvégzésére

**3. Agilis felhasználói történet:**

> _Új felhasználókat lehet felvinni az adatbázisba._

**Elfogadási kritériumok:**

-  Egy üres adatlap jelenik meg az új felhasználók felvitelére.
-  Mezők validációja az adatok felvitele során megtörténik.
-  Az adatok bevitele után a felhasználók listája betöltődik újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására és betölti újra az adatbázist.

**4. Agilis felhasználói történet:**

> _Lehet módosítani a felhasználókat._

**Elfogadási kritériumok:**

-  A felhasználók mellett található szerkesztő gombok egy új felületre irányítanak.
-  Mezők validációja az adatok módosítása során megtörténik.
-  Az adatok módosítása után a felhasználók listája betöltődik újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására, ebben esetben az adatok módosítása nélkül betölti újra az adatbázist.

**5. Agilis felhasználói történet:**

> _Lehet törölni a felhasználókat._

**Elfogadási kritériumok:**

-  Felhasználók mellett található törlő gombokkal tudunk egy-egy rekordot törölni.
-  A felhasználók törlése után az adatbázis betöltődik újra automatikusan.
-  Adjon lehetőséget a folyamat megszakítására az adatbázis módosítása nélkül.

---

### _*7. Munka kategóriák adatbázisa*_

---

**1. Agilis felhasználói történet:**

> _Táblázatos formában lehet látni a munka kategóriák._

**Elfogadási kritériumok:**

-  A kategóriák minden adata megjelenik.
-  Tartalmazza:
   -  Megnevezése
   -  Leírása

**2. Agilis felhasználói történet:**

> _Különböző szempontok alapján lehet szűrni a kategóriákat._

**Elfogadási kritériumok:**

-  A szűrési paraméterek minden kategóriát tartalmaznak
-  Lehetőséget biztosít szűrések elvégzésére

**3. Agilis felhasználói történet:**

> _Új kategóriákat lehet felvinni az adatbázisba._

**Elfogadási kritériumok:**

-  Egy üres adatlap jelenik meg az új kategóriák felvitelére.
-  Mezők validációja az adatok felvitele során megtörténik.
-  Az adatok bevitele után a kategóriák listája betöltődik újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására és betölti újra az adatbázist.

**4. Agilis felhasználói történet:**

> _Lehet módosítani a kategóriákat._

**Elfogadási kritériumok:**

-  A kategóriák mellett található szerkesztő gombok egy új felületre irányítanak.
-  Mezők validációja az adatok módosítása során megtörténik.
-  Az adatok módosítása után a kategóriák listája betöltődik újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására, ebben esetben az adatok módosítása nélkül betölti újra az adatbázist.

**5. Agilis felhasználói történet:**

> _Lehet törölni a kategóriákat._

**Elfogadási kritériumok:**

-  A kategóriák mellett található törlő gombokkal tudunk egy-egy rekordot törölni.
-  A kategóriák törlése után az adatbázis betöltődik újra automatikusan.
-  Adjon lehetőséget a folyamat megszakítására az adatbázis módosítása nélkül.

---
### _*Projekt egyéb adatai*_

**Felhasználói felület:**

-  Reszponzív megjelenés
-  Intuitív kezelői felület

**Prioritás:**

> magas

**Megvalósítás időtartama:**

> 5 hét

**További fejlesztési lehetőségek:**

-  Cégek adatbázisának létrehozása
-  Részletes értékelést lehessen adni mind a munkaerőről, mind a munkaadóról
-  A profil nélküli felhasználóknak lehetőségük van regisztrálni.
-  Egy dashboardon grafikonok és adatkártyák segítségével követni a legfontosabb mérőszámokat


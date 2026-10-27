# Quiz PRO Integritate Academică · LEVEL UPSC 2.0

Quiz online despre integritatea academică pentru studenții Universității Pedagogice de Stat „Ion Creangă” din Chișinău, realizat de Senatul Studențesc UPSC în cadrul proiectului LEVEL UPSC 2.0.

Proiect finanțat de Ministerul Educației și Cercetării al Republicii Moldova, în cadrul Concursului de proiecte ale studenților din instituțiile publice de învățământ superior, ediția 2026, și cofinanțat de UPS „Ion Creangă” din Chișinău.

## Ce conține

- **Partea 1 – Sondaj anonim:** 10 întrebări despre percepția integrității academice la UPSC.
- **Partea 2 – Test:** 16 întrebări alese aleatoriu dintr-o bancă de 32, în 4 module: integritatea academică, plagiat și citare, inteligența artificială în studiu, evaluări și cercetare.
- **Certificat:** generat automat pentru minimum 12 răspunsuri corecte, descărcabil în PNG sau PDF, cu cod unic.

## Structura

```
index.html            quiz-ul complet (un singur fișier)
apps-script/Code.gs   codul pentru salvarea rezultatelor în Google Sheets
.nojekyll             publică fișierele așa cum sunt
```

## Publicare pe GitHub Pages

1. Creați un depozit public nou pe GitHub, de exemplu `quiz-integritate-upsc`.
2. Încărcați fișierele din acest folder: **Add file › Upload files**, apoi **Commit changes**.
3. Deschideți **Settings › Pages**. La *Source* alegeți **Deploy from a branch**, ramura `main`, folderul `/ (root)`, apoi **Save**.
4. După 1–2 minute quiz-ul este disponibil la adresa
   `https://NUME-UTILIZATOR.github.io/quiz-integritate-upsc/`

## Salvarea rezultatelor în Google Sheets

Fără acest pas quiz-ul funcționează, dar rezultatele nu se salvează.

1. Creați un tabel Google Sheets nou, de pe contul Senatului.
2. **Extensii › Apps Script**: lipiți conținutul fișierului `apps-script/Code.gs` și salvați.
3. **Implementare › Implementare nouă › Aplicație web**: *Execută ca: Eu*, *Cine are acces: Oricine*. Acordați permisiunile.
4. Copiați adresa aplicației web (se termină în `/exec`).
5. În `index.html`, la secțiunea **CONFIGURARE**, completați:
   `const RESULTS_URL="https://script.google.com/macros/s/.../exec";`
   Pe GitHub: deschideți fișierul, apăsați creionul (Edit), modificați linia și dați **Commit changes**.

Tabelul va avea două foi:
- **Test:** nume, facultate, scor total și pe module, promovat (da/nu), codul certificatului.
- **Sondaj:** răspunsurile anonime, fără nume.

Partajați tabelul doar cu organizatorii. Conține date personale ale studenților.

## Modificarea întrebărilor

Întrebările sunt în `index.html`, în constantele `MODS` (test) și `SURVEY` (sondaj). Pentru fiecare întrebare de test: `q` = întrebarea, `o` = cele 3 variante, `a` = poziția răspunsului corect (0, 1 sau 2), `e` = explicația. Pragul pentru certificat este `PASS`, iar numărul de întrebări pe modul este `PER`.

## De știut

- Răspunsurile corecte se află în codul paginii. Pentru o activitate de informare e acceptabil; quiz-ul nu este un examen.
- Codul de pe certificat se poate verifica doar dacă rezultatele se salvează în Google Sheets.

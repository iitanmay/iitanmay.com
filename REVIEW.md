# iitanmay.com — site review

A review of the site against its three stated goals: **spread the research**, **establish teaching reputation**, **invite collaboration**.

Items marked **[FIXED]** were changed in this pass. Items marked **[NEEDS YOU]** are blocked on information only you have. Items marked **[PROPOSED]** are changes awaiting your go-ahead.

The short version: your _content_ is strong — 13 publications, a substantial research page, a filled-in CV, six real news items, four YouTube course playlists. The problem is almost entirely that it is wrapped in an unmodified al-folio theme, and the theme's defaults actively work against all three goals.

---

## 1. Your best material is invisible — **[FIXED]**

`_pages/research.md` builds a Bootstrap accordion whose three sections all render **collapsed** (`class="collapse"`, `aria-expanded="false"`). A first-time visitor to `/research/` sees three bullet headings and nothing else.

Hidden behind those clicks:

| Asset                                         | Size    |
| --------------------------------------------- | ------- |
| `Fountains_Classification.png`                | 377 KB  |
| `Research_Fountain_1.png`                     | 297 KB  |
| `Channel_Flow.png`                            | 118 KB  |
| `publication_preview/agrawal2022dynamics.png` | —       |
| `Turbulent_Fountain_Schematic.mp4`            | 4.5 MB  |
| `GC_Visual.mp4`                               | 11.5 MB |
| `KH_GC.mp4`                                   | 3.8 MB  |

This is the single highest-impact problem on the site. Your laser-illuminated Kelvin–Helmholtz visualisations are genuinely striking — they are the most persuasive argument you have that working with you is interesting, and nobody sees them.

Two things make the current setup worse than it looks:

- The videos have **no `preload` attribute and no `poster`**, so all ~20 MB is fetched with the page even though the content is collapsed.
- `_includes/video.liquid` **already supports `poster`** (line 50) but **not `preload`**. Note that `poster` is interpolated without `relative_url`, so the path must be root-relative.

**Done:** the accordion is gone; all four areas render open with their figures and videos visible. Each video now has a `poster` still and `preload="none"` (`preload` added to `video.liquid`, and `poster` now passed through `relative_url`, which it was not before). The repeated inline `style="width: 70%; …"` is replaced by a single `.research-figure` class that also goes full-width on phones.

Measured effect: `/research/` fully scrolled now transfers **~2.1 MB**, against roughly 20 MB before, because the three videos no longer download until played.

A `toc: sidebar: left` was also added, giving a sticky section list beside the content — the same mechanism `/cv/` already uses. Note I could not watch it populate locally: this sandbox blocks the CDNs that serve jQuery and bootstrap-toc, so those scripts never loaded in my test browser. The markup it needs is all present (nav element, four `<h2>`s with IDs). Worth a glance when you next load the site.

## 2. Volcanic plumes — your current work — is not a research area — **[FIXED]**

The three areas on `/research/` are all retrospective: free shear flows, stratified turbulence, wall-bounded flows. The Oxford PHOENIX project appears only in homepage prose and one news item.

This is the thing a prospective collaborator is most likely to be searching for, and it is the work you can actually take on new people for. It should be a first-class research area.

**Done**, using the two images you supplied: the analogue plume facility, and a time-averaged image of a plume in a sheared, stratified crossflow. It is now the **first** section on `/research/`, ahead of the retrospective areas.

I kept the description to what the photograph and your own CV/news entries support, and left a `TODO` in the page source where two or three sentences on the rig itself — tank dimensions, how the stratification is set, how the crossflow is driven, what you measure — would help. I did not guess at those. PHOENIX is also left unlinked, since I could not verify a project URL from here.

## 3. Your papers are unreadable without a subscription — **[DEFERRED — your call]**

All 13 entries in `_bibliography/papers.bib` carry only an `html` field pointing at a paywalled publisher page. None of `pdf`, `arxiv`, `code`, `data`, `slides`, `poster` or `video` is used anywhere — even though `_layouts/bib.liquid` already renders buttons for every one of them.

For reach and citations this is the highest-leverage change available to you. Someone who cannot read the paper cannot cite it, and most people will not email for a copy.

You have asked to park this while you track down the accepted PDFs, and you have nothing on arXiv. Leaving it here as the biggest outstanding win rather than closing it.

Check your publishing agreements — most (Cambridge/JFM, APS, AIP, Elsevier, Springer) permit posting the **author-accepted manuscript** after an embargo. When you have them, the template work is already done: `bib.liquid` renders `pdf`, `arxiv`, `code`, `data`, `slides` and `poster` buttons, so each one is a single extra field in `papers.bib`.

## 4. The site told Google it was a theme — **[FIXED]**

`_config.yml` carried `description: A simple, whitespace theme for academics. Based on [*folio]…` — the `<meta name="description">` on **every page**, and therefore your Google snippet.

Also fixed: `blog_name: al-folio` → `notes`, `blog_description`, and `disqus_shortname: al-folio` cleared. `keywords` filled in. `last_updated: true` so pages show a freshness date.

## 5. Shared links had no preview card — **[FIXED]**

`serve_og_meta: false`, `serve_schema_org: false`, `og_image:` empty. A link to your site pasted into Slack, X, LinkedIn or WhatsApp rendered as a bare URL.

Now: both enabled, and `assets/img/og_preview.png` (1200×630) generated from a frame of your `KH_GC.mp4` showing the Kelvin–Helmholtz billows.

Two gotchas worth knowing if you change this later:

- `_includes/metadata.liquid` emits `og:image` **verbatim, with no `absolute_url` filter** — so `og_image` must be a full `https://…` URL, not a site-relative path.
- `twitter:card` was hardcoded to `summary` (small square thumbnail). Changed to `summary_large_image` when an image is set, which is what you want for a wide research figure.

## 6. Albert Einstein was still in your repo — **[FIXED]**

| File                        | What it was                                                                                     |
| --------------------------- | ----------------------------------------------------------------------------------------------- |
| `_pages/profiles.md`        | `/people/` — two identical Einstein blocks, `555 your office number`, `123 your address street` |
| `_pages/about_einstein.md`  | "Write your biography here… link to your favorite subreddit"                                    |
| `_data/cv.yml`              | Einstein's CV, including a future-dated "2029 — Max Planck Medal"                               |
| `_data/repositories.yml`    | `torvalds`, `alshedivat/al-folio`                                                               |
| `_posts/2015-07-15-code.md` | The theme's 2015 "a post with code" demo — `featured: true`, and the only thing at `/blog/`     |

All deleted. `_data/cv.yml` was dead at runtime (`cv.liquid` takes the `resume.json` branch) but was a trap for whoever edited next.

## 7. Co-author names were not links — **[FIXED]**

`_data/coauthors.yml` listed Podolsky, Rosen, Bach, Schrödinger, Lorentz and Planck — Einstein's co-authors. Yours were absent, so no author name on `/publications/` was clickable.

Rewritten with your recurring co-authors. Five now resolve: Chalamalla, Jha, Klewicki, Philip, Lin. The rest (Ungarish, Agarwal, Peddada, Ramesh, Zimmerman, Shi, Hwang, Chiu, Kumar) are listed as commented stubs — I did not invent profile URLs. Uncomment and fill as you find them.

## 8. Two deploy workflows were racing — **[FIXED]**

`.github/workflows/deploy.yml` **and** `.github/workflows/build.yml` both triggered on push to `main` and both published to `gh-pages`. Whichever finished last won, so your live site was non-deterministic.

`build.yml` was the worse of the two: no imagemagick (so the responsive `.webp` variants that `figure.liquid` references were never generated) and no PurgeCSS (so unpurged CSS shipped). Deleted; `deploy.yml` is the correct pipeline.

## 9. Broken links — **[FIXED]**

- `_pages/cv.md` had `cv_pdf` **commented out** while `assets/pdf/Tanmay_Agrawal_CV.pdf` sat unreferenced. Your CV page had no download link. Enabled.
- `_news/phd_defense.md` linked to `/assets/pdf/phd_slides.pdf`, **which does not exist** (the real file is `PhD_Defense_Slides.pdf`). The anchor text was also raw Markdown inside an HTML tag, so it rendered as the literal string `[Download Slides (PDF)]`. Both fixed, and the 18.8 MB `<iframe>` embed replaced with a title-slide thumbnail linking to the PDF — that page was pulling 18.8 MB on load.
- `assets/json/resume.json` — **both** profile URLs were malformed and 404'd from your CV page: LinkedIn was missing `/in/`, and Google Scholar was missing `citations?user=`. Fixed.

## 10. There was no way to reach you — **[FIXED]** / **[NEEDS YOU]**

`/contact/` offered only a Formspree form. Your email was commented out in `_data/socials.yml`, so no email icon appeared anywhere on the site, and there was no address to put in a grant application.

Enabled, and `/contact/` now leads with your affiliation and a mailto link before the form.

One trap worth flagging: the commented value was `iitanmay [at] proton [dot] me`. Uncommenting it as-is would have produced a **broken `mailto:`** — `encode_email` (jekyll-email-protect) percent-encodes, it does not expand `[at]`. The YAML now holds the real address and the filter does the obfuscation; the visible label on the page is still the human-readable form.

**[NEEDS YOU]:**

- ~~ORCID iD~~ — **[FIXED]** `0000-0002-0777-2527`, now in `_data/socials.yml` (icon in the social row) and in `resume.json` so it shows on `/cv/`.
- ~~Department~~ — **[FIXED]** Department of Earth Sciences, University of Oxford, now on `/contact/`.
- Your **Oxford departmental profile URL** (`work_url`) in `_data/socials.yml` — still outstanding.
- Your **office/building and postal address**, so the contact block is complete enough to paste into a grant application.

## 11. 19 MB of unused assets — **[FIXED]**

Deleted after verifying nothing referenced them: `prof_pic_color.png` (14 MB), `rhino.png`, the twelve theme demo photos `1.jpg`–`12.jpg`, `epicaly-short-113909.mp3`, `Gravity_Current.mp4`, `research_gravity_current/gc_sample.png`.

Kept deliberately: `template_error.png` (referenced by `FAQ.md`) and `book_covers/the_godfather.jpg` (referenced by `.github/workflows/broken-links.yml`).

Also removed two dead CSS rules in `assets/css/main.scss` targeting `.research h2.category` and `.research .card img` — they styled `_includes/research.liquid`, which no page renders.

## 12. Teaching page has no evidence — **[NEEDS YOU]**

`/teaching/` asserts four YouTube courses and lists university TA work. What a reader cannot tell is whether any of it reached anyone — there is no subscriber count, no view count, no episode count per playlist, no student feedback.

For a page whose job is to establish teaching reputation, that is the whole ballgame.

**[PARTLY FIXED]** The channel's **16.4k subscribers** is now stated on the page — that is a strong, concrete number and it was previously invisible to any reader. Still worth adding: total view count and episode count per playlist. Note the subscriber figure is point-in-time and will drift; a `TODO` marker in the page source flags it.

Also on this page:

- The thumbnails **hot-link `img.youtube.com`** with no local fallback; they break if a playlist's first video is removed or renumbered.
- **Nothing for Oxford.** No current teaching, supervision or outreach, although `resume.json` lists "Self-developed Online Courses — Ongoing".

## 13. Teaching page and CV contradict each other — **[FIXED]**

`_pages/teaching.md` and `assets/json/resume.json` disagree about what you taught:

|                     | `teaching.md`                                  | `resume.json`                                                           |
| ------------------- | ---------------------------------------------- | ----------------------------------------------------------------------- |
| IIT Delhi courses   | 4, with codes (APL390, AML713, APL720, APL107) | 6, no codes — adds Environmental Fluid Mechanics, Engineering Mechanics |
| MATLAB course title | "Using MATLAB for Fluid Dynamics"              | "Introduction to CFD using MATLAB"                                      |
| Fluent course title | "Tutorials on ANSYS Fluent"                    | "Basics of ANSYS Fluent"                                                |

**Resolved** in favour of `resume.json`, per your instruction that course names beat course codes. `/teaching/` now lists the six IIT Delhi courses by name with UG/PG markers, and Melbourne and NTHU follow the same convention. The two YouTube cards were also renamed to **Introduction to CFD using MATLAB** and **Basics of ANSYS Fluent** to match.

## 14. A news item has been promising a link for 11 months — **[NEEDS YOU]**

`_news/animesh_internship.md` ends: _"Animesh will be presenting this work during the FMFP Conference in December 2025. I'll provide a link to the conference proceedings once they are available online."_

That conference was ~11 months ago. Either add the link or drop the sentence — a visibly unkept promise reads worse than no promise.

## 15. Smaller items — **[PROPOSED]** / **[NEEDS YOU]**

- **`/news/` is not in the navbar.** It builds and is indexable but is reachable only via the "news" heading on the homepage. For a site whose goal includes "latest updates as and when they come", that is a strange thing to hide.
- **`/cv/` has no photo, email, phone or address** — `resume.json` `basics` has them all as empty strings, and every `education[].url` and `awards[].url` is empty too.
- **No analytics, no search-console verification.** You have no idea who visits, what they read, or what they searched for. `_config.yml` has slots for Google, Cronitor, Pirsch and Openpanel, all empty.
- **Phantom collections.** `_config.yml` declares `books` and `research` collections and a `type: research → layout: research` default, but `_books/`, `_research/` and `_layouts/research.liquid` do not exist. Harmless today; a build error the moment a research document is added.
- **`/books/`** renders a Carl Sagan quote and the heading "Books that I am reading…" over an empty shelf.
- **`_pages/dropdown.md`** is an inert `dropdown: false` stub that still builds to `_site/_pages/dropdown.html`.
- **Upstream baggage in version control:** `CUSTOMIZE.md` (22 KB), `FAQ.md` (18 KB), `INSTALL.md` (17 KB), `CONTRIBUTING.md`, `.all-contributorsrc`, `readme_preview/` (14 screenshots of the _theme_), `lighthouse_results/`, `assets/html/relativity.html`, `assets/jupyter/`, `assets/plotly/`. Mostly `exclude`d from the build, so cosmetic — but `relativity.html` is the one place "Einstein" still survives in the built site.
- **`README.md`** contains `Hello World!`.
- **`.gitignore` ignores `Gemfile.lock`, but `Gemfile.lock` is committed.** CI uses `bundler-cache: true` against the committed lockfile while your local edits to it are invisible to git. Pick one.

---

## Design — **[PROPOSED]**

Still stock al-folio, and it looks it. You said you like minimalism; minimal does not have to mean default.

**Accent colour.** Currently al-folio's magenta `#b509ac` (light) / `#2698ba` (cyan, dark). Proposed: a deep teal that reads as water and sits naturally beside your blue-green flow visualisations.

| Mode  | From      | To        | Contrast            |
| ----- | --------- | --------- | ------------------- |
| Light | `#b509ac` | `#0e6b86` | 6.05:1 on white     |
| Dark  | `#2698ba` | `#4fc3dc` | 8.25:1 on `#1c1c1d` |

Both clear WCAG AA for body-size link text; the dark value clears AAA. Ratios computed from the sRGB relative-luminance formula — worth re-checking in a contrast tool before shipping.

**Typography.** There is currently **no `font-family` rule anywhere** outside `monospace`, so headings inherit from Bootstrap/MDBootstrap. Proposed: body stays Roboto, headings move to a serif (Source Serif 4) for academic character. Note `Roboto Slab` is **already being loaded and never used** — switching headings to it costs literally nothing if you would rather not add a font request.

**Homepage.** Today: four paragraphs of CV prose, a right-floated photo, then news and selected papers — and an empty `.contact-note` div at the bottom (because `site.contact_note` is commented out in `_config.yml`). Proposed order:

1. A hero still — a frame from your KH video, not a looping video. Your shortest clip is 3.8 MB; a hero that costs mobile users megabytes before they read a word is the wrong trade.
2. A one-line research statement in plain language. (The current subtitle, "Researcher, Educator and Learner", says nothing a reader can act on.)
3. Three or four research areas as scannable links into `/research/`.
4. The biography prose, kept but moved below.
5. News and selected publications — already rendered by the layout.
6. An explicit call for collaborators and students, via `site.contact_note`. Setting it both adds the CTA and fixes the empty div.

Worth knowing: six purpose-made topic images sit unused in `assets/img/` — `Air_Curtains.png`, `Buoyant_Jets.png`, `Gravity_Currents.png`, `Mixing.png`, `Multigrid_Methods.png`, `Parallel_Computing.png`. They look like they were made for exactly this kind of research-area grid.

---

## Still outstanding

1. **Accepted-manuscript PDFs** for as many of the 13 papers as your agreements allow. Parked at your request; still the biggest single win available.
2. **Total YouTube views and per-playlist episode counts**, to go alongside the subscriber figure.
3. **Two or three sentences on the plume facility** — see the `TODO` in `_pages/research.md`.
4. **A PHOENIX project or NERC grant URL**, if one exists.
5. **Office and postal address** to finish the contact block.
6. **Feedback on the research page**, then a decision on the accent colour, heading typeface and homepage rework.

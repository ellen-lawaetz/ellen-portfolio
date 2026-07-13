/* ==========================================================================
   Ellen Lawaetz, Portfolio
   Shared translations + site behavior (nav, footer, tabs, reveal, drag-scroll)
   ========================================================================== */

const T = {
en: {
  // NAV
  'nav-home': 'Home', 'nav-work': 'Work', 'nav-cases': 'Case Studies', 'nav-about': 'About', 'nav-services': 'Services', 'nav-cta': "Let's talk",
  // FOOTER
  'footer-tag': 'UGC & Content Creator · Aarhus, Denmark',
  'footer-copy': '© 2026 Ellen Lawaetz. All content and imagery belong to their respective brand owners.',
  'footer-ig': 'Instagram', 'footer-email': 'Email',

  // HOME
  'home-pill': 'Based in Aarhus · Available worldwide',
  'home-eyebrow': 'UGC & Content Creator · Aarhus, Denmark',
  'home-h1': 'Made on iPhone.<br>Content that pays off.',
  'home-sub': "UGC and travel content in Danish and English, grounded, aesthetic, and made to convert. From product hooks to hotel films, I shoot what feels true and edit what performs.",
  'home-btn1': "Let's talk", 'home-btn2': 'See the work ↓',
  'stat-meta': 'Meta ad views', 'stat-retention': 'Client retention', 'stat-satisfaction': 'Client satisfaction', 'stat-video': 'Single video views', 'stat-brands': 'Brand partnerships',
  'ph-text': 'Your photo<br>or video here', 'ph-sub': 'Replace with &lt;img&gt; or &lt;video&gt;',
  'trusted-lbl': 'Trusted by',
  'home-work-label': 'How we can work together', 'home-work-title': 'Start with what you need',
  'teaser1-name': 'The Work', 'teaser1-desc': 'Brand UGC and travel & hotel content, organized by category, from fashion hooks to drone footage.', 'teaser1-cta': 'View portfolio',
  'teaser2-name': 'Case Studies', 'teaser2-desc': 'A closer look at four collaborations: the brief, the deliverable, and the result.', 'teaser2-cta': 'View more',
  'teaser3-name': 'Services & Rates', 'teaser3-desc': 'Single videos, photo sets, drone footage, or a monthly retainer, built around your goals.', 'teaser3-cta': 'See services',
  'ws-label': 'Previous collaborations', 'ws-title': 'My <em>work</em>',
  'ws-brand-eyebrow': 'Portfolio · 01', 'ws-brand-name': 'Brand <em>UGC</em>', 'ws-brand-desc': 'Product hooks, testimonials & lifestyle content for paid social and organic feeds.',
  'ws-travel-eyebrow': 'Portfolio · 02', 'ws-travel-name': 'Travel <span class="amp">&</span> <em>Hotels</em>', 'ws-travel-desc': 'Hotel films, drone footage and destination content shot on location.',
  'ws-photo-eyebrow': 'Portfolio · 03', 'ws-photo-name': 'Photography', 'ws-photo-desc': 'Natural, lifestyle-first stills for feeds, ads, and websites.',
  'ws-cases-eyebrow': 'Portfolio · 04', 'ws-cases-name': 'Case Studies', 'ws-cases-desc': 'The brief, the deliverable, and what four brands had to say about the result.',
  'back-link': 'Back to portfolio',
  'photo-page-eyebrow': 'Photography', 'photo-page-h1': 'Stills that <em>stop</em> the scroll', 'photo-page-lede': 'Natural, lifestyle-first photography for feeds, ads, and websites, shot on iPhone across brand and travel work.',
  'filter-all': 'All', 'filter-fashion': 'Fashion & Accessories', 'filter-fitness': 'Health & Fitness', 'filter-home': 'Home & Lifestyle', 'filter-food': 'Food & Restaurant', 'filter-tech': 'Electronics & Tech', 'filter-lifestyle': 'Events & In House', 'filter-beauty': 'Beauty & Haircare', 'filter-travel': 'Travel & Hotels',
  'wall-label': 'Behind the scenes',
  'home-about-label': 'About me', 'home-about-title': '22-year-old creator based in Aarhus',
  'home-about-body': "I'm Ellen, a UGC and iPhone content creator fluent in Danish and English. I create aesthetic, authentic content that feels natural and relatable, while still capturing attention and reflecting each brand's identity.",
  'home-about-link': 'More about me →',
  'home-about-quote': '"Content that feels like it belongs in the feed, not like an ad."',
  'cta-label': "Let's work together", 'cta-title': 'Ready to create something?',
  'cta-intro': "Whether you're looking for a single video or a long-term partnership, I'd love to hear about your brand and what you're trying to achieve.",
  'cta-response': 'Expect a reply within 48 hours.',
  'cta-btn1': 'Send an email', 'cta-btn2': 'DM Instagram',

  // WORK
  'work-eyebrow': 'Portfolio',
  'work-h1-brand': 'Brand <em>UGC</em>',
  'work-lede-brand': 'A selection of content across categories, created to feel native to the platform, build trust, and drive action.',
  'work-h1-travel': 'Travel <span class="amp">&</span> <em>Hotels</em>',
  'work-lede-travel': 'Hotel and travel films, shot on iPhone and in the air by drone, built to sell the feeling of being there.',
  'tab-brand': 'Brand UGC', 'tab-travel': 'Travel <span class="amp">&</span> Hotels',
  'cat-fashion': 'Fashion & Accessories', 'cat-fitness': 'Health & Fitness', 'cat-home': 'Home & Lifestyle', 'cat-food': 'Food & Restaurant', 'cat-tech': 'Electronics & Tech', 'cat-lifestyle': 'Events & In House',
  'cat-hotels': 'Hotels & Luxury', 'cat-glamping': 'Glamping & Nature', 'cat-xp': 'Experiences & Destinations', 'cat-drone': 'Drone footage',
  'photo-label': 'Photography', 'photo-title': 'Stills that do the same job',
  'photo-intro': 'Natural, lifestyle-first photography, for feeds, ads, and websites.',
  'pcat-product': 'Product & Lifestyle', 'pcat-travel': 'Travel & Hotel',

  // CASE STUDIES
  'cases-eyebrow': 'Results',
  'cases-h1': 'What the work <em>delivers</em>',
  'cases-lede': 'Four collaborations, the brief, the deliverable, and what the brand had to say.',
  'case1-client': 'Campanyon · Retainer · Since Aug 2025', 'case1-title': 'Aesthetic glamping & nature content',
  'case1-p1': 'Ongoing retainer, multiple collaborations', 'case1-p2': 'Photo & video across camping locations in Denmark', 'case1-p3': 'Content for organic social and inspiration feed',
  'case1-quote': '"We\'ve collaborated with Ellen several times and truly appreciate how smoothly the process runs. She is well-prepared, great at communicating, and has a natural sense for the look and mood we\'re going for. Ellen consistently delivers strong content, both in photos and video, and is a collaborator we warmly recommend."',
  'case1-author': 'Marie, Campanyon',
  'case2-client': 'Protein.dk · Retainer · Since Feb 2026', 'case2-title': 'Whitelisting ads & paid social content',
  'case2-p1': 'High-quality hooks and problem/solution format', 'case2-p2': 'Created for whitelisting, running as paid ads', 'case2-p3': 'Aesthetic, sales-oriented, and on-brand',
  'case2-quote': '"Ellen is one of the most professional creators we have worked with. She always creates high-quality content with catchy hooks that make you stop. The work is delivered in good time and is very aesthetically pleasing and sales-worthy."',
  'case2-author': 'Katja, Protein.dk',
  'case3-client': 'Cleanfriend · Retainer · Since March 2026', 'case3-title': 'Creative hooks & paid ad content',
  'case3-p1': 'Strong visual hooks and varied angles', 'case3-p2': 'Compelling problem/solution storytelling', 'case3-p3': 'Fast, professional delivery from brief to final cut',
  'case3-quote': '"What especially stands out is her creative approach to filming. She has a strong ability to think in terms of compelling hooks, visual techniques, unique angles, and varied shots, all of which give the content a more professional and engaging feel. Her use of voiceover and ability to build a clear narrative in the videos has also helped elevate the overall result significantly."',
  'case3-author': 'Fredrik, Cleanfriend',
  'case4-client': 'Kreaværket · Retainer · Since Feb 2025', 'case4-title': 'On-brand aesthetic content, delivered on time',
  'case4-p1': 'Full creative direction handled end-to-end', 'case4-p2': 'Content matched to a specific brand aesthetic', 'case4-p3': 'Delivered thoroughly and on schedule',
  'case4-quote': '"Ellen\'s content for Kreaværket perfectly captured the aesthetic we were aiming for. Creative, thorough, and always delivered on time."',
  'case4-author': 'Trine, Kreaværket',
  'test-label': 'Feedback', 'test-title': 'What brands <em>say</em>',
  'test1-q': '"Ellen has been a pleasure to work with. She combines a high level of professionalism with strong creativity, and throughout the entire process she has been approachable, sharp, and easy to communicate with."',
  'test2-q': '"Ellen is one of the most professional creators we at Protein.dk have worked with. She fully understands what is required, and she always creates high-quality content with catchy hooks that make you stop."',
  'test3-q': '"We\'ve collaborated with Ellen several times and truly appreciate how smooth and easy the process always is. She is well-prepared, communicates clearly, and has a natural understanding of the look and atmosphere we\'re aiming for. Ellen is a collaborator we can warmly recommend."',
  'test4-q': '"Quick feedback: super great, good energy, great variation, creative and catchy clips, fun and inspiring!"',
  'test5-q': '"Everything has been approved, so great! Thank you for a good collaboration and your patience. It was a bit tricky to start with, but it was great that you stayed easy to work with all the way through."',
  'test6-q': '"We have been incredibly happy with our collaboration with Ellen. She creates creative, high-quality content that always reflects her strong commitment and professionalism. We give her our warmest recommendation as a collaborator."',
  'test7-q': '"Thank you for the quick and great work. We\'re very happy with the content, especially the video featuring all the books, it captures exactly the story we wanted to showcase on Livets Sider."',
  'test8-q': '"Absolutely loved it! All the content was a 10 out of 10, you\'re so talented, this was incredibly good and professionally done, wow!"',
  'test9-q': '"Thank you for what you sent, it\'s just perfect! It looks like you had a great trip. I hope you\'re ready for more content adventures."',
  'test10-q': '"Your videos were absolutely great, thank you so much for the collaboration. We\'ll definitely do it again, and we\'d love to make more videos together next time."',

  // ABOUT
  'about-eyebrow': 'About me',
  'about-h1': 'The person behind the <em>lens</em>',
  'about-lede': 'A little more context on who I am and how I work.',
  'about-body1': "I'm Ellen, a 22-year-old UGC and iPhone content creator based in Aarhus, Denmark, working with brands around the world in both Danish and English.",
  'about-body2': "My approach is simple: content should feel like it belongs in the feed, not like an ad. I shoot iPhone-first because that's what audiences trust: real light, real settings, real people. Then I edit with an eye for what actually stops a scroll and earns a click.",
  'about-body3': "I'm detail-oriented, easy to brief, and I show up prepared. I especially value long-term partnerships, because they give me the chance to really develop my creative ideas, and I'm proud to say that most of the brands on this site have booked me more than once.",
  'about-quote': '"Content that feels like it belongs in the feed, not like an ad."',
  'fact-types-t': 'Content types', 'fact-types-b': 'UGC video, lifestyle photography, drone footage, whitelisting',
  'fact-lang-t': 'Languages', 'fact-lang-b': 'Danish & English, bilingual content available',
  'fact-platforms-t': 'Platforms', 'fact-platforms-b': 'Meta ads, TikTok, organic Instagram, YouTube Shorts',
  'fact-equip-t': 'Equipment', 'fact-equip-b': 'iPhone + drone, platform-native, authentic quality',
  'fact-spec-t': 'Speciality', 'fact-spec-b': 'Travel & hotel content, long-term brand partnerships',
  'fact-based-t': 'Based in', 'fact-based-b': 'Aarhus, Denmark, available for travel',
  'fact-pill1': '📍 Aarhus, Denmark', 'fact-pill2': '🇩🇰 + 🇬🇧', 'fact-pill3': '🤝 15+ brands', 'fact-pill4': '60+ UGC videos', 'fact-pill-tags': 'Fashion · Selfcare · Fitness · Home · Food · Electronic · Apps · Lifestyle · Travel · Hotels · Events',

  // SERVICES
  'svc-eyebrow': 'Services',
  'svc-h1': 'What I <em>offer</em>',
  'svc-lede': 'From a single video to a full retainer, tailored to your brand and goals. <a href="mailto:ellen@eltzbookings.dk" class="rate-pill">Rates available on request.</a>',
  'svc1-name': 'UGC Video', 'svc1-desc': 'Vertical 9:16 format. Includes research, scriptwriting, filming, and editing. 3 months of usage rights, 1 revision. Problem/solution, hooks, testimonials, lifestyle, adapted to your brief.',
  'svc2-name': 'UGC Photography', 'svc2-desc': 'Natural lifestyle photography for social media, ads, and websites. Real moments, authentic feel, your product in everyday life or a destination setting.',
  'svc3-name': 'Drone Footage', 'svc3-desc': 'Aerial footage for hotels, venues, travel destinations, real estate, and outdoor experiences. Cinematic and platform-ready.',
  'svc4-name': 'SoMe manager & Content strategi', 'svc4-desc': 'Ongoing social media management and content strategy: planning, posting, and keeping your presence active, consistent, and on-brand.',
  'svc5-name': 'Whitelisting', 'svc5-desc': 'Content created and approved for running as paid ads directly from my account, increased authenticity, better performance, wider reach.',
  'svc6-name': 'Content Bundles', 'svc6-desc': 'Mix of video and photo content in one package. Flexible bundles built around your campaign, launch, or ongoing content needs.',
  'proc-label': 'The process', 'proc-title': 'Simple, from start to finish.',
  'proc1-title': 'Free consultation', 'proc1-desc': 'A 15-minute Google Meet or email conversation to discuss your brand, goals, content needs, and vision. No strings attached.',
  'proc2-title': 'Strategy & details', 'proc2-desc': 'We align on deliverables, creative direction, and turnaround time. Once confirmed, I send a simple contract before getting started, and then a script so we agree on the format and avoid any misunderstandings before filming.',
  'proc3-title': 'Your content is ready', 'proc3-desc': 'Delivered via Google Drive or your preferred method. I follow up a few weeks after delivery to make sure everything is performing well.',
},
da: {
  'nav-home': 'Forside', 'nav-work': 'Arbejde', 'nav-cases': 'Case Studies', 'nav-about': 'Om mig', 'nav-services': 'Services', 'nav-cta': 'Lad os tale sammen',
  'footer-tag': 'UGC & Content Creator · Aarhus, Danmark',
  'footer-copy': '© 2026 Ellen Lawaetz. Alt indhold og billedmateriale tilhører de respektive brands.',
  'footer-ig': 'Instagram', 'footer-email': 'Email',

  'home-pill': 'Baseret i Aarhus · Tilgængelig verden over',
  'home-eyebrow': 'UGC & Content Creator · Aarhus, Danmark',
  'home-h1': 'Skabt på iPhone.<br>Indhold der betaler sig.',
  'home-sub': 'UGC og rejseindhold på dansk og engelsk, jordnært, æstetisk og skabt til at konvertere. Fra produkt-hooks til hotelfilm, jeg filmer det ægte og redigerer det, der performer.',
  'home-btn1': 'Lad os tale sammen', 'home-btn2': 'Se arbejdet ↓',
  'stat-meta': 'Meta-annoncevisninger', 'stat-retention': 'Fastholdelsesrate', 'stat-satisfaction': 'Kundetilfredshed', 'stat-video': 'Visninger på én video', 'stat-brands': 'Brandsamarbejder',
  'ph-text': 'Dit billede<br>eller video her', 'ph-sub': 'Erstat med &lt;img&gt; eller &lt;video&gt;',
  'trusted-lbl': 'Betroet af',
  'home-work-label': 'Sådan kan vi samarbejde', 'home-work-title': 'Start med det, du har brug for',
  'teaser1-name': 'Arbejdet', 'teaser1-desc': 'Brand UGC og rejse- & hotelindhold, organiseret efter kategori, fra mode-hooks til dronefilm.', 'teaser1-cta': 'Se porteføljen',
  'teaser2-name': 'Case Studies', 'teaser2-desc': 'Et nærmere kig på fire samarbejder: briefet, leverancen og resultatet.', 'teaser2-cta': 'View more',
  'teaser3-name': 'Services & Priser', 'teaser3-desc': 'Enkeltvideoer, fotopakker, dronefilm eller en månedlig retainer, bygget op om dine mål.', 'teaser3-cta': 'Se services',
  'ws-label': 'Tidligere samarbejder', 'ws-title': 'My <em>work</em>',
  'ws-brand-eyebrow': 'Portfolio · 01', 'ws-brand-name': 'Brand <em>UGC</em>', 'ws-brand-desc': 'Produkt-hooks, testimonials & livsstilsindhold til betalt og organisk social.',
  'ws-travel-eyebrow': 'Portfolio · 02', 'ws-travel-name': 'Rejse <span class="amp">&</span> <em>Hoteller</em>', 'ws-travel-desc': 'Hotelfilm, dronefootage og destinationsindhold filmet on location.',
  'ws-photo-eyebrow': 'Portfolio · 03', 'ws-photo-name': 'Photography', 'ws-photo-desc': 'Naturlige, livsstilsnære stillbilleder til feeds, annoncer og hjemmesider.',
  'ws-cases-eyebrow': 'Portfolio · 04', 'ws-cases-name': 'Case Studies', 'ws-cases-desc': 'Briefet, leverancen, og hvad fire brands sagde om resultatet.',
  'back-link': 'Tilbage til porteføljen',
  'photo-page-eyebrow': 'Fotografi', 'photo-page-h1': 'Stillbilleder der <em>stopper</em> scrollet', 'photo-page-lede': 'Naturlig, livsstilsnær fotografi til feeds, annoncer og hjemmesider, filmet på iPhone på tværs af brand- og rejsearbejde.',
  'filter-all': 'Alle', 'filter-fashion': 'Mode & Accessories', 'filter-fitness': 'Sundhed & Fitness', 'filter-home': 'Bolig & Livsstil', 'filter-food': 'Mad & Restaurant', 'filter-tech': 'Elektronik & Tech', 'filter-lifestyle': 'Events & Indendørs', 'filter-beauty': 'Beauty & Haircare', 'filter-travel': 'Rejse & Hoteller',
  'wall-label': 'Bag kulissen',
  'home-about-label': 'Om mig', 'home-about-title': '22-årig creator baseret i Aarhus',
  'home-about-body': 'Jeg er Ellen, en UGC og iPhone content creator, flydende på både dansk og engelsk. Jeg skaber æstetisk, autentisk indhold, der føles naturligt og relaterbart, mens det stadig fanger opmærksomheden og afspejler hvert brands identitet.',
  'home-about-link': 'Mere om mig →',
  'home-about-quote': '"Indhold der føles hjemmehørende i feedet, ikke som en reklame."',
  'cta-label': 'Lad os samarbejde', 'cta-title': 'Klar til at skabe noget?',
  'cta-intro': 'Uanset om du leder efter én video eller et langsigtet partnerskab, vil jeg gerne høre om dit brand og hvad du ønsker at opnå.',
  'cta-response': 'Forvent svar inden for 48 timer.',
  'cta-btn1': 'Send en mail', 'cta-btn2': 'DM Instagram',

  'work-eyebrow': 'Portfolio',
  'work-h1-brand': 'Brand <em>UGC</em>',
  'work-lede-brand': 'Et udvalg af indhold på tværs af kategorier, skabt til at føles naturligt på platformen, opbygge tillid og drive handling.',
  'work-h1-travel': 'Rejse <span class="amp">&</span> <em>Hoteller</em>',
  'work-lede-travel': 'Hotel- og rejsefilm, filmet på iPhone og i luften med drone, bygget til at sælge følelsen af at være der.',
  'tab-brand': 'Brand UGC', 'tab-travel': 'Rejse <span class="amp">&</span> Hoteller',
  'cat-fashion': 'Mode & Accessories', 'cat-fitness': 'Sundhed & Fitness', 'cat-home': 'Home & Lifestyle', 'cat-food': 'Mad & Restaurant', 'cat-tech': 'Elektronik & Tech', 'cat-lifestyle': 'Events & In House',
  'cat-hotels': 'Hoteller & Luksus', 'cat-glamping': 'Glamping & Natur', 'cat-xp': 'Oplevelser & Destinationer', 'cat-drone': 'Drone footage',
  'photo-label': 'Fotografi', 'photo-title': 'Stillbilleder der gør det samme job',
  'photo-intro': 'Naturlig, livsstilsorienteret fotografi, til feeds, annoncer og hjemmesider.',
  'pcat-product': 'Produkt & Livsstil', 'pcat-travel': 'Rejse & Hotel',

  'cases-eyebrow': 'Resultater',
  'cases-h1': 'Hvad arbejdet leverer',
  'cases-lede': 'Fire samarbejder, briefet, leverancen, og hvad brandet sagde bagefter.',
  'case1-client': 'Campanyon · Retainer · Siden aug. 2025', 'case1-title': 'Æstetisk glamping- & naturindhold',
  'case1-p1': 'Løbende retainer, flere samarbejder', 'case1-p2': 'Foto & video fra campingpladser i Danmark', 'case1-p3': 'Indhold til organisk sociale medier og inspirationsfeed',
  'case1-quote': '"Vi har samarbejdet med Ellen flere gange og sætter stor pris på, hvor let processen forløber. Hun er velforberedt, god til at kommunikere og har en naturlig fornemmelse for det udtryk og den stemning, vi er ude efter. Ellen leverer konsekvent stærkt indhold, både i billeder og video, og er en samarbejdspartner, vi varmt kan anbefale."',
  'case1-author': 'Marie, Campanyon',
  'case2-client': 'Protein.dk · Retainer · Siden feb. 2026', 'case2-title': 'Whitelisting-annoncer & betalt social content',
  'case2-p1': 'Højkvalitets hooks og problem/løsning-format', 'case2-p2': 'Skabt til whitelisting, kørende som betalte annoncer', 'case2-p3': 'Æstetisk, salgsorienteret og on-brand',
  'case2-quote': '"Ellen er en af de mest professionelle creators, vi hos Protein.dk har arbejdet med. Hun forstår altid, hvad der kræves, og leverer altid indhold af høj kvalitet med fængende hooks, der får dig til at stoppe op."',
  'case2-author': 'Katja, Protein.dk',
  'case3-client': 'Cleanfriend · Retainer · Siden marts 2026', 'case3-title': 'Kreative hooks & betalt annonce-indhold',
  'case3-p1': 'Stærke visuelle hooks og varierede vinkler', 'case3-p2': 'Overbevisende problem/løsning-storytelling', 'case3-p3': 'Hurtig, professionel levering fra brief til færdigt klip',
  'case3-quote': '"Det der særligt skiller sig ud ved Ellens arbejde er hendes kreative tilgang til optagelse. Hun har en stærk evne til at tænke i fængende hooks, visuelle teknikker, unikke vinkler og varierede klip, som giver indholdet et mere professionelt og engagerende udtryk. Samtidig har hendes brug af voiceover og evne til at opbygge en klar fortælling i videoerne været med til at løfte det samlede resultat markant."',
  'case3-author': 'Fredrik, Cleanfriend',
  'case4-client': 'Kreaværket · Retainer · Siden feb. 2025', 'case4-title': 'On-brand æstetisk indhold, leveret til tiden',
  'case4-p1': 'Fuld kreativ retning håndteret fra ende til anden', 'case4-p2': 'Indhold tilpasset en specifik brand-æstetik', 'case4-p3': 'Leveret grundigt og til tiden',
  'case4-quote': '"Ellens indhold til Kreaværket ramte præcis den æstetik, vi gik efter. Kreativt, grundigt og altid leveret til tiden."',
  'case4-author': 'Trine, Kreaværket',
  'test-label': 'Feedback', 'test-title': 'Hvad brands <em>siger</em>',
  'test1-q': '"Ellen har været en fornøjelse at arbejde med. Hun kombinerer et højt niveau af professionalisme med stærk kreativitet, og gennem hele processen har hun været imødekommende, skarp og nem at kommunikere med."',
  'test2-q': '"Ellen er en af de mest professionelle creators, vi hos Protein.dk har arbejdet med. Hun forstår fuldt ud, hvad der kræves, og skaber altid indhold af høj kvalitet med fængende hooks."',
  'test3-q': '"Vi har samarbejdet med Ellen flere gange og sætter stor pris på, hvor smidigt processen altid er. Hun er velforberedt, kommunikerer klart og har en naturlig forståelse for det look og den stemning, vi går efter. Ellen er en samarbejdspartner, vi varmt kan anbefale."',
  'test4-q': '"Hurtig tilbagemelding: super fedt, god energi, god variation, kreative fængende klip, sjovt og inspirerende!"',
  'test5-q': '"Alt er blevet godkendt, så fedt! Tak for et godt samarbejde og din tålmodighed. Det var lidt op ad bakke i starten, men super fedt at du forblev samarbejdsvillig hele vejen igennem."',
  'test6-q': '"Vi har været utroligt glade for samarbejdet med Ellen. Hun skaber kreativt og kvalitetsstærkt indhold, som altid afspejler hendes store engagement og professionalisme. Vi giver hende vores varmeste anbefalinger som samarbejdspartner."',
  'test7-q': '"Tak for det hurtige og fine arbejde. Vi er meget tilfredse med indholdet, særligt videoen med alle bøgerne, den videregiver præcis den fortælling, vi gerne vil fremvise hos Livets Sider."',
  'test8-q': '"Elsker det! Alt indholdet var en 10\'er, du er super talentfuld, det her var vildt godt og professionelt lavet, wow!"',
  'test9-q': '"Tak for det tilsendte, det er bare helt perfekt! Det ser ud til, at I havde en god tur. Jeg håber, I er klar til flere content-eventyr."',
  'test10-q': '"Dine videoer var virkelig flotte, tusind tak for samarbejdet. Det gør vi selvfølgelig igen, og vi laver meget gerne flere videoer sammen næste gang."',

  'about-eyebrow': 'Om mig',
  'about-h1': 'Personen bag linsen',
  'about-lede': 'Lidt mere kontekst om hvem jeg er, og hvordan jeg arbejder.',
  'about-body1': 'Jeg er Ellen, en 22-årig UGC og iPhone content creator baseret i Aarhus, som arbejder med brands i hele verden på både dansk og engelsk.',
  'about-body2': 'Min tilgang er enkel: indhold skal føles hjemmehørende i feedet, ikke som en reklame. Jeg filmer iPhone-first, fordi det er dét, publikum stoler på: ægte lys, ægte omgivelser, ægte mennesker. Derefter redigerer jeg med blik for, hvad der rent faktisk stopper et scroll og skaber et klik.',
  'about-body3': 'Jeg er detaljeorienteret, nem at briefe, og jeg møder altid velforberedt op. Jeg sætter især ekstra pris på langsigtede samarbejder, fordi jeg får mulighed for at udfolde mine kreative evner, og jeg er stolt af at kunne sige, at de fleste brands på denne side har booket mig mere end én gang.',
  'about-quote': '"Indhold der føles hjemmehørende i feedet, ikke som en reklame."',
  'fact-types-t': 'Indholdstyper', 'fact-types-b': 'UGC video, livsstilsfotografi, drone footage, whitelisting',
  'fact-lang-t': 'Sprog', 'fact-lang-b': 'Dansk & engelsk, tosprogede videoer muligt',
  'fact-platforms-t': 'Platforme', 'fact-platforms-b': 'Meta ads, TikTok, organisk Instagram, YouTube Shorts',
  'fact-equip-t': 'Udstyr', 'fact-equip-b': 'iPhone + drone, platform-native, autentisk kvalitet',
  'fact-spec-t': 'Speciale', 'fact-spec-b': 'Rejse- og hotelindhold, langsigtede brandsamarbejder',
  'fact-based-t': 'Baseret i', 'fact-based-b': 'Aarhus, Danmark, tilgængelig til rejser',
  'fact-pill1': '📍 Aarhus, Danmark', 'fact-pill2': '🇩🇰 + 🇬🇧', 'fact-pill3': '🤝 15+ brands', 'fact-pill4': '60+ UGC videoer', 'fact-pill-tags': 'Fashion · Selfcare · Fitness · Home · Food · Electronic · Apps · Lifestyle · Travel · Hotels · Events',

  'svc-eyebrow': 'Services',
  'svc-h1': 'Hvad jeg tilbyder',
  'svc-lede': 'Fra én enkelt video til en fuld retainer, tilpasset dit brand og dine mål. <a href="mailto:ellen@eltzbookings.dk" class="rate-pill">Priser fås på forespørgsel.</a>',
  'svc1-name': 'UGC Video', 'svc1-desc': 'Vertikalt 9:16-format. Inkluderer research, scriptskrivning, optagelse og redigering. 3 måneders brugsrettigheder, 1 revision. Problem/løsning, hooks, testimonials, livsstil, tilpasset dit brief.',
  'svc2-name': 'UGC Fotografi', 'svc2-desc': 'Naturlig livsstilsfotografi til sociale medier, annoncer og hjemmesider. Ægte øjeblikke, autentisk udtryk, dit produkt i hverdagen eller en destinationssammenhæng.',
  'svc3-name': 'Drone Footage', 'svc3-desc': 'Luftoptagelser til hoteller, venues, rejsedestinationer, ejendomme og udendørs oplevelser. Cinematisk og klar til platformene.',
  'svc4-name': 'SoMe manager & Content strategi', 'svc4-desc': 'Løbende styring af sociale medier og content-strategi: planlægning, opslag og en tilstedeværelse der er aktiv, konsekvent og on-brand.',
  'svc5-name': 'Whitelisting', 'svc5-desc': 'Indhold skabt og godkendt til at køre som betalte annoncer direkte fra min konto, øget autenticitet, bedre performance, større rækkevidde.',
  'svc6-name': 'Content Bundles', 'svc6-desc': 'Mix af video og foto i én pakke. Fleksible bundles bygget op om din kampagne, lancering eller løbende indholdsbehov.',
  'proc-label': 'Processen', 'proc-title': 'Enkel fra start til slut.',
  'proc1-title': 'Gratis konsultation', 'proc1-desc': 'Et 15-minutters Google Meet eller mailkonsultation for at tale om dit brand, dine mål, indholdsbehov og visioner. Ingen forpligtelser.',
  'proc2-title': 'Strategi & detaljer', 'proc2-desc': 'Vi afstemmer leverancer, kreativ retning og leveringstid. Når alt er bekræftet, sender jeg en simpel kontrakt, inden vi går i gang, og herefter et script, så vi er enige om formatet og undgår misforståelser, inden der filmes.',
  'proc3-title': 'Dit indhold er klar', 'proc3-desc': 'Leveret via Google Drive eller din foretrukne metode. Jeg følger op et par uger efter levering for at sikre, at alt performer godt.',
}
};

// ── APPLY LANGUAGE ──────────────────────────────────────────────────────────
function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.querySelectorAll('.lang-toggle').forEach(t => t.classList.toggle('da', lang === 'da'));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang][key] !== undefined) el.textContent = T[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
  });
}
function setLang(lang) {
  try { localStorage.setItem('el-lang', lang); } catch (e) {}
  applyLang(lang);
}
function initLang() {
  let lang = 'en';
  try { lang = localStorage.getItem('el-lang') || 'en'; } catch (e) {}
  applyLang(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  initLang();

  // Page load fade-in
  requestAnimationFrame(() => document.body.classList.add('loaded'));

  // Tabs
  function activateTab(tab) {
    const btn = document.querySelector('.port-tab[data-tab="' + tab + '"]');
    const panel = document.getElementById('panel-' + tab);
    if (!btn || !panel) return;
    document.querySelectorAll('.port-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.port-tab[data-tab]').forEach(t => t.classList.remove('active'));
    panel.classList.add('active');
    btn.classList.add('active');

    // Match the hero heading/lede + background media to the active tab (work.html only; no-ops elsewhere)
    let lang = 'en';
    try { lang = localStorage.getItem('el-lang') || 'en'; } catch (e) {}
    const heroH1 = document.querySelector('.page-hero h1[data-i18n-tab]');
    const heroLede = document.querySelector('.page-hero p.lede[data-i18n-tab]');
    if (heroH1) {
      const key = 'work-h1-' + tab;
      if (T[lang][key] !== undefined) heroH1.innerHTML = T[lang][key];
    }
    if (heroLede) {
      const key = 'work-lede-' + tab;
      if (T[lang][key] !== undefined) heroLede.textContent = T[lang][key];
    }
    document.querySelectorAll('.hero-bg-img').forEach(media => {
      media.classList.remove('active');
      if (media.tagName === 'VIDEO') media.pause();
    });
    const bg = document.querySelector('.hero-bg-img.' + tab + '-bg');
    if (bg) bg.classList.add('active');
  }
  document.querySelectorAll('.port-tab[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tab));
  });
  // Deep-link into a tab via #brand or #travel (used by homepage portfolio cards); defaults to brand
  const hashTab = window.location.hash.replace('#', '');
  activateTab(hashTab === 'travel' ? 'travel' : 'brand');

  // Scroll reveal, with staggered delay per section (simple index-based stagger within each direct reveal container)
  const containers = new Set();
  document.querySelectorAll('.reveal').forEach(el => containers.add(el.parentElement));
  containers.forEach(container => {
    const items = Array.from(container.children).filter(c => c.classList && c.classList.contains('reveal'));
    items.forEach((el, i) => { el.style.transitionDelay = Math.min(i * 0.07, 0.42) + 's'; });
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); observer.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Count-up numbers (elements with data-count-to)
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      countObserver.unobserve(el);
      const raw = el.dataset.countTo;
      const match = raw.match(/^([\d.]+)(.*)$/);
      if (!match) return;
      const target = parseFloat(match[1]);
      const suffix = match[2] || '';
      const decimals = (match[1].split('.')[1] || '').length;
      const duration = 1300;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = (target * eased).toFixed(decimals);
        el.textContent = val + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('[data-count-to]').forEach(el => countObserver.observe(el));

  // Drag scroll for video rows
  document.querySelectorAll('.video-row').forEach(row => {
    let isDown = false, startX, scrollLeft;
    row.addEventListener('mousedown', e => { isDown = true; startX = e.pageX - row.offsetLeft; scrollLeft = row.scrollLeft; });
    row.addEventListener('mouseleave', () => isDown = false);
    row.addEventListener('mouseup', () => isDown = false);
    row.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      row.scrollLeft = scrollLeft - (e.pageX - row.offsetLeft - startX);
    });
  });

  // Scroll progress bar
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      progressBar.style.width = scrolled + '%';
    }, { passive: true });
  }

  // Custom cursor (desktop only)
  const cursor = document.querySelector('.cursor-dot');
  if (cursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let cx = 0, cy = 0;
    window.addEventListener('mousemove', e => {
      cx = e.clientX; cy = e.clientY;
      cursor.style.left = cx + 'px'; cursor.style.top = cy + 'px';
      cursor.classList.add('active');
    });
    document.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    const growTargets = document.querySelectorAll('.media-tile, .wall-tile, .photo-card, .brand-bubble');
    growTargets.forEach(el => {
      const label = el.classList.contains('photo-card') ? 'View' : (el.querySelector('.media-play') ? 'Play' : 'View');
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('grow');
        cursor.innerHTML = '<span>' + label + '</span>';
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.innerHTML = '';
      });
    });
  }

  // Subtle tilt on hero image and photo-cards
  function addTilt(el, strength) {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${px * strength}deg) rotateX(${-py * strength}deg)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  }
  const heroFrame = document.querySelector('.media-frame');
  if (heroFrame && window.matchMedia('(hover: hover) and (pointer: fine)').matches) addTilt(heroFrame, 6);
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.photo-card').forEach(el => addTilt(el, 3));
  }
});

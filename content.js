/**
 * ORDROTATION — CONTENT LIBRARY
 * ─────────────────────────────────────────────────────────────────
 * GRAMMAR_RULES  — 12 rotating weekly rules (week number mod 12 picks the rule)
 * PRONUNCIATION  — static pronunciation guide, always available
 *
 * To add a grammar rule: copy an existing entry and edit.
 * Each rule needs: title, short, rules[], examples[], tip, mistake {wrong, right}
 *
 * To add a pronunciation topic: copy an existing entry and edit.
 * Each topic needs: title, intro, items[] with {label, desc, ex[]}
 */

const GRAMMAR_RULES = [

  {
    title: 'The V2 rule — verb always in second position',
    short: 'In a Swedish main clause the verb is always the second element, no matter what comes first.',
    rules: [
      'Normal: Subject → Verb → Rest → "Jag åker till stan imorgon."',
      'Inverted: Time/Adverb → Verb → Subject → Rest → "Imorgon åker jag till stan."',
      'Any element other than the subject forces the subject and verb to swap.',
    ],
    examples: [
      { sv: 'Jag åkte till Uppsala igår.',      en: 'I went to Uppsala yesterday.',      note: 'Normal order' },
      { sv: 'Igår åkte jag till Uppsala.',       en: 'Yesterday I went to Uppsala.',      note: 'Time first → inversion' },
      { sv: 'I fredags gick vi på bio.',          en: 'Last Friday we went to the cinema.',note: 'Longer time phrase → verb still 2nd' },
      { sv: 'Sedan gick jag och la mig.',         en: 'Then I went to bed.',              note: 'Adverb first → inversion' },
    ],
    tip: 'Test: if you start with anything that is not the subject, flip the subject and verb. "Igår jag åkte" is wrong — "Igår åkte jag" is right.',
    mistake: { wrong: 'Igår jag åkte till stan.', right: 'Igår åkte jag till stan.' },
  },

  {
    title: 'Bisatser — word order in subordinate clauses',
    short: 'In a subordinate clause (bisats) negations and adverbs come BEFORE the verb — the opposite of main clause order.',
    rules: [
      'Main clause: Jag äter inte. (negation after verb)',
      'Bisats: ...att jag inte äter. (negation before verb)',
      'Common bisats triggers: att, om, eftersom, när, innan, medan, trots att, även om, för att, utan att, genom att, som',
    ],
    examples: [
      { sv: 'Jag vet att han inte kommer.',              en: 'I know that he isn\'t coming.',         note: 'inte before the verb in the bisats' },
      { sv: 'Hon sa att hon aldrig dricker kaffe.',      en: 'She said she never drinks coffee.',     note: 'aldrig before the verb' },
      { sv: 'Om jag inte har pengar, stannar jag hemma.',en: 'If I don\'t have money I\'ll stay home.',note: 'om-clause is a bisats' },
      { sv: 'Eftersom hon inte mår bra, stannar hon hemma.', en: 'Since she isn\'t well she\'s staying home.', note: '' },
    ],
    tip: 'A quick trick: find the word that introduced the subordinate clause (att, om, när…), then put inte/aldrig/bara immediately after the subject that follows it — never after the verb.',
    mistake: { wrong: 'Jag vet att han kommer inte.', right: 'Jag vet att han inte kommer.' },
  },

  {
    title: 'på — when Swedish uses på where English uses for, about, at',
    short: 'Swedish på covers a much wider range than English "on". Many verb+preposition combinations that use "for", "about" or "at" in English use på in Swedish.',
    rules: [
      'tänka på — to think about',
      'vänta på — to wait for',
      'bero på — to depend on',
      'titta på — to look at / watch',
      'lyssna på — to listen to',
      'svara på — to answer (something)',
      'hålla på med — to be busy with',
      'nöjd med (not på) — satisfied with',
    ],
    examples: [
      { sv: 'Jag väntar på bussen.',      en: 'I\'m waiting for the bus.',       note: 'Not "för"' },
      { sv: 'Det beror på vädret.',        en: 'It depends on the weather.',      note: '' },
      { sv: 'Jag tänker ofta på dig.',     en: 'I often think about you.',        note: 'Not "om" — tänka om = reconsider' },
      { sv: 'Vi lyssnar på radio.',        en: 'We\'re listening to the radio.',  note: 'Not "till"' },
    ],
    tip: 'Learn these as fixed chunks, not rules. Tycka om is separate — om there is not interchangeable with på. Tänka om means something different (to reconsider).',
    mistake: { wrong: 'Jag väntar för bussen.', right: 'Jag väntar på bussen.' },
  },

  {
    title: 'Ingen / inget / inga — negating nouns directly',
    short: 'Swedish has two ways to say "no / not any" with nouns. Ingen/inget/inga is more direct and common in speech; inte någon/något/några is also correct and slightly more emphatic.',
    rules: [
      'ingen + en-word singular:   ingen bil',
      'inget + ett-word singular:  inget hus',
      'inga + plural:              inga pengar',
      'Alternative: inte + någon/något/några (same meaning)',
      'Never say: "inte frågor" — you need either inga frågor or inte några frågor',
    ],
    examples: [
      { sv: 'Jag har inga frågor.',             en: 'I have no questions.',           note: 'Direct, natural' },
      { sv: 'Jag har inte några frågor.',        en: 'I don\'t have any questions.',   note: 'Same meaning, slightly longer' },
      { sv: 'Det finns ingen mjölk.',            en: 'There\'s no milk.',              note: 'ingen + en-word' },
      { sv: 'Han har inget jobb.',               en: 'He has no job.',                note: 'inget + ett-word' },
    ],
    tip: 'In everyday spoken Swedish, inga/ingen/inget is more natural. Inte någon can sound slightly emphatic — like "not a single one". Both are correct.',
    mistake: { wrong: 'Jag har inte frågor.', right: 'Jag har inga frågor. (or: inte några frågor)' },
  },

  {
    title: 'Sin / sitt / sina — the reflexive possessive',
    short: 'Sin/sitt/sina refers back to the subject of the same clause. Three conditions must all be true before you can use it.',
    rules: [
      '1. The subject is performing an action.',
      '2. The action involves someone or something else.',
      '3. That someone/something belongs to the subject.',
      'sin = en-words  |  sitt = ett-words  |  sina = plural',
    ],
    examples: [
      { sv: 'Oscar pratar med sin mormor.',    en: 'Oscar talks to his (own) grandmother.',        note: 'sin — belongs to Oscar' },
      { sv: 'Oscar pratar med hans mormor.',   en: 'Oscar talks to his (someone else\'s) grandmother.', note: 'hans — another man\'s' },
      { sv: 'Hon hämtar sina barn.',           en: 'She picks up her (own) children.',             note: 'sina — plural, her own' },
      { sv: 'De målar sitt hus.',              en: 'They\'re painting their (own) house.',          note: 'sitt — ett-word' },
    ],
    tip: 'Ask: does the thing belong to the subject of this clause? Yes → sin/sitt/sina. No, belongs to someone else → hans/hennes/deras.',
    mistake: { wrong: 'Hon hämtar hennes barn. (when she is the subject)', right: 'Hon hämtar sina barn.' },
  },

  {
    title: 'Adjective agreement — en, ett, plural, and definite forms',
    short: 'Swedish adjectives take different endings depending on noun gender, number, and whether the noun is definite or indefinite.',
    rules: [
      'Indefinite en-word:    en fin bil        (no ending)',
      'Indefinite ett-word:   ett fint hus      (-t ending)',
      'Indefinite plural:     fina bilar/hus    (-a ending)',
      'Definite (all):        den/det/de fina …  (-a ending always)',
    ],
    examples: [
      { sv: 'en dyr bil / ett dyrt hus / dyra bilar',              en: 'an expensive car / house / cars',          note: 'Indefinite' },
      { sv: 'den dyra bilen / det dyra huset / de dyra bilarna',   en: 'the expensive car / house / cars',         note: 'Definite → always -a' },
      { sv: 'en liten katt / ett litet barn / små katter',         en: 'a small cat / child / small cats',         note: 'liten is irregular' },
    ],
    tip: 'Shortcut: whenever you use den / det / de before an adjective, the adjective always ends in -a. No exceptions. So "den stor bilen" is always wrong — "den stora bilen".',
    mistake: { wrong: 'ett fin hus / den fin bilen', right: 'ett fint hus / den fina bilen' },
  },

  {
    title: 'Modal verbs — kan, ska, vill, måste, får, borde',
    short: 'Swedish modal verbs are followed directly by an infinitive without "att". They have one form for all persons.',
    rules: [
      'kan  = can / be able to',
      'ska  = will / going to (plan or intent)',
      'vill = want to',
      'måste = must / have to',
      'får  = may / be allowed to / get to',
      'borde = should / ought to',
      'No "att" between the modal and the next verb.',
    ],
    examples: [
      { sv: 'Jag kan simma.',                  en: 'I can swim.',                    note: '' },
      { sv: 'Vi ska åka till Stockholm.',       en: 'We\'re going to Stockholm.',     note: 'Plan/intent' },
      { sv: 'Vill du ha kaffe?',               en: 'Do you want coffee?',            note: '' },
      { sv: 'Du borde träna mer.',             en: 'You should exercise more.',      note: '' },
    ],
    tip: 'No "att" after modals. "Jag vill äta" — correct. "Jag vill att äta" — wrong. Think of it as: the infinitive just follows directly, like in English ("I want to eat" → "jag vill äta").',
    mistake: { wrong: 'Jag vill att äta pizza.', right: 'Jag vill äta pizza.' },
  },

  {
    title: 'Past tense groups — -ade, -te, -dde, or vowel change?',
    short: 'Swedish verbs fall into four groups. The past tense ending is determined by the group, not by feel.',
    rules: [
      'Group 1 (-ar verbs):   past = -ade.   arbeta → arbetade, handla → handlade',
      'Group 2 (-er verbs):   past = -te/-de. köpa → köpte, ringa → ringde',
      'Group 3 (short -r):    past = -dde.    bo → bodde, tro → trodde',
      'Group 4 (strong):      vowel change.   skriva → skrev, äta → åt, ta → tog',
    ],
    examples: [
      { sv: 'arbeta → arbetade',   en: 'work → worked',    note: 'Group 1 — always -ade' },
      { sv: 'köpa → köpte',        en: 'buy → bought',     note: 'Group 2 — -te' },
      { sv: 'bo → bodde',          en: 'live → lived',     note: 'Group 3 — -dde' },
      { sv: 'äta → åt',            en: 'eat → ate',        note: 'Group 4 — vowel change' },
      { sv: 'tycka → tyckte',      en: 'think → thought',  note: 'Group 2 — not tyckade!' },
    ],
    tip: 'Group 1 (-ade) is the most common and is always used for new/borrowed verbs. But the high-frequency everyday verbs (äta, ta, se, tycka, köpa, resa) are mostly Groups 2 or 4 — learn those individually.',
    mistake: { wrong: 'Jag ätade / jag köpade / jag tyckade', right: 'Jag åt / jag köpte / jag tyckte' },
  },

  {
    title: 'Ska vs kommer att — two ways to express the future',
    short: '"Ska" expresses plans and intentions. "Kommer att" expresses predictions. In practice, ska is used more widely in speech.',
    rules: [
      'ska + infinitive  = plan, intention, decision (you control it)',
      'kommer att + infinitive = prediction, expectation (will probably happen)',
    ],
    examples: [
      { sv: 'Jag ska åka till London nästa vecka.',  en: 'I\'m going to London next week.',  note: 'Planned — ska' },
      { sv: 'Det kommer att regna imorgon.',          en: 'It\'s going to rain tomorrow.',    note: 'Prediction — kommer att' },
      { sv: 'Hon ska bli läkare.',                   en: 'She\'s going to become a doctor.', note: 'Intention — ska' },
      { sv: 'Det kommer att bli svårt.',              en: 'It\'s going to be difficult.',     note: 'Prediction — kommer att' },
    ],
    tip: 'In everyday speech, ska is used for both plans and predictions and you won\'t sound wrong. Kommer att sounds slightly more formal or emphatic. Weather forecasts tend to use kommer att.',
    mistake: { wrong: '(no hard error — but) Det ska regna. (for weather)', right: 'Det kommer att regna. (more natural for predictions)' },
  },

  {
    title: 'Partikelverb — compound verbs with particles',
    short: 'Many Swedish verbs combine with a particle (preposition or adverb) to make a new meaning. The particle is stressed when speaking.',
    rules: [
      'plocka upp = pick up   |   stänga av = turn off   |   sätta på = turn on',
      'lägga ner = put down   |   ta av = take off       |   gå med = agree/join',
      'With a pronoun object: particle comes AFTER the pronoun — stäng av den.',
      'With a noun object: particle usually goes after — stäng av TV:n, or stäng TV:n av.',
    ],
    examples: [
      { sv: 'Kan du stänga av TV:n?',        en: 'Can you turn off the TV?',        note: 'Particle after noun object' },
      { sv: 'Stäng av den.',                  en: 'Turn it off.',                    note: 'Particle MUST follow pronoun' },
      { sv: 'Jag plockade upp katten.',       en: 'I picked up the cat.',            note: '' },
      { sv: 'Hon tog av sig jackan.',          en: 'She took off her jacket.',        note: 'Reflexive particle verb' },
    ],
    tip: 'The particle carries the main meaning shift — plocka alone means "pick/gather", but plocka upp means "pick up". Memorise common ones as a unit from the start.',
    mistake: { wrong: 'Stäng den av. (with pronoun)', right: 'Stäng av den.' },
  },

  {
    title: 'Stå / sitta / ligga vs ställa / sätta / lägga',
    short: 'Swedish distinguishes between position (how something already is) and placement (the act of putting). English "put" and "be" cover all of these.',
    rules: [
      'stå = stand upright   →   ställa = place upright',
      'sitta = sit/be attached   →   sätta = seat/place attached',
      'ligga = lie horizontal   →   lägga = lay/place horizontal',
    ],
    examples: [
      { sv: 'Boken ligger på bordet.',        en: 'The book is lying on the table.',        note: 'Position — horizontal' },
      { sv: 'Lägg boken på bordet.',          en: 'Put the book on the table.',             note: 'Placement — horizontal' },
      { sv: 'Flaskan står i kylskåpet.',      en: 'The bottle is standing in the fridge.',  note: 'Position — upright' },
      { sv: 'Ställ flaskan i kylskåpet.',     en: 'Put the bottle in the fridge.',          note: 'Placement — upright' },
    ],
    tip: 'Think about the final orientation: upright → ställa/stå; horizontal → lägga/ligga; seated or attached (stamp, child in chair) → sätta/sitta.',
    mistake: { wrong: 'Jag lägger boken på hyllan. (if it stands upright)', right: 'Jag ställer boken på hyllan.' },
  },

  {
    title: 'Eftersom / därför att vs för att — because vs in order to',
    short: '"Eftersom" and "därför att" introduce a reason clause. "För att" introduces a purpose (in order to) and is followed by an infinitive.',
    rules: [
      'eftersom + full clause = because/since (reason)',
      'därför att + full clause = because (near-synonym for eftersom)',
      'för att + infinitive = in order to (purpose)',
      'för att + full clause = because (casual speech only)',
    ],
    examples: [
      { sv: 'Jag stannar hemma eftersom jag är sjuk.',    en: 'I\'m staying home because I\'m sick.',         note: 'eftersom + clause' },
      { sv: 'Eftersom det regnar tar jag paraply.',        en: 'Since it\'s raining I\'ll take an umbrella.',  note: 'eftersom can open the sentence' },
      { sv: 'Jag tränar för att bli starkare.',           en: 'I exercise in order to get stronger.',        note: 'för att + infinitive = purpose' },
      { sv: 'Jag är trött för att jag sov dåligt.',       en: 'I\'m tired because I slept badly.',           note: 'för att + clause — casual' },
    ],
    tip: '"Eftersom" is always safe for "because". In writing, prefer eftersom over "för att + clause". Watch the difference: "för att gå" = in order to go; "för att han gick" = because he went.',
    mistake: { wrong: 'Jag är sjuk för att gå ut. (ambiguous)', right: 'Jag är för sjuk för att gå ut. (too sick to go out)' },
  },

];

const PRONUNCIATION = [

  {
    title: 'The Swedish vowels — å, ä, ö, and y',
    intro: 'Swedish has nine vowel letters. Four of them are not in the English alphabet and need special attention.',
    items: [
      {
        label: 'å',
        desc: 'A rounded back vowel. Long å sounds like the "o" in British English "more" or "port". Short å sounds like the "o" in "hot" (British RP). Not quite an English sound — round your lips more than for "o".',
        ex: ['båt (boat) — long å', 'katt (cat) — a is short a, totally different from å', 'ål (eel) vs all (all)'],
      },
      {
        label: 'ä',
        desc: 'An open front vowel. Long ä sounds like the "a" in "bear" or "air" (British RP). Short ä sounds like the "e" in "bed". Closer to the front of your mouth than "a".',
        ex: ['äta (to eat) — long ä', 'häst (horse) — short ä', 'ä vs a: väg (road) vs vag (vague)'],
      },
      {
        label: 'ö',
        desc: 'A rounded front vowel. Long ö is like the "i" in British "bird" or "her", but with rounded lips. Short ö is like the "u" in "burn". It has no English equivalent — round your lips as if saying "o" but try to say "e".',
        ex: ['öra (ear) — long ö', 'höst (autumn) — short ö', 'öl (beer) vs ol- prefix'],
      },
      {
        label: 'y',
        desc: 'A rounded front vowel. Like German "ü" or French "u". Round your lips forward (like "oo") but try to say "ee". Your notes describe it well: "lips pulled forward, teeth still slightly visible".',
        ex: ['ny (new) — long y', 'nytt (new, neuter) — short y', 'y vs i: by (village) vs bi (bee)'],
      },
    ],
  },

  {
    title: 'Hard vs soft vowels — how they change g, k, and sk',
    intro: 'Swedish divides vowels into two groups. Which group a vowel belongs to changes how the consonants g, k, and sk are pronounced before it.',
    items: [
      {
        label: 'Hard vowels: a, o, u, å',
        desc: 'Before hard vowels, g sounds like English "g" (as in "go"), k sounds like English "k", and sk sounds like English "sk".',
        ex: ['gå (go) — hard g', 'kaka (cookie) — hard k', 'skola (school) — hard sk'],
      },
      {
        label: 'Soft vowels: e, i, y, ä, ö',
        desc: 'Before soft vowels, the sounds change: g → /j/ (like "y" in "yes"), k → /ɕ/ (a soft "sh"-like sound, further forward than English "sh"), sk → /ɧ/ (the sj-sound, see below).',
        ex: ['ge (give) — sounds like "ye"', 'kör (drives) — soft k, like "sh-er"', 'sky (sky/gravy) — sj-sound'],
      },
      {
        label: 'The rule in practice',
        desc: 'This is why the same letter can sound completely different: "g" in "gå" (hard) vs "ge" (soft). Context — the vowel after — tells you which sound to use.',
        ex: ['gul (yellow) — hard g | ge (give) — soft g', 'kall (cold) — hard k | kära (dear) — soft k', 'skatt (treasure) — hard sk | skön (pleasant) — sj-sound'],
      },
    ],
  },

  {
    title: 'Vowel length — the long/short rule',
    intro: 'Vowel length is one of the most important features of Swedish pronunciation, and it also determines double consonants in spelling.',
    items: [
      {
        label: 'The core rule',
        desc: 'In a stressed syllable, the vowel is either LONG (held longer) OR SHORT followed by a double (or cluster) consonant. These two together — long vowel or short vowel + double consonant — take up the same rhythmic space.',
        ex: ['mat (food) — long a | matta (rug) — short a + tt', 'glas (glass) — long a | glass (ice cream) — short a + ss', 'vil (wanting) — long i | vill (want) — short i + ll'],
      },
      {
        label: 'Spotting it in words',
        desc: 'A single consonant after a vowel = long vowel. A double consonant after a vowel = short vowel. This is also why Swedish spelling uses double consonants — they signal the vowel is short.',
        ex: ['bil (car) — long i, one l', 'boll (ball) — short o, double l', 'stor (big) — long o | torr (dry) — short o, double r'],
      },
      {
        label: 'Why it matters for listening',
        desc: 'Length distinguishes many word pairs. Getting it wrong will not cause complete incomprehension, but it will sound noticeably non-native and can occasionally change meaning.',
        ex: ['man (man) vs mann- (short a forms)', 'ful (ugly) vs full (full/drunk)', 'bor (lives) vs borr (drill)'],
      },
    ],
  },

  {
    title: 'The sj-sound and the tj-sound',
    intro: 'Swedish has two consonant sounds with no real equivalent in English. They are both common and worth learning early.',
    items: [
      {
        label: 'The sj-sound /ɧ/',
        desc: 'Often described as a simultaneous "sh" and a breathy "wh". Round your lips slightly and let air flow with friction both at the back of the mouth and near the lips. It is the most distinctively Swedish sound. Spelled: sj, sk (before soft vowels), stj, skj, rs, and sometimes ch and g.',
        ex: ['sjö (lake) — sj', 'skön (pleasant) — sk before ö', 'stjärna (star) — stj', 'norska (Norwegian) — rs'],
      },
      {
        label: 'The tj-sound /ɕ/',
        desc: 'A soft "sh"-like sound made further forward in the mouth than English "sh" — closer to where you make "y". Spelled: k (before soft vowels), tj, and sometimes kj.',
        ex: ['kör (drives) — k before ö', 'tjej (girl) — tj', 'tjugo (twenty) — tj', 'köpa (buy) — k before ö'],
      },
      {
        label: 'Telling them apart',
        desc: 'The sj-sound is made further back, with lip rounding, and sounds more like a breathy "wh-sh". The tj-sound is made further forward, no lip rounding, and sounds softer. In Uppsala, the sj-sound tends to be closer to a back-of-throat friction.',
        ex: ['sjö (lake, sj-sound) vs tjej (girl, tj-sound)', 'skola (school, hard sk) vs sky (sky, sj-sound) — note sk before hard vs soft vowel'],
      },
    ],
  },

  {
    title: 'Pitch accent — why Swedish sounds melodic',
    intro: 'Swedish is a pitch accent language. This means individual words can have two different melody patterns (tones), and the difference can occasionally change meaning. It is what gives Swedish its distinctive "sing-song" quality.',
    items: [
      {
        label: 'Accent 1 (single tone)',
        desc: 'A single falling tone. Common in monosyllabic words and some disyllabic words. The pitch rises slightly then falls within the stressed syllable.',
        ex: ['anden (the duck) — accent 1', 'buren (the cage) — accent 1', 'Most monosyllabic words: bil, katt, hus'],
      },
      {
        label: 'Accent 2 (double tone)',
        desc: 'A double-peak melody that rises on the stressed syllable then rises again on the next syllable. More common and covers most disyllabic words. Gives Swedish its characteristic rise-fall-rise pattern.',
        ex: ['anden (the spirit/ghost) — accent 2, same spelling, different melody', 'buren (carried) — accent 2', 'Most two-syllable words: stugan, flickan, huset'],
      },
      {
        label: 'What to do as a learner',
        desc: 'Do not worry about mastering pitch accent in the first year — it will develop naturally through listening and speaking. Swedes will understand you without it. The more Swedish radio and conversation you absorb, the more the melody will start to feel natural. What matters first: vowel length, the sj/tj distinction, and the soft/hard vowel consonant changes.',
        ex: ['Listen to SVT Nyheter or Sveriges Radio for natural pitch patterns', 'Radio Sweden på lätt svenska (lättsvenska.se) — slower, clearer speech'],
      },
    ],
  },

  {
    title: 'Common minimal pairs from your own notes',
    intro: 'These are the confusable pairs that came up in your actual lessons. Each one hinges on vowel quality or vowel length.',
    items: [
      {
        label: 'a vs å',
        desc: 'a is an open, unrounded front vowel. å is a rounded back vowel. They sound very different but learners from English-heavy environments sometimes mix them when reading.',
        ex: ['katt (cat) vs kåt (horny — careful!)', 'akt (act) vs åkt (travelled, supine of åka)', 'mat (food) vs mot (against)'],
      },
      {
        label: 'ä vs e',
        desc: 'Long ä (as in "bear") is more open than long e (as in Swedish "se" — closer to "aye"). Short ä and short e are very close and sometimes vary by dialect.',
        ex: ['häst (horse) vs hest (dialectal/archaic for hoarse)', 'läsa (to read) vs lesa (not a word — but easy to mishear)', 'mer (more) vs mär (mare, archaic)'],
      },
      {
        label: 'Long vs short — pairs from your notes',
        desc: 'These pairs hinge entirely on vowel length and double consonants. Getting the length right distinguishes them clearly.',
        ex: ['ful (ugly) vs full (full/drunk)', 'hål (hole) vs håll (hold / direction)', 'mat (food) vs matta (rug)', 'bor (lives) vs borr (drill)', 'glas (glass) vs glass (ice cream)', 'stor (big) vs torr (dry)'],
      },
    ],
  },

];

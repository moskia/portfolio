import type { Dictionary } from "../types";
import { links } from "./en";

export const fr: Dictionary = {
  meta: {
    title: "Amine Benkia — Portfolio",
    description:
      "Jeune diplômé ingénieur logiciel (ENSEEIHT). Développement full-stack et backend, SaaS en production, outils IA pour les développeurs.",
  },
  nav: {
    about:     "À propos",
    projects:  "Projets",
    resume:    "CV",
    interview: "Entretien",
  },
  home: {
    tagline:        "Ingénieur logiciel",
    locationLine:   "Paris · ENSEEIHT · Padoa",
    viewProjects:   "Voir mes projets",
    downloadResume: "Télécharger mon CV",
    inDepth:        "À découvrir",
    project:        "Projet",
    focusedOn:      "En ce moment",
  },
  about: {
    label:          "À propos",
    title:          "À propos",
    subtitle:       "Qui je suis, ce que je fais, et avec quoi je travaille.",
    basedIn:        "Basé à",
    reachMe:        "Me contacter :",
    writeOn:        "J'écris parfois sur",
    writeOnSuffix:  ".",
    skills:         "Compétences",
    languages:      "Langues",
  },
  projectsPage: {
    label:    "Projets",
    title:    "Mes projets",
    subtitle: "Du SaaS en production aux projets personnels — quelques réalisations qui comptent pour moi.",
  },
  resume: {
    label:      "CV",
    title:      "CV",
    subtitle:   "Parcours, formation, projets et compétences.",
    experience: "Expérience",
    education:  "Formation",
    projects:   "Projets",
    skills:     "Compétences",
    downloadEn: "↓ EN",
    downloadFr: "↓ FR",
    live:       "Démo",
  },
  interview: {
    label:    "Entretien",
    title:    "Entretien",
    subtitle: "Les questions qu'on me pose souvent — et comment j'y réponds.",
  },
  projectCard: {
    problem:  "Le problème",
    built:    "Ce que j'ai fait",
    learned:  "Ce que j'en retiens",
    github:   "GitHub",
    liveDemo: "Voir la démo",
  },
  profile: {
    name:     "Amine Benkia",
    title:    "Ingénieur logiciel",
    headline:
      "Jeune diplômé ingénieur logiciel · Backend / Full-Stack",
    bio:
      "Diplômé de l'ENSEEIHT, en stage de fin d'études chez Padoa. Je développe des fonctionnalités en production — TypeScript, Java, Node.js, Angular, PostgreSQL, Elasticsearch — et je cherche mon premier CDI. Ce qui m'intéresse : concevoir des solutions solides, optimiser les performances, et intégrer l'IA au quotidien des développeurs (revue de code, CI, assistants locaux).",
    location: "Paris, France",
    email:    "mabenkia612@gmail.com",
    focus: ["Revue de code IA", "Automatisation CI", "Full-stack"],
    spokenLanguages: [
      { name: "Français", level: "Courant" },
      { name: "Anglais",  level: "Professionnel (C1)" },
      { name: "Arabe",    level: "Natif" },
    ],
  },
  experience: [
    {
      role: "Stage de fin d'études — Ingénieur logiciel",
      company: "Padoa",
      period: "Mars 2026 – Aujourd'hui",
      description:
        "Développement full-stack en production sur une plateforme SaaS de santé au travail, utilisée par de grandes organisations. J'ai conçu et mis en production une fonctionnalité de gestion d'e-mails : logique métier, APIs REST, intégration Angular, tests automatisés. J'ai aussi optimisé des requêtes critiques, ce qui a réduit de 50 % la consommation CPU sur un flux de traitement en production. Migration PostgreSQL avec refactoring SQL/Elasticsearch, en gardant la compatibilité entre l'ancien et le nouveau modèle. Revues de code, tests unitaires, équipe Agile/Scrum.",
    },
    {
      role: "Stage — Cybersécurité & infrastructure",
      company: "CMI France",
      period: "Juin – Août 2025",
      description:
        "Automatisation du monitoring Active Directory en Bash et PowerShell : environ 30 % de vérifications manuelles en moins. Audit de plus de 500 comptes utilisateurs et renforcement des pratiques d'authentification. Rapport de sécurité remonté à l'équipe infra.",
    },
    {
      role: "Stage — Ingénieur logiciel",
      company: "Business Action Network",
      period: "Juin – Août 2024",
      description:
        "Backend Java/Spring Boot pour un workflow RH : gestion des accès, signatures électroniques, validation documentaire. APIs REST sécurisées, modélisation PostgreSQL, composants Angular côté interface. Un processus qui passait par e-mail est passé à quelques heures de traitement pour une centaine de collaborateurs.",
    },
  ],
  education: [
    {
      role: "Diplôme d'ingénieur en informatique",
      company: "ENSEEIHT – INP Toulouse",
      period: "2023 – 2026",
      description:
        "Algorithmique, structures de données, POO, systèmes distribués, réseaux, bases de données, cloud, conception logicielle.",
    },
    {
      role: "CPGE MPSI/MP",
      company: "Casablanca",
      period: "2020 – 2023",
      description:
        "Classes préparatoires — maths, informatique, physique.",
    },
  ],
  projects: [
    {
      id: "milo",
      title: "MILO — Assistant d'apprentissage IA",
      description:
        "Un assistant qui transforme la navigation web en synthèses, quiz et retours sur ce que vous avez appris — le tout en local.",
      problem:
        "Quand on apprend en ligne, les notes finissent éparpillées entre les onglets. La plupart des outils IA envoient tout sur leurs serveurs. Je voulais garder mes données chez moi tout en pouvant résumer, questionner et m'auto-évaluer sur ce que j'ai lu.",
      solution:
        "Monorepo TypeScript (pnpm) en trois modules : extension Chrome pour capturer et enrichir les contenus, socle partagé pour les contrats et la couche IA, application locale pour la recherche sémantique et les fonctions d'apprentissage. Indexation par embeddings (MiniLM), inférence locale via Gemini Nano.",
      learned:
        "Faire tourner un LLM en local, ce n'est pas juste brancher une API : il faut penser fenêtre de contexte, découpage des textes et stratégie de repli. Isoler la couche IA dès le départ a simplifié le reste.",
      stack: ["TypeScript", "Chrome MV3", "Gemini Nano", "RAG", "pnpm", "React"],
      github: links.github + "/MILO",
    },
    {
      id: "ai-code-reviewer",
      title: "AI Code Reviewer",
      description:
        "Outil de revue de code automatisée, branché sur la CI : analyse des PR, bugs, style, retour structuré.",
      problem:
        "La relecture manuelle prend du temps, et un prompt ChatGPT jeté sur un diff ne donne pas un résultat fiable d'une PR à l'autre. Il fallait quelque chose de reproductible, intégré au flux Git.",
      solution:
        "Pipeline en plusieurs étapes : récupération du dépôt via l'API GitHub, priorisation du code applicatif, résumés adaptés à la limite de tokens, puis appel LLM pour un JSON structuré (bugs, style, sécurité). API REST, Docker, tests, CI.",
      learned:
        "Le cœur du sujet, ce n'est pas le modèle — c'est préparer les entrées, borner la taille, et rendre la sortie actionnable pour celui qui relit la PR.",
      stack: ["TypeScript", "Python", "FastAPI", "Mistral AI", "GitHub API", "Docker", "CI/CD"],
      github: links.github + "/mistralai-code-reviewer",
    },
    {
      id: "ban-hr-workflow",
      title: "Workflow documentaire RH",
      description:
        "Application Spring Boot pour digitaliser le circuit de validation des documents RH chez BAN.",
      problem:
        "Tout passait par e-mail : lents, difficiles à tracer, une journée de délai pour un document. Pour une centaine de personnes, ça ne tenait plus.",
      solution:
        "Backend Spring Boot avec droits par rôle, signatures électroniques et validation en plusieurs étapes. Cycle de vie documentaire en PostgreSQL, règles métier portées par l'API, écrans Angular pour les utilisateurs.",
      learned:
        "Sur ce type de projet, tout repose sur le modèle d'états et les permissions. Bien cadrer le schéma SQL au départ évite de recoller les règles métier dans chaque endpoint.",
      stack: ["Java", "Spring Boot", "PostgreSQL", "Angular", "REST APIs", "RBAC"],
    },
  ],
  qanda: [
    {
      question: "Quels problèmes aimes-tu résoudre ?",
      answer:
        "Ceux où on voit clairement l'avant et l'après. Chez Padoa, j'ai remonté un problème de perf sur un pipeline en prod — logs, requêtes lentes, appels entre services — et on est arrivé à −50 % de CPU. J'aime autant ça que construire des outils qui font gagner du temps à l'équipe : revue de code assistée, CI, petits agents IA.",
    },
    {
      question: "Comment tu apprends une nouvelle techno ?",
      answer:
        "En faisant un vrai projet avec. Pour l'IA locale, j'ai monté MILO : extension Chrome, RAG, Gemini Nano sur la machine. Tu te heurtes vite aux limites réelles — taille de contexte, découpage, qualité des réponses — et tu progresses plus vite qu'en lisant seulement la doc.",
    },
    {
      question: "C'est quoi une bonne journée de travail pour toi ?",
      answer:
        "Enchaîner conception, code, tests et mise en prod sur la même feature, puis vérifier que ça tient avec de vraies données. Ou une journée debug : recouper les logs, profiler, remettre le service d'équilibre sans impact utilisateur.",
    },
    {
      question: "Pourquoi l'informatique ?",
      answer:
        "J'aime construire des choses utiles à d'autres. Tu peux creuser un sujet technique le matin et livrer quelque chose de visible l'après-midi — et le métier change assez vite pour ne pas s'ennuyer.",
    },
    {
      question: "Tu cherches quoi maintenant ?",
      answer:
        "Un premier CDI en développement, avec de la vraie prod et de la responsabilité de bout en bout. Je suis à l'aise en TypeScript/Node et Java/Spring Boot, et je veux continuer à monter en compétence sur l'IA appliquée au dev — RAG, LLM, outillage CI.",
    },
  ],
  resumePdf: "/resume-fr.pdf",
};

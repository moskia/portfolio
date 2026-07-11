import type { Dictionary } from "../types";
import { links } from "./en";

export const fr: Dictionary = {
  pageMeta: {
    home: {
      title: "Amine Benkia — Ingénieur logiciel",
      description:
        "Jeune diplômé ingénieur logiciel · développement full-stack, SaaS en production et outils IA pour les développeurs.",
    },
    about: {
      title: "À propos — Amine Benkia",
      description:
        "Diplômé de l'ENSEEIHT, basé à Paris. Développeur full-stack avec de l'expérience en SaaS en production et outils IA.",
    },
    projects: {
      title: "Projets — Amine Benkia",
      description:
        "Projets sélectionnés : MILO (assistant d'apprentissage IA local), AI Code Reviewer (revue de code par LLM), et un workflow documentaire RH Spring Boot.",
    },
    resume: {
      title: "CV — Amine Benkia",
      description:
        "Parcours, formation, projets et compétences — stages chez Padoa, CMI France et Business Action Network.",
    },
    qanda: {
      title: "Questions & Réponses — Amine Benkia",
      description:
        "Les questions qu'on me pose sur mon travail, ma façon d'apprendre et ce que je recherche.",
    },
  },
  nav: {
    about:     "À propos",
    projects:  "Projets",
    resume:    "CV",
    qanda:     "Q&R",
  },
  home: {
    tagline:        "Ingénieur logiciel",
    proofPoint:
      "Récemment : réduction de 50% de l'usage CPU sur un pipeline de production utilisé par des comptes comme Airbus et Thales, durant mon stage chez Padoa.",
    locationLine:   "Paris · ENSEEIHT · Padoa",
    viewProjects:   "Voir mes projets",
    downloadResume: "Télécharger mon CV",
    contactMe:      "Me contacter",
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
  qandaPage: {
    label:    "Q&R",
    title:    "Questions & Réponses",
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
      "Jeune ingénieur logiciel — je construis des systèmes full-stack en production et des outils de développement augmentés par l'IA.",
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
      role: "Stagiaire ingénieur logiciel — fin d'études",
      company: "Padoa",
      period: "Mars 2026 – Aujourd'hui",
      description:
        "Développement full-stack sur une plateforme SaaS de santé au travail en production. Livraison d'une fonctionnalité de bout en bout — API REST, logique métier, frontend Angular, tests automatisés et déploiement progressif par feature flags. Diagnostic et élimination d'un goulot d'étranglement critique d'accès aux données : −50 % de consommation CPU sur un pipeline à fort débit utilisé par des comptes grands groupes, dont Airbus et Thales. Migration de schéma PostgreSQL rétrocompatible sur plusieurs services, avec refonte de requêtes SQL et Elasticsearch.",
    },
    {
      role: "Stagiaire infrastructure & automatisation",
      company: "CMI France",
      period: "Juin – Août 2025",
      description:
        "Mise en place de workflows de supervision automatisés en Bash et Python, éliminant environ 30 % des vérifications manuelles récurrentes. Audit de plus de 500 comptes utilisateurs, identification d'une surface d'attaque potentielle de type LOLBin dans les configurations existantes, et rédaction d'un rapport de sécurité structuré ayant orienté les décisions de durcissement.",
    },
    {
      role: "Stage — Ingénieur logiciel",
      company: "Business Action Network",
      period: "Juin – Août 2024",
      description:
        "Remplacement d'un processus RH entièrement manuel, basé sur les e-mails, par un backend Spring Boot (RBAC, signatures électroniques, validation multi-étapes), réduisant le délai de traitement des documents d'une journée à quelques heures pour une centaine de collaborateurs. Modélisation du cycle de vie documentaire complet en PostgreSQL, avec règles métier appliquées à chaque étape via l'API REST.",
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
      title: "MILO — Compagnon d'apprentissage IA 100 % local",
      description:
        "Une extension Chrome et un agent local qui transforment la navigation web en apprentissage structuré — entièrement sur la machine, sans cloud.",
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
        "Un pipeline de revue de code propulsé par LLM qui analyse des dépôts et produit des diagnostics structurés.",
      problem:
        "La relecture manuelle prend du temps, et des prompts LLM ad hoc ne produisent pas de retour fiable et reproductible. Il fallait quelque chose de reproductible, intégré au flux de développement.",
      solution:
        "Pipeline en plusieurs étapes : récupération du dépôt via l'API GitHub, priorisation du code applicatif, résumés adaptés à la limite de tokens, puis appel LLM pour un JSON structuré (bugs, style, sécurité). API REST, Docker, tests, CI.",
      learned:
        "Le cœur du sujet, ce n'est pas le modèle — c'est préparer les entrées, borner la taille, et rendre la sortie actionnable pour celui qui relit la PR.",
      stack: ["TypeScript", "Python", "FastAPI", "Mistral AI", "GitHub API", "Docker", "CI/CD"],
      github: links.github + "/mistralai-code-reviewer",
    },
    {
      id: "hr-workflow",
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
      privateNote: "Code privé — développé pour Business Action Network.",
    },
  ],
  qanda: [
    {
      question: "Quels types de problèmes aimez-vous résoudre ?",
      answer:
        "Les problèmes de production avec un avant/après mesurable. Chez Padoa, j'ai remonté un goulot d'étranglement d'accès aux données — logs, profilage de requêtes lentes, chaînes d'appels inter-services — jusqu'à réduire de 50 % la consommation CPU d'un pipeline utilisé par des comptes grands groupes. C'est ce type de travail qui me motive : trouver la cause racine, corriger proprement, valider en production. J'aime tout autant construire des outils qui font gagner du temps aux équipes — revue de code par LLM, automatisation CI, assistants IA locaux.",
    },
    {
      question: "Comment abordez-vous l'apprentissage d'une nouvelle technologie ?",
      answer:
        "En construisant un vrai projet avec, plutôt qu'en lisant la documentation en vase clos. Pour comprendre l'IA embarquée, j'ai développé MILO : une extension Chrome complète avec pipeline RAG tournant en local via Gemini Nano. Cela m'a confronté en pratique aux limites de contexte, aux stratégies de découpage et aux mécanismes de repli. Je note aussi ce que j'apprends — mes notes deviennent mes données de test — ce qui maintient une boucle de feedback courte.",
    },
    {
      question: "À quoi ressemble une bonne journée de travail pour vous ?",
      answer:
        "Livrer quelque chose de bout en bout et le voir fonctionner en production. Une bonne journée, c'est concevoir une API, implémenter l'intégration frontend, écrire les tests et déployer derrière un feature flag — puis vérifier que tout se comporte correctement avec de vraies données. J'apprécie aussi les journées de débogage difficile : corréler les logs, profiler les requêtes, et rétablir le comportement du système sans impact utilisateur.",
    },
    {
      question: "Pourquoi le génie logiciel ?",
      answer:
        "J'aime construire des systèmes sur lesquels d'autres s'appuient. Le génie logiciel se situe au croisement de la logique, de la conception et de l'impact : on peut creuser un problème de performance le matin et livrer une fonctionnalité visible l'après-midi. Le domaine évolue en permanence, ce qui garantit qu'il y a toujours quelque chose de nouveau à apprendre et à appliquer.",
    },
    {
      question: "Que recherchez-vous pour la suite ?",
      answer:
        "Un premier CDI d'ingénieur logiciel où je peux porter des fonctionnalités de bout en bout en production. Je suis le plus à l'aise sur des backends TypeScript/Node.js et Java/Spring Boot, avec une expertise croissante en ingénierie augmentée par l'IA — RAG, intégrations LLM, outillage CI. Je veux continuer à travailler sur des systèmes qui comptent, dans une équipe qui valorise le code propre, le bon débogage et les livraisons fiables.",
    },
  ],
  resumePdf: "/resume-fr.pdf",
};

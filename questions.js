const questions = [
    {
        question: "L'engagement est essentiel pour obtenir les avantages de Scrum. Quelles actions montrent l'engagement des membres de l'équipe Scrum ? (2 réponses)",
        options: [
            { text: "A. Aider vos collègues de l'équipe Scrum", correct: true },
            { text: "B. Travailler tard", correct: false },
            { text: "C. Toujours livrer les éléments prévus dans le Sprint", correct: false },
            { text: "D. Faire de son mieux", correct: true }
        ]
    },
    {
        question: "Lorsque les développeurs déterminent qu'ils ne pourront pas terminer toutes les prévisions. Qui doit être présent lors de la révision et de l'ajustement du travail sélectionné pour le sprint ? (2 réponses)",
        options: [
            { text: "A. Le Scrum Master, le chef de projet et les développeurs", correct: false },
            { text: "B. Le Scrum Master et les développeurs", correct: false },
            { text: "C. Le Product Owner et les développeurs", correct: true },
            { text: "D. Le Product Owner et les parties prenantes", correct: true }
        ]
    },
    {
        question: "Quand un Sprint peut-il être annulé ? (1 réponse)",
        options: [
            { text: "A. Lorsque le service commercial a une nouvelle opportunité importante", correct: false },
            { text: "B. Lorsque l'objectif du Sprint devient obsolète", correct: true },
            { text: "C. Lorsqu'il est évident que tout ne sera pas terminé à la fin du Sprint", correct: false },
            { text: "D. Lorsque les développeurs déterminent que le plan produit est irréalisable", correct: false }
        ]
    },
    {
        question: "Qui fait partie de l'équipe Scrum ? (3 réponses)",
        options: [
            { text: "A. Scrum Master", correct: true },
            { text: "B. Product Owner", correct: true },
            { text: "C. Développeurs", correct: true },
            { text: "D. Chef de projet", correct: false }
        ]
    },
    {
        question: "Chaque équipe Scrum doit avoir : (1 réponse)",
        options: [
            { text: "A. Les compétences et habiletés nécessaires pour livrer un incrément dans un Sprint.", correct: true },
            { text: "B. Au moins un représentant de chaque département majeur, tel que l'assurance qualité, le développement et le marketing", correct: false },
            { text: "C. Un développeur principal et pas plus de 8 autres membres", correct: false }
        ]
    },
    {
        question: "Qui est responsable de la collaboration avec les parties prenantes ? (1 réponse)",
        options: [
            { text: "A. L'équipe Scrum.", correct: true },
            { text: "B. Le chef de projet.", correct: false },
            { text: "C. Le gestionnaire d'équipe", correct: false },
            { text: "D. Les développeurs", correct: false }
        ]
    },
    {
        question: "Quand un Sprint se termine-t-il ? (1 réponse)",
        options: [
            { text: "A. Lorsque toutes les tâches sont terminées par les développeurs", correct: false },
            { text: "B. Lorsque tous les éléments du Product Backlog respectent leur Définition de Fini", correct: false },
            { text: "C. Lorsque le Product Owner décide que suffisamment a été livré pour atteindre l'objectif du sprint", correct: false },
            { text: "D. Lorsque la rétrospective du Sprint est terminée", correct: true }
        ]
    },
    {
        question: "Lesquelles des affirmations suivantes sont vraies à propos du Scrum Master ? (2 réponses)",
        options: [
            { text: "A. Le Scrum Master enseigne à l'équipe Scrum à utiliser les timeboxes", correct: true },
            { text: "B. Le Scrum Master assigne des tâches aux développeurs lorsque ceux-ci ont besoin de travail", correct: false },
            { text: "C. Le Scrum Master aide ceux à l'extérieur de l'équipe à interagir avec l'équipe Scrum", correct: true },
            { text: "D. Lors de la revue de Sprint, le Scrum Master identifie le travail terminé et non terminé", correct: false }
        ]
    },
    {
        question: "Vous venez d'être embauché par une entreprise qui découvre Scrum. Votre direction vous a assigné le rôle de Scrum Master pour six nouvelles équipes Scrum, qui travailleront toutes sur un même produit. Quelles sont deux conditions que vous devriez rechercher dans ce scénario ? (2 réponses)",
        options: [
            { text: "A. Il devrait y avoir six Product Owners, rapportant à un Product Owner en chef.", correct: false },
            { text: "B. Chaque équipe Scrum devrait avoir un Product Backlog séparé", correct: false },
            { text: "C. Le produit a un seul Product Backlog.", correct: true },
            { text: "D. Il ne doit y avoir qu'un seul Product Owner.", correct: true }
        ]
    },
    {
        question: "Si des graphiques de burndown sont utilisés pour visualiser les progrès, que suivent-ils ? (1 réponse)",
        options: [
            { text: "A. Travail restant au fil du temps", correct: true },
            { text: "B. Coût accumulé", correct: false },
            { text: "C. Valeur métier accumulée livrée au client", correct: false },
            { text: "D. Productivité de chaque travailleur", correct: false }
        ]
    },
    {
        question: "Qui est responsable du suivi du travail restant par rapport à l'objectif du Sprint ? (1 réponse)",
        options: [
            { text: "A. Le chef de projet", correct: false },
            { text: "B. Les développeurs.", correct: true },
            { text: "C. Le Product Owner", correct: false },
            { text: "D. Le Scrum Master", correct: false }
        ]
    },
    {
        question: "Vrai ou Faux : Le Product Owner s'assure que les développeurs sélectionnent suffisamment d'éléments du Product Backlog pour un Sprint afin de satisfaire les parties prenantes. (1 réponse)",
        options: [
            { text: "A. Vrai", correct: false },
            { text: "B. Faux", correct: true }
        ]
    },
    {
        question: "À la fin d'un Sprint, un élément du Product Backlog travaillé pendant le Sprint ne respecte pas la Définition de Fini. Quelles sont les deux actions à prendre avec cet élément non terminé ? (2 réponses)",
        options: [
            { text: "A. Le mettre dans le Product Backlog pour que le Product Owner décide quoi en faire", correct: true },
            { text: "B. Revoir l'élément, ajouter la partie faite à la vélocité et créer une histoire pour le travail restant", correct: false },
            { text: "C. Si les parties prenantes sont d'accord, le Product Owner peut l'accepter et le publier aux utilisateurs", correct: false },
            { text: "D. Ne pas inclure l'élément dans l'incrément de ce Sprint", correct: true }
        ]
    },
    {
        question: "Qu'est-ce qui améliore la transparence d'un incrément ? (1 réponse)",
        options: [
            { text: "A. Mettre à jour correctement les tâches du Sprint dans l'outil de suivi électronique", correct: false },
            { text: "B. Faire un rapport quotidien des progrès du Sprint aux parties prenantes", correct: false },
            { text: "C. Suivre et estimer tous les travaux non terminés pour être complétés dans un Sprint de stabilisation", correct: false },
            { text: "D. Faire tout le travail nécessaire pour respecter la Définition de Fini", correct: true }
        ]
    },
    {
        question: "Qui crée la Définition de Fini ? (1 réponse)",
        options: [
            { text: "A. Le Product Owner", correct: false },
            { text: "B. Le Scrum Master", correct: false },
            { text: "C. Les développeurs", correct: false },
            { text: "D. L'équipe Scrum", correct: true }
        ]
    },
    {
        question: "Cinq nouvelles équipes Scrum ont été créées pour développer un produit. Quelques développeurs d'une des équipes Scrum demandent au Scrum Master comment coordonner leur travail avec les autres équipes. Que doit faire le Scrum Master ? (1 réponse)",
        options: [
            { text: "A. Leur enseigner qu'il est de leur responsabilité de travailler avec les autres équipes pour créer un incrément intégré qui inclut le travail des cinq équipes.", correct: true },
            { text: "B. Rassembler les tâches du Sprint des équipes à la fin de leur planification et fusionner le tout dans un plan consolidé pour le Sprint", correct: false },
            { text: "C. Visiter les cinq équipes chaque jour pour inspecter si leurs Sprint Backlogs sont alignés", correct: false },
            { text: "D. Enseigner au Product Owner à travailler avec les développeurs principaux pour ordonner le Product Backlog de manière à éviter les chevauchements pendant un Sprint", correct: false }
        ]
    },
    {
        question: "Quel est le rôle ou le but de la direction dans Scrum ? (1 réponse)",
        options: [
            { text: "A. Fournir aux équipes Scrum des connaissances et des ressources qui les aident à s'améliorer.", correct: true },
            { text: "B. Identifier et retirer les personnes qui ne travaillent pas assez dur", correct: false },
            { text: "C. Surveiller en permanence les niveaux de personnel de l'équipe Scrum", correct: false },
            { text: "D. Surveiller la productivité des développeurs", correct: false }
        ]
    },
    {
        question: "Qui fait le travail nécessaire pour s'assurer que les éléments du Product Backlog respectent la Définition de Fini ? (1 réponse)",
        options: [
            { text: "A. Le Scrum Master", correct: false },
            { text: "B. Le Product Owner", correct: false },
            { text: "C. L'équipe Scrum", correct: false },
            { text: "D. Les développeurs", correct: true }
        ]
    },
    {
        question: "Quel est le rôle du Scrum Master pendant la rétrospective du Sprint ? (1 réponse)",
        options: [
            { text: "A. Prioriser les actions résultantes", correct: false },
            { text: "B. Résumer et rapporter les discussions à la direction", correct: false },
            { text: "C. Participer en tant que membre de l'équipe Scrum et faciliter si nécessaire", correct: true },
            { text: "D. Agir en tant que scribe pour capturer les réponses de l'équipe Scrum", correct: false }
        ]
    },
    {
        question: "Le Product Backlog est ordonné par : (1 réponse)",
        options: [
            { text: "A. Le Product Owner, avec les éléments les plus précieux placés en haut", correct: true },
            { text: "B. Affectation aléatoire", correct: false },
            { text: "C. Risque, où les éléments les plus sûrs sont en haut et les éléments plus risqués en bas", correct: false },
            { text: "D. Taille, où les petits éléments sont en haut et les plus grands en bas", correct: false }
        ]
    },
    {
        question: "Quel livrable de la planification du Sprint fournit à l'équipe Scrum un objectif et une direction primordiale pour le Sprint ? (1 réponse)",
        options: [
            { text: "A. Compte-rendu de la revue du Sprint", correct: false },
            { text: "B. Le Sprint Backlog", correct: false },
            { text: "C. L'objectif du Sprint", correct: true },
            { text: "D. Le plan de release", correct: false }
        ]
    },
    {
        question: "Pourquoi le Product Owner souhaite-t-il que les développeurs adhèrent à la Définition de Fini ? (1 réponse)",
        options: [
            { text: "A. Pour prévoir la productivité de l'équipe au fil du temps", correct: false },
            { text: "B. Pour avoir une transparence complète sur ce qui a été fait à la fin de chaque Sprint", correct: true },
            { text: "C. Pour savoir ce que l'équipe livrera au cours des trois prochains Sprints", correct: false },
            { text: "D. Pour pouvoir réprimander l'équipe si elle ne respecte pas l'objectif de vélocité", correct: false }
        ]
    },
    {
        question: "Le PDG demande aux développeurs d'ajouter un élément 'très important' à un Sprint en cours. Que doivent faire les développeurs ? (1 réponse)",
        options: [
            { text: "A. Ajouter l'élément au Sprint actuel sans aucun ajustement", correct: false },
            { text: "B. Informer le Product Owner pour qu'il travaille avec le PDG", correct: true },
            { text: "C. Ajouter l'élément au Sprint actuel et retirer un élément de taille équivalente", correct: false },
            { text: "D. Ajouter l'élément au prochain Sprint", correct: false }
        ]
    },
    {
        question: "Quel est le but d'une revue de Sprint ? (1 réponse)",
        options: [
            { text: "A. Prendre le temps de juger la validité du projet", correct: false },
            { text: "B. Inspecter l'incrément produit avec les parties prenantes et recueillir des retours", correct: true },
            { text: "C. Examiner les activités et processus de l'équipe Scrum pendant le Sprint", correct: false },
            { text: "D. Construire une équipe de Sprint", correct: false }
        ]
    },
    {
        question: "Lorsque plusieurs équipes Scrum travaillent sur un même produit, qu'est-ce qui décrit le mieux la Définition de Fini ? (1 réponse)",
        options: [
            { text: "A. Chaque équipe Scrum utilise la sienne, mais doit la rendre claire pour les autres équipes", correct: false },
            { text: "B. Chaque équipe Scrum définit et utilise sa propre Définition de Fini", correct: false },
            { text: "C. Les équipes Scrum doivent définir et se conformer à la même Définition de Fini", correct: true },
            { text: "D. Les Scrum Masters de chaque équipe définissent une Définition de Fini commune", correct: false }
        ]
    },
    {
        question: "Quelles sont deux façons dont les questions de conformité réglementaire sont traitées dans Scrum ? (2 réponses)",
        options: [
            { text: "A. Elles sont traitées en même temps que le développement fonctionnel du produit", correct: false },
            { text: "B. Elles sont discutées, déterminées et documentées avant le développement des fonctionnalités", correct: true },
            { text: "C. Elles sont traitées par une équipe séparée responsable des questions de conformité", correct: false },
            { text: "D. Elles sont ajoutées au Product Backlog et traitées dans les premiers Sprints", correct: true }
        ]
    },
    {
        question: "Que signifie dire qu'un événement a une timebox ? (1 réponse)",
        options: [
            { text: "A. L'événement doit se produire à un moment précis", correct: false },
            { text: "B. L'événement ne peut pas durer plus d'un temps maximum", correct: true },
            { text: "C. L'événement doit se produire avant un moment donné", correct: false },
            { text: "D. L'événement doit durer au moins un minimum de temps", correct: false }
        ]
    },
    {
        question: "Choisissez deux responsabilités des développeurs autogérés. (2 réponses)",
        options: [
            { text: "A. Placer les éléments du Product Backlog pour le Sprint", correct: true },
            { text: "B. Rapporter les progrès quotidiens aux parties prenantes", correct: false },
            { text: "C. Réaliser le travail prévu dans le Sprint Backlog", correct: true },
            { text: "D. Réorganiser le Product Backlog", correct: false },
            { text: "E. Augmenter la vélocité", correct: false }
        ]
    },
    {
        question: "Qui doit s'assurer que tous les membres de l'équipe Scrum accomplissent leurs tâches pour le Sprint ? (1 réponse)",
        options: [
            { text: "A. Le chef de projet", correct: false },
            { text: "B. Le Product Owner", correct: false },
            { text: "C. Le Scrum Master", correct: false },
            { text: "D. L'équipe Scrum", correct: true },
            { text: "E. Toutes les réponses", correct: false }
        ]
    },
    {
        question: "Quelques Sprints après le début d'un projet, le Product Owner informe le Scrum Master qu'une partie prenante clé a commencé à utiliser le produit et est mécontente de sa qualité. Quelles sont les deux bonnes options pour le Scrum Master ? (2 réponses)",
        options: [
            { text: "A. Attendre d'en parler lors de la rétrospective du Sprint", correct: false },
            { text: "B. Coacher le Product Owner pour parler aux développeurs de cette préoccupation", correct: true },
            { text: "C. Apporter la préoccupation aux testeurs pour améliorer la vérification du produit", correct: false },
            { text: "D. Encourager le Product Owner à ajouter des spécifications de qualité", correct: true },
            { text: "E. Expliquer au Product Owner que ce sont les développeurs qui décident des normes", correct: false }
        ]
    },
    {
        question: "Pourquoi le Product Owner doit-il être présent au Daily Scrum ? (1 réponse)",
        options: [
            { text: "A. Il/Elle n'a pas besoin d'être là", correct: true },
            { text: "B. Pour entendre les obstacles dans les fonctionnalités", correct: false },
            { text: "C. Pour représenter le point de vue des parties prenantes", correct: false },
            { text: "D. Pour participer en tant que membre de l'équipe Scrum", correct: false }
        ]
    },
    {
        question: "Quelle approche est la meilleure pour les équipes Scrum afin de produire des incréments de valeur ? (1 réponse)",
        options: [
            { text: "A. Chaque membre de l'équipe Scrum travaille de manière indépendante sur une couche du système", correct: false },
            { text: "B. Chaque développeur travaille sur le composant où il pense pouvoir contribuer", correct: true },
            { text: "C. Chaque équipe Scrum est responsable du développement fonctionnel du début à la fin", correct: false },
            { text: "D. Chaque équipe Scrum travaille sur un ensemble indépendant de composants", correct: false }
        ]
    },
    {
        question: "Que se passe-t-il si l'équipe Scrum ne peut pas terminer son travail à la fin du Sprint ? (1 réponse)",
        options: [
            { text: "A. La durée du Sprint reste inchangée et l'équipe Scrum apprend et s'adapte", correct: true },
            { text: "B. Le Sprint est prolongé temporairement pour garantir la fin des tâches", correct: false },
            { text: "C. Le Sprint est prolongé et les Sprints futurs suivent cette nouvelle durée", correct: false }
        ]
    },
    {
        question: "La Définition de Fini sert à trois fins. Lesquelles ? (3 réponses)",
        options: [
            { text: "A. Décrire le but, l'objectif et la timebox de chaque événement Scrum", correct: false },
            { text: "B. Guider les développeurs sur le nombre d'éléments du Product Backlog à sélectionner", correct: true },
            { text: "C. Décrire le travail qui doit être presque terminé avant la fin du Sprint", correct: false },
            { text: "D. Créer une compréhension commune de quand le travail est terminé", correct: true },
            { text: "E. Augmenter la transparence", correct: true }
        ]
    },
    {
        question: "Vrai ou Faux : Les développeurs ne rencontrent pas les parties prenantes ; seul le Product Owner rencontre les parties prenantes. (1 réponse)",
        options: [
            { text: "A. Vrai", correct: false },
            { text: "B. Faux", correct: true }
        ]
    },
    {
        question: "Combien de travail une équipe de développement doit-elle accomplir sur un élément du Product Backlog sélectionné pour un Sprint ? (1 réponse)",
        options: [
            { text: "A. Autant qu'elle a dit au Product Owner qu'elle ferait pour chaque élément en conformité avec la Définition de Fini", correct: true },
            { text: "B. Tout le travail de développement et au moins un peu de tests", correct: false },
            { text: "C. Une quantité proportionnelle de temps pour l'analyse, la conception, la programmation, les tests et la documentation", correct: false },
            { text: "D. Autant qu'elle peut en faire dans le Sprint, tout travail restant sera transféré au Sprint suivant", correct: false }
        ]
    },
    {
        question: "Lorsque les développeurs commencent à travailler pendant le Sprint, ils réalisent qu'ils ont sélectionné trop de travail pour terminer le Sprint. Que doivent-ils faire ? (1 réponse)",
        options: [
            { text: "A. Trouver une autre équipe Scrum pour lui donner le travail excédentaire", correct: false },
            { text: "B. Réduire la Définition de Fini et terminer tous les éléments du Product Backlog selon la nouvelle définition", correct: false },
            { text: "C. Dès que possible dans le Sprint, travailler avec le Product Owner pour retirer certains éléments du Product Backlog", correct: true },
            { text: "D. Informer le Product Owner lors de la revue de Sprint, mais avant la démonstration", correct: false }
        ]
    },
    {
        question: "Lesquels des services suivants sont appropriés pour un Scrum Master en ce qui concerne le Daily Scrum ? (1 réponse)",
        options: [
            { text: "A. Diriger les discussions", correct: false },
            { text: "B. S'assurer que chaque membre de l'équipe a répondu aux trois questions", correct: false },
            { text: "C. Suivre si chaque développeur a eu l'occasion de parler", correct: false },
            { text: "D. Apprendre aux développeurs à maintenir le Daily Scrum en moins de 15 minutes", correct: true }
        ]
    },
    {
        question: "Les développeurs sont autogérés. Que gèrent-ils ? (1 réponse)",
        options: [
            { text: "A. Durée du Sprint", correct: false },
            { text: "B. Quand livrer en fonction des progrès réalisés", correct: false },
            { text: "C. Parties prenantes pour la revue de Sprint", correct: false },
            { text: "D. Ordonnancement du Product Backlog", correct: false },
            { text: "E. Le Sprint Backlog", correct: true }
        ]
    },
    {
        question: "Quels trois des événements suivants sont limités dans le temps dans Scrum ? (3 réponses)",
        options: [
            { text: "A. Planification de la release", correct: false },
            { text: "B. Rétrospective de la release", correct: false },
            { text: "C. Sprint Retrospective", correct: true },
            { text: "D. Tests du Sprint", correct: false },
            { text: "E. Sprint Planning", correct: true },
            { text: "F. Daily Scrum", correct: true }
        ]
    },
    {
        question: "Un Product Owner demande des conseils au Scrum Master sur l'estimation du travail dans Scrum. Quel conseil un Scrum Master devrait-il donner ? (1 réponse)",
        options: [
            { text: "A. Les estimations sont faites par les personnes qui réalisent le travail", correct: true },
            { text: "B. Les estimations sont faites par le Product Owner, mais vérifiées par les développeurs", correct: false },
            { text: "C. Les éléments du Product Backlog doivent être estimés en points d'histoire", correct: false },
            { text: "D. Les estimations doivent être en unités relatives", correct: false }
        ]
    },
    {
        question: "Vrai ou Faux : Scrum a un rôle appelé 'Chef de projet'. (1 réponse)",
        options: [
            { text: "A. Vrai", correct: false },
            { text: "B. Faux", correct: true }
        ]
    },
    {
        question: "Quand commence le deuxième Sprint ? (1 réponse)",
        options: [
            { text: "A. Après que les éléments du Product Backlog pour le deuxième Sprint ont été sélectionnés", correct: false },
            { text: "B. Après que le client a terminé les tests d'acceptation du premier Sprint", correct: false },
            { text: "C. Immédiatement après le premier Sprint", correct: true },
            { text: "D. Une fois que les modifications architecturales pour le deuxième Sprint sont approuvées", correct: false }
        ]
    },
    {
        question: "Quelles sont les trois façons dont Scrum favorise l'autogestion ? (3 réponses)",
        options: [
            { text: "A. En protégeant l'équipe Scrum par le Scrum Master", correct: false },
            { text: "B. En permettant à l'équipe Scrum de décider du travail à faire dans le Sprint", correct: true },
            { text: "C. En étant un cadre de travail léger", correct: true },
            { text: "D. En supprimant les titres pour les membres de l'équipe Scrum", correct: true }
        ]
    },
    {
        question: "Quand est créé le Sprint Backlog ? (1 réponse)",
        options: [
            { text: "A. Pendant le raffinement", correct: false },
            { text: "B. Pendant la planification du Sprint ou avant", correct: true },
            { text: "C. Pendant la rétrospective du Sprint", correct: false },
            { text: "D. Pendant la revue de Sprint", correct: false }
        ]
    },
    {
        question: "Quelle affirmation décrit le mieux la responsabilité du Product Owner ? (1 réponse)",
        options: [
            { text: "A. Diriger les développeurs", correct: false },
            { text: "B. Empêcher les parties prenantes de distraire les développeurs", correct: false },
            { text: "C. S'assurer que le travail répond aux engagements envers les parties prenantes", correct: false },
            { text: "D. Maximiser la valeur du travail effectué par l'équipe Scrum", correct: true }
        ]
    },
    {
        question: "Quels trois des éléments suivants sont des boucles de rétroaction dans Scrum ? (3 réponses)",
        options: [
            { text: "A. Sprint Retrospective", correct: true },
            { text: "B. Planification de la release", correct: false },
            { text: "C. Daily Scrum", correct: true },
            { text: "D. Sprint Review", correct: true },
            { text: "E. Réunion de raffinement", correct: false }
        ]
    },
    {
        question: "Quelle tactique une équipe Scrum devrait-elle utiliser pour diviser un groupe de 100 personnes en plusieurs équipes Scrum ? (1 réponse)",
        options: [
            { text: "A. Demander aux personnes de se diviser en équipes", correct: true },
            { text: "B. Demander au Product Owner d'assigner les personnes aux équipes", correct: false },
            { text: "C. Créer des équipes basées sur leurs compétences dans plusieurs couches (comme base de données, UI, etc.)", correct: false }
        ]
    },
    {
        question: "Quels sujets doivent être discutés dans la revue de Sprint ? (1 réponse)",
        options: [
            { text: "A. Le processus Scrum et comment il a été utilisé pendant le Sprint", correct: false },
            { text: "B. Les pratiques de codage et d'ingénierie", correct: false },
            { text: "C. L'incrément du produit", correct: true },
            { text: "D. Tous les sujets ci-dessus", correct: false }
        ]
    },
    {
        question: "Vrai ou Faux : Le but d'un Sprint est de produire un incrément précieux et utile. (1 réponse)",
        options: [
            { text: "A. Vrai", correct: true },
            { text: "B. Faux", correct: false }
        ]
    },
    {
        question: "Vrai ou Faux : Une équipe Scrum à haute performance garantit que chaque incrément est complet en réalisant un Sprint de release. (1 réponse)",
        options: [
            { text: "A. Vrai", correct: false },
            { text: "B. Faux", correct: true }
        ]
    },
    {
        question: "Quelle est la meilleure description du Product Backlog ? (1 réponse)",
        options: [
            { text: "A. Il est autorisé à grandir et à changer à mesure que l'on en apprend davantage sur le produit et ses clients.", correct: true },
            { text: "B. Il fournit juste assez d'informations pour permettre à une équipe Scrum de commencer la phase de conception", correct: false },
            { text: "C. Il est figé pour suivre les processus de gestion des changements", correct: false },
            { text: "D. Il contient toutes les tâches et exigences prévisibles pour que l'équipe Scrum développe et maintienne un plan complet de projet", correct: false }
        ]
    },
    {
        question: "Quels sujets sont appropriés pour la rétrospective de Sprint ? (2 réponses)",
        options: [
            { text: "A. Documenter les critères d'acceptation pour les éléments du prochain Sprint", correct: false },
            { text: "B. Comment l'équipe collabore", correct: true },
            { text: "C. Identifier les améliorations prioritaires du processus pour le prochain Sprint", correct: true },
            { text: "D. L'ordre des éléments dans le Product Backlog", correct: false }
        ]
    },
    {
        question: "Quand un objectif de Sprint doit-il être créé ? (1 réponse)",
        options: [
            { text: "A. Un objectif de Sprint n'est pas obligatoire dans Scrum", correct: false },
            { text: "B. Il doit avoir été créé dans le Sprint précédent lors du raffinement du Product Backlog", correct: false },
            { text: "C. Pendant la planification du Sprint", correct: true },
            { text: "D. Il doit être établi avant la planification du Sprint pour commencer la planification", correct: false },
            { text: "E. À tout moment pendant le Sprint", correct: false }
        ]
    },
    {
        question: "Quels sont deux résultats attendus du Daily Scrum ? (2 réponses)",
        options: [
            { text: "A. Un rapport de statut pour la direction indiquant ce que chaque individu a fait", correct: false },
            { text: "B. Identification des obstacles pouvant empêcher les développeurs d'atteindre l'objectif du Sprint", correct: true },
            { text: "C. Une compréhension partagée du travail le plus important à entreprendre", correct: true },
            { text: "D. Une mise à jour des tâches terminées et du travail restant pour que le Scrum Master puisse planifier le jour suivant", correct: false }
        ]
    },
    {
        question: "Qui détermine le nombre d'éléments du Product Backlog que les développeurs sélectionnent pour un Sprint ? (1 réponse)",
        options: [
            { text: "A. Les développeurs", correct: true },
            { text: "B. Le Scrum Master", correct: false },
            { text: "C. Le Product Owner", correct: false },
            { text: "D. Les parties prenantes participant à la planification du Sprint", correct: false }
        ]
    },
    {
        question: "Quelle affirmation décrit le mieux le Sprint Backlog en tant que résultat de la planification du Sprint ? (1 réponse)",
        options: [
            { text: "A. Chaque élément a un responsable désigné", correct: false },
            { text: "B. Il est ordonné par le Product Owner", correct: false },
            { text: "C. C'est le plan des développeurs pour le Sprint", correct: true },
            { text: "D. Chaque tâche est estimée en heures", correct: false },
            { text: "E. C'est une liste complète de tout le travail à effectuer dans un Sprint", correct: false }
        ]
    },
    {
        question: "Comment les éléments du Product Backlog doivent-ils être choisis lorsque plusieurs équipes Scrum travaillent à partir du même Product Backlog ? (1 réponse)",
        options: [
            { text: "A. Les développeurs sélectionnent le travail en accord avec le Product Owner", correct: true },
            { text: "B. Chaque équipe Scrum prend un nombre égal d'éléments", correct: false },
            { text: "C. Le Product Owner décide", correct: false },
            { text: "D. Le Product Owner doit fournir à chaque équipe son propre Product Backlog", correct: false },
            { text: "E. L'équipe Scrum avec la plus grande vélocité sélectionne les éléments en premier", correct: false }
        ]
    },
    {
        question: "Quand le Sprint suivant commence-t-il ? (1 réponse)",
        options: [
            { text: "A. Immédiatement après la prochaine planification de Sprint", correct: false },
            { text: "B. Immédiatement après la conclusion du Sprint précédent", correct: true },
            { text: "C. Lorsque le Product Owner est prêt", correct: false },
            { text: "D. Le lundi suivant la revue de Sprint", correct: false }
        ]
    },
    {
        question: "Quelles techniques le Scrum Master pourrait-il utiliser lorsque l'équipe Scrum est prise dans un désaccord interne sur les pratiques agiles à appliquer ? (2 réponses)",
        options: [
            { text: "A. Impliquer toute l'équipe Scrum dans la prise de décision", correct: true },
            { text: "B. Demander aux membres de l'équipe de soumettre la question aux ressources humaines de l'entreprise", correct: false },
            { text: "C. Demander à un coach agile externe ce qu'il recommande", correct: false },
            { text: "D. Utiliser des techniques de coaching, telles que des questions ouvertes et l'écoute active", correct: true }
        ]
    },
    {
        question: "Qui est responsable de la gestion de l'avancement du travail pendant un Sprint ? (1 réponse)",
        options: [
            { text: "A. Le membre le plus junior de l'équipe", correct: false },
            { text: "B. Les développeurs", correct: true },
            { text: "C. Le Product Owner", correct: false },
            { text: "D. Le Scrum Master", correct: false }
        ]
    },
    {
        question: "Pendant le Sprint, quel est le rôle du Scrum Master ? (2 réponses)",
        options: [
            { text: "A. S'assurer que le Product Owner participe à tous les événements Scrum", correct: false },
            { text: "B. Faciliter les opportunités d'inspection et d'adaptation si nécessaire", correct: true },
            { text: "C. Assigner des tâches à l'équipe Scrum", correct: false },
            { text: "D. Suivre les progrès des développeurs", correct: false },
            { text: "E. Coacher les membres de l'équipe en autogestion", correct: true },
            { text: "F. Escalader les conflits de l'équipe aux managers fonctionnels", correct: false }
        ]
    },
    {
        question: "Quelles deux choses l'équipe Scrum doit-elle faire pendant le premier Sprint ? (2 réponses)",
        options: [
            { text: "A. Créer au moins un incrément précieux et utile", correct: true },
            { text: "B. Préparer un plan pour le reste du projet", correct: false },
            { text: "C. Analyser, décrire et documenter les exigences pour les prochains Sprints", correct: false },
            { text: "D. Construire au moins une partie de fonctionnalité utile", correct: true },
            { text: "E. Définir les principales caractéristiques du produit et un plan de release", correct: false }
        ]
    },
    {
        question: "Quelle est la raison principale pour laquelle le Scrum Master doit être présent au Daily Scrum ? (1 réponse)",
        options: [
            { text: "A. Noter les modifications au Sprint Backlog, y compris l'ajout de nouveaux éléments", correct: false },
            { text: "B. S'assurer que chaque membre de l'équipe répond aux trois questions", correct: false },
            { text: "C. Il n'a pas besoin d'être là ; il doit seulement s'assurer que les développeurs tiennent un Daily Scrum", correct: true },
            { text: "D. Rassembler les informations de statut et de progression pour les rapporter à la direction", correct: false }
        ]
    },
    {
        question: "Lors de la planification du Sprint, le Product Owner et les développeurs ne parviennent pas à s'entendre sur les éléments de plus haute priorité du Product Backlog. Quelle action le Scrum Master devrait-il soutenir ? (2 réponses)",
        options: [
            { text: "A. Prévoir les éléments du Product Backlog susceptibles de satisfaire l'objectif du Sprint", correct: true },
            { text: "B. Annuler le Sprint. Envoyer l'équipe entière à une formation Scrum avancée", correct: false },
            { text: "C. Prolonger l'événement de planification du Sprint jusqu'à ce qu'un nombre suffisant d'éléments soit compris", correct: false },
            { text: "D. Demander à chacun de prendre le temps nécessaire pour analyser le Product Backlog", correct: false },
            { text: "E. Discuter de la situation lors de la prochaine rétrospective pour éviter sa récurrence", correct: true }
        ]
    },
    {
        question: "Vrai ou Faux : Plusieurs équipes Scrum travaillant sur le même produit sélectionnent le travail à partir du même Product Backlog. (1 réponse)",
        options: [
            { text: "A. Vrai", correct: true },
            { text: "B. Faux", correct: false }
        ]
    },
    {
        question: "Quelles sont deux façons efficaces pour l'équipe Scrum de rendre visibles les exigences non fonctionnelles ? (2 réponses)",
        options: [
            { text: "A. Les ajouter au Product Backlog pour assurer la transparence", correct: true },
            { text: "B. Exécuter les tests d'intégration et de régression avant la fin du Sprint", correct: false },
            { text: "C. Les inclure dans la Définition de Fini pour qu'elles soient prises en compte à chaque Sprint", correct: true },
            { text: "D. Les mettre sur une liste séparée sur le tableau Scrum, visible de tous", correct: false }
        ]
    },
    {
        question: "Qui est responsable d'exprimer clairement les éléments du Product Backlog ? (1 réponse)",
        options: [
            { text: "A. Le Scrum Master", correct: false },
            { text: "B. Le Product Owner", correct: true },
            { text: "C. Le Scrum Master, ou il peut demander aux développeurs de le faire", correct: false },
            { text: "D. L'analyste métier qui représente le Product Owner", correct: false }
        ]
    },
    {
        question: "La documentation utilisateur fait partie de votre Définition de Fini, mais il n'y a pas assez de rédacteurs techniques. Que doit faire l'équipe Scrum ? (1 réponse)",
        options: [
            { text: "A. Les développeurs de l'équipe Scrum doivent rédiger la documentation utilisateur", correct: true },
            { text: "B. Former une équipe séparée de rédacteurs techniques", correct: false },
            { text: "C. Attendre d'avoir un rédacteur technique dans l'équipe pour s'en occuper", correct: false },
            { text: "D. Laisser la documentation utilisateur inachevée jusqu'au dernier Sprint", correct: false }
        ]
    },
    {
        question: "Le Scrum Master observe le Product Owner en difficulté pour ordonner le Product Backlog. Quelle action le Scrum Master doit-il prendre ? (1 réponse)",
        options: [
            { text: "A. Encourager le Product Owner à travailler avec les développeurs pour voir quels éléments sont les plus rapides à mettre en œuvre", correct: false },
            { text: "B. Suggérer au Product Owner de prolonger le Sprint pour avoir plus de temps", correct: false },
            { text: "C. Offrir de l'aide au Product Owner pour comprendre que l'objectif est de maximiser la valeur", correct: true },
            { text: "D. Présenter au Product Owner un Product Backlog ordonné", correct: false }
        ]
    },
    {
        question: "Qui doit savoir le plus sur la progression vers l'objectif produit ? (1 réponse)",
        options: [
            { text: "A. Le chef de projet", correct: false },
            { text: "B. Les développeurs", correct: false },
            { text: "C. Le Scrum Master", correct: false },
            { text: "D. Le Product Owner", correct: true }
        ]
    },
    {
        question: "Comment la direction externe à l'équipe Scrum est-elle impliquée dans le Daily Scrum ? (1 réponse)",
        options: [
            { text: "A. Les managers assistent au Daily Scrum pour observer", correct: false },
            { text: "B. Les managers ne sont pas tenus d'assister au Daily Scrum", correct: true },
            { text: "C. Les managers assistent au Daily Scrum pour donner des retours", correct: false },
            { text: "D. Les managers assistent au Daily Scrum pour guider l'équipe", correct: false }
        ]
    },
    {
        question: "Qui commence le Daily Scrum ? (1 réponse)",
        options: [
            { text: "A. Celui que les développeurs décident de désigner", correct: true },
            { text: "B. Le Scrum Master", correct: false },
            { text: "C. Le Product Owner", correct: false },
            { text: "D. Le membre le plus senior des développeurs", correct: false }
        ]
    },
    {
        question: "Quel travail est requis des développeurs pour compléter un élément du Product Backlog sélectionné pendant la planification du Sprint ? (1 réponse)",
        options: [
            { text: "A. Aussi peu que possible pour garantir une livraison rapide", correct: false },
            { text: "B. Travail complet et tests jusqu'à la fin du Sprint", correct: false },
            { text: "C. Autant que nécessaire pour respecter la Définition de Fini de l'équipe Scrum", correct: true },
            { text: "D. Travail suffisant pour assurer un niveau de performance acceptable", correct: false }
        ]
    },
    {
        question: "Quelles deux façons de créer des équipes Scrum sont conformes aux valeurs de Scrum ? (2 réponses)",
        options: [
            { text: "A. Les équipes existantes proposent comment elles souhaitent s'organiser", correct: true },
            { text: "B. Demander aux managers de nommer les équipes", correct: false },
            { text: "C. Permettre aux parties prenantes de choisir les équipes", correct: false },
            { text: "D. Rassembler toutes les personnes et les laisser s'organiser en équipes Scrum", correct: true }
        ]
    },
    {
        question: "Qui est responsable de la dimension des éléments du Product Backlog ? (1 réponse)",
        options: [
            { text: "A. Les développeurs uniquement", correct: false },
            { text: "B. Le Scrum Master avec l'aide du Product Owner", correct: false },
            { text: "C. Les parties prenantes", correct: false },
            { text: "D. Le Product Owner avec la contribution des développeurs", correct: true }
        ]
    },
    {
        question: "Qui peut annuler un Sprint ? (1 réponse)",
        options: [
            { text: "A. Le chef de projet", correct: false },
            { text: "B. Le Product Owner", correct: true },
            { text: "C. Les développeurs", correct: false },
            { text: "D. Le Scrum Master", correct: false }
        ]
    },
    {
        question: "Vous êtes le Scrum Master d'un nouveau produit nécessitant 45 personnes. Quelle est la première question que vous devriez suggérer au groupe lors de la formation des équipes ? (1 réponse)",
        options: [
            { text: "A. Qui seront les chefs de chaque équipe ?", correct: false },
            { text: "B. Comment s'assurer que toutes les équipes ont le bon niveau d'expertise ?", correct: true },
            { text: "C. Quels membres de l'équipe ont le plus d'expérience ?", correct: false },
            { text: "D. Comment l'équipe sera-t-elle organisée en fonction des couches de composants ?", correct: false }
        ]
    },
    {
        question: "Quelle réponse décrit le mieux les sujets abordés lors de la planification du Sprint ? (1 réponse)",
        options: [
            { text: "A. Comment préparer l'objectif de la prochaine revue de Sprint", correct: false },
            { text: "B. Ce qui peut être fait, comment le faire et pourquoi le faire", correct: true },
            { text: "C. Les risques liés à la planification du projet", correct: false },
            { text: "D. La logistique de la release prochaine", correct: false }
        ]
    },
    {
        question: "Pour quoi les développeurs sont-ils responsables ? (2 réponses)",
        options: [
            { text: "A. S'assurer que les parties prenantes savent ce qui se passe", correct: false },
            { text: "B. Travailler uniquement sur les éléments assignés par le Scrum Master", correct: false },
            { text: "C. Créer un plan pour le Sprint, le Sprint Backlog", correct: true },
            { text: "D. Organiser le travail nécessaire pour atteindre l'objectif du Sprint", correct: true }
        ]
    }
]



const messages = {
  gender: {
    MALE: "Mâle",
    FEMALE: "Femelle",
    OTHER: "Autre"
  },
  pushNotification: {
    EMAIL: "Courriel",
    SMS: "SMS",
    PUSH: "Notification poussée"
  },
  paymentMethod: {
    DIRECT_DEPOSIT: "Dépôt direct",
    PAY_CHEQUE: "Fiche de salaire",
    OTHER: "Autre"
  },
  onlineStatus: {
    AVAILABLE: "Disponible",
    OUT_OF_OFFICE: "Absent du bureau",
    IN_A_MEETING: "Dans une réunion",
    AWAY: "Au loin",
    BUSY: "Occupé",
    DO_NOT_DISTURB: "Ne pas déranger",
    BE_RIGHT_BACK: "Revenir tout de suite",
    OFFLINE: "Hors ligne"
  },
  modalTitles: {
    assignPosition: "Assigner une position",
    assignStatus: "Assigner un statut"
  },
  relationStatus: {
    MARRIED: "Mariée / Marié",
    SINGLE: "Célibataire",
    SINGLE_PARENT: "Célibataire avec enfant",
    UNKNOWN: "Inconnu",
    OTHER: "Autre"
  },
  paymentType: {
    HOURLY: "Heure",
    SALARY: "Salaire",
    OTHER: "Autre"
  },
  statusEnum: {
    PENDING1: "En attendant 1",
    PENDING2: "En attendant 2",
    APPROVED: "Approuvé",
    REJECTED: "Rejeté"
  },
  degree: {
    BACHELOR: "Baccalauréat",
    COLLEGE: "Collège",
    MASTER: "Master",
    PHD: "Doctorat",
    PRIMARY: "Primaire",
    SECONDARY: "Secondaire",
    TRADE_SCHOOL: "Collège"
  },
  general: {
    years: "ans",
    duedate: "Date d'échéance",
    issueDate: "Date d'émission",
    yearsOld: "ans",
    empID: "ID employé",
    attachments: "Pièces jointes",
    properties: "Propriétés",
    type: "Type",
    employmentType: "Type d'emploi",
    employer: "Employeur",
    active: "Actif",
    empStatus: "Statut de l'employé",
    effectiveDate: "Date d'effet",
    expiryDate: "Date d'expiration",
    approvedOn: "Approuvé le",
    approvedBy: "Approuvé par",
    asof: "à",
    general: "Général",
    position: "Position",
    additionalproperties: "Propriétés additionnelles",
    ok: "Ok",
    order: "Ordre",
    actions: "Actions",
    allemp: "Tous les employés",
    delete: "Supprimer",
    cancel: "Annuler",
    bulkactions: "Actions groupées",
    bulkdelete: "Supprimer groupées",
    invalidvalueerror: "Valeur invalide",
    duplicatenameerror: "Nom déjà existant",
    home: "Accueil",
    dataadded: "Ajouté",
    datadeleted: "Supprimé",
    dataupdated: "Mis à jour",
    Compensation: "Compensation",
    reloadpage: "Rechargez",
    noData: "Aucune donnée",
    success: "Succès",
    confirmdelete: "Êtes-vous sûr de vouloir supprimer?",
    failed: "Échec",
    servererror: "Erreur du serveur. Veuillez réessayer",
    somethingwentwrong: "Quelque chose s'est mal passé",
    deleted: "Supprimé",
    informationadded: "Information ajoutée",
    informationupdated: "Information mise à jour",
    informationdeleted: "Information supprimée",
    days: "Jours",
    months: "Mois",
    weeks: "Semaines",
    period: "Périod",
    details: "Détails",
    conditions: "Conditions",
    status: "Statut",
    name: "Nom",
    back: "Retour",
    nofieldsaremodified: "Aucun champ modifié",
    info: "Info",
    thisactionwilleffectassignedemployeesaswell:
      "Cette action affectera également les employés",
    payitemassignmentstatuswillbeupdatedforallassignedemployees:
      "Le statut de l'affectation de l'élément de paiement sera mis à jour pour tous les employés affectés",
    trackingitemsforthissegmentwillberemoved:
      "Les éléments de suivi pour ce segment seront supprimés"
  },
  editProfile: {
    personalTab1: "Email, téléphone, date de naissance et plus",
    personalTab2: "Adresse, code postal, code pays",
    personalTab3: "Nom de la banque, numéro de compte, numéro de routage",
    personalTab4: "École, diplôme, spécialité, GPA, année de graduation",
    personalTab5: "Type d'identification, numéro, date d'expiration",
    personalTab6: "Autres paramètres",
    nonResident: "Non-résident",
    organizationProperties: "Propriétés de l'organisation",
    bankAccounts: "Comptes bancaires",
    idNumbers: "Autres identifiants",
    other: "Autres",
    level: "Niveau",
    step: "Étape",
    primary: "Primaire",
    editProfile: "Editer le profil",
    benefitplan: "Plan de bénéfice",
    medicalAlert: "Alerte médicale",
    addBenefitPlan: "Ajouter un plan de bénéfice",
    assets: {
      assets: "Actifs",
      returndate: "Date de retour",
      assignasset: "Affecter un actif",
      assignedassets: "Actifs affectés",
      overdue: "en retard"
    },
    training: {
      training: "Formation",
      addNewTraining: "Ajouter une formation",
      status: "Statut",
      completionDate: "Date de complétion",
      evaluation: "Évaluation",
      signId: "Signature",
      note: "Remarque"
    },
    union: {
      union: "Union",
      addUnion: "Ajouter une union"
    },

    skills: {
      skills: "Compétences",
      proficiency: "Proficience",
      experienceinyears: "Expérience en années",
      experienceasoffdate: "Expérience comme date d’expiration"
    },
    licenseAndPermit: {
      licenseAndPermit: "Permis et licence",
      id: "ID",
      addLicense: "Ajouter une licence"
    },
    benefitOption: {
      benefitOption: "Option de bénéfice",
      idNumber: "ID",
      class: "Classe",
      benefitStatus: "Statut de bénéfice",
      claim: "Réclamation des dépendants",
      overrideannualearnings: "Annualisation de bénéfice",
      overridedefaultcoverage: "Couverture de bénéfice par défaut",
      optoutmedical: "Se retirer médical",
      optoutdental: "Se retirer dentaire",
      optoutadnd: "Se retirer AD&D",
      optoutclinicalillness: "Se retirer maladie critique",
      smoker: "Fumeur",
      evidence: "Preuve",
      memberDescription: "Description du membre"
    },
    benefitTableData: {
      memberDescription: "Description du membre",
      name: "Nom",
      option: "Option",
      ID: "ID",
      class: "Classe",
      status: "Statut",
      expiry: "Expiré"
    },
    unionTableData: {
      expiry: "Expiré",
      name: "Nom",
      category: "Catégorie",
      ID: "ID",
      region: "Région",
      sector: "Secteur",
      tradeCode: "Code du commerce",
      trade: "Commerce",
      unionStatus: "Statut de l’Union",
      wage: "Salaire"
    },
    skillsTableData: {
      proficiency: "Proficience",
      experience: "Expérience",
      addSkill: "Ajouter une compétence"
    },
    taxation: {
      taxation: "Taxation"
    }
  },
  countries: {
    CANADA: "Canada",
    USA: "États-Unis d'Amérique"
  },
  warnings: {
    reportUse: "Use for reposts",
    datamodified: "Données modifiées.",
    exitwithoutsave: "Quitter sans sauvegarder?"
  },
  provinces: {
    CANADA: {
      AB: "Alberta",
      BC: "Colombie Britannique",
      MB: "Manitoba",
      NB: "Nouveau Brunswick",
      NL: "Terre-Neuve-et-Labrador",
      NS: "Nouvelle-Écosse",
      NT: "Territoires du Nord-Ouest",
      NU: "Nunavut",
      ON: "Ontario",
      PE: "Île-du-Prince-Édouard",
      QC: "Québec",
      SK: "Saskatchewan",
      YT: "Yukon"
    },
    USA: {
      AL: "Alabama",
      AK: "Alaska",
      AZ: "Arizona",
      AR: "Arkansas",
      CA: "Californie",
      CO: "Colorado",
      CT: "Connecticut",
      DE: "Delaware",
      DC: "District de Columbia",
      FL: "Floride",
      GA: "Georgie",
      HI: "Hawaii",
      ID: "Idaho",
      IL: "Illinois",
      IN: "Indiana",
      IA: "Iowa",
      KS: "Kansas",
      KY: "Kentucky",
      LA: "Louisiane",
      ME: "Maine",
      MD: "Maryland",
      MA: "Massachusetts",
      MI: "Michigan",
      MN: "Minnesota",
      MS: "Mississippi",
      MO: "Missouri",
      MT: "Montana",
      NE: "Nebraska",
      NV: "Nevada",
      NH: "New Hampshire",
      NJ: "New Jersey",
      NM: "Nouveau-Mexico",
      NY: "New York",
      NC: "North Carolina",
      ND: "North Dakota",
      OH: "Ohio",
      OK: "Oklahoma",
      OR: "Oregon",
      PA: "Pennsylvanie",
      RI: "Rhode Island",
      SC: "Caroline du Sud",
      SD: "Dakota du Sud",
      TN: "Tennessee",
      TX: "Texas",
      UT: "Utah",
      VT: "Vermont",
      VA: "Virginie",
      WA: "Washington",
      WV: "Virginie-Occidentale",
      WI: "Wisconsin",
      WY: "Wyoming"
    }
  },

  relationships: {
    AUNT: "Tante",
    BOYFRIEND: "Petit ami",
    BROTHER: "Frère",
    "BROTHER-IN-LAW": "Beau-frère",
    CONTACT: "Contact",
    DAUGHTER: "Fille",
    "EX-HUSBAND": "Ex-mari",
    "EX-WIFE": "Ex-femme",
    FATHER: "Père",
    "FATHER-IN-LAW": "Beau-père",
    FIANCE: "Fiance",
    FIANCEE: "Fiancée",
    FRIEND: "Ami",
    GIRLFRIEND: "Petite amie",
    GRANDFATHER: "Grand-père",
    GRANDMOTHER: "Grand-mère",
    HUSBAND: "Mari",
    MOTHER: "Femme",
    "MOTHER-IN-LAW": "Belle-mère",
    NEIGHBOUR: "Voisin",
    NEPHEW: "Neveu",
    NIECE: "Nièce",
    PARTNER: "Partenaire",
    RELATIVE: "Proche",
    SISTER: "Soeur",
    "SISTER-IN-LAW": "Belle-soeur",
    SON: "fils",
    SPOUSE: "Epouse",
    "STEP-DAUGHTER": "Demie-soeur",
    "STEP-FATHER": "Demi-père",
    "STEP-MOTHER": "Demie-mère",
    "STEP-SON": "Demi-fils",
    UNCLE: "Oncle",
    UNKNOWN: "Inconnu",
    WIFE: "Femme"
  },

  roles: {
    ORG_ADMIN: "Administrateur de l'organisation",
    EMPLOYEE: "Employé",
    SUPERVISOR: "Superviseur",
    SYS_ADMIN: "Administrateur système"
  },

  dashboard: {
    editProfile: "Editer le profil",
    employees: "Employés",
    totalDocuments: "compte de documents",
    teams: "Équipes",
    attendancePolicies: "Politiques de présence",
    workPlan: "Plan de travail",
    latestTimeOff: "Demandes de congé récentes ",
    latestDoc: "Derniers Documents",
    supervisor: "Superviseur",
    leftPanel: {
      availability: "Disponibilité",
      code: "Code",
      badge: "Badge",
      cell: "Cellulaire",
      work: "Travail",
      email: "Email",
      groups: "Groupes",
      lastlogin: "Dernière connexion"
    }
  },
  buttons: {
    add: "Ajouter",
    update: "Mettre à jour",
    delete: "Supprimer",
    cancel: "Annuler",
    save: "Sauvegarder",
    search: "Rechercher",
    clear: "Effacer",
    close: "Fermer",
    edit: "Editer",
    view: "Voir",
    addNew: "Ajouter un nouveau",
    addNewEmployee: "Ajouter un nouvel employé",
    columns: "Colonnes",
    assigntoemployees: "Assigner des employés",
    modify: "Modifier",
    export: "Exportation"
  },
  profile: {
    terminationId: "ID de rupture",
    basicInfo: {
      title: "Infos générales",
      firstName: "Prénom",
      lastName: "Nom de famille",
      workEmail: "Adresse courriel de bureau",
      personalEmail: "Adresse courriel personnelle",
      workPhone: "Téléphone de bureau",
      cellPhone: "Téléphone cellulaire",
      workcellphone: "Téléphone de bureau et cellulaire",
      homePhone: "Téléphone de résidence",
      employeeCode: "Code d'employé",
      badgeNumber: "Numéro de badge",
      tempBadgeNumber: "Numéro de badge temporaire",
      seniorityDate: "Date d'ancienneté",
      secondaryseniorityDate: "Date d'ancienneté secondaire",
      initiationDate: "Date d'initiation",
      miscDate: "Date miscellaneous",
      terminationDate: "Date de cessation d'emploi",
      changeProfilePicture: "Changer la photo de profil",
      groups: "Groups",
      sin: "Numéro d'assurance sociale (NAS)",
      birthDate: "Date de naissance",
      email: "Adresse courriel",
      hireInvitation: "Embaucher et envoyer une invitation par e-mail",
      hiremanually:
        "Embaucher et saisir manuellement les informations sur les employés",
      jobTitle: "Titre du poste",
      recordType: "Type d'enregistrement",
      blockAccess: "Bloquer l'accès",
      blockProfileChanges: "Bloquer les modifications de profil",
      empTemplateId: "Modèle d'employé",
      middleName: "Nom de famille",
      alias: "Alias",
      nickname: "Surnom",
      status: "Statut"
    },
    personal: {
      personal: "Personnel",
      idNumbers: "Numéros d'identification",
      birthday: "Anniversaire",
      gender: "Sexe",
      paymentMethod: "Méthodes de payement",
      payStubs: "Des fiches de paie",
      maritalStatus: "État civi"
    },
    address: {
      title: "Adresse",
      address1: "Adresse 1",
      address2: "Adresse 2",
      city: "Ville",
      postalCode: "Code postal ",
      zipCode: "Code Zip",
      country: "Pays",
      province: "Province",
      state: "État"
    },

    bankAccount: {
      title: "Compte bancaire",
      branch: "Numéro de transit (5)",
      bank: "Numéro d'institution (3)",
      accountNumber: "Numéro de compte (7+)",
      chequeSpecimen: "Spécimen de chèque"
    },
    paymentMethod: {
      title: "Méthode de paiement"
    },
    education: {
      title: "Education",
      highestlevelofEducation: "Niveau de formation",
      graduationDate: "Date de graduation",
      country: "Pays",
      notes: "Remarques"
    },
    idNumbers: {
      idType: "Type d'identification",
      idNumber: "Numéro d'identification",
      issuedCountry: "Pays d'émission"
    },
    nonResident: {
      title: "Non-résident",
      alertDate: "Date d'alerte",
      visaExpiryDate: "Date d'expiration du visa",
      passportExpiryDate: "Date d'expiration du passeport",
      statusReviewDate: "Date de relecture du statut",
      passportNumber: "Numéro de passeport",
      passportIssuingCountry: "Pays d'émission du passeport",
      status: "Statut",
      visaNumber: "Numéro de visa",
      visaType: "Type de visa",
      note: "Remarque"
    },
    preferences: {
      employeeBirthDay: "Anniversaire de l'employé",
      newDocument: "Nouveau document",
      newSchedule: "Nouvelle planification",
      shiftEnd: "Fin du changement",
      shiftStart: "Début du changement",
      timeOffApproval: "Approbation de congé",
      timeOffComment: "Commentaire de congé",
      timeOffRejection: "Rejet de congé",
      timeOffSubmittal: "Soumission de congé",
      timeSheetApproval: "Approbation de feuille de temps",
      timeSheetComment: "Commentaire de feuille de temps",
      timeSheetRejection: "Rejet de feuille de temps",
      timeSheetSubmittal: "Soumission de feuille de temps"
    },
    custom: {
      title: "Custom"
    },
    contacts: {
      title: "Contacts",
      contactsAndFamily: "Contacts et famille",
      contact: "Contact",
      relationship: "Relation",
      callSequence: "Séquence d'appel d'urgence",
      note: "Remarque"
    },
    settings: {
      title: "Paramètres",
      preferences: "Préférences",
      preferredLanguage: "Langue préférée",
      preferredDateFormat: "Format de date préféré",
      notifications: "Notifications",
      isTimeSheetApproval: "Feuille de temps approuvée",
      isTimeSheetRejection: "Feuille de temps rejetée",
      isTimeSheetMessage: "Message de feuille de temps",
      isTimeOffApproval: "Congé approuvé",
      isTimeOffRejection: "Congé rejeté",
      isNewDocument: "Nouveau document"
    },
    payRate: {
      payRateAssign: "Assigner un taux de paye",
      addPayRate: "Ajouter un taux de paye",
      editPayRate: "Modifier le taux de paye",
      payRateType: "Type de taux de paye",
      payRate: "Taux de paye",
      currency: "Devise",
      paymentMethod: "Méthode de payement",
      latestEffectiveDate: "Date d'effet"
    },
    compensation: {
      standardhoursperday: "Heures standards par jour",
      standardhoursperpay: "Heures standards par paye",
      excludeattendancehoursfrompay:
        "Exclure les heures de présence de la paye",
      secondaryPayRate: "Taux de paye secondaire",
      prevEmployment: "Emploi précédent"
    },
    list: {
      bulkActions: "Actions en vrac",
      hire: "Embaucher",
      assignEmployeeToTheGroup: "Affecter un employé au groupe",
      blockAccess: "Bloquer l'accès",
      activeAccess: "Accès actif",
      empsSelected: "employé(s) sélectionné(s).",
      effectiveDate: "Date d'effet",
      expiryDate: "Date d'expiration",
      dateBasedGroups: "Groupes basés sur la date",
      noExpiry: "Aucune expiration",
      filters: "Filtres",
      resetColumns: "Réinitialiser les colonnes"
    }
  },
  audit: {
    property: "propriété",
    path: "chemin",
    action: "Action",
    date: "Date",
    time: "Temps",
    user: "Utilisateur",
    from: "De",
    to: "À",
    batch: "Lot"
  },
  documents: {
    action: "Action",
    date: "Date",
    referenceNumber: "Numéro de réference",
    fileName: "nom de fichier",
    description: "La description",
    confirmdelete: "Êtes-vous sûr de vouloir supprimer ce document?",
    note: "Remarque",
    referenceDate: "Date de référence",
    documentuploadedsuccess: "Document téléchargé avec succès",
    documentuploadedfailed: "Échec du téléchargement du document",
    clickordragfiletothisareatoupload:
      "Cliquez ou faites glisser le fichier à cet emplacement pour télécharger",
    youcanuploadonlyonefileperupload:
      "Vous pouvez télécharger un seul fichier par téléchargement"
  },
  availability: {
    addEvent: "Ajouter un événement",
    UpdateorDeleteEvent: "Mettre à jour ou supprimer",
    StartToEnd: "Du début à la fin",
    date: "Date",
    addBtn: "Sauvegarder",
    updateBtn: "Mettre à jour",
    delBtn: "Supprimer",
    weekends: "Fins de semaine",
    pickdate: "Choisir une date",
    refresh: "Rafraîchir",
    available: "Disponible",
    duration: "Durée"
  },
  payitemsOrgPage: {
    filteroptions: "Options de filtre",
    empstatus: "Statut d'employé",
    showactiveemponly: "Afficher uniquement les employés actifs",
    empcode: "Code d'employé",
    hourly: "Heure",
    payitemstatus: "Statut",
    stuborder: "Commande",
    manual: "Manuel",
    isExcludeFromPayroll: "Exclure de la paie",
    payroll: "Paie",
    otheramount: "Autre montant",
    shortcut: "Raccourci",
    payitemalreadyexists: "Le poste de travail existe déjà",
    active: "Actif",
    inactive: "Inactif",
    exempt: "Exempt",
    importlinkcode: "Importer le code",
    exportlinkcode: "Exporter le code",
    time: "Temps",
    doubletime: "Double temps",
    other: "Autre",
    othertime: "Autre temps",
    timeoff: "Congé",
    vacation: "Vacances",
    statutoryholiday: "Vacances fériées",
    break: "Pause",
    // overtime: 'Heures supplémentaires',
    regulartime: "Temps régulier",
    piecework: "Pour le travail",
    expense: "Dépense",
    absence: "Absence",
    work: "Travail",
    memos: "Mémos",
    accruals: "Accruals",
    reimbursements: "Remboursements",
    employerContributions: "Contributions employeur",
    deductions: "Deductions",
    earnings: "Revenus",
    entrymethod: "Méthode d’entrée",
    entryType: "Type d’entrée",
    category: "Catégorie",
    reportingcode: "Code de reporting",
    assignedpayitems: "Payitems assignés",
    editpayitem: "Modifier le type de paiement",
    balance: "Solde",
    rate: "Taux",
    name: "Nom",
    add: "Ajouter",
    save: "Sauvegarder",
    close: "Fermer",
    status: "Statut",
    description: "Description",
    type: "Type",
    overtime: "Temps supp. admissible",
    contribute: "Contribue aux congés",
    chargeable: "Imputable",
    paidfrombank: "Payé de banque",
    paidfromamountbank: "Payé de banque",
    paidfromtimebank: "Payé de banque",
    showbalance: "Bloquer l’affichage du solde",
    displayorder: "Ordre d'affichage",
    yes: "Oui",
    no: "Non",
    attendancecat: "Rubrique d’assiduité défaut",
    assigntogroups: "Assigner aux Groupes",
    Available: "Disponible",
    Selected: "Sélectionné",
    payitems: "Items de Paie",
    payitem: "Item de Paie",
    employees: "Employés",
    notes: "Commentaires",
    enterdescription: "Description d’Items de Paie",
    selectvalue: "Sélectionnez une valeur",
    selectattendance: "Sélectionner rubrique d’assiduité",
    addpayitem: "Ajouter un Item de Paie",
    updatepayitem: "Item de Paie",
    payitemdeleted: "Item de Paie supprimé",
    payitemadded: "Item de Paie ajouté",
    payitemupdated: "Item de Paie mis à jour",
    payitemassignedtogroups: "Item de Paie assigné aux Groupes",
    payitemassignedtoemployees: "Item de Paie assigné aux Employés",
    payitemunassignedfromemployees: "Item de Paie dé-assigné des Employés",
    assignpayitem: "Assigner un Item de Paie",
    unassignpayitem: "Dé-assigner un Item de Paie",
    updateassignedpayitem: "Mettre à jour un Item de Paie assigné",
    selectpayitemstoadd: "Sélectionnez les Items de Paie à ajouter"
  },
  payitemsGroupPage: {
    namealreadyexists: "Nom déjà existant",
    codealreadyexists: "Code existe déjà",
    systemNotes: "Notes système",
    note: "Remarque",
    code: "Code",
    isactive: "Actif",
    issystem: "System",
    isReportUse: "Utiliser pour les rapports",
    Actions: "Actions",
    enterPayitem: "Entrer un groupe d’Items de Paie",
    required: "Requis",
    enterCode: "Entrer le code",
    payitemgroup: "Groupe d’Items de Paie",
    payitemgroups: "Groupes d’Items de Paie",
    addpayitemgroup: "Ajouter un groupe d’Items de Paie",
    updatepayitemgroup: "Groupe d’Items de Paie",
    payitemgroupadded: "Groupe d’Items de Paie ajouté",
    payitemgroupupdated: "Groupe d’Items de Paie mis à jour"
  },
  attendancecategories: {
    attendancecategory: "Rubrique d’assiduité",
    name: "Nom",
    add: "Ajouter",
    save: "Sauvegarder",
    close: "Fermer",
    notes: "Remarques",
    AttendanceType: "Type d’assiduité",
    addattendancecategory: "Ajouter une rubrique d’assiduité",
    updateattendancecategory: "Mettre à jour une rubrique d’assiduité",
    attendancecategorieupdated: "Rubrique d’assiduité mise à jour"
  },
  holidayCalendar: {
    assignedholidaycalendar: "Calendrier de vacances assigné",
    holidayCalendar: "Calendrier des congés",
    name: "Nom",
    namerequried: "Nom requis",
    employees: "Employés",
    addholidaycalendar: "Ajouter un calendrier des congés",
    assigntoemployees: "Assigner aux employés",
    addaholiday: "Ajouter un congé",
    updateholiday: "Mettre à jour un congé",
    updateholidaycalendar: "Mettre à jour un calendrier des congés",
    updateordeleteholiday: "Mettre à jour ou supprimer un congé",
    holidayadded: "Congé ajouté",
    holidayupdated: "Congé mis à jour",
    holidaydeleted: "Congé supprimé",
    allcalendars: "calendriers des congés",
    gotocalendar: "Vue calendrier",
    notes: "Remarques",
    clonecalendar: "Cloner le calendrier",
    totalholidays: "Congés",
    importfromexistingcalendar: "Importer depuis un calendrier existant",
    EnableConditionsforthisholiday: "Activer les conditions pour ce congé",
    dateisrequired: "Date requise"
  },
  holidayConditions: {
    holidayConditions: "Conditions des congés",
    minimumSeniority: "Ancienneté minimale",
    Employment: "Emploie",
    holidayMustFallOnAScheduledWorkDay:
      "Le congé doit correspondre à une journée de travail cédulé",
    Employeenotabsentonthedaybeforetheholiday:
      "Employé non absent le jour avant le congé",
    Employeenotabsentonthedayaftertheholiday:
      "Employé non absent le jour après le congé",
    Employeenotabsentonthelastscheduledworkdaybeforetheholiday:
      "Employé non absent la dernière journée de travail cédulé avant le congé",
    Employeenotabsentonthelastscheduledworkdayaftertheholiday:
      "Employé non absent la dernière journée de travail cédulé après le congé",
    workedatleast: "Travaillé au moins",
    daysinthelast: "Jours dans les derniers",
    monthsbeforeholiday: "Mois avant le congé",
    daysbeforeholiday: "Jours avant le congé",
    calendardaysinthelast: "Jours calendaires dans les derniers",
    Workedthatdayoftheweek: "Travaillé le jour de la semaine",
    timesinthelast: "fois dans les derniers",
    EmploymentshouldbeAtleast: "L’emploi doit être au moins",
    calendardaysinthe: "Jours calendaires dans les",
    monthspriortotheholiday: "mois précédant le congé",
    seniority: "Ancienneté",
    employment: "Emploi",
    work: "Travail"
  },
  groups: {
    groups: "Groupes",
    name: "Nom",
    assignedgroup: "Groupes",
    assigngroup: "Assigner un groupe",
    unassigngroup: "Dé-assigner un groupe",
    confirmdelete: "Confirmer la suppression",
    managers: "Gestionnaires",
    createGroup: "Créer un groupe",
    createGroupType: "Créer un groupe",
    wF: "flux de travail",
    lientCode: "Code client",
    comment: "Commenter",
    tableHeaders: {
      groupName: "Nom de groupe",
      groupType: "Type de groupe",
      numberOfEmployees: "Nombre d'employés",
      numberOfManagers: "Nombre d'menegers",
      primaryManager: "Gestionnaire principal",
      numberOfManager: "Nombre de Manager",
      actions: "Actions"
    },
    tabs: {
      generalInfo: "Informations générales",
      properties: "Propriétés",
      employees: "Employés"
    }
  },
  workPlans: {
    timeSheetWF: "Emploi du temps",
    timeOffRequestWF: "Temps libre",
    timeSheetPayrollSubmitWF: "Soumission de la feuille de temps",
    workPlanPublishDate: "Date de publication du plan de travail / Heure",
    expenseWF: "Frais",
    payRaiseWF: "Augmentation de salaire",
    onBoardingWF: "Embarquement des employés",
    offBoardingWF: "Débarquement d'un employé",
    employeeRecordChangeWF: "Modification du dossier de l'employé",
    performanceReviewWF: "Revue de la performance",
    positionApprovalWF: "Approbation du poste",
    renewalFrequency: "Fréquence de renouvellement mois",
    alertPeriod: "Période d'alerte jours",
    proficiencies: "Compétences",
    proficienciesOptions: {
      irrelevant: "Sans importance",
      poor: "Pauvre",
      bellow: "Mugissement",
      average: "Moyen",
      good: "Bien",
      excellent: "Excellent"
    },
    options: {
      none: "None",
      levelOne: "Level 1",
      levelTwo: "Level 2"
    },
    unionTabs: {
      wages: "Annex"
    }
  },
  groupTypes: {
    groupTypeName: "Nom du type de groupe",
    addressUsed: "Adresse utilisée",
    color: "Couleur",
    datedEmployeeAssignment: "Affectation d'employé datée",
    allowMultipleEmployeeAssignment:
      "Autoriser l'affectation de plusieurs employés",
    systemType: "Type de système"
  },
  groupSystemTypes: {
    TEAM: "Équipe",
    DEPARTMENT: "département",
    POLICY: "Politique",
    WORKPLAN: "Plan de travail",
    PAYGROUP: "Groupe de rémunération",
    SITE: "Placer",
    UNION: "Syndicat",
    EMP_TYPE: "Type d'emploi",
    LOCATION: "lieu",
    POSITION: "Position",
    EMP_STATUS: "Statut d'emploi",
    PAY_CALENDAR: "calendrier de paie",
    BENEFIT: "Régime d'avantages sociaux",
    SKILL: "Compétence",
    LICENSE: "Licence",
    PERMIT: "Permis",
    OTHER: "Autre"
  },
  supervisors: {
    organization: "Organisation",
    profile: "Profil",
    isPrimarySupervisor: "Est le superviseur principal",
    createAndModifyPunches: "Créer et modifier des poinçons",
    temporaryOnboarding: "Intégration temporaire",
    timeSheetApproval: "Approbation des feuilles de temps",
    timeOffRequestApproval: "Approbation de la demande de congé",
    expenseReimbursementApproval: "Approbation du remboursement des dépenses",
    employeeProfiles: "Profils des employés",
    employeePayStubs: "Bulletins de paie des employés",
    employeeTimeSheet: "Feuille de temps des employés",
    employeeConfidentialInformation:
      "Informations confidentielles sur les employés",
    employeeSchedules: "Horaires des employés",
    employeeExpenseReimbursement: "Remboursement des dépenses des employés",
    employeePayRates: "Taux de rémunération des employés",
    performanceReviews: "Évaluations des performances",
    EmployeeTimeOffRequests: "Demandes de congés des employés",
    timeSheetSubmittal: "Soumission des feuilles de temps",
    timeOffRequestSubmittal: "Soumission de la demande de congé",
    expenseReimbursementSubmittal: "Soumission de remboursement des dépenses",
    actions: "Actions",
    tabs: {
      permissions: "Autorisations",
      authorityLevel: "Niveau d'autorité",
      accessLevel: "Niveau d'accès",
      notificationLevel: "Niveau de notification"
    },
    placeholders: {
      select: "Sélectionner"
    }
  },

  modals: {
    createGroupType: "Créer un type de groupe",
    updateGroupType: "Update Group Type",
    createGroup: "Create Group",
    updateGroup: "Update Group"
  },
  form: {
    general: {
      fieldisrequired: "Ce champ est requis",
      submit: "Soumettre ",
      save: "Sauvegarder",
      name: "Nom",
      note: "Remarque",
      clientcode: "Code client",
      reportingcode: "Code de reporting",
      displaysequence: "Séquence",
      mandatory: "Obligatoire",
      active: "Actif",
      geoposition: "Position géographique"
    },
    group: {
      general: {
        name: "Nom de groupe ",
        groupType: "Type de groupe ",
        parentGroup: "Groupe initial"
      },
      team: {
        expenseWF: "Flux de dépense",
        timeSheetPayrollSubmitWF:
          "Flux de soumission à la paie de feuille de temps",
        timeSheetWF: "Flux de feuille de temps",
        timeOffRequestWF: "Flux de demande d’absence "
      },
      department: {
        onBoardingWF: "Flux de décalage employé ",
        offBoardingWF: "Flux de respect employé",
        payRaiseWF: "Flux d’augmentation de salaire",
        positionApprovalWF: "Flux d’approbation de poste",
        recordChangeWF: "Flux de changement de dossier d’employé "
      },
      paygroup: {
        closePayWF: "Flux de clôture de paie ",
        issuePayChequesWF: "Flux d’émission de dépôt direct de paie",
        issuePayDirectDepositsWF: "Flux d’émission de chèques de paie"
      },
      address: {
        addressLine1: "Address 1",
        addressLine2: "Address 2",
        city: "City",
        country: "Country",
        location:
          "GPS coordinates / Choose Address ID Internet to enter or view Internet information",
        phone: "Phone ",
        picture: "Picture",
        postalCode: "Zip code / Postal code",
        province: "State / Province"
      }
    }
  },
  notification: {
    success: {
      add: "Item Sucessfully Added",
      update: "Item Sucessfully Updated",
      delete: "Item Sucessfully Removed"
    }
  },
  trackingsegments: {
    assigntrackingsegment: "Assigner un segment de suivi",
    assignedTrackingSegments: "Segments assignés",
    displaysequence: "Séquence d’affichage",
    trackingitemsfor: "Les éléments de suivi pour",
    itemswillberemoved: "Les éléments seront supprimés",
    bulkdeletetrackingitems: "Supprimer des éléments de suivi en masse",
    viewtrackingitems: "Voir les éléments de suivi",
    addtrackingsegment: "Ajouter un segment de suivi",
    updatetrackingsegment: "Segment de suivi",
    addtrackingitem: "Ajouter un élément de suivi",
    updatetrackingitem: "Mettre à jour un élément de suivi",
    trackingsegments: "Segments de suivi",
    type: "Type",
    validationlistdisplay: "Choix d’affichage",
    validationlistdisplaytype: "Choix d’affichage",
    validationmethod: "Méthode de validation",
    freeform: "Formulaire libre",
    grouptype: "Type de groupe",
    logical: "Logique",
    integer: "Entier",
    numeric: "Numérique",
    list: "Liste",
    jira: "Jira",
    position: "Position",
    project: "Projet",
    code: "Code",
    name: "Nom",
    both: "Nom et code"
  }
};

export default messages;

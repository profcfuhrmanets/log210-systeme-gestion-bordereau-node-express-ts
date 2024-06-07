define({ "api": [
  {
    "type": "get",
    "url": "/api/v3/course/all",
    "title": "all",
    "group": "Cours",
    "description": "<p>Récupérer la liste de tous les cours</p>",
    "version": "3.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[ { id: string, titre: string } ]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/CourseRouter.ts",
    "groupTitle": "Cours",
    "name": "GetApiV3CourseAll"
  },
  {
    "type": "get",
    "url": "/api/v3/grade/group",
    "title": "group",
    "group": "Grade",
    "description": "<p>Liste des notes d'un groupe</p>",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_id",
            "description": "<p>Identifiant du groupe</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[ { student_id:string, group_id:string, type:string, type_id:integer, note: number } ]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/GradeRouter.ts",
    "groupTitle": "Grade",
    "name": "GetApiV3GradeGroup"
  },
  {
    "type": "get",
    "url": "/api/v3/grade/insert",
    "title": "insert",
    "group": "Grade",
    "description": "<p>Insérer une note associé à un étudiant, un groupe cours et de devoir ou questionnaire</p>",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student_id",
            "description": "<p>Identifiant de l'étudiant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_id",
            "description": "<p>Identifiant du groupe</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Nom de la classe correspondant au type de travail</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "type_id",
            "description": "<p>Identifiant du travail</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "note",
            "description": "<p>Note obtenu pour ce travail</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[ { student_id:string, group_id:string, type:string, type_id:integer, note: number } ]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/GradeRouter.ts",
    "groupTitle": "Grade",
    "name": "GetApiV3GradeInsert"
  },
  {
    "type": "get",
    "url": "/api/v3/grade/student",
    "title": "student",
    "group": "Grade",
    "description": "<p>Liste des notes d'un étudiant</p>",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student_id",
            "description": "<p>Identifiant de l'étudiant</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[ { student_id: string, group_id:string, type:string, type_id:integer, note: number } ]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/GradeRouter.ts",
    "groupTitle": "Grade",
    "name": "GetApiV3GradeStudent"
  },
  {
    "type": "get",
    "url": "/api/v3/health/ping",
    "title": "ping",
    "group": "Health",
    "description": "<p>Echo pour confirmer le fonctionnement de SGB</p>",
    "version": "3.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "Success",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/routes/HealtRouter.ts",
    "groupTitle": "Health",
    "name": "GetApiV3HealtPing"
  },
  {
    "type": "get",
    "url": "/api/v3/Schedule/all",
    "title": "all",
    "group": "Schedule",
    "description": "<p>Récupérer la liste de tous les Schedules</p>",
    "version": "3.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[ { group_id: string, day: string, hours: string, activity: string, mode: string, local: string, teacher_id: string } ]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/ScheduleRouter.ts",
    "groupTitle": "Schedule",
    "name": "GetApiV3ScheduleAll"
  },
  {
    "type": "get",
    "url": "/api/v3/semester/all",
    "title": "all",
    "group": "Semester",
    "description": "<p>Récupérer la liste de tous les semestres</p>",
    "version": "3.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[ { id: string, name: string, start: string, end: string, } ]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/SemesterRouter.ts",
    "groupTitle": "Semester",
    "name": "GetApiV3SemesterAll"
  },
  {
    "type": "get",
    "url": "/api/v3/student/all",
    "title": "all",
    "group": "Student",
    "description": "<p>récupération de tout les enseignant</p>",
    "version": "3.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[{ first_name: string, last_name: string, id: string that match email } ]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/StudentRouter.ts",
    "groupTitle": "Student",
    "name": "GetApiV3StudentAll"
  },
  {
    "type": "get",
    "url": "/api/v3/student/fromtoken",
    "title": "fromtoken",
    "group": "Student",
    "description": "<p>Récupérer un étudiant à partir de son token</p>",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentification token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>{ first_name: string, last_name: string, id: string, }</p>"
          }
        ]
      }
    },
    "filename": "src/routes/StudentRouter.ts",
    "groupTitle": "Student",
    "name": "GetApiV3StudentFromtoken"
  },
  {
    "type": "get",
    "url": "/api/v3/student/groupstudent",
    "title": "groupstudent",
    "group": "Student",
    "description": "<p>Récupérer le lien entre les étudiants et les groupes</p>",
    "version": "3.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[{ group_id: string, student_id: string }</p>"
          }
        ]
      }
    },
    "filename": "src/routes/StudentRouter.ts",
    "groupTitle": "Student",
    "name": "GetApiV3StudentGroupstudent"
  },
  {
    "type": "get",
    "url": "/api/v3/student/login",
    "title": "login",
    "group": "Student",
    "description": "<p>Authentification de l'étudiant et récupération du token d'authentification</p>",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>courriel de l'étudiant.  Vous devez encoder email avec https://www.w3schools.com/tags/ref_urlencode.ASP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>non vérifier.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentification token à inclure dans les requêtes subséquentes</p>"
          },
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>{first_name: string, last_name: string, id: string}</p>"
          }
        ]
      }
    },
    "filename": "src/routes/StudentRouter.ts",
    "groupTitle": "Student",
    "name": "GetApiV3StudentLogin"
  },
  {
    "type": "get",
    "url": "/api/v3/teacher/all",
    "title": "all",
    "group": "Teacher",
    "description": "<p>récupération de tout les enseignant</p>",
    "version": "3.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>[{ first_name: string, last_name: string, id: string }]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/TeacherRouter.ts",
    "groupTitle": "Teacher",
    "name": "GetApiV3TeacherAll"
  },
  {
    "type": "get",
    "url": "/api/v3/teacher/fromtoken",
    "title": "fromtoken",
    "group": "Teacher",
    "description": "<p>Récupérer un enseignant à partir de son token</p>",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentification token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>{ first_name: string, last_name: string, id: string, }</p>"
          }
        ]
      }
    },
    "filename": "src/routes/TeacherRouter.ts",
    "groupTitle": "Teacher",
    "name": "GetApiV3TeacherFromtoken"
  },
  {
    "type": "get",
    "url": "/api/v3/teacher/login",
    "title": "login",
    "group": "Teacher",
    "description": "<p>Authentification de l'usager et récupération du token d'authentification</p>",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>courriel de l'usager.  Vous devez encoder email avec https://www.w3schools.com/tags/ref_urlencode.ASP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>non vérifier.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentification token à inclure dans les requêtes subséquentes</p>"
          },
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>{ first_name:string, last_name: string, id: string }</p>"
          }
        ]
      }
    },
    "filename": "src/routes/TeacherRouter.ts",
    "groupTitle": "Teacher",
    "name": "GetApiV3TeacherLogin"
  }
] });

export default {
  filterSubmit: () => {},
  push: () => {},
  match: {
    path: '/medical-report/:id',
    url: '/medical-report/114',
    isExact: true,
    params: {
      id: '114',
    },
  },
  location: {
    pathname: '/medical-report/114',
    search: '',
    hash: '',
    key: 'rticct',
  },
  history: {
    length: 8,
    action: 'PUSH',
    location: {
      pathname: '/medical-report/114',
      search: '',
      hash: '',
      key: 'rticct',
    },
  },
  user: {
    id: 151,
    name: 'Fernanda Jaiara Dellajustina',
    email: 'fernanda.dellajustina@glucogear.io',
    password: '$2b$10$ajKZm7r0u/jVP018ki/.7u5RgB.M6W4K997wXdj/C449SnYK29f7.',
    fk_clinic: 3,
    reset_password: false,
    created_at: '2020-06-29 15:44:34',
    updated_at: '2020-07-02 17:40:37',
    deleted_at: null,
    fk_profile: 3,
    integration_token: null,
    onesignal_token: null,
    profile: {
      id: 3,
      name: 'Médico',
      group: 'institutions',
      created_at: '2020-04-26 08:49:58',
      updated_at: '2020-04-26 08:49:58',
      permissions: [
        {
          id: 169,
          fk_profile: 3,
          fk_permission: 5,
          permission: {
            id: 5,
            name: 'Criar',
            used_by: ['GLUCOGEAR', 'INSTITUTIONS'],
            key: 'PATIENT_CREATE',
            fk_module: 2,
            created_at: '2020-04-24 23:30:34',
            updated_at: '2020-04-24 23:30:34',
          },
        },
        {
          id: 170,
          fk_profile: 3,
          fk_permission: 6,
          permission: {
            id: 6,
            name: 'Listar',
            used_by: ['GLUCOGEAR', 'INSTITUTIONS'],
            key: 'PATIENT_READ',
            fk_module: 2,
            created_at: '2020-04-24 23:30:34',
            updated_at: '2020-04-24 23:30:34',
          },
        },
        {
          id: 171,
          fk_profile: 3,
          fk_permission: 7,
          permission: {
            id: 7,
            name: 'Editar',
            used_by: ['GLUCOGEAR', 'INSTITUTIONS'],
            key: 'PATIENT_UPDATE',
            fk_module: 2,
            created_at: '2020-04-24 23:30:34',
            updated_at: '2020-04-24 23:30:34',
          },
        },
        {
          id: 172,
          fk_profile: 3,
          fk_permission: 9,
          permission: {
            id: 9,
            name: 'Monitoramento',
            used_by: ['GLUCOGEAR', 'INSTITUTIONS'],
            key: 'PATIENT_MONITORING',
            fk_module: 2,
            created_at: '2020-04-24 23:30:34',
            updated_at: '2020-04-24 23:30:34',
          },
        },
        {
          id: 173,
          fk_profile: 3,
          fk_permission: 10,
          permission: {
            id: 10,
            name: 'Finalizar coleta',
            used_by: ['GLUCOGEAR', 'INSTITUTIONS'],
            key: 'PATIENT_FINISH_MONITORING',
            fk_module: 2,
            created_at: '2020-04-24 23:30:34',
            updated_at: '2020-04-24 23:30:34',
          },
        },
        {
          id: 174,
          fk_profile: 3,
          fk_permission: 19,
          permission: {
            id: 19,
            name: 'Upload CGM',
            used_by: ['GLUCOGEAR', 'INSTITUTIONS'],
            key: 'USER_PANEL_UPLOAD_CGM',
            fk_module: 2,
            created_at: '2020-04-24 23:30:34',
            updated_at: '2020-04-24 23:30:34',
          },
        },
        {
          id: 175,
          fk_profile: 3,
          fk_permission: 15,
          permission: {
            id: 15,
            name: 'Relatório médico',
            used_by: ['GLUCOGEAR', 'INSTITUTIONS'],
            key: 'MEDICAL_REPORT',
            fk_module: 5,
            created_at: '2020-04-24 23:30:34',
            updated_at: '2020-04-24 23:30:34',
          },
        },
      ],
    },
    clinic: {
      id: 3,
      name: 'Clínica Glucogear',
      integration_token: 'YY5niJbTiJd40ExufHJBZg',
      type: 'SAUDE_POPULACIONAL',
    },
    patient: null,
  },
  report: {
    patient: {
      name: 'P07',
      start: '2020-07-29T19:09:50.658Z',
      end: null,
      days: null,
      diabetes: 1,
      gender: 'Feminino',
      born_date: '2000-04-23T03:00:00.000Z',
      age: 20,
      weight: '50.00',
      height: 170,
      imc: 0,
      others_medicine: [],
    },
    glycemia: {
      average: '162.19',
      standartDeviation: '78.42',
      variabilityCoefficient: 48,
      hyper_limit: 180,
      hypo_limit: 70,
      time_on_target_levels: {
        very_high: {
          percentage: '17%',
          hours: '(0h 0min)',
        },
        high: {
          percentage: '23%',
          hours: '(0h 0min)',
        },
        on_target: {
          percentage: '46%',
          hours: '(0h 0min)',
        },
        low: {
          percentage: '8%',
          hours: '(0h 0min)',
        },
        very_low: {
          percentage: '6%',
          hours: '(0h 0min)',
        },
      },
      on_target: '47%',
      hyper_time: '40%',
      hypo_time: '13%',
      eA1c: '7.3',
      GMI: '7.2',
    },
    meal: {
      morning: {
        carbs: 71,
        prot: 21,
        fats: 14,
        kcal: 487,
      },
      lunch: {
        carbs: 81,
        prot: 36,
        fats: 25,
        kcal: 695,
      },
      afternoon: {
        carbs: 54,
        prot: 16,
        fats: 10,
        kcal: 375,
      },
      dinner: {
        carbs: 111,
        prot: 50,
        fats: 30,
        kcal: 907,
      },
      night: {
        carbs: 22,
        prot: 2,
        fats: 0,
        kcal: 102,
      },
      average: {
        carbs: 339,
        prot: 125,
        fats: 79,
        kcal: 2566,
      },
    },
    insulin: {
      bolus: '41.73',
      basal: '34.73',
    },
    data_quality: {
      glycemia: {
        total: 20,
        average: 98,
      },
      meal: {
        total: 21,
        average: 5,
      },
      bolus: {
        total: 22,
        average: 3,
      },
      basal: {
        total: 22,
        average: 3,
      },
    },
    weeklyCycle: {
      glycemia: {
        average: {
          monday: 167,
          tuesday: 168,
          wednesday: 114,
          thursday: 156,
          friday: 175,
          saturday: 164,
          sunday: 214,
        },
        standardDeviation: {
          monday: 76,
          tuesday: 70,
          wednesday: 61,
          thursday: 75,
          friday: 68,
          saturday: 85,
          sunday: 88,
        },
        variabilityCoefficient: {
          monday: 46,
          tuesday: 42,
          wednesday: 54,
          thursday: 48,
          friday: 39,
          saturday: 52,
          sunday: 41,
        },
        on_target: {
          monday: '48%',
          tuesday: '55%',
          wednesday: '60%',
          thursday: '48%',
          friday: '41%',
          saturday: '41%',
          sunday: '22%',
        },
        hyper_time: {
          monday: '42%',
          tuesday: '38%',
          wednesday: '13%',
          thursday: '37%',
          friday: '52%',
          saturday: '40%',
          sunday: '70%',
        },
        hypo_time: {
          monday: '11%',
          tuesday: '7%',
          wednesday: '27%',
          thursday: '15%',
          friday: '7%',
          saturday: '19%',
          sunday: '8%',
        },
      },
      meals: {
        registers: {
          monday: 5,
          tuesday: 5,
          wednesday: 6,
          thursday: 5,
          friday: 5,
          saturday: 3,
          sunday: 4,
        },
        carbs: {
          monday: 278,
          tuesday: 271,
          wednesday: 361,
          thursday: 255,
          friday: 282,
          saturday: 186,
          sunday: 241,
        },
        prot: {
          monday: 103,
          tuesday: 112,
          wednesday: 134,
          thursday: 129,
          friday: 100,
          saturday: 68,
          sunday: 83,
        },
        fats: {
          monday: 53,
          tuesday: 54,
          wednesday: 104,
          thursday: 72,
          friday: 56,
          saturday: 70,
          sunday: 60,
        },
        kcal: {
          monday: 2000,
          tuesday: 2013,
          wednesday: 2912,
          thursday: 2200,
          friday: 2014,
          saturday: 1640,
          sunday: 1845,
        },
      },
      bolus: {
        registers: {
          monday: 3,
          tuesday: 3,
          wednesday: 3,
          thursday: 3,
          friday: 3,
          saturday: 2,
          sunday: 4,
        },
        total: {
          monday: '40.50',
          tuesday: '44.00',
          wednesday: '38.67',
          thursday: '38.67',
          friday: '42.00',
          saturday: '37.33',
          sunday: '51.33',
        },
      },
      basal: {
        registers: {
          monday: 3,
          tuesday: 3,
          wednesday: 3,
          thursday: 2,
          friday: 3,
          saturday: 3,
          sunday: 4,
        },
        total: {
          monday: '31.50',
          tuesday: '38.00',
          wednesday: '33.33',
          thursday: '29.33',
          friday: '36.00',
          saturday: '32.00',
          sunday: '44.00',
        },
      },
    },
    cumulativeByHours: {
      glycemia: {
        average: {
          '00:00-02:00': 218,
          '02:00-04:00': 188,
          '04:00-06:00': 190,
          '06:00-08:00': 186,
          '08:00-10:00': 181,
          '10:00-12:00': 109,
          '12:00-14:00': 111,
          '14:00-16:00': 103,
          '16:00-18:00': 111,
          '18:00-20:00': 178,
          '20:00-22:00': 185,
          '22:00-24:00': 197,
        },
        standardDeviation: {
          '00:00-02:00': 70,
          '02:00-04:00': 89,
          '04:00-06:00': 82,
          '06:00-08:00': 65,
          '08:00-10:00': 68,
          '10:00-12:00': 47,
          '12:00-14:00': 43,
          '14:00-16:00': 49,
          '16:00-18:00': 63,
          '18:00-20:00': 73,
          '20:00-22:00': 73,
          '22:00-24:00': 77,
        },
        variabilityCoefficient: {
          '00:00-02:00': 32,
          '02:00-04:00': 47,
          '04:00-06:00': 43,
          '06:00-08:00': 35,
          '08:00-10:00': 38,
          '10:00-12:00': 43,
          '12:00-14:00': 39,
          '14:00-16:00': 48,
          '16:00-18:00': 57,
          '18:00-20:00': 41,
          '20:00-22:00': 39,
          '22:00-24:00': 39,
        },
        onTarget: {
          '00:00-02:00': 31,
          '02:00-04:00': 31,
          '04:00-06:00': 19,
          '06:00-08:00': 40,
          '08:00-10:00': 49,
          '10:00-12:00': 71,
          '12:00-14:00': 74,
          '14:00-16:00': 64,
          '16:00-18:00': 53,
          '18:00-20:00': 50,
          '20:00-22:00': 41,
          '22:00-24:00': 30,
        },
        hypoTime: {
          '00:00-02:00': 0,
          '02:00-04:00': 16,
          '04:00-06:00': 16,
          '06:00-08:00': 4,
          '08:00-10:00': 2,
          '10:00-12:00': 18,
          '12:00-14:00': 22,
          '14:00-16:00': 30,
          '16:00-18:00': 32,
          '18:00-20:00': 4,
          '20:00-22:00': 8,
          '22:00-24:00': 8,
        },
        hyperTime: {
          '00:00-02:00': 69,
          '02:00-04:00': 53,
          '04:00-06:00': 65,
          '06:00-08:00': 56,
          '08:00-10:00': 48,
          '10:00-12:00': 10,
          '12:00-14:00': 4,
          '14:00-16:00': 5,
          '16:00-18:00': 15,
          '18:00-20:00': 46,
          '20:00-22:00': 52,
          '22:00-24:00': 61,
        },
      },
      meal: {
        carbs: {
          '00:00-02:00': 22,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 52,
          '08:00-10:00': 22,
          '10:00-12:00': 60,
          '12:00-14:00': 55,
          '14:00-16:00': 55,
          '16:00-18:00': 55,
          '18:00-20:00': 61,
          '20:00-22:00': 103,
          '22:00-24:00': 89,
        },
        prot: {
          '00:00-02:00': 2,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 13,
          '08:00-10:00': 8,
          '10:00-12:00': 32,
          '12:00-14:00': 20,
          '14:00-16:00': 16,
          '16:00-18:00': 16,
          '18:00-20:00': 25,
          '20:00-22:00': 41,
          '22:00-24:00': 47,
        },
        fats: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 8,
          '08:00-10:00': 7,
          '10:00-12:00': 20,
          '12:00-14:00': 14,
          '14:00-16:00': 15,
          '16:00-18:00': 11,
          '18:00-20:00': 17,
          '20:00-22:00': 34,
          '22:00-24:00': 18,
        },
        kcal: {
          '00:00-02:00': 102,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 336,
          '08:00-10:00': 171,
          '10:00-12:00': 545,
          '12:00-14:00': 428,
          '14:00-16:00': 417,
          '16:00-18:00': 385,
          '18:00-20:00': 497,
          '20:00-22:00': 872,
          '22:00-24:00': 707,
        },
      },
      bolus: {
        '00:00-02:00': '0.73',
        '02:00-04:00': 0,
        '04:00-06:00': '4.00',
        '06:00-08:00': '11.00',
        '08:00-10:00': 0,
        '10:00-12:00': '7.18',
        '12:00-14:00': '5.27',
        '14:00-16:00': '1.27',
        '16:00-18:00': 0,
        '18:00-20:00': '0.64',
        '20:00-22:00': '5.73',
        '22:00-24:00': '5.91',
      },
      basal: {
        '00:00-02:00': '1.73',
        '02:00-04:00': 0,
        '04:00-06:00': '2.91',
        '06:00-08:00': '9.45',
        '08:00-10:00': 0,
        '10:00-12:00': '6.73',
        '12:00-14:00': '4.55',
        '14:00-16:00': '1.09',
        '16:00-18:00': 0,
        '18:00-20:00': 0,
        '20:00-22:00': '0.55',
        '22:00-24:00': '7.73',
      },
    },
    graphicData: {
      data: [
        {
          hour: 0,
          value: 256,
        },
        {
          hour: 15,
          value: 278,
        },
        {
          hour: 30,
          value: 293,
        },
        {
          hour: 45,
          value: 288,
        },
        {
          hour: 60,
          value: 285,
        },
        {
          hour: 75,
          value: 302,
        },
        {
          hour: 90,
          value: 314,
        },
        {
          hour: 105,
          value: 311,
        },
        {
          hour: 120,
          value: 303,
        },
        {
          hour: 135,
          value: 301,
        },
        {
          hour: 150,
          value: 296,
        },
        {
          hour: 165,
          value: 284,
        },
        {
          hour: 180,
          value: 279,
        },
        {
          hour: 195,
          value: 281,
        },
        {
          hour: 210,
          value: 289,
        },
        {
          hour: 225,
          value: 295,
        },
        {
          hour: 240,
          value: 283,
        },
        {
          hour: 255,
          value: 268,
        },
        {
          hour: 270,
          value: 266,
        },
        {
          hour: 286,
          value: 277,
        },
        {
          hour: 287,
          value: 278,
        },
        {
          hour: 301,
          value: 277,
        },
        {
          hour: 316,
          value: 284,
        },
        {
          hour: 331,
          value: 284,
        },
        {
          hour: 346,
          value: 278,
        },
        {
          hour: 361,
          value: 272,
        },
        {
          hour: 375,
          value: 273,
        },
        {
          hour: 384,
          value: 265,
        },
        {
          hour: 390,
          value: 264,
        },
        {
          hour: 405,
          value: 246,
        },
        {
          hour: 420,
          value: 235,
        },
        {
          hour: 435,
          value: 223,
        },
        {
          hour: 450,
          value: 220,
        },
        {
          hour: 465,
          value: 237,
        },
        {
          hour: 480,
          value: 257,
        },
        {
          hour: 495,
          value: 269,
        },
        {
          hour: 510,
          value: 269,
        },
        {
          hour: 525,
          value: 263,
        },
        {
          hour: 540,
          value: 246,
        },
        {
          hour: 556,
          value: 218,
        },
        {
          hour: 559,
          value: 226,
        },
        {
          hour: 571,
          value: 202,
        },
        {
          hour: 586,
          value: 204,
        },
        {
          hour: 601,
          value: 205,
        },
        {
          hour: 616,
          value: 187,
        },
        {
          hour: 631,
          value: 159,
        },
        {
          hour: 646,
          value: 135,
        },
        {
          hour: 661,
          value: 117,
        },
        {
          hour: 676,
          value: 109,
        },
        {
          hour: 691,
          value: 96,
        },
        {
          hour: 706,
          value: 77,
        },
        {
          hour: 721,
          value: 63,
        },
        {
          hour: 726,
          value: 62,
        },
        {
          hour: 736,
          value: 54,
        },
        {
          hour: 751,
          value: 52,
        },
        {
          hour: 766,
          value: 76,
        },
        {
          hour: 781,
          value: 105,
        },
        {
          hour: 796,
          value: 123,
        },
        {
          hour: 811,
          value: 130,
        },
        {
          hour: 818,
          value: 131,
        },
        {
          hour: 826,
          value: 128,
        },
        {
          hour: 841,
          value: 128,
        },
        {
          hour: 856,
          value: 119,
        },
        {
          hour: 871,
          value: 98,
        },
        {
          hour: 885,
          value: 89,
        },
        {
          hour: 886,
          value: 80,
        },
        {
          hour: 901,
          value: 84,
        },
        {
          hour: 916,
          value: 97,
        },
        {
          hour: 931,
          value: 111,
        },
        {
          hour: 933,
          value: 111,
        },
        {
          hour: 946,
          value: 124,
        },
        {
          hour: 961,
          value: 143,
        },
        {
          hour: 969,
          value: 156,
        },
        {
          hour: 976,
          value: 163,
        },
        {
          hour: 991,
          value: 178,
        },
        {
          hour: 1006,
          value: 196,
        },
        {
          hour: 1021,
          value: 217,
        },
        {
          hour: 1036,
          value: 233,
        },
        {
          hour: 1051,
          value: 241,
        },
        {
          hour: 1066,
          value: 246,
        },
        {
          hour: 1081,
          value: 255,
        },
        {
          hour: 1096,
          value: 277,
        },
        {
          hour: 1111,
          value: 296,
        },
        {
          hour: 1126,
          value: 298,
        },
        {
          hour: 1141,
          value: 288,
        },
        {
          hour: 1156,
          value: 282,
        },
        {
          hour: 1171,
          value: 282,
        },
        {
          hour: 1184,
          value: 291,
        },
        {
          hour: 1186,
          value: 284,
        },
        {
          hour: 1201,
          value: 278,
        },
        {
          hour: 1216,
          value: 266,
        },
        {
          hour: 1231,
          value: 254,
        },
        {
          hour: 1246,
          value: 240,
        },
        {
          hour: 1261,
          value: 228,
        },
        {
          hour: 1267,
          value: 222,
        },
        {
          hour: 1276,
          value: 221,
        },
        {
          hour: 1289,
          value: 218,
        },
        {
          hour: 1291,
          value: 214,
        },
        {
          hour: 1306,
          value: 208,
        },
        {
          hour: 1321,
          value: 190,
        },
        {
          hour: 1336,
          value: 171,
        },
        {
          hour: 1351,
          value: 143,
        },
        {
          hour: 1366,
          value: 131,
        },
        {
          hour: 1382,
          value: 164,
        },
        {
          hour: 1389,
          value: 171,
        },
        {
          hour: 1397,
          value: 194,
        },
        {
          hour: 1412,
          value: 214,
        },
        {
          hour: 1427,
          value: 216,
        },
        {
          hour: 2,
          value: 211,
        },
        {
          hour: 17,
          value: 207,
        },
        {
          hour: 32,
          value: 201,
        },
        {
          hour: 47,
          value: 192,
        },
        {
          hour: 62,
          value: 182,
        },
        {
          hour: 77,
          value: 179,
        },
        {
          hour: 92,
          value: 179,
        },
        {
          hour: 107,
          value: 177,
        },
        {
          hour: 122,
          value: 175,
        },
        {
          hour: 137,
          value: 177,
        },
        {
          hour: 152,
          value: 177,
        },
        {
          hour: 167,
          value: 167,
        },
        {
          hour: 182,
          value: 159,
        },
        {
          hour: 197,
          value: 162,
        },
        {
          hour: 212,
          value: 160,
        },
        {
          hour: 227,
          value: 164,
        },
        {
          hour: 242,
          value: 177,
        },
        {
          hour: 257,
          value: 187,
        },
        {
          hour: 272,
          value: 198,
        },
        {
          hour: 287,
          value: 209,
        },
        {
          hour: 302,
          value: 211,
        },
        {
          hour: 317,
          value: 209,
        },
        {
          hour: 332,
          value: 213,
        },
        {
          hour: 347,
          value: 215,
        },
        {
          hour: 362,
          value: 207,
        },
        {
          hour: 377,
          value: 173,
        },
        {
          hour: 392,
          value: 133,
        },
        {
          hour: 407,
          value: 99,
        },
        {
          hour: 422,
          value: 87,
        },
        {
          hour: 437,
          value: 97,
        },
        {
          hour: 452,
          value: 122,
        },
        {
          hour: 467,
          value: 149,
        },
        {
          hour: 482,
          value: 169,
        },
        {
          hour: 497,
          value: 174,
        },
        {
          hour: 512,
          value: 162,
        },
        {
          hour: 527,
          value: 139,
        },
        {
          hour: 542,
          value: 115,
        },
        {
          hour: 557,
          value: 94,
        },
        {
          hour: 572,
          value: 82,
        },
        {
          hour: 579,
          value: 74,
        },
        {
          hour: 580,
          value: 75,
        },
        {
          hour: 587,
          value: 95,
        },
        {
          hour: 602,
          value: 118,
        },
        {
          hour: 617,
          value: 121,
        },
        {
          hour: 632,
          value: 99,
        },
        {
          hour: 647,
          value: 77,
        },
        {
          hour: 662,
          value: 64,
        },
        {
          hour: 669,
          value: 61,
        },
        {
          hour: 677,
          value: 57,
        },
        {
          hour: 685,
          value: 54,
        },
        {
          hour: 692,
          value: 52,
        },
        {
          hour: 707,
          value: 51,
        },
        {
          hour: 722,
          value: 65,
        },
        {
          hour: 737,
          value: 83,
        },
        {
          hour: 752,
          value: 96,
        },
        {
          hour: 767,
          value: 112,
        },
        {
          hour: 782,
          value: 127,
        },
        {
          hour: 797,
          value: 132,
        },
        {
          hour: 812,
          value: 127,
        },
        {
          hour: 827,
          value: 113,
        },
        {
          hour: 842,
          value: 100,
        },
        {
          hour: 858,
          value: 94,
        },
        {
          hour: 870,
          value: 92,
        },
        {
          hour: 873,
          value: 88,
        },
        {
          hour: 888,
          value: 80,
        },
        {
          hour: 903,
          value: 84,
        },
        {
          hour: 918,
          value: 83,
        },
        {
          hour: 933,
          value: 73,
        },
        {
          hour: 948,
          value: 65,
        },
        {
          hour: 963,
          value: 61,
        },
        {
          hour: 977,
          value: 55,
        },
        {
          hour: 990,
          value: 46,
        },
        {
          hour: 992,
          value: 44,
        },
        {
          hour: 1008,
          value: 40,
        },
        {
          hour: 1014,
          value: 40,
        },
        {
          hour: 1023,
          value: 52,
        },
        {
          hour: 1038,
          value: 110,
        },
        {
          hour: 1053,
          value: 152,
        },
        {
          hour: 1068,
          value: 176,
        },
        {
          hour: 1083,
          value: 190,
        },
        {
          hour: 1097,
          value: 185,
        },
        {
          hour: 1105,
          value: 181,
        },
        {
          hour: 1112,
          value: 202,
        },
        {
          hour: 1127,
          value: 231,
        },
        {
          hour: 1142,
          value: 247,
        },
        {
          hour: 1157,
          value: 251,
        },
        {
          hour: 1161,
          value: 241,
        },
        {
          hour: 1172,
          value: 264,
        },
        {
          hour: 1187,
          value: 277,
        },
        {
          hour: 1202,
          value: 275,
        },
        {
          hour: 1217,
          value: 267,
        },
        {
          hour: 1232,
          value: 262,
        },
        {
          hour: 1247,
          value: 259,
        },
        {
          hour: 1262,
          value: 255,
        },
        {
          hour: 1277,
          value: 249,
        },
        {
          hour: 1292,
          value: 245,
        },
        {
          hour: 1307,
          value: 241,
        },
        {
          hour: 1323,
          value: 229,
        },
        {
          hour: 1336,
          value: 223,
        },
        {
          hour: 1338,
          value: 222,
        },
        {
          hour: 1353,
          value: 215,
        },
        {
          hour: 1368,
          value: 201,
        },
        {
          hour: 1383,
          value: 193,
        },
        {
          hour: 1398,
          value: 204,
        },
        {
          hour: 1413,
          value: 225,
        },
        {
          hour: 1428,
          value: 250,
        },
        {
          hour: 1439,
          value: 259,
        },
        {
          hour: 3,
          value: 248,
        },
        {
          hour: 18,
          value: 238,
        },
        {
          hour: 33,
          value: 222,
        },
        {
          hour: 48,
          value: 188,
        },
        {
          hour: 63,
          value: 147,
        },
        {
          hour: 78,
          value: 124,
        },
        {
          hour: 93,
          value: 116,
        },
        {
          hour: 108,
          value: 110,
        },
        {
          hour: 123,
          value: 104,
        },
        {
          hour: 138,
          value: 89,
        },
        {
          hour: 153,
          value: 75,
        },
        {
          hour: 168,
          value: 66,
        },
        {
          hour: 183,
          value: 60,
        },
        {
          hour: 198,
          value: 55,
        },
        {
          hour: 213,
          value: 48,
        },
        {
          hour: 228,
          value: 44,
        },
        {
          hour: 244,
          value: 41,
        },
        {
          hour: 249,
          value: 40,
        },
        {
          hour: 259,
          value: 41,
        },
        {
          hour: 274,
          value: 60,
        },
        {
          hour: 289,
          value: 110,
        },
        {
          hour: 304,
          value: 134,
        },
        {
          hour: 319,
          value: 138,
        },
        {
          hour: 334,
          value: 140,
        },
        {
          hour: 349,
          value: 145,
        },
        {
          hour: 364,
          value: 151,
        },
        {
          hour: 379,
          value: 155,
        },
        {
          hour: 393,
          value: 138,
        },
        {
          hour: 402,
          value: 130,
        },
        {
          hour: 408,
          value: 116,
        },
        {
          hour: 423,
          value: 98,
        },
        {
          hour: 438,
          value: 103,
        },
        {
          hour: 453,
          value: 130,
        },
        {
          hour: 468,
          value: 159,
        },
        {
          hour: 483,
          value: 174,
        },
        {
          hour: 498,
          value: 174,
        },
        {
          hour: 513,
          value: 160,
        },
        {
          hour: 528,
          value: 137,
        },
        {
          hour: 543,
          value: 115,
        },
        {
          hour: 559,
          value: 96,
        },
        {
          hour: 568,
          value: 98,
        },
        {
          hour: 574,
          value: 86,
        },
        {
          hour: 589,
          value: 87,
        },
        {
          hour: 604,
          value: 92,
        },
        {
          hour: 619,
          value: 95,
        },
        {
          hour: 634,
          value: 95,
        },
        {
          hour: 649,
          value: 93,
        },
        {
          hour: 664,
          value: 84,
        },
        {
          hour: 679,
          value: 72,
        },
        {
          hour: 694,
          value: 67,
        },
        {
          hour: 709,
          value: 67,
        },
        {
          hour: 712,
          value: 65,
        },
        {
          hour: 724,
          value: 65,
        },
        {
          hour: 739,
          value: 70,
        },
        {
          hour: 754,
          value: 83,
        },
        {
          hour: 769,
          value: 106,
        },
        {
          hour: 784,
          value: 127,
        },
        {
          hour: 799,
          value: 139,
        },
        {
          hour: 814,
          value: 146,
        },
        {
          hour: 829,
          value: 139,
        },
        {
          hour: 832,
          value: 138,
        },
        {
          hour: 844,
          value: 125,
        },
        {
          hour: 859,
          value: 113,
        },
        {
          hour: 865,
          value: 111,
        },
        {
          hour: 874,
          value: 92,
        },
        {
          hour: 889,
          value: 88,
        },
        {
          hour: 904,
          value: 86,
        },
        {
          hour: 905,
          value: 95,
        },
        {
          hour: 919,
          value: 68,
        },
        {
          hour: 934,
          value: 60,
        },
        {
          hour: 949,
          value: 58,
        },
        {
          hour: 964,
          value: 60,
        },
        {
          hour: 979,
          value: 57,
        },
        {
          hour: 994,
          value: 55,
        },
        {
          hour: 1009,
          value: 54,
        },
        {
          hour: 1024,
          value: 53,
        },
        {
          hour: 1025,
          value: 51,
        },
        {
          hour: 1040,
          value: 48,
        },
        {
          hour: 1055,
          value: 61,
        },
        {
          hour: 1070,
          value: 91,
        },
        {
          hour: 1084,
          value: 88,
        },
        {
          hour: 1092,
          value: 81,
        },
        {
          hour: 1099,
          value: 85,
        },
        {
          hour: 1114,
          value: 84,
        },
        {
          hour: 1129,
          value: 91,
        },
        {
          hour: 1144,
          value: 107,
        },
        {
          hour: 1159,
          value: 103,
        },
        {
          hour: 1162,
          value: 97,
        },
        {
          hour: 1174,
          value: 92,
        },
        {
          hour: 1189,
          value: 94,
        },
        {
          hour: 1204,
          value: 79,
        },
        {
          hour: 1209,
          value: 72,
        },
        {
          hour: 1219,
          value: 70,
        },
        {
          hour: 1234,
          value: 64,
        },
        {
          hour: 1249,
          value: 60,
        },
        {
          hour: 1264,
          value: 66,
        },
        {
          hour: 1279,
          value: 97,
        },
        {
          hour: 1294,
          value: 132,
        },
        {
          hour: 1309,
          value: 166,
        },
        {
          hour: 1324,
          value: 195,
        },
        {
          hour: 1339,
          value: 212,
        },
        {
          hour: 1354,
          value: 227,
        },
        {
          hour: 1369,
          value: 239,
        },
        {
          hour: 1384,
          value: 252,
        },
        {
          hour: 1399,
          value: 278,
        },
        {
          hour: 1414,
          value: 309,
        },
        {
          hour: 1429,
          value: 322,
        },
        {
          hour: 1430,
          value: 303,
        },
        {
          hour: 5,
          value: 294,
        },
        {
          hour: 20,
          value: 284,
        },
        {
          hour: 35,
          value: 275,
        },
        {
          hour: 50,
          value: 273,
        },
        {
          hour: 65,
          value: 269,
        },
        {
          hour: 80,
          value: 259,
        },
        {
          hour: 95,
          value: 254,
        },
        {
          hour: 110,
          value: 255,
        },
        {
          hour: 125,
          value: 253,
        },
        {
          hour: 140,
          value: 257,
        },
        {
          hour: 155,
          value: 258,
        },
        {
          hour: 170,
          value: 258,
        },
        {
          hour: 185,
          value: 259,
        },
        {
          hour: 200,
          value: 253,
        },
        {
          hour: 215,
          value: 250,
        },
        {
          hour: 230,
          value: 250,
        },
        {
          hour: 245,
          value: 241,
        },
        {
          hour: 260,
          value: 230,
        },
        {
          hour: 275,
          value: 235,
        },
        {
          hour: 290,
          value: 255,
        },
        {
          hour: 305,
          value: 262,
        },
        {
          hour: 320,
          value: 257,
        },
        {
          hour: 335,
          value: 263,
        },
        {
          hour: 351,
          value: 281,
        },
        {
          hour: 360,
          value: 287,
        },
        {
          hour: 366,
          value: 264,
        },
        {
          hour: 381,
          value: 239,
        },
        {
          hour: 396,
          value: 210,
        },
        {
          hour: 411,
          value: 186,
        },
        {
          hour: 426,
          value: 181,
        },
        {
          hour: 441,
          value: 198,
        },
        {
          hour: 456,
          value: 232,
        },
        {
          hour: 471,
          value: 260,
        },
        {
          hour: 486,
          value: 279,
        },
        {
          hour: 501,
          value: 282,
        },
        {
          hour: 516,
          value: 271,
        },
        {
          hour: 531,
          value: 258,
        },
        {
          hour: 546,
          value: 241,
        },
        {
          hour: 561,
          value: 229,
        },
        {
          hour: 575,
          value: 218,
        },
        {
          hour: 580,
          value: 244,
        },
        {
          hour: 590,
          value: 200,
        },
        {
          hour: 605,
          value: 180,
        },
        {
          hour: 620,
          value: 161,
        },
        {
          hour: 635,
          value: 146,
        },
        {
          hour: 650,
          value: 137,
        },
        {
          hour: 665,
          value: 129,
        },
        {
          hour: 680,
          value: 104,
        },
        {
          hour: 692,
          value: 91,
        },
        {
          hour: 695,
          value: 84,
        },
        {
          hour: 710,
          value: 74,
        },
        {
          hour: 726,
          value: 76,
        },
        {
          hour: 739,
          value: 77,
        },
        {
          hour: 741,
          value: 81,
        },
        {
          hour: 756,
          value: 90,
        },
        {
          hour: 762,
          value: 103,
        },
        {
          hour: 771,
          value: 81,
        },
        {
          hour: 786,
          value: 69,
        },
        {
          hour: 801,
          value: 64,
        },
        {
          hour: 816,
          value: 59,
        },
        {
          hour: 830,
          value: 50,
        },
        {
          hour: 833,
          value: 48,
        },
        {
          hour: 845,
          value: 45,
        },
        {
          hour: 856,
          value: 49,
        },
        {
          hour: 860,
          value: 50,
        },
        {
          hour: 861,
          value: 53,
        },
        {
          hour: 876,
          value: 61,
        },
        {
          hour: 891,
          value: 63,
        },
        {
          hour: 906,
          value: 67,
        },
        {
          hour: 921,
          value: 71,
        },
        {
          hour: 936,
          value: 71,
        },
        {
          hour: 951,
          value: 68,
        },
        {
          hour: 964,
          value: 74,
        },
        {
          hour: 966,
          value: 75,
        },
        {
          hour: 981,
          value: 99,
        },
        {
          hour: 986,
          value: 103,
        },
        {
          hour: 996,
          value: 119,
        },
        {
          hour: 1011,
          value: 125,
        },
        {
          hour: 1026,
          value: 132,
        },
        {
          hour: 1041,
          value: 132,
        },
        {
          hour: 1056,
          value: 116,
        },
        {
          hour: 1071,
          value: 99,
        },
        {
          hour: 1086,
          value: 89,
        },
        {
          hour: 1090,
          value: 87,
        },
        {
          hour: 1093,
          value: 87,
        },
        {
          hour: 1101,
          value: 96,
        },
        {
          hour: 1116,
          value: 119,
        },
        {
          hour: 1131,
          value: 155,
        },
        {
          hour: 1146,
          value: 171,
        },
        {
          hour: 1161,
          value: 163,
        },
        {
          hour: 1176,
          value: 164,
        },
        {
          hour: 1191,
          value: 200,
        },
        {
          hour: 1196,
          value: 195,
        },
        {
          hour: 1206,
          value: 218,
        },
        {
          hour: 1221,
          value: 225,
        },
        {
          hour: 1236,
          value: 240,
        },
        {
          hour: 1251,
          value: 239,
        },
        {
          hour: 1266,
          value: 225,
        },
        {
          hour: 1281,
          value: 211,
        },
        {
          hour: 1296,
          value: 199,
        },
        {
          hour: 1311,
          value: 189,
        },
        {
          hour: 1326,
          value: 177,
        },
        {
          hour: 1341,
          value: 162,
        },
        {
          hour: 1356,
          value: 167,
        },
        {
          hour: 1371,
          value: 190,
        },
        {
          hour: 1386,
          value: 211,
        },
        {
          hour: 1402,
          value: 267,
        },
        {
          hour: 1417,
          value: 299,
        },
        {
          hour: 1432,
          value: 319,
        },
        {
          hour: 7,
          value: 326,
        },
        {
          hour: 22,
          value: 313,
        },
        {
          hour: 37,
          value: 292,
        },
        {
          hour: 52,
          value: 274,
        },
        {
          hour: 67,
          value: 265,
        },
        {
          hour: 82,
          value: 265,
        },
        {
          hour: 97,
          value: 266,
        },
        {
          hour: 112,
          value: 261,
        },
        {
          hour: 127,
          value: 250,
        },
        {
          hour: 142,
          value: 240,
        },
        {
          hour: 157,
          value: 235,
        },
        {
          hour: 172,
          value: 230,
        },
        {
          hour: 187,
          value: 220,
        },
        {
          hour: 202,
          value: 207,
        },
        {
          hour: 217,
          value: 203,
        },
        {
          hour: 232,
          value: 207,
        },
        {
          hour: 247,
          value: 205,
        },
        {
          hour: 262,
          value: 199,
        },
        {
          hour: 277,
          value: 202,
        },
        {
          hour: 292,
          value: 214,
        },
        {
          hour: 307,
          value: 226,
        },
        {
          hour: 322,
          value: 234,
        },
        {
          hour: 337,
          value: 243,
        },
        {
          hour: 352,
          value: 249,
        },
        {
          hour: 356,
          value: 256,
        },
        {
          hour: 367,
          value: 239,
        },
        {
          hour: 382,
          value: 232,
        },
        {
          hour: 397,
          value: 205,
        },
        {
          hour: 412,
          value: 169,
        },
        {
          hour: 427,
          value: 148,
        },
        {
          hour: 442,
          value: 163,
        },
        {
          hour: 457,
          value: 192,
        },
        {
          hour: 472,
          value: 219,
        },
        {
          hour: 487,
          value: 233,
        },
        {
          hour: 502,
          value: 224,
        },
        {
          hour: 517,
          value: 204,
        },
        {
          hour: 532,
          value: 186,
        },
        {
          hour: 547,
          value: 158,
        },
        {
          hour: 553,
          value: 147,
        },
        {
          hour: 562,
          value: 142,
        },
        {
          hour: 577,
          value: 130,
        },
        {
          hour: 592,
          value: 116,
        },
        {
          hour: 607,
          value: 103,
        },
        {
          hour: 622,
          value: 86,
        },
        {
          hour: 634,
          value: 74,
        },
        {
          hour: 637,
          value: 71,
        },
        {
          hour: 652,
          value: 65,
        },
        {
          hour: 667,
          value: 74,
        },
        {
          hour: 682,
          value: 89,
        },
        {
          hour: 697,
          value: 90,
        },
        {
          hour: 712,
          value: 85,
        },
        {
          hour: 910,
          value: 44,
        },
        {
          hour: 914,
          value: 45,
        },
        {
          hour: 925,
          value: 43,
        },
        {
          hour: 940,
          value: 52,
        },
        {
          hour: 955,
          value: 60,
        },
        {
          hour: 970,
          value: 75,
        },
        {
          hour: 985,
          value: 87,
        },
        {
          hour: 1000,
          value: 109,
        },
        {
          hour: 1015,
          value: 133,
        },
        {
          hour: 1030,
          value: 132,
        },
        {
          hour: 1045,
          value: 138,
        },
        {
          hour: 1060,
          value: 147,
        },
        {
          hour: 1075,
          value: 148,
        },
        {
          hour: 1091,
          value: 159,
        },
        {
          hour: 1094,
          value: 164,
        },
        {
          hour: 1106,
          value: 172,
        },
        {
          hour: 1121,
          value: 187,
        },
        {
          hour: 1136,
          value: 201,
        },
        {
          hour: 1141,
          value: 199,
        },
        {
          hour: 1151,
          value: 214,
        },
        {
          hour: 1166,
          value: 215,
        },
        {
          hour: 1181,
          value: 203,
        },
        {
          hour: 1197,
          value: 189,
        },
        {
          hour: 1204,
          value: 187,
        },
        {
          hour: 1212,
          value: 180,
        },
        {
          hour: 1227,
          value: 166,
        },
        {
          hour: 1242,
          value: 163,
        },
        {
          hour: 1257,
          value: 175,
        },
        {
          hour: 1272,
          value: 196,
        },
        {
          hour: 1287,
          value: 215,
        },
        {
          hour: 1302,
          value: 230,
        },
        {
          hour: 1317,
          value: 248,
        },
        {
          hour: 1333,
          value: 284,
        },
        {
          hour: 1339,
          value: 285,
        },
        {
          hour: 1348,
          value: 308,
        },
        {
          hour: 1363,
          value: 317,
        },
        {
          hour: 1378,
          value: 320,
        },
        {
          hour: 1393,
          value: 316,
        },
        {
          hour: 1408,
          value: 319,
        },
        {
          hour: 1423,
          value: 323,
        },
        {
          hour: 1438,
          value: 313,
        },
        {
          hour: 15,
          value: 316,
        },
        {
          hour: 20,
          value: 317,
        },
        {
          hour: 30,
          value: 320,
        },
        {
          hour: 45,
          value: 321,
        },
        {
          hour: 60,
          value: 317,
        },
        {
          hour: 75,
          value: 315,
        },
        {
          hour: 90,
          value: 315,
        },
        {
          hour: 105,
          value: 311,
        },
        {
          hour: 120,
          value: 294,
        },
        {
          hour: 135,
          value: 277,
        },
        {
          hour: 150,
          value: 269,
        },
        {
          hour: 165,
          value: 263,
        },
        {
          hour: 180,
          value: 260,
        },
        {
          hour: 195,
          value: 265,
        },
        {
          hour: 210,
          value: 270,
        },
        {
          hour: 225,
          value: 271,
        },
        {
          hour: 240,
          value: 262,
        },
        {
          hour: 255,
          value: 253,
        },
        {
          hour: 270,
          value: 258,
        },
        {
          hour: 285,
          value: 265,
        },
        {
          hour: 300,
          value: 268,
        },
        {
          hour: 315,
          value: 270,
        },
        {
          hour: 330,
          value: 261,
        },
        {
          hour: 345,
          value: 242,
        },
        {
          hour: 361,
          value: 268,
        },
        {
          hour: 362,
          value: 285,
        },
        {
          hour: 377,
          value: 280,
        },
        {
          hour: 392,
          value: 267,
        },
        {
          hour: 407,
          value: 257,
        },
        {
          hour: 422,
          value: 253,
        },
        {
          hour: 437,
          value: 264,
        },
        {
          hour: 452,
          value: 292,
        },
        {
          hour: 467,
          value: 321,
        },
        {
          hour: 482,
          value: 344,
        },
        {
          hour: 497,
          value: 362,
        },
        {
          hour: 512,
          value: 364,
        },
        {
          hour: 527,
          value: 347,
        },
        {
          hour: 542,
          value: 323,
        },
        {
          hour: 557,
          value: 299,
        },
        {
          hour: 572,
          value: 282,
        },
        {
          hour: 588,
          value: 255,
        },
        {
          hour: 592,
          value: 254,
        },
        {
          hour: 603,
          value: 228,
        },
        {
          hour: 618,
          value: 207,
        },
        {
          hour: 633,
          value: 195,
        },
        {
          hour: 648,
          value: 185,
        },
        {
          hour: 663,
          value: 165,
        },
        {
          hour: 678,
          value: 143,
        },
        {
          hour: 693,
          value: 135,
        },
        {
          hour: 708,
          value: 131,
        },
        {
          hour: 723,
          value: 126,
        },
        {
          hour: 738,
          value: 129,
        },
        {
          hour: 753,
          value: 142,
        },
        {
          hour: 768,
          value: 151,
        },
        {
          hour: 783,
          value: 163,
        },
        {
          hour: 798,
          value: 180,
        },
        {
          hour: 813,
          value: 191,
        },
        {
          hour: 830,
          value: 177,
        },
        {
          hour: 835,
          value: 170,
        },
        {
          hour: 845,
          value: 166,
        },
        {
          hour: 860,
          value: 164,
        },
        {
          hour: 875,
          value: 159,
        },
        {
          hour: 890,
          value: 154,
        },
        {
          hour: 905,
          value: 151,
        },
        {
          hour: 921,
          value: 142,
        },
        {
          hour: 922,
          value: 158,
        },
        {
          hour: 936,
          value: 126,
        },
        {
          hour: 951,
          value: 122,
        },
        {
          hour: 966,
          value: 125,
        },
        {
          hour: 981,
          value: 123,
        },
        {
          hour: 996,
          value: 116,
        },
        {
          hour: 1011,
          value: 111,
        },
        {
          hour: 1026,
          value: 110,
        },
        {
          hour: 1041,
          value: 107,
        },
        {
          hour: 1056,
          value: 100,
        },
        {
          hour: 1071,
          value: 94,
        },
        {
          hour: 1087,
          value: 87,
        },
        {
          hour: 1089,
          value: 98,
        },
        {
          hour: 1102,
          value: 78,
        },
        {
          hour: 1117,
          value: 89,
        },
        {
          hour: 1132,
          value: 124,
        },
        {
          hour: 1147,
          value: 152,
        },
        {
          hour: 1162,
          value: 165,
        },
        {
          hour: 1170,
          value: 178,
        },
        {
          hour: 1177,
          value: 166,
        },
        {
          hour: 1192,
          value: 167,
        },
        {
          hour: 1207,
          value: 174,
        },
        {
          hour: 1222,
          value: 179,
        },
        {
          hour: 1237,
          value: 177,
        },
        {
          hour: 1252,
          value: 176,
        },
        {
          hour: 1267,
          value: 177,
        },
        {
          hour: 1284,
          value: 186,
        },
        {
          hour: 1299,
          value: 187,
        },
        {
          hour: 1314,
          value: 188,
        },
        {
          hour: 1329,
          value: 186,
        },
        {
          hour: 1344,
          value: 167,
        },
        {
          hour: 1359,
          value: 139,
        },
        {
          hour: 1374,
          value: 123,
        },
        {
          hour: 1389,
          value: 144,
        },
        {
          hour: 1404,
          value: 184,
        },
        {
          hour: 1421,
          value: 217,
        },
        {
          hour: 1426,
          value: 220,
        },
        {
          hour: 1436,
          value: 217,
        },
        {
          hour: 11,
          value: 206,
        },
        {
          hour: 26,
          value: 205,
        },
        {
          hour: 41,
          value: 207,
        },
        {
          hour: 56,
          value: 202,
        },
        {
          hour: 71,
          value: 196,
        },
        {
          hour: 86,
          value: 191,
        },
        {
          hour: 101,
          value: 182,
        },
        {
          hour: 116,
          value: 176,
        },
        {
          hour: 131,
          value: 175,
        },
        {
          hour: 146,
          value: 173,
        },
        {
          hour: 161,
          value: 173,
        },
        {
          hour: 176,
          value: 168,
        },
        {
          hour: 191,
          value: 161,
        },
        {
          hour: 206,
          value: 161,
        },
        {
          hour: 221,
          value: 150,
        },
        {
          hour: 236,
          value: 152,
        },
        {
          hour: 251,
          value: 156,
        },
        {
          hour: 266,
          value: 149,
        },
        {
          hour: 281,
          value: 148,
        },
        {
          hour: 296,
          value: 153,
        },
        {
          hour: 311,
          value: 155,
        },
        {
          hour: 326,
          value: 152,
        },
        {
          hour: 341,
          value: 146,
        },
        {
          hour: 358,
          value: 156,
        },
        {
          hour: 364,
          value: 156,
        },
        {
          hour: 373,
          value: 152,
        },
        {
          hour: 388,
          value: 135,
        },
        {
          hour: 403,
          value: 110,
        },
        {
          hour: 418,
          value: 83,
        },
        {
          hour: 433,
          value: 80,
        },
        {
          hour: 448,
          value: 103,
        },
        {
          hour: 463,
          value: 118,
        },
        {
          hour: 478,
          value: 116,
        },
        {
          hour: 493,
          value: 109,
        },
        {
          hour: 508,
          value: 103,
        },
        {
          hour: 523,
          value: 95,
        },
        {
          hour: 528,
          value: 92,
        },
        {
          hour: 539,
          value: 79,
        },
        {
          hour: 552,
          value: 70,
        },
        {
          hour: 554,
          value: 69,
        },
        {
          hour: 569,
          value: 75,
        },
        {
          hour: 584,
          value: 92,
        },
        {
          hour: 599,
          value: 102,
        },
        {
          hour: 614,
          value: 101,
        },
        {
          hour: 629,
          value: 93,
        },
        {
          hour: 644,
          value: 83,
        },
        {
          hour: 659,
          value: 78,
        },
        {
          hour: 674,
          value: 71,
        },
        {
          hour: 688,
          value: 60,
        },
        {
          hour: 692,
          value: 60,
        },
        {
          hour: 703,
          value: 56,
        },
        {
          hour: 718,
          value: 56,
        },
        {
          hour: 733,
          value: 57,
        },
        {
          hour: 750,
          value: 62,
        },
        {
          hour: 752,
          value: 62,
        },
        {
          hour: 753,
          value: 62,
        },
        {
          hour: 765,
          value: 73,
        },
        {
          hour: 780,
          value: 86,
        },
        {
          hour: 795,
          value: 96,
        },
        {
          hour: 810,
          value: 92,
        },
        {
          hour: 825,
          value: 81,
        },
        {
          hour: 840,
          value: 71,
        },
        {
          hour: 856,
          value: 62,
        },
        {
          hour: 864,
          value: 60,
        },
        {
          hour: 871,
          value: 57,
        },
        {
          hour: 886,
          value: 55,
        },
        {
          hour: 901,
          value: 54,
        },
        {
          hour: 916,
          value: 68,
        },
        {
          hour: 931,
          value: 83,
        },
        {
          hour: 946,
          value: 78,
        },
        {
          hour: 961,
          value: 68,
        },
        {
          hour: 976,
          value: 63,
        },
        {
          hour: 991,
          value: 59,
        },
        {
          hour: 1007,
          value: 51,
        },
        {
          hour: 1022,
          value: 41,
        },
        {
          hour: 1037,
          value: 40,
        },
        {
          hour: 1052,
          value: 61,
        },
        {
          hour: 1067,
          value: 108,
        },
        {
          hour: 1082,
          value: 127,
        },
        {
          hour: 1097,
          value: 138,
        },
        {
          hour: 1098,
          value: 138,
        },
        {
          hour: 1112,
          value: 147,
        },
        {
          hour: 1127,
          value: 146,
        },
        {
          hour: 1142,
          value: 132,
        },
        {
          hour: 1156,
          value: 125,
        },
        {
          hour: 1157,
          value: 112,
        },
        {
          hour: 1172,
          value: 104,
        },
        {
          hour: 1187,
          value: 103,
        },
        {
          hour: 1202,
          value: 101,
        },
        {
          hour: 1217,
          value: 98,
        },
        {
          hour: 1232,
          value: 108,
        },
        {
          hour: 1247,
          value: 125,
        },
        {
          hour: 1263,
          value: 124,
        },
        {
          hour: 1278,
          value: 120,
        },
        {
          hour: 1294,
          value: 118,
        },
        {
          hour: 1302,
          value: 110,
        },
        {
          hour: 1309,
          value: 117,
        },
        {
          hour: 1324,
          value: 113,
        },
        {
          hour: 1339,
          value: 121,
        },
        {
          hour: 1354,
          value: 157,
        },
        {
          hour: 1369,
          value: 204,
        },
        {
          hour: 1384,
          value: 236,
        },
        {
          hour: 1399,
          value: 256,
        },
        {
          hour: 1414,
          value: 269,
        },
        {
          hour: 1430,
          value: 264,
        },
        {
          hour: 5,
          value: 245,
        },
        {
          hour: 20,
          value: 225,
        },
        {
          hour: 35,
          value: 224,
        },
        {
          hour: 50,
          value: 233,
        },
        {
          hour: 65,
          value: 232,
        },
        {
          hour: 80,
          value: 218,
        },
        {
          hour: 95,
          value: 199,
        },
        {
          hour: 110,
          value: 179,
        },
        {
          hour: 125,
          value: 161,
        },
        {
          hour: 140,
          value: 148,
        },
        {
          hour: 155,
          value: 141,
        },
        {
          hour: 171,
          value: 126,
        },
        {
          hour: 176,
          value: 133,
        },
        {
          hour: 186,
          value: 102,
        },
        {
          hour: 201,
          value: 93,
        },
        {
          hour: 216,
          value: 95,
        },
        {
          hour: 231,
          value: 94,
        },
        {
          hour: 246,
          value: 90,
        },
        {
          hour: 261,
          value: 89,
        },
        {
          hour: 276,
          value: 92,
        },
        {
          hour: 291,
          value: 99,
        },
        {
          hour: 306,
          value: 109,
        },
        {
          hour: 321,
          value: 115,
        },
        {
          hour: 336,
          value: 114,
        },
        {
          hour: 352,
          value: 118,
        },
        {
          hour: 363,
          value: 125,
        },
        {
          hour: 367,
          value: 122,
        },
        {
          hour: 383,
          value: 128,
        },
        {
          hour: 395,
          value: 134,
        },
        {
          hour: 398,
          value: 126,
        },
        {
          hour: 413,
          value: 123,
        },
        {
          hour: 428,
          value: 144,
        },
        {
          hour: 443,
          value: 181,
        },
        {
          hour: 458,
          value: 218,
        },
        {
          hour: 473,
          value: 246,
        },
        {
          hour: 488,
          value: 253,
        },
        {
          hour: 503,
          value: 247,
        },
        {
          hour: 518,
          value: 238,
        },
        {
          hour: 533,
          value: 222,
        },
        {
          hour: 548,
          value: 197,
        },
        {
          hour: 557,
          value: 186,
        },
        {
          hour: 563,
          value: 171,
        },
        {
          hour: 578,
          value: 156,
        },
        {
          hour: 594,
          value: 133,
        },
        {
          hour: 604,
          value: 120,
        },
        {
          hour: 609,
          value: 115,
        },
        {
          hour: 624,
          value: 105,
        },
        {
          hour: 639,
          value: 106,
        },
        {
          hour: 654,
          value: 104,
        },
        {
          hour: 669,
          value: 96,
        },
        {
          hour: 686,
          value: 83,
        },
        {
          hour: 694,
          value: 77,
        },
        {
          hour: 701,
          value: 83,
        },
        {
          hour: 716,
          value: 94,
        },
        {
          hour: 731,
          value: 112,
        },
        {
          hour: 746,
          value: 132,
        },
        {
          hour: 761,
          value: 150,
        },
        {
          hour: 776,
          value: 163,
        },
        {
          hour: 791,
          value: 168,
        },
        {
          hour: 806,
          value: 171,
        },
        {
          hour: 821,
          value: 176,
        },
        {
          hour: 836,
          value: 175,
        },
        {
          hour: 851,
          value: 177,
        },
        {
          hour: 866,
          value: 180,
        },
        {
          hour: 881,
          value: 179,
        },
        {
          hour: 895,
          value: 165,
        },
        {
          hour: 908,
          value: 163,
        },
        {
          hour: 910,
          value: 153,
        },
        {
          hour: 927,
          value: 143,
        },
        {
          hour: 931,
          value: 156,
        },
        {
          hour: 942,
          value: 132,
        },
        {
          hour: 957,
          value: 131,
        },
        {
          hour: 972,
          value: 123,
        },
        {
          hour: 987,
          value: 114,
        },
        {
          hour: 1002,
          value: 109,
        },
        {
          hour: 1017,
          value: 103,
        },
        {
          hour: 1032,
          value: 91,
        },
        {
          hour: 1047,
          value: 78,
        },
        {
          hour: 1062,
          value: 72,
        },
        {
          hour: 1077,
          value: 69,
        },
        {
          hour: 1093,
          value: 68,
        },
        {
          hour: 1108,
          value: 62,
        },
        {
          hour: 1123,
          value: 66,
        },
        {
          hour: 1138,
          value: 86,
        },
        {
          hour: 1153,
          value: 102,
        },
        {
          hour: 1168,
          value: 111,
        },
        {
          hour: 1184,
          value: 122,
        },
        {
          hour: 1192,
          value: 120,
        },
        {
          hour: 1199,
          value: 127,
        },
        {
          hour: 1214,
          value: 126,
        },
        {
          hour: 1229,
          value: 121,
        },
        {
          hour: 1244,
          value: 118,
        },
        {
          hour: 1259,
          value: 112,
        },
        {
          hour: 1274,
          value: 98,
        },
        {
          hour: 1289,
          value: 81,
        },
        {
          hour: 1304,
          value: 69,
        },
        {
          hour: 1319,
          value: 62,
        },
        {
          hour: 1334,
          value: 57,
        },
        {
          hour: 1349,
          value: 53,
        },
        {
          hour: 1364,
          value: 44,
        },
        {
          hour: 1379,
          value: 40,
        },
        {
          hour: 1394,
          value: 40,
        },
        {
          hour: 1412,
          value: 52,
        },
        {
          hour: 1420,
          value: 84,
        },
        {
          hour: 1427,
          value: 124,
        },
        {
          hour: 2,
          value: 166,
        },
        {
          hour: 17,
          value: 194,
        },
        {
          hour: 32,
          value: 213,
        },
        {
          hour: 47,
          value: 226,
        },
        {
          hour: 62,
          value: 239,
        },
        {
          hour: 77,
          value: 248,
        },
        {
          hour: 92,
          value: 252,
        },
        {
          hour: 107,
          value: 248,
        },
        {
          hour: 122,
          value: 232,
        },
        {
          hour: 137,
          value: 226,
        },
        {
          hour: 152,
          value: 229,
        },
        {
          hour: 167,
          value: 221,
        },
        {
          hour: 182,
          value: 216,
        },
        {
          hour: 197,
          value: 213,
        },
        {
          hour: 212,
          value: 205,
        },
        {
          hour: 227,
          value: 202,
        },
        {
          hour: 242,
          value: 202,
        },
        {
          hour: 257,
          value: 199,
        },
        {
          hour: 272,
          value: 195,
        },
        {
          hour: 287,
          value: 201,
        },
        {
          hour: 304,
          value: 212,
        },
        {
          hour: 315,
          value: 218,
        },
        {
          hour: 319,
          value: 205,
        },
        {
          hour: 334,
          value: 200,
        },
        {
          hour: 349,
          value: 203,
        },
        {
          hour: 364,
          value: 197,
        },
        {
          hour: 379,
          value: 197,
        },
        {
          hour: 394,
          value: 197,
        },
        {
          hour: 409,
          value: 186,
        },
        {
          hour: 424,
          value: 187,
        },
        {
          hour: 439,
          value: 187,
        },
        {
          hour: 454,
          value: 185,
        },
        {
          hour: 468,
          value: 190,
        },
        {
          hour: 478,
          value: 186,
        },
        {
          hour: 483,
          value: 185,
        },
        {
          hour: 498,
          value: 170,
        },
        {
          hour: 514,
          value: 142,
        },
        {
          hour: 524,
          value: 132,
        },
        {
          hour: 529,
          value: 133,
        },
        {
          hour: 544,
          value: 149,
        },
        {
          hour: 559,
          value: 164,
        },
        {
          hour: 574,
          value: 166,
        },
        {
          hour: 589,
          value: 167,
        },
        {
          hour: 605,
          value: 166,
        },
        {
          hour: 614,
          value: 175,
        },
        {
          hour: 620,
          value: 173,
        },
        {
          hour: 635,
          value: 170,
        },
        {
          hour: 651,
          value: 144,
        },
        {
          hour: 664,
          value: 131,
        },
        {
          hour: 666,
          value: 131,
        },
        {
          hour: 681,
          value: 141,
        },
        {
          hour: 696,
          value: 156,
        },
        {
          hour: 711,
          value: 161,
        },
        {
          hour: 726,
          value: 155,
        },
        {
          hour: 740,
          value: 126,
        },
        {
          hour: 751,
          value: 112,
        },
        {
          hour: 755,
          value: 97,
        },
        {
          hour: 771,
          value: 83,
        },
        {
          hour: 781,
          value: 82,
        },
        {
          hour: 786,
          value: 76,
        },
        {
          hour: 801,
          value: 85,
        },
        {
          hour: 816,
          value: 113,
        },
        {
          hour: 831,
          value: 133,
        },
        {
          hour: 847,
          value: 153,
        },
        {
          hour: 852,
          value: 167,
        },
        {
          hour: 862,
          value: 148,
        },
        {
          hour: 877,
          value: 111,
        },
        {
          hour: 892,
          value: 88,
        },
        {
          hour: 907,
          value: 90,
        },
        {
          hour: 922,
          value: 108,
        },
        {
          hour: 937,
          value: 126,
        },
        {
          hour: 953,
          value: 138,
        },
        {
          hour: 964,
          value: 151,
        },
        {
          hour: 968,
          value: 138,
        },
        {
          hour: 983,
          value: 124,
        },
        {
          hour: 998,
          value: 115,
        },
        {
          hour: 1013,
          value: 111,
        },
        {
          hour: 1028,
          value: 91,
        },
        {
          hour: 1029,
          value: 97,
        },
        {
          hour: 1043,
          value: 95,
        },
        {
          hour: 1058,
          value: 138,
        },
        {
          hour: 1073,
          value: 184,
        },
        {
          hour: 1088,
          value: 213,
        },
        {
          hour: 1103,
          value: 235,
        },
        {
          hour: 1118,
          value: 244,
        },
        {
          hour: 1136,
          value: 271,
        },
        {
          hour: 1138,
          value: 278,
        },
        {
          hour: 1151,
          value: 285,
        },
        {
          hour: 1166,
          value: 279,
        },
        {
          hour: 1181,
          value: 261,
        },
        {
          hour: 1196,
          value: 240,
        },
        {
          hour: 1211,
          value: 215,
        },
        {
          hour: 1226,
          value: 196,
        },
        {
          hour: 1241,
          value: 187,
        },
        {
          hour: 1256,
          value: 176,
        },
        {
          hour: 1271,
          value: 172,
        },
        {
          hour: 1286,
          value: 173,
        },
        {
          hour: 1301,
          value: 166,
        },
        {
          hour: 1316,
          value: 154,
        },
        {
          hour: 1331,
          value: 141,
        },
        {
          hour: 1346,
          value: 129,
        },
        {
          hour: 1361,
          value: 141,
        },
        {
          hour: 1376,
          value: 179,
        },
        {
          hour: 1391,
          value: 202,
        },
        {
          hour: 1406,
          value: 206,
        },
        {
          hour: 1421,
          value: 208,
        },
        {
          hour: 1436,
          value: 207,
        },
        {
          hour: 11,
          value: 203,
        },
        {
          hour: 26,
          value: 200,
        },
        {
          hour: 43,
          value: 183,
        },
        {
          hour: 52,
          value: 170,
        },
        {
          hour: 58,
          value: 161,
        },
        {
          hour: 73,
          value: 147,
        },
        {
          hour: 88,
          value: 140,
        },
        {
          hour: 103,
          value: 128,
        },
        {
          hour: 118,
          value: 107,
        },
        {
          hour: 133,
          value: 90,
        },
        {
          hour: 148,
          value: 78,
        },
        {
          hour: 163,
          value: 67,
        },
        {
          hour: 178,
          value: 58,
        },
        {
          hour: 193,
          value: 51,
        },
        {
          hour: 208,
          value: 46,
        },
        {
          hour: 223,
          value: 42,
        },
        {
          hour: 238,
          value: 41,
        },
        {
          hour: 253,
          value: 42,
        },
        {
          hour: 268,
          value: 43,
        },
        {
          hour: 283,
          value: 43,
        },
        {
          hour: 298,
          value: 42,
        },
        {
          hour: 313,
          value: 42,
        },
        {
          hour: 328,
          value: 45,
        },
        {
          hour: 331,
          value: 45,
        },
        {
          hour: 343,
          value: 49,
        },
        {
          hour: 360,
          value: 57,
        },
        {
          hour: 362,
          value: 62,
        },
        {
          hour: 375,
          value: 63,
        },
        {
          hour: 390,
          value: 58,
        },
        {
          hour: 405,
          value: 71,
        },
        {
          hour: 420,
          value: 115,
        },
        {
          hour: 435,
          value: 150,
        },
        {
          hour: 450,
          value: 175,
        },
        {
          hour: 465,
          value: 192,
        },
        {
          hour: 480,
          value: 192,
        },
        {
          hour: 495,
          value: 172,
        },
        {
          hour: 510,
          value: 150,
        },
        {
          hour: 525,
          value: 140,
        },
        {
          hour: 540,
          value: 142,
        },
        {
          hour: 555,
          value: 142,
        },
        {
          hour: 570,
          value: 134,
        },
        {
          hour: 585,
          value: 121,
        },
        {
          hour: 600,
          value: 107,
        },
        {
          hour: 615,
          value: 96,
        },
        {
          hour: 630,
          value: 86,
        },
        {
          hour: 646,
          value: 79,
        },
        {
          hour: 654,
          value: 93,
        },
        {
          hour: 661,
          value: 73,
        },
        {
          hour: 676,
          value: 68,
        },
        {
          hour: 691,
          value: 62,
        },
        {
          hour: 706,
          value: 59,
        },
        {
          hour: 722,
          value: 57,
        },
        {
          hour: 724,
          value: 60,
        },
        {
          hour: 737,
          value: 56,
        },
        {
          hour: 752,
          value: 74,
        },
        {
          hour: 767,
          value: 106,
        },
        {
          hour: 782,
          value: 132,
        },
        {
          hour: 797,
          value: 156,
        },
        {
          hour: 812,
          value: 167,
        },
        {
          hour: 828,
          value: 168,
        },
        {
          hour: 838,
          value: 168,
        },
        {
          hour: 843,
          value: 154,
        },
        {
          hour: 858,
          value: 151,
        },
        {
          hour: 873,
          value: 153,
        },
        {
          hour: 888,
          value: 147,
        },
        {
          hour: 903,
          value: 136,
        },
        {
          hour: 918,
          value: 122,
        },
        {
          hour: 933,
          value: 111,
        },
        {
          hour: 949,
          value: 103,
        },
        {
          hour: 957,
          value: 99,
        },
        {
          hour: 964,
          value: 98,
        },
        {
          hour: 979,
          value: 92,
        },
        {
          hour: 994,
          value: 77,
        },
        {
          hour: 1009,
          value: 68,
        },
        {
          hour: 1024,
          value: 84,
        },
        {
          hour: 1039,
          value: 137,
        },
        {
          hour: 1054,
          value: 180,
        },
        {
          hour: 1069,
          value: 207,
        },
        {
          hour: 1084,
          value: 224,
        },
        {
          hour: 1099,
          value: 247,
        },
        {
          hour: 1111,
          value: 255,
        },
        {
          hour: 1114,
          value: 266,
        },
        {
          hour: 1129,
          value: 278,
        },
        {
          hour: 1145,
          value: 279,
        },
        {
          hour: 1158,
          value: 266,
        },
        {
          hour: 1160,
          value: 265,
        },
        {
          hour: 1175,
          value: 254,
        },
        {
          hour: 1190,
          value: 245,
        },
        {
          hour: 1205,
          value: 243,
        },
        {
          hour: 1220,
          value: 253,
        },
        {
          hour: 1235,
          value: 263,
        },
        {
          hour: 1250,
          value: 278,
        },
        {
          hour: 1260,
          value: 267,
        },
        {
          hour: 1265,
          value: 275,
        },
        {
          hour: 1281,
          value: 252,
        },
        {
          hour: 1288,
          value: 246,
        },
        {
          hour: 1296,
          value: 252,
        },
        {
          hour: 1311,
          value: 250,
        },
        {
          hour: 1326,
          value: 259,
        },
        {
          hour: 1341,
          value: 287,
        },
        {
          hour: 1356,
          value: 305,
        },
        {
          hour: 1371,
          value: 310,
        },
        {
          hour: 1386,
          value: 308,
        },
        {
          hour: 1401,
          value: 297,
        },
        {
          hour: 1416,
          value: 281,
        },
        {
          hour: 1432,
          value: 261,
        },
        {
          hour: 1438,
          value: 270,
        },
        {
          hour: 7,
          value: 248,
        },
        {
          hour: 34,
          value: 252,
        },
        {
          hour: 131,
          value: 208,
        },
        {
          hour: 146,
          value: 206,
        },
        {
          hour: 161,
          value: 201,
        },
        {
          hour: 176,
          value: 191,
        },
        {
          hour: 191,
          value: 194,
        },
        {
          hour: 206,
          value: 200,
        },
        {
          hour: 221,
          value: 200,
        },
        {
          hour: 236,
          value: 202,
        },
        {
          hour: 251,
          value: 203,
        },
        {
          hour: 266,
          value: 205,
        },
        {
          hour: 281,
          value: 210,
        },
        {
          hour: 296,
          value: 216,
        },
        {
          hour: 311,
          value: 221,
        },
        {
          hour: 326,
          value: 221,
        },
        {
          hour: 341,
          value: 219,
        },
        {
          hour: 356,
          value: 221,
        },
        {
          hour: 371,
          value: 221,
        },
        {
          hour: 386,
          value: 225,
        },
        {
          hour: 401,
          value: 227,
        },
        {
          hour: 416,
          value: 222,
        },
        {
          hour: 431,
          value: 224,
        },
        {
          hour: 446,
          value: 227,
        },
        {
          hour: 461,
          value: 223,
        },
        {
          hour: 476,
          value: 224,
        },
        {
          hour: 491,
          value: 229,
        },
        {
          hour: 506,
          value: 229,
        },
        {
          hour: 521,
          value: 230,
        },
        {
          hour: 536,
          value: 237,
        },
        {
          hour: 551,
          value: 239,
        },
        {
          hour: 566,
          value: 231,
        },
        {
          hour: 581,
          value: 228,
        },
        {
          hour: 596,
          value: 234,
        },
        {
          hour: 609,
          value: 238,
        },
        {
          hour: 611,
          value: 232,
        },
        {
          hour: 626,
          value: 229,
        },
        {
          hour: 637,
          value: 232,
        },
        {
          hour: 641,
          value: 209,
        },
        {
          hour: 656,
          value: 188,
        },
        {
          hour: 671,
          value: 190,
        },
        {
          hour: 686,
          value: 206,
        },
        {
          hour: 701,
          value: 217,
        },
        {
          hour: 717,
          value: 209,
        },
        {
          hour: 718,
          value: 212,
        },
        {
          hour: 732,
          value: 194,
        },
        {
          hour: 747,
          value: 179,
        },
        {
          hour: 762,
          value: 178,
        },
        {
          hour: 777,
          value: 182,
        },
        {
          hour: 793,
          value: 173,
        },
        {
          hour: 808,
          value: 161,
        },
        {
          hour: 823,
          value: 177,
        },
        {
          hour: 838,
          value: 222,
        },
        {
          hour: 853,
          value: 256,
        },
        {
          hour: 868,
          value: 260,
        },
        {
          hour: 883,
          value: 247,
        },
        {
          hour: 898,
          value: 237,
        },
        {
          hour: 913,
          value: 232,
        },
        {
          hour: 928,
          value: 234,
        },
        {
          hour: 943,
          value: 245,
        },
        {
          hour: 958,
          value: 253,
        },
        {
          hour: 974,
          value: 251,
        },
        {
          hour: 978,
          value: 253,
        },
        {
          hour: 989,
          value: 255,
        },
        {
          hour: 1004,
          value: 263,
        },
        {
          hour: 1014,
          value: 267,
        },
        {
          hour: 1019,
          value: 252,
        },
        {
          hour: 1034,
          value: 244,
        },
        {
          hour: 1049,
          value: 252,
        },
        {
          hour: 1064,
          value: 276,
        },
        {
          hour: 1079,
          value: 299,
        },
        {
          hour: 1095,
          value: 307,
        },
        {
          hour: 1110,
          value: 311,
        },
        {
          hour: 1125,
          value: 318,
        },
        {
          hour: 1126,
          value: 308,
        },
        {
          hour: 1141,
          value: 321,
        },
        {
          hour: 1156,
          value: 327,
        },
        {
          hour: 1171,
          value: 331,
        },
        {
          hour: 1186,
          value: 337,
        },
        {
          hour: 1201,
          value: 332,
        },
        {
          hour: 1216,
          value: 321,
        },
        {
          hour: 1231,
          value: 304,
        },
        {
          hour: 1246,
          value: 288,
        },
        {
          hour: 1261,
          value: 278,
        },
        {
          hour: 1276,
          value: 268,
        },
        {
          hour: 1291,
          value: 258,
        },
        {
          hour: 1306,
          value: 243,
        },
        {
          hour: 1319,
          value: 241,
        },
        {
          hour: 1321,
          value: 234,
        },
        {
          hour: 1336,
          value: 228,
        },
        {
          hour: 1351,
          value: 211,
        },
        {
          hour: 1366,
          value: 188,
        },
        {
          hour: 1381,
          value: 188,
        },
        {
          hour: 1399,
          value: 221,
        },
        {
          hour: 1410,
          value: 218,
        },
        {
          hour: 1414,
          value: 231,
        },
        {
          hour: 1429,
          value: 212,
        },
        {
          hour: 4,
          value: 188,
        },
        {
          hour: 19,
          value: 184,
        },
        {
          hour: 34,
          value: 186,
        },
        {
          hour: 49,
          value: 178,
        },
        {
          hour: 64,
          value: 168,
        },
        {
          hour: 79,
          value: 164,
        },
        {
          hour: 94,
          value: 160,
        },
        {
          hour: 109,
          value: 151,
        },
        {
          hour: 124,
          value: 145,
        },
        {
          hour: 139,
          value: 141,
        },
        {
          hour: 154,
          value: 140,
        },
        {
          hour: 169,
          value: 146,
        },
        {
          hour: 184,
          value: 144,
        },
        {
          hour: 199,
          value: 130,
        },
        {
          hour: 214,
          value: 121,
        },
        {
          hour: 229,
          value: 125,
        },
        {
          hour: 244,
          value: 135,
        },
        {
          hour: 259,
          value: 140,
        },
        {
          hour: 274,
          value: 149,
        },
        {
          hour: 289,
          value: 174,
        },
        {
          hour: 304,
          value: 179,
        },
        {
          hour: 319,
          value: 172,
        },
        {
          hour: 334,
          value: 177,
        },
        {
          hour: 349,
          value: 183,
        },
        {
          hour: 366,
          value: 187,
        },
        {
          hour: 368,
          value: 190,
        },
        {
          hour: 381,
          value: 182,
        },
        {
          hour: 396,
          value: 166,
        },
        {
          hour: 411,
          value: 138,
        },
        {
          hour: 426,
          value: 136,
        },
        {
          hour: 441,
          value: 167,
        },
        {
          hour: 456,
          value: 192,
        },
        {
          hour: 471,
          value: 199,
        },
        {
          hour: 486,
          value: 201,
        },
        {
          hour: 501,
          value: 201,
        },
        {
          hour: 516,
          value: 195,
        },
        {
          hour: 531,
          value: 186,
        },
        {
          hour: 547,
          value: 175,
        },
        {
          hour: 551,
          value: 172,
        },
        {
          hour: 562,
          value: 167,
        },
        {
          hour: 577,
          value: 153,
        },
        {
          hour: 592,
          value: 142,
        },
        {
          hour: 607,
          value: 150,
        },
        {
          hour: 622,
          value: 154,
        },
        {
          hour: 637,
          value: 140,
        },
        {
          hour: 652,
          value: 126,
        },
        {
          hour: 668,
          value: 110,
        },
        {
          hour: 679,
          value: 100,
        },
        {
          hour: 683,
          value: 91,
        },
        {
          hour: 698,
          value: 75,
        },
        {
          hour: 713,
          value: 76,
        },
        {
          hour: 728,
          value: 94,
        },
        {
          hour: 743,
          value: 113,
        },
        {
          hour: 759,
          value: 129,
        },
        {
          hour: 761,
          value: 129,
        },
        {
          hour: 774,
          value: 143,
        },
        {
          hour: 789,
          value: 149,
        },
        {
          hour: 804,
          value: 144,
        },
        {
          hour: 819,
          value: 136,
        },
        {
          hour: 834,
          value: 129,
        },
        {
          hour: 849,
          value: 115,
        },
        {
          hour: 864,
          value: 98,
        },
        {
          hour: 880,
          value: 83,
        },
        {
          hour: 892,
          value: 75,
        },
        {
          hour: 895,
          value: 73,
        },
        {
          hour: 910,
          value: 79,
        },
        {
          hour: 925,
          value: 95,
        },
        {
          hour: 940,
          value: 100,
        },
        {
          hour: 955,
          value: 92,
        },
        {
          hour: 970,
          value: 79,
        },
        {
          hour: 985,
          value: 68,
        },
        {
          hour: 1000,
          value: 59,
        },
        {
          hour: 1015,
          value: 44,
        },
        {
          hour: 1027,
          value: 40,
        },
        {
          hour: 1031,
          value: 40,
        },
        {
          hour: 1043,
          value: 40,
        },
        {
          hour: 1046,
          value: 40,
        },
        {
          hour: 1061,
          value: 43,
        },
        {
          hour: 1076,
          value: 48,
        },
        {
          hour: 1090,
          value: 44,
        },
        {
          hour: 1094,
          value: 44,
        },
        {
          hour: 1105,
          value: 45,
        },
        {
          hour: 1120,
          value: 68,
        },
        {
          hour: 1136,
          value: 111,
        },
        {
          hour: 1144,
          value: 126,
        },
        {
          hour: 1151,
          value: 119,
        },
        {
          hour: 1166,
          value: 116,
        },
        {
          hour: 1181,
          value: 125,
        },
        {
          hour: 1196,
          value: 141,
        },
        {
          hour: 1211,
          value: 142,
        },
        {
          hour: 1227,
          value: 138,
        },
        {
          hour: 1234,
          value: 132,
        },
        {
          hour: 1242,
          value: 130,
        },
        {
          hour: 1257,
          value: 126,
        },
        {
          hour: 1272,
          value: 133,
        },
        {
          hour: 1287,
          value: 142,
        },
        {
          hour: 1302,
          value: 154,
        },
        {
          hour: 1317,
          value: 172,
        },
        {
          hour: 1332,
          value: 175,
        },
        {
          hour: 1338,
          value: 178,
        },
        {
          hour: 1347,
          value: 173,
        },
        {
          hour: 1362,
          value: 183,
        },
        {
          hour: 1378,
          value: 192,
        },
        {
          hour: 1389,
          value: 197,
        },
        {
          hour: 1393,
          value: 185,
        },
        {
          hour: 1408,
          value: 185,
        },
        {
          hour: 1423,
          value: 185,
        },
        {
          hour: 1432,
          value: 185,
        },
        {
          hour: 1438,
          value: 187,
        },
        {
          hour: 13,
          value: 194,
        },
        {
          hour: 28,
          value: 186,
        },
        {
          hour: 43,
          value: 181,
        },
        {
          hour: 58,
          value: 183,
        },
        {
          hour: 73,
          value: 176,
        },
        {
          hour: 90,
          value: 170,
        },
        {
          hour: 100,
          value: 167,
        },
        {
          hour: 105,
          value: 172,
        },
        {
          hour: 120,
          value: 170,
        },
        {
          hour: 135,
          value: 169,
        },
        {
          hour: 150,
          value: 164,
        },
        {
          hour: 165,
          value: 163,
        },
        {
          hour: 180,
          value: 171,
        },
        {
          hour: 195,
          value: 175,
        },
        {
          hour: 210,
          value: 173,
        },
        {
          hour: 225,
          value: 176,
        },
        {
          hour: 240,
          value: 182,
        },
        {
          hour: 255,
          value: 184,
        },
        {
          hour: 270,
          value: 189,
        },
        {
          hour: 285,
          value: 190,
        },
        {
          hour: 300,
          value: 197,
        },
        {
          hour: 315,
          value: 193,
        },
        {
          hour: 330,
          value: 202,
        },
        {
          hour: 345,
          value: 210,
        },
        {
          hour: 362,
          value: 198,
        },
        {
          hour: 363,
          value: 207,
        },
        {
          hour: 377,
          value: 173,
        },
        {
          hour: 392,
          value: 146,
        },
        {
          hour: 407,
          value: 126,
        },
        {
          hour: 422,
          value: 118,
        },
        {
          hour: 437,
          value: 126,
        },
        {
          hour: 452,
          value: 149,
        },
        {
          hour: 467,
          value: 182,
        },
        {
          hour: 482,
          value: 218,
        },
        {
          hour: 497,
          value: 247,
        },
        {
          hour: 512,
          value: 258,
        },
        {
          hour: 527,
          value: 253,
        },
        {
          hour: 543,
          value: 227,
        },
        {
          hour: 553,
          value: 227,
        },
        {
          hour: 558,
          value: 200,
        },
        {
          hour: 573,
          value: 195,
        },
        {
          hour: 588,
          value: 196,
        },
        {
          hour: 603,
          value: 180,
        },
        {
          hour: 618,
          value: 166,
        },
        {
          hour: 633,
          value: 152,
        },
        {
          hour: 648,
          value: 131,
        },
        {
          hour: 662,
          value: 119,
        },
        {
          hour: 663,
          value: 115,
        },
        {
          hour: 678,
          value: 93,
        },
        {
          hour: 680,
          value: 91,
        },
        {
          hour: 693,
          value: 78,
        },
        {
          hour: 708,
          value: 77,
        },
        {
          hour: 723,
          value: 84,
        },
        {
          hour: 738,
          value: 91,
        },
        {
          hour: 753,
          value: 100,
        },
        {
          hour: 768,
          value: 108,
        },
        {
          hour: 783,
          value: 116,
        },
        {
          hour: 799,
          value: 132,
        },
        {
          hour: 811,
          value: 144,
        },
        {
          hour: 814,
          value: 146,
        },
        {
          hour: 829,
          value: 153,
        },
        {
          hour: 845,
          value: 148,
        },
        {
          hour: 848,
          value: 163,
        },
        {
          hour: 860,
          value: 132,
        },
        {
          hour: 875,
          value: 116,
        },
        {
          hour: 890,
          value: 107,
        },
        {
          hour: 905,
          value: 96,
        },
        {
          hour: 920,
          value: 84,
        },
        {
          hour: 935,
          value: 83,
        },
        {
          hour: 950,
          value: 79,
        },
        {
          hour: 965,
          value: 66,
        },
        {
          hour: 980,
          value: 60,
        },
        {
          hour: 995,
          value: 53,
        },
        {
          hour: 998,
          value: 52,
        },
        {
          hour: 1010,
          value: 45,
        },
        {
          hour: 1025,
          value: 49,
        },
        {
          hour: 1042,
          value: 75,
        },
        {
          hour: 1043,
          value: 81,
        },
        {
          hour: 1057,
          value: 97,
        },
        {
          hour: 1072,
          value: 104,
        },
        {
          hour: 1087,
          value: 113,
        },
        {
          hour: 1102,
          value: 127,
        },
        {
          hour: 1117,
          value: 147,
        },
        {
          hour: 1132,
          value: 159,
        },
        {
          hour: 1147,
          value: 150,
        },
        {
          hour: 1162,
          value: 137,
        },
        {
          hour: 1177,
          value: 132,
        },
        {
          hour: 1192,
          value: 122,
        },
        {
          hour: 1197,
          value: 121,
        },
        {
          hour: 1207,
          value: 117,
        },
        {
          hour: 1222,
          value: 116,
        },
        {
          hour: 1226,
          value: 116,
        },
        {
          hour: 1237,
          value: 124,
        },
        {
          hour: 1252,
          value: 133,
        },
        {
          hour: 1267,
          value: 130,
        },
        {
          hour: 1283,
          value: 126,
        },
        {
          hour: 1286,
          value: 122,
        },
        {
          hour: 1298,
          value: 122,
        },
        {
          hour: 1313,
          value: 121,
        },
        {
          hour: 1328,
          value: 137,
        },
        {
          hour: 1343,
          value: 168,
        },
        {
          hour: 1358,
          value: 183,
        },
        {
          hour: 1376,
          value: 177,
        },
        {
          hour: 1378,
          value: 187,
        },
        {
          hour: 1391,
          value: 152,
        },
        {
          hour: 1406,
          value: 141,
        },
        {
          hour: 1421,
          value: 128,
        },
        {
          hour: 1436,
          value: 116,
        },
        {
          hour: 11,
          value: 108,
        },
        {
          hour: 26,
          value: 101,
        },
        {
          hour: 41,
          value: 97,
        },
        {
          hour: 56,
          value: 92,
        },
        {
          hour: 71,
          value: 84,
        },
        {
          hour: 86,
          value: 77,
        },
        {
          hour: 101,
          value: 72,
        },
        {
          hour: 116,
          value: 71,
        },
        {
          hour: 131,
          value: 71,
        },
        {
          hour: 146,
          value: 64,
        },
        {
          hour: 161,
          value: 59,
        },
        {
          hour: 176,
          value: 55,
        },
        {
          hour: 191,
          value: 50,
        },
        {
          hour: 206,
          value: 49,
        },
        {
          hour: 221,
          value: 49,
        },
        {
          hour: 236,
          value: 51,
        },
        {
          hour: 251,
          value: 54,
        },
        {
          hour: 266,
          value: 59,
        },
        {
          hour: 281,
          value: 62,
        },
        {
          hour: 296,
          value: 61,
        },
        {
          hour: 311,
          value: 60,
        },
        {
          hour: 326,
          value: 61,
        },
        {
          hour: 341,
          value: 64,
        },
        {
          hour: 356,
          value: 66,
        },
        {
          hour: 362,
          value: 67,
        },
        {
          hour: 371,
          value: 63,
        },
        {
          hour: 388,
          value: 67,
        },
        {
          hour: 397,
          value: 65,
        },
        {
          hour: 403,
          value: 75,
        },
        {
          hour: 418,
          value: 81,
        },
        {
          hour: 433,
          value: 92,
        },
        {
          hour: 448,
          value: 119,
        },
        {
          hour: 463,
          value: 151,
        },
        {
          hour: 478,
          value: 171,
        },
        {
          hour: 493,
          value: 171,
        },
        {
          hour: 508,
          value: 152,
        },
        {
          hour: 523,
          value: 117,
        },
        {
          hour: 529,
          value: 107,
        },
        {
          hour: 538,
          value: 91,
        },
        {
          hour: 553,
          value: 76,
        },
        {
          hour: 568,
          value: 72,
        },
        {
          hour: 570,
          value: 68,
        },
        {
          hour: 583,
          value: 75,
        },
        {
          hour: 599,
          value: 75,
        },
        {
          hour: 600,
          value: 69,
        },
        {
          hour: 614,
          value: 81,
        },
        {
          hour: 629,
          value: 89,
        },
        {
          hour: 644,
          value: 85,
        },
        {
          hour: 659,
          value: 73,
        },
        {
          hour: 674,
          value: 63,
        },
        {
          hour: 676,
          value: 67,
        },
        {
          hour: 689,
          value: 58,
        },
        {
          hour: 704,
          value: 52,
        },
        {
          hour: 719,
          value: 43,
        },
        {
          hour: 729,
          value: 40,
        },
        {
          hour: 734,
          value: 47,
        },
        {
          hour: 749,
          value: 65,
        },
        {
          hour: 764,
          value: 90,
        },
        {
          hour: 780,
          value: 95,
        },
        {
          hour: 783,
          value: 101,
        },
        {
          hour: 795,
          value: 84,
        },
        {
          hour: 810,
          value: 77,
        },
        {
          hour: 826,
          value: 77,
        },
        {
          hour: 838,
          value: 80,
        },
        {
          hour: 841,
          value: 68,
        },
        {
          hour: 856,
          value: 59,
        },
        {
          hour: 871,
          value: 51,
        },
        {
          hour: 881,
          value: 52,
        },
        {
          hour: 886,
          value: 51,
        },
        {
          hour: 895,
          value: 55,
        },
        {
          hour: 901,
          value: 65,
        },
        {
          hour: 916,
          value: 68,
        },
        {
          hour: 929,
          value: 66,
        },
        {
          hour: 932,
          value: 66,
        },
        {
          hour: 940,
          value: 72,
        },
        {
          hour: 947,
          value: 68,
        },
        {
          hour: 962,
          value: 80,
        },
        {
          hour: 977,
          value: 97,
        },
        {
          hour: 992,
          value: 105,
        },
        {
          hour: 1007,
          value: 103,
        },
        {
          hour: 1022,
          value: 96,
        },
        {
          hour: 1037,
          value: 80,
        },
        {
          hour: 1052,
          value: 70,
        },
        {
          hour: 1067,
          value: 73,
        },
        {
          hour: 1082,
          value: 88,
        },
        {
          hour: 1083,
          value: 91,
        },
        {
          hour: 1097,
          value: 89,
        },
        {
          hour: 1112,
          value: 111,
        },
        {
          hour: 1127,
          value: 145,
        },
        {
          hour: 1142,
          value: 162,
        },
        {
          hour: 1158,
          value: 159,
        },
        {
          hour: 1168,
          value: 171,
        },
        {
          hour: 1173,
          value: 171,
        },
        {
          hour: 1188,
          value: 189,
        },
        {
          hour: 1203,
          value: 191,
        },
        {
          hour: 1219,
          value: 178,
        },
        {
          hour: 1222,
          value: 180,
        },
        {
          hour: 1234,
          value: 182,
        },
        {
          hour: 1249,
          value: 214,
        },
        {
          hour: 1264,
          value: 245,
        },
        {
          hour: 1279,
          value: 259,
        },
        {
          hour: 1294,
          value: 271,
        },
        {
          hour: 1309,
          value: 269,
        },
        {
          hour: 1324,
          value: 265,
        },
        {
          hour: 1339,
          value: 269,
        },
        {
          hour: 1354,
          value: 267,
        },
        {
          hour: 1367,
          value: 260,
        },
        {
          hour: 1369,
          value: 261,
        },
        {
          hour: 1384,
          value: 264,
        },
        {
          hour: 1399,
          value: 256,
        },
        {
          hour: 1414,
          value: 257,
        },
        {
          hour: 1432,
          value: 292,
        },
        {
          hour: 1437,
          value: 309,
        },
        {
          hour: 7,
          value: 308,
        },
        {
          hour: 22,
          value: 315,
        },
        {
          hour: 37,
          value: 310,
        },
        {
          hour: 52,
          value: 294,
        },
        {
          hour: 67,
          value: 285,
        },
        {
          hour: 82,
          value: 278,
        },
        {
          hour: 97,
          value: 270,
        },
        {
          hour: 112,
          value: 266,
        },
        {
          hour: 127,
          value: 269,
        },
        {
          hour: 142,
          value: 260,
        },
        {
          hour: 157,
          value: 244,
        },
        {
          hour: 172,
          value: 236,
        },
        {
          hour: 187,
          value: 227,
        },
        {
          hour: 202,
          value: 224,
        },
        {
          hour: 217,
          value: 233,
        },
        {
          hour: 232,
          value: 237,
        },
        {
          hour: 247,
          value: 234,
        },
        {
          hour: 262,
          value: 239,
        },
        {
          hour: 277,
          value: 230,
        },
        {
          hour: 292,
          value: 224,
        },
        {
          hour: 307,
          value: 221,
        },
        {
          hour: 322,
          value: 217,
        },
        {
          hour: 337,
          value: 217,
        },
        {
          hour: 352,
          value: 223,
        },
        {
          hour: 361,
          value: 220,
        },
        {
          hour: 367,
          value: 212,
        },
        {
          hour: 382,
          value: 196,
        },
        {
          hour: 397,
          value: 170,
        },
        {
          hour: 414,
          value: 126,
        },
        {
          hour: 429,
          value: 107,
        },
        {
          hour: 444,
          value: 135,
        },
        {
          hour: 459,
          value: 174,
        },
        {
          hour: 474,
          value: 212,
        },
        {
          hour: 489,
          value: 237,
        },
        {
          hour: 504,
          value: 240,
        },
        {
          hour: 519,
          value: 227,
        },
        {
          hour: 534,
          value: 206,
        },
        {
          hour: 550,
          value: 175,
        },
        {
          hour: 562,
          value: 156,
        },
        {
          hour: 565,
          value: 153,
        },
        {
          hour: 580,
          value: 149,
        },
        {
          hour: 595,
          value: 145,
        },
        {
          hour: 610,
          value: 130,
        },
        {
          hour: 625,
          value: 108,
        },
        {
          hour: 640,
          value: 91,
        },
        {
          hour: 655,
          value: 78,
        },
        {
          hour: 664,
          value: 77,
        },
        {
          hour: 670,
          value: 70,
        },
        {
          hour: 685,
          value: 62,
        },
        {
          hour: 700,
          value: 57,
        },
        {
          hour: 715,
          value: 57,
        },
        {
          hour: 726,
          value: 59,
        },
        {
          hour: 727,
          value: 59,
        },
        {
          hour: 730,
          value: 64,
        },
        {
          hour: 745,
          value: 78,
        },
        {
          hour: 760,
          value: 93,
        },
        {
          hour: 775,
          value: 94,
        },
        {
          hour: 790,
          value: 86,
        },
        {
          hour: 806,
          value: 73,
        },
        {
          hour: 815,
          value: 67,
        },
        {
          hour: 821,
          value: 63,
        },
        {
          hour: 836,
          value: 58,
        },
        {
          hour: 852,
          value: 65,
        },
        {
          hour: 854,
          value: 71,
        },
        {
          hour: 864,
          value: 70,
        },
        {
          hour: 867,
          value: 60,
        },
        {
          hour: 882,
          value: 62,
        },
        {
          hour: 897,
          value: 73,
        },
        {
          hour: 912,
          value: 68,
        },
        {
          hour: 927,
          value: 60,
        },
        {
          hour: 942,
          value: 56,
        },
        {
          hour: 957,
          value: 56,
        },
        {
          hour: 972,
          value: 56,
        },
        {
          hour: 987,
          value: 55,
        },
        {
          hour: 993,
          value: 56,
        },
        {
          hour: 1003,
          value: 52,
        },
        {
          hour: 1007,
          value: 52,
        },
        {
          hour: 1018,
          value: 52,
        },
        {
          hour: 1033,
          value: 67,
        },
        {
          hour: 1048,
          value: 91,
        },
        {
          hour: 1063,
          value: 107,
        },
        {
          hour: 1078,
          value: 106,
        },
        {
          hour: 1079,
          value: 110,
        },
        {
          hour: 1093,
          value: 115,
        },
        {
          hour: 1108,
          value: 138,
        },
        {
          hour: 1123,
          value: 177,
        },
        {
          hour: 1138,
          value: 211,
        },
        {
          hour: 1153,
          value: 231,
        },
        {
          hour: 1168,
          value: 255,
        },
        {
          hour: 1179,
          value: 264,
        },
        {
          hour: 1183,
          value: 273,
        },
        {
          hour: 1200,
          value: 286,
        },
        {
          hour: 1206,
          value: 300,
        },
        {
          hour: 1215,
          value: 288,
        },
        {
          hour: 1230,
          value: 291,
        },
        {
          hour: 1245,
          value: 281,
        },
        {
          hour: 1260,
          value: 261,
        },
        {
          hour: 1275,
          value: 241,
        },
        {
          hour: 1290,
          value: 222,
        },
        {
          hour: 1305,
          value: 202,
        },
        {
          hour: 1320,
          value: 187,
        },
        {
          hour: 1335,
          value: 173,
        },
        {
          hour: 1350,
          value: 159,
        },
        {
          hour: 1365,
          value: 143,
        },
        {
          hour: 1380,
          value: 129,
        },
        {
          hour: 1395,
          value: 125,
        },
        {
          hour: 1404,
          value: 127,
        },
        {
          hour: 1410,
          value: 133,
        },
        {
          hour: 1425,
          value: 151,
        },
        {
          hour: 3,
          value: 176,
        },
        {
          hour: 18,
          value: 174,
        },
        {
          hour: 33,
          value: 185,
        },
        {
          hour: 48,
          value: 205,
        },
        {
          hour: 63,
          value: 219,
        },
        {
          hour: 78,
          value: 230,
        },
        {
          hour: 93,
          value: 242,
        },
        {
          hour: 108,
          value: 253,
        },
        {
          hour: 123,
          value: 258,
        },
        {
          hour: 138,
          value: 245,
        },
        {
          hour: 153,
          value: 235,
        },
        {
          hour: 168,
          value: 234,
        },
        {
          hour: 183,
          value: 224,
        },
        {
          hour: 198,
          value: 218,
        },
        {
          hour: 213,
          value: 213,
        },
        {
          hour: 228,
          value: 207,
        },
        {
          hour: 243,
          value: 205,
        },
        {
          hour: 258,
          value: 206,
        },
        {
          hour: 273,
          value: 203,
        },
        {
          hour: 288,
          value: 203,
        },
        {
          hour: 303,
          value: 211,
        },
        {
          hour: 318,
          value: 211,
        },
        {
          hour: 333,
          value: 209,
        },
        {
          hour: 348,
          value: 219,
        },
        {
          hour: 360,
          value: 230,
        },
        {
          hour: 363,
          value: 217,
        },
        {
          hour: 379,
          value: 205,
        },
        {
          hour: 392,
          value: 192,
        },
        {
          hour: 394,
          value: 187,
        },
        {
          hour: 409,
          value: 159,
        },
        {
          hour: 424,
          value: 147,
        },
        {
          hour: 439,
          value: 164,
        },
        {
          hour: 454,
          value: 185,
        },
        {
          hour: 469,
          value: 197,
        },
        {
          hour: 481,
          value: 201,
        },
        {
          hour: 484,
          value: 196,
        },
        {
          hour: 499,
          value: 190,
        },
        {
          hour: 514,
          value: 173,
        },
        {
          hour: 529,
          value: 148,
        },
        {
          hour: 544,
          value: 135,
        },
        {
          hour: 559,
          value: 118,
        },
        {
          hour: 561,
          value: 113,
        },
        {
          hour: 576,
          value: 107,
        },
        {
          hour: 591,
          value: 119,
        },
        {
          hour: 606,
          value: 119,
        },
        {
          hour: 621,
          value: 114,
        },
        {
          hour: 636,
          value: 120,
        },
        {
          hour: 651,
          value: 122,
        },
        {
          hour: 666,
          value: 118,
        },
        {
          hour: 681,
          value: 108,
        },
        {
          hour: 693,
          value: 104,
        },
        {
          hour: 696,
          value: 97,
        },
        {
          hour: 711,
          value: 79,
        },
        {
          hour: 726,
          value: 66,
        },
        {
          hour: 741,
          value: 57,
        },
        {
          hour: 756,
          value: 46,
        },
        {
          hour: 771,
          value: 40,
        },
        {
          hour: 786,
          value: 43,
        },
        {
          hour: 789,
          value: 45,
        },
        {
          hour: 801,
          value: 49,
        },
        {
          hour: 816,
          value: 58,
        },
        {
          hour: 831,
          value: 60,
        },
        {
          hour: 846,
          value: 53,
        },
        {
          hour: 856,
          value: 49,
        },
        {
          hour: 862,
          value: 42,
        },
        {
          hour: 870,
          value: 40,
        },
        {
          hour: 874,
          value: 40,
        },
        {
          hour: 877,
          value: 40,
        },
        {
          hour: 893,
          value: 49,
        },
        {
          hour: 899,
          value: 66,
        },
        {
          hour: 908,
          value: 81,
        },
        {
          hour: 923,
          value: 102,
        },
        {
          hour: 938,
          value: 95,
        },
        {
          hour: 953,
          value: 82,
        },
        {
          hour: 968,
          value: 83,
        },
        {
          hour: 983,
          value: 88,
        },
        {
          hour: 998,
          value: 85,
        },
        {
          hour: 1013,
          value: 82,
        },
        {
          hour: 1028,
          value: 91,
        },
        {
          hour: 1043,
          value: 101,
        },
        {
          hour: 1058,
          value: 100,
        },
        {
          hour: 1072,
          value: 99,
        },
        {
          hour: 1073,
          value: 92,
        },
        {
          hour: 1088,
          value: 88,
        },
        {
          hour: 1103,
          value: 111,
        },
        {
          hour: 1118,
          value: 155,
        },
        {
          hour: 1134,
          value: 200,
        },
        {
          hour: 1135,
          value: 212,
        },
        {
          hour: 1149,
          value: 217,
        },
        {
          hour: 1164,
          value: 224,
        },
        {
          hour: 1179,
          value: 242,
        },
        {
          hour: 1192,
          value: 256,
        },
        {
          hour: 1194,
          value: 248,
        },
        {
          hour: 1209,
          value: 265,
        },
        {
          hour: 1224,
          value: 284,
        },
        {
          hour: 1239,
          value: 297,
        },
        {
          hour: 1254,
          value: 295,
        },
        {
          hour: 1269,
          value: 289,
        },
        {
          hour: 1286,
          value: 287,
        },
        {
          hour: 1303,
          value: 279,
        },
        {
          hour: 1318,
          value: 274,
        },
        {
          hour: 1333,
          value: 256,
        },
        {
          hour: 1348,
          value: 247,
        },
        {
          hour: 1363,
          value: 258,
        },
        {
          hour: 1378,
          value: 292,
        },
        {
          hour: 1393,
          value: 315,
        },
        {
          hour: 1408,
          value: 319,
        },
        {
          hour: 1423,
          value: 323,
        },
        {
          hour: 1438,
          value: 329,
        },
        {
          hour: 13,
          value: 320,
        },
        {
          hour: 28,
          value: 307,
        },
        {
          hour: 43,
          value: 293,
        },
        {
          hour: 58,
          value: 289,
        },
        {
          hour: 73,
          value: 293,
        },
        {
          hour: 88,
          value: 295,
        },
        {
          hour: 103,
          value: 293,
        },
        {
          hour: 118,
          value: 292,
        },
        {
          hour: 133,
          value: 294,
        },
        {
          hour: 148,
          value: 290,
        },
        {
          hour: 163,
          value: 275,
        },
        {
          hour: 178,
          value: 269,
        },
        {
          hour: 193,
          value: 267,
        },
        {
          hour: 208,
          value: 271,
        },
        {
          hour: 223,
          value: 277,
        },
        {
          hour: 238,
          value: 278,
        },
        {
          hour: 253,
          value: 277,
        },
        {
          hour: 268,
          value: 277,
        },
        {
          hour: 283,
          value: 272,
        },
        {
          hour: 298,
          value: 281,
        },
        {
          hour: 313,
          value: 285,
        },
        {
          hour: 328,
          value: 307,
        },
        {
          hour: 331,
          value: 312,
        },
        {
          hour: 343,
          value: 310,
        },
        {
          hour: 358,
          value: 306,
        },
        {
          hour: 373,
          value: 277,
        },
        {
          hour: 388,
          value: 229,
        },
        {
          hour: 405,
          value: 176,
        },
        {
          hour: 411,
          value: 156,
        },
        {
          hour: 420,
          value: 144,
        },
        {
          hour: 435,
          value: 153,
        },
        {
          hour: 450,
          value: 189,
        },
        {
          hour: 465,
          value: 222,
        },
        {
          hour: 480,
          value: 237,
        },
        {
          hour: 495,
          value: 226,
        },
        {
          hour: 510,
          value: 198,
        },
        {
          hour: 525,
          value: 164,
        },
        {
          hour: 540,
          value: 132,
        },
        {
          hour: 555,
          value: 108,
        },
        {
          hour: 570,
          value: 87,
        },
        {
          hour: 585,
          value: 71,
        },
        {
          hour: 600,
          value: 61,
        },
        {
          hour: 615,
          value: 53,
        },
        {
          hour: 630,
          value: 45,
        },
        {
          hour: 645,
          value: 44,
        },
        {
          hour: 661,
          value: 47,
        },
        {
          hour: 672,
          value: 48,
        },
        {
          hour: 676,
          value: 48,
        },
        {
          hour: 691,
          value: 54,
        },
        {
          hour: 702,
          value: 70,
        },
        {
          hour: 706,
          value: 82,
        },
        {
          hour: 721,
          value: 122,
        },
        {
          hour: 736,
          value: 171,
        },
        {
          hour: 751,
          value: 206,
        },
        {
          hour: 766,
          value: 210,
        },
        {
          hour: 781,
          value: 196,
        },
        {
          hour: 797,
          value: 162,
        },
        {
          hour: 800,
          value: 160,
        },
        {
          hour: 812,
          value: 141,
        },
        {
          hour: 827,
          value: 139,
        },
        {
          hour: 842,
          value: 139,
        },
        {
          hour: 857,
          value: 135,
        },
        {
          hour: 873,
          value: 141,
        },
        {
          hour: 874,
          value: 131,
        },
        {
          hour: 889,
          value: 124,
        },
        {
          hour: 904,
          value: 124,
        },
        {
          hour: 919,
          value: 135,
        },
        {
          hour: 934,
          value: 149,
        },
        {
          hour: 949,
          value: 160,
        },
        {
          hour: 964,
          value: 176,
        },
        {
          hour: 979,
          value: 205,
        },
        {
          hour: 994,
          value: 228,
        },
        {
          hour: 1009,
          value: 237,
        },
        {
          hour: 1024,
          value: 242,
        },
        {
          hour: 1039,
          value: 235,
        },
        {
          hour: 1054,
          value: 222,
        },
        {
          hour: 1070,
          value: 215,
        },
        {
          hour: 1077,
          value: 213,
        },
        {
          hour: 1085,
          value: 213,
        },
        {
          hour: 1100,
          value: 216,
        },
        {
          hour: 1115,
          value: 209,
        },
        {
          hour: 1130,
          value: 195,
        },
        {
          hour: 1145,
          value: 183,
        },
        {
          hour: 1161,
          value: 178,
        },
        {
          hour: 1165,
          value: 187,
        },
        {
          hour: 1176,
          value: 156,
        },
        {
          hour: 1191,
          value: 135,
        },
        {
          hour: 1206,
          value: 113,
        },
        {
          hour: 1221,
          value: 84,
        },
        {
          hour: 1236,
          value: 63,
        },
        {
          hour: 1251,
          value: 44,
        },
        {
          hour: 1266,
          value: 40,
        },
        {
          hour: 1281,
          value: 46,
        },
        {
          hour: 1296,
          value: 54,
        },
        {
          hour: 1311,
          value: 68,
        },
        {
          hour: 1326,
          value: 92,
        },
        {
          hour: 1341,
          value: 101,
        },
        {
          hour: 1356,
          value: 95,
        },
        {
          hour: 1371,
          value: 88,
        },
        {
          hour: 1386,
          value: 86,
        },
        {
          hour: 1401,
          value: 87,
        },
        {
          hour: 1416,
          value: 99,
        },
        {
          hour: 1431,
          value: 122,
        },
        {
          hour: 6,
          value: 153,
        },
        {
          hour: 21,
          value: 187,
        },
        {
          hour: 37,
          value: 216,
        },
        {
          hour: 49,
          value: 239,
        },
        {
          hour: 52,
          value: 244,
        },
        {
          hour: 67,
          value: 275,
        },
        {
          hour: 82,
          value: 306,
        },
        {
          hour: 97,
          value: 335,
        },
        {
          hour: 112,
          value: 360,
        },
        {
          hour: 129,
          value: 377,
        },
        {
          hour: 130,
          value: 396,
        },
        {
          hour: 144,
          value: 374,
        },
        {
          hour: 159,
          value: 382,
        },
        {
          hour: 174,
          value: 379,
        },
        {
          hour: 189,
          value: 368,
        },
        {
          hour: 204,
          value: 358,
        },
        {
          hour: 219,
          value: 346,
        },
        {
          hour: 234,
          value: 344,
        },
        {
          hour: 249,
          value: 354,
        },
        {
          hour: 264,
          value: 350,
        },
        {
          hour: 279,
          value: 336,
        },
        {
          hour: 294,
          value: 323,
        },
        {
          hour: 309,
          value: 324,
        },
        {
          hour: 324,
          value: 341,
        },
        {
          hour: 339,
          value: 343,
        },
        {
          hour: 354,
          value: 333,
        },
        {
          hour: 369,
          value: 330,
        },
        {
          hour: 385,
          value: 343,
        },
        {
          hour: 390,
          value: 348,
        },
        {
          hour: 400,
          value: 347,
        },
        {
          hour: 415,
          value: 337,
        },
        {
          hour: 430,
          value: 309,
        },
        {
          hour: 445,
          value: 279,
        },
        {
          hour: 460,
          value: 285,
        },
        {
          hour: 475,
          value: 313,
        },
        {
          hour: 490,
          value: 312,
        },
        {
          hour: 505,
          value: 291,
        },
        {
          hour: 520,
          value: 272,
        },
        {
          hour: 535,
          value: 258,
        },
        {
          hour: 550,
          value: 256,
        },
        {
          hour: 554,
          value: 270,
        },
        {
          hour: 565,
          value: 252,
        },
        {
          hour: 580,
          value: 239,
        },
        {
          hour: 595,
          value: 220,
        },
        {
          hour: 610,
          value: 203,
        },
        {
          hour: 625,
          value: 177,
        },
        {
          hour: 640,
          value: 147,
        },
        {
          hour: 657,
          value: 118,
        },
        {
          hour: 668,
          value: 109,
        },
        {
          hour: 672,
          value: 103,
        },
        {
          hour: 687,
          value: 105,
        },
        {
          hour: 702,
          value: 115,
        },
        {
          hour: 718,
          value: 132,
        },
        {
          hour: 730,
          value: 138,
        },
        {
          hour: 733,
          value: 141,
        },
        {
          hour: 748,
          value: 137,
        },
        {
          hour: 763,
          value: 128,
        },
        {
          hour: 778,
          value: 117,
        },
        {
          hour: 793,
          value: 102,
        },
        {
          hour: 808,
          value: 91,
        },
        {
          hour: 823,
          value: 87,
        },
        {
          hour: 838,
          value: 84,
        },
        {
          hour: 854,
          value: 77,
        },
        {
          hour: 861,
          value: 74,
        },
        {
          hour: 869,
          value: 73,
        },
        {
          hour: 884,
          value: 71,
        },
        {
          hour: 899,
          value: 62,
        },
        {
          hour: 914,
          value: 58,
        },
        {
          hour: 929,
          value: 85,
        },
        {
          hour: 944,
          value: 124,
        },
        {
          hour: 959,
          value: 134,
        },
        {
          hour: 974,
          value: 129,
        },
        {
          hour: 989,
          value: 107,
        },
        {
          hour: 1004,
          value: 78,
        },
        {
          hour: 1019,
          value: 66,
        },
        {
          hour: 1034,
          value: 60,
        },
        {
          hour: 1049,
          value: 51,
        },
        {
          hour: 1055,
          value: 51,
        },
        {
          hour: 1064,
          value: 47,
        },
        {
          hour: 1079,
          value: 64,
        },
        {
          hour: 1097,
          value: 107,
        },
        {
          hour: 1099,
          value: 111,
        },
        {
          hour: 1112,
          value: 138,
        },
        {
          hour: 1127,
          value: 164,
        },
        {
          hour: 1142,
          value: 189,
        },
        {
          hour: 1157,
          value: 207,
        },
        {
          hour: 1172,
          value: 221,
        },
        {
          hour: 1187,
          value: 224,
        },
        {
          hour: 1202,
          value: 204,
        },
        {
          hour: 1217,
          value: 171,
        },
        {
          hour: 1232,
          value: 145,
        },
        {
          hour: 1247,
          value: 127,
        },
        {
          hour: 1262,
          value: 108,
        },
        {
          hour: 1277,
          value: 89,
        },
        {
          hour: 1292,
          value: 74,
        },
        {
          hour: 1307,
          value: 66,
        },
        {
          hour: 1322,
          value: 60,
        },
        {
          hour: 1337,
          value: 57,
        },
        {
          hour: 1352,
          value: 53,
        },
        {
          hour: 1367,
          value: 47,
        },
        {
          hour: 1382,
          value: 42,
        },
        {
          hour: 1397,
          value: 44,
        },
        {
          hour: 1412,
          value: 54,
        },
        {
          hour: 1427,
          value: 70,
        },
        {
          hour: 2,
          value: 81,
        },
        {
          hour: 17,
          value: 104,
        },
        {
          hour: 22,
          value: 109,
        },
        {
          hour: 34,
          value: 124,
        },
        {
          hour: 42,
          value: 135,
        },
        {
          hour: 49,
          value: 124,
        },
        {
          hour: 64,
          value: 122,
        },
        {
          hour: 79,
          value: 114,
        },
        {
          hour: 94,
          value: 97,
        },
        {
          hour: 109,
          value: 84,
        },
        {
          hour: 124,
          value: 74,
        },
        {
          hour: 139,
          value: 66,
        },
        {
          hour: 154,
          value: 59,
        },
        {
          hour: 169,
          value: 52,
        },
        {
          hour: 184,
          value: 46,
        },
        {
          hour: 199,
          value: 40,
        },
        {
          hour: 214,
          value: 40,
        },
        {
          hour: 229,
          value: 40,
        },
        {
          hour: 244,
          value: 40,
        },
        {
          hour: 259,
          value: 40,
        },
        {
          hour: 260,
          value: 40,
        },
        {
          hour: 265,
          value: 40,
        },
        {
          hour: 274,
          value: 47,
        },
        {
          hour: 289,
          value: 128,
        },
        {
          hour: 304,
          value: 184,
        },
        {
          hour: 319,
          value: 220,
        },
        {
          hour: 334,
          value: 242,
        },
        {
          hour: 349,
          value: 258,
        },
        {
          hour: 364,
          value: 267,
        },
        {
          hour: 380,
          value: 269,
        },
        {
          hour: 386,
          value: 273,
        },
        {
          hour: 395,
          value: 250,
        },
        {
          hour: 410,
          value: 221,
        },
        {
          hour: 425,
          value: 187,
        },
        {
          hour: 440,
          value: 174,
        },
        {
          hour: 455,
          value: 185,
        },
        {
          hour: 470,
          value: 207,
        },
        {
          hour: 485,
          value: 233,
        },
        {
          hour: 500,
          value: 243,
        },
        {
          hour: 515,
          value: 242,
        },
        {
          hour: 530,
          value: 242,
        },
        {
          hour: 546,
          value: 226,
        },
        {
          hour: 554,
          value: 211,
        },
        {
          hour: 561,
          value: 201,
        },
        {
          hour: 576,
          value: 171,
        },
        {
          hour: 591,
          value: 140,
        },
        {
          hour: 606,
          value: 119,
        },
        {
          hour: 621,
          value: 110,
        },
        {
          hour: 636,
          value: 103,
        },
        {
          hour: 651,
          value: 88,
        },
        {
          hour: 666,
          value: 77,
        },
        {
          hour: 682,
          value: 78,
        },
        {
          hour: 695,
          value: 80,
        },
        {
          hour: 697,
          value: 80,
        },
        {
          hour: 712,
          value: 76,
        },
        {
          hour: 727,
          value: 73,
        },
        {
          hour: 742,
          value: 73,
        },
        {
          hour: 757,
          value: 81,
        },
        {
          hour: 772,
          value: 107,
        },
        {
          hour: 787,
          value: 142,
        },
        {
          hour: 802,
          value: 163,
        },
        {
          hour: 817,
          value: 171,
        },
        {
          hour: 832,
          value: 180,
        },
        {
          hour: 847,
          value: 192,
        },
      ],
      median: [
        {
          hour: 0,
          value: 245,
          boxPlotQuartile: [187, 294],
          boxPlotMinMax: [26.5, 454.5],
        },
        {
          hour: 30,
          value: 210,
          boxPlotQuartile: [184.5, 290],
          boxPlotMinMax: [26.25, 448.25],
        },
        {
          hour: 60,
          value: 222.5,
          boxPlotQuartile: [176, 274],
          boxPlotMinMax: [29, 421],
        },
        {
          hour: 90,
          value: 218,
          boxPlotQuartile: [162, 274],
          boxPlotMinMax: [0, 442],
        },
        {
          hour: 120,
          value: 220,
          boxPlotQuartile: [151, 269],
          boxPlotMinMax: [0, 446],
        },
        {
          hour: 150,
          value: 203.5,
          boxPlotQuartile: [141, 258],
          boxPlotMinMax: [0, 433.5],
        },
        {
          hour: 180,
          value: 191,
          boxPlotQuartile: [126, 258],
          boxPlotMinMax: [0, 456],
        },
        {
          hour: 210,
          value: 200,
          boxPlotQuartile: [94, 251.5],
          boxPlotMinMax: [0, 487.75],
        },
        {
          hour: 240,
          value: 202,
          boxPlotQuartile: [90, 250],
          boxPlotMinMax: [0, 490],
        },
        {
          hour: 270,
          value: 195,
          boxPlotQuartile: [62, 230],
          boxPlotMinMax: [0, 482],
        },
        {
          hour: 300,
          value: 211,
          boxPlotQuartile: [153, 262],
          boxPlotMinMax: [0, 425.5],
        },
        {
          hour: 330,
          value: 212,
          boxPlotQuartile: [149, 250],
          boxPlotMinMax: [0, 401.5],
        },
        {
          hour: 360,
          value: 216,
          boxPlotQuartile: [154, 265.5],
          boxPlotMinMax: [0, 432.75],
        },
        {
          hour: 390,
          value: 192,
          boxPlotQuartile: [134.5, 242.5],
          boxPlotMinMax: [0, 404.5],
        },
        {
          hour: 420,
          value: 148,
          boxPlotQuartile: [116, 187],
          boxPlotMinMax: [9.5, 293.5],
        },
        {
          hour: 450,
          value: 185,
          boxPlotQuartile: [142, 222],
          boxPlotMinMax: [22, 342],
        },
        {
          hour: 480,
          value: 209.5,
          boxPlotQuartile: [183.5, 241.5],
          boxPlotMinMax: [96.5, 328.5],
        },
        {
          hour: 510,
          value: 204,
          boxPlotQuartile: [162, 247],
          boxPlotMinMax: [34.5, 374.5],
        },
        {
          hour: 540,
          value: 175,
          boxPlotQuartile: [132.5, 239],
          boxPlotMinMax: [0, 398.75],
        },
        {
          hour: 570,
          value: 153,
          boxPlotQuartile: [93, 202],
          boxPlotMinMax: [0, 365.5],
        },
        {
          hour: 600,
          value: 133,
          boxPlotQuartile: [102, 200],
          boxPlotMinMax: [0, 347],
        },
        {
          hour: 630,
          value: 114,
          boxPlotQuartile: [91, 166],
          boxPlotMinMax: [0, 278.5],
        },
        {
          hour: 660,
          value: 99.5,
          boxPlotQuartile: [75.5, 127.5],
          boxPlotMinMax: [0, 205.5],
        },
        {
          hour: 690,
          value: 81.5,
          boxPlotQuartile: [62, 102],
          boxPlotMinMax: [2, 162],
        },
        {
          hour: 720,
          value: 76,
          boxPlotQuartile: [59.5, 124],
          boxPlotMinMax: [0, 220.75],
        },
        {
          hour: 750,
          value: 90.5,
          boxPlotQuartile: [73, 129],
          boxPlotMinMax: [0, 213],
        },
        {
          hour: 780,
          value: 106,
          boxPlotQuartile: [83.5, 143],
          boxPlotMinMax: [0, 232.25],
        },
        {
          hour: 810,
          value: 132,
          boxPlotQuartile: [83, 161],
          boxPlotMinMax: [0, 278],
        },
        {
          hour: 840,
          value: 133,
          boxPlotQuartile: [77, 167],
          boxPlotMinMax: [0, 302],
        },
        {
          hour: 870,
          value: 89,
          boxPlotQuartile: [59, 132],
          boxPlotMinMax: [0, 241.5],
        },
        {
          hour: 900,
          value: 81,
          boxPlotQuartile: [64, 124],
          boxPlotMinMax: [0, 214],
        },
        {
          hour: 930,
          value: 95,
          boxPlotQuartile: [68, 126],
          boxPlotMinMax: [0, 213],
        },
        {
          hour: 960,
          value: 87.5,
          boxPlotQuartile: [68, 132.5],
          boxPlotMinMax: [0, 229.25],
        },
        {
          hour: 990,
          value: 92,
          boxPlotQuartile: [58, 117.5],
          boxPlotMinMax: [0, 206.75],
        },
        {
          hour: 1020,
          value: 87.5,
          boxPlotQuartile: [52, 125],
          boxPlotMinMax: [0, 234.5],
        },
        {
          hour: 1050,
          value: 100,
          boxPlotQuartile: [61, 142.5],
          boxPlotMinMax: [0, 264.75],
        },
        {
          hour: 1080,
          value: 104,
          boxPlotQuartile: [87.5, 187],
          boxPlotMinMax: [0, 336.25],
        },
        {
          hour: 1110,
          value: 142.5,
          boxPlotQuartile: [101.5, 212.5],
          boxPlotMinMax: [0, 379],
        },
        {
          hour: 1140,
          value: 192,
          boxPlotQuartile: [145.5, 239],
          boxPlotMinMax: [5.25, 379.25],
        },
        {
          hour: 1170,
          value: 187,
          boxPlotQuartile: [134.5, 262.5],
          boxPlotMinMax: [0, 454.5],
        },
        {
          hour: 1200,
          value: 191,
          boxPlotQuartile: [126, 256],
          boxPlotMinMax: [0, 451],
        },
        {
          hour: 1230,
          value: 178,
          boxPlotQuartile: [121, 262],
          boxPlotMinMax: [0, 473.5],
        },
        {
          hour: 1260,
          value: 186.5,
          boxPlotQuartile: [126, 255],
          boxPlotMinMax: [0, 448.5],
        },
        {
          hour: 1290,
          value: 193,
          boxPlotQuartile: [121, 245.5],
          boxPlotMinMax: [0, 432.25],
        },
        {
          hour: 1320,
          value: 187,
          boxPlotQuartile: [129, 242],
          boxPlotMinMax: [0, 411.5],
        },
        {
          hour: 1350,
          value: 173,
          boxPlotQuartile: [141, 228],
          boxPlotMinMax: [10.5, 358.5],
        },
        {
          hour: 1380,
          value: 189,
          boxPlotQuartile: [137.5, 245.5],
          boxPlotMinMax: [0, 407.5],
        },
        {
          hour: 1410,
          value: 215.5,
          boxPlotQuartile: [141, 269],
          boxPlotMinMax: [0, 461],
        },
        {
          hour: 1440,
          value: 250,
          boxPlotQuartile: [187, 303],
          boxPlotMinMax: [13, 477],
        },
      ],
    },
    reportByDay: [
      {
        date: '2020/06/29',
        glycemia: {
          average: {
            '00:00-02:00': 292,
            '02:00-04:00': 289,
            '04:00-06:00': 277,
            '06:00-08:00': 249,
            '08:00-10:00': 237,
            '10:00-12:00': 136,
            '12:00-14:00': 92,
            '14:00-16:00': 104,
            '16:00-18:00': 197,
            '18:00-20:00': 284,
            '20:00-22:00': 235,
            '22:00-24:00': 177,
          },
          standardDeviation: {
            '00:00-02:00': 17,
            '02:00-04:00': 8,
            '04:00-06:00': 6,
            '06:00-08:00': 19,
            '08:00-10:00': 26,
            '10:00-12:00': 42,
            '12:00-14:00': 32,
            '14:00-16:00': 16,
            '16:00-18:00': 37,
            '18:00-20:00': 12,
            '20:00-22:00': 23,
            '22:00-24:00': 28,
          },
          variabilityCoefficient: {
            '00:00-02:00': 6,
            '02:00-04:00': 3,
            '04:00-06:00': 2,
            '06:00-08:00': 8,
            '08:00-10:00': 11,
            '10:00-12:00': 31,
            '12:00-14:00': 35,
            '14:00-16:00': 15,
            '16:00-18:00': 19,
            '18:00-20:00': 4,
            '20:00-22:00': 10,
            '22:00-24:00': 16,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 75,
            '12:00-14:00': 60,
            '14:00-16:00': 100,
            '16:00-18:00': 44,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 56,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 40,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 100,
            '02:00-04:00': 100,
            '04:00-06:00': 100,
            '06:00-08:00': 100,
            '08:00-10:00': 100,
            '10:00-12:00': 25,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 56,
            '18:00-20:00': 100,
            '20:00-22:00': 100,
            '22:00-24:00': 44,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 62,
            '08:00-10:00': 22,
            '10:00-12:00': 0,
            '12:00-14:00': 71,
            '14:00-16:00': 51,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 68,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 12,
            '08:00-10:00': 2,
            '10:00-12:00': 0,
            '12:00-14:00': 19,
            '14:00-16:00': 12,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 37,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 7,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 7,
            '14:00-16:00': 8,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 3,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 355,
            '08:00-10:00': 92,
            '10:00-12:00': 0,
            '12:00-14:00': 412,
            '14:00-16:00': 323,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 457,
          },
        },
        bolus: {
          '00:00-02:00': '16.00',
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '16.00',
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': '16.00',
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '16.00',
        },
        basal: {
          '00:00-02:00': '14.00',
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '14.00',
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': '14.00',
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [
            {
              hour: 0,
              value: 256,
            },
            {
              hour: 15,
              value: 278,
            },
            {
              hour: 30,
              value: 293,
            },
            {
              hour: 45,
              value: 288,
            },
            {
              hour: 60,
              value: 285,
            },
            {
              hour: 75,
              value: 302,
            },
            {
              hour: 90,
              value: 314,
            },
            {
              hour: 105,
              value: 311,
            },
            {
              hour: 120,
              value: 303,
            },
            {
              hour: 135,
              value: 301,
            },
            {
              hour: 150,
              value: 296,
            },
            {
              hour: 165,
              value: 284,
            },
            {
              hour: 180,
              value: 279,
            },
            {
              hour: 195,
              value: 281,
            },
            {
              hour: 210,
              value: 289,
            },
            {
              hour: 225,
              value: 295,
            },
            {
              hour: 240,
              value: 283,
            },
            {
              hour: 255,
              value: 268,
            },
            {
              hour: 270,
              value: 266,
            },
            {
              hour: 286,
              value: 277,
            },
            {
              hour: 287,
              value: 278,
            },
            {
              hour: 301,
              value: 277,
            },
            {
              hour: 316,
              value: 284,
            },
            {
              hour: 331,
              value: 284,
            },
            {
              hour: 346,
              value: 278,
            },
            {
              hour: 361,
              value: 272,
            },
            {
              hour: 375,
              value: 273,
            },
            {
              hour: 384,
              value: 265,
            },
            {
              hour: 390,
              value: 264,
            },
            {
              hour: 405,
              value: 246,
            },
            {
              hour: 420,
              value: 235,
            },
            {
              hour: 435,
              value: 223,
            },
            {
              hour: 450,
              value: 220,
            },
            {
              hour: 465,
              value: 237,
            },
            {
              hour: 480,
              value: 257,
            },
            {
              hour: 495,
              value: 269,
            },
            {
              hour: 510,
              value: 269,
            },
            {
              hour: 525,
              value: 263,
            },
            {
              hour: 540,
              value: 246,
            },
            {
              hour: 556,
              value: 218,
            },
            {
              hour: 559,
              value: 226,
            },
            {
              hour: 571,
              value: 202,
            },
            {
              hour: 586,
              value: 204,
            },
            {
              hour: 601,
              value: 205,
            },
            {
              hour: 616,
              value: 187,
            },
            {
              hour: 631,
              value: 159,
            },
            {
              hour: 646,
              value: 135,
            },
            {
              hour: 661,
              value: 117,
            },
            {
              hour: 676,
              value: 109,
            },
            {
              hour: 691,
              value: 96,
            },
            {
              hour: 706,
              value: 77,
            },
            {
              hour: 721,
              value: 63,
            },
            {
              hour: 726,
              value: 62,
            },
            {
              hour: 736,
              value: 54,
            },
            {
              hour: 751,
              value: 52,
            },
            {
              hour: 766,
              value: 76,
            },
            {
              hour: 781,
              value: 105,
            },
            {
              hour: 796,
              value: 123,
            },
            {
              hour: 811,
              value: 130,
            },
            {
              hour: 818,
              value: 131,
            },
            {
              hour: 826,
              value: 128,
            },
            {
              hour: 841,
              value: 128,
            },
            {
              hour: 856,
              value: 119,
            },
            {
              hour: 871,
              value: 98,
            },
            {
              hour: 885,
              value: 89,
            },
            {
              hour: 886,
              value: 80,
            },
            {
              hour: 901,
              value: 84,
            },
            {
              hour: 916,
              value: 97,
            },
            {
              hour: 931,
              value: 111,
            },
            {
              hour: 933,
              value: 111,
            },
            {
              hour: 946,
              value: 124,
            },
            {
              hour: 961,
              value: 143,
            },
            {
              hour: 969,
              value: 156,
            },
            {
              hour: 976,
              value: 163,
            },
            {
              hour: 991,
              value: 178,
            },
            {
              hour: 1006,
              value: 196,
            },
            {
              hour: 1021,
              value: 217,
            },
            {
              hour: 1036,
              value: 233,
            },
            {
              hour: 1051,
              value: 241,
            },
            {
              hour: 1066,
              value: 246,
            },
            {
              hour: 1081,
              value: 255,
            },
            {
              hour: 1096,
              value: 277,
            },
            {
              hour: 1111,
              value: 296,
            },
            {
              hour: 1126,
              value: 298,
            },
            {
              hour: 1141,
              value: 288,
            },
            {
              hour: 1156,
              value: 282,
            },
            {
              hour: 1171,
              value: 282,
            },
            {
              hour: 1184,
              value: 291,
            },
            {
              hour: 1186,
              value: 284,
            },
            {
              hour: 1201,
              value: 278,
            },
            {
              hour: 1216,
              value: 266,
            },
            {
              hour: 1231,
              value: 254,
            },
            {
              hour: 1246,
              value: 240,
            },
            {
              hour: 1261,
              value: 228,
            },
            {
              hour: 1267,
              value: 222,
            },
            {
              hour: 1276,
              value: 221,
            },
            {
              hour: 1289,
              value: 218,
            },
            {
              hour: 1291,
              value: 214,
            },
            {
              hour: 1306,
              value: 208,
            },
            {
              hour: 1321,
              value: 190,
            },
            {
              hour: 1336,
              value: 171,
            },
            {
              hour: 1351,
              value: 143,
            },
            {
              hour: 1366,
              value: 131,
            },
            {
              hour: 1382,
              value: 164,
            },
            {
              hour: 1389,
              value: 171,
            },
            {
              hour: 1397,
              value: 194,
            },
            {
              hour: 1412,
              value: 214,
            },
            {
              hour: 1427,
              value: 216,
            },
          ],
          median: [
            {
              hour: 0,
              value: 256,
            },
            {
              hour: 30,
              value: 290.5,
            },
            {
              hour: 60,
              value: 293.5,
            },
            {
              hour: 90,
              value: 312.5,
            },
            {
              hour: 120,
              value: 302,
            },
            {
              hour: 150,
              value: 290,
            },
            {
              hour: 180,
              value: 280,
            },
            {
              hour: 210,
              value: 292,
            },
            {
              hour: 240,
              value: 275.5,
            },
            {
              hour: 270,
              value: 266,
            },
            {
              hour: 300,
              value: 277,
            },
            {
              hour: 330,
              value: 284,
            },
            {
              hour: 360,
              value: 273,
            },
            {
              hour: 390,
              value: 264,
            },
            {
              hour: 420,
              value: 229,
            },
            {
              hour: 450,
              value: 228.5,
            },
            {
              hour: 480,
              value: 263,
            },
            {
              hour: 510,
              value: 266,
            },
            {
              hour: 540,
              value: 246,
            },
            {
              hour: 570,
              value: 218,
            },
            {
              hour: 600,
              value: 204.5,
            },
            {
              hour: 630,
              value: 173,
            },
            {
              hour: 660,
              value: 126,
            },
            {
              hour: 690,
              value: 102.5,
            },
            {
              hour: 720,
              value: 63,
            },
            {
              hour: 750,
              value: 53,
            },
            {
              hour: 780,
              value: 90.5,
            },
            {
              hour: 810,
              value: 130,
            },
            {
              hour: 840,
              value: 128,
            },
            {
              hour: 870,
              value: 98,
            },
            {
              hour: 900,
              value: 82,
            },
            {
              hour: 930,
              value: 111,
            },
            {
              hour: 960,
              value: 143,
            },
            {
              hour: 990,
              value: 170.5,
            },
            {
              hour: 1020,
              value: 206.5,
            },
            {
              hour: 1050,
              value: 237,
            },
            {
              hour: 1080,
              value: 250.5,
            },
            {
              hour: 1110,
              value: 286.5,
            },
            {
              hour: 1140,
              value: 293,
            },
            {
              hour: 1170,
              value: 282,
            },
            {
              hour: 1200,
              value: 281,
            },
            {
              hour: 1230,
              value: 260,
            },
            {
              hour: 1260,
              value: 228,
            },
            {
              hour: 1290,
              value: 218,
            },
            {
              hour: 1320,
              value: 199,
            },
            {
              hour: 1350,
              value: 157,
            },
            {
              hour: 1380,
              value: 164,
            },
            {
              hour: 1410,
              value: 204,
            },
            {
              hour: 1440,
              value: 216,
            },
          ],
        },
      },
      {
        date: '2020/06/30',
        glycemia: {
          average: {
            '00:00-02:00': 191,
            '02:00-04:00': 168,
            '04:00-06:00': 202,
            '06:00-08:00': 133,
            '08:00-10:00': 118,
            '10:00-12:00': 75,
            '12:00-14:00': 107,
            '14:00-16:00': 84,
            '16:00-18:00': 78,
            '18:00-20:00': 227,
            '20:00-22:00': 257,
            '22:00-24:00': 222,
          },
          standardDeviation: {
            '00:00-02:00': 13,
            '02:00-04:00': 7,
            '04:00-06:00': 13,
            '06:00-08:00': 39,
            '08:00-10:00': 38,
            '10:00-12:00': 26,
            '12:00-14:00': 22,
            '14:00-16:00': 10,
            '16:00-18:00': 48,
            '18:00-20:00': 33,
            '20:00-22:00': 11,
            '22:00-24:00': 20,
          },
          variabilityCoefficient: {
            '00:00-02:00': 7,
            '02:00-04:00': 4,
            '04:00-06:00': 6,
            '06:00-08:00': 29,
            '08:00-10:00': 32,
            '10:00-12:00': 35,
            '12:00-14:00': 21,
            '14:00-16:00': 12,
            '16:00-18:00': 62,
            '18:00-20:00': 15,
            '20:00-22:00': 4,
            '22:00-24:00': 9,
          },
          onTarget: {
            '00:00-02:00': 38,
            '02:00-04:00': 100,
            '04:00-06:00': 13,
            '06:00-08:00': 88,
            '08:00-10:00': 100,
            '10:00-12:00': 40,
            '12:00-14:00': 88,
            '14:00-16:00': 89,
            '16:00-18:00': 30,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 60,
            '12:00-14:00': 13,
            '14:00-16:00': 11,
            '16:00-18:00': 70,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 63,
            '02:00-04:00': 0,
            '04:00-06:00': 88,
            '06:00-08:00': 13,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 100,
            '20:00-22:00': 100,
            '22:00-24:00': 100,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 51,
            '08:00-10:00': 35,
            '10:00-12:00': 71,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 52,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 77,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 12,
            '08:00-10:00': 1,
            '10:00-12:00': 42,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 18,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 9,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 13,
            '08:00-10:00': 0,
            '10:00-12:00': 26,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 15,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 373,
            '08:00-10:00': 132,
            '10:00-12:00': 690,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 419,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 341,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': '16.00',
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': '16.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '16.00',
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': '14.00',
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': '14.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '14.00',
        },
        graphicData: {
          data: [
            {
              hour: 2,
              value: 211,
            },
            {
              hour: 17,
              value: 207,
            },
            {
              hour: 32,
              value: 201,
            },
            {
              hour: 47,
              value: 192,
            },
            {
              hour: 62,
              value: 182,
            },
            {
              hour: 77,
              value: 179,
            },
            {
              hour: 92,
              value: 179,
            },
            {
              hour: 107,
              value: 177,
            },
            {
              hour: 122,
              value: 175,
            },
            {
              hour: 137,
              value: 177,
            },
            {
              hour: 152,
              value: 177,
            },
            {
              hour: 167,
              value: 167,
            },
            {
              hour: 182,
              value: 159,
            },
            {
              hour: 197,
              value: 162,
            },
            {
              hour: 212,
              value: 160,
            },
            {
              hour: 227,
              value: 164,
            },
            {
              hour: 242,
              value: 177,
            },
            {
              hour: 257,
              value: 187,
            },
            {
              hour: 272,
              value: 198,
            },
            {
              hour: 287,
              value: 209,
            },
            {
              hour: 302,
              value: 211,
            },
            {
              hour: 317,
              value: 209,
            },
            {
              hour: 332,
              value: 213,
            },
            {
              hour: 347,
              value: 215,
            },
            {
              hour: 362,
              value: 207,
            },
            {
              hour: 377,
              value: 173,
            },
            {
              hour: 392,
              value: 133,
            },
            {
              hour: 407,
              value: 99,
            },
            {
              hour: 422,
              value: 87,
            },
            {
              hour: 437,
              value: 97,
            },
            {
              hour: 452,
              value: 122,
            },
            {
              hour: 467,
              value: 149,
            },
            {
              hour: 482,
              value: 169,
            },
            {
              hour: 497,
              value: 174,
            },
            {
              hour: 512,
              value: 162,
            },
            {
              hour: 527,
              value: 139,
            },
            {
              hour: 542,
              value: 115,
            },
            {
              hour: 557,
              value: 94,
            },
            {
              hour: 572,
              value: 82,
            },
            {
              hour: 579,
              value: 74,
            },
            {
              hour: 580,
              value: 75,
            },
            {
              hour: 587,
              value: 95,
            },
            {
              hour: 602,
              value: 118,
            },
            {
              hour: 617,
              value: 121,
            },
            {
              hour: 632,
              value: 99,
            },
            {
              hour: 647,
              value: 77,
            },
            {
              hour: 662,
              value: 64,
            },
            {
              hour: 669,
              value: 61,
            },
            {
              hour: 677,
              value: 57,
            },
            {
              hour: 685,
              value: 54,
            },
            {
              hour: 692,
              value: 52,
            },
            {
              hour: 707,
              value: 51,
            },
            {
              hour: 722,
              value: 65,
            },
            {
              hour: 737,
              value: 83,
            },
            {
              hour: 752,
              value: 96,
            },
            {
              hour: 767,
              value: 112,
            },
            {
              hour: 782,
              value: 127,
            },
            {
              hour: 797,
              value: 132,
            },
            {
              hour: 812,
              value: 127,
            },
            {
              hour: 827,
              value: 113,
            },
            {
              hour: 842,
              value: 100,
            },
            {
              hour: 858,
              value: 94,
            },
            {
              hour: 870,
              value: 92,
            },
            {
              hour: 873,
              value: 88,
            },
            {
              hour: 888,
              value: 80,
            },
            {
              hour: 903,
              value: 84,
            },
            {
              hour: 918,
              value: 83,
            },
            {
              hour: 933,
              value: 73,
            },
            {
              hour: 948,
              value: 65,
            },
            {
              hour: 963,
              value: 61,
            },
            {
              hour: 977,
              value: 55,
            },
            {
              hour: 990,
              value: 46,
            },
            {
              hour: 992,
              value: 44,
            },
            {
              hour: 1008,
              value: 40,
            },
            {
              hour: 1014,
              value: 40,
            },
            {
              hour: 1023,
              value: 52,
            },
            {
              hour: 1038,
              value: 110,
            },
            {
              hour: 1053,
              value: 152,
            },
            {
              hour: 1068,
              value: 176,
            },
            {
              hour: 1083,
              value: 190,
            },
            {
              hour: 1097,
              value: 185,
            },
            {
              hour: 1105,
              value: 181,
            },
            {
              hour: 1112,
              value: 202,
            },
            {
              hour: 1127,
              value: 231,
            },
            {
              hour: 1142,
              value: 247,
            },
            {
              hour: 1157,
              value: 251,
            },
            {
              hour: 1161,
              value: 241,
            },
            {
              hour: 1172,
              value: 264,
            },
            {
              hour: 1187,
              value: 277,
            },
            {
              hour: 1202,
              value: 275,
            },
            {
              hour: 1217,
              value: 267,
            },
            {
              hour: 1232,
              value: 262,
            },
            {
              hour: 1247,
              value: 259,
            },
            {
              hour: 1262,
              value: 255,
            },
            {
              hour: 1277,
              value: 249,
            },
            {
              hour: 1292,
              value: 245,
            },
            {
              hour: 1307,
              value: 241,
            },
            {
              hour: 1323,
              value: 229,
            },
            {
              hour: 1336,
              value: 223,
            },
            {
              hour: 1338,
              value: 222,
            },
            {
              hour: 1353,
              value: 215,
            },
            {
              hour: 1368,
              value: 201,
            },
            {
              hour: 1383,
              value: 193,
            },
            {
              hour: 1398,
              value: 204,
            },
            {
              hour: 1413,
              value: 225,
            },
            {
              hour: 1428,
              value: 250,
            },
            {
              hour: 1439,
              value: 259,
            },
          ],
          median: [
            {
              hour: 0,
              value: 250,
            },
            {
              hour: 30,
              value: 204,
            },
            {
              hour: 60,
              value: 187,
            },
            {
              hour: 90,
              value: 179,
            },
            {
              hour: 120,
              value: 176,
            },
            {
              hour: 150,
              value: 177,
            },
            {
              hour: 180,
              value: 163,
            },
            {
              hour: 210,
              value: 161,
            },
            {
              hour: 240,
              value: 170.5,
            },
            {
              hour: 270,
              value: 192.5,
            },
            {
              hour: 300,
              value: 210,
            },
            {
              hour: 330,
              value: 211,
            },
            {
              hour: 360,
              value: 211,
            },
            {
              hour: 390,
              value: 153,
            },
            {
              hour: 420,
              value: 93,
            },
            {
              hour: 450,
              value: 109.5,
            },
            {
              hour: 480,
              value: 159,
            },
            {
              hour: 510,
              value: 168,
            },
            {
              hour: 540,
              value: 127,
            },
            {
              hour: 570,
              value: 78.5,
            },
            {
              hour: 600,
              value: 106.5,
            },
            {
              hour: 630,
              value: 110,
            },
            {
              hour: 660,
              value: 64,
            },
            {
              hour: 690,
              value: 54,
            },
            {
              hour: 720,
              value: 58,
            },
            {
              hour: 750,
              value: 89.5,
            },
            {
              hour: 780,
              value: 119.5,
            },
            {
              hour: 810,
              value: 129.5,
            },
            {
              hour: 840,
              value: 106.5,
            },
            {
              hour: 870,
              value: 92,
            },
            {
              hour: 900,
              value: 82,
            },
            {
              hour: 930,
              value: 78,
            },
            {
              hour: 960,
              value: 63,
            },
            {
              hour: 990,
              value: 46,
            },
            {
              hour: 1020,
              value: 40,
            },
            {
              hour: 1050,
              value: 131,
            },
            {
              hour: 1080,
              value: 183,
            },
            {
              hour: 1110,
              value: 185,
            },
            {
              hour: 1140,
              value: 239,
            },
            {
              hour: 1170,
              value: 251,
            },
            {
              hour: 1200,
              value: 276,
            },
            {
              hour: 1230,
              value: 264.5,
            },
            {
              hour: 1260,
              value: 257,
            },
            {
              hour: 1290,
              value: 247,
            },
            {
              hour: 1320,
              value: 235,
            },
            {
              hour: 1350,
              value: 222,
            },
            {
              hour: 1380,
              value: 197,
            },
            {
              hour: 1410,
              value: 214.5,
            },
            {
              hour: 1440,
              value: 254.5,
            },
          ],
        },
      },
      {
        date: '2020/07/01',
        glycemia: {
          average: {
            '00:00-02:00': 174,
            '02:00-04:00': 68,
            '04:00-06:00': 94,
            '06:00-08:00': 131,
            '08:00-10:00': 125,
            '10:00-12:00': 81,
            '12:00-14:00': 113,
            '14:00-16:00': 90,
            '16:00-18:00': 59,
            '18:00-20:00': 92,
            '20:00-22:00': 90,
            '22:00-24:00': 260,
          },
          standardDeviation: {
            '00:00-02:00': 53,
            '02:00-04:00': 19,
            '04:00-06:00': 45,
            '06:00-08:00': 21,
            '08:00-10:00': 35,
            '10:00-12:00': 12,
            '12:00-14:00': 30,
            '14:00-16:00': 22,
            '16:00-18:00': 12,
            '18:00-20:00': 8,
            '20:00-22:00': 34,
            '22:00-24:00': 43,
          },
          variabilityCoefficient: {
            '00:00-02:00': 30,
            '02:00-04:00': 28,
            '04:00-06:00': 48,
            '06:00-08:00': 16,
            '08:00-10:00': 28,
            '10:00-12:00': 15,
            '12:00-14:00': 27,
            '14:00-16:00': 24,
            '16:00-18:00': 20,
            '18:00-20:00': 9,
            '20:00-22:00': 38,
            '22:00-24:00': 17,
          },
          onTarget: {
            '00:00-02:00': 50,
            '02:00-04:00': 38,
            '04:00-06:00': 56,
            '06:00-08:00': 100,
            '08:00-10:00': 100,
            '10:00-12:00': 67,
            '12:00-14:00': 89,
            '14:00-16:00': 70,
            '16:00-18:00': 11,
            '18:00-20:00': 100,
            '20:00-22:00': 67,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 63,
            '04:00-06:00': 44,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 33,
            '12:00-14:00': 11,
            '14:00-16:00': 30,
            '16:00-18:00': 89,
            '18:00-20:00': 0,
            '20:00-22:00': 33,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 50,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 100,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 50,
            '08:00-10:00': 11,
            '10:00-12:00': 64,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 50,
            '18:00-20:00': 0,
            '20:00-22:00': 246,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 11,
            '08:00-10:00': 24,
            '10:00-12:00': 30,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 11,
            '18:00-20:00': 0,
            '20:00-22:00': 102,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 7,
            '08:00-10:00': 22,
            '10:00-12:00': 17,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 7,
            '18:00-20:00': 0,
            '20:00-22:00': 73,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 308,
            '08:00-10:00': 336,
            '10:00-12:00': 533,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 307,
            '18:00-20:00': 0,
            '20:00-22:00': 2065,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '16.00',
          '08:00-10:00': 0,
          '10:00-12:00': '16.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '14.00',
          '08:00-10:00': 0,
          '10:00-12:00': '14.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [
            {
              hour: 3,
              value: 248,
            },
            {
              hour: 18,
              value: 238,
            },
            {
              hour: 33,
              value: 222,
            },
            {
              hour: 48,
              value: 188,
            },
            {
              hour: 63,
              value: 147,
            },
            {
              hour: 78,
              value: 124,
            },
            {
              hour: 93,
              value: 116,
            },
            {
              hour: 108,
              value: 110,
            },
            {
              hour: 123,
              value: 104,
            },
            {
              hour: 138,
              value: 89,
            },
            {
              hour: 153,
              value: 75,
            },
            {
              hour: 168,
              value: 66,
            },
            {
              hour: 183,
              value: 60,
            },
            {
              hour: 198,
              value: 55,
            },
            {
              hour: 213,
              value: 48,
            },
            {
              hour: 228,
              value: 44,
            },
            {
              hour: 244,
              value: 41,
            },
            {
              hour: 249,
              value: 40,
            },
            {
              hour: 259,
              value: 41,
            },
            {
              hour: 274,
              value: 60,
            },
            {
              hour: 289,
              value: 110,
            },
            {
              hour: 304,
              value: 134,
            },
            {
              hour: 319,
              value: 138,
            },
            {
              hour: 334,
              value: 140,
            },
            {
              hour: 349,
              value: 145,
            },
            {
              hour: 364,
              value: 151,
            },
            {
              hour: 379,
              value: 155,
            },
            {
              hour: 393,
              value: 138,
            },
            {
              hour: 402,
              value: 130,
            },
            {
              hour: 408,
              value: 116,
            },
            {
              hour: 423,
              value: 98,
            },
            {
              hour: 438,
              value: 103,
            },
            {
              hour: 453,
              value: 130,
            },
            {
              hour: 468,
              value: 159,
            },
            {
              hour: 483,
              value: 174,
            },
            {
              hour: 498,
              value: 174,
            },
            {
              hour: 513,
              value: 160,
            },
            {
              hour: 528,
              value: 137,
            },
            {
              hour: 543,
              value: 115,
            },
            {
              hour: 559,
              value: 96,
            },
            {
              hour: 568,
              value: 98,
            },
            {
              hour: 574,
              value: 86,
            },
            {
              hour: 589,
              value: 87,
            },
            {
              hour: 604,
              value: 92,
            },
            {
              hour: 619,
              value: 95,
            },
            {
              hour: 634,
              value: 95,
            },
            {
              hour: 649,
              value: 93,
            },
            {
              hour: 664,
              value: 84,
            },
            {
              hour: 679,
              value: 72,
            },
            {
              hour: 694,
              value: 67,
            },
            {
              hour: 709,
              value: 67,
            },
            {
              hour: 712,
              value: 65,
            },
            {
              hour: 724,
              value: 65,
            },
            {
              hour: 739,
              value: 70,
            },
            {
              hour: 754,
              value: 83,
            },
            {
              hour: 769,
              value: 106,
            },
            {
              hour: 784,
              value: 127,
            },
            {
              hour: 799,
              value: 139,
            },
            {
              hour: 814,
              value: 146,
            },
            {
              hour: 829,
              value: 139,
            },
            {
              hour: 832,
              value: 138,
            },
            {
              hour: 844,
              value: 125,
            },
            {
              hour: 859,
              value: 113,
            },
            {
              hour: 865,
              value: 111,
            },
            {
              hour: 874,
              value: 92,
            },
            {
              hour: 889,
              value: 88,
            },
            {
              hour: 904,
              value: 86,
            },
            {
              hour: 905,
              value: 95,
            },
            {
              hour: 919,
              value: 68,
            },
            {
              hour: 934,
              value: 60,
            },
            {
              hour: 949,
              value: 58,
            },
            {
              hour: 964,
              value: 60,
            },
            {
              hour: 979,
              value: 57,
            },
            {
              hour: 994,
              value: 55,
            },
            {
              hour: 1009,
              value: 54,
            },
            {
              hour: 1024,
              value: 53,
            },
            {
              hour: 1025,
              value: 51,
            },
            {
              hour: 1040,
              value: 48,
            },
            {
              hour: 1055,
              value: 61,
            },
            {
              hour: 1070,
              value: 91,
            },
            {
              hour: 1084,
              value: 88,
            },
            {
              hour: 1092,
              value: 81,
            },
            {
              hour: 1099,
              value: 85,
            },
            {
              hour: 1114,
              value: 84,
            },
            {
              hour: 1129,
              value: 91,
            },
            {
              hour: 1144,
              value: 107,
            },
            {
              hour: 1159,
              value: 103,
            },
            {
              hour: 1162,
              value: 97,
            },
            {
              hour: 1174,
              value: 92,
            },
            {
              hour: 1189,
              value: 94,
            },
            {
              hour: 1204,
              value: 79,
            },
            {
              hour: 1209,
              value: 72,
            },
            {
              hour: 1219,
              value: 70,
            },
            {
              hour: 1234,
              value: 64,
            },
            {
              hour: 1249,
              value: 60,
            },
            {
              hour: 1264,
              value: 66,
            },
            {
              hour: 1279,
              value: 97,
            },
            {
              hour: 1294,
              value: 132,
            },
            {
              hour: 1309,
              value: 166,
            },
            {
              hour: 1324,
              value: 195,
            },
            {
              hour: 1339,
              value: 212,
            },
            {
              hour: 1354,
              value: 227,
            },
            {
              hour: 1369,
              value: 239,
            },
            {
              hour: 1384,
              value: 252,
            },
            {
              hour: 1399,
              value: 278,
            },
            {
              hour: 1414,
              value: 309,
            },
            {
              hour: 1429,
              value: 322,
            },
            {
              hour: 1430,
              value: 303,
            },
          ],
          median: [
            {
              hour: 0,
              value: 303,
            },
            {
              hour: 30,
              value: 230,
            },
            {
              hour: 60,
              value: 167.5,
            },
            {
              hour: 90,
              value: 120,
            },
            {
              hour: 120,
              value: 107,
            },
            {
              hour: 150,
              value: 82,
            },
            {
              hour: 180,
              value: 63,
            },
            {
              hour: 210,
              value: 51.5,
            },
            {
              hour: 240,
              value: 41,
            },
            {
              hour: 270,
              value: 50.5,
            },
            {
              hour: 300,
              value: 122,
            },
            {
              hour: 330,
              value: 139,
            },
            {
              hour: 360,
              value: 148,
            },
            {
              hour: 390,
              value: 138,
            },
            {
              hour: 420,
              value: 107,
            },
            {
              hour: 450,
              value: 116.5,
            },
            {
              hour: 480,
              value: 166.5,
            },
            {
              hour: 510,
              value: 167,
            },
            {
              hour: 540,
              value: 126,
            },
            {
              hour: 570,
              value: 96,
            },
            {
              hour: 600,
              value: 89.5,
            },
            {
              hour: 630,
              value: 95,
            },
            {
              hour: 660,
              value: 88.5,
            },
            {
              hour: 690,
              value: 69.5,
            },
            {
              hour: 720,
              value: 65,
            },
            {
              hour: 750,
              value: 76.5,
            },
            {
              hour: 780,
              value: 116.5,
            },
            {
              hour: 810,
              value: 142.5,
            },
            {
              hour: 840,
              value: 138,
            },
            {
              hour: 870,
              value: 111,
            },
            {
              hour: 900,
              value: 88,
            },
            {
              hour: 930,
              value: 64,
            },
            {
              hour: 960,
              value: 59,
            },
            {
              hour: 990,
              value: 56,
            },
            {
              hour: 1020,
              value: 53,
            },
            {
              hour: 1050,
              value: 54.5,
            },
            {
              hour: 1080,
              value: 88,
            },
            {
              hour: 1110,
              value: 84.5,
            },
            {
              hour: 1140,
              value: 99,
            },
            {
              hour: 1170,
              value: 97,
            },
            {
              hour: 1200,
              value: 79,
            },
            {
              hour: 1230,
              value: 67,
            },
            {
              hour: 1260,
              value: 63,
            },
            {
              hour: 1290,
              value: 114.5,
            },
            {
              hour: 1320,
              value: 180.5,
            },
            {
              hour: 1350,
              value: 219.5,
            },
            {
              hour: 1380,
              value: 245.5,
            },
            {
              hour: 1410,
              value: 293.5,
            },
            {
              hour: 1440,
              value: 312.5,
            },
          ],
        },
      },
      {
        date: '2020/07/02',
        glycemia: {
          average: {
            '00:00-02:00': 270,
            '02:00-04:00': 255,
            '04:00-06:00': 257,
            '06:00-08:00': 221,
            '08:00-10:00': 247,
            '10:00-12:00': 123,
            '12:00-14:00': 73,
            '14:00-16:00': 60,
            '16:00-18:00': 107,
            '18:00-20:00': 139,
            '20:00-22:00': 218,
            '22:00-24:00': 224,
          },
          standardDeviation: {
            '00:00-02:00': 13,
            '02:00-04:00': 3,
            '04:00-06:00': 18,
            '06:00-08:00': 30,
            '08:00-10:00': 27,
            '10:00-12:00': 35,
            '12:00-14:00': 16,
            '14:00-16:00': 9,
            '16:00-18:00': 20,
            '18:00-20:00': 42,
            '20:00-22:00': 17,
            '22:00-24:00': 58,
          },
          variabilityCoefficient: {
            '00:00-02:00': 5,
            '02:00-04:00': 1,
            '04:00-06:00': 7,
            '06:00-08:00': 14,
            '08:00-10:00': 11,
            '10:00-12:00': 28,
            '12:00-14:00': 22,
            '14:00-16:00': 15,
            '16:00-18:00': 19,
            '18:00-20:00': 30,
            '20:00-22:00': 8,
            '22:00-24:00': 26,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 100,
            '12:00-14:00': 55,
            '14:00-16:00': 20,
            '16:00-18:00': 100,
            '18:00-20:00': 82,
            '20:00-22:00': 0,
            '22:00-24:00': 38,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 45,
            '14:00-16:00': 80,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 100,
            '02:00-04:00': 100,
            '04:00-06:00': 100,
            '06:00-08:00': 100,
            '08:00-10:00': 100,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 18,
            '20:00-22:00': 100,
            '22:00-24:00': 63,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 50,
            '08:00-10:00': 0,
            '10:00-12:00': 53,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 11,
            '08:00-10:00': 0,
            '10:00-12:00': 53,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 7,
            '08:00-10:00': 0,
            '10:00-12:00': 43,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 310,
            '08:00-10:00': 0,
            '10:00-12:00': 816,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': '16.00',
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': '16.00',
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': '14.00',
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': '14.00',
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [
            {
              hour: 5,
              value: 294,
            },
            {
              hour: 20,
              value: 284,
            },
            {
              hour: 35,
              value: 275,
            },
            {
              hour: 50,
              value: 273,
            },
            {
              hour: 65,
              value: 269,
            },
            {
              hour: 80,
              value: 259,
            },
            {
              hour: 95,
              value: 254,
            },
            {
              hour: 110,
              value: 255,
            },
            {
              hour: 125,
              value: 253,
            },
            {
              hour: 140,
              value: 257,
            },
            {
              hour: 155,
              value: 258,
            },
            {
              hour: 170,
              value: 258,
            },
            {
              hour: 185,
              value: 259,
            },
            {
              hour: 200,
              value: 253,
            },
            {
              hour: 215,
              value: 250,
            },
            {
              hour: 230,
              value: 250,
            },
            {
              hour: 245,
              value: 241,
            },
            {
              hour: 260,
              value: 230,
            },
            {
              hour: 275,
              value: 235,
            },
            {
              hour: 290,
              value: 255,
            },
            {
              hour: 305,
              value: 262,
            },
            {
              hour: 320,
              value: 257,
            },
            {
              hour: 335,
              value: 263,
            },
            {
              hour: 351,
              value: 281,
            },
            {
              hour: 360,
              value: 287,
            },
            {
              hour: 366,
              value: 264,
            },
            {
              hour: 381,
              value: 239,
            },
            {
              hour: 396,
              value: 210,
            },
            {
              hour: 411,
              value: 186,
            },
            {
              hour: 426,
              value: 181,
            },
            {
              hour: 441,
              value: 198,
            },
            {
              hour: 456,
              value: 232,
            },
            {
              hour: 471,
              value: 260,
            },
            {
              hour: 486,
              value: 279,
            },
            {
              hour: 501,
              value: 282,
            },
            {
              hour: 516,
              value: 271,
            },
            {
              hour: 531,
              value: 258,
            },
            {
              hour: 546,
              value: 241,
            },
            {
              hour: 561,
              value: 229,
            },
            {
              hour: 575,
              value: 218,
            },
            {
              hour: 580,
              value: 244,
            },
            {
              hour: 590,
              value: 200,
            },
            {
              hour: 605,
              value: 180,
            },
            {
              hour: 620,
              value: 161,
            },
            {
              hour: 635,
              value: 146,
            },
            {
              hour: 650,
              value: 137,
            },
            {
              hour: 665,
              value: 129,
            },
            {
              hour: 680,
              value: 104,
            },
            {
              hour: 692,
              value: 91,
            },
            {
              hour: 695,
              value: 84,
            },
            {
              hour: 710,
              value: 74,
            },
            {
              hour: 726,
              value: 76,
            },
            {
              hour: 739,
              value: 77,
            },
            {
              hour: 741,
              value: 81,
            },
            {
              hour: 756,
              value: 90,
            },
            {
              hour: 762,
              value: 103,
            },
            {
              hour: 771,
              value: 81,
            },
            {
              hour: 786,
              value: 69,
            },
            {
              hour: 801,
              value: 64,
            },
            {
              hour: 816,
              value: 59,
            },
            {
              hour: 830,
              value: 50,
            },
            {
              hour: 833,
              value: 48,
            },
            {
              hour: 845,
              value: 45,
            },
            {
              hour: 856,
              value: 49,
            },
            {
              hour: 860,
              value: 50,
            },
            {
              hour: 861,
              value: 53,
            },
            {
              hour: 876,
              value: 61,
            },
            {
              hour: 891,
              value: 63,
            },
            {
              hour: 906,
              value: 67,
            },
            {
              hour: 921,
              value: 71,
            },
            {
              hour: 936,
              value: 71,
            },
            {
              hour: 951,
              value: 68,
            },
            {
              hour: 964,
              value: 74,
            },
            {
              hour: 966,
              value: 75,
            },
            {
              hour: 981,
              value: 99,
            },
            {
              hour: 986,
              value: 103,
            },
            {
              hour: 996,
              value: 119,
            },
            {
              hour: 1011,
              value: 125,
            },
            {
              hour: 1026,
              value: 132,
            },
            {
              hour: 1041,
              value: 132,
            },
            {
              hour: 1056,
              value: 116,
            },
            {
              hour: 1071,
              value: 99,
            },
            {
              hour: 1086,
              value: 89,
            },
            {
              hour: 1090,
              value: 87,
            },
            {
              hour: 1093,
              value: 87,
            },
            {
              hour: 1101,
              value: 96,
            },
            {
              hour: 1116,
              value: 119,
            },
            {
              hour: 1131,
              value: 155,
            },
            {
              hour: 1146,
              value: 171,
            },
            {
              hour: 1161,
              value: 163,
            },
            {
              hour: 1176,
              value: 164,
            },
            {
              hour: 1191,
              value: 200,
            },
            {
              hour: 1196,
              value: 195,
            },
            {
              hour: 1206,
              value: 218,
            },
            {
              hour: 1221,
              value: 225,
            },
            {
              hour: 1236,
              value: 240,
            },
            {
              hour: 1251,
              value: 239,
            },
            {
              hour: 1266,
              value: 225,
            },
            {
              hour: 1281,
              value: 211,
            },
            {
              hour: 1296,
              value: 199,
            },
            {
              hour: 1311,
              value: 189,
            },
            {
              hour: 1326,
              value: 177,
            },
            {
              hour: 1341,
              value: 162,
            },
            {
              hour: 1356,
              value: 167,
            },
            {
              hour: 1371,
              value: 190,
            },
            {
              hour: 1386,
              value: 211,
            },
            {
              hour: 1402,
              value: 267,
            },
            {
              hour: 1417,
              value: 299,
            },
            {
              hour: 1432,
              value: 319,
            },
          ],
          median: [
            {
              hour: 0,
              value: 306.5,
            },
            {
              hour: 30,
              value: 279.5,
            },
            {
              hour: 60,
              value: 271,
            },
            {
              hour: 90,
              value: 256.5,
            },
            {
              hour: 120,
              value: 254,
            },
            {
              hour: 150,
              value: 257.5,
            },
            {
              hour: 180,
              value: 258.5,
            },
            {
              hour: 210,
              value: 251.5,
            },
            {
              hour: 240,
              value: 245.5,
            },
            {
              hour: 270,
              value: 232.5,
            },
            {
              hour: 300,
              value: 258.5,
            },
            {
              hour: 330,
              value: 260,
            },
            {
              hour: 360,
              value: 281,
            },
            {
              hour: 390,
              value: 224.5,
            },
            {
              hour: 420,
              value: 183.5,
            },
            {
              hour: 450,
              value: 215,
            },
            {
              hour: 480,
              value: 269.5,
            },
            {
              hour: 510,
              value: 276.5,
            },
            {
              hour: 540,
              value: 249.5,
            },
            {
              hour: 570,
              value: 229,
            },
            {
              hour: 600,
              value: 190,
            },
            {
              hour: 630,
              value: 153.5,
            },
            {
              hour: 660,
              value: 133,
            },
            {
              hour: 690,
              value: 91,
            },
            {
              hour: 720,
              value: 75,
            },
            {
              hour: 750,
              value: 85.5,
            },
            {
              hour: 780,
              value: 75,
            },
            {
              hour: 810,
              value: 61.5,
            },
            {
              hour: 840,
              value: 48,
            },
            {
              hour: 870,
              value: 51.5,
            },
            {
              hour: 900,
              value: 65,
            },
            {
              hour: 930,
              value: 71,
            },
            {
              hour: 960,
              value: 74,
            },
            {
              hour: 990,
              value: 103,
            },
            {
              hour: 1020,
              value: 128.5,
            },
            {
              hour: 1050,
              value: 124,
            },
            {
              hour: 1080,
              value: 88,
            },
            {
              hour: 1110,
              value: 107.5,
            },
            {
              hour: 1140,
              value: 163,
            },
            {
              hour: 1170,
              value: 163.5,
            },
            {
              hour: 1200,
              value: 200,
            },
            {
              hour: 1230,
              value: 232.5,
            },
            {
              hour: 1260,
              value: 232,
            },
            {
              hour: 1290,
              value: 205,
            },
            {
              hour: 1320,
              value: 183,
            },
            {
              hour: 1350,
              value: 164.5,
            },
            {
              hour: 1380,
              value: 200.5,
            },
            {
              hour: 1410,
              value: 283,
            },
            {
              hour: 1440,
              value: 319,
            },
          ],
        },
      },
      {
        date: '2020/07/03',
        glycemia: {
          average: {
            '00:00-02:00': 283,
            '02:00-04:00': 224,
            '04:00-06:00': 225,
            '06:00-08:00': 196,
            '08:00-10:00': 171,
            '10:00-12:00': 82,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          standardDeviation: {
            '00:00-02:00': 23,
            '02:00-04:00': 16,
            '04:00-06:00': 20,
            '06:00-08:00': 31,
            '08:00-10:00': 40,
            '10:00-12:00': 11,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          variabilityCoefficient: {
            '00:00-02:00': 8,
            '02:00-04:00': 7,
            '04:00-06:00': 9,
            '06:00-08:00': 16,
            '08:00-10:00': 23,
            '10:00-12:00': 13,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 38,
            '08:00-10:00': 56,
            '10:00-12:00': 89,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 11,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 100,
            '02:00-04:00': 100,
            '04:00-06:00': 100,
            '06:00-08:00': 63,
            '08:00-10:00': 44,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 51,
            '08:00-10:00': 4,
            '10:00-12:00': 49,
            '12:00-14:00': 0,
            '14:00-16:00': 55,
            '16:00-18:00': 0,
            '18:00-20:00': 48,
            '20:00-22:00': 0,
            '22:00-24:00': 48,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 11,
            '08:00-10:00': 11,
            '10:00-12:00': 21,
            '12:00-14:00': 0,
            '14:00-16:00': 21,
            '16:00-18:00': 0,
            '18:00-20:00': 10,
            '20:00-22:00': 0,
            '22:00-24:00': 35,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 7,
            '08:00-10:00': 12,
            '10:00-12:00': 15,
            '12:00-14:00': 0,
            '14:00-16:00': 8,
            '16:00-18:00': 0,
            '18:00-20:00': 5,
            '20:00-22:00': 0,
            '22:00-24:00': 6,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 315,
            '08:00-10:00': 167,
            '10:00-12:00': 420,
            '12:00-14:00': 0,
            '14:00-16:00': 381,
            '16:00-18:00': 0,
            '18:00-20:00': 278,
            '20:00-22:00': 0,
            '22:00-24:00': 397,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '14.00',
          '08:00-10:00': 0,
          '10:00-12:00': '14.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '14.00',
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '12.00',
          '08:00-10:00': 0,
          '10:00-12:00': '12.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '12.00',
        },
        graphicData: {
          data: [
            {
              hour: 7,
              value: 326,
            },
            {
              hour: 22,
              value: 313,
            },
            {
              hour: 37,
              value: 292,
            },
            {
              hour: 52,
              value: 274,
            },
            {
              hour: 67,
              value: 265,
            },
            {
              hour: 82,
              value: 265,
            },
            {
              hour: 97,
              value: 266,
            },
            {
              hour: 112,
              value: 261,
            },
            {
              hour: 127,
              value: 250,
            },
            {
              hour: 142,
              value: 240,
            },
            {
              hour: 157,
              value: 235,
            },
            {
              hour: 172,
              value: 230,
            },
            {
              hour: 187,
              value: 220,
            },
            {
              hour: 202,
              value: 207,
            },
            {
              hour: 217,
              value: 203,
            },
            {
              hour: 232,
              value: 207,
            },
            {
              hour: 247,
              value: 205,
            },
            {
              hour: 262,
              value: 199,
            },
            {
              hour: 277,
              value: 202,
            },
            {
              hour: 292,
              value: 214,
            },
            {
              hour: 307,
              value: 226,
            },
            {
              hour: 322,
              value: 234,
            },
            {
              hour: 337,
              value: 243,
            },
            {
              hour: 352,
              value: 249,
            },
            {
              hour: 356,
              value: 256,
            },
            {
              hour: 367,
              value: 239,
            },
            {
              hour: 382,
              value: 232,
            },
            {
              hour: 397,
              value: 205,
            },
            {
              hour: 412,
              value: 169,
            },
            {
              hour: 427,
              value: 148,
            },
            {
              hour: 442,
              value: 163,
            },
            {
              hour: 457,
              value: 192,
            },
            {
              hour: 472,
              value: 219,
            },
            {
              hour: 487,
              value: 233,
            },
            {
              hour: 502,
              value: 224,
            },
            {
              hour: 517,
              value: 204,
            },
            {
              hour: 532,
              value: 186,
            },
            {
              hour: 547,
              value: 158,
            },
            {
              hour: 553,
              value: 147,
            },
            {
              hour: 562,
              value: 142,
            },
            {
              hour: 577,
              value: 130,
            },
            {
              hour: 592,
              value: 116,
            },
            {
              hour: 607,
              value: 103,
            },
            {
              hour: 622,
              value: 86,
            },
            {
              hour: 634,
              value: 74,
            },
            {
              hour: 637,
              value: 71,
            },
            {
              hour: 652,
              value: 65,
            },
            {
              hour: 667,
              value: 74,
            },
            {
              hour: 682,
              value: 89,
            },
            {
              hour: 697,
              value: 90,
            },
            {
              hour: 712,
              value: 85,
            },
          ],
          median: [
            {
              hour: 0,
              value: 326,
            },
            {
              hour: 30,
              value: 302.5,
            },
            {
              hour: 60,
              value: 269.5,
            },
            {
              hour: 90,
              value: 265.5,
            },
            {
              hour: 120,
              value: 255.5,
            },
            {
              hour: 150,
              value: 237.5,
            },
            {
              hour: 180,
              value: 225,
            },
            {
              hour: 210,
              value: 205,
            },
            {
              hour: 240,
              value: 206,
            },
            {
              hour: 270,
              value: 200.5,
            },
            {
              hour: 300,
              value: 220,
            },
            {
              hour: 330,
              value: 238.5,
            },
            {
              hour: 360,
              value: 249,
            },
            {
              hour: 390,
              value: 218.5,
            },
            {
              hour: 420,
              value: 158.5,
            },
            {
              hour: 450,
              value: 177.5,
            },
            {
              hour: 480,
              value: 226,
            },
            {
              hour: 510,
              value: 214,
            },
            {
              hour: 540,
              value: 158,
            },
            {
              hour: 570,
              value: 136,
            },
            {
              hour: 600,
              value: 109.5,
            },
            {
              hour: 630,
              value: 74,
            },
            {
              hour: 660,
              value: 69.5,
            },
            {
              hour: 690,
              value: 89.5,
            },
            {
              hour: 720,
              value: 85,
            },
          ],
        },
      },
      {
        date: '2020/07/04',
        glycemia: {
          average: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          standardDeviation: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          variabilityCoefficient: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 56,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 52,
            '14:00-16:00': 0,
            '16:00-18:00': 48,
            '18:00-20:00': 0,
            '20:00-22:00': 123,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 19,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 35,
            '14:00-16:00': 0,
            '16:00-18:00': 10,
            '18:00-20:00': 0,
            '20:00-22:00': 35,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 15,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 34,
            '14:00-16:00': 0,
            '16:00-18:00': 5,
            '18:00-20:00': 0,
            '20:00-22:00': 100,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 437,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 664,
            '14:00-16:00': 0,
            '16:00-18:00': 283,
            '18:00-20:00': 0,
            '20:00-22:00': 1463,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': '28.00',
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': '14.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '14.00',
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': '12.00',
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': '24.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '12.00',
        },
        graphicData: {
          data: [],
          median: [],
        },
      },
      {
        date: '2020/07/05',
        glycemia: {
          average: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          standardDeviation: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          variabilityCoefficient: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 50,
            '08:00-10:00': 0,
            '10:00-12:00': 23,
            '12:00-14:00': 0,
            '14:00-16:00': 64,
            '16:00-18:00': 75,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 108,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 11,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 28,
            '16:00-18:00': 22,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 54,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 6,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 23,
            '16:00-18:00': 8,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 59,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 302,
            '08:00-10:00': 0,
            '10:00-12:00': 84,
            '12:00-14:00': 0,
            '14:00-16:00': 582,
            '16:00-18:00': 455,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 1175,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '28.00',
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': '14.00',
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '28.00',
        },
        basal: {
          '00:00-02:00': '12.00',
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '24.00',
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': '12.00',
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '12.00',
        },
        graphicData: {
          data: [],
          median: [],
        },
      },
      {
        date: '2020/07/06',
        glycemia: {
          average: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 49,
            '16:00-18:00': 121,
            '18:00-20:00': 190,
            '20:00-22:00': 196,
            '22:00-24:00': 309,
          },
          standardDeviation: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 6,
            '16:00-18:00': 26,
            '18:00-20:00': 19,
            '20:00-22:00': 28,
            '22:00-24:00': 14,
          },
          variabilityCoefficient: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 12,
            '16:00-18:00': 21,
            '18:00-20:00': 10,
            '20:00-22:00': 14,
            '22:00-24:00': 5,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 100,
            '18:00-20:00': 30,
            '20:00-22:00': 44,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 100,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 70,
            '20:00-22:00': 56,
            '22:00-24:00': 100,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 51,
            '08:00-10:00': 20,
            '10:00-12:00': 95,
            '12:00-14:00': 0,
            '14:00-16:00': 47,
            '16:00-18:00': 0,
            '18:00-20:00': 64,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 11,
            '08:00-10:00': 1,
            '10:00-12:00': 36,
            '12:00-14:00': 0,
            '14:00-16:00': 9,
            '16:00-18:00': 0,
            '18:00-20:00': 53,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 7,
            '08:00-10:00': 0,
            '10:00-12:00': 6,
            '12:00-14:00': 0,
            '14:00-16:00': 5,
            '16:00-18:00': 0,
            '18:00-20:00': 49,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 314,
            '08:00-10:00': 74,
            '10:00-12:00': 556,
            '12:00-14:00': 0,
            '14:00-16:00': 266,
            '16:00-18:00': 0,
            '18:00-20:00': 928,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '14.00',
          '08:00-10:00': 0,
          '10:00-12:00': '14.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': '14.00',
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '12.00',
          '08:00-10:00': 0,
          '10:00-12:00': '12.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '12.00',
        },
        graphicData: {
          data: [
            {
              hour: 910,
              value: 44,
            },
            {
              hour: 914,
              value: 45,
            },
            {
              hour: 925,
              value: 43,
            },
            {
              hour: 940,
              value: 52,
            },
            {
              hour: 955,
              value: 60,
            },
            {
              hour: 970,
              value: 75,
            },
            {
              hour: 985,
              value: 87,
            },
            {
              hour: 1000,
              value: 109,
            },
            {
              hour: 1015,
              value: 133,
            },
            {
              hour: 1030,
              value: 132,
            },
            {
              hour: 1045,
              value: 138,
            },
            {
              hour: 1060,
              value: 147,
            },
            {
              hour: 1075,
              value: 148,
            },
            {
              hour: 1091,
              value: 159,
            },
            {
              hour: 1094,
              value: 164,
            },
            {
              hour: 1106,
              value: 172,
            },
            {
              hour: 1121,
              value: 187,
            },
            {
              hour: 1136,
              value: 201,
            },
            {
              hour: 1141,
              value: 199,
            },
            {
              hour: 1151,
              value: 214,
            },
            {
              hour: 1166,
              value: 215,
            },
            {
              hour: 1181,
              value: 203,
            },
            {
              hour: 1197,
              value: 189,
            },
            {
              hour: 1204,
              value: 187,
            },
            {
              hour: 1212,
              value: 180,
            },
            {
              hour: 1227,
              value: 166,
            },
            {
              hour: 1242,
              value: 163,
            },
            {
              hour: 1257,
              value: 175,
            },
            {
              hour: 1272,
              value: 196,
            },
            {
              hour: 1287,
              value: 215,
            },
            {
              hour: 1302,
              value: 230,
            },
            {
              hour: 1317,
              value: 248,
            },
            {
              hour: 1333,
              value: 284,
            },
            {
              hour: 1339,
              value: 285,
            },
            {
              hour: 1348,
              value: 308,
            },
            {
              hour: 1363,
              value: 317,
            },
            {
              hour: 1378,
              value: 320,
            },
            {
              hour: 1393,
              value: 316,
            },
            {
              hour: 1408,
              value: 319,
            },
            {
              hour: 1423,
              value: 323,
            },
            {
              hour: 1438,
              value: 313,
            },
          ],
          median: [
            {
              hour: 0,
              value: 313,
            },
            {
              hour: 900,
              value: 44.5,
            },
            {
              hour: 930,
              value: 47.5,
            },
            {
              hour: 960,
              value: 67.5,
            },
            {
              hour: 990,
              value: 98,
            },
            {
              hour: 1020,
              value: 132.5,
            },
            {
              hour: 1050,
              value: 142.5,
            },
            {
              hour: 1080,
              value: 159,
            },
            {
              hour: 1110,
              value: 179.5,
            },
            {
              hour: 1140,
              value: 201,
            },
            {
              hour: 1170,
              value: 209,
            },
            {
              hour: 1200,
              value: 187,
            },
            {
              hour: 1230,
              value: 164.5,
            },
            {
              hour: 1260,
              value: 185.5,
            },
            {
              hour: 1290,
              value: 222.5,
            },
            {
              hour: 1320,
              value: 266,
            },
            {
              hour: 1350,
              value: 308,
            },
            {
              hour: 1380,
              value: 318,
            },
            {
              hour: 1410,
              value: 321,
            },
            {
              hour: 1440,
              value: 313,
            },
          ],
        },
      },
      {
        date: '2020/07/07',
        glycemia: {
          average: {
            '00:00-02:00': 314,
            '02:00-04:00': 267,
            '04:00-06:00': 260,
            '06:00-08:00': 276,
            '08:00-10:00': 314,
            '10:00-12:00': 174,
            '12:00-14:00': 159,
            '14:00-16:00': 149,
            '16:00-18:00': 111,
            '18:00-20:00': 130,
            '20:00-22:00': 181,
            '22:00-24:00': 177,
          },
          standardDeviation: {
            '00:00-02:00': 8,
            '02:00-04:00': 5,
            '04:00-06:00': 9,
            '06:00-08:00': 20,
            '08:00-10:00': 41,
            '10:00-12:00': 34,
            '12:00-14:00': 22,
            '14:00-16:00': 15,
            '16:00-18:00': 10,
            '18:00-20:00': 37,
            '20:00-22:00': 5,
            '22:00-24:00': 35,
          },
          variabilityCoefficient: {
            '00:00-02:00': 3,
            '02:00-04:00': 2,
            '04:00-06:00': 3,
            '06:00-08:00': 7,
            '08:00-10:00': 13,
            '10:00-12:00': 20,
            '12:00-14:00': 14,
            '14:00-16:00': 10,
            '16:00-18:00': 9,
            '18:00-20:00': 28,
            '20:00-22:00': 3,
            '22:00-24:00': 20,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 50,
            '12:00-14:00': 89,
            '14:00-16:00': 100,
            '16:00-18:00': 100,
            '18:00-20:00': 100,
            '20:00-22:00': 63,
            '22:00-24:00': 44,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 100,
            '02:00-04:00': 100,
            '04:00-06:00': 100,
            '06:00-08:00': 100,
            '08:00-10:00': 100,
            '10:00-12:00': 50,
            '12:00-14:00': 11,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 38,
            '22:00-24:00': 56,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 50,
            '08:00-10:00': 2,
            '10:00-12:00': 60,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 50,
            '20:00-22:00': 0,
            '22:00-24:00': 120,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 11,
            '08:00-10:00': 10,
            '10:00-12:00': 42,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 16,
            '20:00-22:00': 0,
            '22:00-24:00': 54,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 7,
            '08:00-10:00': 10,
            '10:00-12:00': 10,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 7,
            '20:00-22:00': 0,
            '22:00-24:00': 13,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 308,
            '08:00-10:00': 139,
            '10:00-12:00': 500,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 327,
            '20:00-22:00': 0,
            '22:00-24:00': 813,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '14.00',
          '08:00-10:00': 0,
          '10:00-12:00': '14.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': '14.00',
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '12.00',
          '08:00-10:00': 0,
          '10:00-12:00': '12.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '12.00',
        },
        graphicData: {
          data: [
            {
              hour: 15,
              value: 316,
            },
            {
              hour: 20,
              value: 317,
            },
            {
              hour: 30,
              value: 320,
            },
            {
              hour: 45,
              value: 321,
            },
            {
              hour: 60,
              value: 317,
            },
            {
              hour: 75,
              value: 315,
            },
            {
              hour: 90,
              value: 315,
            },
            {
              hour: 105,
              value: 311,
            },
            {
              hour: 120,
              value: 294,
            },
            {
              hour: 135,
              value: 277,
            },
            {
              hour: 150,
              value: 269,
            },
            {
              hour: 165,
              value: 263,
            },
            {
              hour: 180,
              value: 260,
            },
            {
              hour: 195,
              value: 265,
            },
            {
              hour: 210,
              value: 270,
            },
            {
              hour: 225,
              value: 271,
            },
            {
              hour: 240,
              value: 262,
            },
            {
              hour: 255,
              value: 253,
            },
            {
              hour: 270,
              value: 258,
            },
            {
              hour: 285,
              value: 265,
            },
            {
              hour: 300,
              value: 268,
            },
            {
              hour: 315,
              value: 270,
            },
            {
              hour: 330,
              value: 261,
            },
            {
              hour: 345,
              value: 242,
            },
            {
              hour: 361,
              value: 268,
            },
            {
              hour: 362,
              value: 285,
            },
            {
              hour: 377,
              value: 280,
            },
            {
              hour: 392,
              value: 267,
            },
            {
              hour: 407,
              value: 257,
            },
            {
              hour: 422,
              value: 253,
            },
            {
              hour: 437,
              value: 264,
            },
            {
              hour: 452,
              value: 292,
            },
            {
              hour: 467,
              value: 321,
            },
            {
              hour: 482,
              value: 344,
            },
            {
              hour: 497,
              value: 362,
            },
            {
              hour: 512,
              value: 364,
            },
            {
              hour: 527,
              value: 347,
            },
            {
              hour: 542,
              value: 323,
            },
            {
              hour: 557,
              value: 299,
            },
            {
              hour: 572,
              value: 282,
            },
            {
              hour: 588,
              value: 255,
            },
            {
              hour: 592,
              value: 254,
            },
            {
              hour: 603,
              value: 228,
            },
            {
              hour: 618,
              value: 207,
            },
            {
              hour: 633,
              value: 195,
            },
            {
              hour: 648,
              value: 185,
            },
            {
              hour: 663,
              value: 165,
            },
            {
              hour: 678,
              value: 143,
            },
            {
              hour: 693,
              value: 135,
            },
            {
              hour: 708,
              value: 131,
            },
            {
              hour: 723,
              value: 126,
            },
            {
              hour: 738,
              value: 129,
            },
            {
              hour: 753,
              value: 142,
            },
            {
              hour: 768,
              value: 151,
            },
            {
              hour: 783,
              value: 163,
            },
            {
              hour: 798,
              value: 180,
            },
            {
              hour: 813,
              value: 191,
            },
            {
              hour: 830,
              value: 177,
            },
            {
              hour: 835,
              value: 170,
            },
            {
              hour: 845,
              value: 166,
            },
            {
              hour: 860,
              value: 164,
            },
            {
              hour: 875,
              value: 159,
            },
            {
              hour: 890,
              value: 154,
            },
            {
              hour: 905,
              value: 151,
            },
            {
              hour: 921,
              value: 142,
            },
            {
              hour: 922,
              value: 158,
            },
            {
              hour: 936,
              value: 126,
            },
            {
              hour: 951,
              value: 122,
            },
            {
              hour: 966,
              value: 125,
            },
            {
              hour: 981,
              value: 123,
            },
            {
              hour: 996,
              value: 116,
            },
            {
              hour: 1011,
              value: 111,
            },
            {
              hour: 1026,
              value: 110,
            },
            {
              hour: 1041,
              value: 107,
            },
            {
              hour: 1056,
              value: 100,
            },
            {
              hour: 1071,
              value: 94,
            },
            {
              hour: 1087,
              value: 87,
            },
            {
              hour: 1089,
              value: 98,
            },
            {
              hour: 1102,
              value: 78,
            },
            {
              hour: 1117,
              value: 89,
            },
            {
              hour: 1132,
              value: 124,
            },
            {
              hour: 1147,
              value: 152,
            },
            {
              hour: 1162,
              value: 165,
            },
            {
              hour: 1170,
              value: 178,
            },
            {
              hour: 1177,
              value: 166,
            },
            {
              hour: 1192,
              value: 167,
            },
            {
              hour: 1207,
              value: 174,
            },
            {
              hour: 1222,
              value: 179,
            },
            {
              hour: 1237,
              value: 177,
            },
            {
              hour: 1252,
              value: 176,
            },
            {
              hour: 1267,
              value: 177,
            },
            {
              hour: 1284,
              value: 186,
            },
            {
              hour: 1299,
              value: 187,
            },
            {
              hour: 1314,
              value: 188,
            },
            {
              hour: 1329,
              value: 186,
            },
            {
              hour: 1344,
              value: 167,
            },
            {
              hour: 1359,
              value: 139,
            },
            {
              hour: 1374,
              value: 123,
            },
            {
              hour: 1389,
              value: 144,
            },
            {
              hour: 1404,
              value: 184,
            },
            {
              hour: 1421,
              value: 217,
            },
            {
              hour: 1426,
              value: 220,
            },
            {
              hour: 1436,
              value: 217,
            },
          ],
          median: [
            {
              hour: 0,
              value: 220,
            },
            {
              hour: 30,
              value: 320,
            },
            {
              hour: 60,
              value: 316,
            },
            {
              hour: 90,
              value: 313,
            },
            {
              hour: 120,
              value: 285.5,
            },
            {
              hour: 150,
              value: 266,
            },
            {
              hour: 180,
              value: 262.5,
            },
            {
              hour: 210,
              value: 270.5,
            },
            {
              hour: 240,
              value: 257.5,
            },
            {
              hour: 270,
              value: 261.5,
            },
            {
              hour: 300,
              value: 269,
            },
            {
              hour: 330,
              value: 251.5,
            },
            {
              hour: 360,
              value: 276.5,
            },
            {
              hour: 390,
              value: 273.5,
            },
            {
              hour: 420,
              value: 255,
            },
            {
              hour: 450,
              value: 278,
            },
            {
              hour: 480,
              value: 332.5,
            },
            {
              hour: 510,
              value: 363,
            },
            {
              hour: 540,
              value: 335,
            },
            {
              hour: 570,
              value: 290.5,
            },
            {
              hour: 600,
              value: 254,
            },
            {
              hour: 630,
              value: 201,
            },
            {
              hour: 660,
              value: 175,
            },
            {
              hour: 690,
              value: 139,
            },
            {
              hour: 720,
              value: 128.5,
            },
            {
              hour: 750,
              value: 135.5,
            },
            {
              hour: 780,
              value: 157,
            },
            {
              hour: 810,
              value: 185.5,
            },
            {
              hour: 840,
              value: 170,
            },
            {
              hour: 870,
              value: 161.5,
            },
            {
              hour: 900,
              value: 152.5,
            },
            {
              hour: 930,
              value: 142,
            },
            {
              hour: 960,
              value: 123.5,
            },
            {
              hour: 990,
              value: 119.5,
            },
            {
              hour: 1020,
              value: 110.5,
            },
            {
              hour: 1050,
              value: 103.5,
            },
            {
              hour: 1080,
              value: 94,
            },
            {
              hour: 1110,
              value: 83.5,
            },
            {
              hour: 1140,
              value: 138,
            },
            {
              hour: 1170,
              value: 166,
            },
            {
              hour: 1200,
              value: 170.5,
            },
            {
              hour: 1230,
              value: 178,
            },
            {
              hour: 1260,
              value: 176.5,
            },
            {
              hour: 1290,
              value: 186.5,
            },
            {
              hour: 1320,
              value: 187,
            },
            {
              hour: 1350,
              value: 153,
            },
            {
              hour: 1380,
              value: 133.5,
            },
            {
              hour: 1410,
              value: 200.5,
            },
            {
              hour: 1440,
              value: 218.5,
            },
          ],
        },
      },
      {
        date: '2020/07/08',
        glycemia: {
          average: {
            '00:00-02:00': 196,
            '02:00-04:00': 164,
            '04:00-06:00': 152,
            '06:00-08:00': 117,
            '08:00-10:00': 89,
            '10:00-12:00': 73,
            '12:00-14:00': 74,
            '14:00-16:00': 65,
            '16:00-18:00': 61,
            '18:00-20:00': 127,
            '20:00-22:00': 113,
            '22:00-24:00': 203,
          },
          standardDeviation: {
            '00:00-02:00': 11,
            '02:00-04:00': 9,
            '04:00-06:00': 4,
            '06:00-08:00': 25,
            '08:00-10:00': 14,
            '10:00-12:00': 16,
            '12:00-14:00': 13,
            '14:00-16:00': 10,
            '16:00-18:00': 20,
            '18:00-20:00': 15,
            '20:00-22:00': 9,
            '22:00-24:00': 60,
          },
          variabilityCoefficient: {
            '00:00-02:00': 6,
            '02:00-04:00': 5,
            '04:00-06:00': 3,
            '06:00-08:00': 21,
            '08:00-10:00': 16,
            '10:00-12:00': 22,
            '12:00-14:00': 18,
            '14:00-16:00': 15,
            '16:00-18:00': 33,
            '18:00-20:00': 12,
            '20:00-22:00': 8,
            '22:00-24:00': 30,
          },
          onTarget: {
            '00:00-02:00': 13,
            '02:00-04:00': 100,
            '04:00-06:00': 100,
            '06:00-08:00': 100,
            '08:00-10:00': 90,
            '10:00-12:00': 56,
            '12:00-14:00': 60,
            '14:00-16:00': 25,
            '16:00-18:00': 13,
            '18:00-20:00': 100,
            '20:00-22:00': 100,
            '22:00-24:00': 38,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 10,
            '10:00-12:00': 44,
            '12:00-14:00': 40,
            '14:00-16:00': 75,
            '16:00-18:00': 88,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 88,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 63,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 53,
            '08:00-10:00': 32,
            '10:00-12:00': 62,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 61,
            '18:00-20:00': 0,
            '20:00-22:00': 108,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 12,
            '08:00-10:00': 18,
            '10:00-12:00': 44,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 27,
            '18:00-20:00': 0,
            '20:00-22:00': 14,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 8,
            '08:00-10:00': 19,
            '10:00-12:00': 33,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 30,
            '18:00-20:00': 0,
            '20:00-22:00': 19,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 336,
            '08:00-10:00': 361,
            '10:00-12:00': 726,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 624,
            '18:00-20:00': 0,
            '20:00-22:00': 653,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '14.00',
          '08:00-10:00': 0,
          '10:00-12:00': '14.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': '14.00',
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '12.00',
          '08:00-10:00': 0,
          '10:00-12:00': '12.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': '12.00',
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [
            {
              hour: 11,
              value: 206,
            },
            {
              hour: 26,
              value: 205,
            },
            {
              hour: 41,
              value: 207,
            },
            {
              hour: 56,
              value: 202,
            },
            {
              hour: 71,
              value: 196,
            },
            {
              hour: 86,
              value: 191,
            },
            {
              hour: 101,
              value: 182,
            },
            {
              hour: 116,
              value: 176,
            },
            {
              hour: 131,
              value: 175,
            },
            {
              hour: 146,
              value: 173,
            },
            {
              hour: 161,
              value: 173,
            },
            {
              hour: 176,
              value: 168,
            },
            {
              hour: 191,
              value: 161,
            },
            {
              hour: 206,
              value: 161,
            },
            {
              hour: 221,
              value: 150,
            },
            {
              hour: 236,
              value: 152,
            },
            {
              hour: 251,
              value: 156,
            },
            {
              hour: 266,
              value: 149,
            },
            {
              hour: 281,
              value: 148,
            },
            {
              hour: 296,
              value: 153,
            },
            {
              hour: 311,
              value: 155,
            },
            {
              hour: 326,
              value: 152,
            },
            {
              hour: 341,
              value: 146,
            },
            {
              hour: 358,
              value: 156,
            },
            {
              hour: 364,
              value: 156,
            },
            {
              hour: 373,
              value: 152,
            },
            {
              hour: 388,
              value: 135,
            },
            {
              hour: 403,
              value: 110,
            },
            {
              hour: 418,
              value: 83,
            },
            {
              hour: 433,
              value: 80,
            },
            {
              hour: 448,
              value: 103,
            },
            {
              hour: 463,
              value: 118,
            },
            {
              hour: 478,
              value: 116,
            },
            {
              hour: 493,
              value: 109,
            },
            {
              hour: 508,
              value: 103,
            },
            {
              hour: 523,
              value: 95,
            },
            {
              hour: 528,
              value: 92,
            },
            {
              hour: 539,
              value: 79,
            },
            {
              hour: 552,
              value: 70,
            },
            {
              hour: 554,
              value: 69,
            },
            {
              hour: 569,
              value: 75,
            },
            {
              hour: 584,
              value: 92,
            },
            {
              hour: 599,
              value: 102,
            },
            {
              hour: 614,
              value: 101,
            },
            {
              hour: 629,
              value: 93,
            },
            {
              hour: 644,
              value: 83,
            },
            {
              hour: 659,
              value: 78,
            },
            {
              hour: 674,
              value: 71,
            },
            {
              hour: 688,
              value: 60,
            },
            {
              hour: 692,
              value: 60,
            },
            {
              hour: 703,
              value: 56,
            },
            {
              hour: 718,
              value: 56,
            },
            {
              hour: 733,
              value: 57,
            },
            {
              hour: 750,
              value: 62,
            },
            {
              hour: 752,
              value: 62,
            },
            {
              hour: 753,
              value: 62,
            },
            {
              hour: 765,
              value: 73,
            },
            {
              hour: 780,
              value: 86,
            },
            {
              hour: 795,
              value: 96,
            },
            {
              hour: 810,
              value: 92,
            },
            {
              hour: 825,
              value: 81,
            },
            {
              hour: 840,
              value: 71,
            },
            {
              hour: 856,
              value: 62,
            },
            {
              hour: 864,
              value: 60,
            },
            {
              hour: 871,
              value: 57,
            },
            {
              hour: 886,
              value: 55,
            },
            {
              hour: 901,
              value: 54,
            },
            {
              hour: 916,
              value: 68,
            },
            {
              hour: 931,
              value: 83,
            },
            {
              hour: 946,
              value: 78,
            },
            {
              hour: 961,
              value: 68,
            },
            {
              hour: 976,
              value: 63,
            },
            {
              hour: 991,
              value: 59,
            },
            {
              hour: 1007,
              value: 51,
            },
            {
              hour: 1022,
              value: 41,
            },
            {
              hour: 1037,
              value: 40,
            },
            {
              hour: 1052,
              value: 61,
            },
            {
              hour: 1067,
              value: 108,
            },
            {
              hour: 1082,
              value: 127,
            },
            {
              hour: 1097,
              value: 138,
            },
            {
              hour: 1098,
              value: 138,
            },
            {
              hour: 1112,
              value: 147,
            },
            {
              hour: 1127,
              value: 146,
            },
            {
              hour: 1142,
              value: 132,
            },
            {
              hour: 1156,
              value: 125,
            },
            {
              hour: 1157,
              value: 112,
            },
            {
              hour: 1172,
              value: 104,
            },
            {
              hour: 1187,
              value: 103,
            },
            {
              hour: 1202,
              value: 101,
            },
            {
              hour: 1217,
              value: 98,
            },
            {
              hour: 1232,
              value: 108,
            },
            {
              hour: 1247,
              value: 125,
            },
            {
              hour: 1263,
              value: 124,
            },
            {
              hour: 1278,
              value: 120,
            },
            {
              hour: 1294,
              value: 118,
            },
            {
              hour: 1302,
              value: 110,
            },
            {
              hour: 1309,
              value: 117,
            },
            {
              hour: 1324,
              value: 113,
            },
            {
              hour: 1339,
              value: 121,
            },
            {
              hour: 1354,
              value: 157,
            },
            {
              hour: 1369,
              value: 204,
            },
            {
              hour: 1384,
              value: 236,
            },
            {
              hour: 1399,
              value: 256,
            },
            {
              hour: 1414,
              value: 269,
            },
            {
              hour: 1430,
              value: 264,
            },
          ],
          median: [
            {
              hour: 0,
              value: 235,
            },
            {
              hour: 30,
              value: 206,
            },
            {
              hour: 60,
              value: 199,
            },
            {
              hour: 90,
              value: 186.5,
            },
            {
              hour: 120,
              value: 175.5,
            },
            {
              hour: 150,
              value: 173,
            },
            {
              hour: 180,
              value: 164.5,
            },
            {
              hour: 210,
              value: 155.5,
            },
            {
              hour: 240,
              value: 154,
            },
            {
              hour: 270,
              value: 148.5,
            },
            {
              hour: 300,
              value: 154,
            },
            {
              hour: 330,
              value: 149,
            },
            {
              hour: 360,
              value: 156,
            },
            {
              hour: 390,
              value: 122.5,
            },
            {
              hour: 420,
              value: 81.5,
            },
            {
              hour: 450,
              value: 110.5,
            },
            {
              hour: 480,
              value: 112.5,
            },
            {
              hour: 510,
              value: 99,
            },
            {
              hour: 540,
              value: 74.5,
            },
            {
              hour: 570,
              value: 83.5,
            },
            {
              hour: 600,
              value: 101.5,
            },
            {
              hour: 630,
              value: 88,
            },
            {
              hour: 660,
              value: 74.5,
            },
            {
              hour: 690,
              value: 60,
            },
            {
              hour: 720,
              value: 56.5,
            },
            {
              hour: 750,
              value: 62,
            },
            {
              hour: 780,
              value: 91,
            },
            {
              hour: 810,
              value: 86.5,
            },
            {
              hour: 840,
              value: 71,
            },
            {
              hour: 870,
              value: 60,
            },
            {
              hour: 900,
              value: 54.5,
            },
            {
              hour: 930,
              value: 75.5,
            },
            {
              hour: 960,
              value: 73,
            },
            {
              hour: 990,
              value: 61,
            },
            {
              hour: 1020,
              value: 46,
            },
            {
              hour: 1050,
              value: 50.5,
            },
            {
              hour: 1080,
              value: 117.5,
            },
            {
              hour: 1110,
              value: 138,
            },
            {
              hour: 1140,
              value: 139,
            },
            {
              hour: 1170,
              value: 112,
            },
            {
              hour: 1200,
              value: 102,
            },
            {
              hour: 1230,
              value: 103,
            },
            {
              hour: 1260,
              value: 124.5,
            },
            {
              hour: 1290,
              value: 118,
            },
            {
              hour: 1320,
              value: 115,
            },
            {
              hour: 1350,
              value: 139,
            },
            {
              hour: 1380,
              value: 220,
            },
            {
              hour: 1410,
              value: 262.5,
            },
            {
              hour: 1440,
              value: 264,
            },
          ],
        },
      },
      {
        date: '2020/07/09',
        glycemia: {
          average: {
            '00:00-02:00': 219,
            '02:00-04:00': 121,
            '04:00-06:00': 103,
            '06:00-08:00': 155,
            '08:00-10:00': 200,
            '10:00-12:00': 98,
            '12:00-14:00': 156,
            '14:00-16:00': 158,
            '16:00-18:00': 95,
            '18:00-20:00': 96,
            '20:00-22:00': 98,
            '22:00-24:00': 62,
          },
          standardDeviation: {
            '00:00-02:00': 20,
            '02:00-04:00': 25,
            '04:00-06:00': 11,
            '06:00-08:00': 43,
            '08:00-10:00': 40,
            '10:00-12:00': 14,
            '12:00-14:00': 22,
            '14:00-16:00': 17,
            '16:00-18:00': 19,
            '18:00-20:00': 25,
            '20:00-22:00': 23,
            '22:00-24:00': 27,
          },
          variabilityCoefficient: {
            '00:00-02:00': 9,
            '02:00-04:00': 21,
            '04:00-06:00': 11,
            '06:00-08:00': 28,
            '08:00-10:00': 20,
            '10:00-12:00': 14,
            '12:00-14:00': 14,
            '14:00-16:00': 11,
            '16:00-18:00': 20,
            '18:00-20:00': 26,
            '20:00-22:00': 23,
            '22:00-24:00': 44,
          },
          onTarget: {
            '00:00-02:00': 13,
            '02:00-04:00': 100,
            '04:00-06:00': 100,
            '06:00-08:00': 70,
            '08:00-10:00': 33,
            '10:00-12:00': 100,
            '12:00-14:00': 100,
            '14:00-16:00': 100,
            '16:00-18:00': 88,
            '18:00-20:00': 67,
            '20:00-22:00': 75,
            '22:00-24:00': 25,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 13,
            '18:00-20:00': 33,
            '20:00-22:00': 25,
            '22:00-24:00': 75,
          },
          hyperTime: {
            '00:00-02:00': 88,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 30,
            '08:00-10:00': 67,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 22,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 45,
            '08:00-10:00': 0,
            '10:00-12:00': 62,
            '12:00-14:00': 36,
            '14:00-16:00': 0,
            '16:00-18:00': 83,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 22,
          },
          prot: {
            '00:00-02:00': 2,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 8,
            '08:00-10:00': 0,
            '10:00-12:00': 44,
            '12:00-14:00': 13,
            '14:00-16:00': 0,
            '16:00-18:00': 20,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 93,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 4,
            '08:00-10:00': 0,
            '10:00-12:00': 36,
            '12:00-14:00': 8,
            '14:00-16:00': 0,
            '16:00-18:00': 14,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 9,
          },
          kcal: {
            '00:00-02:00': 102,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 252,
            '08:00-10:00': 0,
            '10:00-12:00': 756,
            '12:00-14:00': 263,
            '14:00-16:00': 0,
            '16:00-18:00': 552,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 555,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '14.00',
          '08:00-10:00': 0,
          '10:00-12:00': '14.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': '14.00',
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '12.00',
          '08:00-10:00': 0,
          '10:00-12:00': '12.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '12.00',
        },
        graphicData: {
          data: [
            {
              hour: 5,
              value: 245,
            },
            {
              hour: 20,
              value: 225,
            },
            {
              hour: 35,
              value: 224,
            },
            {
              hour: 50,
              value: 233,
            },
            {
              hour: 65,
              value: 232,
            },
            {
              hour: 80,
              value: 218,
            },
            {
              hour: 95,
              value: 199,
            },
            {
              hour: 110,
              value: 179,
            },
            {
              hour: 125,
              value: 161,
            },
            {
              hour: 140,
              value: 148,
            },
            {
              hour: 155,
              value: 141,
            },
            {
              hour: 171,
              value: 126,
            },
            {
              hour: 176,
              value: 133,
            },
            {
              hour: 186,
              value: 102,
            },
            {
              hour: 201,
              value: 93,
            },
            {
              hour: 216,
              value: 95,
            },
            {
              hour: 231,
              value: 94,
            },
            {
              hour: 246,
              value: 90,
            },
            {
              hour: 261,
              value: 89,
            },
            {
              hour: 276,
              value: 92,
            },
            {
              hour: 291,
              value: 99,
            },
            {
              hour: 306,
              value: 109,
            },
            {
              hour: 321,
              value: 115,
            },
            {
              hour: 336,
              value: 114,
            },
            {
              hour: 352,
              value: 118,
            },
            {
              hour: 363,
              value: 125,
            },
            {
              hour: 367,
              value: 122,
            },
            {
              hour: 383,
              value: 128,
            },
            {
              hour: 395,
              value: 134,
            },
            {
              hour: 398,
              value: 126,
            },
            {
              hour: 413,
              value: 123,
            },
            {
              hour: 428,
              value: 144,
            },
            {
              hour: 443,
              value: 181,
            },
            {
              hour: 458,
              value: 218,
            },
            {
              hour: 473,
              value: 246,
            },
            {
              hour: 488,
              value: 253,
            },
            {
              hour: 503,
              value: 247,
            },
            {
              hour: 518,
              value: 238,
            },
            {
              hour: 533,
              value: 222,
            },
            {
              hour: 548,
              value: 197,
            },
            {
              hour: 557,
              value: 186,
            },
            {
              hour: 563,
              value: 171,
            },
            {
              hour: 578,
              value: 156,
            },
            {
              hour: 594,
              value: 133,
            },
            {
              hour: 604,
              value: 120,
            },
            {
              hour: 609,
              value: 115,
            },
            {
              hour: 624,
              value: 105,
            },
            {
              hour: 639,
              value: 106,
            },
            {
              hour: 654,
              value: 104,
            },
            {
              hour: 669,
              value: 96,
            },
            {
              hour: 686,
              value: 83,
            },
            {
              hour: 694,
              value: 77,
            },
            {
              hour: 701,
              value: 83,
            },
            {
              hour: 716,
              value: 94,
            },
            {
              hour: 731,
              value: 112,
            },
            {
              hour: 746,
              value: 132,
            },
            {
              hour: 761,
              value: 150,
            },
            {
              hour: 776,
              value: 163,
            },
            {
              hour: 791,
              value: 168,
            },
            {
              hour: 806,
              value: 171,
            },
            {
              hour: 821,
              value: 176,
            },
            {
              hour: 836,
              value: 175,
            },
            {
              hour: 851,
              value: 177,
            },
            {
              hour: 866,
              value: 180,
            },
            {
              hour: 881,
              value: 179,
            },
            {
              hour: 895,
              value: 165,
            },
            {
              hour: 908,
              value: 163,
            },
            {
              hour: 910,
              value: 153,
            },
            {
              hour: 927,
              value: 143,
            },
            {
              hour: 931,
              value: 156,
            },
            {
              hour: 942,
              value: 132,
            },
            {
              hour: 957,
              value: 131,
            },
            {
              hour: 972,
              value: 123,
            },
            {
              hour: 987,
              value: 114,
            },
            {
              hour: 1002,
              value: 109,
            },
            {
              hour: 1017,
              value: 103,
            },
            {
              hour: 1032,
              value: 91,
            },
            {
              hour: 1047,
              value: 78,
            },
            {
              hour: 1062,
              value: 72,
            },
            {
              hour: 1077,
              value: 69,
            },
            {
              hour: 1093,
              value: 68,
            },
            {
              hour: 1108,
              value: 62,
            },
            {
              hour: 1123,
              value: 66,
            },
            {
              hour: 1138,
              value: 86,
            },
            {
              hour: 1153,
              value: 102,
            },
            {
              hour: 1168,
              value: 111,
            },
            {
              hour: 1184,
              value: 122,
            },
            {
              hour: 1192,
              value: 120,
            },
            {
              hour: 1199,
              value: 127,
            },
            {
              hour: 1214,
              value: 126,
            },
            {
              hour: 1229,
              value: 121,
            },
            {
              hour: 1244,
              value: 118,
            },
            {
              hour: 1259,
              value: 112,
            },
            {
              hour: 1274,
              value: 98,
            },
            {
              hour: 1289,
              value: 81,
            },
            {
              hour: 1304,
              value: 69,
            },
            {
              hour: 1319,
              value: 62,
            },
            {
              hour: 1334,
              value: 57,
            },
            {
              hour: 1349,
              value: 53,
            },
            {
              hour: 1364,
              value: 44,
            },
            {
              hour: 1379,
              value: 40,
            },
            {
              hour: 1394,
              value: 40,
            },
            {
              hour: 1412,
              value: 52,
            },
            {
              hour: 1420,
              value: 84,
            },
            {
              hour: 1427,
              value: 124,
            },
          ],
          median: [
            {
              hour: 0,
              value: 184.5,
            },
            {
              hour: 30,
              value: 224.5,
            },
            {
              hour: 60,
              value: 232.5,
            },
            {
              hour: 90,
              value: 208.5,
            },
            {
              hour: 120,
              value: 170,
            },
            {
              hour: 150,
              value: 144.5,
            },
            {
              hour: 180,
              value: 126,
            },
            {
              hour: 210,
              value: 94,
            },
            {
              hour: 240,
              value: 92,
            },
            {
              hour: 270,
              value: 90.5,
            },
            {
              hour: 300,
              value: 104,
            },
            {
              hour: 330,
              value: 114.5,
            },
            {
              hour: 360,
              value: 122,
            },
            {
              hour: 390,
              value: 128,
            },
            {
              hour: 420,
              value: 133.5,
            },
            {
              hour: 450,
              value: 199.5,
            },
            {
              hour: 480,
              value: 249.5,
            },
            {
              hour: 510,
              value: 242.5,
            },
            {
              hour: 540,
              value: 209.5,
            },
            {
              hour: 570,
              value: 171,
            },
            {
              hour: 600,
              value: 120,
            },
            {
              hour: 630,
              value: 105.5,
            },
            {
              hour: 660,
              value: 100,
            },
            {
              hour: 690,
              value: 83,
            },
            {
              hour: 720,
              value: 103,
            },
            {
              hour: 750,
              value: 141,
            },
            {
              hour: 780,
              value: 165.5,
            },
            {
              hour: 810,
              value: 173.5,
            },
            {
              hour: 840,
              value: 176,
            },
            {
              hour: 870,
              value: 179.5,
            },
            {
              hour: 900,
              value: 163,
            },
            {
              hour: 930,
              value: 143,
            },
            {
              hour: 960,
              value: 127,
            },
            {
              hour: 990,
              value: 111.5,
            },
            {
              hour: 1020,
              value: 97,
            },
            {
              hour: 1050,
              value: 75,
            },
            {
              hour: 1080,
              value: 68.5,
            },
            {
              hour: 1110,
              value: 64,
            },
            {
              hour: 1140,
              value: 94,
            },
            {
              hour: 1170,
              value: 116.5,
            },
            {
              hour: 1200,
              value: 126,
            },
            {
              hour: 1230,
              value: 119.5,
            },
            {
              hour: 1260,
              value: 105,
            },
            {
              hour: 1290,
              value: 75,
            },
            {
              hour: 1320,
              value: 59.5,
            },
            {
              hour: 1350,
              value: 48.5,
            },
            {
              hour: 1380,
              value: 40,
            },
            {
              hour: 1410,
              value: 68,
            },
            {
              hour: 1440,
              value: 124,
            },
          ],
        },
      },
      {
        date: '2020/07/10',
        glycemia: {
          average: {
            '00:00-02:00': 223,
            '02:00-04:00': 218,
            '04:00-06:00': 204,
            '06:00-08:00': 190,
            '08:00-10:00': 156,
            '10:00-12:00': 155,
            '12:00-14:00': 106,
            '14:00-16:00': 125,
            '16:00-18:00': 124,
            '18:00-20:00': 256,
            '20:00-22:00': 180,
            '22:00-24:00': 177,
          },
          standardDeviation: {
            '00:00-02:00': 29,
            '02:00-04:00': 10,
            '04:00-06:00': 7,
            '06:00-08:00': 5,
            '08:00-10:00': 17,
            '10:00-12:00': 16,
            '12:00-14:00': 25,
            '14:00-16:00': 27,
            '16:00-18:00': 28,
            '18:00-20:00': 23,
            '20:00-22:00': 18,
            '22:00-24:00': 32,
          },
          variabilityCoefficient: {
            '00:00-02:00': 13,
            '02:00-04:00': 5,
            '04:00-06:00': 3,
            '06:00-08:00': 3,
            '08:00-10:00': 11,
            '10:00-12:00': 10,
            '12:00-14:00': 24,
            '14:00-16:00': 22,
            '16:00-18:00': 23,
            '18:00-20:00': 9,
            '20:00-22:00': 10,
            '22:00-24:00': 18,
          },
          onTarget: {
            '00:00-02:00': 13,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 89,
            '10:00-12:00': 100,
            '12:00-14:00': 100,
            '14:00-16:00': 100,
            '16:00-18:00': 90,
            '18:00-20:00': 0,
            '20:00-22:00': 63,
            '22:00-24:00': 50,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 88,
            '02:00-04:00': 100,
            '04:00-06:00': 100,
            '06:00-08:00': 100,
            '08:00-10:00': 11,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 10,
            '18:00-20:00': 100,
            '20:00-22:00': 38,
            '22:00-24:00': 50,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 53,
            '10:00-12:00': 48,
            '12:00-14:00': 0,
            '14:00-16:00': 68,
            '16:00-18:00': 53,
            '18:00-20:00': 0,
            '20:00-22:00': 66,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 12,
            '10:00-12:00': 7,
            '12:00-14:00': 0,
            '14:00-16:00': 15,
            '16:00-18:00': 12,
            '18:00-20:00': 0,
            '20:00-22:00': 29,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 8,
            '10:00-12:00': 9,
            '12:00-14:00': 0,
            '14:00-16:00': 3,
            '16:00-18:00': 8,
            '18:00-20:00': 0,
            '20:00-22:00': 11,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 336,
            '10:00-12:00': 291,
            '12:00-14:00': 0,
            '14:00-16:00': 360,
            '16:00-18:00': 336,
            '18:00-20:00': 0,
            '20:00-22:00': 407,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '14.00',
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': '14.00',
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': '14.00',
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '12.00',
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': '12.00',
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '12.00',
        },
        graphicData: {
          data: [
            {
              hour: 2,
              value: 166,
            },
            {
              hour: 17,
              value: 194,
            },
            {
              hour: 32,
              value: 213,
            },
            {
              hour: 47,
              value: 226,
            },
            {
              hour: 62,
              value: 239,
            },
            {
              hour: 77,
              value: 248,
            },
            {
              hour: 92,
              value: 252,
            },
            {
              hour: 107,
              value: 248,
            },
            {
              hour: 122,
              value: 232,
            },
            {
              hour: 137,
              value: 226,
            },
            {
              hour: 152,
              value: 229,
            },
            {
              hour: 167,
              value: 221,
            },
            {
              hour: 182,
              value: 216,
            },
            {
              hour: 197,
              value: 213,
            },
            {
              hour: 212,
              value: 205,
            },
            {
              hour: 227,
              value: 202,
            },
            {
              hour: 242,
              value: 202,
            },
            {
              hour: 257,
              value: 199,
            },
            {
              hour: 272,
              value: 195,
            },
            {
              hour: 287,
              value: 201,
            },
            {
              hour: 304,
              value: 212,
            },
            {
              hour: 315,
              value: 218,
            },
            {
              hour: 319,
              value: 205,
            },
            {
              hour: 334,
              value: 200,
            },
            {
              hour: 349,
              value: 203,
            },
            {
              hour: 364,
              value: 197,
            },
            {
              hour: 379,
              value: 197,
            },
            {
              hour: 394,
              value: 197,
            },
            {
              hour: 409,
              value: 186,
            },
            {
              hour: 424,
              value: 187,
            },
            {
              hour: 439,
              value: 187,
            },
            {
              hour: 454,
              value: 185,
            },
            {
              hour: 468,
              value: 190,
            },
            {
              hour: 478,
              value: 186,
            },
            {
              hour: 483,
              value: 185,
            },
            {
              hour: 498,
              value: 170,
            },
            {
              hour: 514,
              value: 142,
            },
            {
              hour: 524,
              value: 132,
            },
            {
              hour: 529,
              value: 133,
            },
            {
              hour: 544,
              value: 149,
            },
            {
              hour: 559,
              value: 164,
            },
            {
              hour: 574,
              value: 166,
            },
            {
              hour: 589,
              value: 167,
            },
            {
              hour: 605,
              value: 166,
            },
            {
              hour: 614,
              value: 175,
            },
            {
              hour: 620,
              value: 173,
            },
            {
              hour: 635,
              value: 170,
            },
            {
              hour: 651,
              value: 144,
            },
            {
              hour: 664,
              value: 131,
            },
            {
              hour: 666,
              value: 131,
            },
            {
              hour: 681,
              value: 141,
            },
            {
              hour: 696,
              value: 156,
            },
            {
              hour: 711,
              value: 161,
            },
            {
              hour: 726,
              value: 155,
            },
            {
              hour: 740,
              value: 126,
            },
            {
              hour: 751,
              value: 112,
            },
            {
              hour: 755,
              value: 97,
            },
            {
              hour: 771,
              value: 83,
            },
            {
              hour: 781,
              value: 82,
            },
            {
              hour: 786,
              value: 76,
            },
            {
              hour: 801,
              value: 85,
            },
            {
              hour: 816,
              value: 113,
            },
            {
              hour: 831,
              value: 133,
            },
            {
              hour: 847,
              value: 153,
            },
            {
              hour: 852,
              value: 167,
            },
            {
              hour: 862,
              value: 148,
            },
            {
              hour: 877,
              value: 111,
            },
            {
              hour: 892,
              value: 88,
            },
            {
              hour: 907,
              value: 90,
            },
            {
              hour: 922,
              value: 108,
            },
            {
              hour: 937,
              value: 126,
            },
            {
              hour: 953,
              value: 138,
            },
            {
              hour: 964,
              value: 151,
            },
            {
              hour: 968,
              value: 138,
            },
            {
              hour: 983,
              value: 124,
            },
            {
              hour: 998,
              value: 115,
            },
            {
              hour: 1013,
              value: 111,
            },
            {
              hour: 1028,
              value: 91,
            },
            {
              hour: 1029,
              value: 97,
            },
            {
              hour: 1043,
              value: 95,
            },
            {
              hour: 1058,
              value: 138,
            },
            {
              hour: 1073,
              value: 184,
            },
            {
              hour: 1088,
              value: 213,
            },
            {
              hour: 1103,
              value: 235,
            },
            {
              hour: 1118,
              value: 244,
            },
            {
              hour: 1136,
              value: 271,
            },
            {
              hour: 1138,
              value: 278,
            },
            {
              hour: 1151,
              value: 285,
            },
            {
              hour: 1166,
              value: 279,
            },
            {
              hour: 1181,
              value: 261,
            },
            {
              hour: 1196,
              value: 240,
            },
            {
              hour: 1211,
              value: 215,
            },
            {
              hour: 1226,
              value: 196,
            },
            {
              hour: 1241,
              value: 187,
            },
            {
              hour: 1256,
              value: 176,
            },
            {
              hour: 1271,
              value: 172,
            },
            {
              hour: 1286,
              value: 173,
            },
            {
              hour: 1301,
              value: 166,
            },
            {
              hour: 1316,
              value: 154,
            },
            {
              hour: 1331,
              value: 141,
            },
            {
              hour: 1346,
              value: 129,
            },
            {
              hour: 1361,
              value: 141,
            },
            {
              hour: 1376,
              value: 179,
            },
            {
              hour: 1391,
              value: 202,
            },
            {
              hour: 1406,
              value: 206,
            },
            {
              hour: 1421,
              value: 208,
            },
            {
              hour: 1436,
              value: 207,
            },
          ],
          median: [
            {
              hour: 0,
              value: 186.5,
            },
            {
              hour: 30,
              value: 203.5,
            },
            {
              hour: 60,
              value: 232.5,
            },
            {
              hour: 90,
              value: 250,
            },
            {
              hour: 120,
              value: 240,
            },
            {
              hour: 150,
              value: 227.5,
            },
            {
              hour: 180,
              value: 218.5,
            },
            {
              hour: 210,
              value: 209,
            },
            {
              hour: 240,
              value: 202,
            },
            {
              hour: 270,
              value: 197,
            },
            {
              hour: 300,
              value: 212,
            },
            {
              hour: 330,
              value: 202.5,
            },
            {
              hour: 360,
              value: 200,
            },
            {
              hour: 390,
              value: 197,
            },
            {
              hour: 420,
              value: 186.5,
            },
            {
              hour: 450,
              value: 186,
            },
            {
              hour: 480,
              value: 186,
            },
            {
              hour: 510,
              value: 142,
            },
            {
              hour: 540,
              value: 141,
            },
            {
              hour: 570,
              value: 165,
            },
            {
              hour: 600,
              value: 167,
            },
            {
              hour: 630,
              value: 171.5,
            },
            {
              hour: 660,
              value: 131,
            },
            {
              hour: 690,
              value: 148.5,
            },
            {
              hour: 720,
              value: 158,
            },
            {
              hour: 750,
              value: 112,
            },
            {
              hour: 780,
              value: 82,
            },
            {
              hour: 810,
              value: 99,
            },
            {
              hour: 840,
              value: 153,
            },
            {
              hour: 870,
              value: 129.5,
            },
            {
              hour: 900,
              value: 89,
            },
            {
              hour: 930,
              value: 117,
            },
            {
              hour: 960,
              value: 138,
            },
            {
              hour: 990,
              value: 119.5,
            },
            {
              hour: 1020,
              value: 97,
            },
            {
              hour: 1050,
              value: 116.5,
            },
            {
              hour: 1080,
              value: 198.5,
            },
            {
              hour: 1110,
              value: 239.5,
            },
            {
              hour: 1140,
              value: 278,
            },
            {
              hour: 1170,
              value: 270,
            },
            {
              hour: 1200,
              value: 227.5,
            },
            {
              hour: 1230,
              value: 191.5,
            },
            {
              hour: 1260,
              value: 174,
            },
            {
              hour: 1290,
              value: 169.5,
            },
            {
              hour: 1320,
              value: 147.5,
            },
            {
              hour: 1350,
              value: 135,
            },
            {
              hour: 1380,
              value: 190.5,
            },
            {
              hour: 1410,
              value: 207,
            },
            {
              hour: 1440,
              value: 207,
            },
          ],
        },
      },
      {
        date: '2020/07/11',
        glycemia: {
          average: {
            '00:00-02:00': 160,
            '02:00-04:00': 59,
            '04:00-06:00': 45,
            '06:00-08:00': 120,
            '08:00-10:00': 139,
            '10:00-12:00': 77,
            '12:00-14:00': 114,
            '14:00-16:00': 131,
            '16:00-18:00': 118,
            '18:00-20:00': 258,
            '20:00-22:00': 258,
            '22:00-24:00': 286,
          },
          standardDeviation: {
            '00:00-02:00': 31,
            '02:00-04:00': 17,
            '04:00-06:00': 5,
            '06:00-08:00': 55,
            '08:00-10:00': 18,
            '10:00-12:00': 13,
            '12:00-14:00': 47,
            '14:00-16:00': 21,
            '16:00-18:00': 48,
            '18:00-20:00': 16,
            '20:00-22:00': 12,
            '22:00-24:00': 19,
          },
          variabilityCoefficient: {
            '00:00-02:00': 19,
            '02:00-04:00': 29,
            '04:00-06:00': 11,
            '06:00-08:00': 46,
            '08:00-10:00': 13,
            '10:00-12:00': 17,
            '12:00-14:00': 41,
            '14:00-16:00': 16,
            '16:00-18:00': 41,
            '18:00-20:00': 6,
            '20:00-22:00': 5,
            '22:00-24:00': 7,
          },
          onTarget: {
            '00:00-02:00': 67,
            '02:00-04:00': 25,
            '04:00-06:00': 0,
            '06:00-08:00': 44,
            '08:00-10:00': 100,
            '10:00-12:00': 63,
            '12:00-14:00': 70,
            '14:00-16:00': 100,
            '16:00-18:00': 75,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 75,
            '04:00-06:00': 100,
            '06:00-08:00': 33,
            '08:00-10:00': 0,
            '10:00-12:00': 38,
            '12:00-14:00': 30,
            '14:00-16:00': 0,
            '16:00-18:00': 13,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 33,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 22,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 13,
            '18:00-20:00': 100,
            '20:00-22:00': 100,
            '22:00-24:00': 100,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 54,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 54,
            '14:00-16:00': 0,
            '16:00-18:00': 53,
            '18:00-20:00': 0,
            '20:00-22:00': 69,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 13,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 15,
            '14:00-16:00': 0,
            '16:00-18:00': 12,
            '18:00-20:00': 0,
            '20:00-22:00': 55,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 9,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 13,
            '14:00-16:00': 0,
            '16:00-18:00': 8,
            '18:00-20:00': 0,
            '20:00-22:00': 21,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 352,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 387,
            '14:00-16:00': 0,
            '16:00-18:00': 336,
            '18:00-20:00': 0,
            '20:00-22:00': 690,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': '14.00',
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': '14.00',
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': '14.00',
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': '12.00',
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': '12.00',
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '12.00',
        },
        graphicData: {
          data: [
            {
              hour: 11,
              value: 203,
            },
            {
              hour: 26,
              value: 200,
            },
            {
              hour: 43,
              value: 183,
            },
            {
              hour: 52,
              value: 170,
            },
            {
              hour: 58,
              value: 161,
            },
            {
              hour: 73,
              value: 147,
            },
            {
              hour: 88,
              value: 140,
            },
            {
              hour: 103,
              value: 128,
            },
            {
              hour: 118,
              value: 107,
            },
            {
              hour: 133,
              value: 90,
            },
            {
              hour: 148,
              value: 78,
            },
            {
              hour: 163,
              value: 67,
            },
            {
              hour: 178,
              value: 58,
            },
            {
              hour: 193,
              value: 51,
            },
            {
              hour: 208,
              value: 46,
            },
            {
              hour: 223,
              value: 42,
            },
            {
              hour: 238,
              value: 41,
            },
            {
              hour: 253,
              value: 42,
            },
            {
              hour: 268,
              value: 43,
            },
            {
              hour: 283,
              value: 43,
            },
            {
              hour: 298,
              value: 42,
            },
            {
              hour: 313,
              value: 42,
            },
            {
              hour: 328,
              value: 45,
            },
            {
              hour: 331,
              value: 45,
            },
            {
              hour: 343,
              value: 49,
            },
            {
              hour: 360,
              value: 57,
            },
            {
              hour: 362,
              value: 62,
            },
            {
              hour: 375,
              value: 63,
            },
            {
              hour: 390,
              value: 58,
            },
            {
              hour: 405,
              value: 71,
            },
            {
              hour: 420,
              value: 115,
            },
            {
              hour: 435,
              value: 150,
            },
            {
              hour: 450,
              value: 175,
            },
            {
              hour: 465,
              value: 192,
            },
            {
              hour: 480,
              value: 192,
            },
            {
              hour: 495,
              value: 172,
            },
            {
              hour: 510,
              value: 150,
            },
            {
              hour: 525,
              value: 140,
            },
            {
              hour: 540,
              value: 142,
            },
            {
              hour: 555,
              value: 142,
            },
            {
              hour: 570,
              value: 134,
            },
            {
              hour: 585,
              value: 121,
            },
            {
              hour: 600,
              value: 107,
            },
            {
              hour: 615,
              value: 96,
            },
            {
              hour: 630,
              value: 86,
            },
            {
              hour: 646,
              value: 79,
            },
            {
              hour: 654,
              value: 93,
            },
            {
              hour: 661,
              value: 73,
            },
            {
              hour: 676,
              value: 68,
            },
            {
              hour: 691,
              value: 62,
            },
            {
              hour: 706,
              value: 59,
            },
            {
              hour: 722,
              value: 57,
            },
            {
              hour: 724,
              value: 60,
            },
            {
              hour: 737,
              value: 56,
            },
            {
              hour: 752,
              value: 74,
            },
            {
              hour: 767,
              value: 106,
            },
            {
              hour: 782,
              value: 132,
            },
            {
              hour: 797,
              value: 156,
            },
            {
              hour: 812,
              value: 167,
            },
            {
              hour: 828,
              value: 168,
            },
            {
              hour: 838,
              value: 168,
            },
            {
              hour: 843,
              value: 154,
            },
            {
              hour: 858,
              value: 151,
            },
            {
              hour: 873,
              value: 153,
            },
            {
              hour: 888,
              value: 147,
            },
            {
              hour: 903,
              value: 136,
            },
            {
              hour: 918,
              value: 122,
            },
            {
              hour: 933,
              value: 111,
            },
            {
              hour: 949,
              value: 103,
            },
            {
              hour: 957,
              value: 99,
            },
            {
              hour: 964,
              value: 98,
            },
            {
              hour: 979,
              value: 92,
            },
            {
              hour: 994,
              value: 77,
            },
            {
              hour: 1009,
              value: 68,
            },
            {
              hour: 1024,
              value: 84,
            },
            {
              hour: 1039,
              value: 137,
            },
            {
              hour: 1054,
              value: 180,
            },
            {
              hour: 1069,
              value: 207,
            },
            {
              hour: 1084,
              value: 224,
            },
            {
              hour: 1099,
              value: 247,
            },
            {
              hour: 1111,
              value: 255,
            },
            {
              hour: 1114,
              value: 266,
            },
            {
              hour: 1129,
              value: 278,
            },
            {
              hour: 1145,
              value: 279,
            },
            {
              hour: 1158,
              value: 266,
            },
            {
              hour: 1160,
              value: 265,
            },
            {
              hour: 1175,
              value: 254,
            },
            {
              hour: 1190,
              value: 245,
            },
            {
              hour: 1205,
              value: 243,
            },
            {
              hour: 1220,
              value: 253,
            },
            {
              hour: 1235,
              value: 263,
            },
            {
              hour: 1250,
              value: 278,
            },
            {
              hour: 1260,
              value: 267,
            },
            {
              hour: 1265,
              value: 275,
            },
            {
              hour: 1281,
              value: 252,
            },
            {
              hour: 1288,
              value: 246,
            },
            {
              hour: 1296,
              value: 252,
            },
            {
              hour: 1311,
              value: 250,
            },
            {
              hour: 1326,
              value: 259,
            },
            {
              hour: 1341,
              value: 287,
            },
            {
              hour: 1356,
              value: 305,
            },
            {
              hour: 1371,
              value: 310,
            },
            {
              hour: 1386,
              value: 308,
            },
            {
              hour: 1401,
              value: 297,
            },
            {
              hour: 1416,
              value: 281,
            },
            {
              hour: 1432,
              value: 261,
            },
            {
              hour: 1438,
              value: 270,
            },
          ],
          median: [
            {
              hour: 0,
              value: 261,
            },
            {
              hour: 30,
              value: 191.5,
            },
            {
              hour: 60,
              value: 161,
            },
            {
              hour: 90,
              value: 134,
            },
            {
              hour: 120,
              value: 98.5,
            },
            {
              hour: 150,
              value: 72.5,
            },
            {
              hour: 180,
              value: 54.5,
            },
            {
              hour: 210,
              value: 44,
            },
            {
              hour: 240,
              value: 41.5,
            },
            {
              hour: 270,
              value: 43,
            },
            {
              hour: 300,
              value: 42,
            },
            {
              hour: 330,
              value: 45,
            },
            {
              hour: 360,
              value: 62,
            },
            {
              hour: 390,
              value: 64.5,
            },
            {
              hour: 420,
              value: 132.5,
            },
            {
              hour: 450,
              value: 183.5,
            },
            {
              hour: 480,
              value: 182,
            },
            {
              hour: 510,
              value: 145,
            },
            {
              hour: 540,
              value: 142,
            },
            {
              hour: 570,
              value: 127.5,
            },
            {
              hour: 600,
              value: 101.5,
            },
            {
              hour: 630,
              value: 86,
            },
            {
              hour: 660,
              value: 79,
            },
            {
              hour: 690,
              value: 65,
            },
            {
              hour: 720,
              value: 59,
            },
            {
              hour: 750,
              value: 65,
            },
            {
              hour: 780,
              value: 119,
            },
            {
              hour: 810,
              value: 161.5,
            },
            {
              hour: 840,
              value: 168,
            },
            {
              hour: 870,
              value: 152,
            },
            {
              hour: 900,
              value: 141.5,
            },
            {
              hour: 930,
              value: 116.5,
            },
            {
              hour: 960,
              value: 99,
            },
            {
              hour: 990,
              value: 84.5,
            },
            {
              hour: 1020,
              value: 76,
            },
            {
              hour: 1050,
              value: 158.5,
            },
            {
              hour: 1080,
              value: 215.5,
            },
            {
              hour: 1110,
              value: 255,
            },
            {
              hour: 1140,
              value: 278.5,
            },
            {
              hour: 1170,
              value: 265,
            },
            {
              hour: 1200,
              value: 244,
            },
            {
              hour: 1230,
              value: 258,
            },
            {
              hour: 1260,
              value: 275,
            },
            {
              hour: 1290,
              value: 252,
            },
            {
              hour: 1320,
              value: 254.5,
            },
            {
              hour: 1350,
              value: 296,
            },
            {
              hour: 1380,
              value: 309,
            },
            {
              hour: 1410,
              value: 289,
            },
            {
              hour: 1440,
              value: 265.5,
            },
          ],
        },
      },
      {
        date: '2020/07/12',
        glycemia: {
          average: {
            '00:00-02:00': 250,
            '02:00-04:00': 200,
            '04:00-06:00': 215,
            '06:00-08:00': 224,
            '08:00-10:00': 232,
            '10:00-12:00': 215,
            '12:00-14:00': 183,
            '14:00-16:00': 246,
            '16:00-18:00': 261,
            '18:00-20:00': 320,
            '20:00-22:00': 281,
            '22:00-24:00': 215,
          },
          standardDeviation: {
            '00:00-02:00': 2,
            '02:00-04:00': 5,
            '04:00-06:00': 7,
            '06:00-08:00': 2,
            '08:00-10:00': 4,
            '10:00-12:00': 16,
            '12:00-14:00': 17,
            '14:00-16:00': 10,
            '16:00-18:00': 15,
            '18:00-20:00': 10,
            '20:00-22:00': 31,
            '22:00-24:00': 16,
          },
          variabilityCoefficient: {
            '00:00-02:00': 1,
            '02:00-04:00': 3,
            '04:00-06:00': 3,
            '06:00-08:00': 1,
            '08:00-10:00': 2,
            '10:00-12:00': 7,
            '12:00-14:00': 9,
            '14:00-16:00': 4,
            '16:00-18:00': 6,
            '18:00-20:00': 3,
            '20:00-22:00': 11,
            '22:00-24:00': 7,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 63,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 100,
            '02:00-04:00': 100,
            '04:00-06:00': 100,
            '06:00-08:00': 100,
            '08:00-10:00': 100,
            '10:00-12:00': 100,
            '12:00-14:00': 38,
            '14:00-16:00': 100,
            '16:00-18:00': 100,
            '18:00-20:00': 100,
            '20:00-22:00': 100,
            '22:00-24:00': 100,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 35,
            '12:00-14:00': 122,
            '14:00-16:00': 0,
            '16:00-18:00': 34,
            '18:00-20:00': 0,
            '20:00-22:00': 73,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 12,
            '12:00-14:00': 30,
            '14:00-16:00': 0,
            '16:00-18:00': 12,
            '18:00-20:00': 0,
            '20:00-22:00': 20,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 6,
            '12:00-14:00': 21,
            '14:00-16:00': 0,
            '16:00-18:00': 6,
            '18:00-20:00': 0,
            '20:00-22:00': 6,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 244,
            '12:00-14:00': 805,
            '14:00-16:00': 0,
            '16:00-18:00': 232,
            '18:00-20:00': 0,
            '20:00-22:00': 434,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': '14.00',
          '12:00-14:00': '14.00',
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '14.00',
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': '12.00',
          '12:00-14:00': '12.00',
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '12.00',
        },
        graphicData: {
          data: [
            {
              hour: 7,
              value: 248,
            },
            {
              hour: 34,
              value: 252,
            },
            {
              hour: 131,
              value: 208,
            },
            {
              hour: 146,
              value: 206,
            },
            {
              hour: 161,
              value: 201,
            },
            {
              hour: 176,
              value: 191,
            },
            {
              hour: 191,
              value: 194,
            },
            {
              hour: 206,
              value: 200,
            },
            {
              hour: 221,
              value: 200,
            },
            {
              hour: 236,
              value: 202,
            },
            {
              hour: 251,
              value: 203,
            },
            {
              hour: 266,
              value: 205,
            },
            {
              hour: 281,
              value: 210,
            },
            {
              hour: 296,
              value: 216,
            },
            {
              hour: 311,
              value: 221,
            },
            {
              hour: 326,
              value: 221,
            },
            {
              hour: 341,
              value: 219,
            },
            {
              hour: 356,
              value: 221,
            },
            {
              hour: 371,
              value: 221,
            },
            {
              hour: 386,
              value: 225,
            },
            {
              hour: 401,
              value: 227,
            },
            {
              hour: 416,
              value: 222,
            },
            {
              hour: 431,
              value: 224,
            },
            {
              hour: 446,
              value: 227,
            },
            {
              hour: 461,
              value: 223,
            },
            {
              hour: 476,
              value: 224,
            },
            {
              hour: 491,
              value: 229,
            },
            {
              hour: 506,
              value: 229,
            },
            {
              hour: 521,
              value: 230,
            },
            {
              hour: 536,
              value: 237,
            },
            {
              hour: 551,
              value: 239,
            },
            {
              hour: 566,
              value: 231,
            },
            {
              hour: 581,
              value: 228,
            },
            {
              hour: 596,
              value: 234,
            },
            {
              hour: 609,
              value: 238,
            },
            {
              hour: 611,
              value: 232,
            },
            {
              hour: 626,
              value: 229,
            },
            {
              hour: 637,
              value: 232,
            },
            {
              hour: 641,
              value: 209,
            },
            {
              hour: 656,
              value: 188,
            },
            {
              hour: 671,
              value: 190,
            },
            {
              hour: 686,
              value: 206,
            },
            {
              hour: 701,
              value: 217,
            },
            {
              hour: 717,
              value: 209,
            },
            {
              hour: 718,
              value: 212,
            },
            {
              hour: 732,
              value: 194,
            },
            {
              hour: 747,
              value: 179,
            },
            {
              hour: 762,
              value: 178,
            },
            {
              hour: 777,
              value: 182,
            },
            {
              hour: 793,
              value: 173,
            },
            {
              hour: 808,
              value: 161,
            },
            {
              hour: 823,
              value: 177,
            },
            {
              hour: 838,
              value: 222,
            },
            {
              hour: 853,
              value: 256,
            },
            {
              hour: 868,
              value: 260,
            },
            {
              hour: 883,
              value: 247,
            },
            {
              hour: 898,
              value: 237,
            },
            {
              hour: 913,
              value: 232,
            },
            {
              hour: 928,
              value: 234,
            },
            {
              hour: 943,
              value: 245,
            },
            {
              hour: 958,
              value: 253,
            },
            {
              hour: 974,
              value: 251,
            },
            {
              hour: 978,
              value: 253,
            },
            {
              hour: 989,
              value: 255,
            },
            {
              hour: 1004,
              value: 263,
            },
            {
              hour: 1014,
              value: 267,
            },
            {
              hour: 1019,
              value: 252,
            },
            {
              hour: 1034,
              value: 244,
            },
            {
              hour: 1049,
              value: 252,
            },
            {
              hour: 1064,
              value: 276,
            },
            {
              hour: 1079,
              value: 299,
            },
            {
              hour: 1095,
              value: 307,
            },
            {
              hour: 1110,
              value: 311,
            },
            {
              hour: 1125,
              value: 318,
            },
            {
              hour: 1126,
              value: 308,
            },
            {
              hour: 1141,
              value: 321,
            },
            {
              hour: 1156,
              value: 327,
            },
            {
              hour: 1171,
              value: 331,
            },
            {
              hour: 1186,
              value: 337,
            },
            {
              hour: 1201,
              value: 332,
            },
            {
              hour: 1216,
              value: 321,
            },
            {
              hour: 1231,
              value: 304,
            },
            {
              hour: 1246,
              value: 288,
            },
            {
              hour: 1261,
              value: 278,
            },
            {
              hour: 1276,
              value: 268,
            },
            {
              hour: 1291,
              value: 258,
            },
            {
              hour: 1306,
              value: 243,
            },
            {
              hour: 1319,
              value: 241,
            },
            {
              hour: 1321,
              value: 234,
            },
            {
              hour: 1336,
              value: 228,
            },
            {
              hour: 1351,
              value: 211,
            },
            {
              hour: 1366,
              value: 188,
            },
            {
              hour: 1381,
              value: 188,
            },
            {
              hour: 1399,
              value: 221,
            },
            {
              hour: 1410,
              value: 218,
            },
            {
              hour: 1414,
              value: 231,
            },
            {
              hour: 1429,
              value: 212,
            },
          ],
          median: [
            {
              hour: 0,
              value: 230,
            },
            {
              hour: 30,
              value: 252,
            },
            {
              hour: 120,
              value: 208,
            },
            {
              hour: 150,
              value: 203.5,
            },
            {
              hour: 180,
              value: 192.5,
            },
            {
              hour: 210,
              value: 200,
            },
            {
              hour: 240,
              value: 202.5,
            },
            {
              hour: 270,
              value: 207.5,
            },
            {
              hour: 300,
              value: 218.5,
            },
            {
              hour: 330,
              value: 220,
            },
            {
              hour: 360,
              value: 221,
            },
            {
              hour: 390,
              value: 226,
            },
            {
              hour: 420,
              value: 223,
            },
            {
              hour: 450,
              value: 225,
            },
            {
              hour: 480,
              value: 226.5,
            },
            {
              hour: 510,
              value: 229.5,
            },
            {
              hour: 540,
              value: 238,
            },
            {
              hour: 570,
              value: 229.5,
            },
            {
              hour: 600,
              value: 234,
            },
            {
              hour: 630,
              value: 229,
            },
            {
              hour: 660,
              value: 189,
            },
            {
              hour: 690,
              value: 211.5,
            },
            {
              hour: 720,
              value: 209,
            },
            {
              hour: 750,
              value: 178.5,
            },
            {
              hour: 780,
              value: 177.5,
            },
            {
              hour: 810,
              value: 169,
            },
            {
              hour: 840,
              value: 239,
            },
            {
              hour: 870,
              value: 253.5,
            },
            {
              hour: 900,
              value: 234.5,
            },
            {
              hour: 930,
              value: 239.5,
            },
            {
              hour: 960,
              value: 252,
            },
            {
              hour: 990,
              value: 255,
            },
            {
              hour: 1020,
              value: 252,
            },
            {
              hour: 1050,
              value: 264,
            },
            {
              hour: 1080,
              value: 303,
            },
            {
              hour: 1110,
              value: 314.5,
            },
            {
              hour: 1140,
              value: 314.5,
            },
            {
              hour: 1170,
              value: 329,
            },
            {
              hour: 1200,
              value: 334.5,
            },
            {
              hour: 1230,
              value: 312.5,
            },
            {
              hour: 1260,
              value: 283,
            },
            {
              hour: 1290,
              value: 263,
            },
            {
              hour: 1320,
              value: 241,
            },
            {
              hour: 1350,
              value: 219.5,
            },
            {
              hour: 1380,
              value: 188,
            },
            {
              hour: 1410,
              value: 221,
            },
            {
              hour: 1440,
              value: 212,
            },
          ],
        },
      },
      {
        date: '2020/07/13',
        glycemia: {
          average: {
            '00:00-02:00': 172,
            '02:00-04:00': 137,
            '04:00-06:00': 164,
            '06:00-08:00': 173,
            '08:00-10:00': 177,
            '10:00-12:00': 114,
            '12:00-14:00': 130,
            '14:00-16:00': 90,
            '16:00-18:00': 50,
            '18:00-20:00': 94,
            '20:00-22:00': 141,
            '22:00-24:00': 184,
          },
          standardDeviation: {
            '00:00-02:00': 13,
            '02:00-04:00': 9,
            '04:00-06:00': 18,
            '06:00-08:00': 22,
            '08:00-10:00': 20,
            '10:00-12:00': 29,
            '12:00-14:00': 16,
            '14:00-16:00': 13,
            '16:00-18:00': 13,
            '18:00-20:00': 37,
            '20:00-22:00': 13,
            '22:00-24:00': 7,
          },
          variabilityCoefficient: {
            '00:00-02:00': 8,
            '02:00-04:00': 7,
            '04:00-06:00': 11,
            '06:00-08:00': 13,
            '08:00-10:00': 11,
            '10:00-12:00': 25,
            '12:00-14:00': 12,
            '14:00-16:00': 14,
            '16:00-18:00': 26,
            '18:00-20:00': 39,
            '20:00-22:00': 9,
            '22:00-24:00': 4,
          },
          onTarget: {
            '00:00-02:00': 63,
            '02:00-04:00': 100,
            '04:00-06:00': 88,
            '06:00-08:00': 44,
            '08:00-10:00': 56,
            '10:00-12:00': 100,
            '12:00-14:00': 100,
            '14:00-16:00': 100,
            '16:00-18:00': 10,
            '18:00-20:00': 60,
            '20:00-22:00': 100,
            '22:00-24:00': 27,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 90,
            '18:00-20:00': 40,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 38,
            '02:00-04:00': 0,
            '04:00-06:00': 13,
            '06:00-08:00': 56,
            '08:00-10:00': 44,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 73,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 46,
            '08:00-10:00': 21,
            '10:00-12:00': 63,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 82,
            '20:00-22:00': 72,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 16,
            '08:00-10:00': 2,
            '10:00-12:00': 42,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 22,
            '20:00-22:00': 36,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 9,
            '08:00-10:00': 0,
            '10:00-12:00': 10,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 11,
            '20:00-22:00': 39,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 328,
            '08:00-10:00': 83,
            '10:00-12:00': 507,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 521,
            '20:00-22:00': 783,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '14.00',
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': '14.00',
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': '14.00',
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '12.00',
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': '12.00',
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '12.00',
        },
        graphicData: {
          data: [
            {
              hour: 4,
              value: 188,
            },
            {
              hour: 19,
              value: 184,
            },
            {
              hour: 34,
              value: 186,
            },
            {
              hour: 49,
              value: 178,
            },
            {
              hour: 64,
              value: 168,
            },
            {
              hour: 79,
              value: 164,
            },
            {
              hour: 94,
              value: 160,
            },
            {
              hour: 109,
              value: 151,
            },
            {
              hour: 124,
              value: 145,
            },
            {
              hour: 139,
              value: 141,
            },
            {
              hour: 154,
              value: 140,
            },
            {
              hour: 169,
              value: 146,
            },
            {
              hour: 184,
              value: 144,
            },
            {
              hour: 199,
              value: 130,
            },
            {
              hour: 214,
              value: 121,
            },
            {
              hour: 229,
              value: 125,
            },
            {
              hour: 244,
              value: 135,
            },
            {
              hour: 259,
              value: 140,
            },
            {
              hour: 274,
              value: 149,
            },
            {
              hour: 289,
              value: 174,
            },
            {
              hour: 304,
              value: 179,
            },
            {
              hour: 319,
              value: 172,
            },
            {
              hour: 334,
              value: 177,
            },
            {
              hour: 349,
              value: 183,
            },
            {
              hour: 366,
              value: 187,
            },
            {
              hour: 368,
              value: 190,
            },
            {
              hour: 381,
              value: 182,
            },
            {
              hour: 396,
              value: 166,
            },
            {
              hour: 411,
              value: 138,
            },
            {
              hour: 426,
              value: 136,
            },
            {
              hour: 441,
              value: 167,
            },
            {
              hour: 456,
              value: 192,
            },
            {
              hour: 471,
              value: 199,
            },
            {
              hour: 486,
              value: 201,
            },
            {
              hour: 501,
              value: 201,
            },
            {
              hour: 516,
              value: 195,
            },
            {
              hour: 531,
              value: 186,
            },
            {
              hour: 547,
              value: 175,
            },
            {
              hour: 551,
              value: 172,
            },
            {
              hour: 562,
              value: 167,
            },
            {
              hour: 577,
              value: 153,
            },
            {
              hour: 592,
              value: 142,
            },
            {
              hour: 607,
              value: 150,
            },
            {
              hour: 622,
              value: 154,
            },
            {
              hour: 637,
              value: 140,
            },
            {
              hour: 652,
              value: 126,
            },
            {
              hour: 668,
              value: 110,
            },
            {
              hour: 679,
              value: 100,
            },
            {
              hour: 683,
              value: 91,
            },
            {
              hour: 698,
              value: 75,
            },
            {
              hour: 713,
              value: 76,
            },
            {
              hour: 728,
              value: 94,
            },
            {
              hour: 743,
              value: 113,
            },
            {
              hour: 759,
              value: 129,
            },
            {
              hour: 761,
              value: 129,
            },
            {
              hour: 774,
              value: 143,
            },
            {
              hour: 789,
              value: 149,
            },
            {
              hour: 804,
              value: 144,
            },
            {
              hour: 819,
              value: 136,
            },
            {
              hour: 834,
              value: 129,
            },
            {
              hour: 849,
              value: 115,
            },
            {
              hour: 864,
              value: 98,
            },
            {
              hour: 880,
              value: 83,
            },
            {
              hour: 892,
              value: 75,
            },
            {
              hour: 895,
              value: 73,
            },
            {
              hour: 910,
              value: 79,
            },
            {
              hour: 925,
              value: 95,
            },
            {
              hour: 940,
              value: 100,
            },
            {
              hour: 955,
              value: 92,
            },
            {
              hour: 970,
              value: 79,
            },
            {
              hour: 985,
              value: 68,
            },
            {
              hour: 1000,
              value: 59,
            },
            {
              hour: 1015,
              value: 44,
            },
            {
              hour: 1027,
              value: 40,
            },
            {
              hour: 1031,
              value: 40,
            },
            {
              hour: 1043,
              value: 40,
            },
            {
              hour: 1046,
              value: 40,
            },
            {
              hour: 1061,
              value: 43,
            },
            {
              hour: 1076,
              value: 48,
            },
            {
              hour: 1090,
              value: 44,
            },
            {
              hour: 1094,
              value: 44,
            },
            {
              hour: 1105,
              value: 45,
            },
            {
              hour: 1120,
              value: 68,
            },
            {
              hour: 1136,
              value: 111,
            },
            {
              hour: 1144,
              value: 126,
            },
            {
              hour: 1151,
              value: 119,
            },
            {
              hour: 1166,
              value: 116,
            },
            {
              hour: 1181,
              value: 125,
            },
            {
              hour: 1196,
              value: 141,
            },
            {
              hour: 1211,
              value: 142,
            },
            {
              hour: 1227,
              value: 138,
            },
            {
              hour: 1234,
              value: 132,
            },
            {
              hour: 1242,
              value: 130,
            },
            {
              hour: 1257,
              value: 126,
            },
            {
              hour: 1272,
              value: 133,
            },
            {
              hour: 1287,
              value: 142,
            },
            {
              hour: 1302,
              value: 154,
            },
            {
              hour: 1317,
              value: 172,
            },
            {
              hour: 1332,
              value: 175,
            },
            {
              hour: 1338,
              value: 178,
            },
            {
              hour: 1347,
              value: 173,
            },
            {
              hour: 1362,
              value: 183,
            },
            {
              hour: 1378,
              value: 192,
            },
            {
              hour: 1389,
              value: 197,
            },
            {
              hour: 1393,
              value: 185,
            },
            {
              hour: 1408,
              value: 185,
            },
            {
              hour: 1423,
              value: 185,
            },
            {
              hour: 1432,
              value: 185,
            },
            {
              hour: 1438,
              value: 187,
            },
          ],
          median: [
            {
              hour: 0,
              value: 187,
            },
            {
              hour: 30,
              value: 185,
            },
            {
              hour: 60,
              value: 173,
            },
            {
              hour: 90,
              value: 162,
            },
            {
              hour: 120,
              value: 148,
            },
            {
              hour: 150,
              value: 140.5,
            },
            {
              hour: 180,
              value: 145,
            },
            {
              hour: 210,
              value: 125.5,
            },
            {
              hour: 240,
              value: 130,
            },
            {
              hour: 270,
              value: 144.5,
            },
            {
              hour: 300,
              value: 176.5,
            },
            {
              hour: 330,
              value: 174.5,
            },
            {
              hour: 360,
              value: 187,
            },
            {
              hour: 390,
              value: 174,
            },
            {
              hour: 420,
              value: 137,
            },
            {
              hour: 450,
              value: 179.5,
            },
            {
              hour: 480,
              value: 200,
            },
            {
              hour: 510,
              value: 198,
            },
            {
              hour: 540,
              value: 175,
            },
            {
              hour: 570,
              value: 160,
            },
            {
              hour: 600,
              value: 146,
            },
            {
              hour: 630,
              value: 147,
            },
            {
              hour: 660,
              value: 118,
            },
            {
              hour: 690,
              value: 91,
            },
            {
              hour: 720,
              value: 85,
            },
            {
              hour: 750,
              value: 129,
            },
            {
              hour: 780,
              value: 146,
            },
            {
              hour: 810,
              value: 140,
            },
            {
              hour: 840,
              value: 122,
            },
            {
              hour: 870,
              value: 90.5,
            },
            {
              hour: 900,
              value: 75,
            },
            {
              hour: 930,
              value: 97.5,
            },
            {
              hour: 960,
              value: 85.5,
            },
            {
              hour: 990,
              value: 63.5,
            },
            {
              hour: 1020,
              value: 40,
            },
            {
              hour: 1050,
              value: 40,
            },
            {
              hour: 1080,
              value: 44,
            },
            {
              hour: 1110,
              value: 56.5,
            },
            {
              hour: 1140,
              value: 119,
            },
            {
              hour: 1170,
              value: 120.5,
            },
            {
              hour: 1200,
              value: 141.5,
            },
            {
              hour: 1230,
              value: 132,
            },
            {
              hour: 1260,
              value: 129.5,
            },
            {
              hour: 1290,
              value: 148,
            },
            {
              hour: 1320,
              value: 173.5,
            },
            {
              hour: 1350,
              value: 178,
            },
            {
              hour: 1380,
              value: 192,
            },
            {
              hour: 1410,
              value: 185,
            },
            {
              hour: 1440,
              value: 186,
            },
          ],
        },
      },
      {
        date: '2020/07/14',
        glycemia: {
          average: {
            '00:00-02:00': 178,
            '02:00-04:00': 172,
            '04:00-06:00': 195,
            '06:00-08:00': 158,
            '08:00-10:00': 225,
            '10:00-12:00': 120,
            '12:00-14:00': 119,
            '14:00-16:00': 112,
            '16:00-18:00': 68,
            '18:00-20:00': 134,
            '20:00-22:00': 123,
            '22:00-24:00': 154,
          },
          standardDeviation: {
            '00:00-02:00': 8,
            '02:00-04:00': 6,
            '04:00-06:00': 8,
            '06:00-08:00': 31,
            '08:00-10:00': 23,
            '10:00-12:00': 35,
            '12:00-14:00': 24,
            '14:00-16:00': 29,
            '16:00-18:00': 19,
            '18:00-20:00': 14,
            '20:00-22:00': 5,
            '22:00-24:00': 24,
          },
          variabilityCoefficient: {
            '00:00-02:00': 4,
            '02:00-04:00': 3,
            '04:00-06:00': 4,
            '06:00-08:00': 20,
            '08:00-10:00': 10,
            '10:00-12:00': 29,
            '12:00-14:00': 20,
            '14:00-16:00': 26,
            '16:00-18:00': 28,
            '18:00-20:00': 10,
            '20:00-22:00': 4,
            '22:00-24:00': 16,
          },
          onTarget: {
            '00:00-02:00': 56,
            '02:00-04:00': 88,
            '04:00-06:00': 0,
            '06:00-08:00': 67,
            '08:00-10:00': 0,
            '10:00-12:00': 100,
            '12:00-14:00': 100,
            '14:00-16:00': 100,
            '16:00-18:00': 40,
            '18:00-20:00': 100,
            '20:00-22:00': 100,
            '22:00-24:00': 78,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 60,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 44,
            '02:00-04:00': 13,
            '04:00-06:00': 100,
            '06:00-08:00': 33,
            '08:00-10:00': 100,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 22,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 53,
            '08:00-10:00': 21,
            '10:00-12:00': 45,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 53,
            '18:00-20:00': 0,
            '20:00-22:00': 71,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 12,
            '08:00-10:00': 2,
            '10:00-12:00': 48,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 18,
            '18:00-20:00': 0,
            '20:00-22:00': 41,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 8,
            '08:00-10:00': 0,
            '10:00-12:00': 40,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 9,
            '18:00-20:00': 0,
            '20:00-22:00': 4,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 336,
            '08:00-10:00': 83,
            '10:00-12:00': 735,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 367,
            '18:00-20:00': 0,
            '20:00-22:00': 479,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': '14.00',
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': '14.00',
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': '14.00',
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': '12.00',
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': '12.00',
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '12.00',
        },
        graphicData: {
          data: [
            {
              hour: 13,
              value: 194,
            },
            {
              hour: 28,
              value: 186,
            },
            {
              hour: 43,
              value: 181,
            },
            {
              hour: 58,
              value: 183,
            },
            {
              hour: 73,
              value: 176,
            },
            {
              hour: 90,
              value: 170,
            },
            {
              hour: 100,
              value: 167,
            },
            {
              hour: 105,
              value: 172,
            },
            {
              hour: 120,
              value: 170,
            },
            {
              hour: 135,
              value: 169,
            },
            {
              hour: 150,
              value: 164,
            },
            {
              hour: 165,
              value: 163,
            },
            {
              hour: 180,
              value: 171,
            },
            {
              hour: 195,
              value: 175,
            },
            {
              hour: 210,
              value: 173,
            },
            {
              hour: 225,
              value: 176,
            },
            {
              hour: 240,
              value: 182,
            },
            {
              hour: 255,
              value: 184,
            },
            {
              hour: 270,
              value: 189,
            },
            {
              hour: 285,
              value: 190,
            },
            {
              hour: 300,
              value: 197,
            },
            {
              hour: 315,
              value: 193,
            },
            {
              hour: 330,
              value: 202,
            },
            {
              hour: 345,
              value: 210,
            },
            {
              hour: 362,
              value: 198,
            },
            {
              hour: 363,
              value: 207,
            },
            {
              hour: 377,
              value: 173,
            },
            {
              hour: 392,
              value: 146,
            },
            {
              hour: 407,
              value: 126,
            },
            {
              hour: 422,
              value: 118,
            },
            {
              hour: 437,
              value: 126,
            },
            {
              hour: 452,
              value: 149,
            },
            {
              hour: 467,
              value: 182,
            },
            {
              hour: 482,
              value: 218,
            },
            {
              hour: 497,
              value: 247,
            },
            {
              hour: 512,
              value: 258,
            },
            {
              hour: 527,
              value: 253,
            },
            {
              hour: 543,
              value: 227,
            },
            {
              hour: 553,
              value: 227,
            },
            {
              hour: 558,
              value: 200,
            },
            {
              hour: 573,
              value: 195,
            },
            {
              hour: 588,
              value: 196,
            },
            {
              hour: 603,
              value: 180,
            },
            {
              hour: 618,
              value: 166,
            },
            {
              hour: 633,
              value: 152,
            },
            {
              hour: 648,
              value: 131,
            },
            {
              hour: 662,
              value: 119,
            },
            {
              hour: 663,
              value: 115,
            },
            {
              hour: 678,
              value: 93,
            },
            {
              hour: 680,
              value: 91,
            },
            {
              hour: 693,
              value: 78,
            },
            {
              hour: 708,
              value: 77,
            },
            {
              hour: 723,
              value: 84,
            },
            {
              hour: 738,
              value: 91,
            },
            {
              hour: 753,
              value: 100,
            },
            {
              hour: 768,
              value: 108,
            },
            {
              hour: 783,
              value: 116,
            },
            {
              hour: 799,
              value: 132,
            },
            {
              hour: 811,
              value: 144,
            },
            {
              hour: 814,
              value: 146,
            },
            {
              hour: 829,
              value: 153,
            },
            {
              hour: 845,
              value: 148,
            },
            {
              hour: 848,
              value: 163,
            },
            {
              hour: 860,
              value: 132,
            },
            {
              hour: 875,
              value: 116,
            },
            {
              hour: 890,
              value: 107,
            },
            {
              hour: 905,
              value: 96,
            },
            {
              hour: 920,
              value: 84,
            },
            {
              hour: 935,
              value: 83,
            },
            {
              hour: 950,
              value: 79,
            },
            {
              hour: 965,
              value: 66,
            },
            {
              hour: 980,
              value: 60,
            },
            {
              hour: 995,
              value: 53,
            },
            {
              hour: 998,
              value: 52,
            },
            {
              hour: 1010,
              value: 45,
            },
            {
              hour: 1025,
              value: 49,
            },
            {
              hour: 1042,
              value: 75,
            },
            {
              hour: 1043,
              value: 81,
            },
            {
              hour: 1057,
              value: 97,
            },
            {
              hour: 1072,
              value: 104,
            },
            {
              hour: 1087,
              value: 113,
            },
            {
              hour: 1102,
              value: 127,
            },
            {
              hour: 1117,
              value: 147,
            },
            {
              hour: 1132,
              value: 159,
            },
            {
              hour: 1147,
              value: 150,
            },
            {
              hour: 1162,
              value: 137,
            },
            {
              hour: 1177,
              value: 132,
            },
            {
              hour: 1192,
              value: 122,
            },
            {
              hour: 1197,
              value: 121,
            },
            {
              hour: 1207,
              value: 117,
            },
            {
              hour: 1222,
              value: 116,
            },
            {
              hour: 1226,
              value: 116,
            },
            {
              hour: 1237,
              value: 124,
            },
            {
              hour: 1252,
              value: 133,
            },
            {
              hour: 1267,
              value: 130,
            },
            {
              hour: 1283,
              value: 126,
            },
            {
              hour: 1286,
              value: 122,
            },
            {
              hour: 1298,
              value: 122,
            },
            {
              hour: 1313,
              value: 121,
            },
            {
              hour: 1328,
              value: 137,
            },
            {
              hour: 1343,
              value: 168,
            },
            {
              hour: 1358,
              value: 183,
            },
            {
              hour: 1376,
              value: 177,
            },
            {
              hour: 1378,
              value: 187,
            },
            {
              hour: 1391,
              value: 152,
            },
            {
              hour: 1406,
              value: 141,
            },
            {
              hour: 1421,
              value: 128,
            },
            {
              hour: 1436,
              value: 116,
            },
          ],
          median: [
            {
              hour: 0,
              value: 155,
            },
            {
              hour: 30,
              value: 183.5,
            },
            {
              hour: 60,
              value: 179.5,
            },
            {
              hour: 90,
              value: 170,
            },
            {
              hour: 120,
              value: 169.5,
            },
            {
              hour: 150,
              value: 163.5,
            },
            {
              hour: 180,
              value: 173,
            },
            {
              hour: 210,
              value: 174.5,
            },
            {
              hour: 240,
              value: 183,
            },
            {
              hour: 270,
              value: 189.5,
            },
            {
              hour: 300,
              value: 195,
            },
            {
              hour: 330,
              value: 206,
            },
            {
              hour: 360,
              value: 202.5,
            },
            {
              hour: 390,
              value: 159.5,
            },
            {
              hour: 420,
              value: 122,
            },
            {
              hour: 450,
              value: 137.5,
            },
            {
              hour: 480,
              value: 200,
            },
            {
              hour: 510,
              value: 252.5,
            },
            {
              hour: 540,
              value: 227,
            },
            {
              hour: 570,
              value: 197.5,
            },
            {
              hour: 600,
              value: 188,
            },
            {
              hour: 630,
              value: 159,
            },
            {
              hour: 660,
              value: 119,
            },
            {
              hour: 690,
              value: 91,
            },
            {
              hour: 720,
              value: 80.5,
            },
            {
              hour: 750,
              value: 95.5,
            },
            {
              hour: 780,
              value: 112,
            },
            {
              hour: 810,
              value: 144,
            },
            {
              hour: 840,
              value: 153,
            },
            {
              hour: 870,
              value: 124,
            },
            {
              hour: 900,
              value: 101.5,
            },
            {
              hour: 930,
              value: 83.5,
            },
            {
              hour: 960,
              value: 72.5,
            },
            {
              hour: 990,
              value: 53,
            },
            {
              hour: 1020,
              value: 47,
            },
            {
              hour: 1050,
              value: 81,
            },
            {
              hour: 1080,
              value: 108.5,
            },
            {
              hour: 1110,
              value: 137,
            },
            {
              hour: 1140,
              value: 154.5,
            },
            {
              hour: 1170,
              value: 134.5,
            },
            {
              hour: 1200,
              value: 121,
            },
            {
              hour: 1230,
              value: 116,
            },
            {
              hour: 1260,
              value: 131.5,
            },
            {
              hour: 1290,
              value: 122,
            },
            {
              hour: 1320,
              value: 129,
            },
            {
              hour: 1350,
              value: 175.5,
            },
            {
              hour: 1380,
              value: 177,
            },
            {
              hour: 1410,
              value: 134.5,
            },
            {
              hour: 1440,
              value: 116,
            },
          ],
        },
      },
      {
        date: '2020/07/15',
        glycemia: {
          average: {
            '00:00-02:00': 88,
            '02:00-04:00': 56,
            '04:00-06:00': 61,
            '06:00-08:00': 95,
            '08:00-10:00': 98,
            '10:00-12:00': 68,
            '12:00-14:00': 76,
            '14:00-16:00': 62,
            '16:00-18:00': 88,
            '18:00-20:00': 138,
            '20:00-22:00': 221,
            '22:00-24:00': 270,
          },
          standardDeviation: {
            '00:00-02:00': 13,
            '02:00-04:00': 8,
            '04:00-06:00': 3,
            '06:00-08:00': 37,
            '08:00-10:00': 34,
            '10:00-12:00': 15,
            '12:00-14:00': 19,
            '14:00-16:00': 7,
            '16:00-18:00': 13,
            '18:00-20:00': 37,
            '20:00-22:00': 38,
            '22:00-24:00': 16,
          },
          variabilityCoefficient: {
            '00:00-02:00': 15,
            '02:00-04:00': 14,
            '04:00-06:00': 5,
            '06:00-08:00': 39,
            '08:00-10:00': 35,
            '10:00-12:00': 22,
            '12:00-14:00': 25,
            '14:00-16:00': 11,
            '16:00-18:00': 15,
            '18:00-20:00': 27,
            '20:00-22:00': 17,
            '22:00-24:00': 6,
          },
          onTarget: {
            '00:00-02:00': 100,
            '02:00-04:00': 13,
            '04:00-06:00': 0,
            '06:00-08:00': 60,
            '08:00-10:00': 82,
            '10:00-12:00': 44,
            '12:00-14:00': 70,
            '14:00-16:00': 8,
            '16:00-18:00': 100,
            '18:00-20:00': 90,
            '20:00-22:00': 22,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 88,
            '04:00-06:00': 100,
            '06:00-08:00': 40,
            '08:00-10:00': 18,
            '10:00-12:00': 56,
            '12:00-14:00': 30,
            '14:00-16:00': 92,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 10,
            '20:00-22:00': 78,
            '22:00-24:00': 100,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 70,
            '08:00-10:00': 27,
            '10:00-12:00': 69,
            '12:00-14:00': 10,
            '14:00-16:00': 53,
            '16:00-18:00': 0,
            '18:00-20:00': 52,
            '20:00-22:00': 0,
            '22:00-24:00': 66,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 13,
            '08:00-10:00': 15,
            '10:00-12:00': 27,
            '12:00-14:00': 0,
            '14:00-16:00': 12,
            '16:00-18:00': 0,
            '18:00-20:00': 17,
            '20:00-22:00': 0,
            '22:00-24:00': 25,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 8,
            '08:00-10:00': 14,
            '10:00-12:00': 20,
            '12:00-14:00': 0,
            '14:00-16:00': 24,
            '16:00-18:00': 0,
            '18:00-20:00': 7,
            '20:00-22:00': 0,
            '22:00-24:00': 3,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 396,
            '08:00-10:00': 289,
            '10:00-12:00': 565,
            '12:00-14:00': 41,
            '14:00-16:00': 466,
            '16:00-18:00': 0,
            '18:00-20:00': 341,
            '20:00-22:00': 0,
            '22:00-24:00': 389,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '14.00',
          '08:00-10:00': 0,
          '10:00-12:00': '14.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '14.00',
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '12.00',
          '08:00-10:00': 0,
          '10:00-12:00': '12.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '12.00',
        },
        graphicData: {
          data: [
            {
              hour: 11,
              value: 108,
            },
            {
              hour: 26,
              value: 101,
            },
            {
              hour: 41,
              value: 97,
            },
            {
              hour: 56,
              value: 92,
            },
            {
              hour: 71,
              value: 84,
            },
            {
              hour: 86,
              value: 77,
            },
            {
              hour: 101,
              value: 72,
            },
            {
              hour: 116,
              value: 71,
            },
            {
              hour: 131,
              value: 71,
            },
            {
              hour: 146,
              value: 64,
            },
            {
              hour: 161,
              value: 59,
            },
            {
              hour: 176,
              value: 55,
            },
            {
              hour: 191,
              value: 50,
            },
            {
              hour: 206,
              value: 49,
            },
            {
              hour: 221,
              value: 49,
            },
            {
              hour: 236,
              value: 51,
            },
            {
              hour: 251,
              value: 54,
            },
            {
              hour: 266,
              value: 59,
            },
            {
              hour: 281,
              value: 62,
            },
            {
              hour: 296,
              value: 61,
            },
            {
              hour: 311,
              value: 60,
            },
            {
              hour: 326,
              value: 61,
            },
            {
              hour: 341,
              value: 64,
            },
            {
              hour: 356,
              value: 66,
            },
            {
              hour: 362,
              value: 67,
            },
            {
              hour: 371,
              value: 63,
            },
            {
              hour: 388,
              value: 67,
            },
            {
              hour: 397,
              value: 65,
            },
            {
              hour: 403,
              value: 75,
            },
            {
              hour: 418,
              value: 81,
            },
            {
              hour: 433,
              value: 92,
            },
            {
              hour: 448,
              value: 119,
            },
            {
              hour: 463,
              value: 151,
            },
            {
              hour: 478,
              value: 171,
            },
            {
              hour: 493,
              value: 171,
            },
            {
              hour: 508,
              value: 152,
            },
            {
              hour: 523,
              value: 117,
            },
            {
              hour: 529,
              value: 107,
            },
            {
              hour: 538,
              value: 91,
            },
            {
              hour: 553,
              value: 76,
            },
            {
              hour: 568,
              value: 72,
            },
            {
              hour: 570,
              value: 68,
            },
            {
              hour: 583,
              value: 75,
            },
            {
              hour: 599,
              value: 75,
            },
            {
              hour: 600,
              value: 69,
            },
            {
              hour: 614,
              value: 81,
            },
            {
              hour: 629,
              value: 89,
            },
            {
              hour: 644,
              value: 85,
            },
            {
              hour: 659,
              value: 73,
            },
            {
              hour: 674,
              value: 63,
            },
            {
              hour: 676,
              value: 67,
            },
            {
              hour: 689,
              value: 58,
            },
            {
              hour: 704,
              value: 52,
            },
            {
              hour: 719,
              value: 43,
            },
            {
              hour: 729,
              value: 40,
            },
            {
              hour: 734,
              value: 47,
            },
            {
              hour: 749,
              value: 65,
            },
            {
              hour: 764,
              value: 90,
            },
            {
              hour: 780,
              value: 95,
            },
            {
              hour: 783,
              value: 101,
            },
            {
              hour: 795,
              value: 84,
            },
            {
              hour: 810,
              value: 77,
            },
            {
              hour: 826,
              value: 77,
            },
            {
              hour: 838,
              value: 80,
            },
            {
              hour: 841,
              value: 68,
            },
            {
              hour: 856,
              value: 59,
            },
            {
              hour: 871,
              value: 51,
            },
            {
              hour: 881,
              value: 52,
            },
            {
              hour: 886,
              value: 51,
            },
            {
              hour: 895,
              value: 55,
            },
            {
              hour: 901,
              value: 65,
            },
            {
              hour: 916,
              value: 68,
            },
            {
              hour: 929,
              value: 66,
            },
            {
              hour: 932,
              value: 66,
            },
            {
              hour: 940,
              value: 72,
            },
            {
              hour: 947,
              value: 68,
            },
            {
              hour: 962,
              value: 80,
            },
            {
              hour: 977,
              value: 97,
            },
            {
              hour: 992,
              value: 105,
            },
            {
              hour: 1007,
              value: 103,
            },
            {
              hour: 1022,
              value: 96,
            },
            {
              hour: 1037,
              value: 80,
            },
            {
              hour: 1052,
              value: 70,
            },
            {
              hour: 1067,
              value: 73,
            },
            {
              hour: 1082,
              value: 88,
            },
            {
              hour: 1083,
              value: 91,
            },
            {
              hour: 1097,
              value: 89,
            },
            {
              hour: 1112,
              value: 111,
            },
            {
              hour: 1127,
              value: 145,
            },
            {
              hour: 1142,
              value: 162,
            },
            {
              hour: 1158,
              value: 159,
            },
            {
              hour: 1168,
              value: 171,
            },
            {
              hour: 1173,
              value: 171,
            },
            {
              hour: 1188,
              value: 189,
            },
            {
              hour: 1203,
              value: 191,
            },
            {
              hour: 1219,
              value: 178,
            },
            {
              hour: 1222,
              value: 180,
            },
            {
              hour: 1234,
              value: 182,
            },
            {
              hour: 1249,
              value: 214,
            },
            {
              hour: 1264,
              value: 245,
            },
            {
              hour: 1279,
              value: 259,
            },
            {
              hour: 1294,
              value: 271,
            },
            {
              hour: 1309,
              value: 269,
            },
            {
              hour: 1324,
              value: 265,
            },
            {
              hour: 1339,
              value: 269,
            },
            {
              hour: 1354,
              value: 267,
            },
            {
              hour: 1367,
              value: 260,
            },
            {
              hour: 1369,
              value: 261,
            },
            {
              hour: 1384,
              value: 264,
            },
            {
              hour: 1399,
              value: 256,
            },
            {
              hour: 1414,
              value: 257,
            },
            {
              hour: 1432,
              value: 292,
            },
            {
              hour: 1437,
              value: 309,
            },
          ],
          median: [
            {
              hour: 0,
              value: 292,
            },
            {
              hour: 30,
              value: 99,
            },
            {
              hour: 60,
              value: 88,
            },
            {
              hour: 90,
              value: 74.5,
            },
            {
              hour: 120,
              value: 71,
            },
            {
              hour: 150,
              value: 61.5,
            },
            {
              hour: 180,
              value: 52.5,
            },
            {
              hour: 210,
              value: 49,
            },
            {
              hour: 240,
              value: 52.5,
            },
            {
              hour: 270,
              value: 60.5,
            },
            {
              hour: 300,
              value: 60.5,
            },
            {
              hour: 330,
              value: 62.5,
            },
            {
              hour: 360,
              value: 66,
            },
            {
              hour: 390,
              value: 67,
            },
            {
              hour: 420,
              value: 86.5,
            },
            {
              hour: 450,
              value: 135,
            },
            {
              hour: 480,
              value: 171,
            },
            {
              hour: 510,
              value: 134.5,
            },
            {
              hour: 540,
              value: 91,
            },
            {
              hour: 570,
              value: 72,
            },
            {
              hour: 600,
              value: 75,
            },
            {
              hour: 630,
              value: 87,
            },
            {
              hour: 660,
              value: 68,
            },
            {
              hour: 690,
              value: 58,
            },
            {
              hour: 720,
              value: 43,
            },
            {
              hour: 750,
              value: 77.5,
            },
            {
              hour: 780,
              value: 95,
            },
            {
              hour: 810,
              value: 77,
            },
            {
              hour: 840,
              value: 77,
            },
            {
              hour: 870,
              value: 52,
            },
            {
              hour: 900,
              value: 55,
            },
            {
              hour: 930,
              value: 67,
            },
            {
              hour: 960,
              value: 74,
            },
            {
              hour: 990,
              value: 101,
            },
            {
              hour: 1020,
              value: 99.5,
            },
            {
              hour: 1050,
              value: 75,
            },
            {
              hour: 1080,
              value: 88,
            },
            {
              hour: 1110,
              value: 100,
            },
            {
              hour: 1140,
              value: 153.5,
            },
            {
              hour: 1170,
              value: 171,
            },
            {
              hour: 1200,
              value: 190,
            },
            {
              hour: 1230,
              value: 180,
            },
            {
              hour: 1260,
              value: 229.5,
            },
            {
              hour: 1290,
              value: 265,
            },
            {
              hour: 1320,
              value: 267,
            },
            {
              hour: 1350,
              value: 268,
            },
            {
              hour: 1380,
              value: 261,
            },
            {
              hour: 1410,
              value: 256.5,
            },
            {
              hour: 1440,
              value: 300.5,
            },
          ],
        },
      },
      {
        date: '2020/07/16',
        glycemia: {
          average: {
            '00:00-02:00': 291,
            '02:00-04:00': 241,
            '04:00-06:00': 226,
            '06:00-08:00': 172,
            '08:00-10:00': 188,
            '10:00-12:00': 81,
            '12:00-14:00': 72,
            '14:00-16:00': 64,
            '16:00-18:00': 73,
            '18:00-20:00': 217,
            '20:00-22:00': 253,
            '22:00-24:00': 143,
          },
          standardDeviation: {
            '00:00-02:00': 18,
            '02:00-04:00': 15,
            '04:00-06:00': 7,
            '06:00-08:00': 39,
            '08:00-10:00': 38,
            '10:00-12:00': 23,
            '12:00-14:00': 13,
            '14:00-16:00': 6,
            '16:00-18:00': 24,
            '18:00-20:00': 58,
            '20:00-22:00': 39,
            '22:00-24:00': 16,
          },
          variabilityCoefficient: {
            '00:00-02:00': 6,
            '02:00-04:00': 6,
            '04:00-06:00': 3,
            '06:00-08:00': 23,
            '08:00-10:00': 20,
            '10:00-12:00': 28,
            '12:00-14:00': 18,
            '14:00-16:00': 9,
            '16:00-18:00': 33,
            '18:00-20:00': 27,
            '20:00-22:00': 15,
            '22:00-24:00': 11,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 56,
            '08:00-10:00': 56,
            '10:00-12:00': 67,
            '12:00-14:00': 45,
            '14:00-16:00': 30,
            '16:00-18:00': 36,
            '18:00-20:00': 33,
            '20:00-22:00': 0,
            '22:00-24:00': 100,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 33,
            '12:00-14:00': 55,
            '14:00-16:00': 70,
            '16:00-18:00': 64,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 100,
            '02:00-04:00': 100,
            '04:00-06:00': 100,
            '06:00-08:00': 44,
            '08:00-10:00': 44,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 67,
            '20:00-22:00': 100,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 58,
            '08:00-10:00': 18,
            '10:00-12:00': 0,
            '12:00-14:00': 49,
            '14:00-16:00': 55,
            '16:00-18:00': 46,
            '18:00-20:00': 69,
            '20:00-22:00': 0,
            '22:00-24:00': 96,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 18,
            '08:00-10:00': 1,
            '10:00-12:00': 0,
            '12:00-14:00': 24,
            '14:00-16:00': 10,
            '16:00-18:00': 16,
            '18:00-20:00': 30,
            '20:00-22:00': 0,
            '22:00-24:00': 44,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 13,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 9,
            '14:00-16:00': 25,
            '16:00-18:00': 8,
            '18:00-20:00': 21,
            '20:00-22:00': 0,
            '22:00-24:00': 19,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 425,
            '08:00-10:00': 69,
            '10:00-12:00': 0,
            '12:00-14:00': 371,
            '14:00-16:00': 487,
            '16:00-18:00': 321,
            '18:00-20:00': 588,
            '20:00-22:00': 0,
            '22:00-24:00': 733,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '14.00',
          '08:00-10:00': 0,
          '10:00-12:00': '14.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': '14.00',
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '12.00',
          '08:00-10:00': 0,
          '10:00-12:00': '12.00',
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [
            {
              hour: 7,
              value: 308,
            },
            {
              hour: 22,
              value: 315,
            },
            {
              hour: 37,
              value: 310,
            },
            {
              hour: 52,
              value: 294,
            },
            {
              hour: 67,
              value: 285,
            },
            {
              hour: 82,
              value: 278,
            },
            {
              hour: 97,
              value: 270,
            },
            {
              hour: 112,
              value: 266,
            },
            {
              hour: 127,
              value: 269,
            },
            {
              hour: 142,
              value: 260,
            },
            {
              hour: 157,
              value: 244,
            },
            {
              hour: 172,
              value: 236,
            },
            {
              hour: 187,
              value: 227,
            },
            {
              hour: 202,
              value: 224,
            },
            {
              hour: 217,
              value: 233,
            },
            {
              hour: 232,
              value: 237,
            },
            {
              hour: 247,
              value: 234,
            },
            {
              hour: 262,
              value: 239,
            },
            {
              hour: 277,
              value: 230,
            },
            {
              hour: 292,
              value: 224,
            },
            {
              hour: 307,
              value: 221,
            },
            {
              hour: 322,
              value: 217,
            },
            {
              hour: 337,
              value: 217,
            },
            {
              hour: 352,
              value: 223,
            },
            {
              hour: 361,
              value: 220,
            },
            {
              hour: 367,
              value: 212,
            },
            {
              hour: 382,
              value: 196,
            },
            {
              hour: 397,
              value: 170,
            },
            {
              hour: 414,
              value: 126,
            },
            {
              hour: 429,
              value: 107,
            },
            {
              hour: 444,
              value: 135,
            },
            {
              hour: 459,
              value: 174,
            },
            {
              hour: 474,
              value: 212,
            },
            {
              hour: 489,
              value: 237,
            },
            {
              hour: 504,
              value: 240,
            },
            {
              hour: 519,
              value: 227,
            },
            {
              hour: 534,
              value: 206,
            },
            {
              hour: 550,
              value: 175,
            },
            {
              hour: 562,
              value: 156,
            },
            {
              hour: 565,
              value: 153,
            },
            {
              hour: 580,
              value: 149,
            },
            {
              hour: 595,
              value: 145,
            },
            {
              hour: 610,
              value: 130,
            },
            {
              hour: 625,
              value: 108,
            },
            {
              hour: 640,
              value: 91,
            },
            {
              hour: 655,
              value: 78,
            },
            {
              hour: 664,
              value: 77,
            },
            {
              hour: 670,
              value: 70,
            },
            {
              hour: 685,
              value: 62,
            },
            {
              hour: 700,
              value: 57,
            },
            {
              hour: 715,
              value: 57,
            },
            {
              hour: 726,
              value: 59,
            },
            {
              hour: 727,
              value: 59,
            },
            {
              hour: 730,
              value: 64,
            },
            {
              hour: 745,
              value: 78,
            },
            {
              hour: 760,
              value: 93,
            },
            {
              hour: 775,
              value: 94,
            },
            {
              hour: 790,
              value: 86,
            },
            {
              hour: 806,
              value: 73,
            },
            {
              hour: 815,
              value: 67,
            },
            {
              hour: 821,
              value: 63,
            },
            {
              hour: 836,
              value: 58,
            },
            {
              hour: 852,
              value: 65,
            },
            {
              hour: 854,
              value: 71,
            },
            {
              hour: 864,
              value: 70,
            },
            {
              hour: 867,
              value: 60,
            },
            {
              hour: 882,
              value: 62,
            },
            {
              hour: 897,
              value: 73,
            },
            {
              hour: 912,
              value: 68,
            },
            {
              hour: 927,
              value: 60,
            },
            {
              hour: 942,
              value: 56,
            },
            {
              hour: 957,
              value: 56,
            },
            {
              hour: 972,
              value: 56,
            },
            {
              hour: 987,
              value: 55,
            },
            {
              hour: 993,
              value: 56,
            },
            {
              hour: 1003,
              value: 52,
            },
            {
              hour: 1007,
              value: 52,
            },
            {
              hour: 1018,
              value: 52,
            },
            {
              hour: 1033,
              value: 67,
            },
            {
              hour: 1048,
              value: 91,
            },
            {
              hour: 1063,
              value: 107,
            },
            {
              hour: 1078,
              value: 106,
            },
            {
              hour: 1079,
              value: 110,
            },
            {
              hour: 1093,
              value: 115,
            },
            {
              hour: 1108,
              value: 138,
            },
            {
              hour: 1123,
              value: 177,
            },
            {
              hour: 1138,
              value: 211,
            },
            {
              hour: 1153,
              value: 231,
            },
            {
              hour: 1168,
              value: 255,
            },
            {
              hour: 1179,
              value: 264,
            },
            {
              hour: 1183,
              value: 273,
            },
            {
              hour: 1200,
              value: 286,
            },
            {
              hour: 1206,
              value: 300,
            },
            {
              hour: 1215,
              value: 288,
            },
            {
              hour: 1230,
              value: 291,
            },
            {
              hour: 1245,
              value: 281,
            },
            {
              hour: 1260,
              value: 261,
            },
            {
              hour: 1275,
              value: 241,
            },
            {
              hour: 1290,
              value: 222,
            },
            {
              hour: 1305,
              value: 202,
            },
            {
              hour: 1320,
              value: 187,
            },
            {
              hour: 1335,
              value: 173,
            },
            {
              hour: 1350,
              value: 159,
            },
            {
              hour: 1365,
              value: 143,
            },
            {
              hour: 1380,
              value: 129,
            },
            {
              hour: 1395,
              value: 125,
            },
            {
              hour: 1404,
              value: 127,
            },
            {
              hour: 1410,
              value: 133,
            },
            {
              hour: 1425,
              value: 151,
            },
          ],
          median: [
            {
              hour: 0,
              value: 308,
            },
            {
              hour: 30,
              value: 312.5,
            },
            {
              hour: 60,
              value: 289.5,
            },
            {
              hour: 90,
              value: 274,
            },
            {
              hour: 120,
              value: 267.5,
            },
            {
              hour: 150,
              value: 252,
            },
            {
              hour: 180,
              value: 231.5,
            },
            {
              hour: 210,
              value: 228.5,
            },
            {
              hour: 240,
              value: 235.5,
            },
            {
              hour: 270,
              value: 234.5,
            },
            {
              hour: 300,
              value: 222.5,
            },
            {
              hour: 330,
              value: 217,
            },
            {
              hour: 360,
              value: 220,
            },
            {
              hour: 390,
              value: 183,
            },
            {
              hour: 420,
              value: 116.5,
            },
            {
              hour: 450,
              value: 154.5,
            },
            {
              hour: 480,
              value: 224.5,
            },
            {
              hour: 510,
              value: 233.5,
            },
            {
              hour: 540,
              value: 190.5,
            },
            {
              hour: 570,
              value: 153,
            },
            {
              hour: 600,
              value: 137.5,
            },
            {
              hour: 630,
              value: 99.5,
            },
            {
              hour: 660,
              value: 77,
            },
            {
              hour: 690,
              value: 59.5,
            },
            {
              hour: 720,
              value: 59,
            },
            {
              hour: 750,
              value: 85.5,
            },
            {
              hour: 780,
              value: 90,
            },
            {
              hour: 810,
              value: 67,
            },
            {
              hour: 840,
              value: 65,
            },
            {
              hour: 870,
              value: 62,
            },
            {
              hour: 900,
              value: 70.5,
            },
            {
              hour: 930,
              value: 58,
            },
            {
              hour: 960,
              value: 56,
            },
            {
              hour: 990,
              value: 55,
            },
            {
              hour: 1020,
              value: 52,
            },
            {
              hour: 1050,
              value: 99,
            },
            {
              hour: 1080,
              value: 110,
            },
            {
              hour: 1110,
              value: 157.5,
            },
            {
              hour: 1140,
              value: 221,
            },
            {
              hour: 1170,
              value: 264,
            },
            {
              hour: 1200,
              value: 288,
            },
            {
              hour: 1230,
              value: 286,
            },
            {
              hour: 1260,
              value: 251,
            },
            {
              hour: 1290,
              value: 212,
            },
            {
              hour: 1320,
              value: 180,
            },
            {
              hour: 1350,
              value: 151,
            },
            {
              hour: 1380,
              value: 127,
            },
            {
              hour: 1410,
              value: 133,
            },
          ],
        },
      },
      {
        date: '2020/07/17',
        glycemia: {
          average: {
            '00:00-02:00': 211,
            '02:00-04:00': 229,
            '04:00-06:00': 211,
            '06:00-08:00': 184,
            '08:00-10:00': 150,
            '10:00-12:00': 109,
            '12:00-14:00': 52,
            '14:00-16:00': 62,
            '16:00-18:00': 91,
            '18:00-20:00': 195,
            '20:00-22:00': 284,
            '22:00-24:00': 292,
          },
          standardDeviation: {
            '00:00-02:00': 28,
            '02:00-04:00': 16,
            '04:00-06:00': 8,
            '06:00-08:00': 22,
            '08:00-10:00': 35,
            '10:00-12:00': 13,
            '12:00-14:00': 8,
            '14:00-16:00': 22,
            '16:00-18:00': 7,
            '18:00-20:00': 55,
            '20:00-22:00': 10,
            '22:00-24:00': 32,
          },
          variabilityCoefficient: {
            '00:00-02:00': 13,
            '02:00-04:00': 7,
            '04:00-06:00': 4,
            '06:00-08:00': 12,
            '08:00-10:00': 23,
            '10:00-12:00': 12,
            '12:00-14:00': 15,
            '14:00-16:00': 35,
            '16:00-18:00': 8,
            '18:00-20:00': 28,
            '20:00-22:00': 4,
            '22:00-24:00': 11,
          },
          onTarget: {
            '00:00-02:00': 25,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 33,
            '08:00-10:00': 70,
            '10:00-12:00': 100,
            '12:00-14:00': 0,
            '14:00-16:00': 33,
            '16:00-18:00': 100,
            '18:00-20:00': 30,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 100,
            '14:00-16:00': 67,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 75,
            '02:00-04:00': 100,
            '04:00-06:00': 100,
            '06:00-08:00': 67,
            '08:00-10:00': 30,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 70,
            '20:00-22:00': 100,
            '22:00-24:00': 100,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 44,
            '08:00-10:00': 18,
            '10:00-12:00': 0,
            '12:00-14:00': 49,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 193,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 15,
            '08:00-10:00': 1,
            '10:00-12:00': 0,
            '12:00-14:00': 28,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 73,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 7,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 19,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 50,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 302,
            '08:00-10:00': 69,
            '10:00-12:00': 0,
            '12:00-14:00': 479,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 1505,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '14.00',
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': '14.00',
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': '14.00',
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': '12.00',
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '12.00',
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': '12.00',
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [
            {
              hour: 3,
              value: 176,
            },
            {
              hour: 18,
              value: 174,
            },
            {
              hour: 33,
              value: 185,
            },
            {
              hour: 48,
              value: 205,
            },
            {
              hour: 63,
              value: 219,
            },
            {
              hour: 78,
              value: 230,
            },
            {
              hour: 93,
              value: 242,
            },
            {
              hour: 108,
              value: 253,
            },
            {
              hour: 123,
              value: 258,
            },
            {
              hour: 138,
              value: 245,
            },
            {
              hour: 153,
              value: 235,
            },
            {
              hour: 168,
              value: 234,
            },
            {
              hour: 183,
              value: 224,
            },
            {
              hour: 198,
              value: 218,
            },
            {
              hour: 213,
              value: 213,
            },
            {
              hour: 228,
              value: 207,
            },
            {
              hour: 243,
              value: 205,
            },
            {
              hour: 258,
              value: 206,
            },
            {
              hour: 273,
              value: 203,
            },
            {
              hour: 288,
              value: 203,
            },
            {
              hour: 303,
              value: 211,
            },
            {
              hour: 318,
              value: 211,
            },
            {
              hour: 333,
              value: 209,
            },
            {
              hour: 348,
              value: 219,
            },
            {
              hour: 360,
              value: 230,
            },
            {
              hour: 363,
              value: 217,
            },
            {
              hour: 379,
              value: 205,
            },
            {
              hour: 392,
              value: 192,
            },
            {
              hour: 394,
              value: 187,
            },
            {
              hour: 409,
              value: 159,
            },
            {
              hour: 424,
              value: 147,
            },
            {
              hour: 439,
              value: 164,
            },
            {
              hour: 454,
              value: 185,
            },
            {
              hour: 469,
              value: 197,
            },
            {
              hour: 481,
              value: 201,
            },
            {
              hour: 484,
              value: 196,
            },
            {
              hour: 499,
              value: 190,
            },
            {
              hour: 514,
              value: 173,
            },
            {
              hour: 529,
              value: 148,
            },
            {
              hour: 544,
              value: 135,
            },
            {
              hour: 559,
              value: 118,
            },
            {
              hour: 561,
              value: 113,
            },
            {
              hour: 576,
              value: 107,
            },
            {
              hour: 591,
              value: 119,
            },
            {
              hour: 606,
              value: 119,
            },
            {
              hour: 621,
              value: 114,
            },
            {
              hour: 636,
              value: 120,
            },
            {
              hour: 651,
              value: 122,
            },
            {
              hour: 666,
              value: 118,
            },
            {
              hour: 681,
              value: 108,
            },
            {
              hour: 693,
              value: 104,
            },
            {
              hour: 696,
              value: 97,
            },
            {
              hour: 711,
              value: 79,
            },
            {
              hour: 726,
              value: 66,
            },
            {
              hour: 741,
              value: 57,
            },
            {
              hour: 756,
              value: 46,
            },
            {
              hour: 771,
              value: 40,
            },
            {
              hour: 786,
              value: 43,
            },
            {
              hour: 789,
              value: 45,
            },
            {
              hour: 801,
              value: 49,
            },
            {
              hour: 816,
              value: 58,
            },
            {
              hour: 831,
              value: 60,
            },
            {
              hour: 846,
              value: 53,
            },
            {
              hour: 856,
              value: 49,
            },
            {
              hour: 862,
              value: 42,
            },
            {
              hour: 870,
              value: 40,
            },
            {
              hour: 874,
              value: 40,
            },
            {
              hour: 877,
              value: 40,
            },
            {
              hour: 893,
              value: 49,
            },
            {
              hour: 899,
              value: 66,
            },
            {
              hour: 908,
              value: 81,
            },
            {
              hour: 923,
              value: 102,
            },
            {
              hour: 938,
              value: 95,
            },
            {
              hour: 953,
              value: 82,
            },
            {
              hour: 968,
              value: 83,
            },
            {
              hour: 983,
              value: 88,
            },
            {
              hour: 998,
              value: 85,
            },
            {
              hour: 1013,
              value: 82,
            },
            {
              hour: 1028,
              value: 91,
            },
            {
              hour: 1043,
              value: 101,
            },
            {
              hour: 1058,
              value: 100,
            },
            {
              hour: 1072,
              value: 99,
            },
            {
              hour: 1073,
              value: 92,
            },
            {
              hour: 1088,
              value: 88,
            },
            {
              hour: 1103,
              value: 111,
            },
            {
              hour: 1118,
              value: 155,
            },
            {
              hour: 1134,
              value: 200,
            },
            {
              hour: 1135,
              value: 212,
            },
            {
              hour: 1149,
              value: 217,
            },
            {
              hour: 1164,
              value: 224,
            },
            {
              hour: 1179,
              value: 242,
            },
            {
              hour: 1192,
              value: 256,
            },
            {
              hour: 1194,
              value: 248,
            },
            {
              hour: 1209,
              value: 265,
            },
            {
              hour: 1224,
              value: 284,
            },
            {
              hour: 1239,
              value: 297,
            },
            {
              hour: 1254,
              value: 295,
            },
            {
              hour: 1269,
              value: 289,
            },
            {
              hour: 1286,
              value: 287,
            },
            {
              hour: 1303,
              value: 279,
            },
            {
              hour: 1318,
              value: 274,
            },
            {
              hour: 1333,
              value: 256,
            },
            {
              hour: 1348,
              value: 247,
            },
            {
              hour: 1363,
              value: 258,
            },
            {
              hour: 1378,
              value: 292,
            },
            {
              hour: 1393,
              value: 315,
            },
            {
              hour: 1408,
              value: 319,
            },
            {
              hour: 1423,
              value: 323,
            },
            {
              hour: 1438,
              value: 329,
            },
          ],
          median: [
            {
              hour: 0,
              value: 252.5,
            },
            {
              hour: 30,
              value: 179.5,
            },
            {
              hour: 60,
              value: 212,
            },
            {
              hour: 90,
              value: 236,
            },
            {
              hour: 120,
              value: 255.5,
            },
            {
              hour: 150,
              value: 240,
            },
            {
              hour: 180,
              value: 229,
            },
            {
              hour: 210,
              value: 215.5,
            },
            {
              hour: 240,
              value: 206,
            },
            {
              hour: 270,
              value: 204.5,
            },
            {
              hour: 300,
              value: 207,
            },
            {
              hour: 330,
              value: 210,
            },
            {
              hour: 360,
              value: 219,
            },
            {
              hour: 390,
              value: 192,
            },
            {
              hour: 420,
              value: 153,
            },
            {
              hour: 450,
              value: 174.5,
            },
            {
              hour: 480,
              value: 197,
            },
            {
              hour: 510,
              value: 181.5,
            },
            {
              hour: 540,
              value: 141.5,
            },
            {
              hour: 570,
              value: 113,
            },
            {
              hour: 600,
              value: 119,
            },
            {
              hour: 630,
              value: 117,
            },
            {
              hour: 660,
              value: 120,
            },
            {
              hour: 690,
              value: 104,
            },
            {
              hour: 720,
              value: 72.5,
            },
            {
              hour: 750,
              value: 51.5,
            },
            {
              hour: 780,
              value: 43,
            },
            {
              hour: 810,
              value: 53.5,
            },
            {
              hour: 840,
              value: 56.5,
            },
            {
              hour: 870,
              value: 40,
            },
            {
              hour: 900,
              value: 66,
            },
            {
              hour: 930,
              value: 98.5,
            },
            {
              hour: 960,
              value: 82.5,
            },
            {
              hour: 990,
              value: 86.5,
            },
            {
              hour: 1020,
              value: 86.5,
            },
            {
              hour: 1050,
              value: 100.5,
            },
            {
              hour: 1080,
              value: 92,
            },
            {
              hour: 1110,
              value: 133,
            },
            {
              hour: 1140,
              value: 212,
            },
            {
              hour: 1170,
              value: 233,
            },
            {
              hour: 1200,
              value: 256,
            },
            {
              hour: 1230,
              value: 290.5,
            },
            {
              hour: 1260,
              value: 292,
            },
            {
              hour: 1290,
              value: 283,
            },
            {
              hour: 1320,
              value: 265,
            },
            {
              hour: 1350,
              value: 252.5,
            },
            {
              hour: 1380,
              value: 303.5,
            },
            {
              hour: 1410,
              value: 321,
            },
            {
              hour: 1440,
              value: 329,
            },
          ],
        },
      },
      {
        date: '2020/07/18',
        glycemia: {
          average: {
            '00:00-02:00': 298,
            '02:00-04:00': 278,
            '04:00-06:00': 292,
            '06:00-08:00': 198,
            '08:00-10:00': 131,
            '10:00-12:00': 55,
            '12:00-14:00': 167,
            '14:00-16:00': 138,
            '16:00-18:00': 219,
            '18:00-20:00': 186,
            '20:00-22:00': 64,
            '22:00-24:00': 96,
          },
          standardDeviation: {
            '00:00-02:00': 10,
            '02:00-04:00': 9,
            '04:00-06:00': 16,
            '06:00-08:00': 43,
            '08:00-10:00': 57,
            '10:00-12:00': 12,
            '12:00-14:00': 29,
            '14:00-16:00': 11,
            '16:00-18:00': 19,
            '18:00-20:00': 25,
            '20:00-22:00': 23,
            '22:00-24:00': 11,
          },
          variabilityCoefficient: {
            '00:00-02:00': 3,
            '02:00-04:00': 3,
            '04:00-06:00': 5,
            '06:00-08:00': 22,
            '08:00-10:00': 44,
            '10:00-12:00': 22,
            '12:00-14:00': 17,
            '14:00-16:00': 8,
            '16:00-18:00': 9,
            '18:00-20:00': 13,
            '20:00-22:00': 36,
            '22:00-24:00': 11,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 44,
            '08:00-10:00': 63,
            '10:00-12:00': 22,
            '12:00-14:00': 67,
            '14:00-16:00': 100,
            '16:00-18:00': 11,
            '18:00-20:00': 33,
            '20:00-22:00': 25,
            '22:00-24:00': 100,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 13,
            '10:00-12:00': 78,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 75,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 100,
            '02:00-04:00': 100,
            '04:00-06:00': 100,
            '06:00-08:00': 56,
            '08:00-10:00': 25,
            '10:00-12:00': 0,
            '12:00-14:00': 33,
            '14:00-16:00': 0,
            '16:00-18:00': 89,
            '18:00-20:00': 67,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 50,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 11,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 7,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 307,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '14.00',
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '12.00',
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [
            {
              hour: 13,
              value: 320,
            },
            {
              hour: 28,
              value: 307,
            },
            {
              hour: 43,
              value: 293,
            },
            {
              hour: 58,
              value: 289,
            },
            {
              hour: 73,
              value: 293,
            },
            {
              hour: 88,
              value: 295,
            },
            {
              hour: 103,
              value: 293,
            },
            {
              hour: 118,
              value: 292,
            },
            {
              hour: 133,
              value: 294,
            },
            {
              hour: 148,
              value: 290,
            },
            {
              hour: 163,
              value: 275,
            },
            {
              hour: 178,
              value: 269,
            },
            {
              hour: 193,
              value: 267,
            },
            {
              hour: 208,
              value: 271,
            },
            {
              hour: 223,
              value: 277,
            },
            {
              hour: 238,
              value: 278,
            },
            {
              hour: 253,
              value: 277,
            },
            {
              hour: 268,
              value: 277,
            },
            {
              hour: 283,
              value: 272,
            },
            {
              hour: 298,
              value: 281,
            },
            {
              hour: 313,
              value: 285,
            },
            {
              hour: 328,
              value: 307,
            },
            {
              hour: 331,
              value: 312,
            },
            {
              hour: 343,
              value: 310,
            },
            {
              hour: 358,
              value: 306,
            },
            {
              hour: 373,
              value: 277,
            },
            {
              hour: 388,
              value: 229,
            },
            {
              hour: 405,
              value: 176,
            },
            {
              hour: 411,
              value: 156,
            },
            {
              hour: 420,
              value: 144,
            },
            {
              hour: 435,
              value: 153,
            },
            {
              hour: 450,
              value: 189,
            },
            {
              hour: 465,
              value: 222,
            },
            {
              hour: 480,
              value: 237,
            },
            {
              hour: 495,
              value: 226,
            },
            {
              hour: 510,
              value: 198,
            },
            {
              hour: 525,
              value: 164,
            },
            {
              hour: 540,
              value: 132,
            },
            {
              hour: 555,
              value: 108,
            },
            {
              hour: 570,
              value: 87,
            },
            {
              hour: 585,
              value: 71,
            },
            {
              hour: 600,
              value: 61,
            },
            {
              hour: 615,
              value: 53,
            },
            {
              hour: 630,
              value: 45,
            },
            {
              hour: 645,
              value: 44,
            },
            {
              hour: 661,
              value: 47,
            },
            {
              hour: 672,
              value: 48,
            },
            {
              hour: 676,
              value: 48,
            },
            {
              hour: 691,
              value: 54,
            },
            {
              hour: 702,
              value: 70,
            },
            {
              hour: 706,
              value: 82,
            },
            {
              hour: 721,
              value: 122,
            },
            {
              hour: 736,
              value: 171,
            },
            {
              hour: 751,
              value: 206,
            },
            {
              hour: 766,
              value: 210,
            },
            {
              hour: 781,
              value: 196,
            },
            {
              hour: 797,
              value: 162,
            },
            {
              hour: 800,
              value: 160,
            },
            {
              hour: 812,
              value: 141,
            },
            {
              hour: 827,
              value: 139,
            },
            {
              hour: 842,
              value: 139,
            },
            {
              hour: 857,
              value: 135,
            },
            {
              hour: 873,
              value: 141,
            },
            {
              hour: 874,
              value: 131,
            },
            {
              hour: 889,
              value: 124,
            },
            {
              hour: 904,
              value: 124,
            },
            {
              hour: 919,
              value: 135,
            },
            {
              hour: 934,
              value: 149,
            },
            {
              hour: 949,
              value: 160,
            },
            {
              hour: 964,
              value: 176,
            },
            {
              hour: 979,
              value: 205,
            },
            {
              hour: 994,
              value: 228,
            },
            {
              hour: 1009,
              value: 237,
            },
            {
              hour: 1024,
              value: 242,
            },
            {
              hour: 1039,
              value: 235,
            },
            {
              hour: 1054,
              value: 222,
            },
            {
              hour: 1070,
              value: 215,
            },
            {
              hour: 1077,
              value: 213,
            },
            {
              hour: 1085,
              value: 213,
            },
            {
              hour: 1100,
              value: 216,
            },
            {
              hour: 1115,
              value: 209,
            },
            {
              hour: 1130,
              value: 195,
            },
            {
              hour: 1145,
              value: 183,
            },
            {
              hour: 1161,
              value: 178,
            },
            {
              hour: 1165,
              value: 187,
            },
            {
              hour: 1176,
              value: 156,
            },
            {
              hour: 1191,
              value: 135,
            },
            {
              hour: 1206,
              value: 113,
            },
            {
              hour: 1221,
              value: 84,
            },
            {
              hour: 1236,
              value: 63,
            },
            {
              hour: 1251,
              value: 44,
            },
            {
              hour: 1266,
              value: 40,
            },
            {
              hour: 1281,
              value: 46,
            },
            {
              hour: 1296,
              value: 54,
            },
            {
              hour: 1311,
              value: 68,
            },
            {
              hour: 1326,
              value: 92,
            },
            {
              hour: 1341,
              value: 101,
            },
            {
              hour: 1356,
              value: 95,
            },
            {
              hour: 1371,
              value: 88,
            },
            {
              hour: 1386,
              value: 86,
            },
            {
              hour: 1401,
              value: 87,
            },
            {
              hour: 1416,
              value: 99,
            },
            {
              hour: 1431,
              value: 122,
            },
          ],
          median: [
            {
              hour: 0,
              value: 221,
            },
            {
              hour: 30,
              value: 300,
            },
            {
              hour: 60,
              value: 291,
            },
            {
              hour: 90,
              value: 294,
            },
            {
              hour: 120,
              value: 293,
            },
            {
              hour: 150,
              value: 282.5,
            },
            {
              hour: 180,
              value: 268,
            },
            {
              hour: 210,
              value: 274,
            },
            {
              hour: 240,
              value: 277.5,
            },
            {
              hour: 270,
              value: 274.5,
            },
            {
              hour: 300,
              value: 283,
            },
            {
              hour: 330,
              value: 310,
            },
            {
              hour: 360,
              value: 291.5,
            },
            {
              hour: 390,
              value: 202.5,
            },
            {
              hour: 420,
              value: 153,
            },
            {
              hour: 450,
              value: 205.5,
            },
            {
              hour: 480,
              value: 231.5,
            },
            {
              hour: 510,
              value: 181,
            },
            {
              hour: 540,
              value: 120,
            },
            {
              hour: 570,
              value: 79,
            },
            {
              hour: 600,
              value: 57,
            },
            {
              hour: 630,
              value: 44.5,
            },
            {
              hour: 660,
              value: 47.5,
            },
            {
              hour: 690,
              value: 54,
            },
            {
              hour: 720,
              value: 102,
            },
            {
              hour: 750,
              value: 188.5,
            },
            {
              hour: 780,
              value: 203,
            },
            {
              hour: 810,
              value: 160,
            },
            {
              hour: 840,
              value: 139,
            },
            {
              hour: 870,
              value: 135,
            },
            {
              hour: 900,
              value: 124,
            },
            {
              hour: 930,
              value: 142,
            },
            {
              hour: 960,
              value: 168,
            },
            {
              hour: 990,
              value: 216.5,
            },
            {
              hour: 1020,
              value: 239.5,
            },
            {
              hour: 1050,
              value: 228.5,
            },
            {
              hour: 1080,
              value: 213,
            },
            {
              hour: 1110,
              value: 212.5,
            },
            {
              hour: 1140,
              value: 189,
            },
            {
              hour: 1170,
              value: 178,
            },
            {
              hour: 1200,
              value: 124,
            },
            {
              hour: 1230,
              value: 73.5,
            },
            {
              hour: 1260,
              value: 42,
            },
            {
              hour: 1290,
              value: 50,
            },
            {
              hour: 1320,
              value: 80,
            },
            {
              hour: 1350,
              value: 98,
            },
            {
              hour: 1380,
              value: 87,
            },
            {
              hour: 1410,
              value: 93,
            },
            {
              hour: 1440,
              value: 122,
            },
          ],
        },
      },
      {
        date: '2020/07/19',
        glycemia: {
          average: {
            '00:00-02:00': 257,
            '02:00-04:00': 369,
            '04:00-06:00': 338,
            '06:00-08:00': 321,
            '08:00-10:00': 263,
            '10:00-12:00': 134,
            '12:00-14:00': 114,
            '14:00-16:00': 84,
            '16:00-18:00': 73,
            '18:00-20:00': 170,
            '20:00-22:00': 123,
            '22:00-24:00': 53,
          },
          standardDeviation: {
            '00:00-02:00': 64,
            '02:00-04:00': 16,
            '04:00-06:00': 11,
            '06:00-08:00': 25,
            '08:00-10:00': 26,
            '10:00-12:00': 33,
            '12:00-14:00': 22,
            '14:00-16:00': 25,
            '16:00-18:00': 26,
            '18:00-20:00': 44,
            '20:00-22:00': 45,
            '22:00-24:00': 9,
          },
          variabilityCoefficient: {
            '00:00-02:00': 25,
            '02:00-04:00': 4,
            '04:00-06:00': 3,
            '06:00-08:00': 8,
            '08:00-10:00': 10,
            '10:00-12:00': 25,
            '12:00-14:00': 19,
            '14:00-16:00': 30,
            '16:00-18:00': 36,
            '18:00-20:00': 26,
            '20:00-22:00': 37,
            '22:00-24:00': 17,
          },
          onTarget: {
            '00:00-02:00': 11,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 89,
            '12:00-14:00': 100,
            '14:00-16:00': 78,
            '16:00-18:00': 33,
            '18:00-20:00': 50,
            '20:00-22:00': 75,
            '22:00-24:00': 13,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 22,
            '16:00-18:00': 67,
            '18:00-20:00': 0,
            '20:00-22:00': 13,
            '22:00-24:00': 88,
          },
          hyperTime: {
            '00:00-02:00': 89,
            '02:00-04:00': 100,
            '04:00-06:00': 100,
            '06:00-08:00': 100,
            '08:00-10:00': 100,
            '10:00-12:00': 11,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 50,
            '20:00-22:00': 13,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 94,
            '12:00-14:00': 0,
            '14:00-16:00': 46,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 35,
            '12:00-14:00': 0,
            '14:00-16:00': 23,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 25,
            '12:00-14:00': 0,
            '14:00-16:00': 21,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 747,
            '12:00-14:00': 0,
            '14:00-16:00': 475,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '14.00',
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': '14.00',
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '14.00',
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '12.00',
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': '12.00',
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': '12.00',
        },
        graphicData: {
          data: [
            {
              hour: 6,
              value: 153,
            },
            {
              hour: 21,
              value: 187,
            },
            {
              hour: 37,
              value: 216,
            },
            {
              hour: 49,
              value: 239,
            },
            {
              hour: 52,
              value: 244,
            },
            {
              hour: 67,
              value: 275,
            },
            {
              hour: 82,
              value: 306,
            },
            {
              hour: 97,
              value: 335,
            },
            {
              hour: 112,
              value: 360,
            },
            {
              hour: 129,
              value: 377,
            },
            {
              hour: 130,
              value: 396,
            },
            {
              hour: 144,
              value: 374,
            },
            {
              hour: 159,
              value: 382,
            },
            {
              hour: 174,
              value: 379,
            },
            {
              hour: 189,
              value: 368,
            },
            {
              hour: 204,
              value: 358,
            },
            {
              hour: 219,
              value: 346,
            },
            {
              hour: 234,
              value: 344,
            },
            {
              hour: 249,
              value: 354,
            },
            {
              hour: 264,
              value: 350,
            },
            {
              hour: 279,
              value: 336,
            },
            {
              hour: 294,
              value: 323,
            },
            {
              hour: 309,
              value: 324,
            },
            {
              hour: 324,
              value: 341,
            },
            {
              hour: 339,
              value: 343,
            },
            {
              hour: 354,
              value: 333,
            },
            {
              hour: 369,
              value: 330,
            },
            {
              hour: 385,
              value: 343,
            },
            {
              hour: 390,
              value: 348,
            },
            {
              hour: 400,
              value: 347,
            },
            {
              hour: 415,
              value: 337,
            },
            {
              hour: 430,
              value: 309,
            },
            {
              hour: 445,
              value: 279,
            },
            {
              hour: 460,
              value: 285,
            },
            {
              hour: 475,
              value: 313,
            },
            {
              hour: 490,
              value: 312,
            },
            {
              hour: 505,
              value: 291,
            },
            {
              hour: 520,
              value: 272,
            },
            {
              hour: 535,
              value: 258,
            },
            {
              hour: 550,
              value: 256,
            },
            {
              hour: 554,
              value: 270,
            },
            {
              hour: 565,
              value: 252,
            },
            {
              hour: 580,
              value: 239,
            },
            {
              hour: 595,
              value: 220,
            },
            {
              hour: 610,
              value: 203,
            },
            {
              hour: 625,
              value: 177,
            },
            {
              hour: 640,
              value: 147,
            },
            {
              hour: 657,
              value: 118,
            },
            {
              hour: 668,
              value: 109,
            },
            {
              hour: 672,
              value: 103,
            },
            {
              hour: 687,
              value: 105,
            },
            {
              hour: 702,
              value: 115,
            },
            {
              hour: 718,
              value: 132,
            },
            {
              hour: 730,
              value: 138,
            },
            {
              hour: 733,
              value: 141,
            },
            {
              hour: 748,
              value: 137,
            },
            {
              hour: 763,
              value: 128,
            },
            {
              hour: 778,
              value: 117,
            },
            {
              hour: 793,
              value: 102,
            },
            {
              hour: 808,
              value: 91,
            },
            {
              hour: 823,
              value: 87,
            },
            {
              hour: 838,
              value: 84,
            },
            {
              hour: 854,
              value: 77,
            },
            {
              hour: 861,
              value: 74,
            },
            {
              hour: 869,
              value: 73,
            },
            {
              hour: 884,
              value: 71,
            },
            {
              hour: 899,
              value: 62,
            },
            {
              hour: 914,
              value: 58,
            },
            {
              hour: 929,
              value: 85,
            },
            {
              hour: 944,
              value: 124,
            },
            {
              hour: 959,
              value: 134,
            },
            {
              hour: 974,
              value: 129,
            },
            {
              hour: 989,
              value: 107,
            },
            {
              hour: 1004,
              value: 78,
            },
            {
              hour: 1019,
              value: 66,
            },
            {
              hour: 1034,
              value: 60,
            },
            {
              hour: 1049,
              value: 51,
            },
            {
              hour: 1055,
              value: 51,
            },
            {
              hour: 1064,
              value: 47,
            },
            {
              hour: 1079,
              value: 64,
            },
            {
              hour: 1097,
              value: 107,
            },
            {
              hour: 1099,
              value: 111,
            },
            {
              hour: 1112,
              value: 138,
            },
            {
              hour: 1127,
              value: 164,
            },
            {
              hour: 1142,
              value: 189,
            },
            {
              hour: 1157,
              value: 207,
            },
            {
              hour: 1172,
              value: 221,
            },
            {
              hour: 1187,
              value: 224,
            },
            {
              hour: 1202,
              value: 204,
            },
            {
              hour: 1217,
              value: 171,
            },
            {
              hour: 1232,
              value: 145,
            },
            {
              hour: 1247,
              value: 127,
            },
            {
              hour: 1262,
              value: 108,
            },
            {
              hour: 1277,
              value: 89,
            },
            {
              hour: 1292,
              value: 74,
            },
            {
              hour: 1307,
              value: 66,
            },
            {
              hour: 1322,
              value: 60,
            },
            {
              hour: 1337,
              value: 57,
            },
            {
              hour: 1352,
              value: 53,
            },
            {
              hour: 1367,
              value: 47,
            },
            {
              hour: 1382,
              value: 42,
            },
            {
              hour: 1397,
              value: 44,
            },
            {
              hour: 1412,
              value: 54,
            },
            {
              hour: 1427,
              value: 70,
            },
          ],
          median: [
            {
              hour: 0,
              value: 111.5,
            },
            {
              hour: 30,
              value: 201.5,
            },
            {
              hour: 60,
              value: 244,
            },
            {
              hour: 90,
              value: 320.5,
            },
            {
              hour: 120,
              value: 377,
            },
            {
              hour: 150,
              value: 378,
            },
            {
              hour: 180,
              value: 373.5,
            },
            {
              hour: 210,
              value: 352,
            },
            {
              hour: 240,
              value: 349,
            },
            {
              hour: 270,
              value: 343,
            },
            {
              hour: 300,
              value: 323.5,
            },
            {
              hour: 330,
              value: 342,
            },
            {
              hour: 360,
              value: 331.5,
            },
            {
              hour: 390,
              value: 347,
            },
            {
              hour: 420,
              value: 323,
            },
            {
              hour: 450,
              value: 282,
            },
            {
              hour: 480,
              value: 312.5,
            },
            {
              hour: 510,
              value: 281.5,
            },
            {
              hour: 540,
              value: 258,
            },
            {
              hour: 570,
              value: 245.5,
            },
            {
              hour: 600,
              value: 211.5,
            },
            {
              hour: 630,
              value: 162,
            },
            {
              hour: 660,
              value: 109,
            },
            {
              hour: 690,
              value: 110,
            },
            {
              hour: 720,
              value: 138,
            },
            {
              hour: 750,
              value: 132.5,
            },
            {
              hour: 780,
              value: 109.5,
            },
            {
              hour: 810,
              value: 89,
            },
            {
              hour: 840,
              value: 80.5,
            },
            {
              hour: 870,
              value: 73,
            },
            {
              hour: 900,
              value: 60,
            },
            {
              hour: 930,
              value: 104.5,
            },
            {
              hour: 960,
              value: 131.5,
            },
            {
              hour: 990,
              value: 92.5,
            },
            {
              hour: 1020,
              value: 63,
            },
            {
              hour: 1050,
              value: 51,
            },
            {
              hour: 1080,
              value: 64,
            },
            {
              hour: 1110,
              value: 111,
            },
            {
              hour: 1140,
              value: 176.5,
            },
            {
              hour: 1170,
              value: 214,
            },
            {
              hour: 1200,
              value: 214,
            },
            {
              hour: 1230,
              value: 158,
            },
            {
              hour: 1260,
              value: 117.5,
            },
            {
              hour: 1290,
              value: 81.5,
            },
            {
              hour: 1320,
              value: 63,
            },
            {
              hour: 1350,
              value: 55,
            },
            {
              hour: 1380,
              value: 44.5,
            },
            {
              hour: 1410,
              value: 49,
            },
            {
              hour: 1440,
              value: 70,
            },
          ],
        },
      },
      {
        date: '2020/07/20',
        glycemia: {
          average: {
            '00:00-02:00': 109,
            '02:00-04:00': 52,
            '04:00-06:00': 124,
            '06:00-08:00': 226,
            '08:00-10:00': 212,
            '10:00-12:00': 90,
            '12:00-14:00': 124,
            '14:00-16:00': 192,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          standardDeviation: {
            '00:00-02:00': 17,
            '02:00-04:00': 12,
            '04:00-06:00': 89,
            '06:00-08:00': 37,
            '08:00-10:00': 34,
            '10:00-12:00': 15,
            '12:00-14:00': 43,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          variabilityCoefficient: {
            '00:00-02:00': 16,
            '02:00-04:00': 23,
            '04:00-06:00': 72,
            '06:00-08:00': 16,
            '08:00-10:00': 16,
            '10:00-12:00': 17,
            '12:00-14:00': 35,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          onTarget: {
            '00:00-02:00': 100,
            '02:00-04:00': 13,
            '04:00-06:00': 10,
            '06:00-08:00': 11,
            '08:00-10:00': 22,
            '10:00-12:00': 100,
            '12:00-14:00': 100,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 88,
            '04:00-06:00': 50,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 40,
            '06:00-08:00': 89,
            '08:00-10:00': 78,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 100,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '14.00',
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': '12.00',
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [
            {
              hour: 2,
              value: 81,
            },
            {
              hour: 17,
              value: 104,
            },
            {
              hour: 22,
              value: 109,
            },
            {
              hour: 34,
              value: 124,
            },
            {
              hour: 42,
              value: 135,
            },
            {
              hour: 49,
              value: 124,
            },
            {
              hour: 64,
              value: 122,
            },
            {
              hour: 79,
              value: 114,
            },
            {
              hour: 94,
              value: 97,
            },
            {
              hour: 109,
              value: 84,
            },
            {
              hour: 124,
              value: 74,
            },
            {
              hour: 139,
              value: 66,
            },
            {
              hour: 154,
              value: 59,
            },
            {
              hour: 169,
              value: 52,
            },
            {
              hour: 184,
              value: 46,
            },
            {
              hour: 199,
              value: 40,
            },
            {
              hour: 214,
              value: 40,
            },
            {
              hour: 229,
              value: 40,
            },
            {
              hour: 244,
              value: 40,
            },
            {
              hour: 259,
              value: 40,
            },
            {
              hour: 260,
              value: 40,
            },
            {
              hour: 265,
              value: 40,
            },
            {
              hour: 274,
              value: 47,
            },
            {
              hour: 289,
              value: 128,
            },
            {
              hour: 304,
              value: 184,
            },
            {
              hour: 319,
              value: 220,
            },
            {
              hour: 334,
              value: 242,
            },
            {
              hour: 349,
              value: 258,
            },
            {
              hour: 364,
              value: 267,
            },
            {
              hour: 380,
              value: 269,
            },
            {
              hour: 386,
              value: 273,
            },
            {
              hour: 395,
              value: 250,
            },
            {
              hour: 410,
              value: 221,
            },
            {
              hour: 425,
              value: 187,
            },
            {
              hour: 440,
              value: 174,
            },
            {
              hour: 455,
              value: 185,
            },
            {
              hour: 470,
              value: 207,
            },
            {
              hour: 485,
              value: 233,
            },
            {
              hour: 500,
              value: 243,
            },
            {
              hour: 515,
              value: 242,
            },
            {
              hour: 530,
              value: 242,
            },
            {
              hour: 546,
              value: 226,
            },
            {
              hour: 554,
              value: 211,
            },
            {
              hour: 561,
              value: 201,
            },
            {
              hour: 576,
              value: 171,
            },
            {
              hour: 591,
              value: 140,
            },
            {
              hour: 606,
              value: 119,
            },
            {
              hour: 621,
              value: 110,
            },
            {
              hour: 636,
              value: 103,
            },
            {
              hour: 651,
              value: 88,
            },
            {
              hour: 666,
              value: 77,
            },
            {
              hour: 682,
              value: 78,
            },
            {
              hour: 695,
              value: 80,
            },
            {
              hour: 697,
              value: 80,
            },
            {
              hour: 712,
              value: 76,
            },
            {
              hour: 727,
              value: 73,
            },
            {
              hour: 742,
              value: 73,
            },
            {
              hour: 757,
              value: 81,
            },
            {
              hour: 772,
              value: 107,
            },
            {
              hour: 787,
              value: 142,
            },
            {
              hour: 802,
              value: 163,
            },
            {
              hour: 817,
              value: 171,
            },
            {
              hour: 832,
              value: 180,
            },
            {
              hour: 847,
              value: 192,
            },
          ],
          median: [
            {
              hour: 0,
              value: 81,
            },
            {
              hour: 30,
              value: 116.5,
            },
            {
              hour: 60,
              value: 123,
            },
            {
              hour: 90,
              value: 105.5,
            },
            {
              hour: 120,
              value: 79,
            },
            {
              hour: 150,
              value: 62.5,
            },
            {
              hour: 180,
              value: 49,
            },
            {
              hour: 210,
              value: 40,
            },
            {
              hour: 240,
              value: 40,
            },
            {
              hour: 270,
              value: 40,
            },
            {
              hour: 300,
              value: 156,
            },
            {
              hour: 330,
              value: 231,
            },
            {
              hour: 360,
              value: 262.5,
            },
            {
              hour: 390,
              value: 269,
            },
            {
              hour: 420,
              value: 204,
            },
            {
              hour: 450,
              value: 179.5,
            },
            {
              hour: 480,
              value: 220,
            },
            {
              hour: 510,
              value: 242.5,
            },
            {
              hour: 540,
              value: 226,
            },
            {
              hour: 570,
              value: 186,
            },
            {
              hour: 600,
              value: 129.5,
            },
            {
              hour: 630,
              value: 106.5,
            },
            {
              hour: 660,
              value: 82.5,
            },
            {
              hour: 690,
              value: 80,
            },
            {
              hour: 720,
              value: 74.5,
            },
            {
              hour: 750,
              value: 77,
            },
            {
              hour: 780,
              value: 124.5,
            },
            {
              hour: 810,
              value: 167,
            },
            {
              hour: 840,
              value: 186,
            },
          ],
        },
      },
      {
        date: '2020/07/21',
        glycemia: {
          average: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          standardDeviation: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          variabilityCoefficient: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [],
          median: [],
        },
      },
      {
        date: '2020/07/22',
        glycemia: {
          average: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          standardDeviation: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          variabilityCoefficient: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [],
          median: [],
        },
      },
      {
        date: '2020/07/23',
        glycemia: {
          average: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          standardDeviation: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          variabilityCoefficient: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [],
          median: [],
        },
      },
      {
        date: '2020/07/24',
        glycemia: {
          average: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          standardDeviation: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          variabilityCoefficient: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [],
          median: [],
        },
      },
      {
        date: '2020/07/25',
        glycemia: {
          average: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          standardDeviation: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          variabilityCoefficient: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [],
          median: [],
        },
      },
      {
        date: '2020/07/26',
        glycemia: {
          average: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          standardDeviation: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          variabilityCoefficient: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [],
          median: [],
        },
      },
      {
        date: '2020/07/27',
        glycemia: {
          average: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          standardDeviation: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          variabilityCoefficient: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [],
          median: [],
        },
      },
      {
        date: '2020/07/28',
        glycemia: {
          average: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          standardDeviation: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          variabilityCoefficient: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [],
          median: [],
        },
      },
      {
        date: '2020/07/29',
        glycemia: {
          average: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          standardDeviation: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          variabilityCoefficient: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          onTarget: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hypoTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          hyperTime: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        meal: {
          carbs: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          prot: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          fats: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
          kcal: {
            '00:00-02:00': 0,
            '02:00-04:00': 0,
            '04:00-06:00': 0,
            '06:00-08:00': 0,
            '08:00-10:00': 0,
            '10:00-12:00': 0,
            '12:00-14:00': 0,
            '14:00-16:00': 0,
            '16:00-18:00': 0,
            '18:00-20:00': 0,
            '20:00-22:00': 0,
            '22:00-24:00': 0,
          },
        },
        bolus: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        basal: {
          '00:00-02:00': 0,
          '02:00-04:00': 0,
          '04:00-06:00': 0,
          '06:00-08:00': 0,
          '08:00-10:00': 0,
          '10:00-12:00': 0,
          '12:00-14:00': 0,
          '14:00-16:00': 0,
          '16:00-18:00': 0,
          '18:00-20:00': 0,
          '20:00-22:00': 0,
          '22:00-24:00': 0,
        },
        graphicData: {
          data: [],
          median: [],
        },
      },
    ],
    physicalActivity: {
      caloriesBurnAverage: '0.00',
      basalMetabolicRate: '1401.50',
      energyExpenditure: '-1401.50',
      disabled: 170,
    },
  },
  reports: {
    notes: null,
    report_file_name: '',
    average_bgl: 0,
    time_in_hipo: 0,
    created_at: '2020-07-30T02:27:06.201Z',
    user: {
      fk_clinic: 1,
      created_at: '2020-07-30T02:27:06.201Z',
      name: '',
      reset_password: null,
      integration_token: null,
      fk_profile: 1,
      updated_at: '2020-07-30T02:27:06.201Z',
      deleted_at: null,
      id: 1,
      password: '$2b$10$bn5Iar4Y65XJ3q66itb1q.YXFTwkfLKj5LIihoouHTvf4JG9HhU4y',
      email: 'e@mail.com',
    },
    var_bgl: 0,
    report_end: '2020-07-30T02:27:06.201Z',
    time_in_hiper: 0,
    time_in_range: 0,
    report_start: '2020-07-30T02:27:06.201Z',
    id: 0,
    created_by_user: 0,
    reports: [
      {
        notes: null,
        report_file_name: '1_medical_report_20200618155718.pdf',
        average_bgl: 0,
        time_in_hipo: 0,
        created_at: '2020-06-18 15:57:18',
        fk_patient: 1,
        user: {
          fk_clinic: 1,
          created_at: '2020-06-17 11:32:56',
          name: 'Panel Development',
          reset_password: null,
          integration_token: null,
          fk_profile: 1,
          updated_at: '2020-06-17 11:32:56',
          deleted_at: null,
          id: 1,
          password:
            '$2b$10$bn5Iar4Y65XJ3q66itb1q.YXFTwkfLKj5LIihoouHTvf4JG9HhU4y',
          email: 'admin@admin.com',
        },
        report_end: '2020-06-18T03:00:00.000Z',
        time_in_hiper: 0,
        time_in_range: 0,
        report_start: '2020-06-18T03:00:00.000Z',
        updated_at: '2020-06-18 15:57:18',
        id: 7,
        created_by_user: 1,
      },
    ],
  },
  reports_list: [
    {
      id: 107,
      created_at: '2020-07-29 23:05:05',
      updated_at: '2020-07-29 23:05:05',
      fk_patient: 114,
      report_file_name: '114_medical_report_20200729230505.pdf',
      created_by_user: 151,
      report_start: '2020-07-29T03:00:00.000Z',
      report_end: '2020-07-29T03:00:00.000Z',
      average_bgl: 0,
      var_bgl: 0,
      time_in_range: 0,
      time_in_hiper: 0,
      time_in_hipo: 0,
      notes: '',
      user: {
        id: 151,
        name: 'Fernanda Jaiara Dellajustina',
        email: 'fernanda.dellajustina@glucogear.io',
        password:
          '$2b$10$ajKZm7r0u/jVP018ki/.7u5RgB.M6W4K997wXdj/C449SnYK29f7.',
        fk_clinic: 3,
        reset_password: false,
        created_at: '2020-06-29 15:44:34',
        updated_at: '2020-07-02 17:40:37',
        deleted_at: null,
        fk_profile: 3,
        integration_token: null,
        onesignal_token: null,
      },
    },
    {
      id: 106,
      created_at: '2020-07-29 23:00:24',
      updated_at: '2020-07-29 23:00:24',
      fk_patient: 114,
      report_file_name: '114_medical_report_20200729230023.pdf',
      created_by_user: 151,
      report_start: '2020-07-29T03:00:00.000Z',
      report_end: '2020-07-29T03:00:00.000Z',
      average_bgl: 0,
      var_bgl: 0,
      time_in_range: 0,
      time_in_hiper: 0,
      time_in_hipo: 0,
      notes: '',
      user: {
        id: 151,
        name: 'Fernanda Jaiara Dellajustina',
        email: 'fernanda.dellajustina@glucogear.io',
        password:
          '$2b$10$ajKZm7r0u/jVP018ki/.7u5RgB.M6W4K997wXdj/C449SnYK29f7.',
        fk_clinic: 3,
        reset_password: false,
        created_at: '2020-06-29 15:44:34',
        updated_at: '2020-07-02 17:40:37',
        deleted_at: null,
        fk_profile: 3,
        integration_token: null,
        onesignal_token: null,
      },
    },
    {
      id: 105,
      created_at: '2020-07-29 22:59:44',
      updated_at: '2020-07-29 22:59:44',
      fk_patient: 114,
      report_file_name: '114_medical_report_20200729225944.pdf',
      created_by_user: 151,
      report_start: '2020-07-29T03:00:00.000Z',
      report_end: '2020-07-29T03:00:00.000Z',
      average_bgl: 0,
      var_bgl: 0,
      time_in_range: 0,
      time_in_hiper: 0,
      time_in_hipo: 0,
      notes: '',
      user: {
        id: 151,
        name: 'Fernanda Jaiara Dellajustina',
        email: 'fernanda.dellajustina@glucogear.io',
        password:
          '$2b$10$ajKZm7r0u/jVP018ki/.7u5RgB.M6W4K997wXdj/C449SnYK29f7.',
        fk_clinic: 3,
        reset_password: false,
        created_at: '2020-06-29 15:44:34',
        updated_at: '2020-07-02 17:40:37',
        deleted_at: null,
        fk_profile: 3,
        integration_token: null,
        onesignal_token: null,
      },
    },
    {
      id: 104,
      created_at: '2020-07-29 22:57:34',
      updated_at: '2020-07-29 22:57:34',
      fk_patient: 114,
      report_file_name: '114_medical_report_20200729225734.pdf',
      created_by_user: 151,
      report_start: '2020-07-29T03:00:00.000Z',
      report_end: '2020-07-29T03:00:00.000Z',
      average_bgl: 0,
      var_bgl: 0,
      time_in_range: 0,
      time_in_hiper: 0,
      time_in_hipo: 0,
      notes: '',
      user: {
        id: 151,
        name: 'Fernanda Jaiara Dellajustina',
        email: 'fernanda.dellajustina@glucogear.io',
        password:
          '$2b$10$ajKZm7r0u/jVP018ki/.7u5RgB.M6W4K997wXdj/C449SnYK29f7.',
        fk_clinic: 3,
        reset_password: false,
        created_at: '2020-06-29 15:44:34',
        updated_at: '2020-07-02 17:40:37',
        deleted_at: null,
        fk_profile: 3,
        integration_token: null,
        onesignal_token: null,
      },
    },
    {
      id: 103,
      created_at: '2020-07-29 21:31:33',
      updated_at: '2020-07-29 21:31:33',
      fk_patient: 114,
      report_file_name: '114_medical_report_20200729213133.pdf',
      created_by_user: 151,
      report_start: '2020-07-29T03:00:00.000Z',
      report_end: '2020-07-29T03:00:00.000Z',
      average_bgl: 0,
      var_bgl: 0,
      time_in_range: 0,
      time_in_hiper: 0,
      time_in_hipo: 0,
      notes: '',
      user: {
        id: 151,
        name: 'Fernanda Jaiara Dellajustina',
        email: 'fernanda.dellajustina@glucogear.io',
        password:
          '$2b$10$ajKZm7r0u/jVP018ki/.7u5RgB.M6W4K997wXdj/C449SnYK29f7.',
        fk_clinic: 3,
        reset_password: false,
        created_at: '2020-06-29 15:44:34',
        updated_at: '2020-07-02 17:40:37',
        deleted_at: null,
        fk_profile: 3,
        integration_token: null,
        onesignal_token: null,
      },
    },
    {
      id: 102,
      created_at: '2020-07-29 20:26:35',
      updated_at: '2020-07-29 20:26:35',
      fk_patient: 114,
      report_file_name: '114_medical_report_20200729202634.pdf',
      created_by_user: 151,
      report_start: '2020-06-29T03:00:00.000Z',
      report_end: '2020-07-29T03:00:00.000Z',
      average_bgl: 162,
      var_bgl: 48,
      time_in_range: 40,
      time_in_hiper: 46,
      time_in_hipo: 14,
      notes: '',
      user: {
        id: 151,
        name: 'Fernanda Jaiara Dellajustina',
        email: 'fernanda.dellajustina@glucogear.io',
        password:
          '$2b$10$ajKZm7r0u/jVP018ki/.7u5RgB.M6W4K997wXdj/C449SnYK29f7.',
        fk_clinic: 3,
        reset_password: false,
        created_at: '2020-06-29 15:44:34',
        updated_at: '2020-07-02 17:40:37',
        deleted_at: null,
        fk_profile: 3,
        integration_token: null,
        onesignal_token: null,
      },
    },
    {
      id: 101,
      created_at: '2020-07-29 20:22:07',
      updated_at: '2020-07-29 20:22:07',
      fk_patient: 114,
      report_file_name: '114_medical_report_20200729202206.pdf',
      created_by_user: 151,
      report_start: '2020-07-29T03:00:00.000Z',
      report_end: '2020-07-29T03:00:00.000Z',
      average_bgl: 0,
      var_bgl: 0,
      time_in_range: 0,
      time_in_hiper: 0,
      time_in_hipo: 0,
      notes: '',
      user: {
        id: 151,
        name: 'Fernanda Jaiara Dellajustina',
        email: 'fernanda.dellajustina@glucogear.io',
        password:
          '$2b$10$ajKZm7r0u/jVP018ki/.7u5RgB.M6W4K997wXdj/C449SnYK29f7.',
        fk_clinic: 3,
        reset_password: false,
        created_at: '2020-06-29 15:44:34',
        updated_at: '2020-07-02 17:40:37',
        deleted_at: null,
        fk_profile: 3,
        integration_token: null,
        onesignal_token: null,
      },
    },
    {
      id: 100,
      created_at: '2020-07-29 20:18:12',
      updated_at: '2020-07-29 20:18:12',
      fk_patient: 114,
      report_file_name: '114_medical_report_20200729201812.pdf',
      created_by_user: 151,
      report_start: '2020-07-29T03:00:00.000Z',
      report_end: '2020-07-29T03:00:00.000Z',
      average_bgl: 0,
      var_bgl: 0,
      time_in_range: 0,
      time_in_hiper: 0,
      time_in_hipo: 0,
      notes: '',
      user: {
        id: 151,
        name: 'Fernanda Jaiara Dellajustina',
        email: 'fernanda.dellajustina@glucogear.io',
        password:
          '$2b$10$ajKZm7r0u/jVP018ki/.7u5RgB.M6W4K997wXdj/C449SnYK29f7.',
        fk_clinic: 3,
        reset_password: false,
        created_at: '2020-06-29 15:44:34',
        updated_at: '2020-07-02 17:40:37',
        deleted_at: null,
        fk_profile: 3,
        integration_token: null,
        onesignal_token: null,
      },
    },
    {
      id: 99,
      created_at: '2020-07-29 20:15:34',
      updated_at: '2020-07-29 20:15:34',
      fk_patient: 114,
      report_file_name: '114_medical_report_20200729201534.pdf',
      created_by_user: 151,
      report_start: '2020-07-29T03:00:00.000Z',
      report_end: '2020-07-29T03:00:00.000Z',
      average_bgl: 0,
      var_bgl: 0,
      time_in_range: 0,
      time_in_hiper: 0,
      time_in_hipo: 0,
      notes: '',
      user: {
        id: 151,
        name: 'Fernanda Jaiara Dellajustina',
        email: 'fernanda.dellajustina@glucogear.io',
        password:
          '$2b$10$ajKZm7r0u/jVP018ki/.7u5RgB.M6W4K997wXdj/C449SnYK29f7.',
        fk_clinic: 3,
        reset_password: false,
        created_at: '2020-06-29 15:44:34',
        updated_at: '2020-07-02 17:40:37',
        deleted_at: null,
        fk_profile: 3,
        integration_token: null,
        onesignal_token: null,
      },
    },
    {
      id: 98,
      created_at: '2020-07-29 20:14:54',
      updated_at: '2020-07-29 20:14:54',
      fk_patient: 114,
      report_file_name: '114_medical_report_20200729201454.pdf',
      created_by_user: 151,
      report_start: '2020-07-29T03:00:00.000Z',
      report_end: '2020-07-29T03:00:00.000Z',
      average_bgl: 0,
      var_bgl: 0,
      time_in_range: 0,
      time_in_hiper: 0,
      time_in_hipo: 0,
      notes: '',
      user: {
        id: 151,
        name: 'Fernanda Jaiara Dellajustina',
        email: 'fernanda.dellajustina@glucogear.io',
        password:
          '$2b$10$ajKZm7r0u/jVP018ki/.7u5RgB.M6W4K997wXdj/C449SnYK29f7.',
        fk_clinic: 3,
        reset_password: false,
        created_at: '2020-06-29 15:44:34',
        updated_at: '2020-07-02 17:40:37',
        deleted_at: null,
        fk_profile: 3,
        integration_token: null,
        onesignal_token: null,
      },
    },
  ],
  paginationReports: {
    total: 3,
    pageSize: 10,
    current: 3,
  },
  loading: {
    patient: false,
    report: false,
    pdf: false,
  },
  patient: {
    id: 114,
    created_at: '2020-07-01T17:15:16.261Z',
    fk_user: 166,
    code: '',
    gender: 'F',
    born_date: '2000-04-23T03:00:00.000Z',
    patient_cellphone_number: null,
    created_by_user: 151,
    updated_at: '2020-07-01T17:15:16.261Z',
    update_registration: true,
    deleted_at: null,
    user: {
      id: 166,
      name: 'P07',
      email: 'gtdmp07@gmail.com',
      password: '$2b$10$YmIy3czUOKyk.PIe3j7IvOVnptB1CX9Cb3N4tELSW.zJx26fh.uIS',
      fk_clinic: 3,
      reset_password: true,
      created_at: '2020-07-01 14:15:16',
      updated_at: '2020-07-29 16:09:50',
      deleted_at: null,
      fk_profile: 2,
      integration_token: null,
      onesignal_token: null,
    },
    exam: {
      id: 107,
      created_at: '2020-07-01 14:15:16',
      fk_clinic: null,
      fk_patient: 114,
      start_date: '2020-07-29T19:09:50.658Z',
      end_date: '2020-07-29T19:09:50.658Z',
      fk_end_justify_type: null,
      patient_weight_kg: '50.00',
      patient_height_cm: 170,
      patient_diabetes_type: 1,
      patient_diagnosed_time: '0',
      hyper_limit: 180,
      hypo_limit: 70,
      info: null,
      fk_previous_bgl_monitoring_model: null,
      fk_insulin_infusion_type: null,
      fk_bolus_correction_type: null,
      fk_pump_model: null,
      diabetes_other: '',
      patient_diagnosed_time_type: 'year',
      requested_monitoring_days: 0,
      fk_bolus_insulin: null,
      fk_basal_insulin: null,
      fk_basal_infusion_type: null,
      fk_bolus_infusion_type: null,
      target_bgl: null,
      updated_at: '2020-07-01 14:15:16',
      deleted_at: null,
      start_monitoring_date: null,
      previous_bgl_monitoring_model: null,
      basalInfusionType: null,
      basalInsulin: null,
      bolusInfusionType: null,
      bolusInsulin: null,
    },
    doctor: {
      name: 'Dr Teste',
      id: 106,
    },
    basalIns: {
      id: 300,
      fk_exam: 107,
      morning: null,
      lunch: null,
      dinner: null,
      bedtime: null,
    },
    bolusIns: {
      id: 300,
      fk_exam: 107,
      morning: null,
      morning_snack: null,
      lunch: null,
      lunch_snack: null,
      dinner: null,
      after_dinner: null,
    },
    CHOCountBasal: [],
    basalRate: [],
    medicine: [],
    glycemicTarget: [],
    physiologicalState: [],
    comorbidities: [],
    complications: [],
  },
  reportStartDate: '2020/06/29',
  reportEndDate: '2020/07/29',
  period: {
    start_date: '2020-06-29 23:27',
    end_date: '2020-07-29 23:27',
  },
};

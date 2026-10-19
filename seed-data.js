window.ZZZSeedData = {
  "meta": {
    "generatedAt": "2026-04-23T19:27:04.581Z",
    "referenceDate": "2026-04-22T16:00:00.000Z",
    "sources": {
      "characterMaster": "https://static.nanoka.cc/zzz/2.8.4+15072520/character.json",
      "weaponMaster": "https://static.nanoka.cc/zzz/2.8.4+15072520/weapon.json",
      "bangbooMaster": "https://static.nanoka.cc/zzz/2.8.4+15072520/bangboo.json",
      "shiyuMaster": "https://static.nanoka.cc/zzz/2.8.4+15072520/shiyu.json",
      "deadlyMaster": "https://static.nanoka.cc/zzz/2.8.4+15072520/boss.json"
    },
    "notes": [
      "Season data is sourced from Nanoka static JSON payloads.",
      "Submission options should only expose active rotations.",
      "Standard-vs-limited pools are intentionally editable in this generated seed file if the game pool changes."
    ]
  },
  "config": {
    "costBrackets": [
      {
        "id": "all",
        "label": "All Costs",
        "min": 0,
        "max": null
      },
      {
        "id": "0-6",
        "label": "0-6 Cost",
        "min": 0,
        "max": 6
      },
      {
        "id": "7-12",
        "label": "7-12 Cost",
        "min": 7,
        "max": 12
      },
      {
        "id": "13-24",
        "label": "13-24 Cost",
        "min": 13,
        "max": 24
      },
      {
        "id": "25-36",
        "label": "25-36 Cost",
        "min": 25,
        "max": 36
      }
    ],
    "filters": [
      {
        "id": "all",
        "label": "All Runs"
      },
      {
        "id": "full-score",
        "label": "Full Score"
      },
      {
        "id": "highest-rank",
        "label": "Highest Rank"
      },
      {
        "id": "boss-killed",
        "label": "Boss Killed"
      }
    ],
    "sortModes": [
      {
        "id": "limited-cost",
        "label": "Limited Cost"
      },
      {
        "id": "score",
        "label": "Score"
      },
      {
        "id": "time",
        "label": "Time Taken"
      },
      {
        "id": "submitted-at",
        "label": "Date Submitted"
      }
    ],
    "mindscapeOptions": [
      {
        "value": 0,
        "label": "M0"
      },
      {
        "value": 1,
        "label": "M1"
      },
      {
        "value": 2,
        "label": "M2"
      },
      {
        "value": 3,
        "label": "M3"
      },
      {
        "value": 4,
        "label": "M4"
      },
      {
        "value": 5,
        "label": "M5"
      },
      {
        "value": 6,
        "label": "M6"
      }
    ],
    "phaseOptions": [
      {
        "value": 1,
        "label": "P1"
      },
      {
        "value": 2,
        "label": "P2"
      },
      {
        "value": 3,
        "label": "P3"
      },
      {
        "value": 4,
        "label": "P4"
      },
      {
        "value": 5,
        "label": "P5"
      }
    ],
    "modes": [
      {
        "id": "Deadly Assault",
        "label": "Deadly Assault"
      },
      {
        "id": "Deadly Assault: Adversity Mode",
        "label": "Deadly Assault: Adversity Mode"
      },
      {
        "id": "Shiyu Defense",
        "label": "Shiyu Defense"
      },
      {
        "id": "Annihilation Simulacrum",
        "label": "Annihilation Simulacrum"
      }
    ]
  },
  "characters": [
    {
      "id": "1401",
      "name": "Alice",
      "zhName": "爱丽丝",
      "codename": "Alice",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attribute": "Physical",
      "attackType": "Slash",
      "iconCode": "IconRole46"
    },
    {
      "id": "1011",
      "name": "Anby",
      "zhName": "安比",
      "codename": "Anby",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Stun",
      "attribute": "Electric",
      "attackType": "Slash",
      "iconCode": "IconRole01"
    },
    {
      "id": "1111",
      "name": "Anton",
      "zhName": "安东",
      "codename": "Anton",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Attack",
      "attribute": "Electric",
      "attackType": "Pierce",
      "iconCode": "IconRole15"
    },
    {
      "id": "1501",
      "name": "Aria",
      "zhName": "爱芮",
      "codename": "Aria",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attribute": "Ether",
      "attackType": "Strike",
      "iconCode": "IconRole57"
    },
    {
      "id": "1311",
      "name": "Astra Yao",
      "zhName": "耀嘉音",
      "codename": "Astra",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Support",
      "attribute": "Ether",
      "attackType": "Strike",
      "iconCode": "IconRole36"
    },
    {
      "id": "1471",
      "name": "Banyue",
      "zhName": "般岳",
      "codename": "Banyue",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Rupture",
      "attribute": "Fire",
      "attackType": "Strike",
      "iconCode": "IconRole53"
    },
    {
      "id": "1121",
      "name": "Ben",
      "zhName": "本",
      "codename": "Ben",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Defense",
      "attribute": "Fire",
      "attackType": "Strike",
      "iconCode": "IconRole16"
    },
    {
      "id": "1081",
      "name": "Billy",
      "zhName": "比利",
      "codename": "Billy",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Attack",
      "attribute": "Physical",
      "attackType": "Pierce",
      "iconCode": "IconRole10"
    },
    {
      "id": "1171",
      "name": "Burnice",
      "zhName": "柏妮思",
      "codename": "Burnice",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attribute": "Fire",
      "attackType": "Pierce",
      "iconCode": "IconRole32"
    },
    {
      "id": "1071",
      "name": "Caesar",
      "zhName": "凯撒",
      "codename": "Caesar",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Defense",
      "attribute": "Physical",
      "attackType": "Slash",
      "iconCode": "IconRole25"
    },
    {
      "id": "1521",
      "name": "Cissia",
      "zhName": "希希芙",
      "codename": "Cissia",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attribute": "Electric",
      "attackType": "Slash",
      "iconCode": "IconRole60"
    },
    {
      "id": "1611",
      "name": "Claret",
      "zhName": "克拉蕾",
      "codename": "Claret",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Armorer",
      "attribute": "Electric",
      "attackType": "Slash",
      "iconCode": "IconRole1611"
    },
    {
      "id": "1061",
      "name": "Corin",
      "zhName": "可琳",
      "codename": "Corin",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Attack",
      "attribute": "Physical",
      "attackType": "Slash",
      "iconCode": "IconRole09"
    },
    {
      "id": "1481",
      "name": "Dialyn",
      "zhName": "琉音",
      "codename": "Dialyn",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Stun",
      "attribute": "Physical",
      "attackType": "Slash",
      "iconCode": "IconRole54"
    },
    {
      "id": "1191",
      "name": "Ellen",
      "zhName": "艾莲",
      "codename": "Ellen",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attribute": "Ice",
      "attackType": "Slash",
      "iconCode": "IconRole21"
    },
    {
      "id": "1321",
      "name": "Evelyn",
      "zhName": "伊芙琳",
      "codename": "Evelyn",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attribute": "Fire",
      "attackType": "Slash",
      "iconCode": "IconRole37"
    },
    {
      "id": "1181",
      "name": "Grace",
      "zhName": "格莉丝",
      "codename": "Grace",
      "rarity": "S",
      "poolType": "standard",
      "specialty": "Anomaly",
      "attribute": "Electric",
      "attackType": "Pierce",
      "iconCode": "IconRole20"
    },
    {
      "id": "1201",
      "name": "Harumasa",
      "zhName": "悠真",
      "codename": "Harumasa",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attribute": "Electric",
      "attackType": "Pierce",
      "iconCode": "IconRole35"
    },
    {
      "id": "1291",
      "name": "Hugo",
      "zhName": "雨果",
      "codename": "Hugo",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attribute": "Ice",
      "attackType": "Slash",
      "iconCode": "IconRole42"
    },
    {
      "id": "1261",
      "name": "Jane",
      "zhName": "简",
      "codename": "Jane",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attribute": "Physical",
      "attackType": "Slash",
      "iconCode": "IconRole24"
    },
    {
      "id": "1391",
      "name": "Ju Fufu",
      "zhName": "橘福福",
      "codename": "Ju Fufu",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Stun",
      "attribute": "Fire",
      "attackType": "Strike",
      "iconCode": "IconRole43"
    },
    {
      "id": "1101",
      "name": "Koleda",
      "zhName": "珂蕾妲",
      "codename": "Koleda",
      "rarity": "S",
      "poolType": "standard",
      "specialty": "Stun",
      "attribute": "Fire",
      "attackType": "Strike",
      "iconCode": "IconRole14"
    },
    {
      "id": "1161",
      "name": "Lighter",
      "zhName": "莱特",
      "codename": "Lighter",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Stun",
      "attribute": "Fire",
      "attackType": "Strike",
      "iconCode": "IconRole26"
    },
    {
      "id": "1451",
      "name": "Lucia",
      "zhName": "卢西娅",
      "codename": "Lucia",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Support",
      "attribute": "Ether",
      "attackType": "Strike",
      "iconCode": "IconRole50"
    },
    {
      "id": "1151",
      "name": "Lucy",
      "zhName": "露西",
      "codename": "Lucy",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Support",
      "attribute": "Fire",
      "attackType": "Strike",
      "iconCode": "IconRole27"
    },
    {
      "id": "1141",
      "name": "Lycaon",
      "zhName": "莱卡恩",
      "codename": "Lycaon",
      "rarity": "S",
      "poolType": "standard",
      "specialty": "Stun",
      "attribute": "Ice",
      "attackType": "Strike",
      "iconCode": "IconRole18"
    },
    {
      "id": "1441",
      "name": "Manato",
      "zhName": "真斗",
      "codename": "Manato",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Rupture",
      "attribute": "Fire",
      "attackType": "Slash",
      "iconCode": "IconRole51"
    },
    {
      "id": "1091",
      "name": "Miyabi",
      "zhName": "雅",
      "codename": "Miyabi",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attribute": "Ice",
      "attackType": "Slash",
      "iconCode": "IconRole13"
    },
    {
      "id": "1511",
      "name": "Nangong Yu",
      "zhName": "南宫羽",
      "codename": "NangongYu",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Stun",
      "attribute": "Ether",
      "attackType": "Strike",
      "iconCode": "IconRole59"
    },
    {
      "id": "1021",
      "name": "Nekomata",
      "zhName": "猫又",
      "codename": "Nekomata",
      "rarity": "S",
      "poolType": "standard",
      "specialty": "Attack",
      "attribute": "Physical",
      "attackType": "Slash",
      "iconCode": "IconRole11"
    },
    {
      "id": "1031",
      "name": "Nicole",
      "zhName": "妮可",
      "codename": "Nicole",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Support",
      "attribute": "Ether",
      "attackType": "Strike",
      "iconCode": "IconRole12"
    },
    {
      "id": "1571",
      "name": "Norma",
      "zhName": "诺姆",
      "codename": "Avatar_Female_Size01_Norma_En",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Stun",
      "attribute": "Fire",
      "attackType": "Strike",
      "iconCode": "IconRole65"
    },
    {
      "id": "1301",
      "name": "Orphie & Magus",
      "zhName": "奥菲丝&「鬼火」",
      "codename": "Orphie & Magus",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attribute": "Fire",
      "attackType": "Pierce",
      "iconCode": "IconRole49"
    },
    {
      "id": "1421",
      "name": "Pan Yinhu",
      "zhName": "潘引壶",
      "codename": "Yinhu",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Defense",
      "attribute": "Physical",
      "attackType": "Strike",
      "iconCode": "IconRole45"
    },
    {
      "id": "1641",
      "name": "Phoenix",
      "zhName": "菲欧妮",
      "codename": "Pheony",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attribute": "Fire",
      "attackType": "Slash",
      "iconCode": "IconRole1641"
    },
    {
      "id": "1281",
      "name": "Piper",
      "zhName": "派派",
      "codename": "Piper",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Anomaly",
      "attribute": "Physical",
      "attackType": "Slash",
      "iconCode": "IconRole28"
    },
    {
      "id": "1541",
      "name": "Promeia",
      "zhName": "普罗米娅",
      "codename": "Avatar_Female_Size03_Promeia_En",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attribute": "Ice",
      "attackType": "Slash",
      "iconCode": "IconRole61"
    },
    {
      "id": "1351",
      "name": "Pulchra",
      "zhName": "波可娜",
      "codename": "Pulchra",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Stun",
      "attribute": "Physical",
      "attackType": "Slash",
      "iconCode": "IconRole38"
    },
    {
      "id": "1551",
      "name": "Pyrois",
      "zhName": "佩洛伊斯",
      "codename": "Pyrois",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attribute": "Ether",
      "attackType": "Slash",
      "iconCode": "IconRole63"
    },
    {
      "id": "1251",
      "name": "Qingyi",
      "zhName": "青衣",
      "codename": "QingYi",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Stun",
      "attribute": "Electric",
      "attackType": "Strike",
      "iconCode": "IconRole29"
    },
    {
      "id": "1581",
      "name": "Remielle",
      "zhName": "蕾米埃尔",
      "codename": "Remielle",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attribute": "Lumiflux",
      "attackType": "Slash",
      "iconCode": "IconRole67"
    },
    {
      "id": "1211",
      "name": "Rina",
      "zhName": "丽娜",
      "codename": "Rina",
      "rarity": "S",
      "poolType": "standard",
      "specialty": "Support",
      "attribute": "Electric",
      "attackType": "Strike",
      "iconCode": "IconRole22"
    },
    {
      "id": "1621",
      "name": "Roxy",
      "zhName": "洛克茜",
      "codename": "Roxy",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Stun",
      "attribute": "Wind",
      "attackType": "Strike",
      "iconCode": "IconRole68"
    },
    {
      "id": "1461",
      "name": "Seed",
      "zhName": "「席德」",
      "codename": "Seed",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attribute": "Electric",
      "attackType": "Slash",
      "iconCode": "IconRole48"
    },
    {
      "id": "1271",
      "name": "Seth",
      "zhName": "赛斯",
      "codename": "Seth",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Defense",
      "attribute": "Electric",
      "attackType": "Slash",
      "iconCode": "IconRole30"
    },
    {
      "id": "1631",
      "name": "Severian",
      "zhName": "赛维里安",
      "codename": "Severian",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attribute": "Wind",
      "attackType": "Slash",
      "iconCode": "IconRole1631"
    },
    {
      "id": "1591",
      "name": "Sigrid",
      "zhName": "希格莉德",
      "codename": "Avatar_Female_Size03_Sigrid_En",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attribute": "Ice",
      "attackType": "Pierce",
      "iconCode": "IconRole66"
    },
    {
      "id": "1381",
      "name": "Soldier 0 - Anby",
      "zhName": "零号·安比",
      "codename": "Soldier 0 - Anby",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attribute": "Electric",
      "attackType": "Slash",
      "iconCode": "IconRole40"
    },
    {
      "id": "1041",
      "name": "Soldier 11",
      "zhName": "「11号」",
      "codename": "Soldier 11",
      "rarity": "S",
      "poolType": "standard",
      "specialty": "Attack",
      "attribute": "Fire",
      "attackType": "Slash",
      "iconCode": "IconRole05"
    },
    {
      "id": "1131",
      "name": "Soukaku",
      "zhName": "苍角",
      "codename": "Soukaku",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Support",
      "attribute": "Ice",
      "attackType": "Slash",
      "iconCode": "IconRole17"
    },
    {
      "id": "1531",
      "name": "Starlight - Billy",
      "zhName": "星徽·比利",
      "codename": "Starlight - Billy",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Rupture",
      "attribute": "Physical",
      "attackType": "Slash",
      "iconCode": "IconRole62"
    },
    {
      "id": "1491",
      "name": "Sunna",
      "zhName": "千夏",
      "codename": "Sunna",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Support",
      "attribute": "Physical",
      "attackType": "Strike",
      "iconCode": "IconRole58"
    },
    {
      "id": "1361",
      "name": "Trigger",
      "zhName": "「扳机」",
      "codename": "Trigger",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Stun",
      "attribute": "Electric",
      "attackType": "Pierce",
      "iconCode": "IconRole39"
    },
    {
      "id": "1561",
      "name": "Velina",
      "zhName": "维琳娜",
      "codename": "Avatar_Female_Size03_Velina_En",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attribute": "Wind",
      "attackType": "Slash",
      "iconCode": "IconRole64"
    },
    {
      "id": "1331",
      "name": "Vivian",
      "zhName": "薇薇安",
      "codename": "Vivian",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attribute": "Ether",
      "attackType": "Slash",
      "iconCode": "IconRole41"
    },
    {
      "id": "1221",
      "name": "Yanagi",
      "zhName": "柳",
      "codename": "Yanagi",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attribute": "Electric",
      "attackType": "Slash",
      "iconCode": "IconRole31"
    },
    {
      "id": "1431",
      "name": "Ye Shunguang",
      "zhName": "叶瞬光",
      "codename": "Ye Shunguang",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attribute": "Physical",
      "attackType": "Slash",
      "iconCode": "IconRole55"
    },
    {
      "id": "1051",
      "name": "Yidhari",
      "zhName": "伊德海莉",
      "codename": "Yidhari",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Rupture",
      "attribute": "Ice",
      "attackType": "Strike",
      "iconCode": "IconRole52"
    },
    {
      "id": "1371",
      "name": "Yixuan",
      "zhName": "仪玄",
      "codename": "YiXuan",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Rupture",
      "attribute": "Ether",
      "attackType": "Strike",
      "iconCode": "IconRole44"
    },
    {
      "id": "1411",
      "name": "Yuzuha",
      "zhName": "柚叶",
      "codename": "Yuzuha",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Support",
      "attribute": "Physical",
      "attackType": "Strike",
      "iconCode": "IconRole47"
    },
    {
      "id": "1341",
      "name": "Zhao",
      "zhName": "照",
      "codename": "Zhao",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Defense",
      "attribute": "Ice",
      "attackType": "Slash",
      "iconCode": "IconRole56"
    },
    {
      "id": "1241",
      "name": "Zhu Yuan",
      "zhName": "朱鸢",
      "codename": "Zhu Yuan",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attribute": "Ether",
      "attackType": "Pierce",
      "iconCode": "IconRole23"
    }
  ],
  "weapons": [
    {
      "id": "12015",
      "name": "[Cinder] Cobalt",
      "zhName": "「灰烬」-钴蓝",
      "rarity": "B",
      "poolType": "none",
      "specialty": "Rupture",
      "attack": 475,
      "subStat": "HP",
      "iconCode": "Weapon_B_Common_15"
    },
    {
      "id": "12013",
      "name": "[Identity] Base",
      "zhName": "「恒等式」-本格",
      "rarity": "B",
      "poolType": "none",
      "specialty": "Defense",
      "attack": 475,
      "subStat": "DEF",
      "iconCode": "Weapon_B_Common_13"
    },
    {
      "id": "12014",
      "name": "[Identity] Inflection",
      "zhName": "「恒等式」-变格",
      "rarity": "B",
      "poolType": "none",
      "specialty": "Defense",
      "attack": 475,
      "subStat": "DEF",
      "iconCode": "Weapon_B_Common_14"
    },
    {
      "id": "12002",
      "name": "[Lunar] Decrescent",
      "zhName": "「月相」-晦",
      "rarity": "B",
      "poolType": "none",
      "specialty": "Attack",
      "attack": 475,
      "subStat": "ATK",
      "iconCode": "Weapon_B_Common_02"
    },
    {
      "id": "12003",
      "name": "[Lunar] Noviluna",
      "zhName": "「月相」-朔",
      "rarity": "B",
      "poolType": "none",
      "specialty": "Attack",
      "attack": 475,
      "subStat": "CRIT Rate",
      "iconCode": "Weapon_B_Common_03"
    },
    {
      "id": "12001",
      "name": "[Lunar] Pleniluna",
      "zhName": "「月相」-望",
      "rarity": "B",
      "poolType": "none",
      "specialty": "Attack",
      "attack": 475,
      "subStat": "ATK",
      "iconCode": "Weapon_B_Common_01"
    },
    {
      "id": "12016",
      "name": "[Lunar] Semiluna",
      "zhName": "「月相」-弦",
      "rarity": "B",
      "poolType": "none",
      "specialty": "Armorer",
      "attack": 282,
      "subStat": "DEF",
      "subStatValue": "32%",
      "iconCode": "Weapon_B_Common_16"
    },
    {
      "id": "12010",
      "name": "[Magnetic Storm] Alpha",
      "zhName": "「电磁暴」-壹式",
      "rarity": "B",
      "poolType": "none",
      "specialty": "Anomaly",
      "attack": 475,
      "subStat": "ATK",
      "iconCode": "Weapon_B_Common_10"
    },
    {
      "id": "12011",
      "name": "[Magnetic Storm] Bravo",
      "zhName": "「电磁暴」-贰式",
      "rarity": "B",
      "poolType": "none",
      "specialty": "Anomaly",
      "attack": 475,
      "subStat": "Anomaly Proficiency",
      "iconCode": "Weapon_B_Common_11"
    },
    {
      "id": "12012",
      "name": "[Magnetic Storm] Charlie",
      "zhName": "「电磁暴」-叁式",
      "rarity": "B",
      "poolType": "none",
      "specialty": "Anomaly",
      "attack": 475,
      "subStat": "PEN Ratio",
      "iconCode": "Weapon_B_Common_12"
    },
    {
      "id": "12004",
      "name": "[Reverb] Mark I",
      "zhName": "「残响」-Ⅰ型",
      "rarity": "B",
      "poolType": "none",
      "specialty": "Support",
      "attack": 475,
      "subStat": "ATK",
      "iconCode": "Weapon_B_Common_04"
    },
    {
      "id": "12005",
      "name": "[Reverb] Mark II",
      "zhName": "「残响」-Ⅱ型",
      "rarity": "B",
      "poolType": "none",
      "specialty": "Support",
      "attack": 475,
      "subStat": "Energy Regen",
      "iconCode": "Weapon_B_Common_05"
    },
    {
      "id": "12006",
      "name": "[Reverb] Mark III",
      "zhName": "「残响」-Ⅲ型",
      "rarity": "B",
      "poolType": "none",
      "specialty": "Support",
      "attack": 475,
      "subStat": "HP",
      "iconCode": "Weapon_B_Common_06"
    },
    {
      "id": "12008",
      "name": "[Vortex] Arrow",
      "zhName": "「湍流」-矢型",
      "rarity": "B",
      "poolType": "none",
      "specialty": "Stun",
      "attack": 475,
      "subStat": "Impact",
      "iconCode": "Weapon_B_Common_08"
    },
    {
      "id": "12009",
      "name": "[Vortex] Hatchet",
      "zhName": "「湍流」-斧型",
      "rarity": "B",
      "poolType": "none",
      "specialty": "Stun",
      "attack": 475,
      "subStat": "Energy Regen",
      "iconCode": "Weapon_B_Common_09"
    },
    {
      "id": "12007",
      "name": "[Vortex] Revolver",
      "zhName": "「湍流」-铳型",
      "rarity": "B",
      "poolType": "none",
      "specialty": "Stun",
      "attack": 475,
      "subStat": "ATK",
      "iconCode": "Weapon_B_Common_07"
    },
    {
      "id": "14150",
      "name": "Angel in the Shell",
      "zhName": "壳中之灵",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attack": 713,
      "subStat": "Anomaly Mastery",
      "iconCode": "Weapon_S_1501"
    },
    {
      "id": "13113",
      "name": "Bashful Demon",
      "zhName": "含羞恶面",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Support",
      "attack": 624,
      "subStat": "ATK",
      "iconCode": "Weapon_A_1131"
    },
    {
      "id": "14130",
      "name": "Bellicose Blaze",
      "zhName": "嚣枪喧焰",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attack": 713,
      "subStat": "Energy Regen",
      "iconCode": "Weapon_S_1301"
    },
    {
      "id": "13112",
      "name": "Big Cylinder",
      "zhName": "比格气缸",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Defense",
      "attack": 624,
      "subStat": "DEF",
      "iconCode": "Weapon_A_1121"
    },
    {
      "id": "14116",
      "name": "Blazing Laurel",
      "zhName": "焰心桂冠",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Stun",
      "attack": 713,
      "subStat": "Impact",
      "iconCode": "Weapon_S_1161"
    },
    {
      "id": "13021",
      "name": "Bloodmarrow Coffer",
      "zhName": "血髓秘匣",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Armorer",
      "attack": 356,
      "subStat": "CRIT Rate",
      "subStatValue": "20%",
      "iconCode": "Weapon_A_Common_21"
    },
    {
      "id": "13018",
      "name": "Boisterous Echoes",
      "zhName": "咚哒回声",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Anomaly",
      "attack": 594,
      "subStat": "Anomaly Proficiency",
      "iconCode": "Weapon_A_Common_18"
    },
    {
      "id": "13135",
      "name": "Box Cutter",
      "zhName": "裁纸刀",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Stun",
      "attack": 624,
      "subStat": "Impact",
      "iconCode": "Weapon_A_1351"
    },
    {
      "id": "13010",
      "name": "Bunny Band",
      "zhName": "兔能环",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Defense",
      "attack": 594,
      "subStat": "DEF",
      "iconCode": "Weapon_A_Common_10"
    },
    {
      "id": "13022",
      "name": "Candlelit Scheme",
      "zhName": "烛光诡计",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Armorer",
      "attack": 356,
      "subStat": "DEF",
      "subStatValue": "40%",
      "iconCode": "Weapon_A_Common_22"
    },
    {
      "id": "14001",
      "name": "Cannon Rotor",
      "zhName": "加农转子",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Attack",
      "attack": 594,
      "subStat": "CRIT Rate",
      "iconCode": "Weapon_S_Common_01"
    },
    {
      "id": "13017",
      "name": "Catty Luck",
      "zhName": "喵运当头",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Armorer",
      "attack": 356,
      "subStat": "DEF",
      "subStatValue": "40%",
      "iconCode": "Weapon_A_Common_17"
    },
    {
      "id": "13019",
      "name": "Cauldron of Clarity",
      "zhName": "青漪灵鼎",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Rupture",
      "attack": 594,
      "subStat": "HP",
      "iconCode": "Weapon_A_Common_19"
    },
    {
      "id": "14143",
      "name": "Cloudcleave Radiance",
      "zhName": "云霓孤光",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attack": 743,
      "subStat": "CRIT DMG",
      "iconCode": "Weapon_S_1431"
    },
    {
      "id": "14146",
      "name": "Cordis Germina",
      "zhName": "机巧心种",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attack": 713,
      "subStat": "CRIT Rate",
      "iconCode": "Weapon_S_1461"
    },
    {
      "id": "14162",
      "name": "Crimson Moon Casket",
      "zhName": "绯月银棺",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Stun",
      "attack": 713,
      "subStat": "Energy Regen",
      "subStatValue": "60%",
      "iconCode": "Weapon_S_1621"
    },
    {
      "id": "14161",
      "name": "Crimson Thirst",
      "zhName": "猩红渴望",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Armorer",
      "attack": 431,
      "subStat": "DEF",
      "subStatValue": "48%",
      "iconCode": "Weapon_S_1611"
    },
    {
      "id": "14119",
      "name": "Deep Sea Visitor",
      "zhName": "深海访客",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attack": 713,
      "subStat": "CRIT Rate",
      "iconCode": "Weapon_S_1191"
    },
    {
      "id": "13101",
      "name": "Demara Battery Mark II",
      "zhName": "德玛拉电池Ⅱ型",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Stun",
      "attack": 624,
      "subStat": "Impact",
      "iconCode": "Weapon_A_1011"
    },
    {
      "id": "14145",
      "name": "Dreamlit Hearth",
      "zhName": "铸梦炉歌",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Support",
      "attack": 713,
      "subStat": "HP",
      "iconCode": "Weapon_S_1451"
    },
    {
      "id": "13111",
      "name": "Drill Rig - Red Axis",
      "zhName": "旋钻机-赤轴",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Attack",
      "attack": 624,
      "subStat": "Energy Regen",
      "iconCode": "Weapon_A_1111"
    },
    {
      "id": "13009",
      "name": "Electro-Lip Gloss",
      "zhName": "触电唇彩",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Anomaly",
      "attack": 594,
      "subStat": "Anomaly Proficiency",
      "iconCode": "Weapon_A_Common_09"
    },
    {
      "id": "14131",
      "name": "Elegant Vanity",
      "zhName": "玲珑妆匣",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Support",
      "attack": 713,
      "subStat": "ATK",
      "iconCode": "Weapon_S_1311"
    },
    {
      "id": "14117",
      "name": "Flamemaker Shaker",
      "zhName": "灼心摇壶",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attack": 713,
      "subStat": "ATK",
      "iconCode": "Weapon_S_1171"
    },
    {
      "id": "14133",
      "name": "Flight of Fancy",
      "zhName": "飞鸟星梦",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attack": 713,
      "subStat": "Anomaly Proficiency",
      "iconCode": "Weapon_S_1331"
    },
    {
      "id": "14154",
      "name": "Frostfall Sickle",
      "zhName": "朔月裁霜",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attack": 713,
      "subStat": "Anomaly Mastery",
      "iconCode": "Weapon_S_1541"
    },
    {
      "id": "14118",
      "name": "Fusion Compiler",
      "zhName": "嵌合编译器",
      "rarity": "S",
      "poolType": "standard",
      "specialty": "Anomaly",
      "attack": 684,
      "subStat": "PEN Ratio",
      "iconCode": "Weapon_S_1181"
    },
    {
      "id": "13013",
      "name": "Gilded Blossom",
      "zhName": "鎏金花信",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Attack",
      "attack": 594,
      "subStat": "ATK",
      "iconCode": "Weapon_A_Common_13"
    },
    {
      "id": "13144",
      "name": "Grill O'Wisp",
      "zhName": "燔火胧夜",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Rupture",
      "attack": 624,
      "subStat": "HP",
      "iconCode": "Weapon_A_1441"
    },
    {
      "id": "14109",
      "name": "Hailstorm Shrine",
      "zhName": "霰落星殿",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attack": 743,
      "subStat": "CRIT Rate",
      "iconCode": "Weapon_S_1091"
    },
    {
      "id": "14134",
      "name": "Half-Sugar Bunny",
      "zhName": "半糖雪兔",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Defense",
      "attack": 713,
      "subStat": "HP",
      "iconCode": "Weapon_S_1341"
    },
    {
      "id": "14132",
      "name": "Heartstring Nocturne",
      "zhName": "心弦夜响",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attack": 713,
      "subStat": "CRIT Rate",
      "iconCode": "Weapon_S_1321"
    },
    {
      "id": "14157",
      "name": "Chief Sidekick",
      "zhName": "首席跟班",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Stun",
      "attack": 713,
      "subStat": "CRIT Rate",
      "iconCode": "Weapon_S_1571"
    },
    {
      "id": "14110",
      "name": "Hellfire Gears",
      "zhName": "燃狱齿轮",
      "rarity": "S",
      "poolType": "standard",
      "specialty": "Stun",
      "attack": 684,
      "subStat": "Impact",
      "iconCode": "Weapon_S_1101"
    },
    {
      "id": "13106",
      "name": "Housekeeper",
      "zhName": "家政员",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Attack",
      "attack": 624,
      "subStat": "ATK",
      "iconCode": "Weapon_A_1061"
    },
    {
      "id": "14125",
      "name": "Ice-Jade Teapot",
      "zhName": "玉壶青冰",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Stun",
      "attack": 713,
      "subStat": "Impact",
      "iconCode": "Weapon_S_1251"
    },
    {
      "id": "14163",
      "name": "Incarcerating Grip",
      "zhName": "禁罪囚笼",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attack": 713,
      "subStat": "CRIT Rate",
      "subStatValue": "24%",
      "iconCode": "Weapon_S_1631"
    },
    {
      "id": "14156",
      "name": "Joyau Dore",
      "zhName": "琳琅鎏心",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attack": 713,
      "subStat": "Energy Regen",
      "iconCode": "Weapon_S_1561"
    },
    {
      "id": "13115",
      "name": "Kaboom the Cannon",
      "zhName": "好斗的阿炮",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Support",
      "attack": 624,
      "subStat": "Energy Regen",
      "iconCode": "Weapon_A_1151"
    },
    {
      "id": "14159",
      "name": "Knight’s Extolment",
      "zhName": "骁骑礼赞",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attack": 713,
      "subStat": "CRIT DMG",
      "subStatValue": "48%",
      "iconCode": "Weapon_S_1591"
    },
    {
      "id": "14105",
      "name": "Kraken's Cradle",
      "zhName": "海妖摇篮",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Rupture",
      "attack": 713,
      "subStat": "HP",
      "iconCode": "Weapon_S_1051"
    },
    {
      "id": "13015",
      "name": "Marcato Desire",
      "zhName": "强音热望",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Attack",
      "attack": 594,
      "subStat": "CRIT Rate",
      "iconCode": "Weapon_A_Common_15"
    },
    {
      "id": "14141",
      "name": "Metanukimorphosis",
      "zhName": "狸法七变化",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Support",
      "attack": 713,
      "subStat": "Energy Regen",
      "iconCode": "Weapon_S_1411"
    },
    {
      "id": "14129",
      "name": "Myriad Eclipse",
      "zhName": "千面日陨",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attack": 713,
      "subStat": "CRIT Rate",
      "iconCode": "Weapon_S_1291"
    },
    {
      "id": "14151",
      "name": "Neon Fantasies",
      "zhName": "霓虹妄想",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Stun",
      "attack": 713,
      "subStat": "Anomaly Mastery",
      "iconCode": "Weapon_S_1511"
    },
    {
      "id": "14158",
      "name": "Ode of Resurrected Wings",
      "zhName": "空羽复归之诗",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attack": 743,
      "subStat": "ATK",
      "subStatValue": "36%",
      "iconCode": "Weapon_S_1581"
    },
    {
      "id": "13007",
      "name": "Original Transmorpher",
      "zhName": "正版变身器",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Defense",
      "attack": 594,
      "subStat": "HP",
      "iconCode": "Weapon_A_Common_07"
    },
    {
      "id": "13127",
      "name": "Peacekeeper - Specialized",
      "zhName": "维序者-特化型",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Defense",
      "attack": 624,
      "subStat": "ATK",
      "iconCode": "Weapon_A_1271"
    },
    {
      "id": "14164",
      "name": "Plume of Rebirth",
      "zhName": "涅槃初翎",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attack": 713,
      "subStat": "Anomaly Mastery",
      "subStatValue": "30%",
      "iconCode": "Weapon_S_1641"
    },
    {
      "id": "14140",
      "name": "Practiced Perfection",
      "zhName": "十方锻星",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attack": 713,
      "subStat": "ATK",
      "iconCode": "Weapon_S_1401"
    },
    {
      "id": "13006",
      "name": "Precious Fossilized Core",
      "zhName": "贵重骨核",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Stun",
      "attack": 594,
      "subStat": "Impact",
      "iconCode": "Weapon_A_Common_06"
    },
    {
      "id": "13012",
      "name": "Puzzle Sphere",
      "zhName": "幻变魔方",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Rupture",
      "attack": 594,
      "subStat": "ATK",
      "iconCode": "Weapon_A_Common_12"
    },
    {
      "id": "14137",
      "name": "Qingming Birdcage",
      "zhName": "青溟笼舍",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Rupture",
      "attack": 743,
      "subStat": "HP",
      "iconCode": "Weapon_S_1371"
    },
    {
      "id": "13014",
      "name": "Radiowave Journey",
      "zhName": "电波漫步",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Rupture",
      "attack": 594,
      "subStat": "HP",
      "iconCode": "Weapon_A_Common_14"
    },
    {
      "id": "13003",
      "name": "Rainforest Gourmet",
      "zhName": "雨林饕客",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Anomaly",
      "attack": 594,
      "subStat": "Anomaly Proficiency",
      "iconCode": "Weapon_A_Common_03"
    },
    {
      "id": "13016",
      "name": "Reel Projector",
      "zhName": "光影刻刀",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Defense",
      "attack": 594,
      "subStat": "Impact",
      "iconCode": "Weapon_A_Common_16"
    },
    {
      "id": "14124",
      "name": "Riot Suppressor Mark VI",
      "zhName": "防暴者Ⅵ型",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attack": 713,
      "subStat": "CRIT DMG",
      "iconCode": "Weapon_S_1241"
    },
    {
      "id": "14139",
      "name": "Roaring Fur-nace",
      "zhName": "福虓炉炉",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Stun",
      "attack": 713,
      "subStat": "ATK",
      "iconCode": "Weapon_S_1391"
    },
    {
      "id": "13128",
      "name": "Roaring Ride",
      "zhName": "轰鸣座驾",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Anomaly",
      "attack": 624,
      "subStat": "ATK",
      "iconCode": "Weapon_A_1281"
    },
    {
      "id": "14152",
      "name": "Serpentine Seeker",
      "zhName": "鳞齿寻踪",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attack": 713,
      "subStat": "Energy Regen",
      "iconCode": "Weapon_S_1521"
    },
    {
      "id": "14138",
      "name": "Severed Innocence",
      "zhName": "牺牲洁纯",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attack": 713,
      "subStat": "CRIT DMG",
      "iconCode": "Weapon_S_1381"
    },
    {
      "id": "14126",
      "name": "Sharpened Stinger",
      "zhName": "淬锋钳刺",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attack": 713,
      "subStat": "Anomaly Proficiency",
      "iconCode": "Weapon_S_1261"
    },
    {
      "id": "14003",
      "name": "Six Shooter",
      "zhName": "左轮转子",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Stun",
      "attack": 594,
      "subStat": "Impact",
      "iconCode": "Weapon_S_Common_03"
    },
    {
      "id": "13002",
      "name": "Slice of Time",
      "zhName": "时光切片",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Support",
      "attack": 594,
      "subStat": "PEN Ratio",
      "iconCode": "Weapon_A_Common_02"
    },
    {
      "id": "14155",
      "name": "Sol Exuvia",
      "zhName": "日冕遗蜕",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attack": 713,
      "subStat": "CRIT DMG",
      "iconCode": "Weapon_S_Common_04"
    },
    {
      "id": "14136",
      "name": "Spectral Gaze",
      "zhName": "索魂影眸",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Stun",
      "attack": 713,
      "subStat": "CRIT Rate",
      "iconCode": "Weapon_S_1361"
    },
    {
      "id": "13011",
      "name": "Spring Embrace",
      "zhName": "春日融融",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Defense",
      "attack": 594,
      "subStat": "ATK",
      "iconCode": "Weapon_A_Common_11"
    },
    {
      "id": "13004",
      "name": "Starlight Engine",
      "zhName": "星徽引擎",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Attack",
      "attack": 594,
      "subStat": "ATK",
      "iconCode": "Weapon_A_Common_04"
    },
    {
      "id": "13108",
      "name": "Starlight Engine Replica",
      "zhName": "仿制星徽引擎",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Attack",
      "attack": 624,
      "subStat": "ATK",
      "iconCode": "Weapon_A_1081"
    },
    {
      "id": "14153",
      "name": "Starlight Rider Faceplate",
      "zhName": "辉骑面铠",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Rupture",
      "attack": 713,
      "subStat": "HP",
      "iconCode": "Weapon_S_1531"
    },
    {
      "id": "13005",
      "name": "Steam Oven",
      "zhName": "人为刀俎",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Stun",
      "attack": 594,
      "subStat": "Energy Regen",
      "iconCode": "Weapon_A_Common_05"
    },
    {
      "id": "14102",
      "name": "Steel Cushion",
      "zhName": "钢铁肉垫",
      "rarity": "S",
      "poolType": "standard",
      "specialty": "Attack",
      "attack": 684,
      "subStat": "CRIT Rate",
      "iconCode": "Weapon_S_1021"
    },
    {
      "id": "13001",
      "name": "Street Superstar",
      "zhName": "街头巨星",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Attack",
      "attack": 594,
      "subStat": "ATK",
      "iconCode": "Weapon_A_Common_01"
    },
    {
      "id": "14104",
      "name": "The Brimstone",
      "zhName": "硫磺石",
      "rarity": "S",
      "poolType": "standard",
      "specialty": "Attack",
      "attack": 684,
      "subStat": "ATK",
      "iconCode": "Weapon_S_1041"
    },
    {
      "id": "14114",
      "name": "The Restrained",
      "zhName": "拘缚者",
      "rarity": "S",
      "poolType": "standard",
      "specialty": "Stun",
      "attack": 684,
      "subStat": "Impact",
      "iconCode": "Weapon_S_1141"
    },
    {
      "id": "13020",
      "name": "The Simmering Pot",
      "zhName": "炎炙沸釜",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Stun",
      "attack": 594,
      "subStat": "Impact",
      "iconCode": "Weapon_A_Common_20"
    },
    {
      "id": "13103",
      "name": "The Vault",
      "zhName": "聚宝箱",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Support",
      "attack": 624,
      "subStat": "Energy Regen",
      "iconCode": "Weapon_A_1031"
    },
    {
      "id": "14149",
      "name": "Thoughtbop",
      "zhName": "思络成歌",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Support",
      "attack": 713,
      "subStat": "Energy Regen",
      "iconCode": "Weapon_S_1491"
    },
    {
      "id": "14122",
      "name": "Timeweaver",
      "zhName": "时流贤者",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Anomaly",
      "attack": 713,
      "subStat": "ATK",
      "iconCode": "Weapon_S_1221"
    },
    {
      "id": "13142",
      "name": "Tremor Trigram Vessel",
      "zhName": "震元奇枢",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Defense",
      "attack": 624,
      "subStat": "ATK",
      "iconCode": "Weapon_A_1421"
    },
    {
      "id": "14107",
      "name": "Tusks of Fury",
      "zhName": "奔袭獠牙",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Defense",
      "attack": 713,
      "subStat": "Impact",
      "iconCode": "Weapon_S_1071"
    },
    {
      "id": "14002",
      "name": "Unfettered Game Ball",
      "zhName": "逍遥游球",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Support",
      "attack": 594,
      "subStat": "Energy Regen",
      "iconCode": "Weapon_S_Common_02"
    },
    {
      "id": "14121",
      "name": "Weeping Cradle",
      "zhName": "啜泣摇篮",
      "rarity": "S",
      "poolType": "standard",
      "specialty": "Support",
      "attack": 684,
      "subStat": "PEN Ratio",
      "iconCode": "Weapon_S_1211"
    },
    {
      "id": "13008",
      "name": "Weeping Gemini",
      "zhName": "双生泣星",
      "rarity": "A",
      "poolType": "none",
      "specialty": "Anomaly",
      "attack": 594,
      "subStat": "ATK",
      "iconCode": "Weapon_A_Common_08"
    },
    {
      "id": "14147",
      "name": "Wrathful Vajra",
      "zhName": "怒目金刚",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Rupture",
      "attack": 713,
      "subStat": "HP",
      "iconCode": "Weapon_S_1471"
    },
    {
      "id": "14148",
      "name": "Yesterday Calls",
      "zhName": "昨夜来电",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Stun",
      "attack": 713,
      "subStat": "CRIT Rate",
      "iconCode": "Weapon_S_1481"
    },
    {
      "id": "14120",
      "name": "Zanshin Herb Case",
      "zhName": "残心青囊",
      "rarity": "S",
      "poolType": "limited",
      "specialty": "Attack",
      "attack": 713,
      "subStat": "CRIT DMG",
      "iconCode": "Weapon_S_1201"
    }
  ],
  "bangboos": [
    {
      "id": "54014",
      "name": "Agent Gulliver",
      "zhName": "格列佛探员",
      "codename": "Agent Gulliver",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole28.png"
    },
    {
      "id": "54005",
      "name": "Amillion",
      "zhName": "艾米莉安",
      "codename": "Amillion",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole13.png"
    },
    {
      "id": "54023",
      "name": "Ariel",
      "zhName": "艾瑞儿",
      "codename": "Ariel",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole48.png"
    },
    {
      "id": "53008",
      "name": "Avocaboo",
      "zhName": "果核布",
      "codename": "Avocaboo",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole03.png"
    },
    {
      "id": "53013",
      "name": "Baddieboo",
      "zhName": "不良布",
      "codename": "Baddieboo",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole24.png"
    },
    {
      "id": "53006",
      "name": "Bagboo",
      "zhName": "纸袋布",
      "codename": "Bagboo",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole01.png"
    },
    {
      "id": "54013",
      "name": "Bangvolver",
      "zhName": "左轮布",
      "codename": "Bangvolver",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole23.png"
    },
    {
      "id": "54017",
      "name": "Belion",
      "zhName": "狮耶",
      "codename": "Belion",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole36.png"
    },
    {
      "id": "54010",
      "name": "Biggest Fan",
      "zhName": "阿饭",
      "codename": "BiggestFan",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole46.png"
    },
    {
      "id": "53019",
      "name": "Bild N. Boolok",
      "zhName": "乐玩布",
      "codename": "Bild N. Boolok",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole41.png"
    },
    {
      "id": "54020",
      "name": "Birkblick",
      "zhName": "比克布利克",
      "codename": "Birkblick",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole42.png"
    },
    {
      "id": "53009",
      "name": "Boollseye",
      "zhName": "飞靶布",
      "codename": "Boollseye",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole18.png"
    },
    {
      "id": "53021",
      "name": "Booltergeist",
      "zhName": "幽浮布",
      "codename": "Ghost",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole45.png"
    },
    {
      "id": "53012",
      "name": "Booressure",
      "zhName": "气压布",
      "codename": "Booressure",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole17.png"
    },
    {
      "id": "53015",
      "name": "Brawlerboo",
      "zhName": "格斗布",
      "codename": "Brawlerboo",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole29.png"
    },
    {
      "id": "54004",
      "name": "Butler",
      "zhName": "巴特勒",
      "codename": "Butler",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole09.png"
    },
    {
      "id": "53007",
      "name": "Cryboo",
      "zhName": "泪眼布",
      "codename": "Cryboo",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole02.png"
    },
    {
      "id": "54003",
      "name": "Devilboo",
      "zhName": "恶魔布",
      "codename": "Devilboo",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole14.png"
    },
    {
      "id": "53010",
      "name": "Electroboo",
      "zhName": "电击布",
      "codename": "Electroboo",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole16.png"
    },
    {
      "id": "53016",
      "name": "Excaliboo",
      "zhName": "圣剑布",
      "codename": "Excaliboo",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole39.png"
    },
    {
      "id": "53003",
      "name": "Exploreboo",
      "zhName": "寻宝布",
      "codename": "Exploreboo",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole06.png"
    },
    {
      "id": "53017",
      "name": "Knightboo",
      "zhName": "骑士布",
      "codename": "Knightboo",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole27.png"
    },
    {
      "id": "53002",
      "name": "Luckyboo",
      "zhName": "招财布",
      "codename": "Luckyboo",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole11.png"
    },
    {
      "id": "53011",
      "name": "Magnetiboo",
      "zhName": "磁力布",
      "codename": "Magnetiboo",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole21.png"
    },
    {
      "id": "54019",
      "name": "Mercury",
      "zhName": "「墨丘利」",
      "codename": "「Mercury」",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole38.png"
    },
    {
      "id": "54018",
      "name": "Miss Esme",
      "zhName": "艾丝弥小姐",
      "codename": "Miss Esme",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole37.png"
    },
    {
      "id": "54012",
      "name": "Officer Cui",
      "zhName": "阿崔巡查",
      "codename": "Officer Cui",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole25.png"
    },
    {
      "id": "53014",
      "name": "Overtimeboo",
      "zhName": "加班布",
      "codename": "Overtimeboo",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole32.png"
    },
    {
      "id": "53005",
      "name": "Paperboo",
      "zhName": "纸壳布",
      "codename": "Paperboo",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole04.png"
    },
    {
      "id": "53001",
      "name": "Penguinboo",
      "zhName": "企鹅布",
      "codename": "Penguinboo",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole12.png"
    },
    {
      "id": "54008",
      "name": "Plugboo",
      "zhName": "插头布",
      "codename": "Plugboo",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole19.png"
    },
    {
      "id": "54011",
      "name": "Red Moccus",
      "zhName": "赤红莫库斯",
      "codename": "Red Moccus",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole26.png"
    },
    {
      "id": "54009",
      "name": "Resonaboo",
      "zhName": "共鸣布",
      "codename": "Resonaboo",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole20.png"
    },
    {
      "id": "54016",
      "name": "Robin",
      "zhName": "罗宾",
      "codename": "Robin",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole31.png"
    },
    {
      "id": "54006",
      "name": "Rocketboo",
      "zhName": "飚速布",
      "codename": "Rocketboo",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole15.png"
    },
    {
      "id": "54002",
      "name": "Safety",
      "zhName": "阿全",
      "codename": "Safety",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole10.png"
    },
    {
      "id": "54001",
      "name": "Sharkboo",
      "zhName": "鲨牙布",
      "codename": "Sharkboo",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole07.png"
    },
    {
      "id": "54015",
      "name": "Snap",
      "zhName": "咔嚓仔",
      "codename": "Snap",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole30.png"
    },
    {
      "id": "54021",
      "name": "Sprout",
      "zhName": "芽芽",
      "codename": "Sprout",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole43.png"
    },
    {
      "id": "54022",
      "name": "Ultra Jake",
      "zhName": "超极杰克",
      "codename": "Ultra Jake",
      "rarity": "S",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole47.png"
    },
    {
      "id": "53004",
      "name": "Sumoboo",
      "zhName": "扑击布",
      "codename": "Sumoboo",
      "rarity": "A",
      "iconPath": "UI/Sprite/A1DynamicLoad/BangbooModGarage/UnPacker/BangbooRole/BangbooGarageRole05.png"
    }
  ],
  "seasons": {
    "deadlyAssault": [
      {
        "id": "69027",
        "mode": "Deadly Assault",
        "start": "2026-01-02 04:00:00",
        "end": "2026-01-16 03:59:59",
        "active": false,
        "rooms": [
          {
            "id": "69027-1",
            "seasonId": "69027",
            "stageNumber": 1,
            "roomName": "Primordial Nightmare - \"The Creator\"",
            "roomNameZh": "太初梦魇·「始主」",
            "label": "Deadly Assault 2026/01/02 - 2026/01/16 | Primordial Nightmare - \"The Creator\"",
            "shortLabel": "Primordial Nightmare - \"The Creator\"",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Physical"
            ],
            "primaryEnemy": "Primordial Nightmare - \"The Creator\"",
            "primaryEnemyZh": "太初梦魇·「始主」",
            "enemyNames": [
              "Primordial Nightmare - \"The Creator\""
            ],
            "enemyNamesZh": [
              "太初梦魇·「始主」"
            ]
          },
          {
            "id": "69027-2",
            "seasonId": "69027",
            "stageNumber": 2,
            "roomName": "Miasmic Fiend - Unfathomable",
            "roomNameZh": "秽息妖鬼·名可名",
            "label": "Deadly Assault 2026/01/02 - 2026/01/16 | Miasmic Fiend - Unfathomable",
            "shortLabel": "Miasmic Fiend - Unfathomable",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Physical",
              "Ether"
            ],
            "primaryEnemy": "Miasmic Fiend - Unfathomable",
            "primaryEnemyZh": "秽息妖鬼·名可名",
            "enemyNames": [
              "Miasmic Fiend - Unfathomable"
            ],
            "enemyNamesZh": [
              "秽息妖鬼·名可名"
            ]
          },
          {
            "id": "69027-3",
            "seasonId": "69027",
            "stageNumber": 3,
            "roomName": "Wandering Hunter",
            "roomNameZh": "彷徨猎手",
            "label": "Deadly Assault 2026/01/02 - 2026/01/16 | Wandering Hunter",
            "shortLabel": "Wandering Hunter",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Fire",
              "Ice"
            ],
            "primaryEnemy": "Wandering Hunter",
            "primaryEnemyZh": "彷徨猎手",
            "enemyNames": [
              "Wandering Hunter"
            ],
            "enemyNamesZh": [
              "彷徨猎手"
            ]
          }
        ]
      },
      {
        "id": "69028",
        "mode": "Deadly Assault",
        "start": "2026-01-16 04:00:00",
        "end": "2026-01-30 03:59:59",
        "active": false,
        "rooms": [
          {
            "id": "69028-1",
            "seasonId": "69028",
            "stageNumber": 1,
            "roomName": "The Defiler",
            "roomNameZh": "「亵渎者」",
            "label": "Deadly Assault 2026/01/16 - 2026/01/30 | The Defiler",
            "shortLabel": "The Defiler",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Physical",
              "Electric"
            ],
            "primaryEnemy": "The Defiler",
            "primaryEnemyZh": "「亵渎者」",
            "enemyNames": [
              "The Defiler"
            ],
            "enemyNamesZh": [
              "「亵渎者」"
            ]
          },
          {
            "id": "69028-2",
            "seasonId": "69028",
            "stageNumber": 2,
            "roomName": "Notorious - Marionette",
            "roomNameZh": "恶名·冥宁芙",
            "label": "Deadly Assault 2026/01/16 - 2026/01/30 | Notorious - Marionette",
            "shortLabel": "Notorious - Marionette",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Ice",
              "Ether"
            ],
            "primaryEnemy": "Notorious - Marionette",
            "primaryEnemyZh": "恶名·冥宁芙",
            "enemyNames": [
              "Notorious - Marionette"
            ],
            "enemyNamesZh": [
              "恶名·冥宁芙"
            ]
          },
          {
            "id": "69028-3",
            "seasonId": "69028",
            "stageNumber": 3,
            "roomName": "Miasma Priest",
            "roomNameZh": "秽息司祭",
            "label": "Deadly Assault 2026/01/16 - 2026/01/30 | Miasma Priest",
            "shortLabel": "Miasma Priest",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Ether"
            ],
            "primaryEnemy": "Miasma Priest",
            "primaryEnemyZh": "秽息司祭",
            "enemyNames": [
              "Miasma Priest"
            ],
            "enemyNamesZh": [
              "秽息司祭"
            ]
          }
        ]
      },
      {
        "id": "69029",
        "mode": "Deadly Assault",
        "start": "2026-01-30 04:00:00",
        "end": "2026-02-13 03:59:59",
        "active": false,
        "rooms": [
          {
            "id": "69029-1",
            "seasonId": "69029",
            "stageNumber": 1,
            "roomName": "Primordial Nightmare - \"The Creator\"",
            "roomNameZh": "太初梦魇·「始主」",
            "label": "Deadly Assault 2026/01/30 - 2026/02/13 | Primordial Nightmare - \"The Creator\"",
            "shortLabel": "Primordial Nightmare - \"The Creator\"",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Physical"
            ],
            "primaryEnemy": "Primordial Nightmare - \"The Creator\"",
            "primaryEnemyZh": "太初梦魇·「始主」",
            "enemyNames": [
              "Primordial Nightmare - \"The Creator\""
            ],
            "enemyNamesZh": [
              "太初梦魇·「始主」"
            ]
          },
          {
            "id": "69029-2",
            "seasonId": "69029",
            "stageNumber": 2,
            "roomName": "Unknown Corruption Complex",
            "roomNameZh": "未知复合侵蚀体",
            "label": "Deadly Assault 2026/01/30 - 2026/02/13 | Unknown Corruption Complex",
            "shortLabel": "Unknown Corruption Complex",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Electric",
              "Ether"
            ],
            "primaryEnemy": "Unknown Corruption Complex",
            "primaryEnemyZh": "未知复合侵蚀体",
            "enemyNames": [
              "Unknown Corruption Complex"
            ],
            "enemyNamesZh": [
              "未知复合侵蚀体"
            ]
          },
          {
            "id": "69029-3",
            "seasonId": "69029",
            "stageNumber": 3,
            "roomName": "Wandering Hunter",
            "roomNameZh": "彷徨猎手",
            "label": "Deadly Assault 2026/01/30 - 2026/02/13 | Wandering Hunter",
            "shortLabel": "Wandering Hunter",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Fire",
              "Ice"
            ],
            "primaryEnemy": "Wandering Hunter",
            "primaryEnemyZh": "彷徨猎手",
            "enemyNames": [
              "Wandering Hunter"
            ],
            "enemyNamesZh": [
              "彷徨猎手"
            ]
          }
        ]
      },
      {
        "id": "69030",
        "mode": "Deadly Assault",
        "start": "2026-02-13 04:00:00",
        "end": "2026-02-27 03:59:59",
        "active": false,
        "rooms": [
          {
            "id": "69030-1",
            "seasonId": "69030",
            "stageNumber": 1,
            "roomName": "Primordial Nightmare - \"The Creator\"",
            "roomNameZh": "太初梦魇·「始主」",
            "label": "Deadly Assault 2026/02/13 - 2026/02/27 | Primordial Nightmare - \"The Creator\"",
            "shortLabel": "Primordial Nightmare - \"The Creator\"",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Physical"
            ],
            "primaryEnemy": "Primordial Nightmare - \"The Creator\"",
            "primaryEnemyZh": "太初梦魇·「始主」",
            "enemyNames": [
              "Primordial Nightmare - \"The Creator\""
            ],
            "enemyNamesZh": [
              "太初梦魇·「始主」"
            ]
          },
          {
            "id": "69030-2",
            "seasonId": "69030",
            "stageNumber": 2,
            "roomName": "Miasma Priest",
            "roomNameZh": "秽息司祭",
            "label": "Deadly Assault 2026/02/13 - 2026/02/27 | Miasma Priest",
            "shortLabel": "Miasma Priest",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Ether"
            ],
            "primaryEnemy": "Miasma Priest",
            "primaryEnemyZh": "秽息司祭",
            "enemyNames": [
              "Miasma Priest"
            ],
            "enemyNamesZh": [
              "秽息司祭"
            ]
          },
          {
            "id": "69030-3",
            "seasonId": "69030",
            "stageNumber": 3,
            "roomName": "Notorious - Dead End Butcher",
            "roomNameZh": "恶名·死路屠夫",
            "label": "Deadly Assault 2026/02/13 - 2026/02/27 | Notorious - Dead End Butcher",
            "shortLabel": "Notorious - Dead End Butcher",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Ice",
              "Ether"
            ],
            "primaryEnemy": "Notorious - Dead End Butcher",
            "primaryEnemyZh": "恶名·死路屠夫",
            "enemyNames": [
              "Notorious - Dead End Butcher"
            ],
            "enemyNamesZh": [
              "恶名·死路屠夫"
            ]
          }
        ]
      },
      {
        "id": "69031",
        "mode": "Deadly Assault",
        "start": "2026-02-27 04:00:00",
        "end": "2026-03-13 03:59:59",
        "active": false,
        "rooms": [
          {
            "id": "69031-1",
            "seasonId": "69031",
            "stageNumber": 1,
            "roomName": "Discordant Solo - Vesper",
            "roomNameZh": "叛律孤歌·薇斯珀",
            "label": "Deadly Assault 2026/02/27 - 2026/03/13 | Discordant Solo - Vesper",
            "shortLabel": "Discordant Solo - Vesper",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Wind",
              "Ether"
            ],
            "primaryEnemy": "Discordant Solo - Vesper",
            "primaryEnemyZh": "叛律孤歌·薇斯珀",
            "enemyNames": [
              "Discordant Solo - Vesper"
            ],
            "enemyNamesZh": [
              "叛律孤歌·薇斯珀"
            ]
          },
          {
            "id": "69031-2",
            "seasonId": "69031",
            "stageNumber": 2,
            "roomName": "The Defiler",
            "roomNameZh": "「亵渎者」",
            "label": "Deadly Assault 2026/02/27 - 2026/03/13 | The Defiler",
            "shortLabel": "The Defiler",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Physical",
              "Electric"
            ],
            "primaryEnemy": "The Defiler",
            "primaryEnemyZh": "「亵渎者」",
            "enemyNames": [
              "The Defiler"
            ],
            "enemyNamesZh": [
              "「亵渎者」"
            ]
          },
          {
            "id": "69031-3",
            "seasonId": "69031",
            "stageNumber": 3,
            "roomName": "Wandering Hunter",
            "roomNameZh": "彷徨猎手",
            "label": "Deadly Assault 2026/02/27 - 2026/03/13 | Wandering Hunter",
            "shortLabel": "Wandering Hunter",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Fire",
              "Ice"
            ],
            "primaryEnemy": "Wandering Hunter",
            "primaryEnemyZh": "彷徨猎手",
            "enemyNames": [
              "Wandering Hunter"
            ],
            "enemyNamesZh": [
              "彷徨猎手"
            ]
          }
        ]
      },
      {
        "id": "69032",
        "mode": "Deadly Assault",
        "start": "2026-03-13 04:00:00",
        "end": "2026-03-27 03:59:59",
        "active": false,
        "rooms": [
          {
            "id": "69032-1",
            "seasonId": "69032",
            "stageNumber": 1,
            "roomName": "Miasmic Fiend - Unfathomable",
            "roomNameZh": "秽息妖鬼·名可名",
            "label": "Deadly Assault 2026/03/13 - 2026/03/27 | Miasmic Fiend - Unfathomable",
            "shortLabel": "Miasmic Fiend - Unfathomable",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Physical",
              "Ether"
            ],
            "primaryEnemy": "Miasmic Fiend - Unfathomable",
            "primaryEnemyZh": "秽息妖鬼·名可名",
            "enemyNames": [
              "Miasmic Fiend - Unfathomable"
            ],
            "enemyNamesZh": [
              "秽息妖鬼·名可名"
            ]
          },
          {
            "id": "69032-2",
            "seasonId": "69032",
            "stageNumber": 2,
            "roomName": "Ye Shiyuan the Thrall",
            "roomNameZh": "魇缚者·叶释渊",
            "label": "Deadly Assault 2026/03/13 - 2026/03/27 | Ye Shiyuan the Thrall",
            "shortLabel": "Ye Shiyuan the Thrall",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Physical",
              "Ice",
              "Wind"
            ],
            "primaryEnemy": "Ye Shiyuan the Thrall",
            "primaryEnemyZh": "魇缚者·叶释渊",
            "enemyNames": [
              "Ye Shiyuan the Thrall"
            ],
            "enemyNamesZh": [
              "魇缚者·叶释渊"
            ]
          },
          {
            "id": "69032-3",
            "seasonId": "69032",
            "stageNumber": 3,
            "roomName": "Notorious - Pompey",
            "roomNameZh": "恶名·庞培",
            "label": "Deadly Assault 2026/03/13 - 2026/03/27 | Notorious - Pompey",
            "shortLabel": "Notorious - Pompey",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Fire"
            ],
            "primaryEnemy": "Notorious - Pompey",
            "primaryEnemyZh": "恶名·庞培",
            "enemyNames": [
              "Notorious - Pompey"
            ],
            "enemyNamesZh": [
              "恶名·庞培"
            ]
          }
        ]
      },
      {
        "id": "69033",
        "mode": "Deadly Assault",
        "start": "2026-03-27 04:00:00",
        "end": "2026-04-10 03:59:59",
        "active": false,
        "rooms": [
          {
            "id": "69033-1",
            "seasonId": "69033",
            "stageNumber": 1,
            "roomName": "Sanguine Sweeper",
            "roomNameZh": "猎血清道夫",
            "label": "Deadly Assault 2026/03/27 - 2026/04/10 | Sanguine Sweeper",
            "shortLabel": "Sanguine Sweeper",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Electric",
              "Ether"
            ],
            "primaryEnemy": "Sanguine Sweeper",
            "primaryEnemyZh": "猎血清道夫",
            "enemyNames": [
              "Sanguine Sweeper"
            ],
            "enemyNamesZh": [
              "猎血清道夫"
            ]
          },
          {
            "id": "69033-2",
            "seasonId": "69033",
            "stageNumber": 2,
            "roomName": "Miasma Priest",
            "roomNameZh": "秽息司祭",
            "label": "Deadly Assault 2026/03/27 - 2026/04/10 | Miasma Priest",
            "shortLabel": "Miasma Priest",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Ether"
            ],
            "primaryEnemy": "Miasma Priest",
            "primaryEnemyZh": "秽息司祭",
            "enemyNames": [
              "Miasma Priest"
            ],
            "enemyNamesZh": [
              "秽息司祭"
            ]
          },
          {
            "id": "69033-3",
            "seasonId": "69033",
            "stageNumber": 3,
            "roomName": "Notorious - Marionette",
            "roomNameZh": "恶名·冥宁芙",
            "label": "Deadly Assault 2026/03/27 - 2026/04/10 | Notorious - Marionette",
            "shortLabel": "Notorious - Marionette",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Ice",
              "Ether"
            ],
            "primaryEnemy": "Notorious - Marionette",
            "primaryEnemyZh": "恶名·冥宁芙",
            "enemyNames": [
              "Notorious - Marionette"
            ],
            "enemyNamesZh": [
              "恶名·冥宁芙"
            ]
          }
        ]
      },
      {
        "id": "69034",
        "mode": "Deadly Assault",
        "start": "2026-04-10 04:00:00",
        "end": "2026-04-24 03:59:59",
        "active": true,
        "rooms": [
          {
            "id": "69034-1",
            "seasonId": "69034",
            "stageNumber": 1,
            "roomName": "Discordant Solo - Vesper",
            "roomNameZh": "叛律孤歌·薇斯珀",
            "label": "Deadly Assault 2026/04/10 - 2026/04/24 | Discordant Solo - Vesper",
            "shortLabel": "Discordant Solo - Vesper",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Wind",
              "Ether"
            ],
            "primaryEnemy": "Discordant Solo - Vesper",
            "primaryEnemyZh": "叛律孤歌·薇斯珀",
            "enemyNames": [
              "Discordant Solo - Vesper"
            ],
            "enemyNamesZh": [
              "叛律孤歌·薇斯珀"
            ]
          },
          {
            "id": "69034-2",
            "seasonId": "69034",
            "stageNumber": 2,
            "roomName": "Unknown Corruption Complex",
            "roomNameZh": "未知复合侵蚀体",
            "label": "Deadly Assault 2026/04/10 - 2026/04/24 | Unknown Corruption Complex",
            "shortLabel": "Unknown Corruption Complex",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Electric",
              "Ether"
            ],
            "primaryEnemy": "Unknown Corruption Complex",
            "primaryEnemyZh": "未知复合侵蚀体",
            "enemyNames": [
              "Unknown Corruption Complex"
            ],
            "enemyNamesZh": [
              "未知复合侵蚀体"
            ]
          },
          {
            "id": "69034-3",
            "seasonId": "69034",
            "stageNumber": 3,
            "roomName": "Ye Shiyuan the Thrall",
            "roomNameZh": "魇缚者·叶释渊",
            "label": "Deadly Assault 2026/04/10 - 2026/04/24 | Ye Shiyuan the Thrall",
            "shortLabel": "Ye Shiyuan the Thrall",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Physical",
              "Ice",
              "Wind"
            ],
            "primaryEnemy": "Ye Shiyuan the Thrall",
            "primaryEnemyZh": "魇缚者·叶释渊",
            "enemyNames": [
              "Ye Shiyuan the Thrall"
            ],
            "enemyNamesZh": [
              "魇缚者·叶释渊"
            ]
          }
        ]
      },
      {
        "id": "69035",
        "mode": "Deadly Assault",
        "start": "2026-04-24 04:00:00",
        "end": "2026-05-08 03:59:59",
        "active": false,
        "rooms": [
          {
            "id": "69035-1",
            "seasonId": "69035",
            "stageNumber": 1,
            "roomName": "Sanguine Sweeper",
            "roomNameZh": "猎血清道夫",
            "label": "Deadly Assault 2026/04/24 - 2026/05/08 | Sanguine Sweeper",
            "shortLabel": "Sanguine Sweeper",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Electric",
              "Ether"
            ],
            "primaryEnemy": "Sanguine Sweeper",
            "primaryEnemyZh": "猎血清道夫",
            "enemyNames": [
              "Sanguine Sweeper"
            ],
            "enemyNamesZh": [
              "猎血清道夫"
            ]
          },
          {
            "id": "69035-2",
            "seasonId": "69035",
            "stageNumber": 2,
            "roomName": "Primordial Nightmare - \"The Creator\"",
            "roomNameZh": "太初梦魇·「始主」",
            "label": "Deadly Assault 2026/04/24 - 2026/05/08 | Primordial Nightmare - \"The Creator\"",
            "shortLabel": "Primordial Nightmare - \"The Creator\"",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Physical"
            ],
            "primaryEnemy": "Primordial Nightmare - \"The Creator\"",
            "primaryEnemyZh": "太初梦魇·「始主」",
            "enemyNames": [
              "Primordial Nightmare - \"The Creator\""
            ],
            "enemyNamesZh": [
              "太初梦魇·「始主」"
            ]
          },
          {
            "id": "69035-3",
            "seasonId": "69035",
            "stageNumber": 3,
            "roomName": "The Defiler",
            "roomNameZh": "「亵渎者」",
            "label": "Deadly Assault 2026/04/24 - 2026/05/08 | The Defiler",
            "shortLabel": "The Defiler",
            "fullScore": 65000,
            "highestRankScore": 20000,
            "sRankScore": 20000,
            "weaknesses": [
              "Physical",
              "Electric"
            ],
            "primaryEnemy": "The Defiler",
            "primaryEnemyZh": "「亵渎者」",
            "enemyNames": [
              "The Defiler"
            ],
            "enemyNamesZh": [
              "「亵渎者」"
            ]
          }
        ]
      }
    ],
    "deadlyAssaultAdversity": [],
    "shiyuDefense": [
      {
        "id": "62039",
        "mode": "Shiyu Defense",
        "start": "2026-01-09 04:00:00",
        "end": "2026-01-23 03:59:59",
        "active": false,
        "rooms": [
          {
            "id": "62039-room-1",
            "seasonId": "62039",
            "stageNumber": 5,
            "roomName": "Room 1",
            "roomNameZh": "房间 1",
            "label": "Shiyu Defense 2026/01/09 - 2026/01/23 | Room 1",
            "shortLabel": "Room 1",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Physical",
              "Ether"
            ],
            "primaryEnemy": "Miasma Walker - Scorpse",
            "primaryEnemyZh": "秽息行者·蝎骸",
            "enemyNames": [
              "Bulky Enforcer",
              "Bulky Intimidator",
              "Miasma Walker - Scorpse"
            ],
            "enemyNamesZh": [
              "魁梧打手",
              "魁梧施虐者",
              "秽息行者·蝎骸"
            ]
          },
          {
            "id": "62039-room-2",
            "seasonId": "62039",
            "stageNumber": 5,
            "roomName": "Room 2",
            "roomNameZh": "房间 2",
            "label": "Shiyu Defense 2026/01/09 - 2026/01/23 | Room 2",
            "shortLabel": "Room 2",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Fire",
              "Electric"
            ],
            "primaryEnemy": "Miasmic - Terror Raptor",
            "primaryEnemyZh": "秽蚀·「骇鸟」",
            "enemyNames": [
              "Doppelganger - Mors",
              "Doppelganger - Pulchra",
              "Miasmic - Terror Raptor"
            ],
            "enemyNamesZh": [
              "多佩冈亚·莫尔斯",
              "多佩冈亚·波可娜",
              "秽蚀·「骇鸟」"
            ]
          },
          {
            "id": "62039-room-3",
            "seasonId": "62039",
            "stageNumber": 5,
            "roomName": "Room 3",
            "roomNameZh": "房间 3",
            "label": "Shiyu Defense 2026/01/09 - 2026/01/23 | Room 3",
            "shortLabel": "Room 3",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Ether"
            ],
            "primaryEnemy": "Miasmic - Thracian",
            "primaryEnemyZh": "秽蚀·色雷斯人",
            "enemyNames": [
              "Faun",
              "Flame Cantor",
              "Miasmic - Thracian",
              "Miasma Spawn"
            ],
            "enemyNamesZh": [
              "萨提尔",
              "秉火领颂",
              "秽蚀·色雷斯人",
              "秽息原牲"
            ]
          }
        ]
      },
      {
        "id": "62040",
        "mode": "Shiyu Defense",
        "start": "2026-01-23 04:00:00",
        "end": "2026-02-06 03:59:59",
        "active": false,
        "rooms": [
          {
            "id": "62040-room-1",
            "seasonId": "62040",
            "stageNumber": 5,
            "roomName": "Room 1",
            "roomNameZh": "房间 1",
            "label": "Shiyu Defense 2026/01/23 - 2026/02/06 | Room 1",
            "shortLabel": "Room 1",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Physical",
              "Fire"
            ],
            "primaryEnemy": "Miasmic - Doppelganger - The Defector",
            "primaryEnemyZh": "秽蚀·多佩冈亚·「变节者」",
            "enemyNames": [
              "Dullahan - Energized",
              "Ionized - Pugnus",
              "Miasmic - Doppelganger - The Defector"
            ],
            "enemyNamesZh": [
              "杜拉罕·蓄能型",
              "离子体·普格努斯",
              "秽蚀·多佩冈亚·「变节者」"
            ]
          },
          {
            "id": "62040-room-2",
            "seasonId": "62040",
            "stageNumber": 5,
            "roomName": "Room 2",
            "roomNameZh": "房间 2",
            "label": "Shiyu Defense 2026/01/23 - 2026/02/06 | Room 2",
            "shortLabel": "Room 2",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Physical"
            ],
            "primaryEnemy": "Miasmic - Jane",
            "primaryEnemyZh": "秽蚀·简",
            "enemyNames": [
              "Dullahan - Energized",
              "Heavy Gunner",
              "Miasmic - Jane"
            ],
            "enemyNamesZh": [
              "杜拉罕·蓄能型",
              "重装炮手",
              "秽蚀·简"
            ]
          },
          {
            "id": "62040-room-3",
            "seasonId": "62040",
            "stageNumber": 5,
            "roomName": "Room 3",
            "roomNameZh": "房间 3",
            "label": "Shiyu Defense 2026/01/23 - 2026/02/06 | Room 3",
            "shortLabel": "Room 3",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Physical",
              "Fire"
            ],
            "primaryEnemy": "Doppelganger - Abyssal Enforcer",
            "primaryEnemyZh": "多佩冈亚·暗渊惩戒者",
            "enemyNames": [
              "Frenzied Maniac",
              "Wicked Wraith",
              "Doppelganger - Abyssal Enforcer"
            ],
            "enemyNamesZh": [
              "狂乱暴徒",
              "盛怒恶霸",
              "多佩冈亚·暗渊惩戒者"
            ]
          }
        ]
      },
      {
        "id": "62041",
        "mode": "Shiyu Defense",
        "start": "2026-02-06 04:00:00",
        "end": "2026-02-20 03:59:59",
        "active": false,
        "rooms": [
          {
            "id": "62041-room-1",
            "seasonId": "62041",
            "stageNumber": 5,
            "roomName": "Room 1",
            "roomNameZh": "房间 1",
            "label": "Shiyu Defense 2026/02/06 - 2026/02/20 | Room 1",
            "shortLabel": "Room 1",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Physical",
              "Electric"
            ],
            "primaryEnemy": "Sacrifice - Heretic Jester",
            "primaryEnemyZh": "牲鬼·凶魁愚者",
            "enemyNames": [
              "Doppelganger - Mors",
              "Doppelganger - Pulchra",
              "Sacrifice - Heretic Jester"
            ],
            "enemyNamesZh": [
              "多佩冈亚·莫尔斯",
              "多佩冈亚·波可娜",
              "牲鬼·凶魁愚者"
            ]
          },
          {
            "id": "62041-room-2",
            "seasonId": "62041",
            "stageNumber": 5,
            "roomName": "Room 2",
            "roomNameZh": "房间 2",
            "label": "Shiyu Defense 2026/02/06 - 2026/02/20 | Room 2",
            "shortLabel": "Room 2",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Electric"
            ],
            "primaryEnemy": "Greta",
            "primaryEnemyZh": "格莱特",
            "enemyNames": [
              "Guardian MK II",
              "Assault Gunner",
              "Greta"
            ],
            "enemyNamesZh": [
              "「卫士Ⅱ型」",
              "突击炮手",
              "格莱特"
            ]
          },
          {
            "id": "62041-room-3",
            "seasonId": "62041",
            "stageNumber": 5,
            "roomName": "Room 3",
            "roomNameZh": "房间 3",
            "label": "Shiyu Defense 2026/02/06 - 2026/02/20 | Room 3",
            "shortLabel": "Room 3",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Fire",
              "Ether"
            ],
            "primaryEnemy": "Miasma Ravager - Avarus",
            "primaryEnemyZh": "秽息蚀者·阿瓦鲁斯",
            "enemyNames": [
              "Frenzied Maniac",
              "Wicked Wraith",
              "Miasma Ravager - Avarus"
            ],
            "enemyNamesZh": [
              "狂乱暴徒",
              "盛怒恶霸",
              "秽息蚀者·阿瓦鲁斯"
            ]
          }
        ]
      },
      {
        "id": "62042",
        "mode": "Shiyu Defense",
        "start": "2026-02-20 04:00:00",
        "end": "2026-03-06 03:59:59",
        "active": false,
        "rooms": [
          {
            "id": "62042-room-1",
            "seasonId": "62042",
            "stageNumber": 5,
            "roomName": "Room 1",
            "roomNameZh": "房间 1",
            "label": "Shiyu Defense 2026/02/20 - 2026/03/06 | Room 1",
            "shortLabel": "Room 1",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Physical",
              "Fire"
            ],
            "primaryEnemy": "Sacrifice - Covenant Guardian",
            "primaryEnemyZh": "牲鬼·卫律使者",
            "enemyNames": [
              "Miasma Spawn",
              "Miasmic - Wicked Wraith",
              "Sacrifice - Covenant Guardian"
            ],
            "enemyNamesZh": [
              "秽息原牲",
              "秽蚀·盛怒恶霸",
              "牲鬼·卫律使者"
            ]
          },
          {
            "id": "62042-room-2",
            "seasonId": "62042",
            "stageNumber": 5,
            "roomName": "Room 2",
            "roomNameZh": "房间 2",
            "label": "Shiyu Defense 2026/02/20 - 2026/03/06 | Room 2",
            "shortLabel": "Room 2",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Ice"
            ],
            "primaryEnemy": "Miasmic Komano Manato",
            "primaryEnemyZh": "秽蚀·狛野真斗",
            "enemyNames": [
              "Faun",
              "Metro Goblin",
              "Miasmic Komano Manato"
            ],
            "enemyNamesZh": [
              "萨提尔",
              "铁道地精",
              "秽蚀·狛野真斗"
            ]
          },
          {
            "id": "62042-room-3",
            "seasonId": "62042",
            "stageNumber": 5,
            "roomName": "Room 3",
            "roomNameZh": "房间 3",
            "label": "Shiyu Defense 2026/02/20 - 2026/03/06 | Room 3",
            "shortLabel": "Room 3",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Physical",
              "Ether"
            ],
            "primaryEnemy": "Miasma Walker - Scorpse",
            "primaryEnemyZh": "秽息行者·蝎骸",
            "enemyNames": [
              "Miasma Walker - Arcavor",
              "Banyrek",
              "Miasma Walker - Scorpse"
            ],
            "enemyNamesZh": [
              "秽息行者· 阿卡沃尔",
              "班尼雷克",
              "秽息行者·蝎骸"
            ]
          }
        ]
      },
      {
        "id": "62043",
        "mode": "Shiyu Defense",
        "start": "2026-03-06 04:00:00",
        "end": "2026-03-20 03:59:59",
        "active": false,
        "rooms": [
          {
            "id": "62043-room-1",
            "seasonId": "62043",
            "stageNumber": 5,
            "roomName": "Room 1",
            "roomNameZh": "房间 1",
            "label": "Shiyu Defense 2026/03/06 - 2026/03/20 | Room 1",
            "shortLabel": "Room 1",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Physical",
              "Electric"
            ],
            "primaryEnemy": "Lockspring",
            "primaryEnemyZh": "缄枢",
            "enemyNames": [
              "Lightfoot Rover MK II",
              "Miasmic Trooper - Shieldguard",
              "Miasmic Trooper - Cannoneer",
              "Lockspring"
            ],
            "enemyNamesZh": [
              "「捷足巡游者Ⅱ型」",
              "秽息残兵·盾卫",
              "秽息残兵·炮手",
              "缄枢"
            ]
          },
          {
            "id": "62043-room-2",
            "seasonId": "62043",
            "stageNumber": 5,
            "roomName": "Room 2",
            "roomNameZh": "房间 2",
            "label": "Shiyu Defense 2026/03/06 - 2026/03/20 | Room 2",
            "shortLabel": "Room 2",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Physical",
              "Fire"
            ],
            "primaryEnemy": "Sacrifice - Covenant Guardian",
            "primaryEnemyZh": "牲鬼·卫律使者",
            "enemyNames": [
              "Bulky Enforcer",
              "Bulky Intimidator",
              "Sacrifice - Covenant Guardian"
            ],
            "enemyNamesZh": [
              "魁梧打手",
              "魁梧施虐者",
              "牲鬼·卫律使者"
            ]
          },
          {
            "id": "62043-room-3",
            "seasonId": "62043",
            "stageNumber": 5,
            "roomName": "Room 3",
            "roomNameZh": "房间 3",
            "label": "Shiyu Defense 2026/03/06 - 2026/03/20 | Room 3",
            "shortLabel": "Room 3",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Ether"
            ],
            "primaryEnemy": "Miasmic - Rampant Brute",
            "primaryEnemyZh": "秽蚀·蛮横力士",
            "enemyNames": [
              "Ionized - Farbauti",
              "Ionized - Dullahan",
              "Miasmic - Rampant Brute"
            ],
            "enemyNamesZh": [
              "离子体·法布提",
              "离子体·杜拉罕",
              "秽蚀·蛮横力士"
            ]
          }
        ]
      },
      {
        "id": "62044",
        "mode": "Shiyu Defense",
        "start": "2026-03-20 04:00:00",
        "end": "2026-04-03 03:59:59",
        "active": false,
        "rooms": [
          {
            "id": "62044-room-1",
            "seasonId": "62044",
            "stageNumber": 5,
            "roomName": "Room 1",
            "roomNameZh": "房间 1",
            "label": "Shiyu Defense 2026/03/20 - 2026/04/03 | Room 1",
            "shortLabel": "Room 1",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Physical"
            ],
            "primaryEnemy": "Miasmic - Jane",
            "primaryEnemyZh": "秽蚀·简",
            "enemyNames": [
              "Doppelganger - Bellum",
              "Exalting Hymnist",
              "Miasmic - Jane"
            ],
            "enemyNamesZh": [
              "多佩冈亚·巴罗姆",
              "颂礼赞者",
              "秽蚀·简"
            ]
          },
          {
            "id": "62044-room-2",
            "seasonId": "62044",
            "stageNumber": 5,
            "roomName": "Room 2",
            "roomNameZh": "房间 2",
            "label": "Shiyu Defense 2026/03/20 - 2026/04/03 | Room 2",
            "shortLabel": "Room 2",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Ether"
            ],
            "primaryEnemy": "Miasmic - Thracian",
            "primaryEnemyZh": "秽蚀·色雷斯人",
            "enemyNames": [
              "Wicked Wraith",
              "Ionized - Thanatos",
              "Miasmic - Thracian"
            ],
            "enemyNamesZh": [
              "盛怒恶霸",
              "离子体·塔纳托斯",
              "秽蚀·色雷斯人"
            ]
          },
          {
            "id": "62044-room-3",
            "seasonId": "62044",
            "stageNumber": 5,
            "roomName": "Room 3",
            "roomNameZh": "房间 3",
            "label": "Shiyu Defense 2026/03/20 - 2026/04/03 | Room 3",
            "shortLabel": "Room 3",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Fire",
              "Ice"
            ],
            "primaryEnemy": "Haytor",
            "primaryEnemyZh": "赫由托",
            "enemyNames": [
              "Vicious Striker",
              "Greedy Ranger",
              "Ruthless Fiend",
              "Haytor"
            ],
            "enemyNamesZh": [
              "恶毒打手",
              "贪婪射手",
              "凶心疯汉",
              "赫由托"
            ]
          }
        ]
      },
      {
        "id": "62045",
        "mode": "Shiyu Defense",
        "start": "2026-04-03 04:00:00",
        "end": "2026-04-17 03:59:59",
        "active": false,
        "rooms": [
          {
            "id": "62045-room-1",
            "seasonId": "62045",
            "stageNumber": 5,
            "roomName": "Room 1",
            "roomNameZh": "房间 1",
            "label": "Shiyu Defense 2026/04/03 - 2026/04/17 | Room 1",
            "shortLabel": "Room 1",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Physical",
              "Electric"
            ],
            "primaryEnemy": "Lockspring",
            "primaryEnemyZh": "缄枢",
            "enemyNames": [
              "Guardian MK II",
              "Assault Gunner",
              "Lockspring"
            ],
            "enemyNamesZh": [
              "「卫士Ⅱ型」",
              "突击炮手",
              "缄枢"
            ]
          },
          {
            "id": "62045-room-2",
            "seasonId": "62045",
            "stageNumber": 5,
            "roomName": "Room 2",
            "roomNameZh": "房间 2",
            "label": "Shiyu Defense 2026/04/03 - 2026/04/17 | Room 2",
            "shortLabel": "Room 2",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Ether"
            ],
            "primaryEnemy": "Miasmic - Rampant Brute",
            "primaryEnemyZh": "秽蚀·蛮横力士",
            "enemyNames": [
              "Wicked Wraith",
              "Ionized - Thanatos",
              "Miasmic - Rampant Brute"
            ],
            "enemyNamesZh": [
              "盛怒恶霸",
              "离子体·塔纳托斯",
              "秽蚀·蛮横力士"
            ]
          },
          {
            "id": "62045-room-3",
            "seasonId": "62045",
            "stageNumber": 5,
            "roomName": "Room 3",
            "roomNameZh": "房间 3",
            "label": "Shiyu Defense 2026/04/03 - 2026/04/17 | Room 3",
            "shortLabel": "Room 3",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Ice"
            ],
            "primaryEnemy": "Miasmic Komano Manato",
            "primaryEnemyZh": "秽蚀·狛野真斗",
            "enemyNames": [
              "Bulky Enforcer",
              "Bulky Intimidator",
              "Miasmic Komano Manato"
            ],
            "enemyNamesZh": [
              "魁梧打手",
              "魁梧施虐者",
              "秽蚀·狛野真斗"
            ]
          }
        ]
      },
      {
        "id": "62046",
        "mode": "Shiyu Defense",
        "start": "2026-04-17 04:00:00",
        "end": "2026-05-01 03:59:59",
        "active": true,
        "rooms": [
          {
            "id": "62046-room-1",
            "seasonId": "62046",
            "stageNumber": 5,
            "roomName": "Room 1",
            "roomNameZh": "房间 1",
            "label": "Shiyu Defense 2026/04/17 - 2026/05/01 | Room 1",
            "shortLabel": "Room 1",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Ether"
            ],
            "primaryEnemy": "Miasmic - Thracian",
            "primaryEnemyZh": "秽蚀·色雷斯人",
            "enemyNames": [
              "Ionized - Farbauti",
              "Ionized - Dullahan",
              "Miasmic - Thracian"
            ],
            "enemyNamesZh": [
              "离子体·法布提",
              "离子体·杜拉罕",
              "秽蚀·色雷斯人"
            ]
          },
          {
            "id": "62046-room-2",
            "seasonId": "62046",
            "stageNumber": 5,
            "roomName": "Room 2",
            "roomNameZh": "房间 2",
            "label": "Shiyu Defense 2026/04/17 - 2026/05/01 | Room 2",
            "shortLabel": "Room 2",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Physical",
              "Electric"
            ],
            "primaryEnemy": "Sacrifice - Heretic Jester",
            "primaryEnemyZh": "牲鬼·凶魁愚者",
            "enemyNames": [
              "Lightfoot Rover MK II",
              "Heavy Striker MK II",
              "Sacrifice - Heretic Jester"
            ],
            "enemyNamesZh": [
              "「捷足巡游者Ⅱ型」",
              "「重装侵袭者Ⅱ型」",
              "牲鬼·凶魁愚者"
            ]
          },
          {
            "id": "62046-room-3",
            "seasonId": "62046",
            "stageNumber": 5,
            "roomName": "Room 3",
            "roomNameZh": "房间 3",
            "label": "Shiyu Defense 2026/04/17 - 2026/05/01 | Room 3",
            "shortLabel": "Room 3",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Fire",
              "Ice"
            ],
            "primaryEnemy": "Haytor",
            "primaryEnemyZh": "赫由托",
            "enemyNames": [
              "Alpeca",
              "Dullahan",
              "Huskron",
              "Haytor"
            ],
            "enemyNamesZh": [
              "阿佩卡",
              "杜拉罕",
              "赫斯克龙",
              "赫由托"
            ]
          }
        ]
      },
      {
        "id": "62047",
        "mode": "Shiyu Defense",
        "start": "2026-05-01 04:00:00",
        "end": "2026-05-15 03:59:59",
        "active": false,
        "rooms": [
          {
            "id": "62047-room-1",
            "seasonId": "62047",
            "stageNumber": 5,
            "roomName": "Room 1",
            "roomNameZh": "房间 1",
            "label": "Shiyu Defense 2026/05/01 - 2026/05/15 | Room 1",
            "shortLabel": "Room 1",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Physical",
              "Ether"
            ],
            "primaryEnemy": "Miasma Walker - Scorpse",
            "primaryEnemyZh": "秽息行者·蝎骸",
            "enemyNames": [
              "Faun",
              "Metro Goblin",
              "Miasma Spawn",
              "Miasma Walker - Scorpse"
            ],
            "enemyNamesZh": [
              "萨提尔",
              "铁道地精",
              "秽息原牲",
              "秽息行者·蝎骸"
            ]
          },
          {
            "id": "62047-room-2",
            "seasonId": "62047",
            "stageNumber": 5,
            "roomName": "Room 2",
            "roomNameZh": "房间 2",
            "label": "Shiyu Defense 2026/05/01 - 2026/05/15 | Room 2",
            "shortLabel": "Room 2",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Fire",
              "Electric"
            ],
            "primaryEnemy": "Miasmic - Terror Raptor",
            "primaryEnemyZh": "秽蚀·「骇鸟」",
            "enemyNames": [
              "Miasmic Trooper - Shieldguard",
              "Miasmic Trooper - Cannoneer",
              "Miasmic - Terror Raptor",
              "Miasmic - Heavy Striker"
            ],
            "enemyNamesZh": [
              "秽息残兵·盾卫",
              "秽息残兵·炮手",
              "秽蚀·「骇鸟」",
              "秽蚀·「重装侵袭者」"
            ]
          },
          {
            "id": "62047-room-3",
            "seasonId": "62047",
            "stageNumber": 5,
            "roomName": "Room 3",
            "roomNameZh": "房间 3",
            "label": "Shiyu Defense 2026/05/01 - 2026/05/15 | Room 3",
            "shortLabel": "Room 3",
            "fullScore": 50000,
            "highestRankScore": 25000,
            "sRankScore": 25000,
            "weaknesses": [
              "Ether"
            ],
            "primaryEnemy": "Miasmic - Rampant Brute",
            "primaryEnemyZh": "秽蚀·蛮横力士",
            "enemyNames": [
              "Armored Hati",
              "Metro Goblin",
              "Miasmic - Rampant Brute"
            ],
            "enemyNamesZh": [
              "装甲哈提",
              "铁道地精",
              "秽蚀·蛮横力士"
            ]
          }
        ]
      }
    ],
    "annihilationSimulacrum": [
      {
        "id": "as-2026-06-17",
        "mode": "Annihilation Simulacrum",
        "start": "2026-06-17 10:00:00",
        "end": "2026-06-29 06:00:00",
        "active": true,
        "presetAgentIds": [
          "1291",
          "1321",
          "1051",
          "1531",
          "1261",
          "1221",
          "1071",
          "1571",
          "1481",
          "1451",
          "1411",
          "1561"
        ],
        "rooms": [
          {
            "id": "as-2026-06-17-1",
            "seasonId": "as-2026-06-17",
            "stageNumber": 1,
            "roomName": "Boss 1",
            "roomNameZh": "首领 1",
            "label": "Annihilation Simulacrum 2026/06/17 - 2026/06/29 | Boss 1",
            "shortLabel": "Boss 1",
            "fullScore": 0,
            "highestRankScore": 0,
            "sRankScore": 0,
            "weaknesses": [],
            "primaryEnemy": "Boss 1",
            "primaryEnemyZh": "首领 1",
            "enemyNames": [
              "Boss 1"
            ],
            "enemyNamesZh": [
              "首领 1"
            ]
          },
          {
            "id": "as-2026-06-17-2",
            "seasonId": "as-2026-06-17",
            "stageNumber": 2,
            "roomName": "Boss 2",
            "roomNameZh": "首领 2",
            "label": "Annihilation Simulacrum 2026/06/17 - 2026/06/29 | Boss 2",
            "shortLabel": "Boss 2",
            "fullScore": 0,
            "highestRankScore": 0,
            "sRankScore": 0,
            "weaknesses": [],
            "primaryEnemy": "Boss 2",
            "primaryEnemyZh": "首领 2",
            "enemyNames": [
              "Boss 2"
            ],
            "enemyNamesZh": [
              "首领 2"
            ]
          },
          {
            "id": "as-2026-06-17-3",
            "seasonId": "as-2026-06-17",
            "stageNumber": 3,
            "roomName": "Boss 3",
            "roomNameZh": "首领 3",
            "label": "Annihilation Simulacrum 2026/06/17 - 2026/06/29 | Boss 3",
            "shortLabel": "Boss 3",
            "fullScore": 0,
            "highestRankScore": 0,
            "sRankScore": 0,
            "weaknesses": [],
            "primaryEnemy": "Boss 3",
            "primaryEnemyZh": "首领 3",
            "enemyNames": [
              "Boss 3"
            ],
            "enemyNamesZh": [
              "首领 3"
            ]
          }
        ]
      }
    ]
  },
  "defaultState": {
    "approvedSubmissions": [
      {
        "id": "seed-da-001",
        "status": "approved",
        "mode": "Deadly Assault",
        "seasonId": "69034",
        "targetId": "69034-1",
        "targetLabel": "Deadly Assault 2026/04/10 - 2026/04/24 | Discordant Solo - Vesper",
        "authorName": "Proxy Echo",
        "videoUrl": "https://example.com/runs/seed-da-001",
        "bangbooId": "54010",
        "bangbooName": "Biggest Fan",
        "bangbooNameZh": "阿饭",
        "timeSeconds": 91,
        "score": 65000,
        "submittedAt": "2026-04-22T10:15:00+08:00",
        "reviewedAt": "2026-04-22T10:25:00+08:00",
        "reviewNote": "",
        "team": [
          {
            "slot": 1,
            "agentId": "1511",
            "agentName": "Nangong Yu",
            "agentNameZh": "南宫羽",
            "mindscape": 0,
            "weaponId": "14151",
            "weaponName": "Neon Fantasies",
            "weaponNameZh": "霓虹妄想",
            "phase": 1
          },
          {
            "slot": 2,
            "agentId": "1331",
            "agentName": "Vivian",
            "agentNameZh": "薇薇安",
            "mindscape": 0,
            "weaponId": "14133",
            "weaponName": "Flight of Fancy",
            "weaponNameZh": "飞鸟星梦",
            "phase": 1
          },
          {
            "slot": 3,
            "agentId": "1311",
            "agentName": "Astra Yao",
            "agentNameZh": "耀嘉音",
            "mindscape": 0,
            "weaponId": "14131",
            "weaponName": "Elegant Vanity",
            "weaponNameZh": "玲珑妆匣",
            "phase": 1
          }
        ]
      },
      {
        "id": "seed-da-002",
        "status": "approved",
        "mode": "Deadly Assault",
        "seasonId": "69034",
        "targetId": "69034-2",
        "targetLabel": "Deadly Assault 2026/04/10 - 2026/04/24 | Unknown Corruption Complex",
        "authorName": "ZenlessArchivist",
        "videoUrl": "https://example.com/runs/seed-da-002",
        "bangbooId": "54012",
        "bangbooName": "Officer Cui",
        "bangbooNameZh": "阿崔巡查",
        "timeSeconds": 108,
        "score": 48220,
        "submittedAt": "2026-04-22T14:05:00+08:00",
        "reviewedAt": "2026-04-22T14:12:00+08:00",
        "reviewNote": "",
        "team": [
          {
            "slot": 1,
            "agentId": "1381",
            "agentName": "Soldier 0 - Anby",
            "agentNameZh": "零号·安比",
            "mindscape": 1,
            "weaponId": "14138",
            "weaponName": "Severed Innocence",
            "weaponNameZh": "牺牲洁纯",
            "phase": 1
          },
          {
            "slot": 2,
            "agentId": "1251",
            "agentName": "Qingyi",
            "agentNameZh": "青衣",
            "mindscape": 0,
            "weaponId": "14125",
            "weaponName": "Ice-Jade Teapot",
            "weaponNameZh": "玉壶青冰",
            "phase": 1
          },
          {
            "slot": 3,
            "agentId": "1071",
            "agentName": "Caesar",
            "agentNameZh": "凯撒",
            "mindscape": 0,
            "weaponId": "14107",
            "weaponName": "Tusks of Fury",
            "weaponNameZh": "奔袭獠牙",
            "phase": 1
          }
        ]
      },
      {
        "id": "seed-da-003",
        "status": "approved",
        "mode": "Deadly Assault",
        "seasonId": "69034",
        "targetId": "69034-3",
        "targetLabel": "Deadly Assault 2026/04/10 - 2026/04/24 | Ye Shiyuan the Thrall",
        "authorName": "RoomThreeRush",
        "videoUrl": "https://example.com/runs/seed-da-003",
        "bangbooId": "54001",
        "bangbooName": "Sharkboo",
        "bangbooNameZh": "鲨牙布",
        "timeSeconds": 96,
        "score": 53880,
        "submittedAt": "2026-04-22T20:35:00+08:00",
        "reviewedAt": "2026-04-22T20:43:00+08:00",
        "reviewNote": "",
        "team": [
          {
            "slot": 1,
            "agentId": "1091",
            "agentName": "Miyabi",
            "agentNameZh": "雅",
            "mindscape": 0,
            "weaponId": "14109",
            "weaponName": "Hailstorm Shrine",
            "weaponNameZh": "霰落星殿",
            "phase": 1
          },
          {
            "slot": 2,
            "agentId": "1141",
            "agentName": "Lycaon",
            "agentNameZh": "莱卡恩",
            "mindscape": 0,
            "weaponId": "14114",
            "weaponName": "The Restrained",
            "weaponNameZh": "拘缚者",
            "phase": 1
          },
          {
            "slot": 3,
            "agentId": "1131",
            "agentName": "Soukaku",
            "agentNameZh": "苍角",
            "mindscape": 6,
            "weaponId": "13113",
            "weaponName": "Bashful Demon",
            "weaponNameZh": "含羞恶面",
            "phase": 5
          }
        ]
      },
      {
        "id": "seed-sd-001",
        "status": "approved",
        "mode": "Shiyu Defense",
        "seasonId": "62046",
        "targetId": "62046-room-1",
        "targetLabel": "Shiyu Defense 2026/04/17 - 2026/05/01 | Room 1",
        "authorName": "Proxy Echo",
        "videoUrl": "https://example.com/runs/seed-sd-001",
        "bangbooId": "54010",
        "bangbooName": "Biggest Fan",
        "bangbooNameZh": "阿饭",
        "timeSeconds": 87,
        "score": 50000,
        "submittedAt": "2026-04-21T09:40:00+08:00",
        "reviewedAt": "2026-04-21T09:46:00+08:00",
        "reviewNote": "",
        "team": [
          {
            "slot": 1,
            "agentId": "1511",
            "agentName": "Nangong Yu",
            "agentNameZh": "南宫羽",
            "mindscape": 0,
            "weaponId": "14151",
            "weaponName": "Neon Fantasies",
            "weaponNameZh": "霓虹妄想",
            "phase": 1
          },
          {
            "slot": 2,
            "agentId": "1331",
            "agentName": "Vivian",
            "agentNameZh": "薇薇安",
            "mindscape": 0,
            "weaponId": "14133",
            "weaponName": "Flight of Fancy",
            "weaponNameZh": "飞鸟星梦",
            "phase": 1
          },
          {
            "slot": 3,
            "agentId": "1311",
            "agentName": "Astra Yao",
            "agentNameZh": "耀嘉音",
            "mindscape": 0,
            "weaponId": "14131",
            "weaponName": "Elegant Vanity",
            "weaponNameZh": "玲珑妆匣",
            "phase": 1
          }
        ]
      },
      {
        "id": "seed-sd-002",
        "status": "approved",
        "mode": "Shiyu Defense",
        "seasonId": "62046",
        "targetId": "62046-room-2",
        "targetLabel": "Shiyu Defense 2026/04/17 - 2026/05/01 | Room 2",
        "authorName": "NodeBreaker",
        "videoUrl": "https://example.com/runs/seed-sd-002",
        "bangbooId": "54008",
        "bangbooName": "Plugboo",
        "bangbooNameZh": "插头布",
        "timeSeconds": 111,
        "score": 43650,
        "submittedAt": "2026-04-21T13:20:00+08:00",
        "reviewedAt": "2026-04-21T13:29:00+08:00",
        "reviewNote": "",
        "team": [
          {
            "slot": 1,
            "agentId": "1381",
            "agentName": "Soldier 0 - Anby",
            "agentNameZh": "零号·安比",
            "mindscape": 0,
            "weaponId": "14138",
            "weaponName": "Severed Innocence",
            "weaponNameZh": "牺牲洁纯",
            "phase": 1
          },
          {
            "slot": 2,
            "agentId": "1251",
            "agentName": "Qingyi",
            "agentNameZh": "青衣",
            "mindscape": 0,
            "weaponId": "14125",
            "weaponName": "Ice-Jade Teapot",
            "weaponNameZh": "玉壶青冰",
            "phase": 1
          },
          {
            "slot": 3,
            "agentId": "1031",
            "agentName": "Nicole",
            "agentNameZh": "妮可",
            "mindscape": 6,
            "weaponId": "13103",
            "weaponName": "The Vault",
            "weaponNameZh": "聚宝箱",
            "phase": 5
          }
        ]
      },
      {
        "id": "seed-sd-003",
        "status": "approved",
        "mode": "Shiyu Defense",
        "seasonId": "62046",
        "targetId": "62046-room-3",
        "targetLabel": "Shiyu Defense 2026/04/17 - 2026/05/01 | Room 3",
        "authorName": "ColdCase",
        "videoUrl": "https://example.com/runs/seed-sd-003",
        "bangbooId": "54001",
        "bangbooName": "Sharkboo",
        "bangbooNameZh": "鲨牙布",
        "timeSeconds": 89,
        "score": 50000,
        "submittedAt": "2026-04-21T20:55:00+08:00",
        "reviewedAt": "2026-04-21T21:03:00+08:00",
        "reviewNote": "",
        "team": [
          {
            "slot": 1,
            "agentId": "1091",
            "agentName": "Miyabi",
            "agentNameZh": "雅",
            "mindscape": 0,
            "weaponId": "14109",
            "weaponName": "Hailstorm Shrine",
            "weaponNameZh": "霰落星殿",
            "phase": 1
          },
          {
            "slot": 2,
            "agentId": "1141",
            "agentName": "Lycaon",
            "agentNameZh": "莱卡恩",
            "mindscape": 0,
            "weaponId": "14114",
            "weaponName": "The Restrained",
            "weaponNameZh": "拘缚者",
            "phase": 1
          },
          {
            "slot": 3,
            "agentId": "1131",
            "agentName": "Soukaku",
            "agentNameZh": "苍角",
            "mindscape": 6,
            "weaponId": "13113",
            "weaponName": "Bashful Demon",
            "weaponNameZh": "含羞恶面",
            "phase": 5
          }
        ]
      }
    ],
    "pendingSubmissions": [],
    "rejectedSubmissions": []
  }
};

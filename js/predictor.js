/**
 * ZZZ Deadly Assault Score Predictor Engine
 * Based on empirical data from ZZZ Run Archive, Prydwen, Nexus Shiyu, and YouTube high-end clears.
 */

class AssaultPredictor {
  constructor(database) {
    this.db = database || {
      characters: [],
      weapons: [],
      bangboos: [],
      bosses: [],
      buffs: [],
      runs: []
    };
  }

  setDatabase(db) {
    this.db = db;
  }

  /**
   * Main calculation method
   */
  predict({ team, bangboo, boss, buff }) {
    if (!team || team.length < 3 || !boss) {
      return {
        error: "Требуется выбрать 3 персонажей и босса"
      };
    }

    const logs = [];
    const pros = [];
    const cons = [];

    // 1. Role and Archetype Balance
    const specialties = team.map(m => m.character.specialty);
    const attributes = team.map(m => m.character.attribute);

    const attackCount = specialties.filter(s => s === 'Attack').length;
    const anomalyCount = specialties.filter(s => s === 'Anomaly').length;
    const stunCount = specialties.filter(s => s === 'Stun').length;
    const supportCount = specialties.filter(s => s === 'Support' || s === 'Defense').length;

    let archetype = "Смешанный";
    let roleMultiplier = 1.0;

    if (attackCount >= 1 && stunCount >= 1 && supportCount >= 1) {
      archetype = "Классический Гиперкерри (ДПС + Стан + Саппорт)";
      roleMultiplier = 1.16;
      pros.push("Идеальный баланс ролей: высокий контроль стойки и взрывной урон в окне ошеломления.");
    } else if (anomalyCount >= 2 && supportCount >= 1) {
      archetype = "Аномальный дуэт / Хаос-отряд";
      roleMultiplier = 1.18;
      pros.push("Мощная синергия Аномалий атрибута с постоянным провоцированием Хаоса (Disorder).");
    } else if (anomalyCount >= 1 && attackCount >= 1 && supportCount >= 1) {
      archetype = "Гибридный отряд (Аномалия + ДПС)";
      roleMultiplier = 1.12;
      pros.push("Хорошая гибкость урона: стабильный урон от аномалий плюс криты.");
    } else if (attackCount >= 2 && (supportCount >= 1 || stunCount >= 1)) {
      archetype = "Двойное нападение (Dual Carry)";
      roleMultiplier = 1.05;
      pros.push("Высокий общий урон, но конкуренция за время на поле.");
    } else if (stunCount === 0 && anomalyCount === 0) {
      archetype = "Отряд без стана и аномалий";
      roleMultiplier = 0.88;
      cons.push("Отсутствие Устрашителей и Аномалистов затягивает бой — босс редко входит в стан.");
    }

    // 2. Elemental Matchup against Boss
    let elementMultiplier = 1.0;
    const bossWeaknesses = boss.weaknesses || [];
    const bossResistances = boss.resistances || [];

    let weaknessHits = 0;
    let resistanceHits = 0;

    team.forEach(m => {
      const attr = m.character.attribute;
      const isCarry = m.character.specialty === 'Attack' || m.character.specialty === 'Anomaly';

      if (bossWeaknesses.includes(attr)) {
        weaknessHits++;
        elementMultiplier += isCarry ? 0.16 : 0.08;
      }
      if (bossResistances.includes(attr)) {
        resistanceHits++;
        elementMultiplier -= isCarry ? 0.22 : 0.10;
      }
    });

    if (weaknessHits > 0) {
      pros.push(`Уязвимость босса закрыта (+${Math.round((elementMultiplier - 1.0) * 100)}% к урону за стихии ${bossWeaknesses.join('/')}).`);
    }
    if (resistanceHits > 0) {
      cons.push(`Внимание: босс имеет сопротивление к стихии ваших героев (${bossResistances.join('/')}), урон снижен.`);
    }

    // 3. Boss Mechanics Suitability
    let mechanicMultiplier = 1.0;
    const bId = boss.id;

    if (bId === 'phaethon-scorched-horizon') {
      // Phaethon: Into Flames stripped by Anomalies (Ice & Wind favored)
      if (anomalyCount >= 1) {
        mechanicMultiplier += 0.24;
        pros.push("Механика Паэтона: Аномалии быстро сбивают стаки 'Into Flames', кратно увеличивая урон.");
      } else {
        mechanicMultiplier -= 0.18;
        cons.push("Паэтон держит стаки 'Into Flames', снижая крит-урон вашей команды без аномалий.");
      }
      if (attributes.includes('Ice') && anomalyCount >= 1) {
        mechanicMultiplier += 0.10;
        pros.push("Ледяная аномалия вызывает заморозку и срыв стаков.");
      }
    } else if (bId === 'infernal-revenant') {
      // Infernal Revenant: Chain Parries + Ice/Wind
      if (attributes.includes('Ice') || attributes.includes('Wind')) {
        mechanicMultiplier += 0.18;
        pros.push("Стихии Льда и Ветра позволяют прерывать огненные фазы Ревенанта.");
      }
      if (stunCount >= 1 || supportCount >= 1) {
        mechanicMultiplier += 0.10;
        pros.push("Наличие персонажей помощи позволяет легко выполнять Цепное парирование.");
      }
    } else if (bId === 'kusarikku') {
      // Kusarikku: Corruptive Barrier, needs Defensive Assist / Stun; resists Ice and -40% pure anomaly
      if (stunCount >= 1 || specialties.includes('Defense')) {
        mechanicMultiplier += 0.22;
        pros.push("Устрашитель в пачке быстро разрушает 'Corruptive Barrier' через защитные помощи.");
      } else {
        mechanicMultiplier -= 0.15;
        cons.push("Без Устрашителя фиолетовый щит Кусарикку снимается медленно, замораживая набор очков.");
      }
      if (attributes.includes('Ice')) {
        mechanicMultiplier -= 0.18;
        cons.push("Кусарикку имеет сопротивление ко Льду — урон ледяных персонажей сильно урезан.");
      }
      if (anomalyCount >= 2 && stunCount === 0) {
        mechanicMultiplier -= 0.14;
        cons.push("Босс имеет пассивное снижение входящего урона от чистых аномалий на 40%.");
      }
      if (attributes.includes('Fire') || attributes.includes('Electric')) {
        mechanicMultiplier += 0.15;
        pros.push("Огонь и Электро бьют точно в уязвимости Кусарикку.");
      }
    } else {
      // General boss mechanics / favored specialties for other and future bosses
      const favoredSpec = boss.favoredSpecialty || boss.mechanics?.favoredSpecialty || [];
      favoredSpec.forEach(spec => {
        if (specialties.includes(spec)) {
          mechanicMultiplier += 0.09;
          pros.push(`Специальность '${spec}' отлично соответствует условиям боя против ${boss.ruName || boss.name}.`);
        }
      });
      if (stunCount >= 1 && (boss.weaknesses || []).some(w => attributes.includes(w))) {
        mechanicMultiplier += 0.08;
        pros.push(`Устрашитель под стихийную уязвимость босса обеспечивает быстрое оглушение.`);
      }
    }

    // 4. Investment Scaling (Mindscapes & W-Engines)
    let investmentMultiplier = 1.0;

    team.forEach((m, idx) => {
      const c = m.character;
      const w = m.weapon;
      const mindscape = m.mindscape || 0;
      const refinement = m.refinement || 1;

      // Base rarity
      if (c.rarity === 'S') {
        investmentMultiplier += 0.05;
        // S-rank Mindscapes
        investmentMultiplier += mindscape * 0.045;
        if (mindscape >= 1) investmentMultiplier += 0.02;
        if (mindscape >= 2) investmentMultiplier += 0.04;
        if (mindscape >= 6) investmentMultiplier += 0.10;
      } else {
        // A-rank Mindscapes
        investmentMultiplier += mindscape * 0.025;
        if (mindscape === 6) investmentMultiplier += 0.06;
      }

      // Weapon match
      if (w) {
        if (c.signatureWeapon && w.name === c.signatureWeapon) {
          investmentMultiplier += 0.12;
          pros.push(`Сигнатурный амплификатор у ${c.ruName || c.name} (${w.name}) даёт максимальную отдачу.`);
        } else if (w.rarity === 'S') {
          investmentMultiplier += 0.07;
        } else if (w.rarity === 'A') {
          investmentMultiplier += 0.03;
        }
        investmentMultiplier += (refinement - 1) * 0.015;
      }
    });

    // 5. Bangboo Synergy
    let bangbooMultiplier = 1.0;
    if (bangboo) {
      if (bangboo.rarity === 'S') bangbooMultiplier += 0.04;
      // Match element/faction
      const bName = bangboo.name.toLowerCase();
      if ((bName.includes('shark') || bName.includes('penguin')) && attributes.includes('Ice')) {
        bangbooMultiplier += 0.06;
        pros.push(`Банбу ${bangboo.name} ускоряет накопление ледяной аномалии.`);
      } else if ((bName.includes('rocket') || bName.includes('moccus')) && attributes.includes('Fire')) {
        bangbooMultiplier += 0.06;
        pros.push(`Банбу ${bangboo.name} идеально дополняет огненный урон отряда.`);
      } else if ((bName.includes('plug') || bName.includes('electro')) && attributes.includes('Electric')) {
        bangbooMultiplier += 0.06;
        pros.push(`Банбу ${bangboo.name} разгоняет электро-аномалию.`);
      } else if (bName.includes('butler') && attributes.includes('Ice')) {
        bangbooMultiplier += 0.05;
        pros.push("Дворецкий заливает драгоценную энергию для ротаций.");
      } else if (bName.includes('resona') && attributes.includes('Ether')) {
        bangbooMultiplier += 0.05;
      }
    }

    // 6. Seasonal Buff Synergy
    let buffMultiplier = 1.0;
    if (buff && buff.id !== 'none') {
      const favoredAttr = buff.favoredAttribute || [];
      const favoredSpec = buff.favoredSpecialty || [];

      let attrMatches = favoredAttr.filter(a => attributes.includes(a)).length;
      let specMatches = favoredSpec.filter(s => specialties.includes(s)).length;

      if (attrMatches > 0 || specMatches > 0) {
        const bonus = (buff.bonusMultiplier || 0.20) * (attrMatches > 0 && specMatches > 0 ? 1.0 : 0.7);
        buffMultiplier += bonus;
        pros.push(`Отряд отлично использует сезонный бафф '${buff.ruName || buff.name}' (+${Math.round(bonus * 100)}%).`);
      } else {
        cons.push(`Сезонный бафф '${buff.ruName || buff.name}' почти не даёт прибавки этому составу.`);
      }
    }

    // 7. Calculate Combined Multiplier & Estimated Scores
    const combinedMultiplier = roleMultiplier * elementMultiplier * mechanicMultiplier * investmentMultiplier * bangbooMultiplier * buffMultiplier;

    // Anchor to boss baseline stats
    const baseTarget = boss.targetScore?.sRank || 20000;
    const baseAvg = boss.avgScore || 23000;

    // Realistic score estimation
    let rawScore = baseAvg * (combinedMultiplier / 1.35); // 1.35 is normalized baseline
    rawScore = Math.max(12000, Math.min(32000, Math.round(rawScore)));

    const scoreMin = Math.round(rawScore * 0.94);
    const scoreMax = Math.round(rawScore * 1.06);

    // Full score mode (65,000 scale)
    const fullScoreScale = Math.min(65000, Math.round((rawScore / 25000) * 55000 * (combinedMultiplier / 1.25)));

    // Estimated Clear Time
    let estimatedTimeSeconds = Math.round(180 - ((rawScore - 12000) / (30000 - 12000)) * 115);
    estimatedTimeSeconds = Math.max(55, Math.min(180, estimatedTimeSeconds));

    // Clear Rank
    let rank = "B";
    let rankColor = "#FF5500";
    let clearVerdict = "Сложно: риск не уложиться в S-ранг";

    if (rawScore >= 23500) {
      rank = "S+";
      rankColor = "#00FF88";
      clearVerdict = "Легкий S-ранг: топовый урон и скорость";
    } else if (rawScore >= 20000) {
      rank = "S";
      rankColor = "#E6FF00";
      clearVerdict = "Уверенный S-ранг при аккуратной ротации";
    } else if (rawScore >= 17000) {
      rank = "A";
      rankColor = "#FFAA00";
      clearVerdict = "A-ранг (для S потребуется идеальный тайминг парирований)";
    }

    // Find closest historical runs in database
    const matchingRuns = (this.db.runs || [])
      .filter(r => r.bossId === boss.id || r.bossName.toLowerCase() === boss.name.toLowerCase())
      .map(r => {
        // Calculate similarity to team
        let matchCount = 0;
        const rAgents = (r.team || []).map(t => t.name.toLowerCase());
        team.forEach(m => {
          if (rAgents.includes(m.character.name.toLowerCase())) matchCount++;
        });
        return { ...r, matchCount };
      })
      .sort((a, b) => b.matchCount - a.matchCount || Math.abs(a.score - rawScore) - Math.abs(b.score - rawScore))
      .slice(0, 3);

    return {
      archetype,
      rank,
      rankColor,
      clearVerdict,
      score: rawScore,
      scoreRange: { min: scoreMin, max: scoreMax },
      fullScoreEquivalent: fullScoreScale,
      estimatedTimeSeconds,
      multipliers: {
        total: combinedMultiplier.toFixed(2),
        role: roleMultiplier.toFixed(2),
        element: elementMultiplier.toFixed(2),
        mechanics: mechanicMultiplier.toFixed(2),
        investment: investmentMultiplier.toFixed(2),
        bangboo: bangbooMultiplier.toFixed(2),
        buff: buffMultiplier.toFixed(2)
      },
      pros,
      cons,
      matchingRuns
    };
  }
}

// Export for Node and Browser environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AssaultPredictor;
}
if (typeof window !== 'undefined') {
  window.AssaultPredictor = AssaultPredictor;
}

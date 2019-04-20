(foo || []).length;

// =========
if (John.wife && John.wife.name) {
  return John.wife.name;
} else {
  return "Джон, пора тебе жениться";
}

// ====short
John.wife && John.wife.name || "Джон, пора тебе жениться";

// new===
//  Движение по цепочке будет продолжено только в том случае, если текущее свойство не равно null.
// 'use strict'
// John.wife ?.brother ?.dog ?.name;
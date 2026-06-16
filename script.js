const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const preamblePhrases = [
  ["We the People", "The Constitution begins with the people, not a king.", "Today: citizens help shape public life through voting, service, meetings, and respectful debate."],
  ["Form a more perfect Union", "The Constitution was meant to help the states work together better.", "Today: Americans cooperate across states on safety, roads, defense, trade, and emergencies."],
  ["Establish Justice", "A government of laws should treat people fairly.", "Today: courts and due process help people get a fair hearing."],
  ["Insure domestic Tranquility", "The Constitution aims to help keep peace at home.", "Today: communities solve conflicts through laws, rights, and public service."],
  ["Provide for the common defence", "The nation can act together to protect the country.", "Today: national defense is a shared responsibility."],
  ["Promote the general Welfare", "Government can support conditions that help communities thrive.", "Today: public services, safety, health, and infrastructure support everyday life."],
  ["Secure the Blessings of Liberty", "Freedom is something to protect now and pass forward.", "Today: each generation learns, uses, and safeguards constitutional rights."]
];

const preambleGrid = document.querySelector("#preambleGrid");
preamblePhrases.forEach(([phrase, meaning, example], index) => {
  const item = document.createElement("article");
  const panelId = `phrase-${index}`;
  item.className = "phrase-card";
  item.innerHTML = `
    <button class="phrase-button" aria-expanded="false" aria-controls="${panelId}">
      ${phrase}
    </button>
    <div class="phrase-panel" id="${panelId}">
      <p><strong>Plain English:</strong> ${meaning}</p>
      <p>${example}</p>
    </div>
  `;
  preambleGrid.appendChild(item);
});

preambleGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".phrase-button");
  if (!button) return;
  const panel = document.getElementById(button.getAttribute("aria-controls"));
  const isOpen = panel.classList.toggle("open");
  button.setAttribute("aria-expanded", String(isOpen));
});

const rights = [
  ["1st", "assets/generated/rights/right-01.jpg", "Speech, religion, press, peaceful assembly, and petition."],
  ["2nd", "assets/generated/rights/right-02.jpg", "The right to keep and bear arms, represented here with a constitutional shield."],
  ["3rd", "assets/generated/rights/right-03.jpg", "No forced quartering of soldiers in homes in peacetime."],
  ["4th", "assets/generated/rights/right-04.jpg", "Protection against unreasonable searches and seizures."],
  ["5th", "assets/generated/rights/right-05.jpg", "Due process, grand jury rights, and protection from self-incrimination."],
  ["6th", "assets/generated/rights/right-06.jpg", "Fair criminal trials, including a lawyer and an impartial jury."],
  ["7th", "assets/generated/rights/right-07.jpg", "Jury trials in many civil cases."],
  ["8th", "assets/generated/rights/right-08.jpg", "No excessive bail, excessive fines, or cruel and unusual punishment."],
  ["9th", "assets/generated/rights/right-09.jpg", "People have other rights beyond those listed."],
  ["10th", "assets/generated/rights/right-10.jpg", "Powers not given to the federal government are reserved to states or the people."]
];

const rightsGrid = document.querySelector("#rightsGrid");
rights.forEach(([number, image, text]) => {
  const card = document.createElement("article");
  card.className = "right-card reveal";
  card.innerHTML = `
    <strong>${number} Amendment</strong>
    <img class="right-image" src="${image}" alt="Generated civic illustration for the ${number} Amendment.">
    <p>${text}</p>
  `;
  rightsGrid.appendChild(card);
});

const heroes = [
  ["Thomas Jefferson", "Principal author", "Drafted the Declaration of Independence.", "The Declaration’s language still shapes how Americans talk about rights and self-government.", "assets/generated/heroes/thomas-jefferson.jpg", "https://www.archives.gov/founding-docs/declaration"],
  ["James Madison", "Constitution architect", "Major architect of the Constitution and a key figure behind the Bill of Rights.", "His work helps explain why written limits on power matter.", "assets/generated/heroes/james-madison.jpg", "https://www.archives.gov/founding-docs/bill-of-rights"],
  ["George Washington", "Convention president", "Presided over the Constitutional Convention and helped establish constitutional government.", "His example supported peaceful constitutional leadership.", "assets/generated/heroes/george-washington.jpg", "https://www.archives.gov/founding-docs/constitution"],
  ["Gouverneur Morris", "Preamble stylist", "Credited with much of the Constitution’s final wording and style, including the Preamble.", "Words like “We the People” gave the Constitution a powerful civic voice.", "assets/generated/heroes/gouverneur-morris.jpg", "https://constitutioncenter.org/blog/the-men-who-wrote-the-constitution"],
  ["Alexander Hamilton", "Ratification advocate", "Helped write The Federalist Papers defending the proposed Constitution.", "Public argument and persuasion are part of constitutional democracy.", "assets/generated/heroes/alexander-hamilton.jpg", "https://www.loc.gov/exhibits/creating-the-united-states/federalist-papers.html"],
  ["Benjamin Franklin", "Elder statesman", "Served as a Constitutional Convention delegate and urged compromise.", "Durable self-government often requires practical cooperation.", "assets/generated/heroes/benjamin-franklin.jpg", "https://www.archives.gov/founding-docs/constitution"],
  ["George Mason", "Rights advocate", "Influenced rights declarations and objected to the Constitution without a bill of rights.", "His concerns helped build momentum for explicit rights protections.", "assets/generated/heroes/george-mason.jpg", "https://www.archives.gov/founding-docs/bill-of-rights"],
  ["Frederick Douglass", "Promise challenger", "Challenged the nation to live up to liberty and equality.", "Founding ideals can be used to confront injustice.", "assets/generated/heroes/frederick-douglass.jpg", "https://www.nps.gov/frdo/index.htm"],
  ["Abraham Lincoln", "Union defender", "Connected Declaration ideals to preserving the Union and ending slavery.", "He framed equality as a national promise still being tested.", "assets/generated/heroes/abraham-lincoln.jpg", "https://www.nps.gov/liho/learn/historyculture/gettysburgaddress.htm"],
  ["Elizabeth Cady Stanton", "Suffrage advocate", "Connected founding language to women’s rights in the Declaration of Sentiments.", "Founding principles inspired movements to expand civic participation.", "assets/generated/heroes/elizabeth-cady-stanton.jpg", "https://www.nps.gov/wori/learn/historyculture/declaration-of-sentiments.htm"],
  ["Martin Luther King Jr.", "Promise-keeper", "Appealed to the Declaration and Constitution as promises America should fulfill.", "He showed how civic ideals can guide peaceful demands for equal rights.", "assets/generated/heroes/martin-luther-king-jr.jpg", "https://www.nps.gov/malu/learn/education/the-promissory-note.htm"]
];

const heroesGrid = document.querySelector("#heroesGrid");
heroes.forEach(([name, title, connection, today, image, source]) => {
  const card = document.createElement("article");
  card.className = "hero-card reveal";
  card.innerHTML = `
    <img class="portrait" src="${image}" alt="Generated lifelike historical portrait-style headshot of ${name}.">
    <h3>${name}</h3>
    <p class="title">${title}</p>
    <p><strong>Connection:</strong> ${connection}</p>
    <p><strong>Why it matters today:</strong> ${today}</p>
    <a href="${source}" target="_blank" rel="noopener">Source</a>
  `;
  heroesGrid.appendChild(card);
});

const questions = [
  {
    prompt: "Which three documents are called the Charters of Freedom?",
    options: ["Declaration, Articles of Confederation, and Constitution", "Declaration, Constitution, and Bill of Rights", "Constitution, Federalist Papers, and Bill of Rights"],
    answer: "Declaration, Constitution, and Bill of Rights"
  },
  {
    prompt: "Which document announced independence from Great Britain?",
    options: ["The Constitution", "The Declaration of Independence", "The Bill of Rights"],
    answer: "The Declaration of Independence"
  },
  {
    prompt: "Which document is described as a written framework or rulebook for government?",
    options: ["The Declaration of Independence", "The Bill of Rights", "The Constitution"],
    answer: "The Constitution"
  },
  {
    prompt: "What is the Bill of Rights?",
    options: ["The first ten amendments", "Article V of the Constitution", "The first draft of the Declaration"],
    answer: "The first ten amendments"
  },
  {
    prompt: "Which Preamble phrase says the people are the source of the Constitution’s authority?",
    options: ["Establish Justice", "We the People", "Secure the Blessings of Liberty"],
    answer: "We the People"
  },
  {
    prompt: "Which First Amendment benefit is highlighted in the benefits section?",
    options: ["Fair trials", "Free expression", "Equal protection"],
    answer: "Free expression"
  },
  {
    prompt: "What does Article V provide?",
    options: ["A peaceful process for amendment", "The list of protected freedoms in the First Amendment", "The opening words of the Preamble"],
    answer: "A peaceful process for amendment"
  },
  {
    prompt: "Which amendment abolished slavery?",
    options: ["14th Amendment", "13th Amendment", "15th Amendment"],
    answer: "13th Amendment"
  },
  {
    prompt: "Which amendment protected women’s right to vote?",
    options: ["19th Amendment", "24th Amendment", "26th Amendment"],
    answer: "19th Amendment"
  },
  {
    prompt: "Which amendment lowered the voting age to 18?",
    options: ["24th Amendment", "15th Amendment", "26th Amendment"],
    answer: "26th Amendment"
  }
];

const quizBox = document.querySelector("#quizBox");
let currentQuestion = 0;
let answered = false;
let correctAnswers = 0;

function renderQuiz() {
  const question = questions[currentQuestion];
  answered = false;
  quizBox.innerHTML = `
    <p><strong>Clue ${currentQuestion + 1} of ${questions.length}</strong></p>
    <h3>${question.prompt}</h3>
    <div class="quiz-options">
      ${question.options.map(option => `<button type="button">${option}</button>`).join("")}
    </div>
    <p class="feedback"></p>
  `;
}

quizBox.addEventListener("click", (event) => {
  const option = event.target.closest(".quiz-options button");
  if (!option || answered) return;
  answered = true;
  const question = questions[currentQuestion];
  const feedback = quizBox.querySelector(".feedback");
  const correct = option.textContent === question.answer;
  if (correct) correctAnswers += 1;
  feedback.textContent = correct ? "Correct. You found the clue." : `Good try. The answer is ${question.answer}.`;
  const next = document.createElement("button");
  next.type = "button";
  next.className = "next-question";
  next.textContent = currentQuestion === questions.length - 1 ? "See score" : "Next clue";
  quizBox.appendChild(next);
});

quizBox.addEventListener("click", (event) => {
  if (!event.target.classList.contains("next-question")) return;
  if (event.target.textContent === "Restart hunt") {
    currentQuestion = 0;
    correctAnswers = 0;
    renderQuiz();
    return;
  }
  if (currentQuestion === questions.length - 1) {
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    quizBox.innerHTML = `
      <p><strong>Scavenger hunt complete</strong></p>
      <h3>You scored ${percentage}%</h3>
      <p class="feedback">${correctAnswers} out of ${questions.length} correct. Nice civic detective work.</p>
      <button type="button" class="next-question">Restart hunt</button>
    `;
    answered = true;
    return;
  }
  currentQuestion += 1;
  renderQuiz();
});

function setupReveals() {
  const revealItems = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    revealItems.forEach(item => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => observer.observe(item));
}

renderQuiz();
setupReveals();

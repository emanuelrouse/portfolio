/* eslint-disable no-console */
const views = {
  aboutView: `<h2>About Me:</h2> <p> Hi, I'm Emanuel. I love code, caffeine and cats! I'm Also addicted to all things things tech.</p>`,

  bioView: `<h2>Bio:</h2> <p>I'm a lifelong learner who loves video games, finance, and solving problems. Nothing makes me happier than seeing a block of code that I wrote work as intended after completing my research and implementation. If I'm not programming: I'm either reading a book on the subject or playing video games.</p>`,

  contactViewForm: `<form> 
      <fieldset>
        <label for="name">Name:</label>
        <input type="text" name="contact-name" id="name">
        <br/>
        <label for="email">Email:</label>
        <input type="text" name="contact-email" id="email">
      </fieldset>
  </form>`,
};

/* 
Might add phone number to contacts menu
        <br/>
        <label for="number">Phone Number:</label>
        <input type="text" name="contact-number" id="number">
*/

const projects = [
  {
    name: 'Pokemon Quiz',
    screenshot: '../images/pokemon_quiz_screenshot.png',
    description:
      "A quiz app for the hit 90's tv series Pok&eacute;mon. Users can submit guesses, track questions answered and number of answers correct.",
    repo: {
      live: 'https://emanuelrouse.github.io/pokemon-quiz-app/',
      github: 'https://github.com/emanuelrouse/pokemon-quiz-app',
    },
    technologies: ['HTML5', 'CSS3', 'jQuery', 'JavaScript'],
  },
  {
    name: 'API Capstone',
    screenshot: './images/api-capstone-screenshot',
    description: 'An app made for thinkfuls API capstone.',
    repo: {
      live: 'https://emanuelrouse.github.io/api-capstone-app/',
      github: 'https://github.com/emanuelrouse/api-capstone-app',
    },
    technologies: ['HTML5', 'CSS3', 'jQuery', 'JavaScript', 'Fetch'],
  },
  {
    name: 'Fullstack Capstone',
    screenshot: './images/closer-app-screenshot',
    description: 'An app made for thinkfuls fullstack-capstone',
    repo: {
      live: 'https://emanuelrouse.github.io/closer-app/',
      github: 'https://github.com/emanuelrouse/closer-app',
    },
    technologies: [
      'HTML5',
      'CSS3',
      'jQuery',
      'JavaScript',
      'Fetch',
      'React',
      'NodeJs,',
    ],
  },
  {
    name: 'AllTheDocs',
    screenshot: './images/allthedocs_search_view.png',
    description:
      'The project idea was spawned from the observation that new developers often need multiple sources of assistance while coding to find helpful terms and knowledge.',
    repo: {
      live: 'https://allthedocs.audreycious.now.sh/',
      github: 'https://github.com/Audreycious/AllTheDocs',
    },
    technologies: ['HTML5', 'CSS3', 'jQuery', 'JavaScript', 'Fetch'],
  },
];

let currentIndex = 0;
// if on first project display first project
// otherwise display next project
// otherwise ect...

function generateProjectHtml() {
  return `<div class="project js-project">
  <h2 class="js-project-name">${projects[currentIndex].name}</h2>
  <img src="${projects[currentIndex].screenshot}" alt="${projects[currentIndex].name}" class="project-screenshot js-project-screenshot">
  <p>${projects[currentIndex].description}</p>
  <a href="${projects[currentIndex].repo.live}" class="js-live-link">Live Demo</a>
  <a href="${projects[currentIndex].repo.github}" class="js-github-repo">Github repo</a>
</div>
<button type="button" class="js-previous-btn">Previous Project</button>
<button type="button" class="js-next-btn">Next Project</button>
`;
}

// Render functions
function renderProjectsSection() {
  const projectsSection = generateProjectHtml(projects);
  $('.js-projects').html(projectsSection);
}

function renderAboutView() {
  const { aboutView } = views;
  $('.js-info').html(aboutView);
}

function renderBioView() {
  const { bioView } = views;
  $('.js-info').html(bioView);
}

function renderContactViewForm() {
  const { contactViewForm } = views;
  $('.js-info').html(contactViewForm);
}

// Event handlers
function handlePreviousProjectButton() {
  console.log(`handlePreviousProjectButton ran`);
  // when clicked check currentIndex
  // if currentIndex > 0 decrement currentIndex

  $('.js-projects').on('click', '.js-previous-btn', () => {
    console.log('previous btn clicked');
    console.log(currentIndex);
    if (currentIndex > 0) {
      currentIndex -= 1;
    } else if (currentIndex === 0) {
      currentIndex = projects.length - 1;
    }

    renderProjectsSection();
  });
}

function handleNextProjectButton() {
  console.log(`handleNextProjectButton ran`);
  // when clicked check currentIndex
  $('.js-projects').on('click', '.js-next-btn', () => {
    currentIndex += 1;
    if (currentIndex >= projects.length) {
      currentIndex = 0;
      // once current index is greater than projects.length set currentIndex to 0
    }

    console.log(`btn clicked`);
    renderProjectsSection();
    console.log(currentIndex);
  });
  // depending on currentIndex display the currentIndex + 1
  // if currentIndex > projects.length go to 0
  // pass that updated number to the render
}

// Render functions
// when about btn is clicked
// render the aboutView

function handleAboutLink() {
  console.log(`handleAboutLink ran`);

  $('nav').on('click', '.js-about-link', e => {
    e.preventDefault();
    renderAboutView();
  });
}

function handleBioLink() {
  console.log(`handleBioLink ran`);

  $(`nav`).on('click', '.js-bio-link', e => {
    e.preventDefault();
    renderBioView();
  });
}

function handleContactLink() {
  console.log(`handleContactLink ran`);

  $('nav').on('click', '.js-contact-link', e => {
    e.preventDefault();
    renderContactViewForm();
  });
}

function main() {
  handleAboutLink();
  handleBioLink();
  handleContactLink();
  handleNextProjectButton();
  handlePreviousProjectButton();
  renderProjectsSection();
}

$(main);

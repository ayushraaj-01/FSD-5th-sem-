const jobs = [
  {
    date: '20 May, 2023',
    company: 'Amazon',
    title: 'Senior UI/UX Designer',
    tags: ['Part time', 'Senior level', 'Distant', 'Project work'],
    salary: '$250/hr',
    location: 'San Francisco, CA',
    accent: 'amazon',
    tone: 'mint'
  },
  {
    date: '4 Feb, 2023',
    company: 'Google',
    title: 'Junior UI/UX Designer',
    tags: ['Full time', 'Junior level', 'Remote', 'Flexible schedule'],
    salary: '$150/hr',
    location: 'California, CA',
    accent: 'google',
    tone: 'lavender'
  },
  {
    date: '11 Apr, 2023',
    company: 'Twitter',
    title: 'UX Designer',
    tags: ['Full time', 'Middle level', 'Remote'],
    salary: '$120/hr',
    location: 'California, CA',
    accent: 'twitter',
    tone: 'peach'
  },
  {
    date: '2 Apr, 2023',
    company: 'Airbnb',
    title: 'Graphic Designer',
    tags: ['Part time', 'Senior level', 'Distant'],
    salary: '$300/hr',
    location: 'New York, NY',
    accent: 'airbnb',
    tone: 'green'
  },
  {
    date: '29 Jun, 2023',
    company: 'Dribbble',
    title: 'Senior Motion Designer',
    tags: ['Part time', 'Full day', 'Shift work'],
    salary: '$260/hr',
    location: 'New York, NY',
    accent: 'dribbble',
    tone: 'pink'
  },
  {
    date: '18 Jan, 2023',
    company: 'Apple',
    title: 'Graphic Designer',
    tags: ['Part time', 'Distant'],
    salary: '$140/hr',
    location: 'San Francisco, CA',
    accent: 'apple',
    tone: 'cream'
  }
];


























const jobGrid = document.getElementById('jobGrid');]
jobs.map
const box = document.getElementById('box');
const datecontainer = document.getElementById('date-container');
const header = document.getElementById('header');
const tag = document.getElementById('tag');

datacon.innerText = job.date;
headingCon.innerHTML = job.title;
jobs.tags.map({t-tag} => `<span class="tag">${tag}</span>`).join('');   



























const createCard = (job) => `
  <article class="job-card ${job.tone}">
    <div class="card-top">
      <span class="date">${job.date}</span>
      <span class="company-mark ${job.accent}">${job.company.charAt(0)}</span>
    </div>

    <div class="job-body">
      <p class="company-name">${job.company}</p>
      <h2 class="title">${job.title}</h2>

      <div class="tags">
        ${job.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>

    <div class="card-foot">
      <div class="salary">${job.salary}<br /><small>${job.location}</small></div>
      <button class="detail-btn" type="button">Details</button>
    </div>
  </article>
`;

jobGrid.innerHTML = jobs.map(createCard).join('');
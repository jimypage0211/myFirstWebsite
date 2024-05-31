document.addEventListener("DOMContentLoaded", () => {
  const about = `
    <div class="container">
    <h1 class="my-4">My Website</h1>
    <div class="text-center">
      <img
        src="313799010_823931822368724_502185704385822059_n.jpg"
        class="img-fluid"
        alt="Profile Picture" />
    </div>
    <h2 class="mt-4">Jesus Suarez - Full Stack Developer</h2>
    <p>
      I'm a Computer Science professional with a unique journey.
      Originally from Cuba, I moved to the U.S. and juggled various jobs
      while studying at night, learning resilience and adaptability.
      Before attending Boston University, I worked in underwriting and
      credit analysis, developing skills in risk assessment and data
      analysis. This experience, combined with my Computer Science degree,
      has equipped me to tackle challenges in tech, whether in
      development, data analysis, or both. I'm ready to bring my diverse
      background to innovative projects and teams. Let's connect and see
      how my journey can add value.
    </p>
  </div>
    `;
  load(about);
  const skillProjects = `
  <div class="container text-center">
        <h1 class="my-4">Programming Languages</h1>
        <ul class="list-group list-group-flush mx-auto" style="max-width: 400px;">
            <li class="list-group-item">Javascript</li>
            <li class="list-group-item">Typescript</li>
            <li class="list-group-item">Python</li>
            <li class="list-group-item">Java</li>
        </ul>
        <h1 class="my-4">Frameworks</h1>
        <ul class="list-group list-group-flush mx-auto" style="max-width: 400px;">
            <li class="list-group-item">Django</li>
            <li class="list-group-item">React</li>
            <li class="list-group-item">Pandas</li>
        </ul>
        <h1 class="my-4">Projects</h1>
        <ul class="list-group list-group-flush mx-auto" style="max-width: 400px;">
            <li class="list-group-item">
                <a href="https://github.com/jimypage0211/Capstone">Restaurant booking platform</a> - <a href="https://youtu.be/P4Sl3InsykM">Demo</a>
            </li>
            <li class="list-group-item">
                <a href="https://github.com/jimypage0211/CS50xWeb_commerce">E-commerce platform</a> - <a href="https://youtu.be/_8E1AZxmDNk">Demo</a>
            </li>
        </ul>
    </div>
  `;

  const contact = `
  <div class="container text-center">
        <h1 class="my-4">Contact Information</h1>
        <h3>Email: <a href="mailto:someone@example.com">jimypage0211@gmail.com</a></h3>
    </div>
  `;
  const aboutButton = document.querySelector("#about");
  const skillsAndProjectsButton = document.querySelector("#SandP");
  const contactButton = document.querySelector("#contact");

  aboutButton.addEventListener("click", () => {
    load(about);
  });
  skillsAndProjectsButton.addEventListener("click", () => {
    load(skillProjects);
  });
  contactButton.addEventListener("click", () => {
    load(contact);
  });
});

function load(page) {
  const root = document.querySelector("#root");
  root.innerHTML = page;
}

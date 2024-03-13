//********************************* Navbar Button Event Handling

document.addEventListener("click", function (event) {
    var navbarCollapse = document.getElementById("navbarSupportedContent");
    var navbarToggle = document.querySelector(".navbar-toggler");

    if (!navbarCollapse.classList.contains("show")) {
        return; 
    }

    var clickedElement = event.target;

    if (!clickedElement.classList.contains("navbar-toggler") && !navbarCollapse.contains(clickedElement)) {
        navbarToggle.click(); 
    }
});


//********************************* Navbar List Event Handling

const content = {
    aboutHTML: '<h1 class="text-center section-header ubuntu-bold typewriter">About Me<span class="blinking-span">|</span><div class="container-fluid break"></div></h1> <img src="images/profile.png" class="float-start headshot"><article class="fs-6 ubuntu-light">Welcome to my website! I’m a data geek with a background in classical music, and I work in the music publishing industry as a data analyst. My expertise spans the entire data lifecycle, from designing a database to visualizing data. I have experience with Python, Polars, Pandas, PostgreSQL, MySQL, AWS Redshift, IBM Db2, Apache Airflow, AWS Glue, Apache Spark, Bash Shell Scripting, NoSQL DBs (MongoDB, Apache Cassandra, and IBM Cloudant), and BI using IBM Cognos, Tableau, and R. I continue to build my tech stack and follow the latest data trends through and combination of real-world projects and online learning on platforms like Coursera.<br><br> Despite my “non-traditional” background, the shift from a musical career to programming came quite naturally to me. I always enjoyed the academic aspects of music such as music theory and musicology, and the musical mind is trained to think through abstraction and groupings. Having spent decades at the piano and several years teaching, breaking down complex systems into chunks is almost instinctual, and the process of collecting raw data and transforming it into something orderly and useful is akin to the process of taking an unfamiliar score and bringing the music to the point of performance. The tech world is always in a state of rapid change, and I think my musical background helps me adapt quickly, creatively, and positively as I continue to learn and explore new technologies.<br><br>Please take a moment to explore the rest of my website!</article>',
    projectsHTML: '<h1 class="text-center section-header ubuntu-bold typewriter">Projects<span class="blinking-span">|</span> <div class="container-fluid break"> </h1> </div> <div class="container text-center"> <div class="row"> <div class="col-8"> <h2 class="container-fluid ubuntu-bold project-title g-0 border rounded ">Polars Demo</h2> <div class="ratio ratio-16x9 g-0 border rounded shadow-sm"><iframe src="./blogs/Polars Tutorial.html" title="Polars Demo" class="project" allowfullscreen></iframe> </div> </div> <div class="col-4" fs-6 ubuntu-light> <h2 class="container-fluid ubuntu-bold">Description</h2> I wrote the following tutorial to help Python users get familiar with Polars, a new, lightning-fast DataFrame library. Check out my complimentary <a href="https://medium.com/@jonathanscofield1/start-using-polars-in-10-minutes-6a3b30a7f620">Medium</a> article! </div> </div> </div> <div class="container text-center"> <div class="row"> <div class="col-8"> <h2 class="container-fluid ubuntu-bold project-title g-0 border rounded ">Web Scraping Demo</h2> <div class="ratio ratio-16x9 ratio ratio-16x9 g-0 border rounded shadow-sm"><iframe class="project" src="./blogs/Web Scraping a Petroleum Database.html" title="Web Scraping Demo" allowfullscreen></iframe> </div> </div> <div class="col-4" fs-6 ubuntu-light> <h2 class="container-fluid ubuntu-bold">Description</h2> This project demonstrates how to use Selenium to extract data from a JavaScript-enabled website. </div> </div> </div>',
    blogHTML: '<h1 class="text-center section-header ubuntu-bold typewriter">Blog<span class="blinking-span">|</span> <div class="container-fluid break"> </h1> </div><div class="col-md-6"> <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"> <div class="col p-4 d-flex flex-column position-static"> <strong class="d-inline-block mb-2 text-success-emphasis g-0 border rounded ">AWS Redshift</strong> <h3 class="mb-0 ubuntu-bold">Formatting Text Literals in UNLOAD</h3> <div class="mb-1 text-body-secondary ubuntu-light">3/11/2024</div> <p id="Article1" class="mb-auto ubuntu-light"></p></div> </div> </div>',
    contactHTML: '<h1 class="text-center section-header ubuntu-bold typewriter">Contact Me<span class="blinking-span">|</span> <div class="container-fluid break"></div></h1><div class="container-fluid text-center"><article class="fs-6 ubuntu-light">I would love to hear from you! Please direct all inquiries to jscofield.dev@gmail.com or click on the button below.</article><form action="mailto:jscofield.dev@gmail.com?subject=Website Inquiry" method="post" enctype="text/plain"><button type="submit" class="btn btn-secondary btn-lg my-3 custom-button">Email Me!</button></form></div>'
};


const aboutButton = document.getElementById("about-selector");
const projectButton = document.getElementById("project-selector");
const blogButton = document.getElementById("blog-selector");
const contactButton = document.getElementById("contact-selector");

aboutButton.addEventListener("click", function () {
    const textElement = document.getElementById("changeable-content");
    textElement.innerHTML = content.aboutHTML;
}
);

projectButton.addEventListener("click", function () {
    const textElement = document.getElementById("changeable-content");
    textElement.innerHTML = content.projectsHTML;
}
);

blogButton.addEventListener("click", function () {
    const textElement = document.getElementById("changeable-content");
    textElement.innerHTML = content.blogHTML;
    const contentContainer = document.getElementById('Article1');
    fetch('./articles/article1.html')
        .then(response => response.text())
        .then(data => {
            contentContainer.innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });
}
);

contactButton.addEventListener("click", function () {
    const textElement = document.getElementById("changeable-content");
    textElement.innerHTML = content.contactHTML;
}
);








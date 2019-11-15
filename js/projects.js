var projects = [];
const initialFilter = 'highlightsIntro';
var currentFilter = initialFilter;

// list of tags
/*
generalIntro: "",
highlightsIntro: "",
developmentIntro: "",
uxResearchIntro: "",
uxDesignIntro: "",
teamworkIntro: "",
webIntro: "",
mobileIntro: "",
physicalIntro: "",
*/

projects.push(
    {
        /**** Section to add info ****/
        title: "Handl",
        fileName: "handl",
        generalIntro: "Developing a contact exchange mobile app using user-centered design methods.",
        highlightsIntro: "Developing a contact exchange mobile app using user-centered design methods.",
        developmentIntro: "Developed app UI and user information storage/management and translation into QR codes.",
        uxResearchIntro: "Performed interviews and competitive analysis to identify users' needs.",
        uxDesignIntro: "Designed and tested clickable mockups in early product interations.",
        teamworkIntro: "Coordinated teamwork and bridged communication between designers and developers.",
        webIntro: "Designed and created a website that introduces the app and the team.",
        mobileIntro: "Created an app that facilitates contact/social media exchange via QR codes.",

        awardWinner: true,
        /**** Edits end here ****/

        introSelected: "generalIntro"
    },
    {
        /**** Section to add info ****/
        title: "Carvel’s Online Cake Ordering",
        fileName: "carvel",
        generalIntro: "Enhancing Carvel's online cake ordering experience through user-centered design methods.",
        highlightsIntro: "Enhancing Carvel's online cake ordering experience through user-centered design methods.",
        uxResearchIntro: "Performed documentation mining, competitive UX benchmarking, focus groups, and think-aloud testing.",
        uxDesignIntro: "Analyzed research findings and created design implications, personas, journey maps, and mockups.",
        teamworkIntro: "Cooperated with designers and contributed my organizational and analytical skills.",
        webIntro: "Enhanced navigation, information architecture, and appearance of Carvel's online cake ordering site.",
        /**** Edits end here ****/

        introSelected: "generalIntro"
    },
    {
        /**** Section to add info ****/
        title: "Micro-donation in Grocery Stores",
        fileName: "micro_donation",
        generalIntro: "Designing a user-centerd micro-donation system in grocery stores.",
        //developmentIntro: "";
        uxResearchIntro: "Performed semi-structured interviews and prototype walkthroughs.",
        uxDesignIntro: "Designed donation experience using an affinity map and an experience map as ideation tools.",
        teamworkIntro: "Cooperated with designers and contributed my organizational and analytical skills.",
        //webIntro: "",
        //physicalIntro: "",
        /**** Edits end here ****/

        introSelected: "generalIntro"
    },
    /*{
        title: "this.website",
        fileName: "",
        generalIntro: "",
        highlightsIntro: "",
        developmentIntro: "",
        uxResearchIntro: "sdfsdf",
        uxDesignIntro: "sdfds",
        webIntro: "",

        introSelected: "generalIntro"
    },*/
    {
        /**** Section to add info ****/
        title: "Glissade",
        fileName: "glissade",
        generalIntro: "Research and development of a novel balance-shifting stylus with orientation sensing capability.",
        highlightsIntro: "Research and development of a novel balance-shifting stylus with orientation sensing capability.",
        developmentIntro: "Developed algorithms to overcome sensing issues and novel games with Unity.",
        teamworkIntro: "Collaborated with students and advisor in user research sessions and application development.",
        physicalIntro: "Designed and developed the balance-shifting stylus with Arduino and 3D printed parts.",
        /**** Edits end here ****/

        introSelected: "generalIntro"
    },
    {
        /**** Section to add info ****/
        title: "Online Statistic Managing System",
        fileName: "statistics",
        generalIntro: "Developing an automated weekly stats report system for leaders of a 90-man organization.",
        developmentIntro: "Created a system with Google Sheets that manages and visualizes statistics collected through the internet.",
        webIntro: "Created a system with Google Sheets that manages and visualizes statistics collected through the internet.",
        /**** Edits end here ****/

        introSelected: "generalIntro"
    },
    {
        /**** Section to add info ****/
        title: "Cephalomotion",
        fileName: "cephalomotion",
        generalIntro: "Developing a head-controlled computer input application using the built-in webcam.",
        developmentIntro: "Developed a head-controlled computer input application and a sensor data filter.",

        publishedWork: true,
        /**** Edits end here ****/

        introSelected: "generalIntro"
    },
    /*{
        title: "Outfit Pro",
        fileName: "outfit",
        generalIntro: "Some people spend a considerable amount of time trying on different outfits each morning. To save their time, we developed Outfit Pro, an FPGA-based system that helps visualize various outfit combinations.",
        developmentIntro: "",
        teamworkIntro: "",
        physicalIntro: "",

        introSelected: "generalIntro"
    },
    {
        title: "Taggem",
        fileName: "taggem",
        generalIntro: "Trying to locate a specific photo on a device can sometimes be difficult and frustrating. This app enables quick photo search by displaying search results in categories according to the tags assigned to each picture.",
        teamworkIntro: "",
        mobileIntro: "",

        introSelected: "generalIntro"
    }*/
);

for(let i = 0; i < projects.length; i++){
    let htmlInsert = "";

    // create project box
    htmlInsert += '<div id="project-box' + i +  '" class="project-container-box">\n';
    htmlInsert += '<a href="projects/' + projects[i].fileName + '.html" target="_blank">\n';
    htmlInsert += '<div class="project-container-text" style="background-image: url(\'images/projects/' + projects[i].fileName + '.jpg\'); background-size: cover;">\n';
    htmlInsert += '<h3';
    if(projects[i].awardWinner != undefined) htmlInsert += ' class="award-winner"';
    if(projects[i].publishedWork != undefined) htmlInsert += ' class="published-work"';
    htmlInsert += '>' + projects[i].title + '</h3>\n';
    htmlInsert += '<p id="project-intro' + i + '">' + projects[i].generalIntro + '</p>\n';
    htmlInsert += '</div></a>\n';
    // insert tags
    htmlInsert += '<div id="project-tags' + i +  '"class="project-container-tags">\n';
    if(projects[i].highlightsIntro != undefined){
        htmlInsert += '<button id="highlightsIntro-tag' + i + '" onclick="changeProjectIntro(\'highlightsIntro\','  + i + ')">Highlights</button>'
    }
    if(projects[i].developmentIntro != undefined){
        htmlInsert += '<button id="developmentIntro-tag' + i + '" onclick="changeProjectIntro(\'developmentIntro\','  + i + ')">Development</button>'
    }
    if(projects[i].uxResearchIntro != undefined){
        htmlInsert += '<button id="uxResearchIntro-tag' + i + '" onclick="changeProjectIntro(\'uxResearchIntro\','  + i + ')">UX Research</button>'
    }
    if(projects[i].uxDesignIntro != undefined){
        htmlInsert += '<button id="uxDesignIntro-tag' + i + '" onclick="changeProjectIntro(\'uxDesignIntro\','  + i + ')">UX Design</button>'
    }
    if(projects[i].teamworkIntro != undefined){
        htmlInsert += '<button id="teamworkIntro-tag' + i + '" onclick="changeProjectIntro(\'teamworkIntro\','  + i + ')">Teamwork</button>'
    }
    if(projects[i].webIntro != undefined){
        htmlInsert += '<button id="webIntro-tag' + i + '" onclick="changeProjectIntro(\'webIntro\','  + i + ')">Web</button>'
    }
    if(projects[i].mobileIntro != undefined){
        htmlInsert += '<button id="mobileIntro-tag' + i + '" onclick="changeProjectIntro(\'mobileIntro\','  + i + ')">Mobile</button>'
    }
    if(projects[i].physicalIntro != undefined){
        htmlInsert += '<button id="physicalIntro-tag' + i + '" onclick="changeProjectIntro(\'physicalIntro\','  + i + ')">Physical</button>'
    }
    htmlInsert += '</div>';

    htmlInsert += '</div>';
    document.getElementById('projects').insertAdjacentHTML('beforeend', htmlInsert);
}

/* What the created html sections look like
          '<div class="project-container-box"> \
            <a href="#"> \
              <div class="project-container-text" style="background-image: url(\'images/projects/glissade.jpg\'); background-size: cover;"> \
                <h3>Box Seven</h3> \
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec elit urna. Suspendisse a erat a nibh imperdiet fermentum. In eleifend ultricies massa, id pretium purus convallis nec. </p> \
              </div> \
            </a> \
            <div class="project-container-tags"> \
                <button onclick="myFunction()">Highlights</button> \
                <button onclick="myFunction()">UX Research</button> \
                <button onclick="myFunction()">UX Design</button> \
                <button onclick="myFunction()">Teamwork</button> \
                <button onclick="myFunction()">Web</button> \
                <button onclick="myFunction()">Physical</button> \
            </div> \
          </div>'
*/

// 
searchTag(initialFilter);

function changeProjectIntro(introType, projectIndex){
    let introElement = document.getElementById('project-intro' + projectIndex);
    introElement.style.color = 'rgb(255, 255, 255, 0)';

    if(projects[projectIndex].introSelected != introType){
        if(projects[projectIndex].introSelected != 'generalIntro'){
            document.getElementById(projects[projectIndex].introSelected + '-tag' + projectIndex).style.backgroundColor = "var(--theme-color-2)";
        }
        document.getElementById(introType + '-tag' + projectIndex).style.backgroundColor = "var(--theme-color-1)";
        setTimeout(() => {changeProjectIntro2(introType, projectIndex);}, 500);
        projects[projectIndex].introSelected = introType;
    }else{
        if(projects[projectIndex].introSelected != 'generalIntro'){
            document.getElementById(projects[projectIndex].introSelected + '-tag' + projectIndex).style.backgroundColor = "var(--theme-color-2)";
        }
        setTimeout(() => {changeProjectIntro2('generalIntro', projectIndex);}, 500);
        projects[projectIndex].introSelected = 'generalIntro';
    }
}
function changeProjectIntro2(introType, projectIndex){
    let introElement = document.getElementById('project-intro' + projectIndex);
    introElement.innerHTML = projects[projectIndex][introType];
    introElement.style.color = 'rgb(255, 255, 255)';
}

function searchTag(introType){
    document.getElementById('filter-' + currentFilter).style.background = 'none';
    document.getElementById('filter-' + introType).style.background = 'var(--theme-color-1)';
    currentFilter = introType;
    // show/hide projects
    for(let i = 0; i < projects.length; i++){
        let projectBox = document.getElementById('project-box' + i);
        let projectTags = document.getElementById('project-tags' + i);

        if(projects[i][introType] != undefined){
            projectBox.style.width = '400px';
            projectBox.style.height = '360px';
            projectBox.style.opacity = 1;
            projectBox.style.margin = '10px';

            projectTags.style.display = 'flex';
            // Clear selected tag so that changeProjectIntro() in the next line will work properly
            if(projects[i].introSelected != 'generalIntro'){
                document.getElementById(projects[i].introSelected + '-tag' + i).style.backgroundColor = "var(--theme-color-2)";
                projects[i].introSelected = "generalIntro";
            }

            changeProjectIntro(introType, i);
        }else{
            projectBox.style.width = 0;
            projectBox.style.height = 0;
            projectBox.style.opacity = 0;
            projectBox.style.margin = 0;

            projectTags.style.display = 'none';
        }
    }
    
}
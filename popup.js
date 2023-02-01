const projects = [
  {
    title: 'TONIC 1',
    prof: ['Canopy', 'back end Dev', '2015'],
    src: 'images/SnapshootPortfolio.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"],
    technologies: ['html', 'css', 'javascript', 'Github', 'Ruby', 'Bootstrap'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'TONIC 2',

    prof: ['Canopy', 'back end Dev', '2015'],
    src: 'images/SnapshootPortfolio.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"],
    technologies: ['html', 'css', 'javascript', 'Github', 'Ruby', 'Bootstrap'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'TONIC 3',
    prof: ['Canopy', 'back end Dev', '2015'],
    src: 'images/SnapshootPortfolio.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"],
    technologies: ['html', 'css', 'javascript', 'Github', 'Ruby', 'Bootstrap'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
  {
    title: 'TONIC 4',
    prof: ['Canopy', 'back end Dev', '2015'],
    src: 'images/SnapshootPortfolio.png',
    description: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"],
    technologies: ['html', 'css', 'javascript', 'Github', 'Ruby', 'Bootstrap'],
    seeLiveLink: '#',
    seeSourceLink: '#',
  },
];

const projectDetailCard = document.createElement('div');
projectDetailCard.className = 'project-detail-card';
const popUp = document.getElementById('project-details');
const Allbuttons = document.querySelectorAll('.pop');
const btns = Array.from(Allbuttons);

function desktop(index) {
  popUp.style.display = 'block';
  popUp.appendChild(projectDetailCard);
  projectDetailCard.innerHTML = `
    <div class="modal-content">

   
        <div class="modal-head">
            <h2>${projects[index].title}</h2>
        
            <a id="close-popUp">&times;</a>

        </div>
        <div class="modal-prof">
            <ul class="project-liste">
            <li class="lister">${projects[index].prof[0]}</li>
            <img
                    class="btn"
                    src="images/Counter.png"
                    alt="Dot"
                  />
            <li class="lister">${projects[index].prof[1]}</li>
            <img
                    class="btn"
                    src="images/Counter.png"
                    alt="Dot"
                  />
            <li class="lister">${projects[index].prof[2]}</li>
          </ul>

        </div>
        <div class="modal-image">
        <img src=${projects[index].src} alt="Screenshot-of-" >
        </div>
        <div class="modal-main">
  <div class="modal-description">
    <p>${projects[index].description}</p>
  </div>
  <div class="modal-tech">
  <div class="modal-technolog">
  <ul class="project-lists">
    <li class="list">${projects[index].technologies[0]}</li>

    <li class="list">${projects[index].technologies[1]}</li>

    <li class="list">${projects[index].technologies[2]}</li>
    
    </ul>
    <ul class="project-listser">
    <li class="lisp">${projects[index].technologies[3]}</li>
    <li class="lisp">${projects[index].technologies[4]}</li>
    <li class="lisp">${projects[index].technologies[5]}</li>
 <ul>
</div>

</div>
<div class="inline">
<button class="click-btn">
<a href="${projects[index].seeLiveLink}">See Live <img src="images/Icon-Export.svg" alt="See live"></i></a>
</button>
<button class="click-btn">
<a href="${projects[index].seeSourceLink}">See Source <img src="images/ggg.png" alt="Github icon"></a>
</div>
</button>
</div>
</div>
</div>
</div>
    </div>
    </section>
    `;
}
document.addEventListener('click', (event) => {
  if (event.target.id === 'close-popUp') {
    popUp.style.display = 'none';
  }
});

function mobile(index) {
  popUp.style.display = 'block';
  popUp.appendChild(projectDetailCard);
  projectDetailCard.innerHTML = `
    <div class="modal-content">
        <div class="modal-head">
            <h2>${projects[index].title}</h2>
            <i class="fa-solid fa-xmark" id="close-popUp"></i>
        </div>
        <div class="modal-prof">
            <span>${projects[index].prof}</span>

        </div>
        <div class="modal-image">
            <images src =${projects[index].src}
        </div>
        </div>

    <p class="modal-description">${projects[index].description}</p>
  
  <div class="modal-technolog">
  <ul class="project-lists">
  
    <li>${projects[index].technologies[0]}</li>
    
    <li>${projects[index].technologies[1]}</li>

    <li>${projects[index].technologies[2]}</li>
 
    <li>${projects[index].technologies[3]}</li>
 
  </ul>
</div>

<ul class="show-project">

<li>
<button>
<a href="${projects[index].seeLiveLink}">See Live <img src="img/github.png" alt="See live"></i></a>
</button>
</li>
<li>
<button>
<a href="${projects[index].seeSourceLink}">See Source <img src="img/github.png" alt="Github icon"></a>
</button>
</li>

<ul>

</div>
    </div>
    </section>`;
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'close-popUp') {
    popUp.style.display = 'none';
  }
});

for (let i = 0; i < btns.length; i += 1) {
  btns[i].addEventListener('click', () => {
    mobile(i);
  });
  btns[i].addEventListener('click', () => {
    desktop(i);
  });
}
// assign all elements

var title = document.getElementById("title");
var skills = document.getElementById("skills");
var contact = document.getElementById("contact");
var school = document.getElementById("school");
var hobbies = document.getElementById("hobbies");
var proifp = document.getElementById("proifp");
var pro = document.getElementById("pro");

var divdown = document.getElementById("divdown");
var divleft = document.getElementById("divleft");

var checklang = document.getElementById("checklang");
var checkwide = document.getElementById("checkwide");

SetOneUnderTheOther();

// events

checklang.addEventListener("change", function () {
  if (this.checked) {
    TranslateToEnglish();
  } else {
    TranslateToFrench();
  }
});

//

checkwide.addEventListener("change", function () {
  if (this.checked) {
    SetNextToEachOther();
  } else {
    SetOneUnderTheOther();
  }
});

//

function SetOneUnderTheOther() {
  let container = title.parentNode;

  container.appendChild(title);
  container.appendChild(skills);
  container.appendChild(contact);
  container.appendChild(pro);
  container.appendChild(school);
  container.appendChild(hobbies);

  hobbies.style.display = "block";
  proifp.style.display = "block";
}

//

function SetNextToEachOther() {
  let container = title.parentNode;

  container.appendChild(title);
  container.appendChild(divdown);

  divdown.appendChild(divleft);
  divdown.appendChild(pro);

  divleft.appendChild(skills);
  divleft.appendChild(contact);
  divleft.appendChild(school);

  hobbies.style.display = "none";
  proifp.style.display = "none";
}

//

function TranslateToEnglish() {
  document.getElementById("title1").textContent = "3D Software Consultant";

  document.getElementById("skills0").textContent = "Skillset";
  document.getElementById("skills1").textContent = "Soft Materials";
  document.getElementById("skills2").textContent = "Automotive Market";
  document.getElementById("skills3").textContent = "Furniture Market";
  document.getElementById("skills4").textContent = "Business Consultant";
  document.getElementById("skills5").textContent = "Project Manager";
  document.getElementById("skills6").textContent = "Software Developer";
  document.getElementById("skills7").textContent = "3D CAD Trainer";

  document.getElementById("school0").textContent = "Studies";
  document.getElementById("school1").textContent = "PhD in Applied Mathematics";
  document.getElementById("school2").textContent = "→ École Centrale Paris, 1996";
  document.getElementById("school3").textContent = "Postgrade in Applied Mathematics";
  document.getElementById("school4").textContent = "→ Université de Bordeaux I, 1993";

  document.getElementById("pro0").textContent = "Experience";
  document.getElementById("pro1a").textContent = "Lectra → Business Consultant";
  document.getElementById("pro1b").textContent = "July 2017 - July 2021, Cestas (33) → 4 YEARS";
  document.getElementById("pro1c").textContent = "Help sofa companies to master 3D CAD apps";
  document.getElementById("pro1d").textContent = "Demonstrations, training, expertise, sales in 3D";
  document.getElementById("pro1e").textContent = "Turnover from 3M€ to 6M€ over the period";
  document.getElementById("pro1f").textContent = "Activity focused on Chinese market, 2022 visa";

  document.getElementById("pro2a").textContent = "Lectra → R&D Project Manager";
  document.getElementById("pro2b").textContent = "July 2000 - June 2017, Cestas (33) → 17 YEARS";
  document.getElementById("pro2c").textContent = "DC3D/DC2D software creation from scratch";
  document.getElementById("pro2d").textContent = "Automotive beta sites tracking (USA, Japan)";
  document.getElementById("pro2e").textContent = "Customer interviews and requests specifications";
  document.getElementById("pro2f").textContent = "Selection and recrutment of five developers";
  document.getElementById("pro2g").textContent = "Internal and external corporate presentations";
  document.getElementById("pro2h").textContent = "3D offer branding and Marketing positioning";

  document.getElementById("pro3a").textContent = "TopSolid → Software Engineer";
  document.getElementById("pro3b").textContent = "July 1999 - June 2000, Toulouse (31) → 1 YEAR";
  document.getElementById("pro3c").textContent = "DC3D associative architecture using TopADS";
  document.getElementById("pro3d").textContent = "Extracting 3D flattening computer code in C++";
  document.getElementById("pro3e").textContent = "Inria mesher integration in DC3D via Parasolid";

  document.getElementById("pro4a").textContent = "Dassault Systèmes → R&D Engineer";
  document.getElementById("pro4b").textContent = "Oct. 1996 - June 1999, Suresnes (92) → 3 YEARS";
  document.getElementById("pro4c").textContent = "Coding 2D and 3D finite elements quality";
  document.getElementById("pro4d").textContent = "Coding Nastran Bulk data export .DAT";
  document.getElementById("pro4e").textContent = "Training customers to code into CATIA";

  document.getElementById("pro5a").textContent = "Institut Français du Pétrole → phD";
  document.getElementById("pro5b").textContent = "Sept. 1993 - Sept. 1996, Rueil-Malmaison (92) → 3 YEARS";
  document.getElementById("pro5c").textContent = "Build an app computing 2D fluids in engines";
  document.getElementById("pro5d").textContent = "Euler and Navier-Stokes equations resolving";

  document.getElementById("hobbies0").textContent = "Hobbies";
  document.getElementById("hobbies1").textContent = "Athletics";
  document.getElementById("hobbies2").textContent = "Marathon";
  document.getElementById("hobbies3").textContent = "Cycling";
  document.getElementById("hobbies4").textContent = "TV Shows";
}

//

function TranslateToFrench() {
  document.getElementById("title1").textContent = "Consultant Logiciels 3D";

  document.getElementById("skills0").textContent = "Profil";
  document.getElementById("skills1").textContent = "Métiers du Textile";
  document.getElementById("skills2").textContent = "Marché Automobile";
  document.getElementById("skills3").textContent = "Marché Ameublement";
  document.getElementById("skills4").textContent = "Consultant Business";
  document.getElementById("skills5").textContent = "Encadrement de Projet";
  document.getElementById("skills6").textContent = "Développement Applicatif";
  document.getElementById("skills7").textContent = "Formateur CAO 3D";

  document.getElementById("school0").textContent = "Études";
  document.getElementById("school1").textContent = "Docteur en Maths Appliquées";
  document.getElementById("school2").textContent = "→ École Centrale Paris, 1996";
  document.getElementById("school3").textContent = "DEA en Maths Appliquées";
  document.getElementById("school4").textContent = "→ Université de Bordeaux I, 1993";

  document.getElementById("pro0").textContent = "Parcours";
  document.getElementById("pro1a").textContent = "Lectra → Consultant Business";
  document.getElementById("pro1b").textContent = "Juil. 2017 - Juil. 2021, Cestas (33) → 4 ANS";
  document.getElementById("pro1c").textContent = "Aider les sociétés de sofa à maîtriser les CAO 3D";
  document.getElementById("pro1d").textContent = "Démonstrations, formations, expertise, ventes de 3D";
  document.getElementById("pro1e").textContent = "Turnover passant de 3M€ à 6M€ sur la période";
  document.getElementById("pro1f").textContent = "Activité centrée sur le marché chinois, visa 2022";

  document.getElementById("pro2a").textContent = "Lectra → Chef de Projet R&D";
  document.getElementById("pro2b").textContent = "Juil. 2000 - Juin 2017, Cestas (33) → 17 ANS";
  document.getElementById("pro2c").textContent = "Création des logiciels DC3D/DC2D from scratch";
  document.getElementById("pro2d").textContent = "Suivi des sites pilotes Automobile (USA, Japon)";
  document.getElementById("pro2e").textContent = "Recueil et spécification des demandes clients";
  document.getElementById("pro2f").textContent = "Recrutement de cinq développeurs";
  document.getElementById("pro2g").textContent = "Présentations en interne et externe";
  document.getElementById("pro2h").textContent = "Positionnement Marketing de l'offre 3D";

  document.getElementById("pro3a").textContent = "TopSolid → Ingénieur d'Etudes";
  document.getElementById("pro3b").textContent = "Juil. 1999 - Juin 2000, Toulouse (31) → 1 AN";
  document.getElementById("pro3c").textContent = "Architecture associative de DC3D via TopADS";
  document.getElementById("pro3d").textContent = "Extraction du code 3D de dépliage de C vers C++";
  document.getElementById("pro3e").textContent = "Intégration du mailleur de l'Inria à DC3D via Parasolid";

  document.getElementById("pro4a").textContent = "Dassault Systèmes → Ingénieur R&D";
  document.getElementById("pro4b").textContent = "Oct. 1996 - Juin 1999, Suresnes (92) → 3 ANS";
  document.getElementById("pro4c").textContent = "Codage des qualités des éléments finis 2D et 3D";
  document.getElementById("pro4d").textContent = "Codage de l'export de données Bulk Nastran .DAT";
  document.getElementById("pro4e").textContent = "Formations client au codage spécifique dans CATIA";

  document.getElementById("pro5a").textContent = "Institut Français du Pétrole → Doctorant";
  document.getElementById("pro5b").textContent = "Sept. 1993 - Sept. 1996, Rueil-Malmaison (92) → 3 ANS";
  document.getElementById("pro5c").textContent = "Application 2D simulant les fluides dans les moteurs";
  document.getElementById("pro5d").textContent = "Résolution des équations d'Euler et de Navier-Stokes";

  document.getElementById("hobbies0").textContent = "Loisirs";
  document.getElementById("hobbies1").textContent = "Athlétisme";
  document.getElementById("hobbies2").textContent = "Marathon";
  document.getElementById("hobbies3").textContent = "Cyclisme";
  document.getElementById("hobbies4").textContent = "Séries";
}

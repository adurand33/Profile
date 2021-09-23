// assign elements

var title = GetElt("title");
var skills = GetElt("skills");
var contact = GetElt("contact");
var school = GetElt("school");
var hobbies = GetElt("hobbies");
var proifp = GetElt("proifp");
var pro = GetElt("pro");

var divdown = GetElt("divdown");
var divleft = GetElt("divleft");

var checklang = GetElt("checklang");
var checkwide = GetElt("checkwide");

SetOneUnderTheOther();

// events

checklang.addEventListener("change", function () {
  if (this.checked) {
    TranslateToEnglish();
  } else {
    TranslateToFrench();
  }
});

// switch

checkwide.addEventListener("change", function () {
  if (this.checked) {
    SetNextToEachOther();
  } else {
    SetOneUnderTheOther();
  }
});

// reorder

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

// translate EN

function TranslateToEnglish() {
  SetText("title1", "3D Software Consultant");

  SetText("skills0", "Skillset");
  SetText("skills1", "Soft Materials");
  SetText("skills2", "Automotive Market");
  SetText("skills3", "Furniture Market");
  SetText("skills4", "Business Consultant");
  SetText("skills5", "Project Manager");
  SetText("skills6", "Software Developer");
  SetText("skills7", "3D CAD Trainer");

  SetText("school0", "Studies");
  SetText("school1", "PhD in Applied Mathematics");
  SetText("school2", "Postgrade in Applied Mathematics");

  SetText("pro0", "Experience");
  SetText("pro1a", "Lectra → Business Consultant");
  SetText("pro1b", "July 2017 - July 2021, Cestas (33) → 4 YEARS");
  SetText("pro1c", "Help sofa companies to master 3D CAD apps");
  SetText("pro1d", "Demonstrations, training, expertise, sales in 3D");
  SetText("pro1e", "Turnover from 3M€ to 6M€ over the period");
  SetText("pro1f", "Activity focused on Chinese market, 2022 visa");

  SetText("pro2a", "Lectra → R&D Project Manager");
  SetText("pro2b", "July 2000 - June 2017, Cestas (33) → 17 YEARS");
  SetText("pro2c", "DC3D/DC2D software creation from scratch");
  SetText("pro2d", "Automotive beta sites tracking (USA, Japan)");
  SetText("pro2e", "Customer interviews and requests specifications");
  SetText("pro2f", "Selection and recrutment of five developers");
  SetText("pro2g", "Internal and external corporate presentations");
  SetText("pro2h", "3D offer branding and Marketing positioning");

  SetText("pro3a", "TopSolid → Software Engineer");
  SetText("pro3b", "July 1999 - June 2000, Toulouse (31) → 1 YEAR");
  SetText("pro3c", "DC3D associative architecture using TopADS");
  SetText("pro3d", "Extracting 3D flattening computer code in C++");
  SetText("pro3e", "Inria mesher integration in DC3D via Parasolid");

  SetText("pro4a", "Dassault Systèmes → R&D Engineer");
  SetText("pro4b", "Oct. 1996 - June 1999, Suresnes (92) → 3 YEARS");
  SetText("pro4c", "Coding 2D and 3D finite elements quality");
  SetText("pro4d", "Coding Nastran Bulk data export .DAT");
  SetText("pro4e", "Training customers to code into CATIA");

  SetText("pro5a", "Institut Français du Pétrole → phD");
  SetText("pro5b", "Sept. 1993 - Sept. 1996, Rueil-Malmaison (92) → 3 YEARS");
  SetText("pro5c", "Code a research app computing 2D fluids in engines");
  SetText("pro5d", "Euler and Navier-Stokes equations resolving");

  SetText("hobbies0", "Hobbies");
  SetText("hobbies1", "Athletics");
  SetText("hobbies2", "Marathon");
  SetText("hobbies3", "Cycling");
  SetText("hobbies4", "TV Shows");
}

// translate FR

function TranslateToFrench() {
  SetText("title1", "Consultant Logiciels 3D");

  SetText("skills0", "Profil");
  SetText("skills1", "Métiers du Textile");
  SetText("skills2", "Marché Automobile");
  SetText("skills3", "Marché Ameublement");
  SetText("skills4", "Consultant Business");
  SetText("skills5", "Encadrement de Projet");
  SetText("skills6", "Développement Appl(icatif");
  SetText("skills7", "Formateur CAO 3D");

  SetText("school0", "Études");
  SetText("school1", "Docteur en Maths Appliquées");
  SetText("school2", "DEA en Maths Appliquées");

  SetText("pro0", "Parcours");
  SetText("pro1a", "Lectra → Consultant Business");
  SetText("pro1b", "Juil. 2017 - Juil. 2021, Cestas (33) → 4 ANS");
  SetText("pro1c", "Aider les sociétés de sofa à maîtriser les CAO 3D");
  SetText("pro1d", "Démonstrations, formations, expertise, ventes de 3D");
  SetText("pro1e", "Turnover passant de 3M€ à 6M€ sur la période");
  SetText("pro1f", "Activité centrée sur le marché chinois, visa 2022");

  SetText("pro2a", "Lectra → Chef de Projet R&D");
  SetText("pro2b", "Juil. 2000 - Juin 2017, Cestas (33) → 17 ANS");
  SetText("pro2c", "Création des logiciels DC3D/DC2D from scratch");
  SetText("pro2d", "Suivi des sites pilotes Automobile (USA, Japon)");
  SetText("pro2e", "Recueil et spécification des demandes clients");
  SetText("pro2f", "Recrutement de cinq développeurs");
  SetText("pro2g", "Présentations en interne et externe");
  SetText("pro2h", "Positionnement Marketing de l'offre 3D");

  SetText("pro3a", "TopSolid → Ingénieur d'Études");
  SetText("pro3b", "Juil. 1999 - Juin 2000, Toulouse (31) → 1 AN");
  SetText("pro3c", "Architecture associative de DC3D via TopADS");
  SetText("pro3d", "Extraction du code 3D de dépliage de C vers C++");
  SetText("pro3e", "Intégration du mailleur de l'Inria à DC3D via Parasolid");

  SetText("pro4a", "Dassault Systèmes → Ingénieur R&D");
  SetText("pro4b", "Oct. 1996 - Juin 1999, Suresnes (92) → 3 ANS");
  SetText("pro4c", "Codage des qualités des éléments finis 2D et 3D");
  SetText("pro4d", "Codage de l'export de données Bulk Nastran .DAT");
  SetText("pro4e", "Formations client au codage spécifique dans CATIA");

  SetText("pro5a", "Institut Français du Pétrole → Doctorant");
  SetText("pro5b", "Sept. 1993 - Sept. 1996, Rueil-Malmaison (92) → 3 ANS");
  SetText("pro5c", "Application 2D simulant les fluides dans les moteurs");
  SetText("pro5d", "Résolution des équations d'Euler et de Navier-Stokes");

  SetText("hobbies0", "Loisirs");
  SetText("hobbies1", "Athlétisme");
  SetText("hobbies2", "Marathon");
  SetText("hobbies3", "Cyclisme");
  SetText("hobbies4", "Séries");
}

// tools

function GetElt(id) {
  return document.getElementById(id);
}

function SetText(id, text) {
  GetElt(id).textContent = text;
}

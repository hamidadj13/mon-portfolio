 // console.log('toto');

// //Déclarer une variable
// //string
// let myVar = "ma variable"; //Le let est utilisé si on veut réutiliser la variable après, lui réassigner une nouvelle valeure
// const myVar2 = "ma variable 2"; //Le const quand à lui 'applique aux variables qui ne vont pas changer

// myVar = "variable changée";
// console.log(myVar);

// //boolean
// let  isTrue = true;
// let  isFalse = false;
// console.log(isTrue);

//Undefined
//let isMyName = undefined;n, 

// //Chiffres et opérateurs
// let chiffre1 = 4;
// let chiffre2 = 6;
// console.log(chiffre1,chiffre2);
// console.log(chiffre1 + chiffre2); //typeof permets de connaitre le type de l'élement

// //Templates string, littéraux de gararits et concaténations
// let test = "Voici ma " + myVar; // C'est pas trop une bonne pratique c'est mieux d'utiliser les littéraux de gabarits
// console.log(test);

// let test2 = `test ${myVar} mmmmmmm ${test}`; // C'est ca l'écriture à adopter
// console.log(test2);

// //Les conditions (opérateurs de comparaison: < ; <= ; > ; >= ; == ; != ; === ; !==)
// if (chiffre1 === 4) // Les deux premiers = controllent si les deux valeurs sont exacts; le troisième = vérifie si c'est le mem type
// {
//     console.log("Condition validée");
// }
// else
// {
//     console.log("Condition non valide");
// }

// //Les tableaux
// let array = ['item1','item2','item3','item4'];
// console.log(array);
// console.log(array.length);// Pour la taille du tableau

// //Les objets
// let objet = 
// {
//     title:'Mon titre',
//     description:'Ma description'
// }
// console.log(objet.title, objet.description); //Pour pouvoir appeler un élément de l'objet

// //Les boucles (while, for, foreach)
// for (i = 0; i < array.length; i++)
// {
//     console.log(array[i]);
// }

/*console.log('');
console.info('');
console.warn('');
console.error('');
console.table([1, 2, 3]);
console.clear();*/

// array.forEach(j =>
// {
//     console.log(j);
// } )

// //Les fonctions
// function maFonction(item) 
// {
//     console.log(item);
// }
// /* ou
// const maFonction = (item) =>
// {
//     console.log(item);
// }
// */
// maFonction("Tutu");
// maFonction("Tata");

// function calcul(nb1, nb2)
// {
//     console.log(nb1 + nb2);
// }
// calcul(4,6);

// /*ou
// function calcul(nb1, nb2)
// {
//     return(nb1 + nb2);
// }
// console.log(calcul(4, 6));
// */

// //Interagir avec le DOM : méthodes, propriétés, évenements
// console.log(document); // Ca c'est toute ma page

// //Pour cibler le header
// let header = document.querySelector("header");
// console.log(header);

// //Cibler et parcourir les sections
// let sect= document.querySelectorAll("section");
// sect.forEach(j =>
// {
//     console.log(j);
// })

// //Les évenements les plus courants
// document.addEventListener("DOMContentLoaded", () =>
// {
//     console.log("DOM entièrement chargé et analysé");
// })
/*
// Insertion DOM et navigation dans le DOM
let div = document.createElement('div'); //On a créé une div
div.classList.add("top"); //On a ajouté une class top à la div
div.innerHTML = `<span>Top Zone</span>`; //innerHTML permet d'injecter du code HTML
header.append(div); //On vient d'ajouter la div à notre header
console.log(header.parentNode); //on a ciblé l'élément parent de header donc le body
header.parentNode.append(div); //On vient d'ajouter la div avant la fermetture du body
console.log(header.nextElementSibling); //On vient de ciblier l'élement qui suit le header
*/
//-------------------------------------Fin de théorie---------------------------------------//

//Function du thème: Le bouton burger
function menuMobile() 
{
    const btn = document.querySelector(".burger"); // On cible le bouton burger
    const header = document.querySelector("header"); // On cible le header
    const links = document.querySelectorAll(".navbar a"); // On cible tous les liens du menu de navigation

    //On a ajouté un évenement : si on clique sur le bouton
    btn.addEventListener("click" , () =>
    {
        header.classList.toggle("show-nav"); //Normalement on doit mettre le add mais si on met lorqu'on clique une deuxième fois ca ne fait rien. C'est pour ca qu'on a mis "toggle" il alterne (il ouvre et ferme après)
    })

    //Pour chaque lien sur lequel on clique, on ferme la classe(show-nav) avec remove
    links.forEach(link =>
    {
        link.addEventListener('click', () =>
        { 
            header.classList.remove("show-nav");      
        });   
    });
}
menuMobile();
 
// Portfolio: système de filtrage
function tabsFilters() 
{
    const tabs = document.querySelectorAll(".portfolio-filters a"); // On cible les liens de filtrage
    const projets = document.querySelectorAll(".portfolio .card"); // On cible tous les projets

    //On crée la fonction qui va réinitialiser la classe active
    const resetActiveLinks = () =>
    {
        tabs.forEach(elem =>
        {
            elem.classList.remove("active");
        })
    }
 
    //On fait une fonction qui liste tous les projets
    const showProjets = (fil_a)  => // Cette fonction recoit le data filter du lien sur lequel on a cliqué 
    {
        console.log(fil_a);
        projets.forEach(pro =>
        {
            let filter = pro.getAttribute("data-category"); // On récupère le data attribut du projet

            //Si on a choisi tous les projets
            if (fil_a === "all") 
            {
                pro.parentNode.classList.remove("hide"); //Il retire la classe "hide"
                return  //Arrivé ici il n'exécute plus la suite
            }
            // if (filter !== fil_a)   //Sinon si le data attribut du projet au(filter) ne correspond pas au data attribut du lien (elem) : Si ça ne correspond pas
            // {
            //     pro.parentNode.classList.add("hide"); //Il ajoute une classe "hide" au parent du card : le grid; classe quon va faire disparaitre avec le css
            // }
            // else // Sinon si ça correspond
            // {
            //     pro.parentNode.classList.remove("hide"); //Il retire la classe "hide" 
            // }

            //Utilisation de l'opérateur ternaire
            filter !== fil_a ? pro.parentNode.classList.add("hide") : pro.parentNode.classList.remove("hide");

            //console.log(projet);
        })    
    }

    tabs.forEach(elem =>
    {
        elem.addEventListener("click", (event) =>   //On a mis event parce que ici, il s'agit d'un lien
        {
            event.preventDefault(); //Ici, on dit au lien de ne renvoyer null part
            let lien = elem.getAttribute("data-filter"); // On a réupéré le data attribut (data-filter() qu'on a mis au niveau des liens : a = elem
            //console.log(filter);
            showProjets(lien); // La fonction qui gère les projets recoit le filtre courant
            resetActiveLinks(); //On appelle la fonction qui réinitialise la classe "active"
            elem.classList.add("active") //On a ajouté une class active au lien
        })
    })
}

tabsFilters();

function showProjectDetails() 
{
    const links = document.querySelectorAll(".card__link"); // On cible les liens du card__overlay
    const modals = document.querySelectorAll(".modal"); // On cible tous les modals : ce sont les div qu'on voit lorqu'on clique sur le + de card__overlay
    const btns = document.querySelectorAll(".modal__close"); //On cible les boutons de fermeture (sous forme de croix)

    const hideModals = () =>
    {
        modals.forEach(modal =>
        {
            modal.classList.remove("show");
        })
    }

    links.forEach(plus =>
    {
        plus.addEventListener("click", (event) =>   //On a mis event parce que ici, il s'agit d'un lien
        {
            event.preventDefault(); //Ici, on dit au lien de ne renvoyer null part
            document.querySelector(`[id = ${plus.dataset.id}]`).classList.add("show"); //Il sélectionne l'élement dont l'id est égal au data attribut du lien sur lequel on a cliqué et lui ajoute une classe "show"
        })
    })

    btns.forEach(btn =>
    {
        btn.addEventListener("click", (event) =>   //On a mis event parce que ici, il s'agit d'un lien
        {
            hideModals();
        })
    })
}

showProjectDetails();

//Effets
const observerIntersectionAnimation = () =>
{
    const sections = document.querySelectorAll("section"); // On cible toutes les sections
    const competences = document.querySelectorAll(".skills .bar"); // On cible toutes les barres de compétences

    sections.forEach((sec, index) =>
    {
        if (index == 0) return; // On ne veut pas faire l'effet sur le premier élément donc si on est sur le premier élement, on fait return qui zappe tout
        sec.style.opacity = "0"; //On masque tous les élements
        sec.style.transition = "all 1.6s"; 
    })

    competences.forEach((compet, index) =>
    {
        compet.style.width = "0"; //On met la largeur du progressbar à 0 par défaut
        compet.style.transition = "all 1.6s"; 
    })

    let sectionObserver = new IntersectionObserver(function (entries, observer) //On crée une nouvelle variable qui prend une fonction avec deux paramètres
    {
        entries.forEach(entry =>
        {
            if (entry.isIntersecting) //Si on est à son niveau
            {
                let elem = entry.target; //On crée une variable dans laquelle on cible l'entrée
                elem.style.opacity = "1"; // On affiche l'élement
            }
        })
    })

    sections.forEach(sec =>
    {
        sectionObserver.observe(sec);
    })   

    //Les compétences
    let CompetencesObserver = new IntersectionObserver(function (entries, observer) //On crée une nouvelle variable qui prend une fonction avec deux paramètres
    {
        entries.forEach(entry => //Pour chaque entrée
        {
            if (entry.isIntersecting) //Si on est à son niveau
            {
                let elem = entry.target; //On crée une variable dans laquelle on cible l'entrée
                elem.style.width = elem.dataset.width + "%";
            }
        })
    })

    competences.forEach(compet =>  // Pour chaque compétence, on fait la fonction et on observe
    {
        CompetencesObserver.observe(compet);
    })  
}

observerIntersectionAnimation();

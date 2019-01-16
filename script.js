

    var bonRep = ["2","3","1","1","2","2","1","3"];
    
    var question = ["1/ Quel usage à éviter est sous entendu dans cet exemple ?","2/ Quel problème de sécurité est montré dans cette vidéo ?","3/ Quel comportement l’utilisateur devrait éviter ?",
    "4/ Que faut-il faire lorsque l’on utilise une clé USB inconnue ?", "5/ Comment éviter le téléchargement d’un mauvais logiciel (virus) ?", "6/ Je télécharge une application suite à la recommandation d’un site que je ne connais pas. Un message s’affiche indiquant que le pare-feu a bloqué certaines fonctionnalités du programme.",
    "7/ Un utilisateur se connecte sur un site web, il ne vérifie pas la présence du cadenas indiquant que la page est en HTTPS et qu’elle possède donc un certificat SSL.", "8/Quand cette fenêtre s’affiche, qu’est ce que je fais ? "]
    
    var probleme = ["Problème : Un utilisateur se connecte à un réseau WIFI public et gratuit. Il accède à son compte en banque.", "Problème : L’utilisateur a utilisé un mot de passe simple et qui s’identifie à lui (ici un prénom).", "Problème : L’utilisateur a cliqué sur un mail douteux. Il s’agit d’un SPAM.", "Problème : L'utilisateur insére une clé USB inconnue dans son ordinateur.", "Problème : L'utilisateur clique sur le premier de téléchargement sans réfléchir.","Problème : Le parefeu bloque le téléchargement d'un fichier.","Problème : Le site où l'utilisateur souhaite rentrer des données personnelles n'est pas sécurisé avec le certificat SSL (https://lesite.com).","Problème : Une fenêtre apparaît proposant à l'utilisateur de sauvegarder ses mots de passe"]
    

    var astuce = ["Astuce : Les <strong>réseaux publics possèdent de nombreuses failles de sécurité</strong> : le fait qu’il n’y ai pas de mot de passe permet à des appareils non sécurisés et par la même occasion à des pirates informatiques d’accéder au réseau. De plus un hacker peut créer de <strong>faux réseaux publics</strong> en nommant  “Aéroport”, “Wifi SFR” “WifiGare” par exemple et <strong>collecter vos données</strong> sans que vous vous en doutiez. Evitez les réseaux publics du moins lorsque vous vous connectez à un compte, ou à celui de votre entreprise, que vous ouvrez un e-mail important ou confidentiel et pour effectuer vos achats en ligne. Pour garantir votre sécurité, pensez à <strong>installer un VPN</strong> (Virtual Private Network). Il sera capable de chiffrer toutes les données qui transitent afin de les sécuriser.  Il sera donc difficile voire impossible pour le hacker de les récupérer pour les exploiter.", 
    "Astuce : Pensez à utiliser des <strong>mots de passe longs</strong> qui comprennent des lettres minuscules, majuscules, des chiffres et des caractères spéciaux si ceux-ci sont acceptés. Certains sites vous obligeront à respecter ces règles mais pas tous ! La règle ultime : <strong>Ne pas utiliser un mot de passe identique</strong> sur des sites différents ! Si un utilisateur malveillant connaît votre mot de passe, il pourra l’utiliser pour vos autres comptes. Pensez à modifier régulièrement votre mot de passe. D’autre part, <strong>l’authentification à deux facteurs</strong> est également une solution qui permettra de sécuriser vos données. De ce fait, si quelqu’un se connecte à votre compte depuis un autre appareil, vous serez immédiatement informé par mail ou téléphone.", 
    "Astuce : Pour éviter un spam : <strong>Ne JAMAIS répondre</strong> à un spam car c’est grâce aux accusés de réception, fournis par vos réponses, que les spammeurs découvrent si l’adresse en question est valide ou non. N’achetez jamais le produit ou le service proposé par un spammeur, même si celui-ci est alléchant. Détenir au minimum 2 adresses emails. De cette façon, il est possible d’utiliser une adresse à des fins privées comme par exemple pour les correspondances personnelles. Ne jamais indiquer votre adresse mail privée sur des ressources accessibles par le grand public (forum, site web, …). Assurez-vous que votre adresse électronique est filtrée par une <strong>solution anti-spam</strong>. Si ce n’est pas le cas, pensez à en installer une.", 
    "Astuce : Il est recommandé pour l’utilisateur de <strong>tester la clé</strong> sur un ordinateur isolé du réseau qui ne craindrait pas une éventuelle infection (exemple : vieil ordinateur qui n’est pas connecté au réseau). De plus, il est important d’effectuer une <strong>analyse anti virus</strong> sur la clef (clic droit Analyser avec antivirus), et cela même si la clef provient d’une personne de confiance, les virus peuvent se transmettre d’ordinateurs à ordinateurs via des clefs usb piégées.",
    "Astuce : Il est difficile de télécharger un logiciel avec aucun risque mais quelques étapes peuvent-être effectuées afin d’être le plus sûr possible. Si vous êtes en position d’utiliser un lecteur CD/DVD il est préférable de l’installer via CD. Dans le cas où vous êtes en entreprise, demandez des conseils à la maintenance informatique, ou demandez l’autorisation à votre supérieur. Evitez les <strong>sites douteux</strong> et privilégiez le <strong>fournisseur du logiciel</strong>. Il est important de bien regarder le lien. Un grand nombre de fautes d'orthographe est souvent un signe à prendre en compte. Scannez le logiciel téléchargé au préalable sur virustotal.com et avec votre antivirus.",
    "Astuce : Il est recommandé de <strong>se renseigner</strong> au sujet de l’application téléchargée et de ne cliquer sur Autoriser l'accès seulement si l’on est certain qu’elle ne nuira pas à notre système d’exploitation. Souvent cette alerte est plus une précaution qu’une véritable alerte de sécurité mais il ne faut pas sous estimer les risques que représentent certains programmes. www.virustotal.com : Un petit outil très pratique à utiliser avant d’ouvrir un programme en complément de votre antivirus : il scannera le fichier en question avec plusieurs antivirus disponibles sur le marché.",
    "Astuce : Il est absolument nécessaire de vérifier la <strong>présence du cadenas</strong> indiquant que le site possède un <strong>certificat SSL</strong> et donc que les données échangées sont chiffrées lorsqu'il s’agit d’informations privées pouvant être récupérées par des personnes mal intentionnées ( exemple : informations personnelles Nom, prénom, date de naissance, mots de passe, etc…) Ces informations sont de l’or aux yeux de pirates qu’ils revendront à très bon prix sur les plateformes du Darknet. Le certificat SSL est la norme sur les sites à fort trafic même ceux avec lesquels nous n’échangeons aucune donnée sensible.",
    "Astuce : Enregistrer ses mots de passe dans son navigateurs est peut être pratique mais ce n'est pas très prudent. Premièrement si une personne physique accède à votre ordinateur, il n'aura <strong>aucune barrière</strong> pour se connecter à vos comptes. De plus, un <strong>malware</strong> (logiciel malveillant) malencontreusement installé peut récupérer ces données."]

    var images = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png", "img7.png", "img8.png"];
    var imgquest = ["img11.png" , "img22.png" , "img33.png" , "img44.png" , "img55.png", "img66.png", "img77.png", "img88.png"];

    function Rep(){

/*      // créer et ajouter un bouton à la page
      var btn = document.createElement("BUTTON");
      btn.value = "fghjkl";
      document.body.appendChild(btn);

*/

    var res = 0;
    var reps = document.querySelectorAll('input[type="text"]');
    var i;
for (i = 0; i < reps.length; i++) { 
  if( reps[i].value == bonRep[i]){
      res++;
    }
   
}
 alert('Vous avez ' + res + ' bonne(s) réponse(s) sur 8 !');


/*getElementBy('reponse'+numQuestion).value == bonRep[numQuestion-1]){
      res='vrai';
    }
    alert(res);
*/
/*      for (var i=0; i<bonRep.length; i++){
        if(document.getElementById('reponse').value == bonRep[i]){
          res='vrai'
          alert(res)
        }else{
          alert(res)
        }
        break;
      }

*/

    }

 function maFonction() 
{
   var reps = document.querySelectorAll('input[type="text"]')

var opened = window.open("");
for (i=0; i<question.length; i++){
opened.document.write("<html><head><title>MyTitle</title><link rel='stylesheet' type='text/css' href='style2.css'></head><body><div class='conteneur'><div id='cont1'><img src="+ imgquest[i] +" id='i' alt='quest'/></div><div id='cont2'><img src="+images[i]+" alt='cc' /></div></div><div id='re'>Votre réponse : "+reps[i].value+"</div><br><br><div id='bonre'>La bonne réponse : "+ bonRep[i]+"</div><br><br><div id='pb'>"+probleme[i]+"</div><br><br>"+astuce[i]+"<br><br><br><br><br><br><br><br></body></html>");}

//     alert(document.getElementById('rep').style.left=probleme[0]+"bonjour");
}

//*var win = window.open('','printwindow');
//win.document.write('<html><head><title>Print it!</title><link rel="stylesheet" type="text/css" href="styles.css"></head><body>');
//win.document.write($("#content").html());
//win.document.write('</body></html>');
//win.print();
//win.close();

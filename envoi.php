<?php

if(isset($_POST) && isset($_POST['nom']) && isset($_POST['email']) && isset($_POST['message']))
{

	extract ($_POST) ;
	if(!empty($nom) && !empty($email) && !empty($message) ){
		$destinataire="selfcuritycontact@gmail.com";
		$sujet="Formulaire de contact";
		$msg ="Une nouvelle question est arrivée \n
		Nom : $nom \n
		Email : $email \n
		Message : $message";
		$entete ="From : $nom \n Reply-to : $email";
		mail($destinataire, $sujet, $msg, $entete);
		
	}

	else{
		echo "Erreur";
	}

}

?> 
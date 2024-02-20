function Veifier()
{
	let firstName=document.getElementById("first").value;
	let FamilyName=document.getElementById("last").value;
	let Adresse=document.getElementById("adress").value;
	let Ville=document.getElementById("ville").value;
	let Code=document.getElementById("code").value;
	let mail=document.getElementById("courriel").value;
	
	//first and last name
	var name="";
	if(firstName=="" || FamilyName=="" )
	{
		name="Vous devez donnner votre nom et prenom !\n";
	} 
	//adress
	var adr="";
	if( mail=="" )
	{
		adr="Vous devez founiz une adress email!\n";
	
	}
	
	//vill and code and couriel
	var cordonne="";
	if( Ville=="" || Code=="" || adress=="")
	{
		cordonne="Vous devez donnner votre cordonne complete !\n";
	}
	//show information 
	if(name!="" || cordonne!="" || adr!="")
	{alert(name+cordonne+adr);}
	else
	{
	  alert(	"First Name  : "+document.getElementById("first").value+"\n"+
				"Family Name : "+document.getElementById("last").value+"\n"+
				"Adresse : "+document.getElementById("adress").value+"\n"+
				"Ville : "+document.getElementById("ville").value+"\n"+
				"Code Postal : "+document.getElementById("code").value+"\n"+
				"Couriel : "+document.getElementById("courriel").value
			);
	}	
}

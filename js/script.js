$(function() {
    //accordion
    $(".accordion").click(function(){
        $(this).find(".card-body").toggle("hide");
    });

    //notation
    var sum;
     $("input:checkbox[name=vehicle]").change(function(){
	    sum=0;
        $("input:checkbox[name=vehicle]:checked").each(function(){
            sum=sum+parseInt($(this).val())
        });
    
        $('#notation').html(sum+"/"+$("input:checkbox").length);
    });

    var eleves = [
        {
            "prenom": "Mylène",
            "groupe": "G13"
        },
        {
            "prenom" : "Audrey",
            "prenom": "Sarah",
            "groupe": "G13"
        },
        {
            "prenom": "Elodie",
            "groupe": "G13"
        },
        {
            "prenom": "Jérémie ou y lol  ╭∩╮（︶︿︶） ╭∩╮",
            "groupe": "G13"
        },
        {
            "prenom": "Alexis",
            "groupe": "G13"
        }
    ];

   $.each(eleves, function( index, value ) {


      var tpl = $("#stagiaire").html();
      var generatedHTML = Mustache.render(tpl, value);

       //cibler l'endroit de l'ajout et on ajoute
       $("#listeEleve .container").append(generatedHTML);
   });

   // faire ses données en tableau d'objet
   // parcourir le tableau et l'ajouter

});
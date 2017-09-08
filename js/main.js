$( '#frost_talents, #unholy_talents, #blood_talents, #death_whisper, #gunship, #saurfang, #rot, #council, #queen, #dream, #professor, #sindra, #LK, .specoverviewblood, .specoverviewfrost, .specoverviewunholy, .basinarea, .wintergrasparea, .howlingfjordarea, .icecrownarea, .zuldrakarea, .stormpeaksarea, .dragonblightarea, .grizzlyarea, .boreanTundra, .crystalarea, .areas' ).hide();

//MENU
//About
$('#aboutbutton').on('click',function(){
 $( 'html, body' ).animate( {
        scrollTop: $( "#about").offset().top
      }, 2000 );
});

//Map
$('#mapbutton').on('click',function(){
 $( 'html, body' ).animate( {
        scrollTop: $( "#map").offset().top
      }, 2000 );
});

//New Class
$('#newclassbutton').on('click',function(){
 $( 'html, body' ).animate( {
        scrollTop: $( "#newclass").offset().top
      }, 2000 );
});

//Villians
$('#villiansbutton').on('click',function(){
 $( 'html, body' ).animate( {
        scrollTop: $( ".villians").offset().top
      }, 2000 );
});

//Trailers
$('#trailerbutton').on('click',function(){
 $( 'html, body' ).animate( {
        scrollTop: $( "#trailers").offset().top
      }, 2000 );
});


//VIDEO
$( '#video' ).on( 'click', function() {
  $( '#videoplay' ).fadeOut();
  document.getElementById( 'video' ).play();
  document.getElementById( 'video' ).setAttribute( "controls", "controls" );
} );

// SLIDESHOW
function openModal( slideCollection ) {
  document.getElementById( slideCollection ).style.display = "block";
}

function closeModal( slideCollection ) {
  document.getElementById( slideCollection ).style.display = "none";
}

var slideIndex = 1;

function plusSlides( n, slideCollection ) {
  if ( slideCollection ) {
    showSlides( slideIndex += n, slideCollection );
  }
}

function showSlides( n, slideCollection ) {
  var i;
  var slides = $( "#" + slideCollection ).find( ".mySlides" );
  var dots = document.getElementsByClassName( "demo" );
  var captionText = document.getElementById( "caption" );
  if ( n > slides.length ) {
    slideIndex = 1
  }
  if ( n < 1 ) {
    slideIndex = slides.length
  }
  for ( i = 0; i < slides.length; i++ ) {
    slides[ i ].style.display = "none";
  }
  for ( i = 0; i < dots.length; i++ ) {
    dots[ i ].className = dots[ i ].className.replace( " active", "" );
  }
  slides[ slideIndex - 1 ].style.display = "block";
  dots[ slideIndex - 1 ].className += " active";
  captionText.innerHTML = dots[ slideIndex - 1 ].alt;
}

// SPECS

//Blood
$( '.blood' ).on( 'click', function() {
  //Currently Selected
  if ( $( '.blood' ).hasClass( 'bloodselected' ) ) {
    $( '.blood' ).removeClass( 'bloodselected' );
    $( '#blood_talents' ).fadeOut( 'fast' );
    $( '.specoverviewblood' ).fadeOut( 'fast' );
    $( '.classoverview' ).delay( 200 ).fadeIn( 'fast' );
    $( '.gnome' ).delay( 200 ).fadeIn( 'fast' );
  }

  //Selecting Blood
  else {
    $( '.unholy' ).removeClass( 'unholyselected' );
    $( '.frost' ).removeClass( 'frostselected' );
    $( '.blood' ).removeClass( 'bloodselected' );
    $( '.blood' ).addClass( 'bloodselected' );
    $( '.gnome' ).fadeOut( 'fast' )
    $( '.specoverviewunholy' ).fadeOut( 'fast' );
    $( '.specoverviewfrost' ).fadeOut( 'fast' );
    $( '.classoverview' ).fadeOut( 'fast' );
    $( '#frost_talents' ).fadeOut( 'fast' );
    $( '#unholy_talents' ).fadeOut( 'fast' );
    $( '#blood_talents' ).delay( 200 ).fadeIn( 'fast' );
    $( '.specoverviewblood' ).delay( 200 ).fadeIn( 'fast' );
  }
} );

//Frost
$( '.frost' ).on( 'click', function() {
  if ( $( '.frost' ).hasClass( 'frostselected' ) ) {
    $( '.frost' ).removeClass( 'frostselected' );
    $( '#frost_talents' ).fadeOut( 'fast' );
    $( '.specoverviewfrost' ).fadeOut( 'fast' );
    $( '.classoverview' ).delay( 200 ).fadeIn( 'fast' );
    $( '.gnome' ).delay( 200 ).fadeIn( 'fast' );
  } else {
    $( '.unholy' ).removeClass( 'unholyselected' );
    $( '.frost' ).removeClass( 'frostselected' );
    $( '.blood' ).removeClass( 'bloodselected' );
    $( '.frost' ).addClass( 'frostselected' );
    $( '.gnome' ).fadeOut( 'fast' )
    $( '.classoverview' ).fadeOut( 'fast' );
    $( '.specoverviewblood' ).fadeOut( 'fast' );
    $( '.specoverviewunholy' ).fadeOut( 'fast' );
    $( '#blood_talents' ).fadeOut( 'fast' );
    $( '#unholy_talents' ).fadeOut( 'fast' );
    $( '#frost_talents' ).delay( 200 ).fadeIn( 'fast' );
    $( '.specoverviewfrost' ).delay( 200 ).fadeIn( 'fast' );
  }
} );

//Unholy
$( '.unholy' ).on( 'click', function() {
  if ( $( '.unholy' ).hasClass( 'unholyselected' ) ) {
    $( '.unholy' ).removeClass( 'unholyselected' );
    $( '#unholy_talents' ).fadeOut( 'fast' );
    $( '.specoverviewunholy' ).fadeOut( 'fast' );
    $( '.classoverview' ).delay( 200 ).fadeIn( 'fast' );
    $( '.gnome' ).delay( 200 ).fadeIn( 'fast' );
  } else {
    $( '.unholy' ).removeClass( 'unholyselected' );
    $( '.frost' ).removeClass( 'frostselected' );
    $( '.blood' ).removeClass( 'bloodselected' );
    $( '.unholy' ).addClass( 'unholyselected' );
    $( '.gnome' ).fadeOut( 'fast' )
    $( '.classoverview' ).fadeOut( 'fast' );
    $( '.specoverviewblood' ).fadeOut( 'fast' );
    $( '.specoverviewfrost' ).fadeOut( 'fast' );
    $( '#blood_talents' ).fadeOut( 'fast' );
    $( '#frost_talents' ).fadeOut( 'fast' );
    $( '#unholy_talents' ).delay( 200 ).fadeIn( 'fast' );
    $( '.specoverviewunholy' ).delay( 200 ).fadeIn( 'fast' );
  }
} );

$( ".container" ).click( function() {
  $( ".container" ).removeClass( "active" );
  $( this ).addClass( "active" );
} );

//BOSSES

//marrowgar
$( '.marrow' ).on( 'click', function() {
  if ( $( '.marrow' ).hasClass( 'lord_marogar' ) ) {
    $( '.marrow' ).removeClass( 'lord_marogar' );
  } else {
    $( '#lord_marogar' ).delay( 200 ).fadeIn( 'fast' );
    $( '#death_whisper' ).fadeOut( 'fast' );
    $( '#gunship' ).fadeOut( 'fast' );
    $( '#saurfang' ).fadeOut( 'fast' );
    $( '#rot' ).fadeOut( 'fast' );
    $( '#professor' ).fadeOut( 'fast' );
    $( '#council' ).fadeOut( 'fast' );
    $( '#queen' ).fadeOut( 'fast' );
    $( '#dream' ).fadeOut( 'fast' );
    $( '#sindra' ).fadeOut( 'fast' );
    $( '#LK' ).fadeOut( 'fast' );
  }
} );

//deathwhisper
$( '.dw' ).on( 'click', function() {
  if ( $( '.dw' ).hasClass( 'death_whisper' ) ) {
    $( '.dw' ).removeClass( 'death_whisper' );
  } else {
    $( '#death_whisper' ).delay( 200 ).fadeIn( 'fast' );
    $( '#lord_marogar' ).fadeOut( 'fast' );
    $( '#gunship' ).fadeOut( 'fast' );
    $( '#saurfang' ).fadeOut( 'fast' );
    $( '#rot' ).fadeOut( 'fast' );
    $( '#professor' ).fadeOut( 'fast' );
    $( '#council' ).fadeOut( 'fast' );
    $( '#queen' ).fadeOut( 'fast' );
    $( '#dream' ).fadeOut( 'fast' );
    $( '#sindra' ).fadeOut( 'fast' );
    $( '#LK' ).fadeOut( 'fast' );
  }
} );

//gunship
$( '.gun' ).on( 'click', function() {
  if ( $( '.gun' ).hasClass( 'gunship' ) ) {
    $( '.gun' ).removeClass( 'gunship' );
  } else {
    $( '#gunship' ).delay( 200 ).fadeIn( 'fast' );
    $( '#lord_marogar' ).fadeOut( 'fast' );
    $( '#death_whisper' ).fadeOut( 'fast' );
    $( '#saurfang' ).fadeOut( 'fast' );
    $( '#rot' ).fadeOut( 'fast' );
    $( '#professor' ).fadeOut( 'fast' );
    $( '#council' ).fadeOut( 'fast' );
    $( '#queen' ).fadeOut( 'fast' );
    $( '#dream' ).fadeOut( 'fast' );
    $( '#sindra' ).fadeOut( 'fast' );
    $( '#LK' ).fadeOut( 'fast' );
  }
} );

//deathbringer
$( '.db' ).on( 'click', function() {
  if ( $( '.db' ).hasClass( 'saurfang' ) ) {
    $( '.db' ).removeClass( 'saurfang' );
  } else {
    $( '#saurfang' ).delay( 200 ).fadeIn( 'fast' );
    $( '#lord_marogar' ).fadeOut( 'fast' );
    $( '#death_whisper' ).fadeOut( 'fast' );
    $( '#gunship' ).fadeOut( 'fast' );
    $( '#rot' ).fadeOut( 'fast' );
    $( '#professor' ).fadeOut( 'fast' );
    $( '#council' ).fadeOut( 'fast' );
    $( '#queen' ).fadeOut( 'fast' );
    $( '#dream' ).fadeOut( 'fast' );
    $( '#sindra' ).fadeOut( 'fast' );
    $( '#LK' ).fadeOut( 'fast' );
  }
} );

//rotface
$( '.rf' ).on( 'click', function() {
  if ( $( '.rf' ).hasClass( 'rot' ) ) {
    $( '.rf' ).removeClass( 'rot' );
  } else {
    $( '#rot' ).delay( 200 ).fadeIn( 'fast' );
    $( '#lord_marogar' ).fadeOut( 'fast' );
    $( '#death_whisper' ).fadeOut( 'fast' );
    $( '#gunship' ).fadeOut( 'fast' );
    $( '#saurfang' ).fadeOut( 'fast' );
    $( '#professor' ).fadeOut( 'fast' );
    $( '#council' ).fadeOut( 'fast' );
    $( '#queen' ).fadeOut( 'fast' );
    $( '#dream' ).fadeOut( 'fast' );
    $( '#sindra' ).fadeOut( 'fast' );
    $( '#LK' ).fadeOut( 'fast' );
  }
} );

//pp
$( '.pp' ).on( 'click', function() {
  if ( $( '.pp' ).hasClass( 'professor' ) ) {
    $( '.pp' ).removeClass( 'professor' );
  } else {
    $( '#professor' ).delay( 200 ).fadeIn( 'fast' );
    $( '#lord_marogar' ).fadeOut( 'fast' );
    $( '#death_whisper' ).fadeOut( 'fast' );
    $( '#gunship' ).fadeOut( 'fast' );
    $( '#saurfang' ).fadeOut( 'fast' );
    $( '#rot' ).fadeOut( 'fast' );
    $( '#council' ).fadeOut( 'fast' );
    $( '#queen' ).fadeOut( 'fast' );
    $( '#dream' ).fadeOut( 'fast' );
    $( '#sindra' ).fadeOut( 'fast' );
    $( '#LK' ).fadeOut( 'fast' );
  }
} );

//council
$( '.bc' ).on( 'click', function() {
  if ( $( '.bc' ).hasClass( 'council' ) ) {
    $( '.bc' ).removeClass( 'council' );
  } else {
    $( '#council' ).delay( 200 ).fadeIn( 'fast' );
    $( '#lord_marogar' ).fadeOut( 'fast' );
    $( '#death_whisper' ).fadeOut( 'fast' );
    $( '#gunship' ).fadeOut( 'fast' );
    $( '#saurfang' ).fadeOut( 'fast' );
    $( '#rot' ).fadeOut( 'fast' );
    $( '#professor' ).fadeOut( 'fast' );
    $( '#queen' ).fadeOut( 'fast' );
    $( '#dream' ).fadeOut( 'fast' );
    $( '#sindra' ).fadeOut( 'fast' );
    $( '#LK' ).fadeOut( 'fast' );
  }
} );

//queen
$( '.bq' ).on( 'click', function() {
  if ( $( '.bq' ).hasClass( 'queen' ) ) {
    $( '.bq' ).removeClass( 'queen' );
  } else {
    $( '#queen' ).delay( 200 ).fadeIn( 'fast' );
    $( '#lord_marogar' ).fadeOut( 'fast' );
    $( '#death_whisper' ).fadeOut( 'fast' );
    $( '#gunship' ).fadeOut( 'fast' );
    $( '#saurfang' ).fadeOut( 'fast' );
    $( '#rot' ).fadeOut( 'fast' );
    $( '#professor' ).fadeOut( 'fast' );
    $( '#council' ).fadeOut( 'fast' );
    $( '#dream' ).fadeOut( 'fast' );
    $( '#sindra' ).fadeOut( 'fast' );
    $( '#LK' ).fadeOut( 'fast' );
  }
} );

//dreamwalker
$( '.drw' ).on( 'click', function() {
  if ( $( '.drw' ).hasClass( 'dream' ) ) {
    $( '.drw' ).removeClass( 'dream' );
  } else {
    $( '#dream' ).delay( 200 ).fadeIn( 'fast' );
    $( '#lord_marogar' ).fadeOut( 'fast' );
    $( '#death_whisper' ).fadeOut( 'fast' );
    $( '#gunship' ).fadeOut( 'fast' );
    $( '#saurfang' ).fadeOut( 'fast' );
    $( '#rot' ).fadeOut( 'fast' );
    $( '#professor' ).fadeOut( 'fast' );
    $( '#council' ).fadeOut( 'fast' );
    $( '#queen' ).fadeOut( 'fast' );
    $( '#sindra' ).fadeOut( 'fast' );
    $( '#LK' ).fadeOut( 'fast' );
  }
} );

//sindra
$( '.sin' ).on( 'click', function() {
  if ( $( '.sin' ).hasClass( 'sindra' ) ) {
    $( '.sin' ).removeClass( 'sindra' );
  } else {
    $( '#sindra' ).delay( 200 ).fadeIn( 'fast' );
    $( '#lord_marogar' ).fadeOut( 'fast' );
    $( '#death_whisper' ).fadeOut( 'fast' );
    $( '#gunship' ).fadeOut( 'fast' );
    $( '#saurfang' ).fadeOut( 'fast' );
    $( '#rot' ).fadeOut( 'fast' );
    $( '#professor' ).fadeOut( 'fast' );
    $( '#council' ).fadeOut( 'fast' );
    $( '#queen' ).fadeOut( 'fast' );
    $( '#dream' ).fadeOut( 'fast' );
    $( '#LK' ).fadeOut( 'fast' );
  }
} );

//LK
$( '.Lichking' ).on( 'click', function() {
  if ( $( '.Lichking' ).hasClass( 'LK' ) ) {
    $( '.Lichking' ).removeClass( 'LK' );
  } else {
    $( '#LK' ).delay( 200 ).fadeIn( 'fast' );
    $( '#lord_marogar' ).fadeOut( 'fast' );
    $( '#death_whisper' ).fadeOut( 'fast' );
    $( '#gunship' ).fadeOut( 'fast' );
    $( '#saurfang' ).fadeOut( 'fast' );
    $( '#rot' ).fadeOut( 'fast' );
    $( '#professor' ).fadeOut( 'fast' );
    $( '#council' ).fadeOut( 'fast' );
    $( '#queen' ).fadeOut( 'fast' );
    $( '#dream' ).fadeOut( 'fast' );
    $( '#sindra' ).fadeOut( 'fast' );
  }
} );

//AREAS

//basin
$( '.st0' ).on( 'click', function() {
  if ( $( '.st0' ).hasClass( 'basinarea' ) ) {
    $( '.st0' ).removeClass( 'basinarea' );
  } else {
    $( '.areas' ).delay( 200 ).fadeIn( 'fast', function() {
      //go to areas
      $( 'html, body' ).animate( {
        scrollTop: $( ".areas" ).offset().top
      }, 2000 );
    } );
    $( '.basinarea' ).delay( 200 ).fadeIn( 'fast' );
    $( '.tundraarea' ).fadeOut( 'fast' );
    $( '.icecrownarea' ).fadeOut( 'fast' );
    $( '.stormpeaksarea' ).fadeOut( 'fast' );
    $( '.crystalarea' ).fadeOut( 'fast' );
    $( '.zuldrakarea' ).fadeOut( 'fast' );
    $( '.wintergrasparea' ).fadeOut( 'fast' );
    $( '.grizzlyarea' ).fadeOut( 'fast' );
    $( '.howlingfjordarea' ).fadeOut( 'fast' );
    $( '.dragonblightarea' ).fadeOut( 'fast' );
  }
} );

//boreanTundra
$( '.st9' ).on( 'click', function() {
  if ( $( '.st9' ).hasClass( 'tundraarea' ) ) {
    $( '.st9' ).removeClass( 'tundraarea' );
  } else {
    $( '.areas' ).delay( 200 ).fadeIn( 'fast', function() {
      //go to areas
      $( 'html, body' ).animate( {
        scrollTop: $( ".areas" ).offset().top
      }, 2000 );
    } );
    $( '.tundraarea' ).delay( 200 ).fadeIn( 'fast' );
    $( '.basinarea' ).fadeOut( 'fast' );
    $( '.icecrownarea' ).fadeOut( 'fast' );
    $( '.stormpeaksarea' ).fadeOut( 'fast' );
    $( '.crystalarea' ).fadeOut( 'fast' );
    $( '.zuldrakarea' ).fadeOut( 'fast' );
    $( '.wintergrasparea' ).fadeOut( 'fast' );
    $( '.grizzlyarea' ).fadeOut( 'fast' );
    $( '.howlingfjordarea' ).fadeOut( 'fast' );
    $( '.dragonblightarea' ).fadeOut( 'fast' );
  }
} );

//icecrown
$( '.st7' ).on( 'click', function() {
  if ( $( '.st7' ).hasClass( 'icecrownarea' ) ) {
    $( '.st7' ).removeClass( 'icecrownarea' );
  } else {
    $( '.areas' ).delay( 200 ).fadeIn( 'fast', function() {
      //go to areas
      $( 'html, body' ).animate( {
        scrollTop: $( ".areas" ).offset().top
      }, 2000 );
    } );
    $( '.icecrownarea' ).delay( 200 ).fadeIn( 'fast' );
    $( '.basinarea' ).fadeOut( 'fast' );
    $( '.tundraarea' ).fadeOut( 'fast' );
    $( '.stormpeaksarea' ).fadeOut( 'fast' );
    $( '.crystalarea' ).fadeOut( 'fast' );
    $( '.zuldrakarea' ).fadeOut( 'fast' );
    $( '.wintergrasparea' ).fadeOut( 'fast' );
    $( '.grizzlyarea' ).fadeOut( 'fast' );
    $( '.howlingfjordarea' ).fadeOut( 'fast' );
    $( '.dragonblightarea' ).fadeOut( 'fast' );
  }
} );

//wintergrasp
$( '.st10' ).on( 'click', function() {
  if ( $( '.st10' ).hasClass( 'wintergrasparea' ) ) {
    $( '.st10' ).removeClass( 'wintergrasparea' );
  } else {
    $( '.areas' ).delay( 200 ).fadeIn( 'fast', function() {
      //go to areas
      $( 'html, body' ).animate( {
        scrollTop: $( ".areas" ).offset().top
      }, 2000 );
    } );
    $( '.wintergrasparea' ).delay( 200 ).fadeIn( 'fast' );
    $( '.basinarea' ).fadeOut( 'fast' );
    $( '.tundraarea' ).fadeOut( 'fast' );
    $( '.stormpeaksarea' ).fadeOut( 'fast' );
    $( '.crystalarea' ).fadeOut( 'fast' );
    $( '.zuldrakarea' ).fadeOut( 'fast' );
    $( '.icecrownarea' ).fadeOut( 'fast' );
    $( '.grizzlyarea' ).fadeOut( 'fast' );
    $( '.howlingfjordarea' ).fadeOut( 'fast' );
    $( '.dragonblightarea' ).fadeOut( 'fast' );
  }
} );

//crystalsongforest
$( '.st2' ).on( 'click', function() {
  if ( $( '.st2' ).hasClass( 'crystalarea' ) ) {
    $( '.st2' ).removeClass( 'crystalarea' );
  } else {
    $( '.areas' ).delay( 200 ).fadeIn( 'fast', function() {
      //go to areas
      $( 'html, body' ).animate( {
        scrollTop: $( ".areas" ).offset().top
      }, 2000 );
    } );
    $( '.crystalarea' ).delay( 200 ).fadeIn( 'fast' );
    $( '.basinarea' ).fadeOut( 'fast' );
    $( '.tundraarea' ).fadeOut( 'fast' );
    $( '.stormpeaksarea' ).fadeOut( 'fast' );
    $( '.wintergrasparea' ).fadeOut( 'fast' );
    $( '.zuldrakarea' ).fadeOut( 'fast' );
    $( '.icecrownarea' ).fadeOut( 'fast' );
    $( '.grizzlyarea' ).fadeOut( 'fast' );
    $( '.howlingfjordarea' ).fadeOut( 'fast' );
    $( '.dragonblightarea' ).fadeOut( 'fast' );
  }
} );

//dragonblight
$( '.st3' ).on( 'click', function() {
  if ( $( '.st3' ).hasClass( 'dragonblightarea' ) ) {
    $( '.st3' ).removeClass( 'dragonblightarea' );
  } else {
    $( '.areas' ).delay( 200 ).fadeIn( 'fast', function() {
      //go to areas
      $( 'html, body' ).animate( {
        scrollTop: $( ".areas" ).offset().top
      }, 2000 );
    } );
    $( '.dragonblightarea' ).delay( 200 ).fadeIn( 'fast' );
    $( '.basinarea' ).fadeOut( 'fast' );
    $( '.tundraarea' ).fadeOut( 'fast' );
    $( '.stormpseakarea' ).fadeOut( 'fast' );
    $( '.crystalarea' ).fadeOut( 'fast' );
    $( '.zuldrakarea' ).fadeOut( 'fast' );
    $( '.icecrownarea' ).fadeOut( 'fast' );
    $( '.grizzlyarea' ).fadeOut( 'fast' );
    $( '.howlingfjordarea' ).fadeOut( 'fast' );
    $( '.crystalarea' ).fadeOut( 'fast' );
  }
} );

//stormpeaks
$( '.st8' ).on( 'click', function() {
  if ( $( '.st8' ).hasClass( 'stormpeaksarea' ) ) {
    $( '.st8' ).removeClass( 'stormpeaksarea' );
  } else {
    $( '.areas' ).delay( 200 ).fadeIn( 'fast', function() {
      //go to areas
      $( 'html, body' ).animate( {
        scrollTop: $( ".areas" ).offset().top
      }, 2000 );
    } );
    $( '.stormpeaksarea' ).delay( 200 ).fadeIn( 'fast' );
    $( '.basinarea' ).fadeOut( 'fast' );
    $( '.tundraarea' ).fadeOut( 'fast' );
    $( '.wintergrasparea' ).fadeOut( 'fast' );
    $( '.crystalarea' ).fadeOut( 'fast' );
    $( '.zuldrakarea' ).fadeOut( 'fast' );
    $( '.icecrownarea' ).fadeOut( 'fast' );
    $( '.grizzlyarea' ).fadeOut( 'fast' );
    $( '.howlingfjordarea' ).fadeOut( 'fast' );
    $( '.dragonblightarea' ).fadeOut( 'fast' );
  }
} );

//zuldrak
$( '.st1' ).on( 'click', function() {
  if ( $( '.st1' ).hasClass( 'zuldrakarea' ) ) {
    $( '.st1' ).removeClass( 'zuldrakarea' );
  } else {
    $( '.areas' ).delay( 200 ).fadeIn( 'fast', function() {
      //go to areas
      $( 'html, body' ).animate( {
        scrollTop: $( ".areas" ).offset().top
      }, 2000 );
    } );
    $( '.zuldrakarea' ).delay( 200 ).fadeIn( 'fast' );
    $( '.basinarea' ).fadeOut( 'fast' );
    $( '.tundraarea' ).fadeOut( 'fast' );
    $( '.wintergrasparea' ).fadeOut( 'fast' );
    $( '.crystalarea' ).fadeOut( 'fast' );
    $( '.stormpeaksarea' ).fadeOut( 'fast' );
    $( '.icecrownarea' ).fadeOut( 'fast' );
    $( '.grizzlyarea' ).fadeOut( 'fast' );
    $( '.howlingfjordarea' ).fadeOut( 'fast' );
    $( '.dragonblightarea' ).fadeOut( 'fast' );
  }
} );

//grizzlyhills
$( '.st4' ).on( 'click', function() {
  if ( $( '.st4' ).hasClass( 'grizzlyarea' ) ) {
    $( '.st4' ).removeClass( 'grizzlyarea' );
  } else {
    $( '.areas' ).delay( 200 ).fadeIn( 'fast', function() {
      //go to areas
      $( 'html, body' ).animate( {
        scrollTop: $( ".areas" ).offset().top
      }, 2000 );
    } );
    $( '.grizzlyarea' ).delay( 200 ).fadeIn( 'fast' );
    $( '.basinarea' ).fadeOut( 'fast' );
    $( '.tundraarea' ).fadeOut( 'fast' );
    $( '.wintergrasparea' ).fadeOut( 'fast' );
    $( '.crystalarea' ).fadeOut( 'fast' );
    $( '.stormpeaksarea' ).fadeOut( 'fast' );
    $( '.icecrownarea' ).fadeOut( 'fast' );
    $( '.zuldrakarea' ).fadeOut( 'fast' );
    $( '.howlingfjordarea' ).fadeOut( 'fast' );
    $( '.dragonblightarea' ).fadeOut( 'fast' );
  }
} );

//howlingfjord
$( '.st5' ).on( 'click', function() {
  if ( $( '.st5' ).hasClass( 'howlingfjordarea' ) ) {
    $( '.st5' ).removeClass( 'howlingfjordarea' );
  } else {
    $( '.areas' ).delay( 200 ).fadeIn( 'fast', function() {
      //go to areas
      $( 'html, body' ).animate( {
        scrollTop: $( ".areas" ).offset().top
      }, 2000 );
    } );
    $( '.howlingfjordarea' ).delay( 200 ).fadeIn( 'fast' );
    $( '.basinarea' ).fadeOut( 'fast' );
    $( '.tundraarea' ).fadeOut( 'fast' );
    $( '.wintergrasparea' ).fadeOut( 'fast' );
    $( '.crystalarea' ).fadeOut( 'fast' );
    $( '.stormpeaksarea' ).fadeOut( 'fast' );
    $( '.icecrownarea' ).fadeOut( 'fast' );
    $( '.zuldrakarea' ).fadeOut( 'fast' );
    $( '.grizzlyarea' ).fadeOut( 'fast' );
    $( '.dragonblightarea' ).fadeOut( 'fast' );
  }
} );
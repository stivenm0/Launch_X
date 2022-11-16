const power= document.getElementById('power'); //boton encendido

const botons= document.getElementById("botons"); //contenedor botones panel left
const screen_bottom = document.getElementById("screen-bottom"); //pantalla modal

const image= document.getElementById("img-pokemon"); //imgagen pokemon
const name_pokemon= document.getElementById("name-pokemon"); //nombre pokemon

// -----------inforrmacion de pokemon-----------
const tipo= document.getElementById("tipo"); 
const tipo2= document.getElementById("tipo2");

const especie= document.getElementById("especie");
const especie2= document.getElementById("especie2");

const ataques= document.getElementById("ataques");
const ataques2= document.getElementById("ataques2");


//--------------------------------------
const search= document.getElementById("search")
const btn_s= document.getElementById("btn-search")

//informacion de pantalla left and right
const data1= document.getElementById("data1")
const data2= document.getElementById("data2")
//-----------------------------------

const height= document.getElementById("height")
const weight= document.getElementById("weight")

const btn_info = document.getElementById("btn_info"); //boton modal

// --------------statistics------------------------
const salud= document.getElementById("salud")
const ataque= document.getElementById("ataque")
const defensa= document.getElementById("defensa")
const SDefensa= document.getElementById("SDefensa")
const SAtaque= document.getElementById("SAtaque")
const velocidad= document.getElementById("velocidad")

const modalS= document.getElementById("dINFO");

// ----------------boton ?-----------------------
const ints = document.getElementById("ints");
const instrucciones = document.getElementById("instrucciones");


let pokemones=[];
let number=0;
POKEMONS();


// ----------explanation modal----------------------
function MODAL_MANUAL(){
    if(instrucciones.open){
        instrucciones.close(); 
    }else{
        instrucciones.showModal(); 
    }
}


//---------------power boton----------------
    const Encendido=()=>{ 
        power.classList.toggle('ON'); 
        image.classList.toggle("bg");
        data1.classList.toggle("display-n");
        data2.classList.toggle("display-n");

        search.value="";
        image.innerHTML="";
        name_pokemon.value=" ";
        tipo.innerText=""; 
        tipo2.innerText = "";
        especie.innerText=""; 
        especie2.innerText="";
        ataques.innerText="";
        ataques2.innerText="";
        weight.value=""
        height.value=""

        salud.innerText= "";
        ataque.innerText= "";
        defensa.innerText= "";
        SAtaque.innerText= "";
        SDefensa.innerText= "";
        velocidad.innerText= "";
        
        search.disabled= !search.disabled;
        btn_s.disabled= !btn_s.disabled;

        if(!btn_s.disabled){ 
        weight.value="PESO";
        height.value="ALTURA";
        }
        number=0;
    }



//---------------pokemons array------------------------
async function POKEMONS(){
    for(let i=1; i<500;i++){
        let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let pk= await pokemon.json();
        pokemones.push(pk);
    }
}


//-----------------------search pokemon------------------------------
    async function SEARCH(){
        let value = search.value.toLowerCase();

        if(value !== " " || value !== ""){
                    try {
                            let url = `https://pokeapi.co/api/v2/pokemon/${value}`;
                            let dat= await fetch(url);
                
                            if(dat.status===200){
                                let data = await dat.json();
                                ADD(data);
                                btn_info.classList.toggle("ON");
                            }else{
                                ERROR();
                            }
                            
                    } catch (error) {
                            ERROR();
                    }
                }
     }



    
//------------------------------add data--------------------------------------------
     async function ADD(res){
        image.innerHTML= `<img src="${res.sprites.front_default}" alt="${res.name}" >`;
        name_pokemon.value = res.name;

        salud.innerText= res.stats[0].base_stat;
        ataque.innerText= res.stats[1].base_stat;
        defensa.innerText= res.stats[2].base_stat;
        SAtaque.innerText= res.stats[3].base_stat;
        SDefensa.innerText= res.stats[4].base_stat;
        velocidad.innerText= res.stats[5].base_stat;

        let ty = await fetch(res.types[0].type.url);
        let type = await ty.json();

        let esp = await fetch(res.species.url);
        let species = await esp.json()

        let ata = await fetch(res.moves[0].move.url)
        let attack1 = await ata.json();

        ata = await fetch(res.moves[1].move.url)
        let attack2 = await ata.json();

       
        if( screen.width < 1000){
            tipo.innerText= type.names[5].name;
            especie.innerText=  species.genera[5].genus;
            ataques.innerText=  attack1.names[5].name+ ", " +attack2.names[5].name;

        }else{
            tipo2.innerText= type.names[5].name;
            especie2.innerText=  species.genera[5].genus;
            ataques2.innerText= attack1.names[5].name+ ", " +attack2.names[5].name;
            height.value= (0.1*res.height).toFixed(1) + " m";
            weight.value= (0.1*res.weight).toFixed(1) + " kg";
        }
        
    }
    


//---------modal screen mobil--------------
const MODAL_SCREEN=()=>{
    if(!btn_s.disabled){ 
    botons.classList.toggle('display-n');
    screen_bottom.classList.toggle('display-n');     
    btn_info.classList.remove("ON");
    }
}


//---------pokemon statistics-------------
function STATISTICS(){
    if(!btn_s.disabled){ 
        botons.classList.toggle('display-n');
        if(modalS.open){
            modalS.close(); 
        }else{
            modalS.show(); 
        }

    }  
}

//----------------------------------------
function ERROR(){
    image.innerHTML= `<img src="./images/error.webp" alt="ERROR" style="filter: grayscale(60%);">`
    name_pokemon.value = "ERROR";
}


//----------arrow right-----------
async function RIGHT(){
    if(!search.disabled){
        if(number<=499){
            number++;
            ADD(pokemones[number]);      
        }   
    }
}


//-------------arrow left-----------
async function LEFT(){
    if(!search.disabled){
        if(number>0){
        number--;
            
        ADD(pokemones[number]); 
        }  
    }
}

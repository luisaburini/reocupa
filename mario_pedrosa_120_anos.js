var counter = 0;

let videoStopper = function(id) {
    let containerElement = document.getElementById(id);
    let iframe_tag = containerElement.querySelector( 'iframe');
    let video_tag = containerElement.querySelector( 'video' );
    if ( iframe_tag) {
        let iframeSrc = iframe_tag.src;
        iframe_tag.src = iframeSrc; 
    }
    if ( video_tag) {
        video_tag.pause();
    }
}

var bgElem = document.getElementById("bg");
var soundOvo1Elem = document.getElementById("sound_ovo1");
var soundOvo2Elem = document.getElementById("sound_ovo2");
var soundOvo3Elem = document.getElementById("sound_ovo3");
var soundOvo4Elem = document.getElementById("sound_ovo4");
var videoOvoElem = document.getElementById("video_ovo");
var izidorioElem = document.getElementById("izidorio");
var ovo1Elem = document.getElementById("ovo1");
var ovo2Elem = document.getElementById("ovo2");
var ovo3Elem = document.getElementById("ovo3");
var ovo4Elem = document.getElementById("ovo4");
var homeElem = document.getElementById("home");
var colmeiaContainerElem = document.getElementById("colmeia_container");
var quemNaoLutaTaMortoElem = document.getElementById("quem_nao_luta_ta_morto");
var quemNaoLutaTaMortoAtrasElem = document.getElementById("quem_nao_luta_ta_morto_atras");
var textoCuratorialElem = document.getElementById("texto_curatorial");
var setaEsquerdaElem = document.getElementById("seta_esquerda");
var aEsquerdaElem = document.getElementById("a_esquerda");
var pauloBatistaElem = document.getElementById("paulo_batista");
var pauloSetaElem = document.getElementById("paulo_seta");
var	pele1Elem = document.getElementById("pele1")
var	pele2Elem = document.getElementById("pele2");
var videoHistoriaElem = document.getElementById("video_historia");
var videoHistoria2Elem = document.getElementById("video_historia2");
var luteComoElem = document.getElementById("lute_como_audio");
var tituloFlorestaElem = document.getElementById("titulo_floresta");
var floresta1Elem = document.getElementById("floresta1");
var floresta2Elem = document.getElementById("floresta2");
var floresta3Elem = document.getElementById("floresta3");
var floresta4Elem = document.getElementById("floresta4");
var floresta5Elem = document.getElementById("floresta5");
var floresta6Elem = document.getElementById("floresta6");
var floresta7Elem = document.getElementById("floresta7");
var floresta8Elem = document.getElementById("floresta8");
var floresta9Elem = document.getElementById("floresta9");
var floresta10Elem = document.getElementById("floresta10");
var floresta11Elem = document.getElementById("floresta11");
var floresta12Elem = document.getElementById("floresta12");
var floresta13Elem = document.getElementById("floresta13");
var floresta14Elem = document.getElementById("floresta14");
var floresta15Elem = document.getElementById("floresta15");
var floresta16Elem = document.getElementById("floresta16");
var floresta17Elem = document.getElementById("floresta17");
var floresta18Elem = document.getElementById("floresta18");
var floresta19Elem = document.getElementById("floresta19");
var floresta20Elem = document.getElementById("floresta20");
var floresta21Elem = document.getElementById("floresta21");
var floresta22Elem = document.getElementById("floresta22");
var floresta23Elem = document.getElementById("floresta23");
var floresta24Elem = document.getElementById("floresta24");
var floresta25Elem = document.getElementById("floresta25");
var tourElem = document.getElementById("tour");
var mtscElem = document.getElementById("mtsc");
var video360Elem = document.getElementById("video360");
var aparelhamentoElem = document.getElementById("aparelhamento");
var videoReocupaElem = document.getElementById("video_reocupa");
var videoOcupacaoElem = document.getElementById("video_ocupacao");
var anaueBadaueElem = document.getElementById("anaue_badaue");
var audioAnaueBadaueElem  = document.getElementById("audio_anaue_badaue");
var diasMulheresViraoElem = document.getElementById("dias_mulheres_virao");
var monumentificacaoRessignificados1Elem = document.getElementById("monumentificacao_ressignificados1");
var monumentificacaoRessignificados2Elem = document.getElementById("monumentificacao_ressignificados2");
var monumentificacaoRessignificados3Elem = document.getElementById("monumentificacao_ressignificados3");
var monumentificacaoRessignificados4Elem = document.getElementById("monumentificacao_ressignificados4");
var monumentificacaoRessignificados5Elem = document.getElementById("monumentificacao_ressignificados5");
var monumentificacaoRessignificados6Elem = document.getElementById("monumentificacao_ressignificados6");
var monumentificacaoTituloElem = document.getElementById("monumentificacao_titulo");
var containerMonumentificacaoElem = document.getElementById("container_monumentificacao");
var textoDuqueElem = document.getElementById("texto_duque");
var mapaDuqueElem = document.getElementById("mapa_duque");
var textoBorbaElem = document.getElementById("texto_borba");
var textoAnhangueraElem = document.getElementById("texto_anhanguera");
var mapaAnhangueraElem = document.getElementById("mapa_anhanguera");
var mapaBorbaElem = document.getElementById("mapa_borba");
var fumacaAntifascistaElem = document.getElementById("fumaca_antifascista");
var inconstituicaoElem = document.getElementById("inconstituicao");
var abiJuramentoElem = document.getElementById("abi_juramento");
var vadeRetroElem = document.getElementById("vade_retro");
var	divAmarelaElem = document.getElementById("div_amarela");
var perspectivaElem = document.getElementById("perspectiva");
var	divAzulElem = document.getElementById("div_azul");
var selecaoElem = document.getElementById("selecao");
var tiroElem = document.getElementById("tiro");
//var containerCopa70Elem = document.getElementById("container_copa70");
var quedaLivreElem = document.getElementById("queda_livre");
var gritoElem = document.getElementById("grito");
var tripticoElem = document.getElementById("triptico");
var tituloZapElem = document.getElementById("titulo_zap");
var zapElem = document.getElementById("zap");
var zapButtonElem = document.getElementById("zap_button");
var contornosConscientesElem = document.getElementById("contornos_conscientes");
var marRioPedraRosaGifElem = document.getElementById("mar_rio_pedra_rosa_gif");
var marRioPedraRosaElem = document.getElementById("mar_rio_pedra_rosa");
var marElem = document.getElementById("mar");
var audioMarElem = document.getElementById("audio_mar");
var rioElem = document.getElementById("rio");
var audioRioElem = document.getElementById("audio_rio");
var pedraElem = document.getElementById("pedra");
var audioPedraElem = document.getElementById("audio_pedra");
var rosaElem = document.getElementById("rosa");
var audioRosaElem = document.getElementById("audio_rosa");
var vidaBgElem = document.getElementById("vida_background");
var robsonImagemElem = document.getElementById("robson_imagem");
var robsonElem = document.getElementById("robson");
var robsonGifElem = document.getElementById("robson_gif");
var robsonTextoElem = document.getElementById("robson_texto");
var robsonPingPongElem = document.getElementById("robson_ping_pong");
var robsonSetaElem = document.getElementById("robson_seta");
var marcelod2Elem = document.getElementById("marcelod2");
var textoLaboratorioElem = document.getElementById("texto_laboratorio");
var tituloTextoLaboratorioElem = document.getElementById("titulo_texto_laboratorio");
var muroElem = document.getElementById("muro");
var agradecimentoElem = document.getElementById("agradecimento");
var audioMuroElem = document.getElementById("audio_muro");
var videoMaricaElem = document.getElementById("video_marica");
var estrela1Elem = document.getElementById("estrela1");
var estrela2Elem = document.getElementById("estrela2");
var estrela3Elem = document.getElementById("estrela3");
var elenitaElem = document.getElementById("elenita");
var elenitaTituloElem = document.getElementById("elenita_titulo");
var elenitaVideoElem = document.getElementById("elenita_video");
var elenitaImg1Elem = document.getElementById("elenita_img1");
var elenitaImg2Elem = document.getElementById("elenita_img2");
var elenitaImg3Elem = document.getElementById("elenita_img3");
var elenitaImg4Elem = document.getElementById("elenita_img4");
var elenitaImg5Elem = document.getElementById("elenita_img5");
var elenitaImg6Elem = document.getElementById("elenita_img6");
var elenitaImg7Elem = document.getElementById("elenita_img7");
var elenitaImg8Elem = document.getElementById("elenita_img8");
var elenitaImg9Elem = document.getElementById("elenita_img9");
var elenitaImg10Elem = document.getElementById("elenita_img10");
var elenitaImg11Elem = document.getElementById("elenita_img11");
var elenitaImg12Elem = document.getElementById("elenita_img12");
var elenitaImg13Elem = document.getElementById("elenita_img13");
var elenitaImg14Elem = document.getElementById("elenita_img14");
var elenitaImg15Elem = document.getElementById("elenita_img15");
var elenitaImg16Elem = document.getElementById("elenita_img16");
var elenitaImg17Elem = document.getElementById("elenita_img17");
var elenitaImg18Elem = document.getElementById("elenita_img18");
var vendeSeElem = document.getElementById("vende-se");
var autoriaElem = document.getElementById("autoria");
var propriedadeElem = document.getElementById("propriedade");
var moradiaElem = document.getElementById("moradia");
var iconDiasMulheresViraoElem = document.getElementById("icon_dias_mulheres_virao");
var iconHistoriaElem = document.getElementById("icon_historia");
var iconFumacaAntifascistaElem = document.getElementById("icon_fumaca_antifascista")
var iconMonumentificacaoRessiginificadoElem = document.getElementById("icon_monumentificacao_ressignificado")
var iconOvoElem = document.getElementById("icon_ovo")
var iconPauloBatistaElem = document.getElementById("icon_paulo_batista")
var iconAnaueBadaueElem = document.getElementById("icon_anaue_badaue")
var iconMaricaElem = document.getElementById("icon_marica");
var iconInconstituicaoElem = document.getElementById("icon_inconstituicao")
var iconCanalhasElem = document.getElementById("icon_canalhas");
var iconQuedaLivreElem = document.getElementById("icon_queda_livre");
var iconZapElem = document.getElementById("icon_zap");
var iconMarRioPedraRosaElem = document.getElementById("icon_mar_rio_pedra_rosa"); 
var iconVidaElem = document.getElementById("icon_vida");
var iconElenitaElem = document.getElementById("icon_elenita");
var iconRobsonElem = document.getElementById("icon_robson");
var iconLaboratorioElem = document.getElementById("icon_laboratorio");
var iconLuteComoElem = document.getElementById("icon_lute_como");
var iconBamboziElem = document.getElementById("icon_bambozi");
var iconJarbasElem = document.getElementById("icon_jarbas");
var mudeSeuCelElem = document.getElementById("vire_seu_cel");
var portasAbertasElem = document.getElementById("portas_abertas");
var gifJarbasElem = document.getElementById("gif_jarbas");
var politicaDividida = document.getElementById("politica_dividida");
var iframeHistoriaElem = document.getElementById("iframe_historia");
var iframe360Elem = document.getElementById("iframe_360");
var iframeOcupacaoElem = document.getElementById("iframe_ocupacao");
var iframeReocupaElem = document.getElementById("iframe_reocupa");
var iframeOvo1Elem = document.getElementById("ovo1");
var iframeOvo2Elem = document.getElementById("ovo2");
var iframeOvo3Elem = document.getElementById("ovo3");
var iframeOvo4Elem = document.getElementById("ovo4");
var iframeOvoElem = document.getElementById("iframe_ovo");


function detectOrientation(){
	window.scrollTo(0, 0); 
	var mql = window.matchMedia("(orientation: portrait)")
	if(mql.matches)
	{	
		homeElem.style.display = "none";
		mudeSeuCelElem.style.height = bgElem.style.height;
		mudeSeuCelElem.style.display = "block";
	}
	else
	{
		mudeSeuCelElem.style.display = "none";
	}
	
}


detectOrientation();


//bgElem.addEventListener("resize", detectOrientation, false);
window.addEventListener("resize", detectOrientation, false);

let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
setaEsquerdaElem.addEventListener(touchEvent, nextWork);

iconDiasMulheresViraoElem.addEventListener(touchEvent, showDiasMulheresVirao);
iconHistoriaElem.addEventListener(touchEvent, showHistoria);
iconFumacaAntifascistaElem.addEventListener(touchEvent, showFumacaAntiFascista);
iconMonumentificacaoRessiginificadoElem.addEventListener(touchEvent, showMonumentificacaoDoRessignificado);
iconOvoElem.addEventListener(touchEvent, showOvo);
iconPauloBatistaElem.addEventListener(touchEvent, showPauloBatista);
iconAnaueBadaueElem.addEventListener(touchEvent, showAnaueBadaue);
iconMaricaElem.addEventListener(touchEvent, showVendeSe);
iconInconstituicaoElem.addEventListener(touchEvent, showInconstituicao);
iconCanalhasElem.addEventListener(touchEvent, showCanalhas);
iconQuedaLivreElem.addEventListener(touchEvent, showQuedaLivre);
iconZapElem.addEventListener(touchEvent, showZap)
iconMarRioPedraRosaElem.addEventListener(touchEvent, showMarRioPedraRosa)
iconVidaElem.addEventListener(touchEvent, showVida);
iconElenitaElem.addEventListener(touchEvent, showElenita);
iconRobsonElem.addEventListener(touchEvent, showRobson);
iconLaboratorioElem.addEventListener(touchEvent, showLaboratorio);
iconLuteComoElem.addEventListener(touchEvent, showLuteComo);
iconBamboziElem.addEventListener(touchEvent, showBambozi);
iconJarbasElem.addEventListener(touchEvent, showJarbas);
vidaBgElem.addEventListener(touchEvent, onClickVida);
homeElem.addEventListener(touchEvent, onClickHome);
pauloSetaElem.addEventListener(touchEvent, onClickPauloSeta);

iconDiasMulheresViraoElem.addEventListener("mouseover", onMouseOverDiasMulheresVirao);
setaEsquerdaElem.addEventListener("mouseover", onMouseOverSeta);
homeElem.addEventListener("mouseover", onMouseOverHome);
iconHistoriaElem.addEventListener("mouseover", onMouseOverHistoria);
iconFumacaAntifascistaElem.addEventListener("mouseover", onMouseOverFumacaAntifascista);
iconMonumentificacaoRessiginificadoElem.addEventListener("mouseover", onMouseOverMonumentificacaoRessignificados);
iconOvoElem.addEventListener("mouseover", onMouseOverOvo);
iconPauloBatistaElem.addEventListener("mouseover", onMouseOverPauloBatista);
iconAnaueBadaueElem.addEventListener("mouseover", onMouseOverAnaueBadaue);
iconMaricaElem.addEventListener("mouseover", onMouseOverMarica);
iconInconstituicaoElem.addEventListener("mouseover", onMouseOverInconstituicao);
iconCanalhasElem.addEventListener("mouseover", onMouseOverCanalhas);
iconQuedaLivreElem.addEventListener("mouseover", onMouseOverQuedaLivre);
iconZapElem.addEventListener("mouseover", onMouseOverZap)
iconMarRioPedraRosaElem.addEventListener("mouseover", onMouseOverMarRioPedraRosa);
iconVidaElem.addEventListener("mouseover", onMouseOverVida);
iconElenitaElem.addEventListener("mouseover", onMouseOverElenita);
iconRobsonElem.addEventListener("mouseover", onMouseOverRobson);
iconLaboratorioElem.addEventListener("mouseover", onMouseOverLaboratorio);
iconLuteComoElem.addEventListener("mouseover", onMouseOverLuteComo);
iconBamboziElem.addEventListener("mouseover", onMouseOverBambozi);
iconJarbasElem.addEventListener("mouseover", onMouseOverJarbas);
vidaBgElem.addEventListener("mouseover", onMouseOverVidaBg);
muroElem.addEventListener("mouseover", onMouseOverMuro);
robsonSetaElem.addEventListener("mouseover", onMouseOverRobsonSeta);
pauloSetaElem.addEventListener("mouseover", onMouseOverPauloSeta);
muroElem.addEventListener(touchEvent, onClickMuro);
robsonSetaElem.addEventListener(touchEvent, onClickRobsonSeta);

window.onscroll = onScrollCanalhas;

var shortcodeArray = [];
var timestampArray = [];
var shortcode = "";
var imagePath = "";
var legenda = "";
var timestamp = "";


function onMouseOverPauloSeta(event)
{
	pauloSetaElem.style.cursor = "pointer";
}

function onMouseOverJarbas(event)
{
	iconJarbasElem.style.cursor = "pointer";
}

function onMouseOverBambozi(event)
{
	iconBamboziElem.style.cursor = "pointer";
}

function onMouseOverRobsonSeta(event)
{
	robsonSetaElem.style.cursor = "pointer";
}

function onMouseOverSeta(event)
{
	setaEsquerdaElem.style.cursor = "pointer";
}

function onMouseOverDiasMulheresVirao(event)
{
	iconDiasMulheresViraoElem.style.cursor = "pointer";
}

function onMouseOverHome(event)
{
	homeElem.style.cursor = "pointer";
}

function onMouseOverHistoria(event)
{
	iconHistoriaElem.style.cursor = "pointer";
}

function onMouseOverFumacaAntifascista(event)
{
	iconFumacaAntifascistaElem.style.cursor = "pointer";
}

function onMouseOverMonumentificacaoRessignificados(event)
{
	iconMonumentificacaoRessiginificadoElem.style.cursor = "pointer";
}

function onMouseOverOvo(event)
{
	iconOvoElem.style.cursor = "pointer";
}

function onMouseOverPauloBatista(event)
{
	iconPauloBatistaElem.style.cursor = "pointer";
}

function onMouseOverAnaueBadaue(event)
{
	iconAnaueBadaueElem.style.cursor = "pointer";
}

function onMouseOverMarica(event)
{
	iconMaricaElem.style.cursor = "pointer";
}

function onMouseOverInconstituicao(event)
{
	iconInconstituicaoElem.style.cursor = "pointer";
}

function onMouseOverCanalhas(event)
{
	iconCanalhasElem.style.cursor = "pointer";
}

function onMouseOverQuedaLivre(event)
{
	iconQuedaLivreElem.style.cursor = "pointer";
}		

function onMouseOverZap(event)
{
	iconZapElem.style.cursor = "pointer";
}	

function onMouseOverMarRioPedraRosa(event)
{
	iconMarRioPedraRosaElem.style.cursor = "pointer";
}

function onMouseOverVida(event) 
{
	iconVidaElem.style.cursor = "pointer";
}

function onMouseOverElenita(event) 
{
	iconElenitaElem.style.cursor = "pointer";
}

function onMouseOverRobson(event) 
{
	iconRobsonElem.style.cursor = "pointer";
}

function onMouseOverLaboratorio(event) 
{
	iconLaboratorioElem.style.cursor = "pointer";
}

function onMouseOverLuteComo(event) 
{
	iconLuteComoElem.style.cursor = "pointer";
}

function onMouseOverVidaBg(event)
{
	vidaBgElem.style.cursor = "url(https://live.staticflickr.com/65535/50525645593_342bcb5e0f_o.png), auto";
}

function onMouseOverMuro(event)
{
	muroElem.style.cursor = "pointer";
}

var indexRobson = 0;

function onClickRobsonSeta(event)
{
	if(indexRobson >= robsonImgs.length-1)
	{
		indexRobson = 0;
	}
	else
	{
		indexRobson++;
	}
	robsonImagemElem.style.backgroundImage = "url(" + robsonImgs[indexRobson] + ")";
}

var indexPaulo = 0;

function onClickPauloSeta(event)
{
	if(indexPaulo >= tirinhas.length-1)
	{
		indexPaulo = 0;
	}
	else
	{
		indexPaulo++;
	}
	pauloBatistaElem.src = tirinhas[indexPaulo];
	
}


var robsonImgs = ["https://live.staticflickr.com/65535/50694003787_728ba84c67_o.jpg", //1
									"https://live.staticflickr.com/65535/50693921171_795b516d60_o.jpg", //2
									"https://live.staticflickr.com/65535/50693921151_f1a93d4230_o.jpg", //3
									"https://live.staticflickr.com/65535/50694003727_43beaf3177_o.jpg", //4
									"https://live.staticflickr.com/65535/50694003692_a74b36a9d0_o.jpg", //5
									"https://live.staticflickr.com/65535/50693177853_d200a3a124_o.jpg", //6
									"https://live.staticflickr.com/65535/50693177803_c99d4efe63_o.jpg", //7
									"https://live.staticflickr.com/65535/50693177763_a6ff55fd11_o.jpg", //8
									"https://live.staticflickr.com/65535/50693177728_8dd15ee8f2_o.jpg", //9
									""];
								

function onClickMuro(event)
{	
	showColmeia();
}

function onClickHome(event)
{
	
	showColmeia();
	window.scrollTo(0, screen.height*0.98); 
}

function onClickVida(event)
{
	// criar novo componente img 
	var img =	document.createElement('img');
	img.src = "https://live.staticflickr.com/65535/50525645593_342bcb5e0f_o.png";
	vidaBgElem.appendChild(img);
	img.style.top = (event.pageY) + "px";
	img.style.left = (event.pageX) + "px";	

	img.style.position = "absolute";
}

function cleanVida()
{
	// remove todos componente vida
	while(vidaBgElem.firstChild)
	{
		vidaBgElem.removeChild(vidaBgElem.firstChild)
	}
}

var sequence = [];

// passa para o proximo trabalho
function nextWork()
{
	clearScreen();
	
	console.log("Next work");
	if(sequence.length == 0)
	{
		while(sequence.length < 19)
		{
			var rand = Math.floor(Math.random() * 20);
			if(!sequence.includes(rand))
			{
				sequence.push(rand);
			}
		}
	}
	
	var next = sequence[0];
	console.log("sequence sequence before " + sequence );
	sequence.splice(0,1);
	console.log("sequence sequence after " + sequence);
	console.log("next " + next);
	switch (next)
	{
		case 0:
		console.log("show lute como");
		showLuteComo();
		break;
		case 1:
		console.log("show fumaça");
		showFumacaAntiFascista();
		break;
		case 2:
		console.log("show monumentificacao");
		showMonumentificacaoDoRessignificado();
		break;
		case 3:
		console.log("show mar rio pedra rosa");
		showMarRioPedraRosa();
		break;
		case 4:
		console.log("show marica");
		showVendeSe();
		break;
		case 5:
		console.log("show ovo");
		showOvo();
		break;
		case 6:
		console.log("show canalhas");
		showCanalhas();
		break;
		case 7:
		console.log("show historia");
		showHistoria();
		break;
		case 8:
		console.log("show dias mulheres virao");
		showDiasMulheresVirao();
		break;
		case 9:
		console.log("show anaue badaue");
		showAnaueBadaue();
		break;
		case 10:
		console.log("show queda livre");
		showQuedaLivre();
		break;
		case 11:
		console.log("show laboratorio");
		showLaboratorio();
		break;
		case 12:
		console.log("show robson");
		showRobson();
		break;
		case 13:
		console.log("show elenita");
		showElenita();
		break;
		case 14:
		console.log("show zap");
		showZap();
		break;
		case 15:
		console.log("show inconstituicao");
		showInconstituicao();
		break;
		case 16:
		console.log("show vida");
		showVida();
		break;
		case 17:
		showPauloBatista();
		console.log("show paulo batista");
		break;
		case 18:
		showJarbas();
		console.log("show jarbas");
		break;
		case 19: 
		showBambozi();
		console.log("show bambozi");
		break;
	}
}


function showColmeia()
{	
	clearScreen();
	aEsquerdaElem.style.color = "white";
	setaEsquerdaElem.style.color = "white";

	bgElem.style.backgroundSize = "cover";
	bgElem.style.backgroundRepeat = "no-repeat";
	bgElem.style.top = "50vmax";
	bgElem.style.width = "135%";
	bgElem.style.height = "135vmax";
	bgElem.style.left = "-35%";
	
	
	var t1 = "60vmax";
  var t2 = "75.5vmax";
  var t2_frente = "75.5vmax";  
  var t2_atras = "76vmax";
	var t3 = "91vmax";
	var t4 = "106.5vmax";
	var t5 = "122vmax";	
	var t6 = "137.5vmax";
	var t7 = "153vmax";	
	var t8 = "168.5vmax";
		
	var l1 = "18vmax" ;
	var l2 = "36vmax";
	var l2_atras = "35.5vmax";
	var l3 = "54vmax";
	var l4 = "72vmax";
	
	var coordinates = [];
	
	coordinates.push([t1, l1]);
	coordinates.push([t1, l2]);
	coordinates.push([t1, l3]);
	coordinates.push([t1, l4]);
	
	coordinates.push([t2, l1]);
	coordinates.push([t2, l4]);
	
	coordinates.push([t3, l1]);
	coordinates.push([t3, l4]);
	
	coordinates.push([t4, l1]);
	coordinates.push([t4, l4]);
	
	coordinates.push([t5, l1]);
	coordinates.push([t5, l4]);
	
	coordinates.push([t6, l1]);
	coordinates.push([t6, l4]);
	
	coordinates.push([t7, l1]);
	coordinates.push([t7, l4]);
	
	coordinates.push([t8, l1]);
	coordinates.push([t8, l2]);
	coordinates.push([t8, l3]);
	coordinates.push([t8, l4]);
	
	console.log("COORDINATES " + coordinates)
	
	var textHeight = "107vh";
	var textWidth = "31vw";
			
		
	// DIAS MULHERES VIRÃO
	iconDiasMulheresViraoElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50679558143_609ca52cf9_o.jpg)";
	iconDiasMulheresViraoElem.style.color = "red";
	var coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	console.log("First coordinate: " + coordinate);
	iconDiasMulheresViraoElem.style.top = coordinate[0];
	iconDiasMulheresViraoElem.style.left = coordinate[1];
	console.log("First coordinate: " + coordinate[0]);
	console.log("First coordinate: " + coordinate[1]);
	
	var index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	
	// ELENITA	
	iconElenitaElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50682594133_319d388833_o.png)";		
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconElenitaElem.style.top = coordinate[0];
	iconElenitaElem.style.left = coordinate[1];
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	
	// FUMAÇA ANTIFASCISTA
	iconFumacaAntifascistaElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50640389692_7f33d7205b_z.jpg)";
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconFumacaAntifascistaElem.style.top = coordinate[0];
	iconFumacaAntifascistaElem.style.left = coordinate[1];
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	
		// MARICÁ
	iconMaricaElem.style.color = "white";
	iconMaricaElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50688466723_31589fb47a_o.png)";
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconMaricaElem.style.top = coordinate[0];
	iconMaricaElem.style.left = coordinate[1];
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	
		// MONUMENTIFICAÇÃO DOS RESSIGNIFICADOS		
	iconMonumentificacaoRessiginificadoElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50684308126_3ea330e27a_o.png)";	
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconMonumentificacaoRessiginificadoElem.style.backgroundSize = "cover";
	iconMonumentificacaoRessiginificadoElem.style.color = "black";
	iconMonumentificacaoRessiginificadoElem.style.top = coordinate[0];
	iconMonumentificacaoRessiginificadoElem.style.left = coordinate[1];
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	
	// TEXTO CURATORIAL
	quemNaoLutaTaMortoElem.style.top = t2_frente;
	quemNaoLutaTaMortoElem.style.left = l2;
	quemNaoLutaTaMortoAtrasElem.style.top = t2_atras;
	quemNaoLutaTaMortoAtrasElem.style.left = l2_atras;
	quemNaoLutaTaMortoAtrasElem.style.height = textHeight;
	quemNaoLutaTaMortoAtrasElem.style.width = textWidth;
	
	// CARRO DO OVO	
	iconOvoElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50681536672_b7d9186d73_o.png)";
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconOvoElem.style.top = coordinate[0];
	iconOvoElem.style.left = coordinate[1];
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	
		// ANAUÊ BADAUÊ
	iconAnaueBadaueElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50453279563_1bfd42ebdd_o.jpg)";
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconAnaueBadaueElem.style.top = coordinate[0];
	iconAnaueBadaueElem.style.left = coordinate[1];
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	
		// QUEDA LIVRE
	iconQuedaLivreElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50685081987_c646aec1f8_o.jpg)";
	iconQuedaLivreElem.style.backgroundSize = "cover";
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconQuedaLivreElem.style.top = coordinate[0];
	iconQuedaLivreElem.style.left = coordinate[1];
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	
		// CANALHAS
	iconCanalhasElem.style.backgroundImage = "url(https://payload.cargocollective.com/1/24/780163/13795806/site03_600.jpg)";
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconCanalhasElem.style.top = coordinate[0];
	iconCanalhasElem.style.left = coordinate[1];
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	
		// VIDA
	iconVidaElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50525645593_342bcb5e0f_o.png)";
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconVidaElem.style.top = coordinate[0];
	iconVidaElem.style.left = coordinate[1];	
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	
	// MAR RIO PEDRA ROSA
	iconMarRioPedraRosaElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50507293923_e9c1e4959f_o.jpg)";
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconMarRioPedraRosaElem.style.top = coordinate[0];
	iconMarRioPedraRosaElem.style.left = coordinate[1];
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	
	// HISTÓRIA REOCUPA
	iconHistoriaElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50683449852_1715d02f84_o.png)";
	iconHistoriaElem.style.color = "white";
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconHistoriaElem.style.top = coordinate[0];
	iconHistoriaElem.style.left = coordinate[1];
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	
	// INCONSTITUIÇÃO
	iconInconstituicaoElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50679647838_46c1562466_c.jpg)";
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconInconstituicaoElem.style.top = coordinate[0];
	iconInconstituicaoElem.style.left = coordinate[1];
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	
	// LUTE COMO		
	iconLuteComoElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50687519607_d7518e2789_o.png)";
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconLuteComoElem.style.top = coordinate[0];
	iconLuteComoElem.style.left = coordinate[1];
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	
	// LABORATÓRIO EXPERIMENTAL DE LIBERDADE
	iconLaboratorioElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50640302586_5e256c3ccf_z.jpg)";
	iconLaboratorioElem.style.color = "white";
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconLaboratorioElem.style.top = coordinate[0];
	iconLaboratorioElem.style.left = coordinate[1];
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	console.log("Coordinates length " + coordinates.length);	
	
	// PAULO BATISTA	
	iconPauloBatistaElem.style.backgroundSize = "cover";
	iconPauloBatistaElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50683215466_e0c4cb8d58_o.jpg)";	
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconPauloBatistaElem.style.top = coordinate[0];
	iconPauloBatistaElem.style.left = coordinate[1];
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	console.log("Coordinates length " + coordinates.length);
		
	// ZAP	
	iconZapElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50681693177_b99e44b4ec_o.png)";
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconZapElem.style.top = coordinate[0];
	iconZapElem.style.left = coordinate[1];
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	console.log("Coordinates length " + coordinates.length);
	
	// HOMENAGEM ROBSON		
	iconRobsonElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50683898866_1b1af26ca3_o.png)";
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconRobsonElem.style.top = coordinate[0];
	iconRobsonElem.style.left = coordinate[1];
	
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	console.log("Coordinates length " + coordinates.length);
	
	// LUCAS BAMBOZI 
	iconBamboziElem.style.backgroundImage="url(https://live.staticflickr.com/65535/50688945347_217ea4f1ac_o.png)";
	iconBamboziElem.style.display = "block";
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconBamboziElem.style.top = coordinate[0];
	iconBamboziElem.style.left = coordinate[1];
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	console.log("Coordinates length " + coordinates.length);

	// JARBAS
	iconJarbasElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50689043147_457990333e_o.png)";
	coordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
	iconJarbasElem.style.top = coordinate[0];	
	iconJarbasElem.style.left = coordinate[1];
	index = coordinates.indexOf(coordinate);
	coordinates.splice(index, 1);
	console.log("Coordinates length " + coordinates.length);

	
	// SHOW ALL ELEMENTS
	textoCuratorialElem.style.display = "block";
	agradecimentoElem.style.display = "block";
	colmeiaContainerElem.style.display = "block";
	iconDiasMulheresViraoElem.style.display = "block";
	iconHistoriaElem.style.display = "block";
	iconFumacaAntifascistaElem.style.display = "block";
	iconMonumentificacaoRessiginificadoElem.style.display = "block";
	iconOvoElem.style.display = "block";
	iconPauloBatistaElem.style.display = "block";
	iconAnaueBadaueElem.style.display = "block";
	iconMaricaElem.style.display = "block";
	iconInconstituicaoElem.style.display = "block";
	quemNaoLutaTaMortoElem.style.display = "block";
	quemNaoLutaTaMortoAtrasElem.style.display = "block";
	iconCanalhasElem.style.display = "block";
	iconQuedaLivreElem.style.display = "block";
	iconZapElem.style.display = "block";
	iconMarRioPedraRosaElem.style.display = "block";
	iconVidaElem.style.display = "block";
	iconElenitaElem.style.display = "block";
	iconRobsonElem.style.display = "block";
	iconLaboratorioElem.style.display = "block";
	iconLuteComoElem.style.display = "block";
	iconBamboziElem.style.display = "block";
	iconJarbasElem.style.display = "block";
	aEsquerdaElem.style.display = "block"
	setaEsquerdaElem.style.display = "block";
	izidorioElem.style.display = "block";
	bgElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50610347353_8b85b327d4_o.jpg)";	
}



var indexFumaca = 0;
var fumaca = ["https://live.staticflickr.com/65535/50611734566_9375f12438_o.jpg",
							"https://live.staticflickr.com/65535/50610990028_0c6478558c_o.jpg",
							"https://live.staticflickr.com/65535/50610990023_e3776c4863_o.jpg",
							"https://live.staticflickr.com/65535/50611734516_472b049cdf_o.jpg",
							"https://live.staticflickr.com/65535/50611734506_bf9fe771da_o.jpg",
							"https://live.staticflickr.com/65535/50611734496_13aac1779d_o.jpg",
							"https://live.staticflickr.com/65535/50611734456_96aef60b9e_o.jpg",
							"https://live.staticflickr.com/65535/50611850392_351c4c96e4_o.jpg",
							"https://live.staticflickr.com/65535/50610989868_6631b6f4f4_o.jpg",
							"https://live.staticflickr.com/65535/50610989823_131ac05e76_o.jpg",
							"https://live.staticflickr.com/65535/50611850332_f8ce351cd8_o.jpg",
							"https://live.staticflickr.com/65535/50611734351_bc4031e1d1_o.jpg",
							"https://live.staticflickr.com/65535/50611850267_5663363a0b_o.jpg",
							"https://live.staticflickr.com/65535/50610989743_266b339fbc_o.jpg",
							"https://live.staticflickr.com/65535/50611850222_2b38dcd70e_o.jpg",
							"https://live.staticflickr.com/65535/50611734201_d614ff04a8_o.jpg",
							"https://live.staticflickr.com/65535/50610989693_828bf20214_o.jpg",
							"https://live.staticflickr.com/65535/50610989688_70751884ce_o.jpg",
							"https://live.staticflickr.com/65535/50611734131_b87a96d9be_o.jpg",
							"https://live.staticflickr.com/65535/50611734121_f91735625a_o.jpg",
							"https://live.staticflickr.com/65535/50610989643_8bb50ab2bf_o.jpg",
							"https://live.staticflickr.com/65535/50610989593_3aa06ac66e_o.jpg",
							"https://live.staticflickr.com/65535/50611734066_9088fc0dc2_o.jpg",
							"https://live.staticflickr.com/65535/50610989533_a33e5fc866_o.jpg",
							"https://live.staticflickr.com/65535/50611850022_9ac2e461bd_o.jpg",
							"https://live.staticflickr.com/65535/50610989493_8f7fb2de86_o.jpg",
							"https://live.staticflickr.com/65535/50611733911_d006db1e2b_o.jpg",
							"https://live.staticflickr.com/65535/50610989428_92baac276e_o.jpg",
							"https://live.staticflickr.com/65535/50611733881_ccb1be26d8_o.jpg",
							"https://live.staticflickr.com/65535/50610989368_0ff18a32c7_o.jpg",
							"https://live.staticflickr.com/65535/50611733746_e91c9fbfc4_o.jpg",
							"https://live.staticflickr.com/65535/50611733691_2342ce4dfa_o.jpg",
							"https://live.staticflickr.com/65535/50611733606_02a5e33625_o.jpg",
							"https://live.staticflickr.com/65535/50611733561_475600aeb1_o.jpg",
							"https://live.staticflickr.com/65535/50611733496_de516912c0_o.jpg",
							"https://live.staticflickr.com/65535/50611849562_0830f68f0d_o.jpg",
							"https://live.staticflickr.com/65535/50610989018_c0c0c4c147_o.jpg",
							"https://live.staticflickr.com/65535/50611849417_5a0f917188_o.jpg",
							"https://live.staticflickr.com/65535/50611733246_891abb013d_o.jpg",
							"https://live.staticflickr.com/65535/50610988853_95b924f5e0_o.jpg",
							"https://live.staticflickr.com/65535/50610988818_8d34089b59_o.jpg",
							"https://live.staticflickr.com/65535/50610988783_99fd164159_o.jpg",
							"https://live.staticflickr.com/65535/50610988683_4a96a32450_o.jpg",
							"https://live.staticflickr.com/65535/50611732981_617c8a5eb3_o.jpg"
							];

var inst = setInterval(changeFumaca, 2500);
var shouldShowFumaca= false;

function showFumacaAntiFascista()
{
	clearScreen();
	homeElem.style.display = "block";
	bgElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50461514587_1f1935c8ae_o.jpg)";
	bgElem.style.backgroundColor = "";
	aEsquerdaElem.style.color = "white"
	setaEsquerdaElem.style.color = "white";
	bgElem.style.backgroundSize = "cover";
	bgElem.style.objectFit = "fill";
	bgElem.style.backgroundRepeat = "no-repeat";
	fumacaAntifascistaElem.style.display = "block";
	bgElem.style.top = "-20%";
	bgElem.style.height = "120%";
	shouldShowFumaca = true;
	indexFumaca = 0;
	counter = 0;
}

function changeFumaca() 
{
	if(shouldShowFumaca)
	{
		bgElem.style.backgroundImage = "url("+ fumaca[indexFumaca] + ")";
		indexFumaca++;
	}
	
	if(indexFumaca >= fumaca.length)
	{
		indexFumaca = 0;
	}
}

function showMonumentificacaoDoRessignificado()
{
	clearScreen();
	homeElem.style.display = "block";
	bgElem.style.height = "180%";
	bgElem.style.backgroundImage = "";
	bgElem.style.backgroundImage = "url()";
	bgElem.style.backgroundColor = "white";
	aEsquerdaElem.style.color = "black"
	setaEsquerdaElem.style.color = "black";

	monumentificacaoRessignificados1Elem.src = "https://live.staticflickr.com/65535/50611766112_a6c0973b60_c.jpg";
	monumentificacaoRessignificados2Elem.src = "https://live.staticflickr.com/65535/50611766042_a379448e4f_c.jpg";
	monumentificacaoRessignificados3Elem.src = "https://live.staticflickr.com/65535/50610906138_59590cb25a_c.jpg";
	monumentificacaoRessignificados4Elem.src = "https://live.staticflickr.com/65535/50611766067_20628099fe_c.jpg";	
	
	monumentificacaoTituloElem.style.display = "block";
	monumentificacaoRessignificados1Elem.style.display = "block";
	monumentificacaoRessignificados2Elem.style.display = "block";
	monumentificacaoRessignificados3Elem.style.display = "inline-block";
	monumentificacaoRessignificados4Elem.style.display = "inline";
	monumentificacaoRessignificados5Elem.style.display = "block";
	monumentificacaoRessignificados6Elem.style.display = "inline-block";
	textoDuqueElem.style.display = "block";
	mapaDuqueElem.style.display = "block";
	mapaBorbaElem.style.display = "inline";
	mapaAnhangueraElem.style.display = "inline";
	textoBorbaElem.style.display = "block";
	textoAnhangueraElem.style.display = "block";
	containerMonumentificacaoElem.style.display = "block";
	showHome();
}

function showBambozi()
{
	clearScreen();
	bgElem.style.backgroundColor = "black";
	bgElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50696934876_73835e96c9_k.jpg)";
	bgElem.style.objectFit = "fill";
	bgElem.style.width = "100%";
	bgElem.style.top = "-20%";
	bgElem.style.height = "120%";
	aEsquerdaElem.style.color = "white";
	setaEsquerdaElem.style.color = "white";
	portasAbertasElem.style.display = "block";
	showHome();
	window.scrollTo(0, 0); 
}

function showJarbas() 
{
	clearScreen();
	bgElem.style.backgroundColor = "white";
	aEsquerdaElem.style.color = "red";
	setaEsquerdaElem.style.color = "red";
	
  gifJarbasElem.style.display = "block";
	politicaDividida.style.display = "block";

	showHome();
}

function showMarRioPedraRosa() 
{
	clearScreen();
	homeElem.style.display = "block";
	bgElem.style.backgroundColor = "black";
	aEsquerdaElem.style.color = "white";
	setaEsquerdaElem.style.color = "white";
	bgElem.style.top = "0%";
	bgElem.style.left = "0%";
	bgElem.style.width = "100%";
	bgElem.style.height = "100vmax";
	marElem.style.display = "block";
	rioElem.style.display = "block";
	pedraElem.style.display = "block";
	rosaElem.style.display = "block";
	marRioPedraRosaGifElem.style.display = "block";
	marRioPedraRosaElem.style.display = "block";
	contornosConscientesElem.style.display = "block";
	videoMaricaElem.style.display = "block";
	estrela1Elem.style.display = "block";
	estrela2Elem.style.display = "block";
	estrela3Elem.style.display = "block";
	counter = 0;
}

var luteComoBranco = ["https://live.staticflickr.com/65535/50673404528_b229a4a98f_o.jpg", //1
										 	"https://live.staticflickr.com/65535/50673404463_eeed2ea254_o.jpg", //2
										 	"https://live.staticflickr.com/65535/50673404378_b02dcc1ba8_o.jpg", //3
										 	"https://live.staticflickr.com/65535/50674149001_ede98dde05_o.jpg", //4
										 	"https://live.staticflickr.com/65535/50673404198_f2bbb24664_o.jpg", //5
										 	"https://live.staticflickr.com/65535/50674232847_f89fd879cb_o.jpg", //6
										 	"https://live.staticflickr.com/65535/50673404043_be7cd72e84_o.jpg", //7
										 	"https://live.staticflickr.com/65535/50673403948_29379a010b_o.png", //8
										 	"https://live.staticflickr.com/65535/50674232622_08066bbb5c_o.png", //9
										 	"https://live.staticflickr.com/65535/50673403893_bcbc261ab7_o.png", //10
										 	"https://live.staticflickr.com/65535/50673403848_d9c362762d_o.png", //11
										 	"https://live.staticflickr.com/65535/50674232502_025f9c1c79_o.png", //12
										 	"https://live.staticflickr.com/65535/50674148541_75986ba813_o.png", //13
										 	"https://live.staticflickr.com/65535/50674232462_f85b7bb446_o.png", //14
										 	"https://live.staticflickr.com/65535/50673403743_518a772200_o.png", //15
										 	"https://live.staticflickr.com/65535/50673403723_0334e3116e_o.png", //16
										 	"https://live.staticflickr.com/65535/50674232362_093a303602_o.jpg", //17 
										 	"https://live.staticflickr.com/65535/50673403583_5ec4720567_o.png"];//18




var luteComoAmarelo = ["https://live.staticflickr.com/65535/50622337181_dfa951d921_o.png",//5
											 "https://live.staticflickr.com/65535/50621596443_af36fef720_o.png",//6
											 "https://live.staticflickr.com/65535/50622441832_e954b0e813_o.png",//8
											 "https://live.staticflickr.com/65535/50622441762_46f5004ed5_o.png",//9
											 "https://live.staticflickr.com/65535/50621596303_ee31ca571e_o.png",//10
											 "https://live.staticflickr.com/65535/50622336996_c86218d9a7_o.png",//11
											 "https://live.staticflickr.com/65535/50622441677_47c4e77649_o.png",//12
											 "https://live.staticflickr.com/65535/50622336946_2a9aa2d773_o.png",//12b
											 "https://live.staticflickr.com/65535/50622336866_ce648c167c_o.png",//13
											 "https://live.staticflickr.com/65535/50621596083_3be72d7ae5_o.png",//14
											 "https://live.staticflickr.com/65535/50622441532_57ed09610f_o.png",//15
											 "https://live.staticflickr.com/65535/50622336811_acdf959e13_o.png",//16
											 "https://live.staticflickr.com/65535/50622441462_3c2a9f0f5a_c.jpg",//17
											 "https://live.staticflickr.com/65535/50621595993_48074a9ed7_c.jpg",//18
											 "https://live.staticflickr.com/65535/50621595943_37721e5ca1_c.jpg",//19
											 "https://live.staticflickr.com/65535/50622336681_a7aa9a2b0e_c.jpg",//20
											 "https://live.staticflickr.com/65535/50622441322_09c916303c_c.jpg",//21
											 "https://live.staticflickr.com/65535/50621595823_320410562e_c.jpg",//22
											 "https://live.staticflickr.com/65535/50621595808_a7faf42f07_c.jpg",//23
											 "https://live.staticflickr.com/65535/50621595773_01e4f94fb7_c.jpg",//24
											 "https://live.staticflickr.com/65535/50622336471_8ab2349977_c.jpg"];//25

var luteComoRosa = ["https://live.staticflickr.com/65535/50622434527_5d30db53ac_c.jpg", // abre 1
										"https://live.staticflickr.com/65535/50622434512_27a63c8342_c.jpg", // abre 6
										"https://live.staticflickr.com/65535/50622329806_04d7fb165e_c.jpg", // abre 9
										"https://live.staticflickr.com/65535/50622434452_94a89e3bc5_c.jpg", // convite exposição
										"https://live.staticflickr.com/65535/50621588893_dbb7db17ed_c.jpg", // finalização 1
										"https://live.staticflickr.com/65535/50622329721_0c10991453_c.jpg", // finalizacap 2
										"https://live.staticflickr.com/65535/50621588868_78c8928d76_c.jpg", // finalizacao 3
										"https://live.staticflickr.com/65535/50622434392_f3be196f5d_c.jpg", // finalizacao 4
										"https://live.staticflickr.com/65535/50621588818_266040a099_c.jpg", // finalizacao 5
										"https://live.staticflickr.com/65535/50622329666_857f975ed0_c.jpg", // finalizacao 6
 										"https://live.staticflickr.com/65535/50622329626_1705749fac_c.jpg", // finalização 7
										"https://live.staticflickr.com/65535/50621588788_5ff1b4ae9c_c.jpg", // finalização 8
										"https://live.staticflickr.com/65535/50621588763_2ff9e4eb85_c.jpg", // finalizacao 9
										"https://live.staticflickr.com/65535/50622329526_037af3b7be_c.jpg", // finalizacao 10
										"https://live.staticflickr.com/65535/50622434237_16746fbe2c_c.jpg", // finalizacao 11
										"https://live.staticflickr.com/65535/50622434187_9ff2363e69_c.jpg", // finalizacao 12
										"https://live.staticflickr.com/65535/50621588673_e5c30e4acd_c.jpg", // finalizacao 13
										"https://live.staticflickr.com/65535/50621588638_2710ec2194_c.jpg", // finalizacao 14
										"https://live.staticflickr.com/65535/50621588618_26b4302401_c.jpg", // finalizacao 15
										"https://live.staticflickr.com/65535/50621588583_fcc544b1fc_c.jpg", // finalizacao 16
										"https://live.staticflickr.com/65535/50622434082_abf9a20c73_c.jpg"]; // finalizacao 17

var luteComoVerde = ["https://live.staticflickr.com/65535/50622333986_87c810e88f_c.jpg", //1
										 "https://live.staticflickr.com/65535/50621593263_17015479f8_c.jpg", //2
										 "https://live.staticflickr.com/65535/50622438627_19e459e249_c.jpg", //3
										 "https://live.staticflickr.com/65535/50621593183_0e7323a098_c.jpg", //4
										 "https://live.staticflickr.com/65535/50622333831_0ae609e761_c.jpg", //6b
										 "https://live.staticflickr.com/65535/50622333776_2c322ac65a_c.jpg", //6c
										 "https://live.staticflickr.com/65535/50621593053_072def37d9_c.jpg", //7
										 "https://live.staticflickr.com/65535/50621593018_29530715a9_c.jpg", //finais1
										 "https://live.staticflickr.com/65535/50621592958_d217b1d3f9_c.jpg", //finais2
										 "https://live.staticflickr.com/65535/50622333601_6184a48f8c_c.jpg", //finais4
										 "https://live.staticflickr.com/65535/50622333571_a70873274c_c.jpg", //finais5
										 "https://live.staticflickr.com/65535/50621592903_0bf73f1b36_c.jpg", //finais6
										 "https://live.staticflickr.com/65535/50621592858_258dfb9a68_c.jpg", //finais6b
										 "https://live.staticflickr.com/65535/50622438142_ff4a3f7903_c.jpg", //finais7
										 "https://live.staticflickr.com/65535/50622438107_392eb183a9_c.jpg", //finais8
										 "https://live.staticflickr.com/65535/50622333401_4c8669fe60_c.jpg", //finais10
										 "https://live.staticflickr.com/65535/50622437992_69a082fdaf_c.jpg", //finais11
										 "https://live.staticflickr.com/65535/50622437902_035260dc20_c.jpg", //finais12
										 "https://live.staticflickr.com/65535/50622333196_8b2bb0b125_c.jpg"];//finais13
										 


var luteComoAzul = ["https://live.staticflickr.com/65535/50622445627_bf693d348f_c.jpg", //2
										"https://live.staticflickr.com/65535/50621600358_12b4fabac4_c.jpg", //3
										"https://live.staticflickr.com/65535/50622445562_ec20d3e72e_c.jpg", //4
										"https://live.staticflickr.com/65535/50621600293_5810ec18e4_c.jpg", //5
										"https://live.staticflickr.com/65535/50622341011_8fa02bfdea_c.jpg", //6
										"https://live.staticflickr.com/65535/50622445417_a2fa55c33a_c.jpg", //7
										"https://live.staticflickr.com/65535/50622340966_bfc77f38a2_c.jpg", //8
										"https://live.staticflickr.com/65535/50622340941_9804078aef_c.jpg", //13
										"https://live.staticflickr.com/65535/50622445332_a98e2ac4cc_c.jpg", //14
										"https://live.staticflickr.com/65535/50621600053_68be2b93fa_c.jpg", //15
										"https://live.staticflickr.com/65535/50621600038_6257f13005_c.jpg", //16
										"https://live.staticflickr.com/65535/50621600033_8e9b80d0aa_c.jpg", //17
										"https://live.staticflickr.com/65535/50622340821_a849f95ce2_c.jpg", //19
										"https://live.staticflickr.com/65535/50621599973_136d375f68_c.jpg", //20
										"https://live.staticflickr.com/65535/50621599948_0db0fa1220_c.jpg", //21
										"https://live.staticflickr.com/65535/50621599928_ca43e46ddd_c.jpg", //22
										"https://live.staticflickr.com/65535/50621599893_c23e55f187_c.jpg", //23
										"https://live.staticflickr.com/65535/50622340706_8090635be7_c.jpg", //24
										"https://live.staticflickr.com/65535/50621599843_bee1ca5be6_c.jpg", //25
										"https://live.staticflickr.com/65535/50621599838_92baf0dc26_c.jpg", //26
										"https://live.staticflickr.com/65535/50622340681_449ba451cf_c.jpg", //27
										"https://live.staticflickr.com/65535/50622340631_d2f20d19cf_c.jpg", //28
										"https://live.staticflickr.com/65535/50622445012_22fa26c730_c.jpg", //29
										"https://live.staticflickr.com/65535/50622340486_6f262ea569_c.jpg", //30
										"https://live.staticflickr.com/65535/50622340461_bfe0d270fc_c.jpg", //31
										"https://live.staticflickr.com/65535/50622444942_31aeedecaf_c.jpg", //32
										"https://live.staticflickr.com/65535/50622340366_e70ec73e06_c.jpg", //33
										"https://live.staticflickr.com/65535/50622444852_25d71d3a54_c.jpg", //34
										"https://live.staticflickr.com/65535/50622340336_52a5803f6d_c.jpg", //35
										"https://live.staticflickr.com/65535/50622340296_ba61290655_c.jpg"]; //36
										
function showVendeSe()
{
	clearScreen();
	bgElem.style.backgroundImage = "url()";
	bgElem.style.backgroundColor = "white";
	aEsquerdaElem.style.color = "#ce252c"
	setaEsquerdaElem.style.color = "#ce252c";
	
	vendeSeElem.style.display = "block";
	autoriaElem.style.display = "block";
	propriedadeElem.style.display = "block";
	moradiaElem.style.display = "block";
	showHome();
	counter = 0;
}



function showOvo()
{
	clearScreen();
	bgElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50681536672_b7d9186d73_o.png)";
	bgElem.style.backgroundColor = "red";
	aEsquerdaElem.style.color = "white"
	setaEsquerdaElem.style.color = "white";
	
	soundOvo1Elem.style.display = "block";
	soundOvo2Elem.style.display = "block";
	soundOvo3Elem.style.display = "block";
	soundOvo4Elem.style.display = "block";
	videoOvoElem.style.display = "block";
	bgElem.style.backgroundSize = "cover";
	bgElem.style.backgroundRepeat = "no-repeat";
	showHome();
	counter = 0;
}

var isCanalhas = false;

function showCanalhas ()
{
	clearScreen();
	showHome();
	bgElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50665909821_ef30cd3ef3.jpg)";
	bgElem.style.backgroundColor = "";
	bgElem.style.backgroundRepeat = "repeat";
	bgElem.style.backgroundSize = "auto";
	bgElem.style.height = "500%";
	bgElem.style.width = "500%";
	bgElem.scrollLeft = "500%";
	aEsquerdaElem.style.color = "white"
	setaEsquerdaElem.style.color = "white";
	setaEsquerdaElem.style.position = "fixed";
	isCanalhas = true;
	counter = 0;
}

function onScrollCanalhas()
{
	if(isCanalhas)
	{
		var height = 1.01*parseInt(bgElem.style.height.slice(0, -1));
		if(height < Number.MAX_VALUE)
		{
				bgElem.style.height = height + "%";
		}
		
		var width = 1.01*parseInt(bgElem.style.width.slice(0, -1));
		if(width < Number.MAX_VALUE)
		{
				bgElem.style.width = width + "%";
				bgElem.scrollLeft = width + "%";
		}
	}
}

var indexDiasMulheresVirao = 0;
var shouldShowDiasMulheresVirao = false;
var inst = setInterval(changeDiasMulheresVirao, 700);

function showDiasMulheresVirao()
{
	clearScreen();
	shouldShowDiasMulheresVirao = true;
	bgElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50677874092_52cda42b09_o.jpg)";
	bgElem.style.height = "300%";
	bgElem.style.backgroundColor = "red";
	aEsquerdaElem.style.color = "white"
	setaEsquerdaElem.style.color = "white";
	diasMulheresViraoElem.style.display = "block";
	showHome();
	counter = 0;
}

function changeDiasMulheresVirao()
{

	if(window.innerWidth > window.innerHeight)
	{
		mulheres = "MULHERES";
	}
	else
	{
		mulheres = "MU\nLHE\nRES";
	}	
	 
	var diasMulheresVirao = ["DIAS", mulheres, "VIRÃO"]

	if(shouldShowDiasMulheresVirao)
	{
		diasMulheresViraoElem.innerHTML = diasMulheresVirao [indexDiasMulheresVirao];
		indexDiasMulheresVirao++;
	}

	if(indexDiasMulheresVirao >= diasMulheresVirao.length)
	{
		indexDiasMulheresVirao = 0;
	}
	
}


function showCover()
{
	shouldShowLuteComo = false;
	shouldShowAnaueBadaue = false;
	shouldShowDiasMulheresVirao = false;
	clearScreen();

	
	bgElem.style.backgroundColor = "black";
	bgElem.style.backgroundSize = "cover";
	bgElem.style.backgroundRepeat = "no-repeat";
	muroElem.style.display = "block";
	audioMuroElem.style.display = "block";
	textoCuratorialElem.style.display = "block";
	agradecimentoElem.style.display = "block";
	aEsquerdaElem.style.display = "none"
	setaEsquerdaElem.style.display = "none";
	bgElem.style.backgroundColor = "black";
	bgElem.style.width = "100%";
	bgElem.style.height = "100%";
	bgElem.style.top = "0%";
}



function showHistoria()
{
	clearScreen();
	bgElem.style.backgroundImage = "url()";
	bgElem.style.backgroundColor = "white";
	aEsquerdaElem.style.color = "black";
	setaEsquerdaElem.style.color = "black";
	
	videoHistoriaElem.style.display = "block";
	videoHistoria2Elem.style.display = "block";
	mtscElem.style.display = "block";
	video360Elem.style.display = "block";
	aparelhamentoElem.style.display = "block";
	videoReocupaElem.style.display = "block";
	videoOcupacaoElem.style.display = "block";
	floresta1Elem.style.display = "block";
	floresta2Elem.style.display = "block";
	floresta3Elem.style.display = "block";
	floresta4Elem.style.display = "block";
	floresta5Elem.style.display = "block";
	floresta6Elem.style.display = "block";
	floresta7Elem.style.display = "block";
	floresta8Elem.style.display = "block";
	floresta9Elem.style.display = "block";
	floresta10Elem.style.display = "block";
	floresta11Elem.style.display = "block";
	floresta12Elem.style.display = "block";
	floresta13Elem.style.display = "block";
	floresta14Elem.style.display = "block";
	floresta15Elem.style.display = "block";
	floresta16Elem.style.display = "block";
	floresta17Elem.style.display = "block";
	floresta18Elem.style.display = "block";
	floresta19Elem.style.display = "block";
	floresta20Elem.style.display = "block";
	floresta21Elem.style.display = "block";
	floresta22Elem.style.display = "block";
	floresta23Elem.style.display = "block";
	floresta24Elem.style.display = "block";
	floresta25Elem.style.display = "block";
	tourElem.style.display = "block";
	luteComoElem.style.display = "block";
	tituloFlorestaElem.style.display = "block";
	bgElem.style.top = "0%";
	bgElem.style.left = "0%";
	bgElem.style.width = "100%";
	bgElem.style.height = "480vmax";
	bgElem.style.backgroundSize = "cover";
	bgElem.style.backgroundRepeat = "no-repeat";
	bgElem.style.width = "100%";
	showHome();
	counter = 0;
}

function showLuteComo()
{
	clearScreen();
	bgElem.style.height = "210vmax";
	bgElem.style.width = "100%";
	bgElem.style.backgroundImage = "url()";
	bgElem.style.backgroundColor = "black";
	aEsquerdaElem.style.color = "black";
	setaEsquerdaElem.style.color = "black";
	pele1Elem.style.display = "block";
	pele2Elem.style.display = "block";
	vadeRetroElem.style.display = "block";
	divAmarelaElem.style.display = "block";
	divAzulElem.style.display = "block";
	perspectivaElem.style.display = "block";
	selecaoElem.style.display = "block";
	tiroElem.style.display = "block";
	//containerCopa70Elem.style.display = "block";
	showHome();
	counter = 0;
}

var indexBadaue = 0;
var inst = setInterval(changeAnaueBadaue, 700);
var shouldShowAnaueBadaue = false;

function showAnaueBadaue()
{
	clearScreen();
	homeElem.style.display = "block";
	bgElem.style.backgroundImage = "url()";
	audioAnaueBadaueElem.style.display = "block";
	anaueBadaueElem.src = "https://live.staticflickr.com/65535/50453279563_1bfd42ebdd_o.jpg";
	bgElem.style.backgroundColor = "#e80000";
 	aEsquerdaElem.style.color = "white";
	setaEsquerdaElem.style.color = "white";
	showHome();
	counter = 0;
	shouldShowAnaueBadaue = true;
	window.scrollTo(0, 0); 
}

function changeAnaueBadaue()
{

  if(shouldShowAnaueBadaue)
  {
  	if(indexBadaue % 2 == 0)
  	{
			anaueBadaueElem.style.display = "block";

  	}
  	else
  	{
			anaueBadaueElem.style.display = "none";
  	}
    indexBadaue++;
  }
}


function showInconstituicao()
{
	clearScreen();
	bgElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50679647838_46c1562466_o.jpg)";
	bgElem.style.position = "fixed";
 	aEsquerdaElem.style.color = "#f3e218";
	setaEsquerdaElem.style.color = "#f3e218";
	inconstituicaoElem.style.display = "block";
	abiJuramentoElem.style.display = "block";
	showHome();
	counter = 0;
}



function showQuedaLivre()
{
	clearScreen();
	bgElem.style.backgroundImage = "url()";
	bgElem.style.height = "160vmax";
	bgElem.style.backgroundColor = "black";
 	aEsquerdaElem.style.color = "white";
	setaEsquerdaElem.style.color = "white";
	quedaLivreElem.style.display = "block";
	gritoElem.style.display = "block";
	tripticoElem.style.display = "block";
	showHome();
	counter = 0;
}

function showLaboratorio()
{
	clearScreen();
	bgElem.style.backgroundImage = "url()";
	bgElem.style.backgroundColor = "white";
 	aEsquerdaElem.style.color = "red";
	setaEsquerdaElem.style.color = "red";
	textoLaboratorioElem.style.display = "block";
	tituloTextoLaboratorioElem.style.display = "block";
	showHome();

}

function showRobson() 
{
	clearScreen();
	bgElem.style.backgroundImage = "url()";
	bgElem.style.backgroundColor = "black";
	bgElem.style.height = "360vmax";
 	aEsquerdaElem.style.color = "red";
	setaEsquerdaElem.style.color = "red";
	robsonElem.style.display = "block";
	robsonGifElem.style.display = "block";
	robsonTextoElem.style.display = "block";
	robsonPingPongElem.style.display = "block";
	robsonSetaElem.style.display = "block";
	marcelod2Elem.style.display = "block";
	robsonImagemElem.style.display = "block";
	showHome();
	window.scrollTo(0, screen.height*0.55); 
}

function showElenita()
{
	clearScreen();
	bgElem.style.backgroundImage = "url()";
	bgElem.style.backgroundColor = "black";
	bgElem.style.height = "400%";
 	aEsquerdaElem.style.color = "white";
	setaEsquerdaElem.style.color = "white";
	elenitaElem.style.display = "block";
	elenitaTituloElem.style.display = "block";
	elenitaVideoElem.style.display = "block";
	elenitaImg1Elem.style.display = "block";
	elenitaImg2Elem.style.display = "block";
	elenitaImg3Elem.style.display = "block";
	elenitaImg4Elem.style.display = "block";
	elenitaImg5Elem.style.display = "block";
	elenitaImg6Elem.style.display = "block";
	elenitaImg7Elem.style.display = "block";
	elenitaImg8Elem.style.display = "block";	
	elenitaImg9Elem.style.display = "block";
	elenitaImg10Elem.style.display = "block";
	elenitaImg11Elem.style.display = "block";
	elenitaImg12Elem.style.display = "block";
	elenitaImg13Elem.style.display = "block";
	elenitaImg14Elem.style.display = "block";
	elenitaImg15Elem.style.display = "block";
	elenitaImg16Elem.style.display = "block";	
	elenitaImg17Elem.style.display = "block";
	elenitaImg18Elem.style.display = "block";	
	showHome();
	counter = 0;
}

function showZap()
{
	clearScreen();
	aEsquerdaElem.style.color = "red";
	setaEsquerdaElem.style.color = "red";
	bgElem.style.backgroundColor = "white";

	zapButtonElem.style.display = "block";
	zapElem.style.display = "block";
	tituloZapElem.style.display = "block";
	showHome();
	counter = 0;
}

function showVida()
{
	clearScreen();
	aEsquerdaElem.style.color = "#009c4b";
	setaEsquerdaElem.style.color = "#009c4b";
	bgElem.style.height = "150%";
	bgElem.style.width = "150%";
	/*vidaBgElem.style.height = "100%";
	vidaBgElem.style.width = "100%";*/
	bgElem.style.backgroundImage = "url()";
	bgElem.style.display = "none";
	bgElem.style.cursor = "url(https://lh3.googleusercontent.com/proxy/W5N6YRbiMVPKLM_2FBhXV4vXlyK8p-kiOoePXZP7oHU9gSw20qY8Q4qSHAKooOxYNdAUoef7ZrotSrqqy5KAa7nvyQj8nVoEheCVB99xLYmo240Plalj0denc7Un87c)"
	vidaBgElem.style.display = "block";
	showHome();
	counter = 0;
}

var tirinhas = [ "https://live.staticflickr.com/65535/50687552367_a7889aaccd_o.jpg",
								 "https://live.staticflickr.com/65535/50687552037_92c520a1b6_o.jpg",
								 "https://live.staticflickr.com/65535/50686717853_751ba46ae0_o.jpg",
								 "https://live.staticflickr.com/65535/50686717153_04874cf11c_o.jpg",
								 "https://live.staticflickr.com/65535/50687468046_342cb8d1a3_o.jpg",
								 "https://live.staticflickr.com/65535/50687467661_9897548f9d_o.jpg",
								 "https://live.staticflickr.com/65535/50687467096_edaa7eff0e_o.jpg",
								 "https://live.staticflickr.com/65535/50687548917_99a4e69dd2_o.jpg",
								 "https://live.staticflickr.com/65535/50687548452_a52f721e60_o.jpg",
								 "https://live.staticflickr.com/65535/50686713728_5423637dc7_o.jpg",
								 "https://live.staticflickr.com/65535/50686712883_1231f6d5a9_o.jpg",
								 "https://live.staticflickr.com/65535/50687463666_02260ce418_o.jpg",
								 "https://live.staticflickr.com/65535/50686711743_0684e13393_o.jpg",
								 "https://live.staticflickr.com/65535/50687462566_6d7eece337_o.jpg"
							];

var indexQuadrinho = 0;

function showPauloBatista()
{
	clearScreen();

	bgElem.style.backgroundImage = "url()";
	bgElem.style.backgroundColor = "white";
	aEsquerdaElem.style.color = "black";
	setaEsquerdaElem.style.color = "black";

	pauloBatistaElem.style.display = "block";
	pauloSetaElem.style.display = "block";
	showHome();
}

function showHome()
{
	homeElem.style.display = "block";
	homeElem.style.backgroundImage = "url(https://live.staticflickr.com/65535/50674246911_2a400ae824_b.jpg)";
	homeElem.style.width = "12vmax";
	homeElem.style.zIndex = "99";
	homeElem.style.height = "6vmax";
		homeElem.style.left = "91vmax";
}

function getImagePath(response) {
	var regexImagePath = new RegExp("<meta property=\"og:image\" content=\"")
	var auxImagePath = response.split(regexImagePath)
	var indexImage = auxImagePath[1].indexOf("\"")
	imagePath = auxImagePath[1].substr(0, indexImage)
}

function getShortcode(response) {

	var regexTimestamp = new RegExp("taken_at_timestamp");
	var auxTimestamp = response.split(regexTimestamp);

	auxTimestamp.forEach(getTimestampArray);

	var regexShortcode = new RegExp("shortcode");
	var auxShortcode = response.split(regexShortcode);
	
	auxShortcode.forEach(getShortcodeArray);

	var index = 0;
	var firstTimestamp = timestampArray[0];

	for(var i=0; i<timestampArray.length; i++)
	{
		if(parseInt(timestampArray[i]) > parseInt(firstTimestamp))
		{
			firstTimestamp = timestampArray[i];
			index = i;
		}
	}

	shortcode = shortcodeArray[index];
	var utcSeconds = parseInt(timestampArray[index]);
	var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
	d.setUTCSeconds(utcSeconds);
	timestamp = d;	
}

function getShortcodeArray(item, index){
	if(index != 0)
	{
		shortcodeArray.push(item.substr(3, 11))
	}
}

function getTimestampArray(item, index){
	if(index != 0)
	{
		timestampArray.push(item.substr(2, 10))
	}
}




function getQuadrinhos()
{
		var settings1 = {
		"url": "https://www.instagram.com/chargepedrosaexpo/",
		"method": "GET",
		"timeout": 0,
		"headers": {
			"Cookie": "ig_did=DCE6E889-1EFA-4381-BB3C-618FFC825E1F; csrftoken=VkPCXuKkHDPKVi3WlEcVsvABPKhTokU5; mid=XsxzSQAEAAHVw7pJR9twN9cf49yo; urlgen=\"{\\\"177.194.17.94\\\": 28573}:1kRSo8:8GFcA0zLCLGUNkjDEdMTFve_itQ\""
		},
	};

	$.ajax(settings1).done(function (response) {		
		// GET SHORTCODE
		console.log("Response: " + response);
		getShortcode(response)
		console.log("Shortcode: " + shortcode)
		var settings2 = {
			"url": "https://www.instagram.com/p/"+ shortcode +"/",
			"method": "GET",
			"timeout": 0,
			"headers": {
			"Cookie": "ig_did=DCE6E889-1EFA-4381-BB3C-618FFC825E1F; csrftoken=VkPCXuKkHDPKVi3WlEcVsvABPKhTokU5; mid=XsxzSQAEAAHVw7pJR9twN9cf49yo; urlgen=\"{\\\"177.194.17.94\\\": 28573}:1kRSo8:8GFcA0zLCLGUNkjDEdMTFve_itQ\""
			},
		};
		$.ajax(settings2).done(function(response) {
			getImagePath(response)
			if(counter == 1)
			{
					iconPauloBatistaElem.style.backgroundImage = "url(" + imagePath + ")";	
					iconPauloBatistaElem.innerHTML = "";
			}
		});
	});

}

function clearScreen()
{
	cleanVida();
	
	var blockStr = "block";
	if(blockStr.localeCompare(abiJuramentoElem.style.display) == 0)
	{
		videoStopper("abi_container");
	}
	
	if(blockStr.localeCompare(vadeRetroElem.style.display) == 0)
	{
		videoStopper("vade_retro_container");
	}
	
	if(blockStr.localeCompare(elenitaVideoElem.style.display) == 0)
	{
		videoStopper("elenita_container");
	}
	
	if(blockStr.localeCompare(soundOvo3Elem.style.display) == 0)
	{
		videoStopper("sound_ovo4");
	}
	
	if(blockStr.localeCompare(soundOvo3Elem.style.display) == 0)
	{
		videoStopper("sound_ovo3");
	}
	
	if(blockStr.localeCompare(soundOvo2Elem.style.display) == 0)
	{
		videoStopper("sound_ovo2");
	}
	
	if(blockStr.localeCompare(soundOvo1Elem.style.display) == 0)
	{
		videoStopper("sound_ovo1");
	}
	
	if(blockStr.localeCompare(videoMaricaElem.style.display) == 0)
	{
		videoStopper("marica_container");
	}
	
	if(blockStr.localeCompare(tripticoElem.style.display) == 0)
	{
		videoStopper("triptico_container");
	}
	
	if(blockStr.localeCompare(quedaLivreElem.style.display) == 0)
	{
		videoStopper("queda_livre_container");
	}
	
	if(blockStr.localeCompare(gritoElem.style.display) == 0)
	{
		videoStopper("grito_container");
	}
	
	if(blockStr.localeCompare(videoOvoElem.style.display) == 0)
	{
		videoStopper("ovo_container");
	}
	
	
	if(blockStr.localeCompare(videoReocupaElem.style.display) == 0)
	{
		videoStopper("reocupa_container");
	}
	
	
	if(blockStr.localeCompare(video360Elem.style.display) == 0)
	{
		videoStopper("360_container");
	}
	
	
	if(blockStr.localeCompare(videoOcupacaoElem.style.display) == 0)
	{
		videoStopper("ocupacao_container");
	}
	
	
	if(blockStr.localeCompare(videoHistoriaElem.style.display) == 0)
	{
		videoStopper("historia_container");
	}
	
	
	if(blockStr.localeCompare(rosaElem.style.display) == 0)
	{
		videoStopper("rosa");
	}
	
	
	if(blockStr.localeCompare(pedraElem.style.display) == 0)
	{
		videoStopper("pedra");
	}
	
	
	if(blockStr.localeCompare(rioElem.style.display) == 0)
	{
		videoStopper("rio");
	}
	
	
	if(blockStr.localeCompare(marElem.style.display) == 0)
	{
		videoStopper("mar");
	}
	
	
	if(blockStr.localeCompare(marRioPedraRosaElem.style.display) == 0)
	{	
		videoStopper("mar_rio_pedra_rosa");
	}
	
	
	if(blockStr.localeCompare(marcelod2Elem.style.display) == 0)
	{
		videoStopper("marcelod2_container");
	}
	
	
	videoStopper("anaue_badaue_container");
	
	
	if(blockStr.localeCompare(portasAbertasElem.style.display) == 0)
	{
		videoStopper("container_portas_abertas");
	}
	
	
	if(blockStr.localeCompare(tiroElem.style.display) == 0)
	{
		videoStopper("container_tiro");
	}
	
	
	if(blockStr.localeCompare(aparelhamentoElem.style.display) == 0)
	{
		videoStopper("container_aparelhamento");
	}
	
	
	if(blockStr.localeCompare(robsonPingPongElem.style.display) == 0)
	{
		videoStopper("container_ping_pong");
	}
	
	
	if(blockStr.localeCompare(robsonGifElem.style.display) == 0)
	{
		videoStopper("container_robson");
	}
	
	
	if(blockStr.localeCompare(luteComoElem.style.display) == 0)
	{
		videoStopper("lute_como_audio");
	}
	
	
	
	videoStopper("muro_container");
	
	
	
	shouldShowLuteComo = false;
	shouldShowAnaueBadaue = false;
	shouldShowDiasMulheresVirao = false;
	bgElem.style.position = "relative";
	bgElem.style.backgroundImage = "";
	bgElem.style.backgroundRepeat = "no-repeat";
	bgElem.style.top = "0%";
	bgElem.style.left = "0%";
	bgElem.style.height = "100%";
	bgElem.style.width = "100%";
	bgElem.style.left = "0";
	bgElem.style.cursor = "default";
	bgElem.style.display = "block";
	muroElem.style.display = "none";
	agradecimentoElem.style.display = "none";
	colmeiaContainerElem.style.display = "none";
	audioMuroElem.style.display = "none";
	bgElem.innerHTML = "";
	isCanalhas = false;
	shouldShowFumaca = false;	
	homeElem.style.display = "none";
	soundOvo1Elem.style.display = "none";
	soundOvo2Elem.style.display = "none";
	soundOvo3Elem.style.display = "none";
	soundOvo4Elem.style.display = "none";
	videoOvoElem.style.display = "none";
	quemNaoLutaTaMortoElem.style.display = "none";
	quemNaoLutaTaMortoAtrasElem.style.display = "none";
	pauloBatistaElem.style.display = "none";
	pauloSetaElem.style.display = "none";
	anaueBadaueElem.style.display = "none";
	audioAnaueBadaueElem.style.display = "none";
	videoHistoriaElem.style.display = "none";
	videoHistoria2Elem.style.display = "none";
	mtscElem.style.display = "none";
	tituloFlorestaElem.style.display = "none";
	video360Elem.style.display = "none";
	floresta1Elem.style.display = "none";
	floresta2Elem.style.display = "none";
	floresta3Elem.style.display = "none";
	floresta4Elem.style.display = "none";
	floresta5Elem.style.display = "none";
	floresta6Elem.style.display = "none";
	floresta7Elem.style.display = "none";
	floresta8Elem.style.display = "none";
	floresta9Elem.style.display = "none";
	floresta10Elem.style.display = "none";
	floresta11Elem.style.display = "none";
	floresta12Elem.style.display = "none";
	floresta13Elem.style.display = "none";
	floresta14Elem.style.display = "none";
	floresta15Elem.style.display = "none";
	floresta16Elem.style.display = "none";
	floresta17Elem.style.display = "none";
	floresta18Elem.style.display = "none";
	floresta19Elem.style.display = "none";
	floresta20Elem.style.display = "none";
	floresta21Elem.style.display = "none";
	floresta22Elem.style.display = "none";
	floresta23Elem.style.display = "none";
	floresta24Elem.style.display = "none";
	floresta25Elem.style.display = "none";
	tourElem.style.display = "none";
	luteComoElem.style.display = "none";
	aparelhamentoElem.style.display = "none";
	videoReocupaElem.style.display = "none";
	videoOcupacaoElem.style.display = "none";
	diasMulheresViraoElem.style.display = "none";
	monumentificacaoRessignificados1Elem.style.display = "none";
	monumentificacaoRessignificados2Elem.style.display = "none";
	monumentificacaoRessignificados3Elem.style.display = "none";
	monumentificacaoRessignificados4Elem.style.display = "none";
	monumentificacaoRessignificados5Elem.style.display = "none";
	monumentificacaoRessignificados6Elem.style.display = "none";
	monumentificacaoTituloElem.style.display = "none";
	containerMonumentificacaoElem.style.display = "none";
	textoDuqueElem.style.display = "none";
	mapaDuqueElem.style.display = "none";
	textoBorbaElem.style.display = "none";
	textoAnhangueraElem.style.display = "none";
	mapaBorbaElem.style.display = "none";
	mapaAnhangueraElem.style.display = "none";
	fumacaAntifascistaElem.style.display = "none";
	inconstituicaoElem.style.display = "none";
	abiJuramentoElem.style.display = "none";
	perspectivaElem.style.display = "none";
	vadeRetroElem.style.display = "none";
	divAmarelaElem.style.display = "none";
	divAzulElem.style.display = "none";
	selecaoElem.style.display = "none";
	tiroElem.style.display = "none";
	pele1Elem.style.display = "none";
	pele2Elem.style.display = "none";
	quedaLivreElem.style.display = "none";
	gritoElem.style.display = "none";
	tripticoElem.style.display = "none";
	tituloZapElem.style.display = "none";
	zapElem.style.display = "none";
	zapButtonElem.style.display = "none";
	contornosConscientesElem.style.display = "none";
	marRioPedraRosaGifElem.style.display = "none";
	marRioPedraRosaElem.style.display = "none";
	marElem.style.display = "none";
	rioElem.style.display = "none";
	pedraElem.style.display = "none";
	rosaElem.style.display = "none";
	vidaBgElem.style.display = "none";
	elenitaElem.style.display = "none";
	elenitaTituloElem.style.display = "none";
	elenitaVideoElem.style.display = "none";
	elenitaImg1Elem.style.display = "none";
	elenitaImg2Elem.style.display = "none";
	elenitaImg3Elem.style.display = "none";
	elenitaImg4Elem.style.display = "none";
	elenitaImg5Elem.style.display = "none";
	elenitaImg6Elem.style.display = "none";
	elenitaImg7Elem.style.display = "none";
	elenitaImg8Elem.style.display = "none";	
	elenitaImg9Elem.style.display = "none";
	elenitaImg10Elem.style.display = "none";
	elenitaImg11Elem.style.display = "none";
	elenitaImg12Elem.style.display = "none";
	elenitaImg13Elem.style.display = "none";
	elenitaImg14Elem.style.display = "none";
	elenitaImg15Elem.style.display = "none";
	elenitaImg16Elem.style.display = "none";
	elenitaImg17Elem.style.display = "none";
	elenitaImg18Elem.style.display = "none";	
	iconDiasMulheresViraoElem.style.display = "none";
	iconHistoriaElem.style.display = "none";
	iconFumacaAntifascistaElem.style.display = "none";
	iconMonumentificacaoRessiginificadoElem.style.display = "none";
	iconOvoElem.style.display = "none";
	iconPauloBatistaElem.style.display = "none";
	iconAnaueBadaueElem.style.display = "none";
	iconMaricaElem.style.display = "none";
	iconInconstituicaoElem.style.display = "none";
	iconCanalhasElem.style.display = "none";
	iconQuedaLivreElem.style.display = "none";
	iconZapElem.style.display = "none";
	iconMarRioPedraRosaElem.style.display = "none";
	iconVidaElem.style.display = "none";
	iconElenitaElem.style.display = "none";
	iconRobsonElem.style.display = "none";
	iconLaboratorioElem.style.display = "none";
	iconLuteComoElem.style.display = "none";
	iconJarbasElem.style.display = "none";
	iconBamboziElem.style.display = "none";
	robsonElem.style.display = "none";
	marcelod2Elem.style.display = "none";
	robsonGifElem.style.display = "none";
	robsonTextoElem.style.display = "none";
	robsonPingPongElem.style.display = "none";
	robsonSetaElem.style.display = "none";
	robsonImagemElem.style.display = "none";
	textoLaboratorioElem.style.display = "none";
	tituloTextoLaboratorioElem.style.display = "none";
	videoMaricaElem.style.display = "none";
	estrela1Elem.style.display = "none";
	estrela2Elem.style.display = "none";
	estrela3Elem.style.display = "none";
	portasAbertasElem.style.display = "none";
	izidorioElem.style.display = "none";
  gifJarbasElem.style.display = "none";
	politicaDividida.style.display = "none";
	vendeSeElem.style.display = "none";
	autoriaElem.style.display = "none";
	propriedadeElem.style.display = "none";
	moradiaElem.style.display = "none";
	textoCuratorialElem.style.display = "none";
	window.scrollTo(0, 0); 
}


function animation()
{

}

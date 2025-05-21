// Máscara para o campo CNPJ
const cnpjInput = document.getElementById("cnpj");
cnpjInput.addEventListener("input", function () {
   let value = this.value.replace(/\D/g, "");
   if (value.length > 14) {
      value = value.slice(0, 14);
   }
   if (value.length === 11) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
   } else if (value.length === 14) {
      value = value.replace(
         /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
         "$1.$2.$3/$4-$5"
      );
   }
   this.value = value;
});

// Máscara para o campo IE
const ieInput = document.getElementById("ie");
ieInput.addEventListener("input", function () {
   this.value = this.value.replace(/\D/g, "");
});

// Máscara para o campo CEP
const cepInput = document.getElementById("cep");
cepInput.addEventListener("input", function () {
   let value = this.value.replace(/\D/g, "");
   if (value.length > 8) {
      value = value.slice(0, 8);
   }
   if (value.length === 8) {
      value = value.replace(/(\d{5})(\d{3})/, "$1-$2");
   }
   this.value = value;
});

document.addEventListener("DOMContentLoaded", function () {
   const produtos = [
      { codigo: "17", nome: "Adesivo Ep 01 Kg", valor: 34.68 },
      { codigo: "60", nome: "Adesivo Ep Injecao 01 Kg", valor: 140.62 },
      { codigo: "73", nome: "Adesivo Ep Pl 01 Kg", valor: 218.99 },
      { codigo: "21", nome: "Adesivo Ep Sub Aquatico 01 Kg", valor: 229.93 },
      { codigo: "40", nome: "Adesivo Ep Tix 01 Kg", valor: 34.68 },
      { codigo: "41", nome: "Adesivo Ep Zn 01 Kg", valor: 130.22 },
      {
         codigo: "23262",
         nome: "Arg. Bautech Massa Corrida Em Po Branca 18 Kg",
         valor: 36.98,
      },
      {
         codigo: "23513",
         nome: "Arg. Bautech Textura Em Po Branca 12 Kg",
         valor: 31.53,
      },
      {
         codigo: "22795",
         nome: "Arg. Cim.queimado Bautech Platina 5 Kg",
         valor: 41.13,
      },
      { codigo: "670", nome: "Argamassa Acaba Trinca 500 G", valor: 37.2 },
      { codigo: "13835", nome: "Argamassa Bautech Ac I 20 Kg", valor: 10.25 },
      {
         codigo: "6305",
         nome: "Argamassa Bautech Ac Ii Cinza 20 Kg",
         valor: 16.92,
      },
      {
         codigo: "5827",
         nome: "Argamassa Bautech Ac Iii Branco 20 Kg",
         valor: 26.44,
      },
      {
         codigo: "5782",
         nome: "Argamassa Bautech Ac Iii Cinza 20 Kg",
         valor: 19.03,
      },
      {
         codigo: "21634",
         nome: "Argamassa Bautech Ac Iii Plus Cinza 20 Kg",
         valor: 52.87,
      },
      {
         codigo: "18081",
         nome: "Argamassa Bautech Acii Vs Cinza 20 Kg",
         valor: 26.53,
      },
      { codigo: "9348", nome: "Argamassa Bautech Bam 2,5kg", valor: 29.37 },
      {
         codigo: "9936",
         nome: "Argamassa Bautech Chapisco Rolado 20kg",
         valor: 47.01,
      },
      {
         codigo: "913",
         nome: "Argamassa Bautech Encunhamento 25 Kg",
         valor: 28.21,
      },
      { codigo: "1046", nome: "Argamassa Bautech Fix C 20 Kg", valor: 129.26 },
      {
         codigo: "6048",
         nome: "Argamassa Bautech Piscina Mlastic 12 Kg",
         valor: 434.76,
      },
      { codigo: "6049", nome: "Argamassa Bautech Rapdez 05 Kg", valor: 58.78 },
      { codigo: "9905", nome: "Argamassa Bautech Rodape 04 Kg", valor: 65.7 },
      { codigo: "5836", nome: "Argamassa Bautech Rodape 12 Kg", valor: 178.64 },
      { codigo: "19815", nome: "Argamassa Bautech Rodape 8 Kg", valor: 131.41 },
      { codigo: "4789", nome: "Argamassa Colante A.a 25 Kg", valor: 139.62 },
      { codigo: "323", nome: "Argamassa Graute 25 Kg", valor: 24.65 },
      { codigo: "5761", nome: "Argamassa Graute Tix 25 Kg", valor: 30.7 },
      { codigo: "9494", nome: "Argamassa Imper Po 13 Kg", valor: 106.09 },
      {
         codigo: "17124",
         nome: "Argamassa Kit Rapflex 10 28 Kg",
         valor: 275.21,
      },
      {
         codigo: "426",
         nome: "Argamassa Kit Rapflex Plus 28,8 Kg",
         valor: 305.79,
      },
      {
         codigo: "3347",
         nome: "Argamassa Nivelmix An-7 Cinza 20 Kg",
         valor: 146.39,
      },
      { codigo: "18481", nome: "Argamassa Rapcola 30,5kg", valor: 304.85 },
      { codigo: "4924", nome: "Argamassa Rapfinish Cinza 3 Kg", valor: 120.88 },
      { codigo: "4888", nome: "Argamassa Rapflex 250 25 Kg", valor: 513.33 },
      { codigo: "4825", nome: "Argamassa Rapflex 500 25 Kg", valor: 513.13 },
      { codigo: "4776", nome: "Argamassa Rapgrout 25kg", valor: 275.21 },
      { codigo: "79", nome: "Argamassa Rejunte A.a 03 Kg", valor: 49.28 },
      { codigo: "3350", nome: "Argamassa S 88 25 Kg", valor: 143.72 },
      {
         codigo: "13717",
         nome: "Argamassa Skim Coat Externo 25kg",
         valor: 166.66,
      },
      { codigo: "376", nome: "Argamassa Stop B2 12 Kg", valor: 240.62 },
      { codigo: "6451", nome: "Bautech 1 12 Lt", valor: 45.92 },
      { codigo: "6057", nome: "Bautech 1 200 Lt", valor: 411.37 },
      { codigo: "6058", nome: "Bautech 1 3,6 Lt", valor: 17.22 },
      { codigo: "17565", nome: "Bautech 1000 - 18 Kg", valor: 34.61 },
      { codigo: "19718", nome: "Bautech 5000 18 Kg", valor: 95.47 },
      { codigo: "19669", nome: "Bautech 7000 18 Kg", valor: 109.85 },
      {
         codigo: "1035",
         nome: "Bautech Acelerador Adr-15 2,5 Kg",
         valor: 52.03,
      },
      { codigo: "6373", nome: "Bautech Acrilico 12 Lt", valor: 153.29 },
      { codigo: "14", nome: "Bautech Acrilico 200 Lt", valor: 1085.64 },
      { codigo: "52", nome: "Bautech Acrilico 5000 12 Lt", valor: 470.82 },
      { codigo: "729", nome: "Bautech Acrilico 5000 200 Lt", valor: 3102.96 },
      { codigo: "22195", nome: "Bautech Aditivo Plast C 1l", valor: 10.96 },
      { codigo: "21097", nome: "Bautech Aditivo Reboset 8kg", valor: 223.86 },
      {
         codigo: "21788",
         nome: "Bautech Antigoteira Branco 12 Kg",
         valor: 250.61,
      },
      { codigo: "20447", nome: "Bautech Antipichacao 900 Ml", valor: 66.87 },
      { codigo: "20408", nome: "Bautech Bam 250 G", valor: 3.53 },
      { codigo: "20409", nome: "Bautech Bam 500 G", valor: 7.42 },
      { codigo: "17593", nome: "Bautech Bloqueio De Umidade 1l", valor: 66.87 },
      {
         codigo: "17814",
         nome: "Bautech Bloqueio De Umidade 25 L",
         valor: 848.51,
      },
      {
         codigo: "18376",
         nome: "Bautech Bloqueio De Umidade 200 L",
         valor: 6009.48,
      },
      {
         codigo: "30583",
         nome: "Bautech Borracha Liquida Branca 4 Kg",
         valor: 71.75,
      },
      {
         codigo: "23426",
         nome: "Bautech Borracha Liquida Branca 20 Kg",
         valor: 312.35,
      },
      { codigo: "17507", nome: "Bautech Cd Hard 4,5 Kg", valor: 126.6 },
      { codigo: "6173", nome: "Bautech Chapisco - 12 L", valor: 63.14 },
      { codigo: "6051", nome: "Bautech Chapisco - 200 L", valor: 813.17 },
      { codigo: "6052", nome: "Bautech Chapisco - 3,6 L", valor: 23.68 },
      {
         codigo: "30015",
         nome: "Bautech Cimento Elástico - 15 Kg",
         valor: 335.72,
      },
      { codigo: "30143", nome: "Bautech Cola Branca Pva - 1 Kg", valor: 12.43 },
      { codigo: "18958", nome: "Bautech Cola Cuba - 50 G", valor: 5.73 },
      { codigo: "18959", nome: "Bautech Cola Tudo - 100 G", valor: 13.39 },
      { codigo: "200", nome: "Bautech Cure - 20 L", valor: 158.35 },
      { codigo: "120", nome: "Bautech Cure - 200 L", valor: 1141.4 },
      {
         codigo: "20008",
         nome: "Bautech Desmoldante Oil Formas Metálicas - 200 L",
         valor: 1578.51,
      },
      { codigo: "9280", nome: "Bautech Desmoldante Ol - 12 L", valor: 57.18 },
      { codigo: "931", nome: "Bautech Desmoldante Ol 200 Lt", valor: 692.44 },
      { codigo: "29678", nome: "Bautech Desmoldante UY - 12 L", valor: 80.52 },
      {
         codigo: "23351",
         nome: "Bautech Desmoldante UY - 200 L",
         valor: 1073.5,
      },
      { codigo: "28", nome: "Bautech Dur - 20 L", valor: 131.96 },
      { codigo: "213", nome: "Bautech Dur - 200 L", valor: 1087.52 },
      {
         codigo: "21113",
         nome: "Bautech Efeito Cimento Queimado Platina 5 Kg",
         valor: 35.39,
      },
      {
         codigo: "16727",
         nome: "Bautech Emulsao Asfaltica Acqua - 0,9 L",
         valor: 19.73,
      },
      {
         codigo: "18195",
         nome: "Bautech Emulsao Asfaltica Acqua - 18 L",
         valor: 143.49,
      },
      {
         codigo: "17229",
         nome: "Bautech Emulsao Asfaltica Acqua - 200 L",
         valor: 1594.33,
      },
      {
         codigo: "16728",
         nome: "Bautech Emulsao Asfaltica Acqua - 3,6 L",
         valor: 42.09,
      },
      { codigo: "30260", nome: "Bautech Cola Assentamento 5 Kg", valor: 64.09 },
      { codigo: "30261", nome: "Bautech Cola Taco 1 Kg", valor: 22.47 },
      // {
      //    codigo: "20008",
      //    nome: "Bautech Desmoldante OIL 200 Ml",
      //    valor: 1578.5,
      // },
      { codigo: "30262", nome: "Bautech Cola Taco 4 Kg", valor: 81.59 },
      {
         codigo: "30259",
         nome: "Bautech Cola Assentamento 1,5 Kg",
         valor: 22.11,
      },
      {
         codigo: "30265",
         nome: "Bautech Fita Crepe 18mmX50m x12 Und",
         valor: 2.64,
      },
      {
         codigo: "30265",
         nome: "Bautech Fita Crepe 18mmX50m Cx 204 Und",
         valor: 2.3,
      },
      {
         codigo: "30266",
         nome: "Bautech Fita Crepe 24mmX50m Cx 144 Und",
         valor: 3.3,
      },
      {
         codigo: "30266",
         nome: "Bautech Fita Crepe 24mmX50m x10 Und",
         valor: 3.8,
      },
      {
         codigo: "30267",
         nome: "Bautech Fita Crepe 48mmX50m x10Und",
         valor: 7.26,
      },
      {
         codigo: "30267",
         nome: "Bautech Fita Crepe 48mmX50m Cx 72 Und",
         valor: 6.32,
      },
      {
         codigo: "30268",
         nome: "Bautech Fita Crepe Azul 24mmX50m x10 Und",
         valor: 11.67,
      },
      {
         codigo: "30268",
         nome: "Bautech Fita Crepe Azul 24mmX50m Cx 144 Und",
         valor: 10.14,
      },
      {
         codigo: "30269",
         nome: "Bautech Fita Crepe Azul 48mmX50m x10 Und",
         valor: 19.13,
      },
      {
         codigo: "30269",
         nome: "Bautech Fita Crepe Azul 48mmX50m cx 72 Und",
         valor: 16.73,
      },
      {
         codigo: "23353",
         nome: "Bautech Fita Trinca - 46 M X 10,2 Cm",
         valor: 49.27,
      },
      {
         codigo: "22445",
         nome: "Bautech Fita Veda Tudo - 10Cm X 10M",
         valor: 12.92,
      },
      {
         codigo: "30444",
         nome: "Bautech Fita Veda Tudo - 15Cm X 10M",
         valor: 19.37,
      },
      {
         codigo: "22446",
         nome: "Bautech Fita Veda Tudo - 20Cm X 10M",
         valor: 25.84,
      },
      {
         codigo: "22447",
         nome: "Bautech Fita Veda Tudo - 30Cm X 10M",
         valor: 38.75,
      },
      {
         codigo: "23213",
         nome: "Bautech Fita Veda Tudo - 45Cm X 10M",
         valor: 58.12,
      },
      {
         codigo: "23214",
         nome: "Bautech Fita Veda Tudo - 90Cm X 10M",
         valor: 116.24,
      },
      { codigo: "18955", nome: "Bautech Fixa Espelho - 50G", valor: 4.53 },
      { codigo: "30264", nome: "Bautech Fixa Espelho - 280G", valor: 15.3 },
      { codigo: "30263", nome: "Bautech Fixa Rodapé - 310G", valor: 15.3 },
      {
         codigo: "21685",
         nome: "Bautech Fixa Tudo Branco - 280 G",
         valor: 16.83,
      },
      {
         codigo: "21684",
         nome: "Bautech Fixa Tudo Incolor - 280 G",
         valor: 16.83,
      },
      { codigo: "30257", nome: "Bautech Fixa Cuba - 280 G", valor: 15.3 },
      { codigo: "30258", nome: "Bautech Prego Líquido - 310 G", valor: 15.3 },
      { codigo: "16530", nome: "Bautech Flex 68 M - 18 Kg", valor: 2437.76 },
      { codigo: "16531", nome: "Bautech Flex 68 M - 3,2 Kg", valor: 479.32 },
      { codigo: "19492", nome: "Bautech Fulget Branco - 7Kg", valor: 175.19 },
      { codigo: "2177", nome: "Bautech Fundacao 200 Lt", valor: 3119.85 },
      { codigo: "2176", nome: "Bautech Fundacao - 25 Lt", valor: 422.28 },
      { codigo: "2175", nome: "Bautech Fundacao - 3,6 Lt", valor: 96.75 },
      {
         codigo: "20410",
         nome: "Bautech Fundo Para Madeira Contra Fungos, Bolor E",
         valor: 66.87,
      },
      {
         codigo: "20411",
         nome: "Bautech Hidrof. Protege Fachadas - 900 Ml",
         valor: 66.87,
      },
      {
         codigo: "20862",
         nome: "Bautech Impermeabilizante De Tecidos - 300 Ml",
         valor: 19.13,
      },
      { codigo: "20530", nome: "Bautech Imperparede - 4 Kg", valor: 39.22 },
      {
         codigo: "21752",
         nome: "Bautech Imperparede Branco - 20Kg",
         valor: 149.24,
      },
      {
         codigo: "23337",
         nome: "Bautech Imperpo Flex Ultra Areia - 20 Kg",
         valor: 228.87,
      },
      { codigo: "19721", nome: "Bautech Imperpo Plus - 18 Kg", valor: 128.4 },
      { codigo: "13693", nome: "Bautech Manta Liquida - 15 Kg", valor: 208.89 },
      {
         codigo: "6036",
         nome: "Bautech Manta Liquida Branco - 04 Kg",
         valor: 64.64,
      },
      {
         codigo: "6037",
         nome: "Bautech Manta Liquida Branco - 12 Kg",
         valor: 168.61,
      },
      {
         codigo: "22961",
         nome: "Bautech Manta Liquida Incolor - 8Kg",
         valor: 275.67,
      },
      {
         codigo: "23122",
         nome: "Bautech Manta Liquida Incolor - 900 Ml",
         valor: 66.87,
      },
      {
         codigo: "6050",
         nome: "Bautech Manta Liquida Transparente - 3,5 Kg",
         valor: 334.82,
      },
      { codigo: "21952", nome: "Bautech Massa Acrilica - 25Kg", valor: 88.17 },
      {
         codigo: "18628",
         nome: "Bautech Massa Acrilica - 5.8 Kg",
         valor: 25.26,
      },
      { codigo: "16663", nome: "Bautech Massa Corrida - 25 Kg", valor: 47.83 },
      { codigo: "9947", nome: "Bautech Massa Corrida - 5,8 Kg", valor: 16.84 },
      {
         codigo: "19918",
         nome: "Bautech Massa Regularizadora Rapfinish - 4 Kg",
         valor: 203.34,
      },
      { codigo: "19350", nome: "Bautech Mega Manta Pu - 12 Kg", valor: 764.37 },
      {
         codigo: "14604",
         nome: "Bautech Mega Poliureia 90 Shore - 12 Kg",
         valor: 1259.97,
      },
      {
         codigo: "18906",
         nome: "Bautech Membrana Impermeavel Preta - 12 Lt",
         valor: 170.0,
      },
      {
         codigo: "18907",
         nome: "Bautech Membrana Impermeavel Preta - 3,6 Lt",
         valor: 54.76,
      },
      {
         codigo: "19783",
         nome: "Bautech Membrana Preta De - 200 L",
         valor: 2600.8,
      },
      { codigo: "21672", nome: "Bautech Nivelmix Base - 20 Kg", valor: 66.38 },
      {
         codigo: "18874",
         nome: "Bautech Pigmento Em Po Vermelho - 250 G",
         valor: 10.96,
      },
      {
         codigo: "18875",
         nome: "Bautech Pigmento Em Po Vermelho - 500 G",
         valor: 14.51,
      },
      {
         codigo: "23298",
         nome: "Bautech Pint Embor Imper Branca - 20 Kg",
         valor: 211.85,
      },
      {
         codigo: "23304",
         nome: "Bautech Pint Embor Imper Branca - 4 Kg",
         valor: 52.62,
      },
      {
         codigo: "19653",
         nome: "Bautech Pintura Asfaltica - 12 L",
         valor: 126.84,
      },
      {
         codigo: "19161",
         nome: "Bautech Pintura Asfaltica - 200 L",
         valor: 1664.51,
      },
      {
         codigo: "19095",
         nome: "Bautech Pintura Asfaltica - 3,6 L",
         valor: 46.82,
      },
      {
         codigo: "23019",
         nome: "Bautech Pintura Litoral Branco - 20 Kg",
         valor: 243.08,
      },
      {
         codigo: "23062",
         nome: "Bautech Pintura Litoral Branco - 4 Kg",
         valor: 71.17,
      },
      { codigo: "21917", nome: "Bautech Piso Acustico - 10 Kg", valor: 201.84 },
      { codigo: "392", nome: "Bautech Plast C - 01 L", valor: 16.14 },
      { codigo: "9661", nome: "Bautech Plast C - 12 L", valor: 62.19 },
      { codigo: "63", nome: "Bautech Plast C - 200 L", valor: 602.13 },
      { codigo: "81", nome: "Bautech Plast C - 3,6 L", valor: 28.7 },
      {
         codigo: "654",
         nome: "Bautech Plastificante 610 - 18 L",
         valor: 309.24,
      },
      {
         codigo: "731",
         nome: "Bautech Plastificante 610 - 200 L",
         valor: 2827.41,
      },
      { codigo: "18957", nome: "Bautech Prego Liquido - 50 G", valor: 4.75 },
      { codigo: "328", nome: "Bautech Primer Ep Branco - 4 Kg", valor: 272.65 },
      { codigo: "34", nome: "Bautech Primer Ep Cinza - 4 Kg", valor: 272.65 },
      { codigo: "204", nome: "Bautech Primer P5 - 5 Kg", valor: 321.33 },
      { codigo: "346", nome: "Bautech Primer EPA - 4 Kg", valor: 283.96 },
      { codigo: "21686", nome: "Bautech Pu40 Branco - 310 G", valor: 12.68 },
      { codigo: "29451", nome: "Bautech Pu40 Branco - 4 Kg", valor: 136.87 },
      { codigo: "20009", nome: "Bautech Rapflex Pav - 20 Kg", valor: 226.46 },
      {
         codigo: "17389",
         nome: "Bautech Rej Flexivel Branco - 1 Kg",
         valor: 3.4,
      },
      {
         codigo: "29831",
         nome: "Bautech Rejunte Acrilico Branco - 700 G",
         valor: 14.6,
      },
      {
         codigo: "16572",
         nome: "Bautech Rejunte Acrilico Liquido Bco - 470 G",
         valor: 12.41,
      },
      {
         codigo: "23432",
         nome: "Bautech Repinta Fachada Branca - 20 Kg",
         valor: 258.27,
      },
      {
         codigo: "20529",
         nome: "Bautech Resina Protege Pedras - 3,6 L",
         valor: 38.26,
      },
      {
         codigo: "20526",
         nome: "Bautech Resina Protege Pisos - 3,6 L",
         valor: 38.26,
      },
      {
         codigo: "20527",
         nome: "Bautech Resina Protege Telhas - 3,6 L",
         valor: 38.26,
      },
      {
         codigo: "20528",
         nome: "Bautech Resina Protege Tijolos - 3,6 L",
         valor: 38.26,
      },
      { codigo: "13678", nome: "Bautech Sec Rapido - 12 Kg", valor: 442.5 },
      { codigo: "22458", nome: "Bautech Sela Trinca - 400 G", valor: 7.18 },
      {
         codigo: "15428",
         nome: "Bautech Selador Acrilico - 18 L",
         valor: 62.18,
      },
      {
         codigo: "15237",
         nome: "Bautech Selador Acrilico - 3,6 L",
         valor: 24.09,
      },
      {
         codigo: "19780",
         nome: "Bautech Selador Acrilico Para Gesso - 18 L",
         valor: 62.18,
      },
      {
         codigo: "21682",
         nome: "Bautech Selante Acaba Trinca - 400 G",
         valor: 11.38,
      },
      {
         codigo: "29450",
         nome: "Bautech Selante Acaba Trinca - 5 Kg",
         valor: 97.45,
      },
      { codigo: "20233", nome: "Bautech Selante Acrilico - 1 Kg", valor: 17.7 },
      { codigo: "3456", nome: "Bautech Selante Acrilico - 5 Kg", valor: 81.42 },
      {
         codigo: "19149",
         nome: "Bautech Selante De Silicone - 260 G",
         valor: 12.32,
      },
      {
         codigo: "19253",
         nome: "Bautech Selante De Silicone Branco - 260 G",
         valor: 9.33,
      },
      {
         codigo: "21783",
         nome: "Bautech Selante De Silicone Sache - 260 G",
         valor: 9.33,
      },
      {
         codigo: "21683",
         nome: "Bautech Selante Vidro E Aluminio - 280 G",
         valor: 15.3,
      },
      {
         codigo: "18956",
         nome: "Bautech Silicone Veda E Cola - 50 G",
         valor: 5.73,
      },
      { codigo: "656", nome: "Bautech Stones Oleofugante - 1 L", valor: 99.51 },
      {
         codigo: "23609",
         nome: "Bautech Telhado E Lajes Branco - 20 Kg",
         valor: 250.62,
      },
      {
         codigo: "13694",
         nome: "Bautech Telhado Gelado Branco - 12 Kg",
         valor: 277.44,
      },
      {
         codigo: "16658",
         nome: "Bautech Tinta Economica - 18 L",
         valor: 85.86,
      },
      {
         codigo: "21866",
         nome: "Bautech Tinta Economica - 20 L",
         valor: 95.65,
      },
      {
         codigo: "17657",
         nome: "Bautech Tinta Economica Branco - 3,6 L",
         valor: 19.75,
      },
      {
         codigo: "20412",
         nome: "Bautech Tinta Emborrachada Rep. Exter - 900 Ml",
         valor: 66.87,
      },
      {
         codigo: "19317",
         nome: "Bautech Tinta Epoxi Branco - 3,6 L",
         valor: 272.65,
      },
      {
         codigo: "32",
         nome: "Bautech Tinta Ep Cinza - 4 Kg",
         valor: 272.65,
      },
      {
         codigo: "18460",
         nome: "Bautech Tinta Esmalte Sintética Branca - 3,6 L",
         valor: 81.33,
      },
      {
         codigo: "18476",
         nome: "Bautech Tinta Esmalte Sintética Branca - 0,9 L",
         valor: 30.63,
      },
      {
         codigo: "19814",
         nome: "Bautech Tinta Gesso Branco - 18 L",
         valor: 124.8,
      },
      {
         codigo: "22245",
         nome: "Bautech Tinta Gesso Branco - 3,6 L",
         valor: 32.2,
      },
      {
         codigo: "18916",
         nome: "Bautech Tinta Mineral Branco - 10 Kg",
         valor: 220.87,
      },
      {
         codigo: "18993",
         nome: "Bautech Tinta Piso Branco - 18 L",
         valor: 162.64,
      },
      {
         codigo: "18992",
         nome: "Bautech Tinta Piso Branco - 3,6 L",
         valor: 36.36,
      },
      {
         codigo: "16041",
         nome: "Bautech Tinta Premium Super Lavável Branco - 18 L",
         valor: 328.81,
      },
      {
         codigo: "16042",
         nome: "Bautech Tinta Premium Super Lavável Branco - 3,6 L",
         valor: 73.58,
      },
      {
         codigo: "20448",
         nome: "Bautech Tinta Pu Para Piscina - 4 Kg",
         valor: 256.39,
      },
      { codigo: "503", nome: "Bautech Tinta Pu Cinza - 4 Kg", valor: 283.96 },
      {
         codigo: "20414",
         nome: "Bautech Tinta Sobre Azulejo, Cerâmicas E Por",
         valor: 66.87,
      },
      {
         codigo: "22962",
         nome: "Bautech Tinta Standard Branco - 20 L",
         valor: 172.2,
      },
      {
         codigo: "30126",
         nome: "Bautech Tinta Standard Rende Mais Branca - 25 Kg",
         valor: 172.19,
      },
      {
         codigo: "18901",
         nome: "Bautech Tinta Super Ac E Cob Branca - 18 L",
         valor: 162.62,
      },
      {
         codigo: "18902",
         nome: "Bautech Tinta Super Ac E Cob Branca - 3,6 L",
         valor: 38.27,
      },
      {
         codigo: "6247",
         nome: "Bautech Tinta Teto Banheiro - 3,6 L",
         valor: 66.87,
      },
      {
         codigo: "20413",
         nome: "Bautech Tinta Zero Bolor Contra Formação De Fungos - 900 Ml",
         valor: 66.87,
      },
      {
         codigo: "13380",
         nome: "Bautech Transparente Fosco - 2,5 Kg",
         valor: 334.82,
      },
      { codigo: "21681", nome: "Bautech Veda Calha - 380 G", valor: 7.18 },
      { codigo: "29449", nome: "Bautech Veda Calha - 5 Kg", valor: 97.45 },
      { codigo: "16094", nome: "Bautech Veda Friso - 12 Kg", valor: 193.98 },
      {
         codigo: "19694",
         nome: "Bautech Verniz Antiderrapante - 1 L",
         valor: 66.87,
      },
      { codigo: "405", nome: "Bautech Verniz Pu - 04 Kg", valor: 370.35 },
      { codigo: "30252", nome: "Bautech Pu40 incolor - 260 G", valor: 14.92 },
      {
         codigo: "20415",
         nome: "Bautech Verniz Pu Alto Brilho P/",
         valor: 66.87,
      },
      { codigo: "5352", nome: "Cimento Branco - 50 Kg", valor: 285.39 },
      { codigo: "671", nome: "Cola Tudo - 150 G", valor: 27.38 },
      { codigo: "116", nome: "Graute Epoxi 211 - 35 Kg", valor: 1185.2 },
      { codigo: "687", nome: "Graute Epoxi - 35 Kg", valor: 1149.66 },
      { codigo: "3", nome: "Graute Epoxi Super Fluido - 35 Kg", valor: 1806.6 },
      { codigo: "5916", nome: "Graute Sub-Aquático - 25 Kg", valor: 305.5 },
      {
         codigo: "20451",
         nome: "Kit Reparo Paredes E Trincas - 2,3 Kg",
         valor: 69.82,
      },
      {
         codigo: "21473",
         nome: "Mset Fibra De Polipropileno - 600 G",
         valor: 28.5,
      },
      {
         codigo: "17560",
         nome: "Mset Super Manta Líquida Branca - 12 Kg",
         valor: 145.07,
      },
      { codigo: "21474", nome: "Mset Tela Imp - 1,05M X 50M", valor: 291.49 },
      { codigo: "346", nome: "Primer Epa - 04 Kg", valor: 272.65 },
      {
         codigo: "14417",
         nome: "Rejuntamento Cimentício Branco - 05 Kg",
         valor: 17.56,
      },
      {
         codigo: "21618",
         nome: "Rejuntamento Epoxi Branco - 1 Kg",
         valor: 28.6,
      },
      {
         codigo: "65",
         nome: "Rejunte Epoxi Anti Ataque Cinza - 02 Kg",
         valor: 119.8,
      },
      {
         codigo: "10181",
         nome: "Resina Acril Multiuso Alto Brilho - 12 L",
         valor: 153.07,
      },
      {
         codigo: "5212",
         nome: "Resina Acril Multiuso Alto Brilho - 3,6 L",
         valor: 53.57,
      },
      {
         codigo: "10068",
         nome: "Resina Acril Multiuso Fosca - 12 L",
         valor: 110.0,
      },
      {
         codigo: "5213",
         nome: "Resina Acril Multiuso Fosca - 3,6 L",
         valor: 38.26,
      },
      {
         codigo: "18254",
         nome: "Resina Bautech Protege Par. E Muros - 12 L",
         valor: 191.33,
      },
      { codigo: "502", nome: "Tinta Pu Branca - 04 Kg", valor: 272.65 },
   ];

   const tabelaProdutos = document.querySelector("#produtosTabela tbody");

   produtos.forEach((produto) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${produto.codigo}</td>
        <td>${produto.nome}</td>
        <td class="valor-unitario">${produto.valor.toFixed(2)}</td>
        <td><input type="number" class="qtd-pedido" min="1" max="999" /></td>
        <td class="valor-total">R$ 0,00</td>
      `;
      tabelaProdutos.appendChild(tr);
   });

   // Função para calcular o valor total do pedido
   function calcularTotalPedido() {
      const total = Array.from(document.querySelectorAll(".qtd-pedido")).reduce(
         (sum, input) => {
            const qtd = parseFloat(input.value) || 0;
            const valorUnitario = parseFloat(
               input
                  .closest("tr")
                  .querySelector(".valor-unitario")
                  .textContent.replace("R$", "")
                  .replace(",", ".")
            );
            const valorTotal = valorUnitario * qtd;
            input
               .closest("tr")
               .querySelector(
                  ".valor-total"
               ).textContent = `R$ ${valorTotal.toFixed(2)}`;
            return sum + valorTotal;
         },
         0
      );
      document.querySelector(".total-pedido").textContent = `R$ ${total.toFixed(
         2
      )}`;
   }

   document.querySelectorAll(".qtd-pedido").forEach((input) => {
      input.addEventListener("input", calcularTotalPedido);
   });

   // Função para mostrar ou ocultar o botão de rolagem suave com base na posição da página
   window.onscroll = function () {
      scrollFunction();
   };

   // Esta função controla a visibilidade do botão de rolagem suave
   function scrollFunction() {
      if (
         document.body.scrollTop > 20 ||
         document.documentElement.scrollTop > 20
      ) {
         document.getElementById("scrollTopButton").style.display = "block";
      } else {
         document.getElementById("scrollTopButton").style.display = "none";
      }
   }

   // Função para rolar suavemente até o topo da página quando o botão é clicado
   document
      .getElementById("scrollTopButton")
      .addEventListener("click", function () {
         scrollToTop();
      });

   function scrollToTop() {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
         window.requestAnimationFrame(scrollToTop);
         window.scrollTo(0, c - c / 8);
      }
   }

   // Função para calcular o valor total com base na quantidade inserida e no valor unitário do produto
   function calcularValorTotal() {
      const produtos = document.querySelectorAll("tbody tr");
      produtos.forEach(function (produto) {
         const qtd = parseInt(produto.querySelector(".qtd-pedido").value);
         const valorUnitario = parseFloat(
            produto
               .querySelector(".valor-unitario")
               .textContent.replace(",", ".")
         );
         const valorTotal = qtd * valorUnitario;
         produto.querySelector(".valor-total").textContent = `R$ ${valorTotal
            .toFixed(2)
            .replace(".", ",")}`;
      });
   }

   // Adicionar evento de escuta para detectar mudanças nos campos de quantidade
   const qtdPedidoInputs = document.querySelectorAll(".qtd-pedido");
   qtdPedidoInputs.forEach(function (qtdPedidoInput) {
      qtdPedidoInput.addEventListener("input", function () {
         const produto = qtdPedidoInput.parentElement.parentElement; // Obter a linha do produto
         const qtd = parseInt(qtdPedidoInput.value);
         const valorUnitario = parseFloat(
            produto
               .querySelector(".valor-unitario")
               .textContent.replace(",", ".")
         );
         const valorTotal = qtd * valorUnitario;

         // Verificar se o valor total é um número válido
         if (!isNaN(valorTotal)) {
            produto.querySelector(".valor-total").textContent = `R$ ${valorTotal
               .toFixed(2)
               .replace(".", ",")}`;
         } else {
            produto.querySelector(".valor-total").textContent = "R$ -";
         }

         atualizarTotalPedido();
      });
   });

   // Função para calcular e atualizar o campo de total do pedido
   function atualizarTotalPedido() {
      const produtos = document.querySelectorAll(".valor-total");
      let totalPedido = 0;
      produtos.forEach(function (produto) {
         const valorTotal = parseFloat(
            produto.textContent.replace("R$ ", "").replace(",", ".")
         );
         if (!isNaN(valorTotal)) {
            totalPedido += valorTotal;
         }
      });
      document.querySelector(".total-pedido").textContent = `R$ ${totalPedido
         .toFixed(2)
         .replace(".", ",")}`;
   }

   // Função para filtrar e mostrar apenas os produtos com quantidade maior que zero
   function visualizarPedido() {
      const produtos = document.querySelectorAll("tbody tr");
      produtos.forEach(function (produto) {
         const qtd = parseInt(produto.querySelector(".qtd-pedido").value);
         if (qtd > 0) {
            produto.style.display = "table-row"; // Mostra o produto
         } else {
            produto.style.display = "none"; // Oculta o produto
         }
      });
   }

   // Adicionar evento de escuta para o botão de visualização de pedido
   const btnVisualizacaoPedido = document.getElementById("btnVisuPed");
   btnVisualizacaoPedido.addEventListener("click", function () {
      visualizarPedido();
   });

   // Adicionar evento de escuta para o botão "Criar Novo"
   const btnNovoPedido = document.getElementById("btnNovoPed");
   btnNovoPedido.addEventListener("click", function () {
      // Exibir um alerta de confirmação
      const confirmacao = confirm(
         "Tem certeza que deseja criar um novo pedido?"
      );
      if (confirmacao) {
         resetarPedido();
      }
   });

   // Função para resetar o pedido
   function resetarPedido() {
      // Limpar os campos de quantidade de todos os produtos
      const qtdPedidoInputs = document.querySelectorAll(".qtd-pedido");
      qtdPedidoInputs.forEach(function (qtdPedidoInput) {
         qtdPedidoInput.value = ""; // Limpar o valor do campo de quantidade
      });

      // Resetar valores totais dos produtos para "-"
      const valorTotalProdutos = document.querySelectorAll(".valor-total");
      valorTotalProdutos.forEach(function (valorTotal) {
         valorTotal.textContent = "R$ 0,00";
      });

      // Mostrar todos os produtos novamente
      const produtos = document.querySelectorAll("tbody tr");
      produtos.forEach(function (produto) {
         produto.style.display = "table-row";
      });

      // Atualizar total do pedido
      atualizarTotalPedido();
   }

   // Adicionar evento de escuta para o campo de pesquisa
   document.getElementById("search").addEventListener("input", searchProdutos);

   // Função para gerar o PDF
   function gerarPDF() {
      // Gerar número de pedido aleatório
      const numeroPedido = Math.floor(Math.random() * 1000);

      // Obter data e horário da impressão
      const dataHoraImpressao = new Date().toLocaleString();

      // // Verificar se há produtos filtrados
      // const produtosFiltrados = document.querySelectorAll(
      //    "tbody tr[style='display: table-row;']"
      // );
      // if (produtosFiltrados.length === 0) {
      //    alert("Você precisa filtrar produtos antes de gerar o pedido.");
      //    return;
      // }

      // Coletar dados do formulário de cliente
      const clienteForm = document.getElementById("clienteForm");
      const clienteData = clienteForm
         ? Array.from(clienteForm.elements).reduce((acc, input) => {
              if (input.name) acc[input.name] = input.value;
              return acc;
           }, {})
         : {};

      // Coletar dados do formulário de vendedor
      const vendedorForm = document.getElementById("vendedorForm");
      const vendedorData = vendedorForm
         ? Array.from(vendedorForm.elements).reduce((acc, input) => {
              if (input.name) acc[input.name] = input.value;
              return acc;
           }, {})
         : {};

      // Coletar dados do formulário de transportadora
      const transpForm = document.getElementById("TranspForm");
      const transpData = transpForm
         ? Array.from(transpForm.elements).reduce((acc, input) => {
              if (input.name) acc[input.name] = input.value;
              return acc;
           }, {})
         : {};

      // Coletar dados do formulário de forma de pagamento
      const pagForm = document.getElementById("PagForm");
      const pagData = pagForm
         ? Array.from(pagForm.elements).reduce((acc, input) => {
              if (input.name) acc[input.name] = input.value;
              return acc;
           }, {})
         : {};

      // Coletar dados dos produtos
      const produtos = [];
      let totalPedido = 0;
      document.querySelectorAll("tbody tr").forEach((tr) => {
         const qtd = parseInt(tr.querySelector(".qtd-pedido").value);
         if (qtd > 0) {
            const codigo = tr.cells[0].textContent;
            const nome = tr.cells[1].textContent;
            const valorUnitario = tr.cells[2].textContent;
            const valorTotal = tr.cells[4].textContent;
            produtos.push([codigo, nome, valorUnitario, qtd, valorTotal]);
            totalPedido += parseFloat(
               valorTotal.replace("R$ ", "").replace(",", ".")
            );
         }
      });

      // Coletar observações
      const observacoes = document.getElementById("observacoes").value;

      // Mapeamento dos nomes das chaves para nomes desejados
      const fieldMapping = {
         empresa: "Empresa",
         cnpj: "CNPJ",
         ie: "Inscrição Estadual",
         loc: "Endereço",
         estado: "Estado",
         cidade: "Cidade",
         cep: "CEP",
         representante: "Representante",
         regiao: "Região",
      };

      // Função para obter o nome mapeado ou o original se não houver mapeamento
      const getFieldDisplayName = (fieldName) =>
         fieldMapping[fieldName] || fieldName;

      // Definir a estrutura do PDF
      const docDefinition = {
         content: [
            {
               text: "NASAM COMERCIO E BAUTECH",
               style: "header",
               margin: [0, 0, 0, 0],
            },
            {
               text: "49.172.809/0001-90",
               style: "subheader",
               margin: [0, 0, 0, 0],
            },
            {
               text: "RUA MARIANA 607 JD BEIRA LAGO - Araguaína-TO",
               style: "subheader",
               margin: [0, 0, 0, 0],
            },
            {
               text: "77813-330",
               style: "subheader",
               margin: [0, 0, 0, 0],
            },
            {
               text: "Tabela de Pedidos",
               style: "header",
               margin: [0, 0, 0, 30],
            },
            {
               text: `Número do Pedido: ${numeroPedido}`,
               style: "subheader",
               fontSize: 10,
               margin: [0, 20, 0, 5],
               alignment: "right",
            },
            {
               text: `Data e Hora do Pedido: ${dataHoraImpressao}`,
               style: "subheader",
               fontSize: 10,
               margin: [0, 0, 0, 5],
               alignment: "right",
            },
            { text: "", margin: [0, 0, 0, 20] },
            { text: "Detalhes do Pedido", style: "header" },
            { text: "Dados do Cliente", style: "subheader" },
            ...Object.entries(clienteData).map(
               ([key, value]) => `${getFieldDisplayName(key)}: ${value}`
            ),
            { text: "Dados do Vendedor", style: "subheader" },
            ...Object.entries(vendedorData).map(
               ([key, value]) => `${getFieldDisplayName(key)}: ${value}`
            ),
            { text: "Dados da Transportadora", style: "subheader" },
            ...Object.values(transpData),
            { text: "Forma de Pagamento", style: "subheader" },
            ...Object.values(pagData),
            { text: "Produtos", style: "subheader", margin: [0, 20, 0, 10] },
            {
               table: {
                  headerRows: 1,
                  widths: ["auto", "*", "auto", "auto", "auto"],
                  body: [
                     [
                        { text: "Código", style: "tableHeader" },
                        { text: "Nome", style: "tableHeader" },
                        {
                           text: "Valor Unitário",
                           style: "tableHeader",
                           alignment: "right",
                        },
                        {
                           text: "Quantidade",
                           style: "tableHeader",
                           alignment: "right",
                        },
                        {
                           text: "Valor Total",
                           style: "tableHeader",
                           alignment: "right",
                        },
                     ],
                     ...produtos,
                     [
                        { text: "", colSpan: 3 },
                        "",
                        "",
                        "Total Pedido:",
                        {
                           text: `R$ ${totalPedido
                              .toFixed(2)
                              .replace(".", ",")}`,
                           bold: true,
                           fillColor: "#FFFF00",
                           alignment: "right",
                        },
                     ],
                  ],
               },
               layout: "lightHorizontalLines",
            },
            { text: "Observações", style: "subheader", margin: [0, 20, 0, 5] },
            observacoes,
         ],
         styles: {
            header: {
               fontSize: 18,
               bold: true,
               margin: [0, 0, 0, 10],
            },
            subheader: {
               fontSize: 14,
               bold: true,
               margin: [0, 5, 0, 5],
            },
            tableHeader: {
               bold: true,
               fontSize: 12,
               fillColor: "#f2f2f2",
               alignment: "center",
               padding: 5,
            },
         },
      };

      // Gerar o PDF
      const nomeArquivoPDF = `Pedido Nº${numeroPedido} ${dataHoraImpressao}.pdf`;
      pdfMake.createPdf(docDefinition).download(nomeArquivoPDF);
   }

   // Adicionar evento de escuta para o botão de geração de pedido
   const btnGerarPedido = document.getElementById("btnGerarPedido");
   btnGerarPedido.addEventListener("click", function () {
      // Verificar se há produtos filtrados (visíveis)
      const produtosFiltrados = document.querySelectorAll(
         "tbody tr[style='display: table-row;']"
      );
      if (produtosFiltrados.length === 0) {
         alert("Você precisa filtrar produtos antes de gerar o pedido.");
         return; // Impede a execução da geração do pedido
      }

      gerarPDF(); // Se houver produtos filtrados, chama a função para gerar o PDF
   });

   // Função para filtrar os produtos por código ou nome
   function searchProdutos() {
      const searchTerm = document
         .getElementById("search")
         .value.trim()
         .toLowerCase();
      const produtos = document.querySelectorAll("tbody tr");
      produtos.forEach(function (produto) {
         const codigo = produto.cells[0].textContent.trim().toLowerCase();
         const nome = produto.cells[1].textContent.trim().toLowerCase();
         if (codigo.includes(searchTerm) || nome.includes(searchTerm)) {
            produto.style.display = "table-row"; // Mostra o produto
         } else {
            produto.style.display = "none"; // Oculta o produto
         }
      });
   }
});

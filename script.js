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
      { codigo: "17", nome: "Adesivo Ep - 01 Kg", valor: 34.18 },
      { codigo: "60", nome: "Adesivo Ep Injeção - 01 Kg", valor: 140.62 },
      { codigo: "73", nome: "Adesivo Ep Pl - 01 Kg", valor: 218.99 },
      { codigo: "21", nome: "Adesivo Ep Sub Aquático - 01 Kg", valor: 229.93 },
      { codigo: "40", nome: "Adesivo Ep Tix - 01 Kg", valor: 37.43 },
      { codigo: "41", nome: "Adesivo Ep Zn - 01 Kg", valor: 110.13 },
      {
         codigo: "23262",
         nome: "Argamassa Bautech Massa Corrida Em Pó Branca - 18 Kg",
         valor: 40.41,
      },
      {
         codigo: "23513",
         nome: "Argamassa Bautech Textura Em Pó Branca - 12 Kg",
         valor: 33.84,
      },
      {
         codigo: "22795",
         nome: "Argamassa Cimento Queimado Bautech Platina - 5 Kg",
         valor: 41.12,
      },
      { codigo: "670", nome: "Argamassa Acaba Trinca - 500 G", valor: 41.12 },
      { codigo: "13835", nome: "Argamassa Bautech Ac I - 20 Kg", valor: 13.56 },
      {
         codigo: "6305",
         nome: "Argamassa Bautech Ac II Cinza - 20 Kg",
         valor: 19.76,
      },
      {
         codigo: "5827",
         nome: "Argamassa Bautech Ac III Branco - 20 Kg",
         valor: 33.91,
      },
      {
         codigo: "5782",
         nome: "Argamassa Bautech Ac III Cinza - 20 Kg",
         valor: 22.51,
      },
      {
         codigo: "21634",
         nome: "Argamassa Bautech Ac III Plus Cinza - 20 Kg",
         valor: 59.32,
      },
      {
         codigo: "16671",
         nome: "Argamassa Bautech Ac III Plus Branca - 20 Kg",
         valor: 74.77,
      },
      {
         codigo: "18081",
         nome: "Argamassa Bautech Ac II Vs Cinza - 20 Kg",
         valor: 26.53,
      },
      { codigo: "9348", nome: "Argamassa Bautech Bam - 2,5 Kg", valor: 29.37 },
      {
         codigo: "9936",
         nome: "Argamassa Bautech Chapisco Rolado - 20 Kg",
         valor: 47.0,
      },
      {
         codigo: "913",
         nome: "Argamassa Bautech Encunhamento - 25 Kg",
         valor: 28.21,
      },
      {
         codigo: "1046",
         nome: "Argamassa Bautech Fix C - 20 Kg",
         valor: 129.26,
      },
      {
         codigo: "6048",
         nome: "Argamassa Bautech Piscina Mlastic - 12 Kg",
         valor: 379.75,
      },
      {
         codigo: "6049",
         nome: "Argamassa Bautech Rapdez - 05 Kg",
         valor: 82.25,
      },
      {
         codigo: "9905",
         nome: "Argamassa Bautech Rodapé - 04 Kg",
         valor: 65.68,
      },
      {
         codigo: "5836",
         nome: "Argamassa Bautech Rodapé - 12 Kg",
         valor: 178.64,
      },
      {
         codigo: "19815",
         nome: "Argamassa Bautech Rodapé - 8 Kg",
         valor: 131.41,
      },
      { codigo: "4789", nome: "Argamassa Colante A.A - 25 Kg", valor: 195.45 },
      { codigo: "323", nome: "Argamassa Graute - 25 Kg", valor: 28.2 },
      { codigo: "5761", nome: "Argamassa Graute Tix - 25 Kg", valor: 29.36 },
      { codigo: "9494", nome: "Argamassa Imper Pó - 13 Kg", valor: 106.08 },
      {
         codigo: "17124",
         nome: "Argamassa Kit Rapflex 10 - 28 Kg",
         valor: 359.74,
      },
      {
         codigo: "3347",
         nome: "Argamassa Nivelmix An-7 Cinza - 20 Kg",
         valor: 189.4,
      },
      {
         codigo: "21672",
         nome: "Argamassa Nivelmix Base - 20 Kg",
         valor: 70.49,
      },
      { codigo: "18481", nome: "Argamassa Rapcola - 30,5 Kg", valor: 304.84 },
      {
         codigo: "4924",
         nome: "Argamassa Rapfinish Cinza - 3 Kg",
         valor: 120.88,
      },
      { codigo: "4888", nome: "Argamassa Rapflex 250 - 25 Kg", valor: 591.52 },
      { codigo: "4825", nome: "Argamassa Rapflex 500 - 25 Kg", valor: 754.4 },
      { codigo: "4776", nome: "Argamassa Rapgrout - 25 Kg", valor: 314.22 },
      { codigo: "79", nome: "Argamassa Rejunte A.A - 03 Kg", valor: 55.29 },
      { codigo: "3350", nome: "Argamassa S 88 - 25 Kg", valor: 96.02 },
      {
         codigo: "13717",
         nome: "Argamassa Skim Coat Externo - 25 Kg",
         valor: 166.66,
      },
      { codigo: "376", nome: "Argamassa Stop B2 - 12 Kg", valor: 258.12 },
      { codigo: "6451", nome: "Bautech 1 - 12 L", valor: 44.4 },
      { codigo: "6057", nome: "Bautech 1 - 200 L", valor: 458.45 },
      { codigo: "6058", nome: "Bautech 1 - 3,6 L", valor: 16.76 },
      { codigo: "17565", nome: "Bautech 1000 - 18 Kg", valor: 37.6 },
      { codigo: "19718", nome: "Bautech 5000 - 18 Kg", valor: 95.47 },
      { codigo: "19669", nome: "Bautech 7000 - 18 Kg", valor: 109.85 },
      {
         codigo: "1035",
         nome: "Bautech Acelerador Adr-15 - 2,5 Kg",
         valor: 52.03,
      },
      { codigo: "6373", nome: "Bautech Acrílico - 12 L", valor: 153.3 },
      { codigo: "14", nome: "Bautech Acrílico - 200 L", valor: 1085.64 },
      { codigo: "52", nome: "Bautech Acrílico 5000 - 12 L", valor: 470.81 },
      { codigo: "729", nome: "Bautech Acrílico 5000 - 200 L", valor: 3102.96 },
      { codigo: "22195", nome: "Bautech Aditivo Plast C - 1 L", valor: 10.96 },
      {
         codigo: "21097",
         nome: "Bautech Aditivo Reboset - 8 Kg",
         valor: 223.86,
      },
      {
         codigo: "21788",
         nome: "Bautech Antigoteira Branco - 12 Kg",
         valor: 250.6,
      },
      { codigo: "20447", nome: "Bautech Antipichação - 900 Ml", valor: 65.7 },
      { codigo: "20408", nome: "Bautech Bam - 250 G", valor: 3.53 },
      { codigo: "20409", nome: "Bautech Bam - 500 G", valor: 7.41 },
      {
         codigo: "17593",
         nome: "Bautech Bloqueio De Umidade - 1 L",
         valor: 33.73,
      },
      {
         codigo: "17814",
         nome: "Bautech Bloqueio De Umidade - 25 L",
         valor: 674.65,
      },
      {
         codigo: "23426",
         nome: "Bautech Borracha Líquida Branca - 20 Kg",
         valor: 312.35,
      },
      { codigo: "17507", nome: "Bautech Cd Hard - 4,5 Kg", valor: 126.6 },
      { codigo: "6173", nome: "Bautech Chapisco - 12 L", valor: 83.19 },
      { codigo: "6051", nome: "Bautech Chapisco - 200 L", valor: 1033.62 },
      { codigo: "6052", nome: "Bautech Chapisco - 3,6 L", valor: 38.32 },
      {
         codigo: "30015",
         nome: "Bautech Cimento Elástico - 15 Kg",
         valor: 335.72,
      },
      { codigo: "18958", nome: "Bautech Cola Cuba - 50 G", valor: 4.5 },
      {
         codigo: "18960",
         nome: "Bautech Cola Ep Transparente - 20 G",
         valor: 8.05,
      },
      { codigo: "18959", nome: "Bautech Cola Tudo - 100 G", valor: 10.55 },
      { codigo: "200", nome: "Bautech Cure - 20 L", valor: 183.79 },
      { codigo: "120", nome: "Bautech Cure - 200 L", valor: 1189.65 },
      {
         codigo: "20008",
         nome: "Bautech Desmoldante Oil Formas Metálicas - 200 L",
         valor: 1560.48,
      },
      { codigo: "9280", nome: "Bautech Desmoldante Ol - 12 L", valor: 63.29 },
      { codigo: "931", nome: "Bautech Desmoldante Ol - 200 L", valor: 684.36 },
      { codigo: "28", nome: "Bautech Dur - 20 L", valor: 283.44 },
      { codigo: "213", nome: "Bautech Dur - 200 L", valor: 1412.43 },
      {
         codigo: "21113",
         nome: "Bautech Efeito Cimento Queimado Platina - 5 Kg",
         valor: 43.8,
      },
      {
         codigo: "16727",
         nome: "Bautech Emulsão Asfáltica Acqua - 0,9 L",
         valor: 20.81,
      },
      {
         codigo: "18195",
         nome: "Bautech Emulsão Asfáltica Acqua - 18 L",
         valor: 165.55,
      },
      {
         codigo: "17229",
         nome: "Bautech Emulsão Asfáltica Acqua - 200 L",
         valor: 1896.61,
      },
      {
         codigo: "16728",
         nome: "Bautech Emulsão Asfáltica Acqua - 3,6 L",
         valor: 58.04,
      },
      {
         codigo: "23353",
         nome: "Bautech Fita Trinca - 46 M X 10,2 Cm",
         valor: 52.87,
      },
      {
         codigo: "22445",
         nome: "Bautech Fita Veda Tudo - 10 Cm X 10 M",
         valor: 14.73,
      },
      {
         codigo: "22446",
         nome: "Bautech Fita Veda Tudo - 20 Cm X 10 M",
         valor: 26.55,
      },
      {
         codigo: "22447",
         nome: "Bautech Fita Veda Tudo - 30 Cm X 10 M",
         valor: 39.24,
      },
      {
         codigo: "23213",
         nome: "Bautech Fita Veda Tudo - 45 Cm X 10 M",
         valor: 55.75,
      },
      {
         codigo: "23214",
         nome: "Bautech Fita Veda Tudo - 90 Cm X 10 M",
         valor: 122.63,
      },
      { codigo: "18955", nome: "Bautech Fixa Espelho - 50 G", valor: 4.52 },
      {
         codigo: "21685",
         nome: "Bautech Fixa Tudo Branco - 280 G",
         valor: 14.18,
      },
      {
         codigo: "21684",
         nome: "Bautech Fixa Tudo Incolor - 280 G",
         valor: 17.25,
      },
      { codigo: "16530", nome: "Bautech Flex 68 M - 18 Kg", valor: 2437.76 },
      { codigo: "16531", nome: "Bautech Flex 68 M - 3,2 Kg", valor: 479.32 },
      { codigo: "19492", nome: "Bautech Fulget Branco - 7 Kg", valor: 175.18 },
      { codigo: "2177", nome: "Bautech Fundação - 200 L", valor: 3119.85 },
      { codigo: "2176", nome: "Bautech Fundação - 25 L", valor: 422.28 },
      { codigo: "2175", nome: "Bautech Fundação - 3,6 L", valor: 96.75 },
      {
         codigo: "20410",
         nome: "Bautech Fundo Para Madeira Contra Fungos, Bolor E",
         valor: 31.72,
      },
      {
         codigo: "20411",
         nome: "Bautech Hidrof. Protege Fachadas - 900 Ml",
         valor: 56.33,
      },
      {
         codigo: "20862",
         nome: "Bautech Impermeabilizante De Tecidos - 300 Ml",
         valor: 42.97,
      },
      {
         codigo: "20530",
         nome: "Bautech Imperparede - 4 Kg",
         valor: 38.32,
      },
      {
         codigo: "21752",
         nome: "Bautech Imperparede Branco - 20 Kg",
         valor: 149.24,
      },
      {
         codigo: "19721",
         nome: "Bautech Imperpo Plus - 18 Kg",
         valor: 128.4,
      },
      { codigo: "13693", nome: "Bautech Manta Liquida - 15 Kg", valor: 208.89 },
      {
         codigo: "6036",
         nome: "Bautech Manta Liquida Branco - 4 Kg",
         valor: 64.63,
      },
      {
         codigo: "6037",
         nome: "Bautech Manta Liquida Branco - 12 Kg",
         valor: 168.61,
      },
      {
         codigo: "22961",
         nome: "Bautech Manta Liquida Incolor - 8 Kg",
         valor: 312.82,
      },
      {
         codigo: "23122",
         nome: "Bautech Manta Liquida Incolor - 900 Ml",
         valor: 61.51,
      },
      {
         codigo: "6050",
         nome: "Bautech Manta Liquida Transparente - 3,5 Kg",
         valor: 334.18,
      },
      { codigo: "21952", nome: "Bautech Massa Acrilica - 25 Kg", valor: 80.15 },
      {
         codigo: "18628",
         nome: "Bautech Massa Acrilica - 5,8 Kg",
         valor: 21.15,
      },
      { codigo: "16663", nome: "Bautech Massa Corrida - 25 Kg", valor: 53.89 },
      { codigo: "9947", nome: "Bautech Massa Corrida - 5,8 Kg", valor: 14.23 },
      {
         codigo: "19918",
         nome: "Bautech Massa Regularizadora Rapfinish - 4 Kg",
         valor: 203.34,
      },
      { codigo: "19350", nome: "Bautech Mega Manta Pu - 12 Kg", valor: 671.83 },
      {
         codigo: "14604",
         nome: "Bautech Mega Poliureia 90 Shore - 12 Kg",
         valor: 1259.87,
      },
      {
         codigo: "18906",
         nome: "Bautech Membrana Impermeavel Preta - 12 L",
         valor: 170.0,
      },
      {
         codigo: "18907",
         nome: "Bautech Membrana Impermeavel Preta - 3,6 L",
         valor: 54.76,
      },
      {
         codigo: "19783",
         nome: "Bautech Membrana Preta - 200 L",
         valor: 2600.8,
      },
      { codigo: "21672", nome: "Bautech Nivelmix Base - 20 Kg", valor: 70.5 },
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
         valor: 212.85,
      },
      {
         codigo: "23304",
         nome: "Bautech Pint Embor Imper Branca - 4 Kg",
         valor: 52.8,
      },
      {
         codigo: "19653",
         nome: "Bautech Pintura Asfaltica - 12 L",
         valor: 104.7,
      },
      {
         codigo: "19161",
         nome: "Bautech Pintura Asfaltica - 200 L",
         valor: 1626.96,
      },
      {
         codigo: "19095",
         nome: "Bautech Pintura Asfaltica - 3,6 L",
         valor: 38.24,
      },
      {
         codigo: "23019",
         nome: "Bautech Pintura Litoral Branco - 20 Kg",
         valor: 243.07,
      },
      {
         codigo: "23062",
         nome: "Bautech Pintura Litoral Branco - 4 Kg",
         valor: 71.17,
      },
      { codigo: "21917", nome: "Bautech Piso Acustico - 10 Kg", valor: 201.83 },
      { codigo: "392", nome: "Bautech Plast C - 1 L", valor: 16.13 },
      { codigo: "9661", nome: "Bautech Plast C - 12 L", valor: 52.99 },
      { codigo: "63", nome: "Bautech Plast C - 200 L", valor: 602.12 },
      { codigo: "81", nome: "Bautech Plast C - 3,6 L", valor: 25.36 },
      {
         codigo: "654",
         nome: "Bautech Plastificante 610 - 18 L",
         valor: 309.24,
      },
      {
         codigo: "731",
         nome: "Bautech Plastificante 610 - 200 L",
         valor: 2827.4,
      },
      { codigo: "18957", nome: "Bautech Prego Liquido - 50 G", valor: 4.74 },
      { codigo: "328", nome: "Bautech Primer Ep Branco - 4 Kg", valor: 750.46 },
      { codigo: "34", nome: "Bautech Primer Ep Cinza - 4 Kg", valor: 701.37 },
      { codigo: "204", nome: "Bautech Primer P5 - 5 Kg", valor: 321.32 },
      { codigo: "21686", nome: "Bautech Pu40 Branco - 310 G", valor: 13.14 },
      { codigo: "29451", nome: "Bautech Pu40 Branco - 4 Kg", valor: 136.86 },
      { codigo: "20009", nome: "Bautech Rapflex Pav - 20 Kg", valor: 211.02 },
      {
         codigo: "17389",
         nome: "Bautech Rej Flexivel Branco - 1 Kg",
         valor: 2.8,
      },
      {
         codigo: "29831",
         nome: "Bautech Rejunte Acrilico Branco - 700 G",
         valor: 17.62,
      },
      {
         codigo: "23432",
         nome: "Bautech Repinta Fachada Branca - 20 Kg",
         valor: 258.26,
      },
      {
         codigo: "20529",
         nome: "Bautech Resina Protege Pedras - 3,6 L",
         valor: 59.2,
      },
      {
         codigo: "20526",
         nome: "Bautech Resina Protege Pisos - 3,6 L",
         valor: 59.2,
      },
      {
         codigo: "20527",
         nome: "Bautech Resina Protege Telhas - 3,6 L",
         valor: 59.2,
      },
      {
         codigo: "20528",
         nome: "Bautech Resina Protege Tijolos - 3,6 L",
         valor: 59.2,
      },
      { codigo: "13678", nome: "Bautech Sec Rapido - 12 Kg", valor: 412.32 },
      { codigo: "22458", nome: "Bautech Sela Trinca - 400 G", valor: 15.1 },
      {
         codigo: "15428",
         nome: "Bautech Selador Acrilico - 18 L",
         valor: 67.78,
      },
      {
         codigo: "15237",
         nome: "Bautech Selador Acrilico - 3,6 L",
         valor: 24.09,
      },
      {
         codigo: "19780",
         nome: "Bautech Selador Acrilico Para Gesso - 18 L",
         valor: 84.06,
      },
      {
         codigo: "21682",
         nome: "Bautech Selante Acaba Trinca - 400 G",
         valor: 15.1,
      },
      {
         codigo: "29450",
         nome: "Bautech Selante Acaba Trinca - 5 Kg",
         valor: 97.44,
      },
      { codigo: "20233", nome: "Bautech Selante Acrilico - 1 Kg", valor: 17.7 },
      { codigo: "3456", nome: "Bautech Selante Acrilico - 5 Kg", valor: 81.42 },
      {
         codigo: "19149",
         nome: "Bautech Selante De Silicone - 260 G",
         valor: 9.37,
      },
      {
         codigo: "19253",
         nome: "Bautech Selante De Silicone Branco - 260 G",
         valor: 10.35,
      },
      {
         codigo: "21783",
         nome: "Bautech Selante De Silicone Sache - 260 G",
         valor: 16.1,
      },
      {
         codigo: "21683",
         nome: "Bautech Selante Vidro E Aluminio - 280 G",
         valor: 17.88,
      },
      {
         codigo: "18956",
         nome: "Bautech Silicone Veda E Cola - 50 G",
         valor: 8.58,
      },
      { codigo: "656", nome: "Bautech Stones Oleofugante - 1 L", valor: 99.5 },
      {
         codigo: "23609",
         nome: "Bautech Telhado E Lajes Branco - 20 Kg",
         valor: 250.6,
      },
      {
         codigo: "13694",
         nome: "Bautech Telhado Gelado Branco - 12 Kg",
         valor: 295.63,
      },
      {
         codigo: "16658",
         nome: "Bautech Tinta Economica - 18 L",
         valor: 117.34,
      },
      {
         codigo: "21866",
         nome: "Bautech Tinta Economica - 20 L",
         valor: 126.73,
      },
      {
         codigo: "17657",
         nome: "Bautech Tinta Economica Branco - 3,6 L",
         valor: 34.4,
      },
      {
         codigo: "20412",
         nome: "Bautech Tinta Emborrachada Rep. Exter - 900 Ml",
         valor: 33.34,
      },
      {
         codigo: "19317",
         nome: "Bautech Tinta Epoxi Branco - 3,6 L",
         valor: 333.33,
      },
      {
         codigo: "19814",
         nome: "Bautech Tinta Gesso Branco - 18 L",
         valor: 124.8,
      },
      {
         codigo: "22245",
         nome: "Bautech Tinta Gesso Branco - 3,6 L",
         valor: 32.19,
      },
      {
         codigo: "18916",
         nome: "Bautech Tinta Mineral Branco - 10 Kg",
         valor: 220.87,
      },
      {
         codigo: "18993",
         nome: "Bautech Tinta Piso Branco - 18 L",
         valor: 238.19,
      },
      {
         codigo: "18992",
         nome: "Bautech Tinta Piso Branco - 3,6 L",
         valor: 54.53,
      },
      {
         codigo: "16041",
         nome: "Bautech Tinta Premium Super Lavavel Branco - 18 L",
         valor: 328.8,
      },
      {
         codigo: "16042",
         nome: "Bautech Tinta Premium Super Lavavel Branco - 3,6 L",
         valor: 73.57,
      },
      {
         codigo: "20448",
         nome: "Bautech Tinta Pu Para Piscina - 4 Kg",
         valor: 321.03,
      },
      {
         codigo: "20414",
         nome: "Bautech Tinta Sobre Azulejo, Ceramicas E Por",
         valor: 67.82,
      },
      {
         codigo: "22962",
         nome: "Bautech Tinta Standard Branco - 20 L",
         valor: 208.04,
      },
      {
         codigo: "18901",
         nome: "Bautech Tinta Super Ac E Cob Branca - 18 L",
         valor: 203.9,
      },
      {
         codigo: "18902",
         nome: "Bautech Tinta Super Ac E Cob Branca - 3,6 L",
         valor: 40.85,
      },
      {
         codigo: "6247",
         nome: "Bautech Tinta Teto Banheiro - 3,6 L",
         valor: 74.48,
      },
      {
         codigo: "20413",
         nome: "Bautech Tinta Zero Bolor Contra Formacao De Fungos - 900 Ml",
         valor: 21.89,
      },
      {
         codigo: "13380",
         nome: "Bautech Transparente Fosco - 2,5 Kg",
         valor: 334.82,
      },
      { codigo: "21681", nome: "Bautech Veda Calha - 380 G", valor: 9.17 },
      { codigo: "29449", nome: "Bautech Veda Calha - 5 Kg", valor: 97.44 },
      { codigo: "16094", nome: "Bautech Veda Friso - 12 Kg", valor: 193.98 },
      {
         codigo: "19694",
         nome: "Bautech Verniz Antiderrapante - 1 L",
         valor: 94.06,
      },
      { codigo: "405", nome: "Bautech Verniz Pu - 4 Kg", valor: 539.81 },
      {
         codigo: "20415",
         nome: "Bautech Verniz Pu Alto Brilho P/",
         valor: 92.58,
      },
      { codigo: "5352", nome: "Cimento Branco - 50 Kg", valor: 265.92 },
      { codigo: "671", nome: "Cola Tudo - 150 G", valor: 27.37 },
      { codigo: "116", nome: "Graute Epoxi 211 - 35 Kg", valor: 1025.87 },
      { codigo: "687", nome: "Graute Epoxi - 35 Kg", valor: 817.55 },
      {
         codigo: "3",
         nome: "Graute Epoxi Super Fluido - 35 Kg",
         valor: 1220.69,
      },
      { codigo: "5916", nome: "Graute Sub-Aquatico - 25 Kg", valor: 284.67 },
      {
         codigo: "20451",
         nome: "Kit Reparo Paredes E Trincas - 2,3 Kg",
         valor: 69.82,
      },
      {
         codigo: "21473",
         nome: "Mset Fibra De Polipropileno - 600 G",
         valor: 23.33,
      },
      {
         codigo: "17560",
         nome: "Mset Super Manta Liquida Branca - 12 Kg",
         valor: 143.6,
      },
      { codigo: "21474", nome: "Mset Tela Imp - 1,05m X 50m", valor: 295.15 },
      { codigo: "346", nome: "Primer Epa - 04 Kg", valor: 831.0 },
      {
         codigo: "14417",
         nome: "Rejuntamento Cimenticio Branco - 05 Kg",
         valor: 12.31,
      },
      {
         codigo: "21618",
         nome: "Rejuntamento Epoxi Branco - 1 Kg",
         valor: 43.72,
      },
      {
         codigo: "65",
         nome: "Rejunte Epoxi Anti Ataque Cinza - 02 Kg",
         valor: 119.8,
      },
      {
         codigo: "10181",
         nome: "Resina Acril Multiuso AltoBrilho - 12 L",
         valor: 222.13,
      },
      {
         codigo: "5212",
         nome: "Resina Acril Multiuso AltoBrilho - 3,6 Lt",
         valor: 74.64,
      },
      {
         codigo: "10068",
         nome: "Resina Acril Multiuso Fosca - 12 Lt",
         valor: 164.58,
      },
      {
         codigo: "5213",
         nome: "Resina Acril Multiuso Fosca - 3,6 Lt",
         valor: 57.15,
      },
      {
         codigo: "18254",
         nome: "Resina Bautech Protege Par. E Muros - 12 L",
         valor: 317.53,
      },
      { codigo: "32", nome: "Tinta Ep Cinza - 04 Kg", valor: 895.93 },
      { codigo: "502", nome: "Tinta Pu Branca - 04 Kg", valor: 717.16 },
      { codigo: "23355", nome: "Tela Trica Parede - 45mx4,8cm", valor: 25.5 },
      {
         codigo: "22679",
         nome: "Tela Mm Fibra Vidro M 5x5m Rolo - 1,00mx50m",
         valor: 707.96,
      },
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

      // Verificar se há produtos filtrados
      const produtosFiltrados = document.querySelectorAll(
         "tbody tr[style='display: table-row;']"
      );
      if (produtosFiltrados.length === 0) {
         alert("Você precisa filtrar produtos antes de gerar o pedido.");
         return;
      }

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
            { text: "Produtos", style: "subheader" },
            {
               table: {
                  headerRows: 1,
                  widths: ["auto", "*", "auto", "auto", "auto"],
                  body: [
                     [
                        "Código",
                        "Nome",
                        "Valor Unitário",
                        "Quantidade",
                        "Valor Total",
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
                        },
                     ],
                  ],
               },
            },
            { text: "Observações", style: "subheader" },
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
         },
      };

      // Gerar o PDF
      const nomeArquivoPDF = `Pedido Nº${numeroPedido} ${dataHoraImpressao}.pdf`;
      pdfMake.createPdf(docDefinition).download(nomeArquivoPDF);
   }

   // Adicionar evento de escuta para o botão de geração de pedido
   const btnGerarPedido = document.getElementById("btnGerarPedido");
   btnGerarPedido.addEventListener("click", gerarPDF);

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

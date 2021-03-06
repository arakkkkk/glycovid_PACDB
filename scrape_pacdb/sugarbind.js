function getGlycanlist() {
  var glycan_list = [];
  var glycans = document.querySelectorAll("#layouts > div:nth-child(3) > table > tbody > tr > td:nth-child(4)");
  for (let glycan of glycans) {
    glycan_list.push(glycan.innerText);
  }
  var b = glycan_list.filter(function (x, i, self) {
    return self.indexOf(x) === i;
  });
  console.log(b);
}

function getSpecieslist() {
  // https://sugarbind.expasy.org/agents?n=407
  var species_list = [];
  var species_elems = document.querySelectorAll("#layouts > div:nth-child(3) > table > tbody > tr > td:nth-child(4) > a");
  for (let species_elem of species_elems) {
    species_list.push(species_elem.innerText.replaceAll("*", ""));
  }
  var b = species_list.filter(function (x, i, self) {
    return self.indexOf(x) === i;
  });
  console.log(b);
}

function getGlycanLink() {
  var elements = document.querySelectorAll("#layouts > div:nth-child(3) > table > tbody > tr > td:nth-child(5) > a");
  var url_list = [];
  for (let element of elements) {
    var url = element.getAttribute("href");
    url_list.push(url);
  }
  console.log(url_list);
}

var species_list = [
  "40325",
  "34063",
  "1655",
  "29317",
  "1656",
  "28278",
  "52275",
  "520",
  "139",
  "140",
  "216591",
  "95486",
  "292",
  "441163",
  "28450",
  "197",
  "28080",
  "5476",
  "83558",
  "813",
  "1485",
  "1491",
  "36826",
  "36828",
  "36831",
  "1502",
  "1513",
  "694002",
  "31631",
  "5207",
  "5759",
  "126790",
  "562",
  "1206108",
  "634468",
  "851",
  "727",
  "729",
  "37372",
  "29419",
  "936155",
  "32025",
  "217",
  "210",
  "102618",
  "102619",
  "85963",
  "5037",
  "",
  "197911",
  "197912",
  "11520",
  "427826",
  "197913",
  "11320",
  "222772",
  "114727",
  "1176088",
  "453855",
  "387163",
  "352552",
  "215846",
  "383586",
  "119210",
  "220998",
  "221002",
  "215851",
  "385599",
  "681057",
  "11360",
  "215855",
  "336792",
  "387204",
  "336795",
  "336799",
  "102800",
  "102793",
  "100834",
  "432073",
  "432074",
  "680803",
  "432078",
  "432364",
  "432070",
  "88104",
  "107424",
  "155220",
  "1277916",
  "428669",
  "644788",
  "284218",
  "380919",
  "119220",
  "232432",
  "556751",
  "542933",
  "380299",
  "542881",
  "129781",
  "471851",
  "402473",
  "383604",
  "333224",
  "119214",
  "519082",
  "680693",
  "119218",
  "138805",
  "1342394",
  "102796",
  "97358",
  "680745",
  "97350",
  "130760",
  "354226",
  "97352",
  "145307",
  "397546",
  "106491",
  "385620",
  "11495",
  "380348",
  "573",
  "1582",
  "257314",
  "446",
  "11646",
  "12721",
  "11676",
  "480",
  "2096",
  "2104",
  "485",
  "528354",
  "487",
  "11983",
  "684605",
  "47740",
  "11207",
  "75985",
  "5833",
  "10624",
  "10632",
  "943908",
  "10634",
  "33011",
  "584",
  "287",
  "10891",
  "186938",
  "12730",
  "31605",
  "11216",
  "11191",
  "10912",
  "35333",
  "36439",
  "10934",
  "561309",
  "444184",
  "10923",
  "10969",
  "4932",
  "599",
  "90371",
  "615",
  "622",
  "623",
  "29908",
  "1280",
  "29385",
  "40324",
  "29390",
  "1302",
  "28037",
  "1313",
  "1305",
  "1307",
  "5811",
  "5693",
  "666",
  "1408478",
  "127906",
  "85581",
  "29494",
  "669",
  "632",
];

glycan_list = [
  "G97569KL",
  "G84034JH",
  "G44345UH",
  "G80062GG",
  "G72548RZ",
  "G28566CQ",
  "G39011KA",
  "G24034CH",
  "G89659QV",
  "G00047MO",
  "G00061MO",
  "G03067VG",
  "G12460DL",
  "G30207PZ",
  "G78260AJ",
  "G86123DJ",
  "G20044TD",
  "G08855PJ",
  "G57710SU",
  "G45215IJ",
  "G50321QR",
  "G12068BR",
  "G45827GY",
  "G02880JU",
  "G64581RP",
  "G17108EX",
  "G20624LQ",
  "G78074HX",
  "G90562PB",
  "G96401FK",
  "G87727XV",
  "G16194TN",
  "G65191ST",
  "G51331BY",
  "G94938PL",
  "G93779QZ",
  "G28330DZ",
  "G56299XO",
  "G37830TX",
  "G61418DU",
  "G32417JV",
  "G46677TE",
  "G23581GL",
  "G71142DF",
  "G48059CD",
  "G00998NI",
  "G00049MO",
  "G47395XN",
  "G49963IQ",
  "G82858KU",
  "G03277YI",
  "G08079IN",
  "G61298NX",
  "G96614JE",
  "G32254QI",
  "G72506RN",
  "G95034OI",
  "G50850NI",
  "G79389NT",
  "G09376MR",
  "G03499BP",
  "G20420WT",
  "G70323CJ",
  "G11485ID",
  "G82576YO",
  "G26123AX",
  "G50899UD",
  "G98173LG",
  "G10203DW",
  "G22689CV",
  "G99745QX",
  "G09552LA",
  "G47812NS",
  "G00050MO",
  "G80722US",
  "G99053DY",
  "G39211DH",
  "G88796WA",
  "G66086EX",
  "G48236KP",
  "G62971NJ",
  "G01187XC",
  "G58612ZQ",
  "G65507FU",
  "G17780OR",
  "G01767JJ",
  "G60859DF",
  "G19336PT",
  "G37184KW",
  "G62593IS",
  "G76297JC",
  "G84224TW",
  "G79536OW",
  "G32969VW",
  "G21938SG",
  "G14300ZJ",
  "G21066IE",
  "G04616ST",
  "G83212YI",
  "G55205ZV",
  "G97932OH",
  "G65889KE",
  "G83513YI",
  "G63238VS",
  "G58507AZ",
  "G87245HS",
  "G07982RO",
  "G00711NG",
  "G03506YN",
  "G21856LC",
  "G48600JD",
  "G60395SO",
  "G40183QN",
  "G51379UR",
  "G72565QB",
  "G91237TK",
  "G29313LW",
  "G48558GR",
  "G23041XK",
  "G46776WR",
  "G51699SI",
  "G98544DH",
  "G04715SK",
  "G87315SO",
  "G05357CB",
  "G00065MO",
  "G67988RO",
  "G04165ZA",
  "G90889KG",
  "G00059MO",
  "G07490EK",
  "G26036PN",
  "G00054MO",
  "G02657AK",
  "G88393MK",
  "G72494BI",
  "G55153IW",
  "G74621DY",
  "G56516VH",
  "G54721WC",
  "G06239NA",
  "G33224VN",
  "G62763GO",
  "G75789AR",
  "G71485PH",
  "G55958KV",
  "G28528AG",
  "G81533KY",
  "G58896AZ",
  "G27025MB",
  "G18625KA",
  "G72692DY",
  "G01296LJ",
  "G03777BI",
  "G56478LD",
  "G00407UJ",
  "G07169WN",
  "G39064VB",
  "G37563FN",
  "G77824XV",
  "G41709CA",
  "G15021LG",
  "G59168YE",
  "G91649BT",
  "G60645OK",
  "G98465JN",
  "G57920AK",
  "G68158BT",
  "G91326YS",
  "G06000DZ",
  "G59508TM",
  "G78436BB",
  "G60011XD",
];

var glycan_list = [
  "NeuGc(a2-3)Gal(b1-4)GlcNAc",
  "NeuAc(a2-3)(2F)Gal(b1-4)GlcNAc",
  "NeuAc(a2-3)(2F)Gal(b1-3)GlcNAc",
  "NeuAc(a2-3)Gal(b1-4)GlcNAc",
  "NeuAc(a2-3)Gal(b1-4)GlcNAc(b",
  "NeuAc(a2-3)Gal(b1-3)GlcNAc",
  "NeuAc(a2-3)Gal(b1-3)[HSO3(-6)]GlcNAc(b",
  "NeuAc(a2-3)Gal(b1-4)[Fuc(a1-3)][HSO3(-6)]GlcNAc(b",
  "NeuAc(a2-6)Gal(b1-4)GlcNAc",
  "GalNAc(a1-3)[Fuc(a1-2)]Gal(b1-3)[Fuc(a1-4)]GlcNAc",
  "GalNAc(a1-3)[Fuc(a1-2)]Gal(b1-3)[Fuc(a1-4)]GlcNAc(b1-3)Gal",
  "Gal(a1-3)Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "GalNAc(a1-3)[Fuc(a1-2)]Gal(b1-3)GlcNAc",
  "Fuc(a1-2)Gal(b1-3)GlcNAc",
  "Gal(a1-3)[Fuc(a1-2)]Gal(b1-3)[Fuc(a1-4)]GlcNAc",
  "Gal(a1-3)[Fuc(a1-2)]Gal(b1-3)[Fuc(a1-4)]GlcNAc(b1-3)Gal",
  "GalNAc(a1-3)[Fuc(a1-2)]Gal(b1-4)GlcNAc",
  "GlcNAc(b1-4)GlcNAc",
  "Gal(b1-3)GalNAc(b1-4)[NeuAc(a2-8)NeuAc(a2-3)]Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-3)GalNAc(b1-4)[NeuAc(a2-3)]Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-3)[NeuAc(a2-6)]GalNAc(b1-3)Gal(a1-4)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-8)NeuAc(2-3)",
  "Fuc(a1-2)Gal(b1-3)GalNAc(b1-4)Gal(b1-4)Glc(b1-1)",
  "Fuc",
  "Gal(b1-3)GalNAc(b1-3)Gal(a1-4)Gal(b1-4)Glc(b1-1)",
  "Gal(a1-4)Gal",
  "Gal(a1-4)Gal(b1-1)",
  "Gal",
  "Gal(b",
  "Gal(b1",
  "Gal(b1-1)",
  "Gal(b1-4)GalNAc(b1-4)Gal(b1-4)Glc(b1-1)",
  "Gal(b1-3)GalNAc(b1-4)Gal(b1-4)Glc(b1-1)",
  "GalNAc(b1-4)Gal(b1-4)Glc(b1-1)",
  "Gal(b1-3)GalNAc(b1-4)[SU-3]Gal(b1-4)Glc(b1-1)",
  "GalNAc(b1-3)Gal(a1-4)Gal(b1-4)Glc(b1-1)",
  "Gal(b1-3)GlcNAc",
  "Gal(a1-4)Gal(b1-4)Glc(b1-1)",
  "Glc",
  "Glc(b1-1)",
  "Fuc(a1-2)Gal(b1-3)[Fuc(a1-4)]GlcNAc(b1-3)Gal",
  "NeuAc(a2-3)Gal(b1-4)GlcNAc(b1-6)[NeuAc(a2-3)Gal(b1-4)GlcNAc(b1-3)]Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "Gal(b1-3)GalNAc(b1-4)[NeuGc(a2-3)]Gal(b1-4)Glc(b1-1)",
  "Gal(a1-3)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-6)Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc",
  "Gal(b1-4)Glc(b1-1)",
  "Gal(a1-4)Glc(b1-1)",
  "Gal(b1-3)GlcNAc(b1-3)Gal(b1-4)Glc",
  "Gal(b1-3)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "Gal(b1-3)GalNAc",
  "NeuAc(a2-3)",
  "Gal(b1-3)[Fuc(a1-4)]GlcNAc",
  "Gal(b1-3)[Fuc(a1-4)]GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "Fuc(a1-2)Gal(b1-3)[Fuc(a1-4)]GlcNAc",
  "Fuc(a1-2)Gal(b1-3)[Fuc(a1-4)]GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "Gal(b1-4)[Fuc(a1-3)]GlcNAc",
  "Gal(b1-3)[Fuc(a1-3)]GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "Fuc(a1-2)Gal(b1-4)[Fuc(a1-3)]GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "Fuc(a1-2)Gal(b1-4)[Fuc(a1-3)]GlcNAc",
  "Man(a)",
  "Man",
  "NeuAc(a2-3)Gal(b1-4)Glc(b1-1)",
  "Gal(b1-3)GalNAc(b1-4)[NeuAc(a2-3)]Gal(b1-4)Glc(b1-1)",
  "GalNAc(b",
  "GalNAc",
  "GlcNAc",
  "NeuAc(a2-8)",
  "NeuAc",
  "Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc",
  "Man(a1-3)[Man(a1-6)]Man(b1-4)GlcNAc(b1-4)GlcNAc",
  "Gal(b1-3)GlcNAc(b1-3)Gal",
  "NeuAc(a2-3)Gal(b1-3)GalNAc(b1-3)Gal(a1-4)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-3)[Fuc(a1-4)]GlcNAc(b1-3)Gal(b1-4)Glc",
  "NeuAc(a2-3)Gal(b1-3)[Fuc(a1-4)]GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-3)GlcNAc(b",
  "NeuAc(a2-3)Gal(b1-4)[Fuc(a1-3)]GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-4)[Fuc(a1-3)]GlcNAc(b",
  "NeuAc(a2-3)Gal(b1-4)[Fuc(a1-3)]GlcNAc(b1-3)Gal(b1-4)[Fuc(a1-3)]GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-4)Glc",
  "NeuAc(a2-3)Gal(b1-4)[Fuc(a1-3][HSO3(-6)]GlcNAc(b1-3)[HSO3(-6)]Gal(b1-4)Glc(b1-1)",
  "Gal(b1-4)[NeuAc(a2-6)]GlcNAc(b1-3)Gal(b1-4)Glc",
  "NeuAc(a2-6)Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-4)[HSO3(-6)]GlcNAc(b",
  "NeuAc(a2-3)Gal(b1-3)GalNAc(b1-4)[NeuAc(a2-8)NeuAc(a2-3)]Gal(b1-4)Glc(b1-1)",
  "Man(a1-3)Man",
  "Man(a1-6)Man",
  "Man(a1-2)Man",
  "GalNAc(b1-4)[NeuAc(a2-8)NeuAc(a2-3)]Gal(b1-4)Glc(b1-1)",
  "GalNAc(a1-3)[Fuc(a1-2)]Gal(b1-3)GalNAc(a1-3)[Fuc(a1-2)]GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-3)GlcNAc(b1-3)Gal(b1-4)Glc",
  "NeuAc(a2-6)Gal",
  "SO4(-3)Gal(b1-1)",
  "SO4(-3)Gal(b1-4)Glc(b1-1)",
  "Gal(a1-6)Gal",
  "Gal(a1-4)Gal(b1-4)Glc(b",
  "Gal(b1-3)GlcNAc(b1-3)Gal(b1-4)[Fuc(a1-3)]GlcNAc",
  "Gal(a1-4)Gal(b1-1)Glc",
  "NeuAc(a2-3)Gal(b1-3)[NeuAc(a2-6)]GalNAc",
  "Gal(b1-3)Gal(b1-4)GlcNAc(b1-6)[NeuGc(a2-3)Gal(b1-4)GlcNAc(b1-3)]Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-3)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "GalNAc(b1-3)Gal(a1-3)Gal(b1-4)Glc(b1-1)",
  "GalNAc(b1-3)GalNAc(b1-3)Gal(a1-4)Gal(b1-4)Glc(b1-1)",
  "GalNAc(b1-4)Gal",
  "GalNAc(b1-3)[Gal(a1-3)]Gal(a1-4)Gal(b1-4)Glc(b1-1)",
  "NeuGc(a2-3)Gal(b1-4)Glc(b1-1)",
  "Gal(b1-4)GlcNAc",
  "Gal(a1-4)Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-8)NeuAc(a2-3)Gal(b1-3)GalNAc(b1-4)[NeuAc(a2-8)NeuAc(a2-3)]Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-3)GalNAc",
  "Gal(a1-3)[Fuc(a1-2)]Gal(b1-3)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "Gal(a1-3)[Fuc(a1-2)]Gal",
  "Gal(a1-3)Gal(a1-3)Gal(b1-4)Glc(b1-1)",
  "GalNAc(a1-3)GalNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "GalNAc(a1-3)Gal(b1-3)GalNAc(b1-3)Gal(a1-4)Gal(b1-4)Glc(b1-1)",
  "Fuc(a1-2)Gal(b1-3)GalNAc(b1-3)Gal(a1-4)Gal(b1-4)Glc(b1-1)",
  "NeuGc(a2-3)Gal(b1-4)Glc",
  "Gal(b1-4)[Fuc(a1-3)]GlcNAc(b1-6)[Gal(b1-3)]GalNAc(b1-3)Gal(a1-4)Gal(b1-4)Glc(b1-1)",
  "GalNAc(a1-3)GalNAc(b1-3)Gal(a1-4)Gal(b1-4)",
  "Gal(b1-4)GlcNAc(b1-6)[Gal(b1-3)]GalNAc(b1-3)Gal(a1-4)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-4)GalNAc",
  "NeuAc(a2-8)NeuAc(a2-3)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-4)GlcNAc(b1-2)Man(a1-3)[NeuAc(a2-3)Gal(b1-4)GlcNAc(b1-2)Man(a1-6)]Man(b1-4)GlcNAc(b1-4)[Fuc(a1-6)]GlcNAc",
  "Gal(a1-3)[Fuc(a1-2)]Gal(b1-4)GlcNAc(b1-6)[NeuAc(a2-3)Gal(b1-4)GlcNAc(b1-3)]Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "Man(a1-3)[Man(a1-6)]Man(a1-6)[Man(a1-2)Man(a1-3)]Man",
  "SO3Gal(b1-3)GalNAc(b1-4)Gal(b1-4)Glc(b1-1)",
  "Fuc(a1-2)Gal(b1-3)[Fuc(a1-4)]Gal",
  "NeuAc(a2-6)Gal(b1-3)GlcNAc(b1-4)Gal(b1-4)Glc(b1-1)",
  "Gal(a1-3)Gal(b1-4)GlcNAc(b1-6)[NeuAc(a2-3)Gal(b1-4)Glc(b1-3)]Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "GalNAc(b1-4)Gal(b1-4)Glc",
  "SO4(-6)Gal(b1-1)",
  "GalNAc(a1-3)[Fuc(a1-2)]Gal",
  "Man(a1-3)[Man(1-6)]Man",
  "Fuc(a1-2)Gal(b1-3)GlcNAc(b1-3)Gal",
  "SO3Gal(b1-1)",
  "Gal(a1-3)[Fuc(a1-2)]Gal(b1-3)GalNAc(b1-4)[NeuAc(a2-3)]Gal(b1-4)Glc(b1-1)",
  "Gal(b1-4)GlcNAc(b1-6)[NeuAc(a2-6)Gal(b1-4)GlcNAc(b1-3)]Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "Gal(b1-3)",
  "Gal(b1-4)",
  "Gal(b1-3)GalNAc(b1-4)Gal(b1-4)Glc",
  "GlcNAc(b1-3)Gal",
  "Gal(a1-4)Gal(b1-4)GlcNAc",
  "Gal(a1-4)Gal(b1-4)Glc",
  "NeuAc(a2-3)Gal(b1-4)GlcNAc(b1-4)[NeuAc(a2-6)Gal(b1-4)GlcNAc(b1-2)]Man(a1-3)[NeuAc(a2-3)Gal(b1-4)GlcNAc(b1-2)Man(a1-6)]Man(b1-4)GlcNAc(b1-4)GlcNAc",
  "Gal(b1-4)GlcNAc(b1-2)Man(a1-3)[Gal(b1-4)GlcNAc(b1-2)Man(a1-6)]Man(b1-4)GlcNAc(b1-4)[Fuc(a1-6)]GlcNAc",
  "Gal(b1-3)GalNAc(b1-4)[NeuAc(a2-3)]Gal(b1-3)GalNAc(b1-4)Gal(b1-4)Glc(b1-1)",
  "Gal(b1-3)[NeuAc(a2-6)]GalNAc(b1-4)Gal(b1-4)Glc(b1-1)",
  "GalNAc(a1-3)[Fuc(a1-2)]Gal(b1-3)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "GalNAc(a1-3)[Fuc(a1-2)]Gal(b1-3)GalNAc(b1-3)Gal(a1-4)Gal(b1-4)Glc(b1-1)",
  "Gal(a1-4)Gal(b",
  "GalNAc(a1-3)GalNAc(b1-3)Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "SO3(-3)Gal(b1-1)",
  "Fuc(a1-2)Gal(b1-4)GlcNAc",
  "NeuAc(a2-3)Gal(b1-3)GalNAc(b1-4)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-4)",
  "GlcNAc(b1-3)Gal(b1-4)Glc",
  "Fuc(a1-2)Gal",
  "GalNAc(b1-4)[NeuGc(a2-3)]Gal(B",
  "Man(a1-2)Man(a1-6)Man(a1-6)",
  "Gal(b1-4)Glc",
  "GalNAc(b1-4)[NeuAc(a2-3)]Gal(b1-4)Glc(b1-1)",
  "Fuc(a1-2)Gal(b1-3)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "NeuGc(a2-3)[GalNAc(b1-4)]Gal(b1-4)Glc(b1-1)",
  "GalNAc(a1-3)[Fuc(a1-2)]Gal(b1-3)GlcNAc(b1-3)Gal(b1-3)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "Man(a1-3)[Man(a1-6)]Man(a1-6)Man(a1-3)Man",
  "Man(a1-3)Man(a1-4)GlcNAc",
  "Man(high)",
  "Gal(b1-3)[Fuc(a1-4)]GlcNAc(b1-3)Gal(b1-4)Glc",
  "GalNAc(a1-3)GalNAc(b1-3)Gal(a1-4)Gal(b1-4)Glc(b1-1)",
  "Gal(b1-3)GalNAc(b1-4)[NeuAc(a2-3)]Gal",
  "Gal(a1-3)Gal(a1-4)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)[Fuc(a1-3)]GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)[Gal(b1-4)]GlcNAc(b1-3)Gal(b1-4)GlcNAc",
  "NeuAc(a2-6)Gal(b1-3)GlcNAc(b1-3)Gal(b1-4)Glc",
  "SO4(-3)Gal(b1-3)",
  "GalNAc(b1-3)Gal",
  "NeuAc(a2-3)Gal",
  "Gal(a1-3)Gal(b1-4)GlcNAc(b",
  "NeuGc(a2-3)Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "Gal(b1-4)GalNAc",
  "Gal(a1-3)[Fuc(a1-2)]Gal(b1-3)[Fuc(a1-4)]GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "GalNAc(a1-3)[Fuc(a1-2)]Gal(b1-3)[Fuc(a1-4)]GlcNAc(b1-3)Gal(b1-4)Glc(b1-1)",
  "NeuAc(a2-3)Gal(b",
  "Man(a1-3)Man(a1-6)Man",
  "SO3(-3)Gal(b1-4)Glc(b1-1)",
  "Gal(a1-3)Gal",
];

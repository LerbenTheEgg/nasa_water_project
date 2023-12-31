var waterBodies = [
  {
    "name": "Atlantic Ocean",
    "latitude": 14.5994,
    "longitude": -28.6731
  },
  {
    "name": "Pacific Ocean",
    "latitude": -8.7832,
    "longitude": -124.5085
  },
  {
  "name": "Jänisjoki,Ruskeakoski ",
  "latitude": 62.42666666666666,
  "longitude": 30.445
  },
  {
  "name": "Hiitolanjoki,Juankoski ",
  "latitude": 61.43583333333333,
  "longitude": 29.345555555555553
  },
  {
  "name": "Sorsavesi-Sorsakoski ",
  "latitude": 62.28361111111111,
  "longitude": 27.89388888888889
  },
  {
  "name": "Kuolimojär.Partakos+Kärnänko. ",
  "latitude": 61.271388888888886,
  "longitude": 27.705277777777777
  },
  {
  "name": "Kuvansinjoki,Osmanjärvi-L ",
  "latitude": 62.28361111111111,
  "longitude": 27.89388888888889
  },
  {
  "name": "Valtimonjoki,Kuokkastenkoski ",
  "latitude": 63.54083333333333,
  "longitude": 28.95722222222222
  },
  {
  "name": "Saramonjoki,Roukkajankoski ",
  "latitude": 63.61944444444445,
  "longitude": 29.065833333333334
  },
  {
  "name": "Salahminjoki ",
  "latitude": 63.801944444444445,
  "longitude": 26.936666666666667
  },
  {
  "name": "Sonkajärvi,Aittokoski ",
  "latitude": 63.69944444444444,
  "longitude": 27.425833333333333
  },
  {
  "name": "Korpijärvi-Luusua ",
  "latitude": 63.3725,
  "longitude": 27.991944444444446
  },
  {
  "name": "Tiilikanjoki ",
  "latitude": 63.43333333333333,
  "longitude": 27.999722222222225
  },
  {
  "name": "Keyritynjoki ",
  "latitude": 63.27472222222222,
  "longitude": 28.461111111111112
  },
  {
  "name": "Alaluostanjärvi-Luusua ",
  "latitude": 63.274166666666666,
  "longitude": 28.461666666666666
  },
  {
  "name": "Höytiäinen,Rauanjoki ",
  "latitude": 62.91166666666666,
  "longitude": 29.44638888888889
  },
  {
  "name": "Koitajoki,Möhkö ",
  "latitude": 62.63972222222222,
  "longitude": 31.290555555555557
  },
  {
  "name": "Saimaa lähialueineen",
  "latitude": 61.16638888888889,
  "longitude": 28.776666666666667
  },
  {
  "name": "Juankoski-Lastukoski ",
  "latitude": 63.0675,
  "longitude": 28.34361111111111
  },
  {
  "name": "Kallavesi-Konnus+Karvio ",
  "latitude": 62.30333333333333,
  "longitude": 27.914166666666667
  },
  {
  "name": "Lieksanjoki,Ruunaa ",
  "latitude": 63.34166666666667,
  "longitude": 30.4775
  },
  {
  "name": "Nerkoonjärvi-Nerkoonvirta ",
  "latitude": 63.22,
  "longitude": 27.206666666666667
  },
  {
  "name": "Koitajoki,Siikakoski,Pamilo ",
  "latitude": 62.85916666666667,
  "longitude": 30.232499999999998
  },
  {
  "name": "Saimaa-Imatra ",
  "latitude": 61.16638888888889,
  "longitude": 28.776666666666667
  },
  {
  "name": "Pielisjoki,Jakokoski",
  "latitude": 62.740833333333335,
  "longitude": 30.040000000000003
  },
  {
  "name": "Pielinen ",
  "latitude": 62.907222222222224,
  "longitude": 30.230277777777776
  },
  {
  "name": "Lieksanjoki,Höpöttäjänvirta ",
  "latitude": 63.308611111111105,
  "longitude": 30.029166666666665
  },
  {
  "name": "Jongunjoki,Viitakoski ",
  "latitude": 63.467777777777776,
  "longitude": 30.098888888888887
  },
  {
  "name": "Onkivesi-Viannonkoski ",
  "latitude": 63.22,
  "longitude": 27.206666666666667
  },
  {
  "name": "Vuotjärvi-Juankoski ",
  "latitude": 63.0675,
  "longitude": 28.34361111111111
  },
  {
  "name": "Syväri-Lastukoski ",
  "latitude": 63.20305555555556,
  "longitude": 28.281666666666666
  },
  {
  "name": "Juojärvi-Palokki ",
  "latitude": 62.5625,
  "longitude": 28.6275
  },
  {
  "name": "Höytiäinen-Puntarikoski ",
  "latitude": 62.678888888888885,
  "longitude": 29.654166666666665
  },
  {
  "name": "Koitajoki,Lylykoski ",
  "latitude": 62.76777777777777,
  "longitude": 30.701666666666664
  },
  {
  "name": "Koitere-Hiiskoski ",
  "latitude": 62.8525,
  "longitude": 30.64
  },
  {
  "name": "Atronkoski ",
  "latitude": 63.3725,
  "longitude": 27.991944444444446
  },
  {
  "name": "Virojoki,Salmensilta ",
  "latitude": 60.57833333333333,
  "longitude": 27.721666666666664
  },
  {
  "name": "Elämänjärvi ",
  "latitude": 63.38444444444444,
  "longitude": 25.585555555555555
  },
  {
  "name": "Jyväsjoki ",
  "latitude": 62.24388888888889,
  "longitude": 25.7675
  },
  {
  "name": "Saarij+Viitasaar+Rautalammin r.",
  "latitude": 62.59805555555556,
  "longitude": 25.738055555555558
  },
  {
  "name": "Pernoo-Kalkkinen ",
  "latitude": 60.69888888888889,
  "longitude": 26.818055555555556
  },
  {
  "name": "Päijänne lähialueineen",
  "latitude": 61.28333333333333,
  "longitude": 25.598333333333333
  },
  {
  "name": "Kymijoki,Keltti ",
  "latitude": 60.45611111111111,
  "longitude": 26.577222222222222
  },
  {
  "name": "Arrajärvi-Kaurakoski ",
  "latitude": 60.93833333333333,
  "longitude": 26.601111111111113
  },
  {
  "name": "Paaskoski,Jyräänkoski ",
  "latitude": 60.901944444444446,
  "longitude": 26.815
  },
  {
  "name": "Kuhnamojärvi-Kapeekoski ",
  "latitude": 62.45777777777778,
  "longitude": 25.9425
  },
  {
  "name": "Kynsivesi-Simunankoski ",
  "latitude": 62.386944444444445,
  "longitude": 26.058611111111112
  },
  {
  "name": "Kivijär.-Potmonkos.+Kämärinjo ",
  "latitude": 63.04694444444444,
  "longitude": 25.5325
  },
  {
  "name": "Jämsänjoki-Patalankoski ",
  "latitude": 61.81777777777778,
  "longitude": 25.26638888888889
  },
  {
  "name": "Saarijärvi-Roikolankoski ",
  "latitude": 62.62555555555556,
  "longitude": 25.639444444444443
  },
  {
  "name": "Kalmarinjärvi-Kalmukoski ",
  "latitude": 62.695277777777775,
  "longitude": 25.114722222222223
  },
  {
  "name": "Joutsjärvi-Ammalankoski ",
  "latitude": 61.450833333333335,
  "longitude": 25.72722222222222
  },
  {
  "name": "Vuokkijärvi,Siikakoski ",
  "latitude": 61.01222222222222,
  "longitude": 26.591666666666665
  },
  {
  "name": "Pernoon haarapaikka",
  "latitude": 60.45611111111111,
  "longitude": 26.577222222222222
  },
  {
  "name": "Konnevesi-Vuolenkoski ",
  "latitude": 61.07944444444445,
  "longitude": 26.185833333333335
  },
  {
  "name": "Ala-Rääveli-Sulkavankoski ",
  "latitude": 61.254444444444445,
  "longitude": 26.09861111111111
  },
  {
  "name": "Päijänne-Kalkkinen ",
  "latitude": 61.28333333333333,
  "longitude": 25.598333333333333
  },
  {
  "name": "Muurajärvi,Muurakoski ",
  "latitude": 62.128055555555555,
  "longitude": 25.675833333333333
  },
  {
  "name": "Leppävesi-Haapakoski ",
  "latitude": 62.244166666666665,
  "longitude": 25.890277777777776
  },
  {
  "name": "Vanginvesi-Kärkkäälänkoski ",
  "latitude": 62.53972222222222,
  "longitude": 26.23777777777778
  },
  {
  "name": "Keitele-Äänekoski+Mämminkoski ",
  "latitude": 62.59805555555556,
  "longitude": 25.738055555555558
  },
  {
  "name": "Vuosjärvi-Huopanankoski ",
  "latitude": 63.04694444444444,
  "longitude": 25.5325
  },
  {
  "name": "Kolimajärvi-Kellankoski ",
  "latitude": 63.16777777777777,
  "longitude": 25.939722222222223
  },
  {
  "name": "Salosjärvi-Kalmavirta ",
  "latitude": 62.044444444444444,
  "longitude": 25.005555555555556
  },
  {
  "name": "Petäjävesi-Hankakoski ",
  "latitude": 62.20583333333334,
  "longitude": 25.189444444444444
  },
  {
  "name": "Kiimasjärvi-Kiimaskoski ",
  "latitude": 62.62555555555556,
  "longitude": 25.639444444444443
  },
  {
  "name": "Pääjärvi-Kouheroisenkoski ",
  "latitude": 62.78611111111111,
  "longitude": 24.849722222222223
  },
  {
  "name": "Konnevesi-Siikakoski ",
  "latitude": 62.61833333333333,
  "longitude": 26.34638888888889
  },
  {
  "name": "Nilakka,Äyskoski ",
  "latitude": 62.97138888888889,
  "longitude": 26.72611111111111
  },
  {
  "name": "Koivujoki ",
  "latitude": 63.370555555555555,
  "longitude": 26.42888888888889
  },
  {
  "name": "Jääsjärvi-Tainionvirta ",
  "latitude": 61.566111111111105,
  "longitude": 26.046944444444446
  },
  {
  "name": "Puolakka+Jaala ",
  "latitude": 61.01222222222222,
  "longitude": 26.591666666666665
  },
  {
  "name": "Vahvajärvi-Ripatinkoski ",
  "latitude": 61.60277777777778,
  "longitude": 26.65972222222222
  },
  {
  "name": "Rauhajärvi-Läsäkoski ",
  "latitude": 61.90888888888889,
  "longitude": 26.919722222222223
  },
  {
  "name": "Koskenkylänjoki,Pyhäjärvi-Lu ",
  "latitude": 60.49888888888889,
  "longitude": 25.94472222222222
  },
  {
  "name": "Porvoonjoki,Vakkola ",
  "latitude": 60.471944444444446,
  "longitude": 25.608611111111113
  },
  {
  "name": "Drägsby,Ridankoski ",
  "latitude": 60.334722222222226,
  "longitude": 25.540000000000003
  },
  {
  "name": "Vekkoski ",
  "latitude": 60.334722222222226,
  "longitude": 25.540000000000003
  },
  {
  "name": "Kytäjoki ",
  "latitude": 60.61472222222223,
  "longitude": 24.797222222222224
  },
  {
  "name": "Tuusulanjoki",
  "latitude": 60.333333333333336,
  "longitude": 24.897222222222222
  },
  {
  "name": "Myllymäki ",
  "latitude": 60.21611111111111,
  "longitude": 24.983888888888888
  },
  {
  "name": "Keravanjoki,Hanala ",
  "latitude": 60.263888888888886,
  "longitude": 24.976388888888888
  },
  {
  "name": "Oulunkylä ",
  "latitude": 60.21611111111111,
  "longitude": 24.983888888888888
  },
  {
  "name": "Huhmarjärvi,Palojärvenkoski ",
  "latitude": 60.168055555555554,
  "longitude": 24.302777777777777
  },
  {
  "name": "Tjusträsk-Siuntionkoski ",
  "latitude": 60.168055555555554,
  "longitude": 24.302777777777777
  },
  {
  "name": "Peltokoski ",
  "latitude": 60.15972222222222,
  "longitude": 23.843055555555555
  },
  {
  "name": "Hiidenvesi-Luusua ",
  "latitude": 60.333333333333336,
  "longitude": 24.068055555555556
  },
  {
  "name": "Kiskonjoki,Koski ",
  "latitude": 60.18,
  "longitude": 23.29388888888889
  },
  {
  "name": "Kaukolankoski ",
  "latitude": 60.37,
  "longitude": 23.106944444444444
  },
  {
  "name": "Juvankoski ",
  "latitude": 60.574444444444445,
  "longitude": 22.751944444444444
  },
  {
  "name": "Hyppöistenkoski ",
  "latitude": 60.43277777777777,
  "longitude": 22.232499999999998
  },
  {
  "name": "Halistenkoski ",
  "latitude": 60.46527777777778,
  "longitude": 22.289722222222224
  },
  {
  "name": "Puttakoski ",
  "latitude": 60.841944444444444,
  "longitude": 21.50583333333333
  },
  {
  "name": "Lapinjoki,Ylinenkoski ",
  "latitude": 61.22027777777778,
  "longitude": 21.53111111111111
  },
  {
  "name": "Yläneenjoki",
  "latitude": 60.901111111111106,
  "longitude": 22.375833333333333
  },
  {
  "name": "Suutelankoski ",
  "latitude": 61.227222222222224,
  "longitude": 21.611944444444447
  },
  {
  "name": "Kauttuankoski ",
  "latitude": 61.10944444444445,
  "longitude": 22.16444444444444
  },
  {
  "name": "Leineperinkoski ",
  "latitude": 61.49027777777778,
  "longitude": 21.86388888888889
  },
  {
  "name": "Pääjärvi,Jokelankoski ",
  "latitude": 61.026944444444446,
  "longitude": 25.153333333333332
  },
  {
  "name": "Hyvikkälänjoki ",
  "latitude": 60.87638888888889,
  "longitude": 24.60388888888889
  },
  {
  "name": "Ähtäri+Pihlajavesi+Keuruun r.",
  "latitude": 62.26166666666666,
  "longitude": 23.732777777777777
  },
  {
  "name": "Nokialta Harjavaltaan ",
  "latitude": 61.33833333333334,
  "longitude": 22.116388888888892
  },
  {
  "name": "Roine ",
  "latitude": 61.264722222222225,
  "longitude": 24.034722222222225
  },
  {
  "name": "Kauvatsanjoki,Sääksjärvi-L ",
  "latitude": 61.24916666666667,
  "longitude": 22.569444444444443
  },
  {
  "name": "Lepaa ",
  "latitude": 61.18138888888889,
  "longitude": 24.044722222222223
  },
  {
  "name": "Kahilanjärvi-Luusua ",
  "latitude": 62.2675,
  "longitude": 23.72138888888889
  },
  {
  "name": "Hankaveden Luusua ",
  "latitude": 62.51638888888889,
  "longitude": 24.15361111111111
  },
  {
  "name": "Pihlajavesi-Pihlajakoski ",
  "latitude": 62.20111111111111,
  "longitude": 23.954722222222223
  },
  {
  "name": "Linnajärvi,Rännärinkoski ",
  "latitude": 61.86416666666667,
  "longitude": 23.010277777777777
  },
  {
  "name": "Puujoki ",
  "latitude": 60.86055555555556,
  "longitude": 25.043055555555558
  },
  {
  "name": "Maurialankoski ",
  "latitude": 61.14055555555556,
  "longitude": 22.699444444444445
  },
  {
  "name": "Turpoonjoki,Liesjärvi-Luusua ",
  "latitude": 60.76305555555555,
  "longitude": 23.91
  },
  {
  "name": "Pori ",
  "latitude": 61.55027777777777,
  "longitude": 21.711944444444445
  },
  {
  "name": "Harjavalta ",
  "latitude": 61.33833333333334,
  "longitude": 22.116388888888892
  },
  {
  "name": "Vammaskoski ",
  "latitude": 61.328611111111115,
  "longitude": 22.85027777777778
  },
  {
  "name": "Pyhäjärvi-Nokia ",
  "latitude": 61.463055555555556,
  "longitude": 23.440277777777776
  },
  {
  "name": "Vanajavesi-Kuokkalankoski ",
  "latitude": 61.463055555555556,
  "longitude": 23.440277777777776
  },
  {
  "name": "Näsijärvi-Tammerkoski ",
  "latitude": 61.49611111111111,
  "longitude": 23.76722222222222
  },
  {
  "name": "Toisvesi-Herraskoski ",
  "latitude": 62.2675,
  "longitude": 23.72138888888889
  },
  {
  "name": "Kitusjärvi,Kituskoski ",
  "latitude": 62.20111111111111,
  "longitude": 23.954722222222223
  },
  {
  "name": "Ikaalisten reitti, Siuronkoski",
  "latitude": 61.475,
  "longitude": 23.334999999999997
  },
  {
  "name": "Kyrösjärvi,Kyröskoski ",
  "latitude": 61.66972222222222,
  "longitude": 23.194166666666668
  },
  {
  "name": "Parkanonjoki,Karjasillankoski ",
  "latitude": 61.86416666666667,
  "longitude": 23.010277777777777
  },
  {
  "name": "Aurejoki,Poltinkoski ",
  "latitude": 61.8875,
  "longitude": 23.01833333333333
  },
  {
  "name": "Vilppula ",
  "latitude": 62.013888888888886,
  "longitude": 24.508055555555554
  },
  {
  "name": "Vähämultianjärvi-Kurenkoski ",
  "latitude": 62.4375,
  "longitude": 24.6925
  },
  {
  "name": "Valkeakoski ",
  "latitude": 61.264722222222225,
  "longitude": 24.034722222222225
  },
  {
  "name": "Ilmoilanselkä ",
  "latitude": 61.293055555555554,
  "longitude": 24.30138888888889
  },
  {
  "name": "Pyhäjärvi-Kuhalankoski ",
  "latitude": 60.816111111111105,
  "longitude": 23.622777777777777
  },
  {
  "name": "Karv.j suuhaarat Et.+Po.+La.",
  "latitude": 61.64666666666667,
  "longitude": 21.870555555555555
  },
  {
  "name": "Karvianjoki,Vatajankoski ",
  "latitude": 61.92638888888889,
  "longitude": 22.2425
  },
  {
  "name": "Isojoki,Lappväärtti ",
  "latitude": 62.21888888888889,
  "longitude": 21.440277777777776
  },
  {
  "name": "Kyrönjoki,Skatila ",
  "latitude": 63.18722222222222,
  "longitude": 21.949166666666667
  },
  {
  "name": "Kyrönjoki,Hanhikoski ",
  "latitude": 62.99916666666667,
  "longitude": 22.330833333333334
  },
  {
  "name": "Kyrönj. Jalasjoki,Pitkäkoski ",
  "latitude": 62.58555555555556,
  "longitude": 22.422222222222224
  },
  {
  "name": "Kyrönj. Kauhajo.-Jyllinkoski ",
  "latitude": 62.56666666666667,
  "longitude": 21.798333333333336
  },
  {
  "name": "Lapuanjoki,Nurmo ",
  "latitude": 62.968333333333334,
  "longitude": 23.005555555555556
  },
  {
  "name": "Keppo ",
  "latitude": 63.56027777777778,
  "longitude": 22.511388888888888
  },
  {
  "name": "Lapuanjoki,Pappilankari ",
  "latitude": 63.24805555555556,
  "longitude": 22.863333333333333
  },
  {
  "name": "Evijärvi-Luusua ",
  "latitude": 63.43222222222222,
  "longitude": 23.40222222222222
  },
  {
  "name": "Ähtävänjoki,Lappajärvi-Luusua ",
  "latitude": 63.26111111111111,
  "longitude": 23.639722222222222
  },
  {
  "name": "Perhonjoki,Pelonsilta ",
  "latitude": 63.770833333333336,
  "longitude": 23.339166666666664
  },
  {
  "name": "Jatkojoki,Hyyppä ",
  "latitude": 63.905833333333334,
  "longitude": 23.27
  },
  {
  "name": "Kannus ",
  "latitude": 64.07138888888889,
  "longitude": 23.636944444444445
  },
  {
  "name": "Lestijärvi-Luusua ",
  "latitude": 63.583333333333336,
  "longitude": 24.72083333333333
  },
  {
  "name": "Kalajoki,Raudaskoski ",
  "latitude": 64.07638888888889,
  "longitude": 24.5775
  },
  {
  "name": "Kalajoki,Haapajärvi-Luusua ",
  "latitude": 63.913888888888884,
  "longitude": 24.92638888888889
  },
  {
  "name": "Kalajoki+Siipojoki ",
  "latitude": 64.25833333333334,
  "longitude": 23.943055555555556
  },
  {
  "name": "Kalajoki,Hihnalankoski ",
  "latitude": 64.20222222222222,
  "longitude": 24.05888888888889
  },
  {
  "name": "Naapurinkallio ",
  "latitude": 64.4863888888889,
  "longitude": 24.21611111111111
  },
  {
  "name": "Pyhäjoki,Venetpalo ",
  "latitude": 63.9525,
  "longitude": 25.80138888888889
  },
  {
  "name": "Hourunkoski ",
  "latitude": 64.4863888888889,
  "longitude": 24.21611111111111
  },
  {
  "name": "Haapavesi-Haapakoski ",
  "latitude": 64.14083333333333,
  "longitude": 25.308611111111112
  },
  {
  "name": "Lamujoki ",
  "latitude": 64.33194444444445,
  "longitude": 25.859166666666667
  },
  {
  "name": "Uljua ",
  "latitude": 64.33555555555554,
  "longitude": 25.875
  },
  {
  "name": "Harjuniva ",
  "latitude": 64.8536111111111,
  "longitude": 24.72138888888889
  },
  {
  "name": "Siikajoki,Heikkilänkoski ",
  "latitude": 64.46916666666667,
  "longitude": 25.65861111111111
  },
  {
  "name": "Siikajoki,Länkelä ",
  "latitude": 64.76666666666667,
  "longitude": 24.880833333333335
  },
  {
  "name": "Änättijärvi-Änättikoski ",
  "latitude": 64.39750000000001,
  "longitude": 29.855555555555558
  },
  {
  "name": "Oulujärvi+Oulujoki Yht.Alue ",
  "latitude": 65.01527777777778,
  "longitude": 25.473611111111108
  },
  {
  "name": "Oulujoki, Jokivarsi ",
  "latitude": 65.01527777777778,
  "longitude": 25.473611111111108
  },
  {
  "name": "Oulujärvi ",
  "latitude": 64.57166666666666,
  "longitude": 26.785833333333336
  },
  {
  "name": "Sotkamon r.,Nuas-Ontojärvi",
  "latitude": 64.22944444444444,
  "longitude": 27.733611111111113
  },
  {
  "name": "Emäjoki ",
  "latitude": 64.40305555555557,
  "longitude": 27.848888888888887
  },
  {
  "name": "Hyrynjärvi-Kokkokorva ",
  "latitude": 64.49916666666667,
  "longitude": 28.181944444444447
  },
  {
  "name": "Hyrynsalm.Reit. Yläjoki,Hossa ",
  "latitude": 65.41916666666667,
  "longitude": 29.555
  },
  {
  "name": "Vuokkijärvi-Niipas ",
  "latitude": 64.83583333333333,
  "longitude": 28.855
  },
  {
  "name": "Koirakoski ",
  "latitude": 64.65222222222222,
  "longitude": 28.564722222222223
  },
  {
  "name": "Lammasjärvi-Luusua ",
  "latitude": 64.09861111111111,
  "longitude": 28.989444444444445
  },
  {
  "name": "Kellojärvi-Murtosalmi ",
  "latitude": 64.16722222222222,
  "longitude": 29.010555555555555
  },
  {
  "name": "Merikoski ",
  "latitude": 65.01527777777778,
  "longitude": 25.473611111111108
  },
  {
  "name": "Oulujärvi-Vaala ",
  "latitude": 64.57166666666666,
  "longitude": 26.785833333333336
  },
  {
  "name": "Kivesjärvi-Luusua ",
  "latitude": 64.39250000000001,
  "longitude": 27.55
  },
  {
  "name": "Leppikoski,Kiehimä ",
  "latitude": 64.40305555555557,
  "longitude": 27.848888888888887
  },
  {
  "name": "Pyhäntä ",
  "latitude": 64.54472222222222,
  "longitude": 28.29416666666667
  },
  {
  "name": "Kiantajärvi-Pysty ",
  "latitude": 64.87916666666666,
  "longitude": 28.91916666666667
  },
  {
  "name": "Rehjänselkä-Kajaani ",
  "latitude": 64.22944444444444,
  "longitude": 27.733611111111113
  },
  {
  "name": "Ontojärvi-Luusua ",
  "latitude": 64.09861111111111,
  "longitude": 28.989444444444445
  },
  {
  "name": "Lentua-Luusua ",
  "latitude": 64.19250000000001,
  "longitude": 29.594166666666666
  },
  {
  "name": "Haukipudas ",
  "latitude": 65.17972222222222,
  "longitude": 25.358611111111113
  },
  {
  "name": "Kiiminkij. Torniontalo ",
  "latitude": 65.06805555555555,
  "longitude": 26.310833333333335
  },
  {
  "name": "Nuorittajoki,Perttunen ",
  "latitude": 65.07833333333333,
  "longitude": 26.224166666666665
  },
  {
  "name": "Iijoki,Yli-Ii ",
  "latitude": 65.33388888888888,
  "longitude": 25.415
  },
  {
  "name": "Iijoki,Pahkakoski ",
  "latitude": 65.31222222222222,
  "longitude": 25.699166666666667
  },
  {
  "name": "Jokijärvi,Niskakoski ",
  "latitude": 65.57638888888889,
  "longitude": 28.188333333333333
  },
  {
  "name": "Livojoki,Hanhikoski ",
  "latitude": 65.3938888888889,
  "longitude": 26.79638888888889
  },
  {
  "name": "Koitijärvi ",
  "latitude": 65.57666666666667,
  "longitude": 28.186666666666667
  },
  {
  "name": "Jaurakkajärvi-Luusua ",
  "latitude": 65.27416666666666,
  "longitude": 27.28888888888889
  },
  {
  "name": "Korpijoki,Suolijärvi-Luusua ",
  "latitude": 65.1463888888889,
  "longitude": 27.723333333333333
  },
  {
  "name": "Raasakka ",
  "latitude": 65.33388888888888,
  "longitude": 25.415
  },
  {
  "name": "Kipinä ",
  "latitude": 65.29472222222222,
  "longitude": 26.515833333333333
  },
  {
  "name": "Kurenalus ",
  "latitude": 65.36333333333333,
  "longitude": 26.994444444444447
  },
  {
  "name": "Väätäjänsuvanto ",
  "latitude": 65.49861111111112,
  "longitude": 27.94472222222222
  },
  {
  "name": "Siuruanjoki,Leuankoski ",
  "latitude": 65.37305555555555,
  "longitude": 25.850833333333334
  },
  {
  "name": "Kuivajoki ",
  "latitude": 65.56722222222221,
  "longitude": 25.175
  },
  {
  "name": "Simojoki,Simo ",
  "latitude": 65.6275,
  "longitude": 25.060277777777777
  },
  {
  "name": "Simojoki,Hosionkoski ",
  "latitude": 65.91694444444445,
  "longitude": 25.838055555555556
  },
  {
  "name": "Sinettäjärvi-Luusua ",
  "latitude": 66.60722222222222,
  "longitude": 25.427222222222223
  },
  {
  "name": "Meltauskoski,Suukoski ",
  "latitude": 65.29444444444444,
  "longitude": 25.483611111111113
  },
  {
  "name": "Ounasjoki,Ounasjärvi-Luusua ",
  "latitude": 68.39166666666668,
  "longitude": 23.903055555555554
  },
  {
  "name": "Kitinen,Sattasjoki ",
  "latitude": 67.50861111111111,
  "longitude": 26.634999999999998
  },
  {
  "name": "Raudanjoki ym + suuosa",
  "latitude": 65.7925,
  "longitude": 24.550555555555555
  },
  {
  "name": "Jumiskonjoki.Jumisko ",
  "latitude": 66.41083333333334,
  "longitude": 27.947222222222223
  },
  {
  "name": "Jokivarsi,suuosa",
  "latitude": 65.78944444444444,
  "longitude": 24.564444444444444
  },
  {
  "name": "Raudanjoki+lisäalueet",
  "latitude": 66.49527777777777,
  "longitude": 25.741944444444446
  },
  {
  "name": "Kemijärvi ",
  "latitude": 66.405,
  "longitude": 27.333333333333332
  },
  {
  "name": "Ounasjoen Alapuoli ",
  "latitude": 66.50833333333334,
  "longitude": 25.73888888888889
  },
  {
  "name": "Ounasjoki,Maijakallio ",
  "latitude": 66.78583333333333,
  "longitude": 25.428611111111113
  },
  {
  "name": "Kemijoki,Valajaskoski ",
  "latitude": 66.49527777777777,
  "longitude": 25.741944444444446
  },
  {
  "name": "Kemijoki,Pelkosenniemi ",
  "latitude": 66.91055555555556,
  "longitude": 27.47972222222222
  },
  {
  "name": "Kemihaara,Kummaniva ",
  "latitude": 67.19916666666667,
  "longitude": 27.793333333333337
  },
  {
  "name": "Ounasjoki,Köngäs ",
  "latitude": 67.7936111111111,
  "longitude": 24.939166666666665
  },
  {
  "name": "Kemijoki,Isohaara ",
  "latitude": 65.7925,
  "longitude": 24.550555555555555
  },
  {
  "name": "Kemijoki ennen Ounasjokea",
  "latitude": 66.49527777777777,
  "longitude": 25.741944444444446
  },
  {
  "name": "Seitakorva ",
  "latitude": 66.405,
  "longitude": 27.333333333333332
  },
  {
  "name": "Kemijoki,Savukoski ",
  "latitude": 67.28888888888889,
  "longitude": 28.162777777777777
  },
  {
  "name": "Teniöjoki,Savukoski ",
  "latitude": 67.27,
  "longitude": 28.270555555555553
  },
  {
  "name": "Ounasjoki ",
  "latitude": 66.50833333333334,
  "longitude": 25.73888888888889
  },
  {
  "name": "Kaukonen ",
  "latitude": 67.48,
  "longitude": 24.915
  },
  {
  "name": "Ounasjoen Yläpuoli ",
  "latitude": 67.50861111111111,
  "longitude": 26.634999999999998
  },
  {
  "name": "Raudanjoki ",
  "latitude": 66.46000000000001,
  "longitude": 26.081944444444446
  },
  {
  "name": "Kitinen ",
  "latitude": 67.13305555555554,
  "longitude": 27.497777777777777
  },
  {
  "name": "Kitinen,Porttipahta ",
  "latitude": 67.96166666666667,
  "longitude": 26.75138888888889
  },
  {
  "name": "Luiro ",
  "latitude": 67.16333333333334,
  "longitude": 27.502777777777776
  },
  {
  "name": "Luirojoki,Lokka ",
  "latitude": 68.11694444444444,
  "longitude": 27.059166666666666
  },
  {
  "name": "Kaihua ",
  "latitude": 66.35944444444443,
  "longitude": 26.824444444444445
  },
  {
  "name": "Lokka+Porttipahta ",
  "latitude": 67.96166666666667,
  "longitude": 26.75138888888889
  },
  {
  "name": "Raanujärvi ",
  "latitude": 66.64861111111112,
  "longitude": 24.67888888888889
  },
  {
  "name": "Ylläsjoki,Rimpeli ",
  "latitude": 67.34888888888888,
  "longitude": 23.828055555555554
  },
  {
  "name": "Vietosen oma alue",
  "latitude": 66.64722222222223,
  "longitude": 24.43138888888889
  },
  {
  "name": "Tengeljoki,Portimojärvi ",
  "latitude": 66.38083333333333,
  "longitude": 23.787222222222223
  },
  {
  "name": "Vietonen ",
  "latitude": 66.64722222222223,
  "longitude": 24.43138888888889
  },
  {
  "name": "Utsjoki,Patoniva ",
  "latitude": 69.91000000000001,
  "longitude": 27.053611111111113
  },
  {
  "name": "Inarin lähialueet",
  "latitude": 68.90277777777779,
  "longitude": 28.438333333333333
  },
  {
  "name": "Juutuanjoki,Saukkoniva ",
  "latitude": 68.90777777777778,
  "longitude": 27.033611111111114
  },
  {
  "name": "Inari-Luusua ",
  "latitude": 68.90277777777779,
  "longitude": 28.438333333333333
  },
  {
  "name": "Kettujoki,Kettukoski ",
  "latitude": 68.92305555555556,
  "longitude": 26.761111111111113
  },
  {
  "name": "Ivalojoki,Pajakoski ",
  "latitude": 68.54638888888888,
  "longitude": 27.238055555555558
  },
  {
  "name": "Kuusinkijoki-Myllykoski ",
  "latitude": 66.25805555555556,
  "longitude": 29.761666666666667
  },
  {
  "name": "Oulankajoki,Kiutaköngäs ",
  "latitude": 66.25805555555556,
  "longitude": 29.766111111111112
  },
  {
  "name": "Kitkajoki,Käylä ",
  "latitude": 66.28305555555555,
  "longitude": 29.65111111111111
  },
  {
  "name": "Muojärvi,Piiksijoki ",
  "latitude": 65.87138888888889,
  "longitude": 29.96
  },
  {
  "name": "Simpelejärvi",
  "latitude": 61.60027777777778,
  "longitude": 29.485277777777778
  },
  {
  "name": "Polvijärvi, Ruunaa",
  "latitude": 63.43277777777777,
  "longitude": 30.418055555555558
  },
  {
  "name": "Pielinen, Nurmes",
  "latitude": 63.54138888888889,
  "longitude": 29.134722222222223
  },
  {
  "name": "Pielinen, Lieksa",
  "latitude": 63.318333333333335,
  "longitude": 29.989722222222223
  },
  {
  "name": "Höytiäinen",
  "latitude": 62.6875,
  "longitude": 29.672222222222224
  },
  {
  "name": "Pyhäjärvi, Syrjäs.",
  "latitude": 62.031666666666666,
  "longitude": 29.890833333333333
  },
  {
  "name": "Pyhäselkä, Joensuu",
  "latitude": 62.598333333333336,
  "longitude": 29.770555555555553
  },
  {
  "name": "Orivesi, Puhos",
  "latitude": 62.09444444444445,
  "longitude": 29.878888888888888
  },
  {
  "name": "Porovesi, Iisalmi",
  "latitude": 63.55444444444444,
  "longitude": 27.184166666666666
  },
  {
  "name": "Laakajärvi",
  "latitude": 63.831388888888895,
  "longitude": 27.897777777777776
  },
  {
  "name": "Syväri, Atro",
  "latitude": 63.37222222222222,
  "longitude": 27.990833333333335
  },
  {
  "name": "Ruokovesi,Pirttilahti",
  "latitude": 63.10416666666667,
  "longitude": 27.335555555555555
  },
  {
  "name": "Kallavesi, Kuopio",
  "latitude": 62.89888888888889,
  "longitude": 27.735
  },
  {
  "name": "Konnusvesi, Konnus",
  "latitude": 62.54833333333333,
  "longitude": 27.773055555555555
  },
  {
  "name": "Unnukka, Varkaus",
  "latitude": 62.54861111111111,
  "longitude": 27.775555555555556
  },
  {
  "name": "Sorsavesi, Sorsak.",
  "latitude": 62.45055555555556,
  "longitude": 27.653888888888886
  },
  {
  "name": "Siitinselkä, Varkaus",
  "latitude": 62.29944444444444,
  "longitude": 27.910555555555554
  },
  {
  "name": "Haukivesi, Oravi",
  "latitude": 62.11027777777778,
  "longitude": 28.609444444444446
  },
  {
  "name": "Pihlajavesi, Savonlinna",
  "latitude": 61.85027777777778,
  "longitude": 28.866944444444446
  },
  {
  "name": "Savilahti, Mikkeli",
  "latitude": 61.68861111111111,
  "longitude": 27.28527777777778
  },
  {
  "name": "Pökkäänlahti, Ristiina",
  "latitude": 61.500277777777775,
  "longitude": 27.266666666666666
  },
  {
  "name": "Saimaa, Lauritsala",
  "latitude": 61.08277777777778,
  "longitude": 28.275
  },
  {
  "name": "Muurasjärvi",
  "latitude": 63.47083333333334,
  "longitude": 25.33861111111111
  },
  {
  "name": "Saanijärvi",
  "latitude": 63.399166666666666,
  "longitude": 25.575277777777778
  },
  {
  "name": "Kolimajärvi",
  "latitude": 63.175,
  "longitude": 25.941666666666666
  },
  {
  "name": "Kivijärvi, Saarenkylä",
  "latitude": 63.266666666666666,
  "longitude": 25.129722222222224
  },
  {
  "name": "Keitele, Viitasaari",
  "latitude": 63.07138888888889,
  "longitude": 25.860000000000003
  },
  {
  "name": "Keitele, Suolahti",
  "latitude": 62.56944444444445,
  "longitude": 25.85638888888889
  },
  {
  "name": "Kyyjärvi",
  "latitude": 63.055,
  "longitude": 24.56861111111111
  },
  {
  "name": "Pääjärvi, Karstula",
  "latitude": 62.846944444444446,
  "longitude": 24.8175
  },
  {
  "name": "Kalmarinjärvi",
  "latitude": 62.785555555555554,
  "longitude": 25.004166666666666
  },
  {
  "name": "Summasjärvi",
  "latitude": 62.67611111111111,
  "longitude": 25.346944444444443
  },
  {
  "name": "Vatianjärvi",
  "latitude": 62.46805555555556,
  "longitude": 25.92361111111111
  },
  {
  "name": "Koivujärvi",
  "latitude": 63.44777777777777,
  "longitude": 26.22833333333333
  },
  {
  "name": "Pielavesi, Säviä",
  "latitude": 63.19888888888889,
  "longitude": 26.672777777777778
  },
  {
  "name": "Nilakka, Kolu",
  "latitude": 62.972500000000004,
  "longitude": 26.72833333333333
  },
  {
  "name": "Iisvesi",
  "latitude": 62.66777777777777,
  "longitude": 27.03611111111111
  },
  {
  "name": "Hankavesi, Rautalampi",
  "latitude": 62.61694444444444,
  "longitude": 26.830277777777777
  },
  {
  "name": "Konnevesi, etelä",
  "latitude": 62.61611111111111,
  "longitude": 26.352500000000003
  },
  {
  "name": "Vanginvesi",
  "latitude": 62.565555555555555,
  "longitude": 26.246111111111112
  },
  {
  "name": "Ala-Kintaus",
  "latitude": 62.278055555555554,
  "longitude": 25.34111111111111
  },
  {
  "name": "Petäjävesi",
  "latitude": 62.255,
  "longitude": 25.17638888888889
  },
  {
  "name": "Salosjärvi",
  "latitude": 62.07527777777778,
  "longitude": 25.165277777777778
  },
  {
  "name": "Jääsjärvi, Hartola",
  "latitude": 61.566944444444445,
  "longitude": 26.049722222222226
  },
  {
  "name": "Joutsjärvi",
  "latitude": 61.51833333333333,
  "longitude": 25.8825
  },
  {
  "name": "Päijänne, Sysmä",
  "latitude": 61.47833333333333,
  "longitude": 25.630833333333335
  },
  {
  "name": "Vesijärvi, Lahti",
  "latitude": 60.994166666666665,
  "longitude": 25.65111111111111
  },
  {
  "name": "Vesijärvi, Vääksy",
  "latitude": 61.175555555555555,
  "longitude": 25.539444444444445
  },
  {
  "name": "Päijänne, Vääksy",
  "latitude": 61.17611111111111,
  "longitude": 25.540277777777778
  },
  {
  "name": "Ala-Rieveli",
  "latitude": 61.33555555555556,
  "longitude": 26.204166666666666
  },
  {
  "name": "Kyyvesi, Haukivuori",
  "latitude": 62.01222222222222,
  "longitude": 27.1925
  },
  {
  "name": "Puula, Kangasniemi",
  "latitude": 61.987500000000004,
  "longitude": 26.649166666666666
  },
  {
  "name": "Puula, Otava",
  "latitude": 61.658055555555556,
  "longitude": 27.069444444444443
  },
  {
  "name": "Tuusjärvi, Tuustaipale",
  "latitude": 61.507777777777775,
  "longitude": 26.704722222222223
  },
  {
  "name": "Lahnavesi, Tuustaipale",
  "latitude": 61.499722222222225,
  "longitude": 26.711388888888887
  },
  {
  "name": "Vuohijärvi, Hillosens.",
  "latitude": 61.198055555555555,
  "longitude": 26.78666666666667
  },
  {
  "name": "Ylä-Kivijärvi, Jurvala",
  "latitude": 60.95416666666667,
  "longitude": 27.76388888888889
  },
  {
  "name": "Ala-Kivijärvi, Ylä-Munni",
  "latitude": 60.93861111111111,
  "longitude": 27.514444444444443
  },
  {
  "name": "Tammijärvi, Pitkälahti",
  "latitude": 60.565555555555555,
  "longitude": 26.566111111111113
  },
  {
  "name": "Pyhäjärvi",
  "latitude": 60.70666666666667,
  "longitude": 26.01222222222222
  },
  {
  "name": "Palojärvi",
  "latitude": 60.29,
  "longitude": 24.40111111111111
  },
  {
  "name": "Sääksjärvi",
  "latitude": 60.50888888888889,
  "longitude": 24.65694444444444
  },
  {
  "name": "Lohjanjärvi, Virkkala",
  "latitude": 60.189722222222215,
  "longitude": 23.984444444444446
  },
  {
  "name": "Pyhäjärvi, Kauttua",
  "latitude": 61.10138888888889,
  "longitude": 22.183333333333334
  },
  {
  "name": "Koljonselkä, Kuoresalmi",
  "latitude": 61.61666666666667,
  "longitude": 24.506944444444443
  },
  {
  "name": "Längelmävesi, Kaivanto",
  "latitude": 61.41777777777777,
  "longitude": 24.150555555555552
  },
  {
  "name": "Vesijako",
  "latitude": 61.35472222222222,
  "longitude": 25.02611111111111
  },
  {
  "name": "Kukkia, Puutikkala",
  "latitude": 61.32888888888889,
  "longitude": 24.621666666666666
  },
  {
  "name": "Iso-Roinevesi, W-Ranta",
  "latitude": 61.2075,
  "longitude": 24.520833333333332
  },
  {
  "name": "Haapaniemenjärvi",
  "latitude": 60.852222222222224,
  "longitude": 24.490833333333335
  },
  {
  "name": "Vanajavesi, Hämeenlinna",
  "latitude": 60.99888888888889,
  "longitude": 24.473333333333333
  },
  {
  "name": "Jalantijärvi, Sotkia",
  "latitude": 61.14611111111111,
  "longitude": 23.795
  },
  {
  "name": "Ähtärinjärvi, Niemiaho",
  "latitude": 62.755,
  "longitude": 24.04888888888889
  },
  {
  "name": "Toisvesi, Herraskoski",
  "latitude": 62.26222222222222,
  "longitude": 23.734166666666667
  },
  {
  "name": "Pihlajavesi",
  "latitude": 62.32083333333334,
  "longitude": 24.269166666666667
  },
  {
  "name": "Kitusjärvi",
  "latitude": 62.27722222222222,
  "longitude": 24.055555555555557
  },
  {
  "name": "Visuvesi, Kanava",
  "latitude": 62.117222222222225,
  "longitude": 23.928055555555556
  },
  {
  "name": "Ukonselkä, Kolho",
  "latitude": 62.12972222222222,
  "longitude": 24.510833333333334
  },
  {
  "name": "Palosekä, Vilppula",
  "latitude": 62.01416666666667,
  "longitude": 24.472499999999997
  },
  {
  "name": "Ruovesi, Kauttu",
  "latitude": 61.95527777777778,
  "longitude": 24.110833333333336
  },
  {
  "name": "Palovesi, Murole",
  "latitude": 61.85527777777778,
  "longitude": 23.91
  },
  {
  "name": "Näsijärvi, Tampere",
  "latitude": 61.50833333333333,
  "longitude": 23.77583333333333
  },
  {
  "name": "Pyhäjärvi, Tampere",
  "latitude": 61.49111111111111,
  "longitude": 23.743055555555557
  },
  {
  "name": "Jämijärvi",
  "latitude": 61.81055555555555,
  "longitude": 22.761666666666667
  },
  {
  "name": "Kyrösjärvi, Kyröskoski",
  "latitude": 61.77361111111111,
  "longitude": 23.055
  },
  {
  "name": "Mätikköjärvi",
  "latitude": 61.511944444444445,
  "longitude": 23.000833333333333
  },
  {
  "name": "Sääksjärvi, Sääkskoski",
  "latitude": 61.39361111111111,
  "longitude": 22.45777777777778
  },
  {
  "name": "Kuortaneenjärvi, Kuortane",
  "latitude": 62.862500000000004,
  "longitude": 23.410555555555554
  },
  {
  "name": "Lappajärvi, Halkosaari",
  "latitude": 63.259166666666665,
  "longitude": 23.63861111111111
  },
  {
  "name": "Lestijärvi, Kiiskilänlahti",
  "latitude": 63.583333333333336,
  "longitude": 24.72
  },
  {
  "name": "Pyhäjärvi, Pyhäsalmi",
  "latitude": 63.68138888888889,
  "longitude": 25.997777777777777
  },
  {
  "name": "Kianta, Ämmänsaari",
  "latitude": 64.88277777777778,
  "longitude": 28.935277777777777
  },
  {
  "name": "Vuokkijärvi, Sankki",
  "latitude": 64.78333333333333,
  "longitude": 29.31722222222222
  },
  {
  "name": "Hyrynjärvi, Hyrynsalmi",
  "latitude": 64.64666666666668,
  "longitude": 28.490000000000002
  },
  {
  "name": "Lentua, Varajoki",
  "latitude": 64.20305555555557,
  "longitude": 29.693055555555556
  },
  {
  "name": "Lammasjärvi, Kuhmo",
  "latitude": 64.13055555555555,
  "longitude": 29.554166666666667
  },
  {
  "name": "Ontojärvi, Paloniemi",
  "latitude": 64.11833333333333,
  "longitude": 29.289444444444445
  },
  {
  "name": "Nuasjärvi, Vuokatti",
  "latitude": 64.16111111111111,
  "longitude": 28.247500000000002
  },
  {
  "name": "Rehja, Kajaani",
  "latitude": 64.22638888888889,
  "longitude": 27.790555555555557
  },
  {
  "name": "Oulujärvi, Melalahti",
  "latitude": 64.39861111111112,
  "longitude": 27.655277777777776
  },
  {
  "name": "Poussunjärvi",
  "latitude": 65.79805555555555,
  "longitude": 29.319444444444443
  },
  {
  "name": "Naamankajärvi",
  "latitude": 65.10333333333332,
  "longitude": 28.249722222222225
  },
  {
  "name": "Korvuanjärvi",
  "latitude": 65.3475,
  "longitude": 28.66638888888889
  },
  {
  "name": "Livojärvi, Säikkä",
  "latitude": 65.98277777777778,
  "longitude": 27.97138888888889
  },
  {
  "name": "Oijärvi, Matilanjärvi",
  "latitude": 65.61999999999999,
  "longitude": 25.933888888888887
  },
  {
  "name": "Isojärvi",
  "latitude": 66.43444444444445,
  "longitude": 28.134722222222223
  },
  {
  "name": "Ounasjärvi",
  "latitude": 68.39694444444446,
  "longitude": 23.72138888888889
  },
  {
  "name": "Unari",
  "latitude": 67.13583333333334,
  "longitude": 25.745555555555555
  },
  {
  "name": "Kilpisjärvi",
  "latitude": 69.04916666666666,
  "longitude": 20.79277777777778
  },
  {
  "name": "Jerisjärvi, Kutuniva",
  "latitude": 67.94944444444445,
  "longitude": 24.00638888888889
  },
  {
  "name": "Mutusjärvi, Riutula",
  "latitude": 68.94277777777778,
  "longitude": 26.810833333333335
  },
  {
  "name": "Solojärvi",
  "latitude": 68.83638888888889,
  "longitude": 26.79388888888889
  },
  {
  "name": "Inari, Nellim",
  "latitude": 68.84916666666666,
  "longitude": 28.304722222222225
  },
  {
  "name": "Kuusamonjärvi",
  "latitude": 65.88277777777778,
  "longitude": 29.366666666666667
  },
  {
  "name": "Tohmajärvi,Kemie",
  "latitude": 62.234722222222224,
  "longitude": 30.34861111111111
  },
  {
  "name": "Maaninka, Halola",
  "latitude": 63.14138888888889,
  "longitude": 27.32
  },
  {
  "name": "Mikkeli, Karila",
  "latitude": 61.67527777777777,
  "longitude": 27.225277777777777
  },
  {
  "name": "Valtimo kk",
  "latitude": 63.666666666666664,
  "longitude": 28.833055555555557
  },
  {
  "name": "Liperi,Lapinlinna ",
  "latitude": 62.5175,
  "longitude": 29.42666666666667
  },
  {
  "name": "Jyväskylän mlk,Tikkakoski I",
  "latitude": 62.40083333333333,
  "longitude": 25.65972222222222
  },
  {
  "name": "Jyväskylä, Tikkakoski",
  "latitude": 62.39722222222222,
  "longitude": 25.67388888888889
  },
  {
  "name": "Anjalankoski,Anjala I ",
  "latitude": 60.702222222222225,
  "longitude": 26.796666666666667
  },
  {
  "name": "Anjalankoski,Anjala II",
  "latitude": 60.700833333333335,
  "longitude": 26.796944444444446
  },
  {
  "name": "Anjalankoski,Anjala III",
  "latitude": 60.70166666666667,
  "longitude": 26.796666666666667
  },
  {
  "name": "Sipoo,Talma ",
  "latitude": 60.395833333333336,
  "longitude": 25.165277777777778
  },
  {
  "name": "Vantaa,Tikkurila ",
  "latitude": 60.291666666666664,
  "longitude": 25.05638888888889
  },
  {
  "name": "Vantaa,Tammisto ",
  "latitude": 60.27472222222222,
  "longitude": 24.964166666666667
  },
  {
  "name": "Helsinki,Viikki ",
  "latitude": 60.221111111111114,
  "longitude": 25.021666666666665
  },
  {
  "name": "Tuusula,Anttila ",
  "latitude": 60.42055555555555,
  "longitude": 25.031666666666666
  },
  {
  "name": "Helsinki,Malminkartano Ilta ",
  "latitude": 60.24888888888889,
  "longitude": 24.86916666666667
  },
  {
  "name": "Vihti,Suontaa",
  "latitude": 60.41861111111111,
  "longitude": 24.40083333333333
  },
  {
  "name": "Mietoinen,Saari",
  "latitude": 60.62861111111111,
  "longitude": 21.858333333333334
  },
  {
  "name": "Säkylä,Pyhäjoki ",
  "latitude": 61.01222222222222,
  "longitude": 22.386666666666667
  },
  {
  "name": "Jokioinen, observatorio",
  "latitude": 60.814166666666665,
  "longitude": 23.50111111111111
  },
  {
  "name": "Hattula,Leteensuo ",
  "latitude": 61.0675,
  "longitude": 24.24638888888889
  },
  {
  "name": "Kokemäki,Peipohja ",
  "latitude": 61.27166666666667,
  "longitude": 22.2525
  },
  {
  "name": "Pälkäne,Myttäälä ",
  "latitude": 61.33777777777778,
  "longitude": 24.213055555555556
  },
  {
  "name": "Hauho,Länsi-Hahkiala ",
  "latitude": 61.141666666666666,
  "longitude": 24.580555555555556
  },
  {
  "name": "Lammi,Vestola",
  "latitude": 61.153055555555554,
  "longitude": 25.243055555555557
  },
  {
  "name": "Koski Hl,Rokkila Standard ",
  "latitude": 61.08444444444444,
  "longitude": 25.21972222222222
  },
  {
  "name": "Koski Hl,Rokkila GGI-3000",
  "latitude": 61.08444444444444,
  "longitude": 25.21972222222222
  },
  {
  "name": "Ylistaro, Pelma",
  "latitude": 62.93611111111111,
  "longitude": 22.49388888888889
  },
  {
  "name": "Alajärvi,Möksy ",
  "latitude": 63.08888888888889,
  "longitude": 24.26388888888889
  },
  {
  "name": "Ruukki, Greus",
  "latitude": 64.69166666666668,
  "longitude": 25.09583333333333
  },
  {
  "name": "Vaala,Pelso ",
  "latitude": 64.5125,
  "longitude": 26.456666666666667
  },
  {
  "name": "Suomussalmi, Pesiö Standard",
  "latitude": 64.93055555555556,
  "longitude": 28.749444444444446
  },
  {
  "name": "Suomussalmi,Pesiö upotettu Class A",
  "latitude": 64.93055555555556,
  "longitude": 28.749444444444446
  },
  {
  "name": "Oulu,Linnanmaa ",
  "latitude": 65.06027777777777,
  "longitude": 25.46722222222222
  },
  {
  "name": "Sotkamo, Kuolaniemi",
  "latitude": 64.11277777777777,
  "longitude": 28.340555555555554
  },
  {
  "name": "Sodankylä, observatorio",
  "latitude": 67.36638888888888,
  "longitude": 26.633333333333333
  },
  {
  "name": "Rovaniemi, Apukka",
  "latitude": 66.57833333333333,
  "longitude": 26.019444444444442
  },
  {
  "name": "Sodankylä,Vuotso I ",
  "latitude": 68.08388888888888,
  "longitude": 27.189722222222223
  },
  {
  "name": "Sodankylä,Vuotso II",
  "latitude": 68.08027777777778,
  "longitude": 27.19527777777778
  },
  {
  "name": "Sodankylä,Vuotso III",
  "latitude": 68.10194444444444,
  "longitude": 27.12611111111111
  },
  {
  "name": "Utsjoki, Kevo",
  "latitude": 69.75555555555556,
  "longitude": 27.010833333333334
  },
  {
  "name": "Inari,Muddusniemi ",
  "latitude": 69.05722222222222,
  "longitude": 27.046111111111113
  },
  {
  "name": "Kuusamo, Kiutaköngäs",
  "latitude": 66.40916666666668,
  "longitude": 29.316666666666666
  },
  {
  "name": "Kuusamo kk",
  "latitude": 65.97166666666666,
  "longitude": 29.175
  },
  {
  "name": "Jomala,Jomalby I ",
  "latitude": 60.176944444444445,
  "longitude": 19.993333333333336
  },
  {
  "name": "Jomala, Jomalby",
  "latitude": 60.17861111111111,
  "longitude": 19.990833333333335
  },
  {
  "name": "Simpelejärvi, Parikkala",
  "latitude": 61.60055555555556,
  "longitude": 29.489722222222223
  },
  {
  "name": "Saimaa, Lauritsala",
  "latitude": 61.0825,
  "longitude": 28.274166666666666
  },
  {
  "name": "Pihlajavesi, Savonlinna",
  "latitude": 61.85027777777778,
  "longitude": 28.866944444444446
  },
  {
  "name": "Kallavesi Päiväranta ",
  "latitude": 62.93861111111111,
  "longitude": 27.663055555555555
  },
  {
  "name": "Haukivesi, Oravi",
  "latitude": 62.11222222222222,
  "longitude": 28.596666666666664
  },
  {
  "name": "Haukivesi Savonlinna W 4:103a ",
  "latitude": 61.870555555555555,
  "longitude": 28.902777777777775
  },
  {
  "name": "Osmajärvi Sorsakoski W 4:96 ",
  "latitude": 62.44138888888889,
  "longitude": 27.67888888888889
  },
  {
  "name": "Konnusvesi Vääryslahti W 4:80 ",
  "latitude": 62.54833333333333,
  "longitude": 27.773055555555555
  },
  {
  "name": "Kallavesi, Itkonniemi",
  "latitude": 62.899166666666666,
  "longitude": 27.736666666666668
  },
  {
  "name": "Kallavesi Säyneensalo",
  "latitude": 62.871944444444445,
  "longitude": 27.770555555555553
  },
  {
  "name": "Kiteen Pyhäjärvi Syrjäsalmi ",
  "latitude": 61.87888888888889,
  "longitude": 30.01388888888889
  },
  {
  "name": "Pyhäselkä, Roukalahti",
  "latitude": 62.437777777777775,
  "longitude": 29.649444444444445
  },
  {
  "name": "Pielinen, Nurmes",
  "latitude": 63.51777777777777,
  "longitude": 29.150277777777777
  },
  {
  "name": "Pielinen Nurmes Kuivaniemi ",
  "latitude": 63.518055555555556,
  "longitude": 29.1475
  },
  {
  "name": "Onkivesi Nerkoo W 4:63 ",
  "latitude": 63.39805555555556,
  "longitude": 27.296944444444446
  },
  {
  "name": "Nerkoonjärvi Nerkoo 4:62 ",
  "latitude": 63.39972222222222,
  "longitude": 27.296944444444446
  },
  {
  "name": "Juojärvi Ohtaansalmi W 4:85 ",
  "latitude": 62.77472222222222,
  "longitude": 28.69611111111111
  },
  {
  "name": "Rikkavesi Ohtaansalmi W 4:85 ",
  "latitude": 62.77472222222222,
  "longitude": 28.69611111111111
  },
  {
  "name": "Koitere W 4:27 ",
  "latitude": 62.95861111111111,
  "longitude": 30.879166666666666
  },
  {
  "name": "Koitere Pohatanselkä ",
  "latitude": 62.97,
  "longitude": 30.835277777777776
  },
  {
  "name": "Ala-Rieveli, Heinola",
  "latitude": 61.35194444444445,
  "longitude": 26.243333333333336
  },
  {
  "name": "Tammijärvi Pitkälahti W 14:109 ",
  "latitude": 60.551111111111105,
  "longitude": 26.554166666666667
  },
  {
  "name": "Haukkajärvi W 14:91a ",
  "latitude": 60.914722222222224,
  "longitude": 26.88888888888889
  },
  {
  "name": "Ala-Kivijärvi Ala-Munni W-As ",
  "latitude": 60.93861111111111,
  "longitude": 27.514444444444443
  },
  {
  "name": "Ruotsalainen Heinola W 14:67a ",
  "latitude": 61.20055555555556,
  "longitude": 26.029444444444444
  },
  {
  "name": "Iitin Kirkkojärvi Kk W 14:72 ",
  "latitude": 60.94472222222222,
  "longitude": 26.390277777777776
  },
  {
  "name": "Kymijoki Sutela W 14:107 ",
  "latitude": 60.50888888888889,
  "longitude": 26.879444444444445
  },
  {
  "name": "Päijänne Kalkkinen W 14:65 ",
  "latitude": 61.28583333333333,
  "longitude": 25.577222222222222
  },
  {
  "name": "Vesijärvi Lahti W 14:61 ",
  "latitude": 60.994166666666665,
  "longitude": 25.65111111111111
  },
  {
  "name": "Päijänne, Tehin selkä",
  "latitude": 61.46472222222223,
  "longitude": 25.391388888888887
  },
  {
  "name": "Päijänne Haapaniemi  W 14:46a ",
  "latitude": 62.217777777777776,
  "longitude": 25.853055555555557
  },
  {
  "name": "Päijänne, Sysmä, Verkkosaaret",
  "latitude": 61.47833333333333,
  "longitude": 25.630277777777778
  },
  {
  "name": "Päijänne Linnasaari",
  "latitude": 61.46055555555556,
  "longitude": 25.415
  },
  {
  "name": "Päijänne Päijätsalo",
  "latitude": 61.483333333333334,
  "longitude": 25.558055555555555
  },
  {
  "name": "Leivonvesi Simunanniska W-As ",
  "latitude": 62.38027777777778,
  "longitude": 26.211944444444445
  },
  {
  "name": "Kuuhankavesi, Hankasalmi",
  "latitude": 62.29888888888889,
  "longitude": 26.473611111111108
  },
  {
  "name": "Muurasjärvi, Pihtipudas",
  "latitude": 63.47083333333334,
  "longitude": 25.339444444444442
  },
  {
  "name": "Saanijärvi, Pihtipudas",
  "latitude": 63.39833333333333,
  "longitude": 25.580277777777777
  },
  {
  "name": "Kivijärvi, Saarenkylä",
  "latitude": 63.26833333333333,
  "longitude": 25.13361111111111
  },
  {
  "name": "Heitjärvi Myllynperä W 14:7a",
  "latitude": 63.07805555555556,
  "longitude": 25.05888888888889
  },
  {
  "name": "Vuosjärvi Luusua W 14:9a ",
  "latitude": 63.06027777777778,
  "longitude": 25.350833333333334
  },
  {
  "name": "Jämsänvesi Petäjävesi",
  "latitude": 62.25527777777778,
  "longitude": 25.176111111111112
  },
  {
  "name": "Kankarisvesi Vihatinsalo W-As ",
  "latitude": 61.93055555555555,
  "longitude": 25.163055555555555
  },
  {
  "name": "Pääjärvi, Karstula",
  "latitude": 62.81083333333333,
  "longitude": 24.834166666666665
  },
  {
  "name": "Naarajärvi Naarakoski W 14:21a ",
  "latitude": 62.62166666666667,
  "longitude": 25.6375
  },
  {
  "name": "Kiimasjärvi Etelälahti W 14:21 ",
  "latitude": 62.60583333333334,
  "longitude": 25.530555555555555
  },
  {
  "name": "Karankajärvi Uodinsalmi W-As ",
  "latitude": 62.72027777777778,
  "longitude": 24.83861111111111
  },
  {
  "name": "Hankavesi Pitkälahti W 14:36",
  "latitude": 62.61694444444444,
  "longitude": 26.830277777777777
  },
  {
  "name": "Pielavesi, Säviä",
  "latitude": 63.20138888888889,
  "longitude": 26.67361111111111
  },
  {
  "name": "Iisvesi, Suonenjoki",
  "latitude": 62.666666666666664,
  "longitude": 27.047500000000003
  },
  {
  "name": "Pieksänjärvi W 14:35 ",
  "latitude": 62.345,
  "longitude": 27.17
  },
  {
  "name": "Kiesimä Kiesimäntaipa W 14:34b",
  "latitude": 62.76888888888889,
  "longitude": 26.51527777777778
  },
  {
  "name": "Pohjois-Konnevesi Kiesimäntaip ",
  "latitude": 62.76888888888889,
  "longitude": 26.520555555555553
  },
  {
  "name": "Rasvanki Kolu Ala W 14:30 ",
  "latitude": 62.972500000000004,
  "longitude": 26.72833333333333
  },
  {
  "name": "Koivujärvi Halmeniemi W 14:25 ",
  "latitude": 63.44777777777777,
  "longitude": 26.22833333333333
  },
  {
  "name": "Konnevesi, Näreselkä",
  "latitude": 62.64388888888889,
  "longitude": 26.414166666666667
  },
  {
  "name": "Jääsjärvi, Hartola",
  "latitude": 61.573888888888895,
  "longitude": 26.056944444444444
  },
  {
  "name": "Kyyvesi, Haukivuori",
  "latitude": 62.011944444444445,
  "longitude": 27.191666666666666
  },
  {
  "name": "Hirvensalmi W 14:78 ",
  "latitude": 61.805,
  "longitude": 26.453055555555554
  },
  {
  "name": "Puulavesi Otava W 14:76 ",
  "latitude": 61.658055555555556,
  "longitude": 27.06888888888889
  },
  {
  "name": "Tuusulanjärvi",
  "latitude": 60.45805555555556,
  "longitude": 25.076666666666668
  },
  {
  "name": "Palajärvi/palojärvi W 22:3 ",
  "latitude": 61.0175,
  "longitude": 25.182222222222222
  },
  {
  "name": "Lohjanjärvi Virkkala W 23:9 ",
  "latitude": 60.191111111111105,
  "longitude": 23.981944444444444
  },
  {
  "name": "Sääksjärvi Observat. W 23:3a",
  "latitude": 60.50888888888889,
  "longitude": 24.65694444444444
  },
  {
  "name": "Kirkkojärvi,Kiskonjoki ",
  "latitude": 60.203611111111115,
  "longitude": 23.384166666666665
  },
  {
  "name": "Littoistenjärvi ",
  "latitude": 60.44777777777777,
  "longitude": 22.396944444444443
  },
  {
  "name": "Aurajoki,Halinen W 28:7 ",
  "latitude": 60.46333333333334,
  "longitude": 22.310555555555556
  },
  {
  "name": "Säkylän Pyhäjärvi Kauttua W-As ",
  "latitude": 61.11055555555556,
  "longitude": 22.16333333333333
  },
  {
  "name": "Pyhäjärvi, Säkylä",
  "latitude": 61.026944444444446,
  "longitude": 22.203333333333333
  },
  {
  "name": "Sääksjärvi, Kokemäki",
  "latitude": 61.38861111111111,
  "longitude": 22.4575
  },
  {
  "name": "Pirkkalan Pyhäjärvi Pyynikki ",
  "latitude": 61.473333333333336,
  "longitude": 23.745833333333334
  },
  {
  "name": "Jalantijärvi Sotkia W 35:31",
  "latitude": 61.14611111111111,
  "longitude": 23.795
  },
  {
  "name": "Näsijärvi, Naistenlahti, Tampere",
  "latitude": 61.50944444444445,
  "longitude": 23.770555555555553
  },
  {
  "name": "Palovesi, Murole",
  "latitude": 61.85638888888889,
  "longitude": 23.911666666666665
  },
  {
  "name": "Näsiselkä Aittolahden Suu ",
  "latitude": 61.56888888888889,
  "longitude": 23.798055555555557
  },
  {
  "name": "Valkeekivenlahti Siivikkala ",
  "latitude": 61.55777777777777,
  "longitude": 23.715833333333332
  },
  {
  "name": "Näsijärvi, Kyrönlahti",
  "latitude": 61.71388888888889,
  "longitude": 23.595277777777778
  },
  {
  "name": "Paloselkä Vilppula W 35:59 ",
  "latitude": 62.013888888888886,
  "longitude": 24.47138888888889
  },
  {
  "name": "Kitusjärvi, Virrat",
  "latitude": 62.276944444444446,
  "longitude": 24.046944444444446
  },
  {
  "name": "Kyrösjärvi Ikaalinen W 35:82 ",
  "latitude": 61.77361111111111,
  "longitude": 23.055
  },
  {
  "name": "Kaijanselkä Kolho W 35:55 ",
  "latitude": 62.12972222222222,
  "longitude": 24.510833333333334
  },
  {
  "name": "Paloselkä,Vilppula W 35:59 ",
  "latitude": 62.0125,
  "longitude": 24.510833333333334
  },
  {
  "name": "Sinerväjärvi Multia W 35:52 ",
  "latitude": 62.39888888888889,
  "longitude": 24.81361111111111
  },
  {
  "name": "Kuoresalmi W 35:5a ",
  "latitude": 61.608333333333334,
  "longitude": 24.544722222222223
  },
  {
  "name": "Kukkia",
  "latitude": 61.32972222222222,
  "longitude": 24.62388888888889
  },
  {
  "name": "Längelmävesi, Kaivanto",
  "latitude": 61.42472222222222,
  "longitude": 24.15
  },
  {
  "name": "Pääjärvi, Lammi",
  "latitude": 61.04972222222222,
  "longitude": 25.04888888888889
  },
  {
  "name": "Kernaalanjärvi W 35:24 ",
  "latitude": 60.85472222222222,
  "longitude": 24.635277777777777
  },
  {
  "name": "Haapaniemenjärvi Irjala W-As ",
  "latitude": 60.85305555555556,
  "longitude": 24.49138888888889
  },
  {
  "name": "Pääjärvi Etola W 35:18 ",
  "latitude": 61.051944444444445,
  "longitude": 25.129722222222224
  },
  {
  "name": "Kuivajärvi, Saari, Tammela",
  "latitude": 60.781666666666666,
  "longitude": 23.84722222222222
  },
  {
  "name": "Seinäjärvi Tammenlahti W 42:4b ",
  "latitude": 62.384166666666665,
  "longitude": 22.819166666666668
  },
  {
  "name": "Lappajärvi, Halkosaari",
  "latitude": 63.25944444444445,
  "longitude": 23.634999999999998
  },
  {
  "name": "Ullavanjärvi ",
  "latitude": 63.64138888888889,
  "longitude": 24.032777777777778
  },
  {
  "name": "Lestijärvi, Niskankorpi",
  "latitude": 63.57916666666667,
  "longitude": 24.732777777777777
  },
  {
  "name": "Lestijärvi Kk ",
  "latitude": 63.57361111111111,
  "longitude": 24.748611111111114
  },
  {
  "name": "Lestijoki Jämsä ",
  "latitude": 63.82166666666667,
  "longitude": 24.17527777777778
  },
  {
  "name": "Haapajärvi ",
  "latitude": 63.73166666666667,
  "longitude": 25.336944444444445
  },
  {
  "name": "Kalajoki Ylivieska W 53:6 ",
  "latitude": 64.0761111111111,
  "longitude": 24.533333333333335
  },
  {
  "name": "Pyhäjärvi, Pyhäsalmi",
  "latitude": 63.68722222222222,
  "longitude": 26.00027777777778
  }
  ];

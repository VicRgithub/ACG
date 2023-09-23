// Simuleer een lijst met auto's (dit zou normaal gesproken uit een database komen)
const autoDatabase = [

  
  { merk: 'Alfa Romeo', model: '4C', prijs: 80270, turing: 24131,  snelheid: 250, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat'},
  { merk: 'Alfa Romeo', model: 'Mito', prijs: 36351, turing: 0,  snelheid: 305, trekhaak: false, kofferbakgrootte: '60 kg', offroad: 'Straat'},
  { merk: 'Alfa Romeo', model: 'Giulia GTam 2021', prijs: 825000, turing: 193387,  snelheid: 175, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Zand'},
  { merk: 'Alfa Romeo', model: 'Stelvio', prijs: 256153, turing: 74356,  snelheid: 290, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'Zand'},
  { merk: 'Alfa Romeo', model: 'TZ3 Stradale', prijs: 630000, turing: 147677,  snelheid: 315, trekhaak: false, kofferbakgrootte: '30 kg', offroad: 'Straat'},

  { merk: 'Alpine', model: 'A110 S', prijs: 71000, turing: 16641,  snelheid: 235, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat'},

  { merk: 'Apollo', model: 'Crossmotor', prijs: 48649, turing: 12668,  snelheid: 175, trekhaak: false, kofferbakgrootte: '5 kg', offroad: 'Offroad'},

  { merk: 'Aston Martin', model: 'One', prijs: 545420, turing: 158289, snelheid: 350, trekhaak: false, kofferbakgrootte: '30 kg', offroad: 'Zand' },
  { merk: 'Aston Martin', model: 'DB-11', prijs: 911288, turing: 264472, snelheid: 315, trekhaak: false, kofferbakgrootte: '30 kg', offroad: 'Straat' },
  { merk: 'Aston Martin', model: 'DB-5', prijs: 210988, turing: 0, snelheid: 225, trekhaak: false, kofferbakgrootte: '30 kg', offroad: 'Straat' },
  { merk: 'Aston Martin', model: 'DBX', prijs: 320000, turing: 75010, snelheid: 315, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'Straat' },
  { merk: 'Aston Martin', model: 'Superleggera', prijs: 1432000, turing: 415592, snelheid: 365, trekhaak: false, kofferbakgrootte: '30 kg', offroad: 'Straat' },
  { merk: 'Aston Martin', model: 'Vantage V8 1977', prijs: 450000, turing: 130597, snelheid: 280, trekhaak: false, kofferbakgrootte: '30 kg', offroad: 'Straat' },
  { merk: 'Aston Martin', model: 'Vantage GT-12', prijs: 442080, turing: 128298, snelheid: 340, trekhaak: false, kofferbakgrootte: '30 kg', offroad: 'Straat' },
  { merk: 'Aston Martin', model: 'Vulcan', prijs: 612621, turing: 184183, snelheid: 360, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Aston Martin', model: 'Victor', prijs: 925000, turing: 0, snelheid: 321, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },

  { merk: 'Audi', model: 'R8 2013', prijs: 581162, turing: 168662, snelheid: 325, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'A6', prijs: 118210, turing: 34304, snelheid: 285, trekhaak: false, kofferbakgrootte: '45 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'A6 Avant 2020', prijs: 189000, turing: 44302, snelheid: 295, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'A8', prijs: 210988, turing: 61232, snelheid: 245, trekhaak: false, kofferbakgrootte: '40 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'F103', prijs: 34000, turing: 7969, snelheid: 145, trekhaak: false, kofferbakgrootte: '40 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'RS3', prijs: 62675, turing: 18187, snelheid: 245, trekhaak: false, kofferbakgrootte: '35 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'RS3 2020', prijs: 220000, turing: 0, snelheid: 281, trekhaak: false, kofferbakgrootte: '40 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'RS2 Avant', prijs: 65000, turing: 15236, snelheid: 261, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'RS4', prijs: 60440, turing: 18170, snelheid: 250, trekhaak: true, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'RS5', prijs: 88895, turing: 25797, snelheid: 250, trekhaak: false, kofferbakgrootte: '30 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'RS5 2020', prijs: 254210, turing: 0, snelheid: 255, trekhaak: false, kofferbakgrootte: '35 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'RS6 C7 2014', prijs: 500000, turing: 117705, snelheid: 310, trekhaak: false, kofferbakgrootte: '55 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'S4', prijs: 179000, turing: 41957, snelheid: 266, trekhaak: false, kofferbakgrootte: '40 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'RS7 2013', prijs: 1100000, turing: 298782, snelheid: 290, trekhaak: false, kofferbakgrootte: '45 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'S3', prijs: 48875, turing: 5091, snelheid: 215, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'SQ5', prijs: 85652, turing: 24856, snelheid: 260, trekhaak: true, kofferbakgrootte: '55 kg', offroad: 'Zand' },
  { merk: 'Audi', model: 'Q7 2020', prijs: 340000, turing: 79698, snelheid: 295, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'S8 1998', prijs: 56314, turing: 16341, snelheid: 270, trekhaak: false, kofferbakgrootte: '40 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'RS3 2020 (ABT)', prijs: 230000, turing: 56312, snelheid: 301, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'S8 PLUS', prijs: 41891, turing: 0, snelheid: 260, trekhaak: false, kofferbakgrootte: '45 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'TTRS', prijs: 50264, turing: 15109, snelheid: 275, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'TTS', prijs: 66938, turing: 19424, snelheid: 255, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'E-Tron GT 2018', prijs: 798000, turing: 187056, snelheid: 269, trekhaak: true, kofferbakgrootte: '45 kg', offroad: 'Straat' },
  { merk: 'Audi', model: 'RS7 C8', prijs: 1250000, turing: 281292, snelheid: 340, trekhaak: false, kofferbakgrootte: '60 kg', offroad: 'Straat' },

  { merk: 'Bentley', model: 'Continental GT Conv', prijs: 900000, turing: 210969, snelheid: 345, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Bentley', model: 'Continental GT Number One', prijs: 1000000, turing: 234410, snelheid: 350, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },

  { merk: 'BMW', model: 'M5 Wagon', prijs: 134210, turing: 38949, snelheid: 260, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'M2 2018', prijs: 49360, turing: 0, snelheid: 265, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'M3 Touring Competition 2022', prijs: 425087, turing: 99642, snelheid: 281, trekhaak: false, kofferbakgrootte: '55 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'M5 1995', prijs: 167500, turing: 39262, snelheid: 240, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'M8 GTE', prijs: 681000, turing: 159631, snelheid: 316, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'M2 Coupé 2023', prijs: 60000, turing: 0, snelheid: 252, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'E36 Cabrio', prijs: 40000, turing: 9375, snelheid: 245, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'M5 2020', prijs: 406254, turing: 117901, snelheid: 330, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'X7 M50i', prijs: 275220, turing: 79873, snelheid: 240, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'Zand' },
  { merk: 'BMW', model: 'M8', prijs: 680270, turing: 197426, snelheid: 305, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'S1000 RR 2019', prijs: 112782, turing: 29372, snelheid: 310, trekhaak: false, kofferbakgrootte: '5 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'M5 E60', prijs: 123080, turing: 35719, snelheid: 260, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'M4', prijs: 105840, turing: 30713, snelheid: 290, trekhaak: false, kofferbakgrootte: '60 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'BMW M1', prijs: 317290, turing: 92081, snelheid: 265, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'M135i', prijs: 54321, turing: 15763, snelheid: 250, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'M3 E30', prijs: 34420, turing: 9990, snelheid: 235, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'M3 E46', prijs: 52670, turing: 15283, snelheid: 230, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'M4 Competition', prijs: 325651, turing: 94509, snelheid: 275, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'M5 E28', prijs: 25760, turing: 7475, snelheid: 220, trekhaak: false, kofferbakgrootte: '70 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'X5', prijs: 50772, turing: 14733, snelheid: 210, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'M3 E36', prijs: 48000, turing: 11249, snelheid: 248, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'X6M F16', prijs: 888000, turing: 49608, snelheid: 255, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'Zand' },
  { merk: 'BMW', model: 'X5M 2020', prijs: 595000, turing: 139473, snelheid: 292, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Zand' },
  { merk: 'BMW', model: 'Z4 M40i', prijs: 329000, turing: 77119, snelheid: 252, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'BMW', model: '750 li', prijs: 589000, turing: 138066, snelheid: 293, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'BMW', model: 'i8', prijs: 780000, turing: 182838, snelheid: 305, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },

  { merk: 'Brabus', model: 'B63S', prijs: 224549, turing: 65166, snelheid: 295, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'Zand' },
  { merk: 'Brabus', model: 'G900 Rocket 2020', prijs: 1222222, turing: 289393, snelheid: 314, trekhaak: false, kofferbakgrootte: '24 kg', offroad: 'Offroad' },
  { merk: 'Brabus', model: 'Brabus 800', prijs: 628310, turing: 182345, snelheid: 340, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Brabus', model: 'Brabus 800 rocket GT63S', prijs: 978111, turing: 229276, snelheid: 332, trekhaak: false, kofferbakgrootte: '55 kg', offroad: 'Straat' },

  { merk: 'Buick', model: 'GNX', prijs: 33423, turing: 7833, snelheid: 200, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },

  { merk: 'Chevrolet', model: 'Camaro 1969', prijs: 27503, turing: 7979, snelheid: 230, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Chevrolet', model: 'El Camino 1959', prijs: 59500, turing: 0, snelheid: 175, trekhaak: false, kofferbakgrootte: '55 kg', offroad: 'Straat' },
  { merk: 'Chevrolet', model: 'Vega GT 1971', prijs: 133000, turing: 31174, snelheid: 181, trekhaak: false, kofferbakgrootte: '35 kg', offroad: 'Straat' },
  { merk: 'Chevrolet', model: 'Corvette 1954', prijs: 30000, turing: 0, snelheid: 165, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Chevrolet', model: 'Camaro SS 2020', prijs: 226000, turing: 49609, snelheid: 297, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Chevrolet', model: 'Tahoe', prijs: 23402, turing: 6790, snelheid: 210, trekhaak: true, kofferbakgrootte: '150 kg', offroad: 'Zand' },

  { merk: 'Citroen', model: 'DS3', prijs: 25702, turing: 7458, snelheid: 180, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Citroen', model: 'C4', prijs: 29875, turing: 7001, snelheid: 160, trekhaak: false, kofferbakgrootte: '55 kg', offroad: 'Straat' },

  { merk: 'Cadillac', model: 'CTS V 2017', prijs: 439612, turing: 103048, snelheid: 360, trekhaak: false, kofferbakgrootte: '35 kg', offroad: 'Straat' },
  { merk: 'Cadillac', model: 'Escalade', prijs: 69000, turing: 20023, snelheid: 210, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'Zand' },

  { merk: 'Corvette', model: 'C8', prijs: 261860, turing: 75995, snelheid: 300, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Corvette', model: 'C7', prijs: 680000, turing: 197347, snelheid: 300, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Corvette', model: 'C6 R1', prijs: 100616, turing: 30246, snelheid: 295, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },

  { merk: 'Dodge', model: 'Charger GT', prijs: 140000, turing: 32816, snelheid: 255, trekhaak: false, kofferbakgrootte: '30 kg', offroad: 'Straat' },
  { merk: 'Dodge', model: 'Challenger Hellcat', prijs: 500000, turing: 145110, snelheid: 300, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Dodge', model: 'Viper 2008', prijs: 480000, turing: 112515, snelheid: 310, trekhaak: false, kofferbakgrootte: '30 kg', offroad: 'Straat' },
  { merk: 'Dodge', model: 'Charger 2017', prijs: 39657, turing: 11507, snelheid: 270, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Dodge', model: 'Demon', prijs: 201050, turing: 58345, snelheid: 270, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Zand' },
  { merk: 'Dodge', model: 'RAM', prijs: 24380, turing: 6619, snelheid: 265, trekhaak: true, kofferbakgrootte: '200 kg', offroad: 'Offroad' },
  { merk: 'Dodge', model: 'Ram 1500', prijs: 750000, turing: 175806, snelheid: 220, trekhaak: true, kofferbakgrootte: '325 kg', offroad: 'Offroad' },
  { merk: 'Dodge', model: 'Charger RT 1969', prijs: 60000, turing: 14063, snelheid: 235, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Dodge', model: 'Charger 2016', prijs: 135000, turing: 31643, snelheid: 310, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },

  { merk: 'Ducati', model: 'D99', prijs: 85249, turing: 22200, snelheid: 295, trekhaak: false, kofferbakgrootte: '5 kg', offroad: 'Straat' },
  { merk: 'Ducati', model: 'Diavel', prijs: 69420, turing: 18337, snelheid: 265, trekhaak: false, kofferbakgrootte: '5 kg', offroad: 'Straat' },
  { merk: 'Ducati', model: 'V4 R', prijs: 114567, turing: 23443, snelheid: 295, trekhaak: false, kofferbakgrootte: '5 kg', offroad: 'Straat' },

  { merk: 'Ferrari', model: 'F12 TDF', prijs: 669420, turing: 194277, snelheid: 342, trekhaak: false, kofferbakgrootte: '30 kg', offroad: 'Straat' },
  { merk: 'Ferrari', model: '458 Italia', prijs: 982340, turing: 285092, snelheid: 310, trekhaak: false, kofferbakgrootte: '30 kg', offroad: 'Straat' },
  { merk: 'Ferrari', model: '458 Speciale', prijs: 962410, turing: 279308, snelheid: 335, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Ferrari', model: '812 Superfast', prijs: 711330, turing: 206439, snelheid: 340, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Ferrari', model: '812 Competizione', prijs: 1200000, turing: 348264, snelheid: 330, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Ferrari', model: 'F8 Spider', prijs: 698400, turing: 202684, snelheid: 345, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Ferrari', model: 'F8 Tribito', prijs: 1700000, turing: 493374, snelheid: 342, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Ferrari', model: 'F50', prijs: 356876, turing: 103570, snelheid: 300, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Ferrari', model: 'LaFerrari', prijs: 3000000, turing: 870660, snelheid: 380, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Ferrari', model: '488 Pista Spider', prijs: 1300000, turing: 377286, snelheid: 345, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Ferrari', model: 'Roma', prijs: 617305, turing: 179151, snelheid: 315, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Ferrari', model: 'SF90', prijs: 1250000, turing: 115098, snelheid: 325, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Ferrari', model: '488 Spider', prijs: 1300000, turing: 301733, snelheid: 329, trekhaak: false, kofferbakgrootte: '150 kg', offroad: 'Straat' },
  { merk: 'Ferrari', model: '288 GTO', prijs: 589000, turing: 0, snelheid: 275, trekhaak: false, kofferbakgrootte: '150 kg.', offroad: 'Straat' },
  { merk: 'Ferrari', model: '812 Mansory Stallone', prijs: 1250000, turing: 0, snelheid: 325, trekhaak: false, kofferbakgrootte: '150 kg.', offroad: 'Straat' },
  { merk: 'Ferrari', model: '250 GTO 1952', prijs: 245250, turing: 0, snelheid: 270, trekhaak: false, kofferbakgrootte: '150 kg.', offroad: 'Straat' },

  { merk: 'Fiat', model: '124 Spider', prijs: 21539, turing: 6249, snelheid: 220, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Fiat', model: 'Multipla', prijs: 20148, turing: 5845, snelheid: 165, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Fiat', model: 'Punto', prijs: 22540, turing: 6540, snelheid: 195, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Fiat', model: 'Abarth 595', prijs: 20148, turing: 5845, snelheid: 0, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Ford', model: 'Mustang Fastback', prijs: 250000, turing: 72553, snelheid: 210, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Ford', model: 'escort RS', prijs: 40000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},
  { merk: 'Ford', model: 'expedition', prijs: 60000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'StrZandaat'},
  { merk: 'Ford', model: 'fiesta', prijs: 20000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},
  { merk: 'Ford', model: 'Everest', prijs: 51710, turing: 15005, snelheid: 190, trekhaak: true, kofferbakgrootte: '100 kg', offroad: 'Offroad' },
  { merk: 'Ford', model: 'mach E', prijs: 285000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},
  { merk: 'Ford', model: 'Focus RS', prijs: 22287, turing: 6465, snelheid: 230, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Ford', model: 'ka', prijs: 22500, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},
  { merk: 'Ford', model: 'GT 2017', prijs: 698000, turing: 0, snelheid: 360, trekhaak: false, kofferbakgrootte: '150 kg', offroad: 'Straat' },
  { merk: 'Ford', model: 'GT 2005', prijs: 640000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},
  { merk: 'Ford', model: 'Mustang', prijs: 340000, turing: 98673, snelheid: 265, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Ford', model: 'escort mk1', prijs: 45000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},
  { merk: 'Ford', model: 'Speedo', prijs: 14260, turing: 4136, snelheid: 190, trekhaak: true, kofferbakgrootte: '400 kg', offroad: 'Straat' },
  { merk: 'Ford', model: 'raptor 2017', prijs: 210000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Offroad'},
  { merk: 'Ford', model: 'Shelby', prijs: 70860, turing: 20562, snelheid: 280, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Ford', model: 'torino 1970', prijs: 45750, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},
  { merk: 'Ford', model: 'bronco wildtrak', prijs: 225000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Offroad'},
  { merk: 'Ford', model: 'mach E 1400', prijs: 435000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Zand'},
  { merk: 'Ford', model: 'mustang boss 302', prijs: 178000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},
  { merk: 'Ford', model: 'deluxe 1940', prijs: 32000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},
  
  { merk: 'GMC', model: 'Sierra 2021', prijs: 45840, turing: 13302, snelheid: 170, trekhaak: true, kofferbakgrootte: '200 kg', offroad: 'Offroad' },

  { merk: 'Gumpert', model: 'arrow', prijs: 3200000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},
  { merk: 'Gumpert', model: 'intensa emozione', prijs: 2000000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},

  { merk: 'Harley Davidson', model: 'fatboy', prijs: 80000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},
  { merk: 'Harley Davidson', model: 'Streetglide', prijs: 109806, turing: 31866, snelheid: 150, trekhaak: false, kofferbakgrootte: '10 kg', offroad: 'Straat' },
  { merk: 'Harley Davidson', model: 'V-rod', prijs: 11736, turing: 0, snelheid: 230, trekhaak: false, kofferbakgrootte: '5 kg', offroad: 'Straat' },
  { merk: 'Harley Davidson', model: 'knucklehead', prijs: 65000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},
  { merk: 'Harley Davidson', model: 'krust', prijs: 54321, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},

  { merk: 'Honda', model: 'CBR 1000R', prijs: 90550, turing: 23582, snelheid: 290, trekhaak: false, kofferbakgrootte: '5 kg', offroad: 'Straat' },
  { merk: 'Honda', model: 'S2000 AP2', prijs: 61139, turing: 17742, snelheid: 270, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Honda', model: 'Civic Type R EK9', prijs: 21420, turing: 6214, snelheid: 250, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Honda', model: 'CRF 450 turbo', prijs: 47500, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},
  { merk: 'Honda', model: 'Civic Type R', prijs: 40410, turing: 11726, snelheid: 190, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Honda', model: 'African Twin', prijs: 168300, turing: 43831, snelheid: 250, trekhaak: false, kofferbakgrootte: '5 kg', offroad: 'Straat' },
  { merk: 'Honda', model: 'NSX-R na1 92', prijs: 238000, turing: 0, snelheid: 280, trekhaak: false, kofferbakgrootte: '150 kg', offroad: 'Straat' },
  { merk: 'Honda', model: 'CB500x', prijs: 100000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},
  { merk: 'Honda', model: 'NSX NC1', prijs: 289000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},

  { merk: 'Hyundai', model: 'Velostar N', prijs: 69420, turing: 20145, snelheid: 210, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Hyundai', model: 'Elantra', prijs: 32000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},

  { merk: 'Hummer', model: 'Hummer H2', prijs: 142520, turing: 41359, snelheid: 160, trekhaak: true, kofferbakgrootte: '100 kg', offroad: 'Straat' },
  { merk: 'Hummer', model: 'Hummer H3', prijs: 170000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},

  { merk: 'Infiniti', model: 'Q60', prijs: 475220, turing: 137917, snelheid: 230, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },

  { merk: 'Indian', model: 'Roadmaster', prijs: 124420, turing: 0, snelheid: 190, trekhaak: false, kofferbakgrootte: '10 kg', offroad: 'Straat' },

  { merk: 'Jaguar', model: 'XJ220', prijs: 624218, turing: 0, snelheid: 290, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Jaguar', model: 'CX75', prijs: 762100, turing: 181158, snelheid: 310, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Jaguar', model: 'fpace', prijs: 225000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},
  { merk: 'Jaguar', model: 'F type', prijs: 489000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Zand'},
  { merk: 'Jaguar', model: 'I pace', prijs: 185000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Zand'},

  { merk: 'Jeep', model: 'Wrangler Rubicon', prijs: 144230, turing: 41856, snelheid: 160, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'OffRoad' },
  { merk: 'Jeep', model: 'Rubicon', prijs: 189645, turing: 55037, snelheid: 150, trekhaak: true, kofferbakgrootte: '75 kg', offroad: 'OffRoad' },
  { merk: 'Jeep', model: 'Grand Cherokee', prijs: 150890, turing: 43788, snelheid: 270, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'OffRoad' },
  { merk: 'Jeep', model: 'Trailcat', prijs: 129420, turing: 37557, snelheid: 170, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'OffRoad' },
  { merk: 'Jeep', model: 'Trackhawk', prijs: 274890, turing: 79776, snelheid: 280, trekhaak: true, kofferbakgrootte: '100 kg', offroad: 'OffRoad' },
  { merk: 'Jeep', model: 'willys', prijs: 25000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},

  { merk: 'Kawasaki', model: 'Kx450f', prijs: 49500, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},

  { merk: 'KTM', model: 'EXC 530 Supermoto', prijs: 63963, turing: 0, snelheid: 215, trekhaak: false, kofferbakgrootte: '5 kg', offroad: 'Offroad' },

  
  { merk: 'Lotus', model: 'Evija (electrisch)', prijs: 528440, turing: 153361, snelheid: 216, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Lotus', model: 'Evora', prijs: 173880, turing: 45932, snelheid: 270, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Lotus', model: 'Exige V6', prijs: 411230, turing: 119344, snelheid: 265, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },


  { merk: 'Lamborghini', model: 'Huracan Performant', prijs: 703800, turing: 204255, snelheid: 330, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Lamborghini', model: 'Centenario', prijs: 3000000, turing: 870660, snelheid: 350, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Lamborghini', model: 'Gallardo LP570', prijs: 657420, turing: 190794, snelheid: 300, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Lamborghini', model: 'Murcielago SV', prijs: 962080, turing: 279213, snelheid: 325, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Lamborghini', model: 'Aventador SV', prijs: 1434250, turing: 378883, snelheid: 310, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Lamborghini', model: 'Aventador SVJ', prijs: 2169420, turing: 629607, snelheid: 330, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Lamborghini', model: 'Sesto Elemento', prijs: 3269111, turing: 0, snelheid: 355, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Lamborghini', model: 'Huracan STO 2021', prijs: 1200000, turing: 0, snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat' },
  { merk: 'Lamborghini', model: 'Urus', prijs: 643770, turing: 67067, snelheid: 300, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'Straat' },

  { merk: 'Land Rover', model: 'Range Rover', prijs: 290000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Zand'},
  { merk: 'Land Rover', model: 'Defender V8 70th edition', prijs: 111111, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Offroad'},

  { merk: 'Lexus', model: 'LC350', prijs: 21402, turing: 6498, snelheid: 205, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },

  { merk: 'MINI', model: 'Cooper GP', prijs: 41337, turing: 10072, snelheid: 250, trekhaak: false, kofferbakgrootte: '40 kg', offroad: 'Straat' },

  { merk: 'Mitsubishi', model: 'Lancer EVO VI', prijs: 55324, turing: 16054, snelheid: 230, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Mitsubishi', model: 'GTO', prijs: 128360, turing: 35339, snelheid: 240, trekhaak: false, kofferbakgrootte: '40 kg', offroad: 'Straat' },

  { merk: 'MV Agusta', model: 'F4 RR', prijs: 98321, turing: 25605, snelheid: 295, trekhaak: false, kofferbakgrootte: '5 kg', offroad: 'Straat' },

  { merk: 'Maserati', model: 'Levante', prijs: 349480, turing: 101424, snelheid: 290, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'Zand' },
  { merk: 'Maserati', model: 'GT', prijs: 218210, turing: 63326, snelheid: 290, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },

  { merk: 'Mazda', model: 'MX 5', prijs: 50000, turing: 14509, snelheid: 195, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Mazda', model: 'RX 7', prijs: 75324, turing: 21858, snelheid: 225, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },

  { merk: 'McLaren', model: '570 GT', prijs: 1020999, turing: 296311, snelheid: 305, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'McLaren', model: '765LT Spider', prijs: 1000000, turing: 290220, snelheid: 330, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'McLaren', model: '600LT', prijs: 468480, turing: 135960, snelheid: 305, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'McLaren', model: '720s', prijs: 980440, turing: 294767, snelheid: 330, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'McLaren', model: 'MP4-12C', prijs: 704210, turing: 204373, snelheid: 330, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },

  { merk: 'Mercedes', model: 'G63 AMG 2022', prijs: 329214, turing: 95542, snelheid: 260, trekhaak: true, kofferbakgrootte: '100 kg', offroad: 'Offroad' },
  { merk: 'Mercedes', model: 'CLS', prijs: 135440, turing: 39305, snelheid: 300, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Mercedes', model: 'AMG c63s', prijs: 378651, turing: 109890, snelheid: 275, trekhaak: false, kofferbakgrootte: '65 kg', offroad: 'Straat' },
  { merk: 'Mercedes', model: 'c63w205', prijs: 198237, turing: 57531, snelheid: 260, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Mercedes', model: 'CLA 45 AMG', prijs: 97205, turing: 22741, snelheid: 240, trekhaak: false, kofferbakgrootte: '65 kg', offroad: 'Straat' },
  { merk: 'Mercedes', model: 'G65 AMG', prijs: 249110, turing: 72295, snelheid: 230, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'Offroad' },
  { merk: 'Mercedes', model: 'Lumma G770', prijs: 353540, turing: 102602, snelheid: 260, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'Offroad' },
  { merk: 'Mercedes', model: 'A45 AMG', prijs: 50887, turing: 14766, snelheid: 240, trekhaak: false, kofferbakgrootte: '30 kg', offroad: 'Straat' },
  { merk: 'Mercedes', model: '300 SL HQ 1954', prijs: 175000, turing: 50786, snelheid: 0, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Mercedes', model: 'Sprinter 211 CDI', prijs: 119000, turing: 27893, snelheid: 180, trekhaak: false, kofferbakgrootte: '200 kg', offroad: 'Zand' },
  { merk: 'Mercedes', model: 'Vito 250', prijs: 134000, turing: 38888, snelheid: 0, trekhaak: true, kofferbakgrootte: '', offroad: 'Zand' },
  { merk: 'Mercedes', model: 'Blackseries GT', prijs: 721380, turing: 209357, snelheid: 326, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Mercedes', model: 'SLR McLaren 2006', prijs: 668000, turing: 193865, snelheid: 320, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Mercedes', model: 'X-Klasse', prijs: 34900, turing: 10126, snelheid: 175, trekhaak: true, kofferbakgrootte: '', offroad: 'Offroad' },
  { merk: 'Mercedes', model: 'GLE 53 AMG', prijs: 680000, turing: 0, snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Zand' },
  { merk: 'Mercedes', model: 'SLS', prijs: 695400, turing: 201818, snelheid: 300, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Mercedes', model: 'GT63', prijs: 408320, turing: 118499, snelheid: 295, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Mercedes', model: 'S63 AMG', prijs: 689500, turing: 200103, snelheid: 0, trekhaak: false, kofferbakgrootte: '70 kg', offroad: 'Straat' },
  { merk: 'Mercedes', model: 'Benz CLK GTR 98', prijs: 1321654, turing: 0, snelheid: 310, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Mercedes', model: '500E', prijs: 38000, turing: 0, snelheid: 230, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Mercedes', model: 'Benz 190E', prijs: 45222, turing: 0, snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat' },
  { merk: 'Mercedes', model: 'S63 AMG Coupe', prijs: 442820, turing: 128512, snelheid: 305, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },

  { merk: 'Nissan', model: 'Skyline 25GT', prijs: 59934, turing: 9476, snelheid: 260, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Nissan', model: 'GT-50', prijs: 470050, turing: 136416, snelheid: 340, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Nissan', model: 'Skyline 2000 GTR', prijs: 55555, turing: 0, snelheid: 0, trekhaak: false, kofferbakgrootte: 'N.V.T.', offroad: 'Straat' },
  { merk: 'Nissan', model: 'GTR', prijs: 210020, turing: 60951, snelheid: 300, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Nissan', model: '370Z', prijs: 75000, turing: 21764, snelheid: 265, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Nissan', model: 'Patrol', prijs: 146548, turing: 42527, snelheid: 210, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'Offroad' },
  { merk: 'Nissan', model: 'Fairlady Z', prijs: 40352, turing: 0, snelheid: 195, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Nissan', model: 'Silvia S15', prijs: 85000, turing: 23401, snelheid: 260, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Nissan', model: 'R34 Skyline GTR', prijs: 53739, turing: 17338, snelheid: 240, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },

  { merk: 'Peugeot', model: '206', prijs: 30452, turing: 8835, snelheid: 185, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Peugeot', model: '308', prijs: 31153, turing: 9038, snelheid: 165, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Peugeot', model: 'Rifter', prijs: 45068, turing: 0, snelheid: 170, trekhaak: false, kofferbakgrootte: 'N.V.T.', offroad: 'Zand' },

  { merk: 'Polestar', model: 'One', prijs: 198300, turing: 57548, snelheid: 250, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },

  { merk: 'Porsche', model: '993 GT2 RWB', prijs: 225328, turing: 65394, snelheid: 270, trekhaak: false, kofferbakgrootte: '70 kg', offroad: 'Straat' },
  { merk: 'Porsche', model: 'Panamera', prijs: 580482, turing: 168464, snelheid: 300, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Porsche', model: '911 Carrera S', prijs: 467238, turing: 135599, snelheid: 280, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Porsche', model: 'GT3RS', prijs: 387913, turing: 112578, snelheid: 290, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Porsche', model: 'GT3 2022', prijs: 789000, turing: 228982, snelheid: 340, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Porsche', model: 'Macan Turbo S', prijs: 110260, turing: 31997, snelheid: 290, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'Zand' },
  { merk: 'Porsche', model: 'Speedster 356', prijs: 163524, turing: 0, snelheid: 190, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },
  { merk: 'Porsche', model: 'Taycan Turbo S', prijs: 800000, turing: 232176, snelheid: 275, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Porsche', model: 'GT2RS', prijs: 180230, turing: 55304, snelheid: 295, trekhaak: false, kofferbakgrootte: '70 kg', offroad: 'Straat' },
  { merk: 'Porsche', model: 'Cayman GT4', prijs: 800000, turing: 0, snelheid: 300, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Porsche', model: '911 Turbo S', prijs: 838490, turing: 243344, snelheid: 315, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Porsche', model: 'Cayenne', prijs: 245000, turing: 0, snelheid: 0, trekhaak: false, kofferbakgrootte: 'N.V.T.', offroad: 'Zand' },
  { merk: 'Porsche', model: 'Speedster', prijs: 340300, turing: 98760, snelheid: 300, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },

  { merk: 'Pagani', model: 'Huayra', prijs: 3540420, turing: 0, snelheid: 355, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },

  { merk: 'Renault', model: 'Clio', prijs: 16675, turing: 4837, snelheid: 150, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Renault', model: 'Espace', prijs: 61420, turing: 17822, snelheid: 200, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Zand' },
  { merk: 'Renault', model: 'Clio RS', prijs: 26976, turing: 7826, snelheid: 195, trekhaak: false, kofferbakgrootte: '70 kg', offroad: 'Straat' },
  { merk: 'Renault', model: 'Megane', prijs: 35098, turing: 9139, snelheid: 280, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Zand' },

  { merk: 'Rolls Royce', model: 'Phantom', prijs: 1500000, turing: 435330, snelheid: 240, trekhaak: false, kofferbakgrootte: '75 kg', offroad: 'Straat' },

  { merk: 'Subaru', model: 'WRX STI', prijs: 40819, turing: 19021, snelheid: 245, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Zand' },
  { merk: 'Subaru', model: 'BRZ', prijs: 27594, turing: 8007, snelheid: 215, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Subaru', model: 'Impreza WRX STI', prijs: 65544, turing: 11845, snelheid: 245, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Zand' },

  { merk: 'Toyota', model: 'Supra', prijs: 58325, turing: 16925, snelheid: 250, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Toyota', model: 'A90 Pandem', prijs: 110856, turing: 32169, snelheid: 285, trekhaak: false, kofferbakgrootte: '20 kg', offroad: 'Straat' },
  { merk: 'Toyota', model: '2000GT 1969', prijs: 112000, turing: 0, snelheid: 0, trekhaak: false, kofferbakgrootte: 'N.V.T.', offroad: 'Straat' },
  { merk: 'Toyota', model: 'LC100', prijs: 85420, turing: 8897, snelheid: 205, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'Straat' },

  { merk: 'Tesla', model: 'Model X', prijs: 1000000, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Zand'},

  { merk: 'Tunak', model: 'Tuk Tuk', prijs: 50000, turing: 3673, snelheid: 68, trekhaak: false, kofferbakgrootte: '5 kg', offroad: 'Straat' },

  { merk: 'Toyota', model: 'Aerox R', prijs: 50000, turing: 14509, snelheid: 60, trekhaak: false, kofferbakgrootte: '5kg', offroad: 'Straat' },
  { merk: 'Toyota', model: 'Bromfiets', prijs: 50000, turing: 0, snelheid: 100, trekhaak: false, kofferbakgrootte: '5kg', offroad: 'Straat' },

  { merk: 'Vespa', model: 'Sprint 2016', prijs: 37995, turing: 11025, snelheid: 145, trekhaak: false, kofferbakgrootte: '5 kg', offroad: 'Straat' },

  { merk: 'Volkswagen', model: 'Amarok', prijs: 53230, turing: 0, snelheid: 185, trekhaak: false, kofferbakgrootte: '70 kg', offroad: 'Offroad' },
  { merk: 'Volkswagen', model: 'Golf MK6', prijs: 26093, turing: 7560, snelheid: 250, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Volkswagen', model: 'Golf GTI MK1', prijs: 9487, turing: 2751, snelheid: 190, trekhaak: false, kofferbakgrootte: '25 kg', offroad: 'Straat' },
  { merk: 'Volkswagen', model: 'Beetle 67', prijs: 48000, turing: 0, snelheid: 0, trekhaak: false, kofferbakgrootte: 'N.V.T.', offroad: 'Straat' },
  { merk: 'Volkswagen', model: 'Scirocco', prijs: 68000, turing: 38888, snelheid: 242, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Volkswagen', model: 'Golf MK7', prijs: 31958, turing: 0, snelheid: 250, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },
  { merk: 'Volkswagen', model: 'Transporter', prijs: 76777, turing: 0, snelheid: 210, trekhaak: false, kofferbakgrootte: '100 kg', offroad: 'Zand' },
  { merk: 'Volkswagen', model: 'Type 262', prijs: 33700, turing: 9778, snelheid: 145, trekhaak: false, kofferbakgrootte: '200 kg', offroad: 'Straat' },
  { merk: 'Volkswagen', model: 'Golf MK8 Gti Clubsport', prijs: 65000, turing: 15236, snelheid: 266, trekhaak: false, kofferbakgrootte: '50 kg', offroad: 'Straat' },

  { merk: 'Volvo', model: 'S60 Polestar', prijs: 28031, turing: 8133, snelheid: 250, trekhaak: false, kofferbakgrootte: '75kg', offroad: 'Straat' },
  { merk: 'Volvo', model: '850 1994', prijs: 32000, turing: 0, snelheid: 0, trekhaak: false, kofferbakgrootte: 'N.V.T', offroad: 'Straat' },
  { merk: 'Volvo', model: 'XC90', prijs: 49093, turing: 14245, snelheid: 185, trekhaak: true, kofferbakgrootte: '100kg', offroad: 'Zand' },
  
  { merk: 'Yamaha', model: 'YZF-R6 2015', prijs: 144000, turing: 0, snelheid: 0, trekhaak: false, kofferbakgrootte: '5kg', offroad: 'Straat' },
  { merk: 'Yamaha', model: 'R1', prijs: 145000, turing: 0, snelheid: 0, trekhaak: false, kofferbakgrootte: '5kg', offroad: 'Straat' },



  //{ merk: '', model: '', prijs: 0, turing: 0,  snelheid: 0, trekhaak: false, kofferbakgrootte: '', offroad: 'Straat'},
  
  // Voeg meer auto's toe...
];

// Haal referenties naar de dropdowns en resultaten
const merkDropdown = document.getElementById('merk');
const modelDropdown = document.getElementById('model');
const offroadDropdown = document.getElementById('offroad');
const trekhaakCheckbox = document.getElementById('trekhaak');
const prijsDropdown = document.getElementById('prijs');
const kofferbakDropdown = document.getElementById('kofferbak');
const snelheidDropdown = document.getElementById('snelheid');
const turingDropdown = document.getElementById('turing'); // Voeg referentie toe naar Turing kosten dropdown
const resultatenDiv = document.getElementById('resultaten');
const resultaatTeller = document.getElementById('resultaatTeller');

// Vul de merken dropdown
const uniekeMerken = [...new Set(autoDatabase.map(auto => auto.merk))];
merkDropdown.innerHTML = '<option value="">Alle Merken</option>';
uniekeMerken.forEach(merk => {
  merkDropdown.innerHTML += `<option value="${merk}">${merk}</option>`;
});

// Event listener voor de merkdropdown
merkDropdown.addEventListener('change', updateModelDropdown);

// Functie om de modellendropdown bij te werken op basis van het geselecteerde merk
function updateModelDropdown() {
  const geselecteerdMerk = merkDropdown.value;
  modelDropdown.innerHTML = '<option value="">Alle Modellen</option>';
  if (geselecteerdMerk) {
    const beschikbareModellen = [...new Set(autoDatabase.filter(auto => auto.merk === geselecteerdMerk).map(auto => auto.model))];
    beschikbareModellen.forEach(model => {
      modelDropdown.innerHTML += `<option value="${model}">${model}</option>`;
    });
  }
  filterResultaten(); // Filter resultaten bijwerken wanneer het merk wordt gewijzigd
}

// Event listeners voor filters, inclusief de nieuwe Turing kosten dropdown
merkDropdown.addEventListener('change', filterResultaten);
modelDropdown.addEventListener('change', filterResultaten);
offroadDropdown.addEventListener('change', filterResultaten);
trekhaakCheckbox.addEventListener('change', filterResultaten);
prijsDropdown.addEventListener('change', filterResultaten);
kofferbakDropdown.addEventListener('change', filterResultaten);
snelheidDropdown.addEventListener('change', filterResultaten);
turingDropdown.addEventListener('change', filterResultaten); // Luister naar de Turing kosten dropdown

// Functie om de resultaten te filteren op basis van de geselecteerde filters
function filterResultaten() {
  const geselecteerdMerk = merkDropdown.value;
  const geselecteerdModel = modelDropdown.value;
  const geselecteerdOffroad = offroadDropdown.value;
  const geselecteerdeTrekhaak = trekhaakCheckbox.checked;
  const geselecteerdePrijs = prijsDropdown.value;
  const geselecteerdeKofferbak = kofferbakDropdown.value;
  const geselecteerdeSnelheid = snelheidDropdown.value;
  const geselecteerdeTuring = turingDropdown.value; // Haal de geselecteerde Turing kosten op
  


  const gefilterdeAutos = autoDatabase.filter(auto => {
    if (geselecteerdMerk && auto.merk !== geselecteerdMerk) return false;
    if (geselecteerdModel && auto.model !== geselecteerdModel) return false;
    if (geselecteerdOffroad && auto.offroad !== geselecteerdOffroad) return false;
    if (geselecteerdeTrekhaak && !auto.trekhaak) return false;

    const prijsRange = geselecteerdePrijs.split('-');
    if (geselecteerdePrijs && (auto.prijs < parseInt(prijsRange[0]) || auto.prijs > parseInt(prijsRange[1]))) return false;

    if (geselecteerdeKofferbak && auto.kofferbakgrootte !== geselecteerdeKofferbak) return false;

    const snelheid = parseInt(geselecteerdeSnelheid);
    if (geselecteerdeSnelheid && (isNaN(snelheid) || auto.snelheid < snelheid)) return false;

    // Voeg de filter op Turing kosten toe
    if (geselecteerdeTuring) {
      const turingRange = geselecteerdeTuring.split('-');
      if (geselecteerdeTuring && (auto.turing < parseInt(turingRange[0]) || auto.turing > parseInt(turingRange[1]))) return false;
    }

    return true;
  });

  toonResultaten(gefilterdeAutos);
  resultaatTeller.textContent = gefilterdeAutos.length;
  }

  

// Functie om de gefilterde resultaten weer te geven
function toonResultaten(autoLijst) {
  resultatenDiv.innerHTML = '';
  if (autoLijst.length === 0) {
    resultatenDiv.innerHTML = '<h3>Geen overeenkomende auto\'s gevonden.</h3>';
    return;
  }

  autoLijst.forEach(auto => {
    const autoDiv = document.createElement('div');
    autoDiv.classList.add('auto');
    autoDiv.innerHTML = `
      <h2>${auto.merk} ${auto.model}</h2>
      <p>Kostprijs: €${auto.prijs.toLocaleString()}</p>
      <p>Turing: €${auto.turing.toLocaleString()}</p>
      <p>Snelheid: ${auto.snelheid} km/h</p>
      <p>Offroad: ${auto.offroad}</p>
      <p>Trekhaak: ${auto.trekhaak ? 'Ja' : 'Nee'}</p>
      <p>Kofferbakgrootte: ${auto.kofferbakgrootte}</p>
      
    `;
    resultatenDiv.appendChild(autoDiv);
  });
}

// Toon alle auto's bij het laden van de pagina
toonResultaten(autoDatabase);

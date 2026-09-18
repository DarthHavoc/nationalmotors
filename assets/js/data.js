/* ============================================================
   INVENTORY DATA SOURCE
   This is the single file to wire your live feed into.
   For now it's a static array. To go live, replace window.INVENTORY
   with data from your DealerCenter outbound XML/CSV feed (map the
   fields to the shape below), or fetch it from /api/inventory.
   Add real photo URLs to each vehicle's photos:[] to replace placeholders.
   ============================================================ */
window.DOC=999;
window.INVENTORY=[
 {id:"NM2201",year:2022,make:"Tesla",model:"Model 3 Performance",price:31900,miles:38400,trans:"Automatic",drive:"AWD",fuel:"Electric",ev:true,engine:"Dual Motor Electric",range:"315 mi range",type:"Sedan",color:"Pearl White",interior:"Black",vin:"5YJ3E1EC0N1201",highlight:"Long Range · Track Mode",photos:[]},
 {id:"NM2202",year:2023,make:"Tesla",model:"Model Y Long Range",price:36500,miles:24100,trans:"Automatic",drive:"AWD",fuel:"Electric",ev:true,engine:"Dual Motor Electric",range:"330 mi range",type:"SUV",color:"Midnight Silver",interior:"Black",vin:"7SAYGDEE9P4402",highlight:"7-Seat · Tow Package",photos:[]},
 {id:"NM2203",year:2022,make:"Polestar",model:"2 Dual Motor",price:33900,miles:29750,trans:"Automatic",drive:"AWD",fuel:"Electric",ev:true,engine:"Dual Motor Electric",range:"249 mi range",type:"Sedan",color:"Void",interior:"Slate",vin:"LPSED3KA5N7781",highlight:"Performance Pack",photos:[]},
 {id:"NM2204",year:2021,make:"Ford",model:"Mustang Mach-E Premium",price:29900,miles:41200,trans:"Automatic",drive:"AWD",fuel:"Electric",ev:true,engine:"Dual Motor Electric",range:"270 mi range",type:"SUV",color:"Rapid Red",interior:"Black",vin:"3FMTK3SU7M9930",highlight:"",photos:[]},
 {id:"NM2205",year:2021,make:"BMW",model:"M340i xDrive",price:38900,miles:33600,trans:"8-Speed Automatic",drive:"AWD",fuel:"Gas",ev:false,engine:"3.0L I6 Turbo",range:"25/32 mpg",type:"Sedan",color:"Black Sapphire",interior:"Cognac",vin:"WBA5U9C08M2210",highlight:"M Sport · Premium Pkg",photos:[]},
 {id:"NM2206",year:2021,make:"Porsche",model:"Macan S",price:44900,miles:36800,trans:"7-Speed PDK",drive:"AWD",fuel:"Gas",ev:false,engine:"3.0L V6 Turbo",range:"17/23 mpg",type:"SUV",color:"Carrara White",interior:"Black",vin:"WP1AB2A55M6654",highlight:"Premium Plus Pkg",photos:[]},
 {id:"NM2207",year:2019,make:"Ram",model:"1500 Big Horn",price:26900,miles:69800,trans:"8-Speed Automatic",drive:"4WD",fuel:"Gas",ev:false,engine:"5.7L HEMI V8",range:"17/23 mpg",type:"Truck",color:"Bright White",interior:"Diesel Gray",vin:"1C6RREBT3K3390",highlight:"Crew Cab",photos:[]},
 {id:"NM2208",year:2020,make:"Honda",model:"Accord EX",price:19995,miles:52880,trans:"CVT",drive:"FWD",fuel:"Gas",ev:false,engine:"1.5L I4 Turbo",range:"30/38 mpg",type:"Sedan",color:"Modern Steel",interior:"Black",vin:"1HGCV1F4XL1120",highlight:"",photos:[]},
 {id:"NM2209",year:2019,make:"Honda",model:"CR-V EX-L",price:20495,miles:61200,trans:"CVT",drive:"AWD",fuel:"Gas",ev:false,engine:"1.5L I4 Turbo",range:"27/33 mpg",type:"SUV",color:"Gunmetal",interior:"Ivory",vin:"2HKRW2H88K4471",highlight:"Leather · Sunroof",photos:[]},
 {id:"NM2210",year:2018,make:"Toyota",model:"Camry SE",price:16995,miles:64210,trans:"8-Speed Automatic",drive:"FWD",fuel:"Gas",ev:false,engine:"2.5L I4",range:"28/39 mpg",type:"Sedan",color:"Celestial Silver",interior:"Black",vin:"4T1B11HK7J8802",highlight:"",photos:[]},
 {id:"NM2211",year:2020,make:"Jeep",model:"Grand Cherokee Limited",price:27900,miles:58300,trans:"8-Speed Automatic",drive:"4WD",fuel:"Gas",ev:false,engine:"3.6L V6",range:"19/26 mpg",type:"SUV",color:"Diamond Black",interior:"Black",vin:"1C4RJFBG5L5560",highlight:"Limited X",photos:[]},
 {id:"NM2212",year:2019,make:"Chevrolet",model:"Silverado 1500 LT",price:29900,miles:62400,trans:"8-Speed Automatic",drive:"4WD",fuel:"Gas",ev:false,engine:"5.3L V8",range:"16/22 mpg",type:"Truck",color:"Summit White",interior:"Jet Black",vin:"3GCUYDED9K7714",highlight:"Z71 Off-Road",photos:[]}
];
window.SOLD=[
 {id:"S01",year:2021,make:"Porsche",model:"911 Carrera",type:"Coupe",ev:false,photos:[]},
 {id:"S02",year:2022,make:"Tesla",model:"Model S Plaid",type:"Sedan",ev:true,photos:[]},
 {id:"S03",year:2020,make:"BMW",model:"M4 Competition",type:"Coupe",ev:false,photos:[]},
 {id:"S04",year:2021,make:"Audi",model:"RS5 Sportback",type:"Sedan",ev:false,photos:[]},
 {id:"S05",year:2022,make:"Polestar",model:"2 Performance",type:"Sedan",ev:true,photos:[]},
 {id:"S06",year:2019,make:"Chevrolet",model:"Corvette Z06",type:"Coupe",ev:false,photos:[]}
];
window.SAMPLE_FEATURES=["Apple CarPlay","Android Auto","Navigation System","Premium Sound System","Bluetooth","Backup Camera","Blind Spot Monitor","Adaptive Cruise Control","Lane Keep Assist","Heated Front Seats","Ventilated Seats","Leather Upholstery","Power Driver Seat","Dual-Zone Climate","Keyless Entry","Push-Button Start","Sunroof / Moonroof","Power Liftgate","Alloy Wheels","LED Headlights","Parking Sensors","Wireless Charging","Remote Start","Tire Pressure Monitoring"];

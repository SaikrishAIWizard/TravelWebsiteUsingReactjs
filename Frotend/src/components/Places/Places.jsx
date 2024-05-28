import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/img1_c.jpg";
import Img2 from "../../assets/places/img2_c.jpg";
import Img3 from "../../assets/places/img3_c.jpg";
import Img4 from "../../assets/places/img4_c.jpg";
import Img5 from "../../assets/places/img5_c.jpg";
import Img6 from "../../assets/places/img6_c.jpg";

const PlacesData = [
  {
    image: Img1,
    title: "CHR DHAM YATRA 11N12D",
    location: "EX DELHI",
    description:  `
    Day 1
    Departure From Delhi
    Meet Delhi Railway station And Board the Vehicle Departure to Haridwar (205 Kms).Night Journey.
    
    Day 2
    Haridwar - Rishikesh – Barkot
    Arrival at Haridwar. After Fresh up in Choultry / Hotel, proceed to Rishikesh (24 Kms), For Yatra Registration And Drive to Barkot (216 Kms / 7 hrs). Overnight stay
    
    Day 3
    Barkot - Yamunotri – Barkot
    Departure to Janakichatti (Approx. 45 km.) to shorten your trek by 5 Kms. Proceed to Yamunotri temple by walk / pony / doli (by own). (Approximate charges for both ways by horse would be ‘800/- to ‘1,200/- and doli ‘2,500/- to 3,500/- Approx). Return to Barkot. Overnight stay.
    
    Day 4
    Barkot – Uttarkashi
    Till lunch you are free to explore after that Proceed to Uttarkashi (80Kms). Upon arrival, Check into hotel.
    
    Day 5
    Uttarkashi - Gangotri – Uttarkashi
    Early morning (04 a.m.) Departure to Gangotri (100 Kms/5hours). Upon arrival at Gangotri, take a Holy Dip in the sacred Ganges, Perform Pooja and return to Uttarkshi. Overnight stay.
    
    Day 6
    Uttarkashi – Guptkashi / Rampur
    Morning departure to Guptkashi / Rampur (230 Kms). Upon arrival, transfer to hotel. Overnight Stay.
    
    Day 7
    Guptkashi / Rampur – Kedarnath – Guptkashi / Rampur
    Early hours proceed to Sonprayag (4 Kms.) then to Gaurikund (5 Kms.) by Govt. Jeep. and later Proceed to Kedarnath (17 Kms.) by pony. After Darshan / Pooja at Temple, return to Rampur. Overnight stay.
    
    Day 8
    Guptkashi / Rampur – Pipalkoti
    After breakfast enjoy leisure. Proceed to pipalkoti. Overnight stay.
    
    Day 9
    Pipalkoti – Badrinath
    After Breakfast Departure to Badrinath (80 kms). Upon arrival, visit Mana village, the last village before the Indo – Tibetan border, return back to Badrinath check into hotel. Visit evening ArtiAnd temple Darshan, Overnight stay.
    
    Day 10
    Badrinath – Srinagar
    Morning after darshan of Shri Badrinathji, And Perform PindPradanamAt Bram Kapal And drive to Srinagar (190 Kms). Upon arrival, check into hotel. Overnight stay.
    
    Day 11
    Srinagar – Haridwar – Delhi
    Departure to Haridwar (125 Kms) En route visit RishikeshShivananda Ashram, Ram jhoola, Swarg Ashram, Geeta Ashram, . After lunch proceed Have Holy bath in Ganges, andAarati in the Ganges at Har-Ki-Pauri in the evening. After dinner proceed to Delhi (205 Kms). Night Journey.
    
    Day 12
    Delhi
    Early Moring 04 A.M. Drop at Railway station or Drop Point with sweet Memories ………
    `,
    price: 22499,
    type: "Cultural Relax",
  },
  {
    image: Img2,
    title: "CHR DHAM YATRA 09N10D",
    location: "EX DELHI",
    description: `
    Detailed Tour Itinerary
    
    Day 1
    Delhi – Haridwar
    Departure to Haridwar. Check in to Hotel. Visit Haridwar Ganga Arti at HarikiPauri. Overnight stay at Haridwar.
    
    Day 2
    Haridwar – Janakichatti
    Departure to Janakichatti. Overnight stay at Janakichatti.
    
    Day 3
    Jankichatti - Yamunotri – Uttarkashi
    Departure to Yamunotri to shorten your trek by 5 Kms. Proceed to Yamunotri temple by walk / pony / doli (by own). (Approximate charges for both ways by horse would be ‘800/- to ‘1,200/- and doli ‘2,500/- to 3,500/- Approx). Overnight stay Uttarkashi.
    
    Day 4
    Uttarkashi - Gangotri – Uttarkashi
    Early morning (04 a.m.) Departure to Gangotri (100 Kms). Upon arrival at Gangotri, take a Holy Dip in the sacred Ganges, Perform Pooja and return to Uttarkashi. Overnight stay.
    
    Day 5
    Uttarkashi – Guptkashi / Rampur
    Morning departure to Guptkashi / Rampur (230 Kms). Upon arrival, transfer to hotel. Overnight Stay.
    
    Day 6
    Guptkashi / Rampur – Kedarnath
    Early hours proceed to Sonprayag (4 Kms.) then to Gaurikund (5 Kms.) by Govt. Jeep. and later Proceed to Kedarnath (17 Kms.) by pony. After Darshan / Pooja at Temple. Overnight stay at Kedarnath.
    
    Day 7
    Rampur – Pipalkoti
    After breakfast enjoy leisure. Proceed to Pipalkoti. Overnight stay.
    
    Day 8
    Pipalkoti – Badrinath - Pipalkoti
    After Breakfast Departure to Badrinath (80 kms). Upon arrival, visit Mana Village (if time allows you) then proceed to temple Darshan, Bram Kapal. And drive to Pipalkoti Overnight stay.
    
    Day 9
    Pipalkoti – Dehradun - Rishikesh
    Morning after breakfast proceed to Dehradun drop at Airport then proceed to Rishikesh. Visit Ram Jhula, Parmath Ashram. Overnight stay.
    
    Day 10
    Rishikesh - Delhi
    Morning after breakfast proceed to Delhi drop at airport For your further journey.
    
    Tour Inclusions
    Transport From During the Yatra Tour as Per Itinerary
    All Pickup & Drop at One Point
    All Accommodation on Double/Triple/Quad Sharing
    Breakfast & Dinner
    Accommodation For As Per Itinerary
    Yatra Registration Card
    Driver’s TADA
    All Fuel Charges
    All State Taxes
    All Toll Parking / Parking Fees
    Doctor on Call in the Hotel. (Charge Payable)
    10% Discount on Laundry Services
    Assistance Provided By the Driver throughout the Tour
    
    Tour Exclusions
    Camera fees, alcoholic/non-alcoholic beverages, bottled water and starters
    Services of the vehicle on leisure days and for sightseeing not included in the itinerary
    Entrance fees at all tourist attractions or any activities fees apart from inclusions
    Peak Season Charges
    Medical and Travel Insurance
    All personal expenses, optional tours and extra meals
    Anything not mentioned under "Inclusions"
    GST 5%
    If The person is Die during the tour then Co. Will not Responsible for Any claim i.e. import of Dead body or anything.
    Any upgradation in the hotel room category
    Any meals other than specified above
    `,
      price: 19999,
    type: "Cultural Relax",
  },
  {
    image: Img3,
    title: "CHAR DHAM BY HELICOPTER 4N5D",
    location: "India",
    description: `
    Detailed Tour Itinerary
    Day 1
    Dehradun
    Dehradun is the starting and ending point of the journey. Guests will be provided a complimentary stay on their date of arrival (no meals included). Guests will be picked up from Airport/Railway station, depending on their time of arrival. It is advisable to reach Dehradun by afternoon 02:00 pm or earlier. In the evening, guests shall be briefed by our staff about the tour and they will receive Sky Link Holiday duffle bags to carry their luggage for their journey ahead.
    
    Day 2
    Sahastradhara to Yamunotri
    This is officially the starting day of the Chardhamyatra. Guests must be ready for an early morning check-out at 05:00 am & will be picked up from Hotel by Sky Link Holiday at 0500 hrs, to be taken to SahastradharaHelidrome. where our ground crew would be ready to welcome the guest. Crew shall escort the guests to the hotel, which is at a walking distance. After breakfast around 0900 hrs, we proceed for Yamunotri Darshan. Approximate time taken for Yamunotri Temple Darshan: Approximately 05hrs 30mins (roundtrip). Yamunotri trek is 06 km one-way. Sightseeing at Kharsali: Hot Spring at Yamunotri Temple, Yamuna Mata Temple, Shani Temple.
    
    Day 3
    Yamunotri to Gangotri
    Guests should be ready to check-out by 0530 hrs. Departure from KharsaliHeli-base will be by 0630 hrs & the estimated time of arrival at Harsil will be 0700 hrs. Harsil– the Heli-base of your second Dham, is the most scenic and beautiful destination in the Chardham Tour. Our crew shall ensure that we engage the guests in the most beautiful sightseeing activities. Guests will be taken for Gangotri Dhamdarshan after breakfast around 0900 hrs. Approximate Time taken for Gangotri Temple Darshan: 3hrs 30 mins (round trip). The road distance to Gangotri temple is approx. 25 kms, which is roughly a 50-minute drive. Sightseeing at Harsil: Bagodi Village walk / Mukhwa Village walk / Short trek to Chholmi village/ Nature walk from Jhalla & Shiv Temple in Harsil.
    
    Day 4
    Gangotri to Sersi
    Guests should be ready to check out at 0600 hrs. Arrival at Sersi base will be by 0730 hrs. from where we operate the shuttle services for Kedarnathji shrine. Guests will be ferried to KedarnathDham in a shuttle services flight, after their breakfast around 1000 hrs. Guests will get approximately 02 hours’ time to have darshan & report back to the Kedarnath helipad. Our crew shall escort the guests to the temple. Approximate time taken for Kedarnath Temple Darshan: 02 hours. Passengers will be ferried in shuttle services flight to the Kedarnath shrine, which is approximately 07 minutes from Sersi. Sightseeing at Sersi: Triyuginarayan Temple – It is the venue of the celestial marriage of Lord Shiva & Goddess Parvati, or Gaurikund.
    
    Day 5
    Sersi to Badrinath (2215 mts/7265 ft)
    Guests shall have breakfast by 0700 hrs at Sersi & be ready for their flight to Badrinath by 0800 hrs. Guests will be taken for darshan to Badrinath temple in the afternoon. Approximate time taken for Badrinath Temple Darshan: It takes approximately 01-02 hrs to complete darshan at the Badrinath Temple. Guests are taken to the temple by car. Sightseeing at Badrinath: Hot Spring at Badrinath temple, Mana Village / Evening Aarti at Badrinath Temple – SwaranAarti/ChandiAarti (on additional payment basis at Badrinath).
    
    Day 6
    Badrinath to Sahastradhara
    Guests who have pre-booked MahaAbhishek Puja, they should be ready early morning by 0330 hrs to be transferred to the temple. Puja shall take place from 0430 hrs to 0630 hrs. Guests should be ready to check out at 0800 hrs. Estimated time of arrival will be 1000 hrs at Sahastradhara. On arrival, our base manager will be present to receive the guests. Later, they will be taken to Dehradun hotel to collect the luggage from cloak rooms, and then be dropped to airport/railway station for their departure. In case guests would like to spend an additional night at Dehradun, accommodation can be arranged by Sky Link Holiday at an additional cost. The same must be informed to us at the time of booking, whether they will be heading straight to airport/railway station or would like to be stay an additional night at the hotel in Dehradun. After the final transfer, we will bid farewell to the guests.
    
    This is the end of the Chardhamyatra.
    `,
    price: 168999,
    type: "Cultural Relax",
  },
  {
    image: Img4,
    title: "CHR DHAM YATRA 09N10D",
    location: "EX HARIDWAR",
    description: `
    Detailed Tour Itinerary
    Day 1
    Haridwar - Rishikesh – Barkot
    Arrival at Haridwar. After Fresh up in Choultry / Hotel, proceed to Rishikesh (24 Kms), For Yatra Registration and Drive to Barkot (216 km / 7 hrs). Overnight stay
    Note:-For the Green Card you have to wait for 4-5 Hrs (This is the Process by Govt. they check the Vehicle & take all the details of Passenger, then they allow for the journey )
    
    Day 2
    Barkot - Yamunotri – Barkot
    Departure to Janakichatti (Approx. 45 km.) to shorten your trek by 5 Kms. Proceed to Yamunotri temple by walk/pony / Doli (by own). (Approximate charges for both ways by horse would be ‘1500/- to ‘1,800/- and doli ‘3,500/- to 4,500/- Approx.) Return to Barkot. Overnight stay.
    
    Day 3
    Barkot – Uttarkashi
    Till lunch you are free to explore after that proceed to Uttarkashi (80Kms). Upon arrival, Check into hotel.
    
    Day 4
    Uttarkashi - Gangotri – Uttarkashi
    Early morning (04 a.m.) Departure to Gangotri (100 Kms/5hours). Upon arrival at Gangotri, take a Holy Dip in the sacred Ganges, Perform Pooja and return to Uttarkshi. Overnight stay.
    
    Day 5
    Uttarkashi – Guptkashi / Rampur
    Morning departure to Guptkashi / Rampur (230 Kms). Upon arrival, transfer to the hotel. Overnight Stay.
    
    Day 6
    Guptkashi / Rampur – Kedarnath
    Early hours proceed to Sonprayag (4 Kms.) then to Gaurikund (5 Kms.) by Govt. Jeep. and later Proceed to Kedarnath (17 Kms.) by pony. After Darshan / Pooja at Temple,.Overnight stay at Kedarnathji.
    Pilgrims going by Helicopter: Early morning proceed to Sirsi / Phata / Guptakashi Helipad to Kedarnath Helipad. Later, proceed to Kedarnath Temple by walk (1 Km.). After Darshan / Pooja at Temple, Overnight stay at Kedarnathji.
    Optional: You can take Helicopter tickets for Kedarnath to avoid the Trek (9500/- p.p. approx)
    NOTE:In case you are traveling by Helicopter / Walk / Pony / Doli, the return will be on the same day with night stay at Rampur. Those who are traveling by Walk (17 Kms. approx. each way) / Pony / Doli, have a start the trek early in the morning of Day 4 A.M., so that you can come back on the same day.
    
    Day 7
    Guptkashi / Rampur – Pipalkoti
    After breakfast enjoy leisure. Proceed to pipalkoti. Overnight stay.
    
    Day 8
    Pipalkoti – Badrinath
    After Breakfast Departure to Badrinath (80 kms). Upon arrival, visit Mana village, the last village before the Indo – Tibetan border, return back to Badrinath check into the hotel. Visit evening ArtiAnd temple Darshan, Overnight stay.
    
    Day 9
    Badrinath – Srinagar
    Morning after darshan of Shri Badrinathji, And Perform PindPradanamAt Bram KapalAnd drive to Srinagar (190 Kms). Upon arrival, check into the hotel. Overnight stay.
    
    Day 10
    Srinagar – Haridwar
    Departure to Haridwar (125 Kms) En-route visit RishikeshShivananda Ashram, Ram Jhoola, Swarg Ashram, Geeta Ashram, After lunch proceed Have Holy bath in the Ganges, and Aarati in the Ganges at Har-Ki-Pauri in the evening. Drop at Haridwar for your onward Journey.
    `,
    price: 19499,
    type: "Cultural Relax",
  },
  {
    image: Img5,
    title: "DO DHAM SAME DAY RETURN",
    location: "HARIDWAR",
    description: `
    Detailed Tour Itinerary
    Day 1
    Haridwar/Dehradun –Guptkashi / Rampur
    Arrival at Haridwar. Pickup & proceed to Rishikesh for Yatra Registration. After registration proceed to Guptkashi / Ramnagar (240 Kms).en route visit Guptkashitemple , Overnight stay.
    Note:-For the Green Card you have to wait 4-5 Hrs (This is the Process by Govt. they check the Vehicle & take all the details of Passenger, then they allow for the journey )
    
    Day 2
    Guptkashi / Rampur – Kedarnath
    Early hours proceed to Sonprayag (4 Kms.) then to Gaurikund (5 Kms.) by Govt. Jeep. and later Proceed to Kedarnath (17 Kms.) by pony. After Darshan / Pooja at Temple,Overnight stay at Kedarnathji.
    Pilgrims going by Helicopter: Early morning proceed to Sirsi / Phata / Guptakashi Helipad to Kedarnath Helipad. Later, proceed to Kedarnath Temple by walk (1 Km.). After Darshan / Pooja at Temple, return to Helipad to board the Helicopter back to Rampur. Overnight stay.
    Optional:You can take Helicopter tickets for Kedarnath to avoid the Trek (12000/- p.p. approx) NOTE:In case you are traveling by Helicopter / Walk / Pony / Doli, the return will be on the same day with night stay at Rampur. Those who are traveling by Walk (17 Kms. approx. each way) / Pony / Doli, have a start the trek early in the morning of Day 4 A.M., so that you can come back on the same day.
    
    Day 3
    Guptkashi / Rampur- Haridwar/Dehradun
    . After breakfast drive to Haridwar en route visit rudrprayag, devprayagDrop you railway station with sweet memories ……
    `,
    price: 89999,
    type: "Cultural Relax",
  },
  {
    image: Img6,
    title: "KEDARNATHJI YATRA 4N5D",
    location: "EX DELHI",
    description: `
    Detailed Tour Itinerary
    Day 1
    Delhi - Rishikesh
    On Arrival Pickup from Airport transfer to Drive to torishikesh Check into Hotel then Visit rishikesh Ram Jhula,LaxmanJula Swami ParmarthNiketanAshram,GeetaBhawan,Muni kiReti,Bharat Mandir& Ganga Arti at TriveniGhat Overnight stay.
    
    Day 2
    Rishikesh –Guptkashi / Rampur
    After Breakfast proceed to Rishikesh for Yatra Registration. After registration proceed toGuptkashi / Ramnagar (240 Kms). Overnight stay.
    Note:-For the Green Card you have to wait 4-5 Hrs (This is the Process by Govt. they check the Vehicle & take all the details of Passenger, then they allow for the journey )
    
    Day 3
    Guptkashi / Rampur – Kedarnath
    Early hours proceed to Sonprayag (4 Kms.) then to Gaurikund (5 Kms.) by Govt. Jeep. and later Proceed to Kedarnath (17 Kms.) by pony. After Darshan / Pooja at Temple, Overnight stay at Kedarnathji.
    Pilgrims going by Helicopter: Early morning proceed to Sirsi / Phata / Guptakashi Helipad to Kedarnath Helipad. Later, proceed to Kedarnath Temple by walk (1 Km.). After Darshan / Pooja at Temple, return to Helipad to board the Helicopter back to Rampur. Overnight stay.
    Optional: You can take Helicopter tickets for Kedarnath to avoid the Trek (10500/- p.p. approx)
    NOTE:In case you are traveling by Helicopter / Walk / Pony / Doli, the return will be on the same day with night stay at Rampur. Those who are traveling by Walk (17 Kms. approx. each way) / Pony / Doli, have a start the trek early in the morning of Day 4 A.M., so that you can come back on the same day.
    
    Day 4
    Kedarnathji-Haridwar
    After Breakfast transfer to Haridwar.Check into hotel Visit Rudrpryagin evening Visit Ganga ArtiOvernight stay.
    
    Day 5
    Haridwar - Delhi
    After breakfast drive to DelhiDrop you railway station/Airport with sweet memories …….
    `,
    price: 10499,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Offered Chardham Packages
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;

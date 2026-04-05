// ═══════════════════════════════════════════════════════════════════
// 📝 YAHAN DAILY QUESTIONS CHANGE KARO | EDIT QUESTIONS HERE
// ═══════════════════════════════════════════════════════════════════

// Quiz ki basic settings (optional - aap yeh bhi change kar sakte ho)
const QUIZ_CONFIG = {
  icon: "📐",  // Header icon
  titleHindi: "क्रमचय और संचय",
  titleEnglish: "Permutation & Combination",
  subject: "📚 CUET GAT 2026 · गणित | Mathematics"
};

// Questions yahan likho - jitne chahiye utne add/remove kar sakte ho
const questions = [
  {
    num: 1,
    hindi: "भारत की पहली हाइड्रोजन पावर ट्रेन का टेस्ट किस संगठन ने कंडक्ट कराया?",
    english: "Which organization conducted the trial of India's first hydrogen-powered train?",
    options: [
      "A) इंडियन रेलवे / Indian Railways",
      "B) RDSO (रिसर्च डिज़ाइन्स एंड स्टैंडर्ड्स ऑर्गेनाइजेशन)",
      "C) ISRO",
      "D) DRDO"
    ],
    answer: 1,
    note: "RDSO ने ट्रायल कंडक्ट कराया, रेलवे मंत्री अश्विनी वैष्णव ने कन्फर्म किया | RDSO conducted the trial, confirmed by Railway Minister Ashwini Vaishnaw."
  },

  {
    num: 2,
    hindi: "IIM अहमदाबाद में खुले नए AI सेंटर का नाम क्या है?",
    english: "What is the name of the new AI centre opened at IIM Ahmedabad?",
    options: [
      "A) टंडन AI सेंटर / Tandon AI Centre",
      "B) कृष्णमूर्ति टंडन स्कूल ऑफ AI / Krishnamurthy Tandon School of AI",
      "C) AI इनोवेशन हब / AI Innovation Hub",
      "D) डिजिटल AI स्कूल / Digital AI School"
    ],
    answer: 1,
    note: "100 करोड़ एनरोलमेंट के साथ खुला | Launched with ₹100 crore endowment."
  },

  {
    num: 3,
    hindi: "नोएडा इंटरनेशनल एयरपोर्ट कहाँ स्थित है?",
    english: "Where is the Noida International Airport located?",
    options: [
      "A) गाज़ियाबाद / Ghaziabad",
      "B) गुरुग्राम / Gurugram",
      "C) जेवर / Jewar",
      "D) फरीदाबाद / Faridabad"
    ],
    answer: 2,
    note: "जेवर में। PM मोदी ने उद्घाटन किया। दिल्ली NCR का दूसरा अंतर्राष्ट्रीय हवाईअड्डा | Jewar. Inaugurated by PM Modi. Delhi NCR's 2nd international airport."
  },

  {
    num: 4,
    hindi: "UK ने 2-5 साल के बच्चों के लिए स्क्रीन टाइम कितना लिमिट किया?",
    english: "How much screen time did UK limit for children aged 2–5 years?",
    options: [
      "A) 30 मिनट / 30 minutes",
      "B) 1 घंटा / 1 hour",
      "C) 2 घंटे / 2 hours",
      "D) कोई सीमा नहीं / No limit"
    ],
    answer: 1,
    note: "UK PM कीर स्टारमर का ऐलान। 2 साल से कम के लिए शून्य स्क्रीन टाइम | Announced by UK PM Keir Starmer. Zero screen time for under 2."
  },

  {
    num: 5,
    hindi: "UK के वर्तमान प्राइम मिनिस्टर कौन हैं?",
    english: "Who is the current Prime Minister of the United Kingdom?",
    options: [
      "A) बोरिस जॉनसन / Boris Johnson",
      "B) ऋषि सुनक / Rishi Sunak",
      "C) कीर स्टारमर / Keir Starmer",
      "D) थेरेसा मे / Theresa May"
    ],
    answer: 2,
    note: "UK के वर्तमान PM कीर स्टारमर हैं | The current UK PM is Keir Starmer."
  },

  {
    num: 6,
    hindi: "Earth Hour 2026 कब मनाया गया?",
    english: "When was Earth Hour 2026 observed?",
    options: [
      "A) 25 मार्च / 25 March",
      "B) 28 मार्च / 28 March",
      "C) 30 मार्च / 30 March",
      "D) 1 अप्रैल / 1 April"
    ],
    answer: 1,
    note: "28 मार्च, रात 8:30–9:30 बजे। WWF द्वारा शुरू, 190+ देशों में | 28 March, 8:30–9:30 PM. Started by WWF, observed in 190+ countries."
  },

  {
    num: 7,
    hindi: "जापान की नई फ्रेट बुलेट ट्रेन की अधिकतम स्पीड कैपेसिटी कितनी है?",
    english: "What is the maximum speed capacity of Japan's new freight bullet train?",
    options: [
      "A) 200 km/h",
      "B) 250 km/h",
      "C) 275 km/h",
      "D) 300 km/h"
    ],
    answer: 2,
    note: "275 km/h। शिनकानसन नेटवर्क की तकनीक पर आधारित मालगाड़ी | 275 km/h. Freight train based on Shinkansen network technology."
  },

  {
    num: 8,
    hindi: "IOC ने ट्रांसजेंडर एथलीट्स के नए नियम कब से लागू करने का ऐलान किया?",
    english: "From which Olympics will IOC implement new transgender athlete eligibility rules?",
    options: [
      "A) पेरिस 2024 / Paris 2024",
      "B) टोक्यो 2028 / Tokyo 2028",
      "C) लॉस एंजेलस 2028 / Los Angeles 2028",
      "D) ब्रिसबेन 2032 / Brisbane 2032"
    ],
    answer: 2,
    note: "LA 2028 से ट्रांसजेंडर फीमेल्स महिला खेलों में भाग नहीं ले सकेंगी | From LA 2028, transgender females cannot participate in women's sports."
  },

  {
    num: 9,
    hindi: "इंडोनेशिया ने किस उम्र से कम के बच्चों के लिए सोशल मीडिया बैन किया?",
    english: "Indonesia banned social media for children below which age?",
    options: [
      "A) 14 साल / 14 years",
      "B) 15 साल / 15 years",
      "C) 16 साल / 16 years",
      "D) 17 साल / 17 years"
    ],
    answer: 2,
    note: "SE Asia का पहला देश जिसने 16 साल से कम के लिए सोशल मीडिया बैन किया | First SE Asian country to ban social media for under 16."
  },

  {
    num: 10,
    hindi: "Para Archer of the Year का खिताब किसे दिया गया?",
    english: "Who was named Para Archer of the Year?",
    options: [
      "A) अब्दील अकेरा / Abdiel Acera",
      "B) शीतल देवी / Sheetal Devi",
      "C) दीपा मलिक / Deepa Malik",
      "D) भावना पटेल / Bhavana Patel"
    ],
    answer: 1,
    note: "शीतल देवी को Para Archer of the Year का खिताब दिया गया | Sheetal Devi was named Para Archer of the Year."
  },

  {
    num: 11,
    hindi: "PM मोदी ने मन की बात में किस गाँव को वाटर कंजर्वेशन के लिए सराहा?",
    english: "Which village did PM Modi praise in Mann Ki Baat for water conservation?",
    options: [
      "A) मोलिनोंग / Mawlynnong",
      "B) वांगमुन / Wangmun",
      "C) हम्पी / Hampi",
      "D) ज़ीरो / Ziro"
    ],
    answer: 1,
    note: "त्रिपुरा के जंपुई हिल्स में स्थित वांगमुन गाँव | Wangmun village in Jampui Hills, Tripura."
  },

  {
    num: 12,
    hindi: "2026 में महावीर जयंती कब मनाई गई?",
    english: "When was Mahavir Jayanti celebrated in 2026?",
    options: [
      "A) 30 मार्च / 30 March",
      "B) 31 मार्च / 31 March",
      "C) 1 अप्रैल / 1 April",
      "D) 2 अप्रैल / 2 April"
    ],
    answer: 1,
    note: "31 मार्च 2026। वर्धमान महावीर जैनिज्म के 24वें तीर्थंकर थे | 31 March 2026. Vardhaman Mahavir was the 24th Tirthankara of Jainism."
  },

  {
    num: 13,
    hindi: "Miami Open 2026 किसने जीता?",
    english: "Who won the Miami Open 2026?",
    options: [
      "A) नोवाक जोकोविच / Novak Djokovic",
      "B) राफेल नडाल / Rafael Nadal",
      "C) जेनिक सिनर / Jannik Sinner",
      "D) कार्लोस अल्कारास / Carlos Alcaraz"
    ],
    answer: 2,
    note: "इटली के जेनिक सिनर ने Miami Open 2026 जीता | Italy's Jannik Sinner won the Miami Open 2026."
  },

  {
    num: 14,
    hindi: "India Pharma 2026 कहाँ आयोजित होगा?",
    english: "Where will India Pharma 2026 be held?",
    options: [
      "A) मुंबई / Mumbai",
      "B) नई दिल्ली / New Delhi",
      "C) हैदराबाद / Hyderabad",
      "D) बेंगलुरु / Bengaluru"
    ],
    answer: 1,
    note: "India Pharma 2026 नई दिल्ली में आयोजित होगा | India Pharma 2026 will be held in New Delhi."
  },

  {
    num: 15,
    hindi: "नेपाल की नई हेल्थ मिनिस्टर कौन बनी हैं?",
    english: "Who became Nepal's new Health Minister?",
    options: [
      "A) बिद्या देवी भंडारी / Bidhya Devi Bhandari",
      "B) निशा मेहता / Nisha Mehta",
      "C) सीता गुरुंग / Sita Gurung",
      "D) रेखा शर्मा / Rekha Sharma"
    ],
    answer: 1,
    note: "निशा मेहता — AIIMS दिल्ली से पढ़ाई की है | Nisha Mehta — educated from AIIMS Delhi."
  },

  {
    num: 16,
    hindi: "सम्राट संप्रति म्यूज़ियम कहाँ स्थित है?",
    english: "Where is the Samrat Samprati Museum located?",
    options: [
      "A) जयपुर / Jaipur",
      "B) गांधीनगर / Gandhinagar",
      "C) अहमदाबाद / Ahmedabad",
      "D) सूरत / Surat"
    ],
    answer: 1,
    note: "PM मोदी ने गांधीनगर में उद्घाटन किया। जैन हेरिटेज को समर्पित | PM Modi inaugurated it in Gandhinagar. Dedicated to Jain heritage."
  },

  {
    num: 17,
    hindi: "PM e-DRIVE स्कीम किस क्षेत्र से संबंधित है और कब तक एक्सटेंड की गई?",
    english: "PM e-DRIVE scheme is related to which sector and extended till when?",
    options: [
      "A) सोलर एनर्जी, 2027 / Solar Energy, 2027",
      "B) इलेक्ट्रिक व्हीकल्स, 2028 / Electric Vehicles, 2028",
      "C) हाइड्रोजन फ्यूल, 2029 / Hydrogen Fuel, 2029",
      "D) कृषि, 2030 / Agriculture, 2030"
    ],
    answer: 1,
    note: "EV को बढ़ावा देती है, 2028 तक एक्सटेंड। इस बार थ्री-व्हीलर्स पर फोकस | Promotes EVs, extended till 2028 with focus on three-wheelers."
  },

  {
    num: 18,
    hindi: "IPL में सबसे ज्यादा मैच खेलने वाले विदेशी खिलाड़ी (Most Capped Foreign Player) कौन बने?",
    english: "Who became the Most Capped Foreign Player in IPL history?",
    options: [
      "A) क्रिस गेल / Chris Gayle",
      "B) AB डिविलियर्स / AB de Villiers",
      "C) सुनील नारायण / Sunil Narine",
      "D) कायरन पोलार्ड / Kieron Pollard"
    ],
    answer: 2,
    note: "सुनील नारायण (KKR) ने कायरन पोलार्ड का रिकॉर्ड तोड़ा | Sunil Narine (KKR) broke Kieron Pollard's record."
  },

  {
    num: 19,
    hindi: "IONS Maritime Exercise कहाँ आयोजित हुई?",
    english: "Where was the IONS Maritime Exercise conducted?",
    options: [
      "A) कोच्ची / Kochi",
      "B) मुंबई / Mumbai",
      "C) विशाखापट्टनम / Visakhapatnam",
      "D) चेन्नई / Chennai"
    ],
    answer: 0,
    note: "इंडियन ओशन नेवल सिंपोज़ियम की Maritime Exercise कोच्ची में हुई | Indian Ocean Naval Symposium Maritime Exercise held in Kochi."
  },

  {
    num: 20,
    hindi: "इंडस्ट्रियल पार्क प्रमोशन पॉलिसी किस राज्य ने लॉन्च की?",
    english: "Which state launched the Industrial Park Promotion Policy?",
    options: [
      "A) गुजरात / Gujarat",
      "B) उत्तर प्रदेश / Uttar Pradesh",
      "C) राजस्थान / Rajasthan",
      "D) महाराष्ट्र / Maharashtra"
    ],
    answer: 2,
    note: "राजस्थान सरकार ने Industrial Park Promotion Policy लॉन्च की | Rajasthan government launched the Industrial Park Promotion Policy."
  },

  {
    num: 21,
    hindi: "आंध्र प्रदेश का नया कैपिटल क्या होगा?",
    english: "What will be the new capital of Andhra Pradesh?",
    options: [
      "A) हैदराबाद / Hyderabad",
      "B) विशाखापट्टनम / Visakhapatnam",
      "C) अमरावती / Amaravati",
      "D) कुर्नूल / Kurnool"
    ],
    answer: 2,
    note: "AP Reorganisation Amendment Bill 2026 के अनुसार अमरावती कैपिटल होगी | As per AP Reorganisation Amendment Bill 2026, Amaravati will be the capital."
  },

  {
    num: 22,
    hindi: "नए COVID वेरिएंट का नाम क्या है जो बिहार में देखा जा रहा है?",
    english: "What is the name of the new COVID variant being observed in Bihar?",
    options: [
      "A) ओमिक्रॉन / Omicron",
      "B) डेल्टा प्लस / Delta Plus",
      "C) सिककाडा / Cicada",
      "D) फ्लर्ट / FLiRT"
    ],
    answer: 2,
    note: "नए COVID वेरिएंट का नाम Cicada (सिककाडा) है | The new COVID variant is named Cicada."
  },

  {
    num: 23,
    hindi: "शाची (Shaachi) क्या है?",
    english: "What is Shaachi?",
    options: [
      "A) फाइटर जेट / Fighter Jet",
      "B) सैटेलाइट / Satellite",
      "C) ऑफशोर पेट्रोल व्हीकल / Offshore Patrol Vehicle",
      "D) मिसाइल / Missile"
    ],
    answer: 2,
    note: "शाची एक ऑफशोर पेट्रोल व्हीकल है — निगरानी/गश्त के काम आता है | Shaachi is an Offshore Patrol Vehicle used for surveillance/patrolling."
  },

  {
    num: 24,
    hindi: "इंडिगो के नए CEO कौन बने?",
    english: "Who became the new CEO of IndiGo?",
    options: [
      "A) पीटर एल्बर्स / Pieter Elbers",
      "B) राहुल भाटिया / Rahul Bhatia",
      "C) विलियम वाल्फ / William Walfert",
      "D) रोनोजॉय दत्ता / Ronojoy Dutta"
    ],
    answer: 2,
    note: "विलियम वाल्फ को इंडिगो का नया CEO नियुक्त किया गया | William Walfert was appointed as the new CEO of IndiGo."
  },

  {
    num: 25,
    hindi: "DGCA के नए हेड कौन बने?",
    english: "Who became the new head of DGCA?",
    options: [
      "A) पारस अहमद खड़वाई / Faas Ahmed Khadwai",
      "B) वीर विक्रम यादव / Veer Vikram Yadav",
      "C) राजीव शर्मा / Rajeev Sharma",
      "D) अनिल चौपड़ा / Anil Chopra"
    ],
    answer: 1,
    note: "वीर विक्रम यादव DGCA के नए हेड बने, पारस अहमद खड़वाई की जगह | Veer Vikram Yadav replaced Faas Ahmed Khadwai as DGCA head."
  },

  {
    num: 26,
    hindi: "Yamaha Music India का ब्रांड एंबेसडर किसे बनाया गया?",
    english: "Who was made the Brand Ambassador of Yamaha Music India?",
    options: [
      "A) अरिजीत सिंह / Arijit Singh",
      "B) ए आर रहमान / A.R. Rahman",
      "C) सोनू निगम / Sonu Nigam",
      "D) शंकर महादेवन / Shankar Mahadevan"
    ],
    answer: 1,
    note: "AR Rahman को Yamaha Music India का ब्रांड एंबेसडर बनाया गया | A.R. Rahman was made Brand Ambassador of Yamaha Music India."
  },

  {
    num: 27,
    hindi: "INS Malvan किस श्रेणी का नौसैनिक जहाज है?",
    english: "INS Malvan belongs to which category of naval vessel?",
    options: [
      "A) एयरक्राफ्ट कैरियर / Aircraft Carrier",
      "B) डिस्ट्रॉयर / Destroyer",
      "C) फ्रिगेट / Frigate",
      "D) एंटी-सबमरीन वॉरफेयर क्राफ्ट / Anti-Submarine Warfare Craft"
    ],
    answer: 3,
    note: "मालवन Anti-Submarine Warfare Craft है। Cochin Shipyard Limited ने बनाया | Malvan is an ASW Craft built by Cochin Shipyard Limited."
  },

  {
    num: 28,
    hindi: "Snowy Owl को किस कन्वेंशन के तहत संरक्षण दिया गया?",
    english: "Under which convention was the Snowy Owl granted protection?",
    options: [
      "A) CITES",
      "B) CMS (बॉन कन्वेंशन / Bonn Convention)",
      "C) रामसर / Ramsar",
      "D) CBD"
    ],
    answer: 1,
    note: "CMS (Convention on Migratory Species, 1979) के तहत Snowy Owl को प्रोटेक्शन | Snowy Owl protected under CMS (Bonn Convention 1979)."
  },

  {
    num: 29,
    hindi: "अल्जीरिया किस समुद्र के साथ तटरेखा साझा करता है?",
    english: "Algeria shares its coastline with which sea?",
    options: [
      "A) लाल सागर / Red Sea",
      "B) अरब सागर / Arabian Sea",
      "C) भूमध्य सागर / Mediterranean Sea",
      "D) काला सागर / Black Sea"
    ],
    answer: 2,
    note: "अल्जीरिया (अफ्रीका का सबसे बड़ा देश) भूमध्य सागर के साथ तटरेखा साझा करता है | Algeria (largest country in Africa) shares coastline with Mediterranean Sea."
  },

  {
    num: 30,
    hindi: "7.4 तीव्रता का भूकंप किस देश में आया?",
    english: "Which country was struck by a 7.4 magnitude earthquake?",
    options: [
      "A) जापान / Japan",
      "B) इंडोनेशिया / Indonesia",
      "C) फिलीपींस / Philippines",
      "D) चिली / Chile"
    ],
    answer: 1,
    note: "7.4 मैग्नीट्यूड का भूकंप इंडोनेशिया में आया | A 7.4 magnitude earthquake struck Indonesia."
  },

  {
    num: 31,
    hindi: "युवा विज्ञानी कार्यक्रम (YuVika) किस क्षेत्र से संबंधित है?",
    english: "Yuva Vigyaniki Programme (YuVika) is related to which field?",
    options: [
      "A) रक्षा / Defence",
      "B) स्पेस साइंस / Space Science",
      "C) कृषि / Agriculture",
      "D) स्वास्थ्य / Health"
    ],
    answer: 1,
    note: "YuVika — ISRO का प्रोग्राम, स्टूडेंट्स को Space Science करियर की तरफ प्रोत्साहित करता है | YuVika — ISRO's programme to encourage students towards Space Science careers."
  },

  {
    num: 32,
    hindi: "प्रेसिडेंट का पुलिस कलर (सर्वोच्च पुलिस सम्मान) इस बार किसे मिला?",
    english: "Who received the President's Police Colours (highest police honour) this time?",
    options: [
      "A) दिल्ली पुलिस / Delhi Police",
      "B) महाराष्ट्र पुलिस / Maharashtra Police",
      "C) ओडिशा पुलिस / Odisha Police",
      "D) केरल पुलिस / Kerala Police"
    ],
    answer: 2,
    note: "President's Colours ओडिशा पुलिस को दिए गए | President's Colours were awarded to Odisha Police."
  },

  {
    num: 33,
    hindi: "BRICS Foreign Ministers की मीटिंग भारत में कहाँ होगी?",
    english: "Where in India will the BRICS Foreign Ministers Meeting be held?",
    options: [
      "A) मुंबई / Mumbai",
      "B) नई दिल्ली / New Delhi",
      "C) बेंगलुरु / Bengaluru",
      "D) कोलकाता / Kolkata"
    ],
    answer: 1,
    note: "BRICS Foreign Ministers Meeting नई दिल्ली में होगी | BRICS Foreign Ministers Meeting will be held in New Delhi."
  },

  {
    num: 34,
    hindi: "KASS Technology Semiconductor Facility कहाँ खोली गई?",
    english: "Where was the KASS Technology Semiconductor Facility inaugurated?",
    options: [
      "A) नोएडा / Noida",
      "B) सनंद, गुजरात / Sanand, Gujarat",
      "C) पुणे / Pune",
      "D) हैदराबाद / Hyderabad"
    ],
    answer: 1,
    note: "सनंद, गुजरात — भारत का नया Domestic Chip Manufacturing Hub | Sanand, Gujarat — India's new Domestic Chip Manufacturing Hub."
  },

  {
    num: 35,
    hindi: "उत्कल दिवस कब मनाया जाता है और यह किस राज्य से संबंधित है?",
    english: "When is Utkal Diwas celebrated and which state is it related to?",
    options: [
      "A) 30 मार्च, ओडिशा / 30 March, Odisha",
      "B) 31 मार्च, झारखंड / 31 March, Jharkhand",
      "C) 1 अप्रैल, ओडिशा / 1 April, Odisha",
      "D) 2 अप्रैल, छत्तीसगढ़ / 2 April, Chhattisgarh"
    ],
    answer: 2,
    note: "1 अप्रैल — 1936 में ओडिशा इसी दिन अलग राज्य बना | 1 April — Odisha became a separate state on this day in 1936."
  },

  {
    num: 36,
    hindi: "बलिराजगढ़ किस राजा से संबंधित है और कहाँ स्थित है?",
    english: "Balirajgarh is associated with which king and where is it located?",
    options: [
      "A) राजा विक्रमादित्य, उत्तर प्रदेश / Raja Vikramaditya, UP",
      "B) राजा अशोक, बिहार / Raja Ashoka, Bihar",
      "C) राजा बाली, बिहार / Raja Bali, Bihar",
      "D) राजा हर्षवर्धन, हरियाणा / Raja Harshavardhana, Haryana"
    ],
    answer: 2,
    note: "बलिराजगढ़ बिहार के मधुबनी जिले में है और राजा बाली से संबंधित है। ASI की खुदाई चल रही है | Balirajgarh is in Madhubani, Bihar, linked to Raja Bali. ASI excavation ongoing."
  },

  {
    num: 37,
    hindi: "हिल स्टेट्स के लिए किस स्कीम के तहत नागालैंड को फंड मिला?",
    english: "Under which scheme for hill states did Nagaland receive funding?",
    options: [
      "A) पहाड़ विकास योजना / Pahad Vikas Yojana",
      "B) प्राइड ऑफ हिल्स / Pride of Hills",
      "C) नॉर्थ ईस्ट डेवलपमेंट स्कीम / North East Development Scheme",
      "D) हिल मिशन 2027 / Hill Mission 2027"
    ],
    answer: 1,
    note: "प्राइड ऑफ हिल्स स्कीम के तहत 2026-27 में नागालैंड को फंड दिया गया | Under Pride of Hills scheme, Nagaland received funding in 2026-27."
  }
];

// Sections define karo - optional (questions ko groups mein divide karta hai)
const sections = [
  {
    label: "प्रश्न 1–5 | Questions 1–5 (हाइड्रोजन ट्रेन से Earth Hour | Hydrogen Train to Earth Hour)",
    start: 0,
    end: 5
  },
  {
    label: "प्रश्न 6–10 | Questions 6–10 (बुलेट ट्रेन से Para Archer | Bullet Train to Para Archer)",
    start: 6,
    end: 10
  },
  {
    label: "प्रश्न 11–15 | Questions 11–15 (महावीर जयंती से नेपाल | Mahavir Jayanti to Nepal)",
    start: 11,
    end: 15
  },
  {
    label: "प्रश्न 16–20 | Questions 16–20 (संग्रहालय से IPL | Museum to IPL)",
    start: 16,
    end: 20
  },
  {
    label: "प्रश्न 21–25 | Questions 21–25 (आंध्र प्रदेश से DGCA | Andhra Pradesh to DGCA)",
    start: 21,
    end: 25
  },
  {
    label: "प्रश्न 26–30 | Questions 26–30 (Yamaha से भूकंप | Yamaha to Earthquake)",
    start: 26,
    end: 30
  },
  {
    label: "प्रश्न 31–37 | Questions 31–37 (YuVika से नागालैंड | YuVika to Nagaland)",
    start: 31,
    end: 37
  }
];

// ═══════════════════════════════════════════════════════════════════
// ⚠️ NEECHE KA CODE TOUCH MAT KARO | DON'T EDIT BELOW THIS LINE
// ═══════════════════════════════════════════════════════════════════

let userAnswers = new Array(questions.length).fill(null);
let score = 0;

// Apply config
document.getElementById('quizIcon').textContent = QUIZ_CONFIG.icon;
document.getElementById('quizTitleHindi').textContent = QUIZ_CONFIG.titleHindi;
document.getElementById('quizTitleEnglish').textContent = QUIZ_CONFIG.titleEnglish;
document.getElementById('quizSubject').innerHTML = QUIZ_CONFIG.subject;
document.getElementById('totalTxt').textContent = ` / ${questions.length}`;

function renderQuiz() {
  const c = document.getElementById('quizContainer');
  let html = '';
  sections.forEach(sec => {
    html += `<div class="section-label">${sec.label}</div>`;
    for (let i = sec.start; i < sec.end; i++) {
      const q = questions[i];
      html += `
        <div class="q-card" id="card-${i}">
          <div class="q-header">
            <div class="q-num">${q.num}</div>
            <div class="q-text-wrap">
              <div class="q-hindi">${q.hindi}${q.bonus ? '<span class="bonus-tag">BONUS</span>' : ''}</div>
              <div class="q-english">${q.english}</div>
            </div>
          </div>
          <div class="options-grid">
            ${q.options.map((opt, oi) => `<button class="opt-btn" id="opt-${i}-${oi}" onclick="pick(${i},${oi})">${opt}</button>`).join('')}
          </div>
          <div class="answer-reveal" id="reveal-${i}">
            <div class="ans-label">✓ सही उत्तर | Correct Answer</div>
            <div class="ans-text" id="ans-${i}"></div>
            ${q.note ? `<div class="ans-note">${q.note}</div>` : ''}
          </div>
        </div>`;
    }
    html += `<div class="divider"></div>`;
  });
  c.innerHTML = html;
}

function pick(qi, oi) {
  if (userAnswers[qi] !== null) return;
  userAnswers[qi] = oi;
  const q = questions[qi];
  for (let i = 0; i < q.options.length; i++) {
    const btn = document.getElementById(`opt-${qi}-${i}`);
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
    else if (i === oi) btn.classList.add('wrong');
  }
  document.getElementById(`ans-${qi}`).textContent = q.options[q.answer];
  document.getElementById(`reveal-${qi}`).classList.add('show');
  if (oi === q.answer) score++;
  updateScore();
}

function updateScore() {
  const att = userAnswers.filter(a => a !== null).length;
  document.getElementById('scoreNum').textContent = score;
  document.getElementById('attemptedTxt').textContent = att + ' attempted';
  document.getElementById('progressBar').style.width = (att / questions.length * 100) + '%';
}

function resetAll() {
  userAnswers = new Array(questions.length).fill(null);
  score = 0;
  renderQuiz();
  updateScore();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function createWaterEffects() {
  const bg = document.getElementById('waterBg');
  // Bubbles
  for (let i = 0; i < 18; i++) {
    const b = document.createElement('div');
    b.className = 'bubble';
    const s = 8 + Math.random() * 30;
    b.style.cssText = `width:${s}px;height:${s}px;left:${Math.random()*100}%;bottom:${Math.random()*20}%;animation-duration:${9+Math.random()*16}s;animation-delay:${-Math.random()*15}s;`;
    bg.appendChild(b);
  }
  // Ripples
  for (let i = 0; i < 5; i++) {
    const r = document.createElement('div');
    r.className = 'ripple';
    const sz = 60 + Math.random() * 120;
    r.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*90}%;top:${Math.random()*90}%;animation-duration:${5+Math.random()*5}s;animation-delay:${-Math.random()*8}s;`;
    bg.appendChild(r);
  }
}

renderQuiz();
createWaterEffects();

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar section
      home: "Home",
      // Home translate
      homeTitle1: "Welcome to",
      homeTitle2: "We use innovative technologies for a bright future",
      aboutUs: "ABOUT US",
      aboutUsText:
        "We, the entire team, welcome you to the website and express our gratitude for your interest in our company. HO - Duyeli Depe is a modern, dynamically developing company that has brought together highly qualified specialists with many years of experience and knowledge in their field. Starting its activities in 2021 in construction and providing services for environmental impact assessment (EIA), contributing to sustainable development for companies such as Eni Turkmenistan, the branch of the China National Oil and Gas Company in Turkmenistan, Dragon Oil, and Chalik Energy. Collaborating with leading equipment manufacturers, chemical and service companies in the oil and gas industry, and technological companies producing innovative developments in all industries allows us to offer high-quality products, services, and solutions in the Turkmenistan market. In our work, we strive to find an individual approach to each client and are focused on long-term and mutually beneficial cooperation. We hope that by turning to us once, you will become our regular client.",
      constructionEcology: "Construction / Ecology",
      oilGas: "Oil and Gas Services",
      equipmentChemistry: "Equipment / Chemistry",
      innovativeTechnologies: "Innovative Technologies",
      workingHours: "Working Hours",
      partnership:
        "Partnership - the key to joint success, because together we create not just connections but the future",
      contactUs: "Contact us",
      fullName: "Full Name",
      email: "Email",
      message: "Message",
      send: "Send",
      navigation: "Navigation",
      contact: "Contacts",
      address: "Ashgabat , Türkmenistan 1972(Ataturk)street building 82",
      footerText:
        "Innovations, Technologies, Results: Together towards the Business of the Future",

      //  Construction And Ecology page Words =====================================
      ecoTitle: "Economic Society: Building a Sustainable Future",
      ecoSubTitle:
        "Building excellence, preserving the environment, and innovating for tomorrow.",
      ecoDescription:
        "Our company specializes in construction and ecology. We adhere to principles of quality and safety in construction projects, building residential, commercial, and industrial structures with a focus on innovative methods and environmental responsibility. In the field of ecology, we provide services such as environmental expertise, the development of projects for assessing the impact on the environment, as well as a comprehensive assessment of all environmental, economic, and social parameters of the natural environment on the site. Our specialists conduct ecological monitoring, perform necessary engineering-environmental and geological studies to study the project's impact on the external environment, and calculate nature protection measures. In addition, we are involved in water purification technologies, offering solutions for the efficient use of water resources and wastewater treatment. In a world where water is becoming an increasingly important resource for socio-economic development, our company strives to provide technologies that benefit both people and nature.",
      ecoT1: "Construction",
      ecoT2: "Ecology",
      ecoT3: "Water purification",
      ecoDesc1:
        "In construction, we distinguish ourselves in matters of quality and safety. We build turnkey residential, commercial, and industrial facilities with an emphasis on using innovative methods and environmental responsibility.",
      ecoDesc2:
        "The company provides services in environmental expertise, develops EIA projects, conducts a comprehensive assessment of all environmental, economic, and social parameters of the natural environment on the territory of the economic object, and coordinates the project in the expertise. Our specialists conduct ecological monitoring of the area, perform all necessary engineering-environmental and geological surveys to study the detailed impact of the object on the external environment, and also calculate nature protection measures.",
      ecoDesc3:
        "In our days, when water is gaining increasing significance for socio-economic development every day, the agenda always includes the question of efficient use of water sources and wastewater treatment. The company aims to provide technologies to benefit both people and nature.",
      more: "More",

      // OIL AND GAS SERVICES PAGE WORDS =================================================

      oilTitle: "Oil and Gas Services",
      oilSubTitle: "Delivery of Excellence in Energy Services and Innovations.",
      hideDesc: "Hide description",
      showDesc: "Show description",
      oilDesc1:
        "The service offerings we provide in the oil and gas sector allow us to offer a wide range of possibilities, enabling the development taking into account the individual parameters of reservoirs and field conditions, and investigating the physical, chemical, and filtration characteristics of soils.",

      carouselTitle1: "Standard hydraulic fracturing",
      carouselTitle2: "Large-scale hydraulic fracturing",
      carouselTitle3: "Multistage hydraulic fracturing",
      carouselTitle4: "Foam hydraulic fracturing",
      carouselTitle5: "Nitrofracturing",
      carouselTitle6: "Hydrocarbon-based hydraulic fracturing",
      carouselTitle7: "Hydraulic fracturing with composite plugs",
      carouselTitle8: "MSHF on drill pipe with abrasive perforation",
      carouselTitle9: "Drilling crews for production and lateral drilling",
      carouselSubTitle1: "Effective and proven method",
      carouselSubTitle2: "Maximization of production",
      carouselSubTitle3: "Optimization of reservoir stimulation",
      carouselSubTitle4: "Reduction of reservoir damage",
      carouselSubTitle5: "Increased efficiency",
      carouselSubTitle6: "Environmentally friendly method",
      carouselSubTitle7: "Precise reservoir control",
      carouselSubTitle8: "Efficiency and versatility",
      carouselSubTitle9: "Experienced teams",
      carouselDescription1:
        "Our standard hydraulic fracturing process is a reliable and efficient method for oil and gas extraction. It involves injecting fluid at high pressure to create fractures in the reservoir rock, allowing for the extraction of valuable resources.",
      carouselDescription2:
        "Large-volume hydraulic fracturing is a specialized technique designed to optimize production. With the ability to inject large volumes of fluid, we effectively access and extract hydrocarbons from deep underground deposits.",
      carouselDescription3:
        "Our multistage hydraulic fracturing method includes multiple stages of fracturing to maximize reservoir stimulation and improve oil and gas recovery.",
      carouselDescription4:
        "Foam fracturing is a method that uses foam to transport proppant into fractures, reducing reservoir damage and enhancing hydrocarbon flow.",
      carouselDescription5:
        "Nitrogen hydraulic fracturing is employed to increase the efficiency of hydraulic fracturing using nitrogen as the working fluid, leading to reduced reservoir damage and improved oil and gas recovery.",
      carouselDescription6:
        "Our hydrocarbon-based hydraulic fracturing method utilizes environmentally friendly hydrocarbons as the working fluid, minimizing environmental impact while maximizing resource extraction.",
      carouselDescription7:
        "Mechanical Sealed Hydraulic Fracturing (MSHF) with plug and perf, also known as 'Plug & Perf,' is a technique used for precise reservoir control and well optimization.",
      carouselDescription8:
        "MSHF performed on the drill pipe with abrasive or cumulative perforation offers an efficient and versatile method for well intervention and stimulation.",
      carouselDescription9:
        "Our experienced drilling crews specialize in production drilling and lateral drilling, providing expertise and efficiency in your drilling projects.",

      primaryService: "Primary Service",
      primaryService1: "Coiled Tubing Technologies",
      primaryService2: "Hydraulic Fracturing",
      primaryService3: "Drilling and Workover",
      primaryService4: "Preparation of Killing Liquids",
      primaryService5: "OPP and RIR",
      primaryService6: "Production of Liquid Nitrogen",
      primaryService7: "Development and Testing of Wells",
      primaryService8: "Well Completion",
      primaryService9: "Development of New Technologies",

      secondaryService: "Secondary Service",
      secondaryService1:
        "Milling of Ports, Traffic Jams, etc. (DDM, Jars, Separators, Sludge Traps)",
      secondaryService2:
        "Opening/Closing of Hydraulic Fracturing Ports with a Switching Tool",
      secondaryService3: "Small Diameter Side-Track Drilling (Fishbone)",
      secondaryService4:
        "Bottom Hole Cleaning with ANPD Ejector Devices on Coiled Tubing",
      secondaryService5: "Fishing Work (Rotators, Magnets, Non-Standard Tools)",
      secondaryService6: "Perforation on Coiled Tubing (Abrasive, Cumulative)",
      secondaryService7:
        "GIS on Coiled Tubing (Pipe with Cable, Stand-Alone Instruments)",
      secondaryService8: "GIS with Bypass Systems (Y-Tool)",
      secondaryService9: "Development of Jet Pumps on Coiled Tubing",
      secondaryService10: "Underbalanced CT Drilling",
      serviceTitle1: "Coiled Tubing Technologies",
      serviceTitle2: "Hydraulic Fracturing",
      serviceTitle3: "Drilling and Workover",
      serviceTitle4: "Preparation of Killing Liquids",
      serviceTitle5: "OPP and RIR",
      serviceTitle6: "Production of Liquid Nitrogen",
      serviceTitle7: "Development and Testing of Wells",
      serviceTitle8: "Well Completion",
      serviceTitle9: "Development of New Technologies",
      serviceTitle10:
        "Milling of Ports, Traffic Jams, etc. (DDM, Jars, Separators, Sludge Traps)",
      serviceTitle11:
        "Opening/Closing of Hydraulic Fracturing Ports with a Switching Tool",
      serviceTitle12: "Small Diameter Side-Track Drilling (Fishbone)",
      serviceTitle13:
        "Bottom Hole Cleaning with ANPD Ejector Devices on Coiled Tubing",
      serviceTitle14: "Fishing Work (Rotators, Magnets, Non-Standard Tools)",
      serviceTitle15: "Perforation on Coiled Tubing (Abrasive, Cumulative)",
      serviceTitle16:
        "GIS on Coiled Tubing (Pipe with Cable, Stand-Alone Instruments)",
      serviceTitle17: "GIS with Bypass Systems (Y-Tool)",
      serviceTitle18: "Development of Jet Pumps on Coiled Tubing",
      serviceTitle19: "Underbalanced CT Drilling",
      serviceDescription1:
        "Coiled Tubing Technologies involve the use of continuous coiled tubing to perform various well intervention operations in the oil and gas industry. This technology offers advantages such as wellbore cleanout, nitrogen kick, and more. Coiled tubing units are equipped with a reel that contains the tubing, and it can be deployed into the well without the need for jointed pipe sections. This method is cost-effective and versatile, making it suitable for a wide range of applications in the field.",
      serviceDescription2:
        "Hydraulic Fracturing, also known as fracking, is a technique used to stimulate the production of hydrocarbons from reservoirs by creating fractures in the rock formation. High-pressure fluid is injected into the wellbore to create cracks in the formation, allowing the oil or gas to flow more freely. This process is essential for enhancing well productivity and extracting hydrocarbons from tight or unconventional reservoirs.",
      serviceDescription3:
        "Drilling and Workover operations involve the drilling of new wells and the maintenance or enhancement of existing wells. This includes activities such as drilling exploratory wells, re-drilling existing wells, and performing maintenance to improve production. Skilled professionals use advanced equipment and technology to ensure the efficiency and safety of drilling and workover operations.",
      serviceDescription4:
        "Preparation of Killing Liquids refers to the creation of specialized fluids used in well control operations. Killing fluids are formulated to control pressure and wellbore stability during drilling, workover, and other operations. Properly prepared killing fluids are crucial for ensuring the safety and integrity of the well.",
      serviceDescription5:
        "OPP (Overpressure Protection) and RIR (Risk Identification and Reduction) are crucial safety measures in the oil and gas industry. OPP systems are designed to prevent overpressure incidents in wellbore operations, while RIR involves identifying and mitigating risks associated with drilling, production, and transportation of hydrocarbons. These safety measures are essential for protecting workers and the environment.",
      serviceDescription6:
        "The Production of Liquid Nitrogen is an essential process in the oil and gas industry. Liquid nitrogen is used for various applications, including well stimulation, purging pipelines, and cooling equipment. It is produced by cryogenic separation of air and plays a critical role in many industry processes.",
      serviceDescription7:
        "The Development and Testing of Wells is a critical stage in the exploration and production of hydrocarbons. This involves drilling wells, evaluating reservoir properties, and conducting well tests to determine production potential. Skilled teams employ advanced technologies to optimize well development and ensure the efficient extraction of hydrocarbons.",
      serviceDescription8:
        "Well Completion is the process of preparing a newly drilled well for production. This involves installing the necessary equipment, such as casing, tubing, and packers, to allow hydrocarbons to flow to the surface. Well completion is a crucial step in making the well ready for production.",
      serviceDescription9:
        "The Development of New Technologies in the oil and gas industry involves ongoing research and innovation to enhance production methods and environmental performance. Innovations include new drilling techniques, reservoir modeling, and sustainable practices that aim to improve efficiency and reduce environmental impact.",
      serviceDescription10:
        "Milling of Ports, Traffic Jams, and related services are part of the well intervention process. This involves the use of milling tools to remove obstructions in the wellbore, such as scale, cement, or debris. The process helps restore well integrity and improve hydrocarbon production.",
      serviceDescription11:
        "The Opening/Closing of Hydraulic Fracturing Ports with a Switching Tool is a critical step in hydraulic fracturing operations. Specialized tools are used to control the opening and closing of ports in the well casing, allowing for the precise injection of fracking fluids and the release of hydrocarbons.",
      serviceDescription12:
        "Small Diameter Side-Track Drilling, often referred to as fishbone drilling, is a method used to create lateral or sidetrack wellbores from existing wells. This technique involves the controlled deviation of the wellbore to access additional hydrocarbon reserves or optimize well production.",
      serviceDescription13:
        "Bottom Hole Cleaning with ANPD Ejector Devices on Coiled Tubing is a well intervention process used to remove debris and obstructions from the wellbore. ANPD (Annular Nozzle Pressure Differential) ejector devices are employed to create a high-velocity fluid flow that dislodges and transports particles from the well.",
      serviceDescription14:
        "Fishing Work involves the retrieval of equipment or objects lost in the wellbore, such as broken drillstrings or tools. Rotators, magnets, and non-standard tools are used in the fishing process to capture and retrieve items, ensuring well integrity and safe operations.",
      serviceDescription15:
        "Perforation on Coiled Tubing is a method for creating holes or perforations in well casing or reservoir rock. This technique enhances well productivity by providing direct access for hydrocarbon flow. Both abrasive and cumulative perforation methods are employed based on specific well requirements.",
      serviceDescription16:
        "Geographic Information Systems (GIS) on Coiled Tubing involves the integration of location data with well intervention operations. This technology utilizes coiled tubing equipped with pipe and cable systems or stand-alone instruments to enhance the precision and effectiveness of well services.",
      serviceDescription17:
        "GIS with Bypass Systems, often implemented with Y-Tool configurations, enables the simultaneous deployment of coiled tubing and other well intervention tools. This allows for versatile well services and improved control of operations within the wellbore.",
      serviceDescription18:
        "The Development of Jet Pumps on Coiled Tubing is an innovation in well stimulation and production. Jet pumps are used to enhance the flow of hydrocarbons in the well. When mounted on coiled tubing, they offer a flexible and effective solution for optimizing well performance.",
      serviceDescription19:
        "Underbalanced Coiled Tubing (CT) Drilling is a method that maintains the pressure in the wellbore below the reservoir pressure during drilling. This minimizes formation damage and improves drilling efficiency. It is employed in situations where conventional drilling may not be suitable or safe.",

      //
      //
      //

      // EQUIPMENT AND CHEMISTRY PAGE WORDS ==========================================================

      chemistryTitle: "Equipment and Chemistry",
      chemistrySub:
        "Innovative solutions for efficient technological processes and environmental sustainability.",
      chemistryDesc1:
        "In the supply of chemical reagents, our main task is to meet the needs in the construction of gas, gas-condensate, and oil wells of various complexities. A wide range of reagents allows us to solve a variety of tasks in drilling, development, major repair, and repair-recovery works of gas and oil wells.",
      chemistryDesc2:
        "Equipment for the oil and gas industry is supplied to the market in a wide assortment. It facilitates the extraction of natural resources and enables various manipulations necessary for obtaining the final product. Modern engineering solutions allow us to supply equipment that enhances the safety of work processes and minimizes the negative impact on the environment.",
      chemistryDesc3:
        "In the supply of chemical reagents, our main task is to meet the needs in the construction of gas, gas-condensate, and oil wells of various complexities. A wide range of reagents allows us to solve a variety of tasks in drilling, development, major repair, and repair-recovery works of gas and oil wells.",
      chemTitle1: "Equipment",
      chemTitle2: "Chemistry",
      chemistryDesc:
        "The modern oil and gas industry cannot function effectively without a range of chemicals and equipment that are used at every stage of production - from drilling wells and production to processing and subsequent transportation of raw materials. In this regard, our company strives to provide everything necessary to simplify the work of our partners and offers high-quality products.",

      chemistryAccordionTitle1: "reagents for water-based drilling fluids",
      chemistryAccordionTitle2: "reagents and materials for OBM",
      chemistryAccordionTitle3: "drilling fluid systems and concentrates",
      chemistryAccordionTitle4: "reagents and materials for cementing wells",
      chemistryAccordionTitle5: "water-proofing, tampon-rubbing compounds",
      chemistryAccordionTitle6: "reagents, materials for well workover",
      chemistryAccordionTitle7: "special purpose chemicals",
      chemistryAccordionTitle8: "for regeneration of drilling process fluids",
      chemistryAccordionTitle9: "Catalyst and special products",
      chemistryAccordionTitle10: "Commodity chemistry",
      chemistryAccordionItem1_1:
        "stabilizers, regulators of filtration and rheological properties",
      chemistryAccordionItem1_2:
        "lubricating, anti-seize and anti-seal additives",
      chemistryAccordionItem1_3: "clay inhibitors",
      chemistryAccordionItem1_4: "defoamers",
      chemistryAccordionItem1_5: "weights",
      chemistryAccordionItem1_6:
        "neutralizers of hydrogen sulfide and acidic fluids",
      chemistryAccordionItem1_7:
        "compositions for the preparation of heavy liquids",
      chemistryAccordionItem1_8: "corrosion and salt inhibitors",
      chemistryAccordionItem2_1:
        "composition for the preparation of drilling emulsions polyemulsan",
      chemistryAccordionItem2_2: "emulsifier polyoilchek stub",
      chemistryAccordionItem2_3: "organobentonite polyoilchek hydrophobic",
      chemistryAccordionItem2_4: "filtration reducer polyoil check filter",
      chemistryAccordionItem2_5: "viscosity regulator polyoilchek vis",
      chemistryAccordionItem2_6: "polyoilbarm",
      chemistryAccordionItem3_1: "polyeconol",
      chemistryAccordionItem3_2: "polybur-turbo system",
      chemistryAccordionItem3_3: "polyform",
      chemistryAccordionItem3_4: "colloid-polymer dry mixture KPSS",
      chemistryAccordionItem4_1: "reagents for cementation",
      chemistryAccordionItem4_2: "plasticizers",
      chemistryAccordionItem4_3: "stabilizing additive for lightweight cements",
      chemistryAccordionItem4_4: "fluid loss reducers",
      chemistryAccordionItem4_5: "reinforcing additive",
      chemistryAccordionItem4_6: "expansion additive",
      chemistryAccordionItem4_7: "expansion additive",
      chemistryAccordionItem4_8:
        "compositions for the preparation of buffer liquids",
      chemistryAccordionItem4_9: "defoamers",
      chemistryAccordionItem5_1: "polymer compositions",
      chemistryAccordionItem5_2: "plugging compounds",
      chemistryAccordionItem6_1: "polyplav reagent",
      chemistryAccordionItem6_2: "process fluid polisher",
      chemistryAccordionItem6_3: "silicone polymer composition polyskrep",
      chemistryAccordionItem6_4: "polyrr reagent",
      chemistryAccordionItem6_5: "grouting dry mixture polygp",
      chemistryAccordionItem6_6: "plugging material polyfilterol",
      chemistryAccordionItem6_7: "composition for well quenching polyaerogel",
      chemistryAccordionItem6_8:
        "composition for eliminating absorption polyblocker-combi",
      chemistryAccordionItem7_1: "water repellent polyphobe",
      chemistryAccordionItem7_2: "additive for drilling fluids polypron",
      chemistryAccordionItem7_3: "polydemulsol",
      chemistryAccordionItem7_4: "polydehydrate",
      chemistryAccordionItem7_5: "binding additive for briquetted subriks",
      chemistryAccordionItem7_6: "lubricant for metal molds betanol",
      chemistryAccordionItem7_7: "polyoilflex",
      chemistryAccordionItem7_8: "polybactericide",
      chemistryAccordionItem7_9: "polyhydrosil reagent (water repellent)",
      chemistryAccordionItem8_1: "polyfloc drilling reagent",
      chemistryAccordionItem8_2: "polyrheocyte",
      chemistryAccordionItem8_3: "reagent police ecosorb",

      chemistryAccordionItem9_1: "Activated alumina ball",
      chemistryAccordionItem9_2: "Amines (MEA/DEA/TEA/MDEA)",
      chemistryAccordionItem9_3: "Dimethyl disulfide (DMDS)",
      chemistryAccordionItem9_4: "Ethyl mercaptan",
      chemistryAccordionItem9_5: "Glycolamine (DGA)",
      chemistryAccordionItem9_6: "Glycols (MEG, DEG, TEG)",
      chemistryAccordionItem9_7: "Grinding and bulking materials",
      chemistryAccordionItem9_8: "Guard Bed Media",
      chemistryAccordionItem9_9: "Inert ceramic ball",
      chemistryAccordionItem9_10: "Tower packing materials",
      chemistryAccordionItem9_11: "Vanadium pentoxide",
      chemistryAccordionItem9_12: "Garnet crumbs",
      chemistryAccordionItem10_1: "Acids",
      chemistryAccordionItem10_2: "Activated carbon",
      chemistryAccordionItem10_3: "Aluminum sulfate",
      chemistryAccordionItem10_4: "Sodium bicarbonate",
      chemistryAccordionItem10_5: "Caustic soda",
      chemistryAccordionItem10_6: "Sodium hypochlorite",
      chemistryAccordionItem10_7: "Polyaluminum chloride (PAC)",
      chemistryAccordionItem10_8: "Potassium chloride",
      chemistryAccordionItem10_9: "Calcium chloride",
      chemistryAccordionItem10_10: "Calcium carbonate",
      chemistryAccordionItem10_11: "And so on.",

      equipmentAccordionTitle1: "Motorized casing shoe for casing deployment",
      equipmentAccordionTitle2: "Turbo-expander shoe",
      equipmentAccordionTitle3: "Well filters",
      equipmentAccordionTitle4: "Core sampling tools",
      equipmentAccordionTitle5: "Drill bit",
      equipmentAccordionTitle6: "Impact tool",
      equipmentAccordionTitle7: "Circulation sub",
      equipmentAccordionTitle8: "Vibrating tool",

      equipmentAccordionItem1_1: "Nonsliding Casing Shoe",

      equipmentAccordionItem2_1: "SDT-TRS-450 ",
      equipmentAccordionItem2_2: "SDT-TRS-500 ",
      equipmentAccordionItem2_3: "SDT-TRS-550 ",
      equipmentAccordionItem2_4: "SDT-TRS-575 ",
      equipmentAccordionItem2_5: "SDT-TRS-662  ",

      equipmentAccordionItem3_1: "Mesh Filters with Filtering Jacket",
      equipmentAccordionItem3_2: "Well Screens",
      equipmentAccordionItem3_3: "Autonomous Inflow Control",

      equipmentAccordionItem5_1: "Hydraulic Mechanical Jar",
      equipmentAccordionItem5_2: "Hydraulic Jar",
      equipmentAccordionItem5_3: "Hydraulic Jar with Mechanical Latch",

      // INNOVATION TECHNOLOGIES PAGE WORDS =================================================================

      innTitle: "Innovative Technologies: Leadership in Progress",
      innTitle2: "Innovative technologies",
      innSub:
        "We develop and implement cutting-edge technologies to optimize processes and create an environmentally sustainable future",

      innTitle3: "Tank cleaning robotic technology",
      innTitle4: "In-line cleaning technology",
      innTitle5: "Robot inspectors",
      innTitle6: "Remotely operated underwater vehicles",
      innDesc1:
        "In the modern world, innovation is a natural and indispensable process for the existence of industry. Market conditions indicate that the further development of the state and the economy cannot do without an innovative development path. In this regard, our company offers robotic technical developments from global manufacturers to enhance the competitiveness of the enterprise. The development of the industry is accompanied by improving its technological level and increasing economic efficiency.",
      innDesc2:
        "Robotic installation for removing oil sludge from oil tanks, based on No Man Entry, protects people and the environment, washes walls, bottom, and roof of the RVS from bottom sediments, and ensures further processing of pumped-out sludge. It has a European explosion protection certificate - ATEX. 24/7 work, high speed of sludge pumping and increased productivity of the processing unit, short terms of installation/dismantling of equipment, no need for site preparation or the use of crane equipment. Multiple reduction in the volume of oil waste reduces transportation and disposal costs. 100% safety in the field of labor protection, industrial and environmental safety. Work carried out year-round at temperatures from –25 to +70 °C.",
      innDesc3:
        "The in-line robotic system is designed to monitor and clean complex branched sections of pipelines. Propulsion platforms exceed in functionality existing solutions for diagnostics and cleaning. The system is designed to assess the current technical condition of pipelines to prevent accidents, human casualties and prevent damage to the environment.",
      innDesc4:
        "Introduction of an intelligent four-legged robot in the oil and gas industry, integrates with traditional laser methane leak detection equipment, making traditional inspection operations safer and more efficient, facilitating digital transformation in the oil and gas industry. Meanwhile, the robot's powerful data collection capabilities can free up more workers to do more complex work. The four-legged robot can automatically move, charge, collect data, generate an inspection report, find the source of abnormal leaks, and help detect abnormal phenomena in time.",
      innDesc5:
        "Remotely controlled uninhabited underwater vehicles (ROV) are used for soil mapping, inspection work, for rescue operations, for sharpening and removing large objects from the bottom, for work to support oil and gas complex facilities (drilling support, inspection of gas pipeline routes, inspection of structures for breakdowns, valve operations), for scientific applications, for diving support, for fish farm maintenance work, for archaeological surveys, for inspection of city communications, for inspection of ships for the presence of explosive devices[1] or contraband goods attached externally to the side etc. The range of tasks to be solved is constantly expanding.",
    },
  },

  // RUSSIAN LANGUAGE
  // RUSSIAN LANGUAGE
  // RUSSIAN LANGUAGE
  // RUSSIAN LANGUAGE
  // RUSSIAN LANGUAGE
  // RUSSIAN LANGUAGE
  ru: {
    translation: {
      // Navbar section starts here ...

      home: "Главная",
      // Home translate
      homeTitle1: "Добро пожаловать в",
      homeTitle2: "Используем инновационные технологии для светлого будущего",
      aboutUs: "О НАС",
      aboutUsText:
        " От всего коллектива приветствуем Вас на сайте и выражаем благодарность за интерес, проявленный к нашей компании. ХО «Дуйели Депе» - современная, динамично развивающаяся компания, объединившая в себе высококвалифицированных специалистов с многолетним опытом работы и знаниями в своей области. Начавшая свою деятельность 2021 году в строительстве и оказание услуг по оценке воздействия на окружающую среду (ОВОС) , способствуя устойчивому развитию для таких компаний как Эни Туркменистан , филиал Китайская Национальная Нефтегазовая Компания в Туркменистане, Драгон Ойл и Чалик Энерджи. Сотрудничая с передовыми производителями оборудовании, химии, сервисными компаниями  нефтегазовой отрасли и технологическими компаниями производящие инновационные разработки во всех отраслях промышленности позволяет нам предлагать высококачественные продукты, услуги и решение на рынке Туркменистана. В нашей работе мы стараемся найти индивидуальный подход к каждому и нацелены на долговременное и взаимовыгодное сотрудничество. Мы надеемся, что обратившись однажды к нам Вы станете нашим постоянным клиентом.",
      constructionEcology: "Строительство / Экология",
      oilGas: "Нефтегазовые услуги",
      equipmentChemistry: "Оборудование / Химия",
      innovativeTechnologies: " Инновационные Технологии",
      workingHours: "Рабочие часы",
      partnership:
        "Партнерство – ключ к совместному успеху, ведь вместе мы создаем не просто связи, а будущее",
      contactUs: "Свяжитесь с нами",
      fullName: "Полное имя",
      email: "Электронная почта",
      message: "Сообщение",
      send: "Отправить",
      navigation: "Навигация",
      contact: "Контакты",
      address: "Ашхабад, ул. 1972 (Ататюрк), дом 82",
      footerText:
        "Инновации, технологии, результаты: вместе к бизнесу будущего",

      //  Construction And Ecology page Words =====================================

      ecoTitle: "Экономическое Общество: Строим Устойчивое Будущее",
      ecoSubTitle:
        " Строим отличие, сохраняем экологию и инновации для завтра.",
      ecoDescription:
        "Наша компания специализируется на строительстве и экологии. Мы придерживаемся принципов качества и безопасности в строительных проектах, строя жилые, коммерческие и промышленные объекты с акцентом на инновационные методы и ответственность перед окружающей средой. В области экологии мы предоставляем такие услуги, как экологическая экспертиза, разработка проектов оценки воздействия на окружающую среду, а также комплексная оценка всех экологических, экономических и социальных параметров природной среды на территории объекта. Наши специалисты проводят мониторинг экологии, выполняют необходимые инженерно-экологические и геологические исследования для изучения влияния проекта на внешнюю среду и расчета природоохранных мероприятий. Кроме того, мы занимаемся технологиями очистки воды,предлагая решения для эффективного использования водных ресурсов и очистки сточных вод. В мире, где вода становится все более важным ресурсом для социально-экономического развития, наша компания стремится предоставить технологии, приносящие пользу как людям, так и природе",
      ecoDesc3:
        "В наши дни, когда вода с каждым днем приобретает все больше значение для социально-экономического развития, на повестке дня всегда стоит вопрос об эффективном использовании водных источников и очистке сточных вод. Компания стремится обеспечить технологиями пользу как людям, так и природе.",
      ecoT1: "Строительство",
      ecoT2: "Экология",
      ecoT3: "Очистка воды",
      ecoDesc1:
        "При строительстве мы отличаемся в вопросах качества и безопасности. Строим под ключ жилые, коммерческие, промышленные объекты с акцентом на использование инновационных методов и ответственностью перед окружающей средой.",
      ecoDesc2:
        "Компания оказывает свои услуги по экологической экспертизе, разработке проекта ОВОС, производит комплексную оценку всех экологических, экономических, социальных параметров природной среды на территории хозяйственного объекта и согласование в экспертизе проекта. Наши специалисты производят мониторинг экологии местности, выполняют все необходимые инженерно-экологические и геологические изыскания для изучения влияния деталей объекта на внешнюю среду, а также производят расчет природоохранных мероприятий.",
      more: "Подробное",

      // OIL AND GAS SERVICES PAGE WORDS =================================================
      oilTitle: "Услуги в области нефти и газа",
      oilSubTitle:
        "Доставка превосходства в энергетических услугах и инновациях",
      hideDesc: "Скрыть описание ",
      showDesc: "Показать описание",
      oilDesc1:
        "Предлагаемые нами сервисные услуги нефтегазового сектора позволяют предложить широкий спектр возможностей, позволяющих проводить разработку с учетом индивидуальных параметров пластов и условий месторождений, исследовать физические, химические и фильтрационные особенности грунтов.",

      carouselTitle1: "Стандартное гидроразрывное бурение",
      carouselTitle2: "Большой объем гидроразрывного бурения",
      carouselTitle3: "Многоступенчатое гидроразрывное бурение",
      carouselTitle4: "Пенный гидроразрыв",
      carouselTitle5: "Азотный гидроразрыв",
      carouselTitle6: "Гидроразрыв на основе углеводородов",
      carouselTitle7: "Гидроразрыв с композитными пробками (Plug & Perf)",
      carouselTitle8: "MSHF на буровой трубе с абразивным проколом",
      carouselTitle9: "Буровые бригады по добыче и боковому бурению",
      carouselSubTitle1: "Эффективный и проверенный метод",
      carouselSubTitle2: "Максимизация производства",
      carouselSubTitle3: "Оптимизация стимуляции пласта",
      carouselSubTitle4: "Снижение повреждения пласта",
      carouselSubTitle5: "Повышенная эффективность",
      carouselSubTitle6: "Экологически чистый метод",
      carouselSubTitle7: "Точный контроль пласта",
      carouselSubTitle8: "Эффективность и универсальность",
      carouselSubTitle9: "Опытные команды",
      carouselDescription1:
        "Наш стандартный процесс гидроразрывного бурения - это надежный и эффективный метод добычи нефти и газа. Он включает в себя внедрение жидкости под высоким давлением для создания трещин в породе пласта, что позволяет извлекать ценные ресурсы.",
      carouselDescription2:
        "Гидроразрыв большого объема - это специализированная техника, разработанная для оптимизации производства. Обладая возможностью внедрения больших объемов жидкости, мы эффективно получаем доступ и извлекаем углеводороды из глубоких подземных месторождений.",
      carouselDescription3:
        "Наш метод многоступенчатого гидроразрывного бурения включает несколько этапов разрыва для максимизации стимуляции пласта и улучшения добычи нефти и газа.",
      carouselDescription4:
        "Пенный гидроразрыв - это метод, использующий пену для транспортировки проппанта в трещины, снижая повреждение пласта и улучшая поток углеводородов.",
      carouselDescription5:
        "Азотный гидроразрыв используется для увеличения эффективности гидроразрывного бурения с использованием азота в качестве рабочей жидкости, что приводит к снижению повреждения пласта и улучшению добычи нефти и газа.",
      carouselDescription6:
        "Наш метод гидроразрыва на основе углеводородов использует экологически чистые углеводороды в качестве рабочей жидкости, минимизируя воздействие на окружающую среду при максимальной добыче ресурсов.",
      carouselDescription7:
        "Гидроразрыв с композитными пробками (MSHF) с механическим герметизированным гидроразрывом, также известным как 'Plug & Perf', - это техника, используемая для точного контроля пласта и оптимизации работы скважины.",
      carouselDescription8:
        "MSHF, выполненный на буровой трубе с абразивным или кумулятивным проколом, предлагает эффективный и универсальный метод для вмешательства в работу скважины и стимуляции.",
      carouselDescription9:
        "Наши опытные буровые бригады специализируются на производственном бурении и боковом бурении, предоставляя экспертизу и эффективность в ваших проектах бурения.",
      primaryService: "Основная услуга",
      primaryService1: "Технологии бурильных труб",
      primaryService2: "Гидроразрыв",
      primaryService3: "Бурение и кустовые работы",
      primaryService4: "Подготовка убойных жидкостей",
      primaryService5: "ОПП и РИР",
      primaryService6: "Производство жидкого азота",
      primaryService7: "Разработка и тестирование скважин",
      primaryService8: "Завершение скважин",
      primaryService9: "Разработка новых технологий",

      secondaryService: "Вторичная услуга",
      secondaryService1:
        "Фрезерование портов, пробок и др. (ДДМ, Жары, Сепараторы, Ловушки для осадков)",
      secondaryService2:
        "Открытие/закрытие портов гидроразрыва с помощью переключающего инструмента",
      secondaryService3:
        "Бурение боковых стволов малого диаметра (рыбий хвост)",
      secondaryService4:
        "Очистка донных зон с помощью устройств эжекции АНПД на бурильных трубах",
      secondaryService5:
        "Работы по ловле (роторы, магниты, нестандартные инструменты)",
      secondaryService6:
        "Перфорация на бурильных трубах (абразивная, кумулятивная)",
      secondaryService7:
        "ГИС на бурильных трубах (труба с кабелем, автономные приборы)",
      secondaryService8: "ГИС с обходными системами (Y-инструмент)",
      secondaryService9: "Разработка насосов с использованием бурильных труб",
      secondaryService10:
        "Бурение с недостаточным давлением в бурильных трубах",
      serviceTitle1: "Технологии непрерывной трубы (Coiled Tubing)",
      serviceTitle2: "Гидравлическое разрушение (Hydraulic Fracturing)",
      serviceTitle3: "Бурение и реконструкция (Drilling and Workover)",
      serviceTitle4:
        "Подготовка убойных жидкостей (Preparation of Killing Liquids)",
      serviceTitle5:
        "OPP и RIR (Overpressure Protection и Risk Identification and Reduction)",
      serviceTitle6:
        "Производство жидкого азота (Production of Liquid Nitrogen)",
      serviceTitle7:
        "Разработка и испытание скважин (Development and Testing of Wells)",
      serviceTitle8: "Завершение скважины (Well Completion)",
      serviceTitle9:
        "Разработка новых технологий (Development of New Technologies)",
      serviceTitle10:
        "Фрезерование портов, пробок и др. (DDM, Jars, Separators, Sludge Traps)",
      serviceTitle11:
        "Открытие/закрытие гидравлических портов при гидравлическом разрушении с помощью переключающего инструмента (Opening/Closing of Hydraulic Fracturing Ports with a Switching Tool)",
      serviceTitle12:
        "Бурение с боковым отклонением малого диаметра (Fishbone) (Small Diameter Side-Track Drilling)",
      serviceTitle13:
        "Очистка донных отверстий с помощью устройств с эжектором ANPD на непрерывной трубе (Bottom Hole Cleaning with ANPD Ejector Devices on Coiled Tubing)",
      serviceTitle14:
        "Работы по ловле (Fishing Work) (Роторы, магниты, нестандартные инструменты)",
      serviceTitle15:
        "Перфорация на непрерывной трубе (Coiled Tubing) (Abrasive, Cumulative)",
      serviceTitle16:
        "ГИС на непрерывной трубе (Coiled Tubing) (Труба с кабелем, автономные инструменты) (GIS on Coiled Tubing)",
      serviceTitle17:
        "ГИС с системами обхода (Y-Tool) (GIS with Bypass Systems)",
      serviceTitle18:
        "Разработка вихревых насосов на непрерывной трубе (Coiled Tubing) (Development of Jet Pumps on Coiled Tubing)",
      serviceTitle19:
        "Бессбалансовое бурение на непрерывной трубе (CT) (Underbalanced CT Drilling)",

      serviceDescription1:
        "Технологии непрерывной катушки (Coiled Tubing Technologies) включают использование непрерывной катушки для выполнения различных операций по интервенции в нефтегазовой промышленности. Эта технология предлагает преимущества, такие как очистка ствола, азотный удар и многое другое. Установки с непрерывной катушкой оборудованы катушкой, содержащей трубу, которую можно развернуть в скважину без необходимости сборки труб. Этот метод экономичен и универсален, что делает его подходящим для широкого спектра применений в отрасли.",

      serviceDescription2:
        "Гидравлический разрыв (Hydraulic Fracturing), также известный как 'фракинг', - это метод, используемый для стимулирования добычи углеводородов из пластов путем создания трещин в горной формации. Высоконапорная жидкость впрыскивается в ствол скважины для создания трещин в образовании, что позволяет нефти или газу свободнее течь. Этот процесс необходим для увеличения производительности скважины и извлечения углеводородов из плотных или неконвенциональных пластов.",

      serviceDescription3:
        "Операции по бурению и работе на скважинах (Drilling and Workover) включают бурение новых скважин и техническое обслуживание или улучшение существующих скважин. К ним относятся такие действия, как бурение разведочных скважин, повторное бурение существующих скважин и проведение работ по обслуживанию для улучшения добычи. Квалифицированные специалисты используют передовое оборудование и технологии для обеспечения эффективности и безопасности операций по бурению и работе на скважинах.",

      serviceDescription4:
        "Подготовка убийственных жидкостей (Preparation of Killing Liquids) относится к созданию специализированных жидкостей, используемых в операциях по управлению скважиной. Убийственные жидкости формулируются для контроля давления и стабильности ствола во время бурения, технического обслуживания и других операций. Правильно подготовленные убийственные жидкости критичны для обеспечения безопасности и целостности скважины.",

      serviceDescription5:
        "OPP (Overpressure Protection) и RIR (Risk Identification and Reduction) - это важные меры безопасности в нефтегазовой промышленности. Системы OPP предназначены для предотвращения случаев перепрессовки при операциях в стволе скважины, а RIR включает в себя выявление и снижение рисков, связанных с бурением, добычей и транспортировкой углеводородов. Эти меры безопасности необходимы для защиты работников и окружающей среды.",

      serviceDescription6:
        "Производство жидкого азота (Production of Liquid Nitrogen) является неотъемлемым процессом в нефтегазовой промышленности. Жидкий азот используется для различных приложений, включая стимуляцию скважин, промывку трубопроводов и охлаждение оборудования. Он производится криогенным разделением воздуха и играет ключевую роль во многих процессах отрасли.",

      serviceDescription7:
        "Разработка и испытание скважин (Development and Testing of Wells) - это критический этап в исследовании и добыче углеводородов. Это включает бурение скважин, оценку свойств пласта и проведение испытаний для определения потенциала добычи. Квалифицированные команды используют передовые технологии для оптимизации разработки скважин и обеспечения эффективного извлечения углеводородов.",

      serviceDescription8:
        "Завершение скважин (Well Completion) - это процесс подготовки вновь пробуренной скважины к добыче. Это включает установку необходимого оборудования, такого как обсадная труба, насосная колонна и уплотнительные устройства, для обеспечения тока углеводородов на поверхность. Завершение скважины - это ключевой этап подготовки скважины к добыче.",

      serviceDescription9:
        "Разработка новых технологий (Development of New Technologies) в нефтегазовой промышленности включает непрерывные исследования и инновации с целью улучшения методов добычи и экологической эффективности. Инновации включают новые методы бурения, моделирование пласта и устойчивые практики, направленные на повышение эффективности и снижение воздействия на окружающую среду.",

      serviceDescription10:
        "Фрезерование портов, пробок движения и связанных услуг (Milling of Ports, Traffic Jams, etc.) является частью процесса по интервенции в скважину. Это включает использование фрезерных инструментов для удаления преград в стволе скважины, таких как известковый налет, цемент или мусор. Процесс помогает восстановить целостность скважины и улучшить добычу углеводородов.",

      serviceDescription11:
        "Открытие/закрытие портов для гидравлического разрыва с помощью переключающего инструмента (Opening/Closing of Hydraulic Fracturing Ports with a Switching Tool) - это критический этап в операциях гидравлического разрыва. Специализированные инструменты используются для управления открытием и закрытием портов в обсадной трубе, обеспечивая точное введение фракционирующих жидкостей и высвобождение углеводородов.",

      serviceDescription12:
        "Бурение боковых стволов малого диаметра (Fishbone) - это метод создания боковых или побочных стволов из существующих скважин. Этот метод включает контролируемое отклонение ствола для доступа к дополнительным запасам углеводородов или оптимизации добычи.",

      serviceDescription13:
        "Очистка зоны при дне с применением эжекторных устройств ANPD на непрерывной катушке (Bottom Hole Cleaning with ANPD Ejector Devices on Coiled Tubing) - это процесс интервенции в скважину, используемый для удаления мусора и преград из ствола скважины. Устройства ANPD (Annular Nozzle Pressure Differential) используются для создания потока высокой скорости, который смывает и перемещает частицы из скважины.",

      serviceDescription14:
        "Fishing Work involves the retrieval of equipment or objects lost in the wellbore, such as broken drillstrings or tools. Rotators, magnets, and non-standard tools are used in the fishing process to capture and retrieve items, ensuring well integrity and safe operations.",
      serviceDescription15:
        "Perforation on Coiled Tubing is a method for creating holes or perforations in well casing or reservoir rock. This technique enhances well productivity by providing direct access for hydrocarbon flow. Both abrasive and cumulative perforation methods are employed based on specific well requirements.",
      serviceDescription16:
        "Geographic Information Systems (GIS) on Coiled Tubing involves the integration of location data with well intervention operations. This technology utilizes coiled tubing equipped with pipe and cable systems or stand-alone instruments to enhance the precision and effectiveness of well services.",
      serviceDescription17:
        "GIS with Bypass Systems, often implemented with Y-Tool configurations, enables the simultaneous deployment of coiled tubing and other well intervention tools. This allows for versatile well services and improved control of operations within the wellbore.",
      serviceDescription18:
        "The Development of Jet Pumps on Coiled Tubing is an innovation in well stimulation and production. Jet pumps are used to enhance the flow of hydrocarbons in the well. When mounted on coiled tubing, they offer a flexible and effective solution for optimizing well performance.",
      serviceDescription19:
        "Underbalanced Coiled Tubing (CT) Drilling is a method that maintains the pressure in the wellbore below the reservoir pressure during drilling. This minimizes formation damage and improves drilling efficiency. It is employed in situations where conventional drilling may not be suitable or safe.",

      //
      //
      //
      // EQUIPMENT AND CHEMISTRY PAGE WORDS ==========================================================

      chemistryTitle: "Оборудование и Химия",
      chemistrySub:
        "Инновационные решения для эффективных технологических процессов и экологической устойчивости",
      chemistryDesc1:
        "При поставках химических реагентов наша главная задача – удовлетворение потребностей при строительстве газовых, газоконденсатных и нефтяных скважин различной степени сложности. Широкий спектр реагентов позволяет решать самые разнообразные задачи в области бурения, освоения, капитального ремонта и ремонтно-восстановительных работ газовых и нефтяных скважин.",
      chemTitle1: "Оборудование",
      chemTitle2: "Химия",
      chemistryDesc2:
        "Оборудование для нефтегазовой промышленности поставляется на рынок в большом ассортименте. Позволяет упростит добычу природных ресурсов и позволяет выполнить другие манипуляции, необходимые для получения конечного продукта. Современные инженерные решения позволяют нам поставлять оборудования повещающие безопасность рабочих процессов и минимизировать негативное влияние на окружающую среду.",
      chemistryDesc3:
        "При поставках химических реагентах наша главная задача удовлетворения потребностей при строительстве газовых, газоконденсатных и нефтяных скважин различной степени сложности. Широкий спектр реагентов, позволяет решать самые разнообразные задачи в области бурения, освоения, капитального ремонта и ремонтно-восстановительных работ газовых и нефтяных скважин. ",
      chemistryDesc:
        "Современные нефтяная и газовая промышленность не может эффективно функционировать без целого ряда химических реагентов и оборудования, которые применяются на каждой стадии производства - от бурения скважин и добычи до переработки и последующей транспортировки сырья. В связи с этим наша компания стремится предоставить все необходимое чтоб упростить работу наших партнеров и предлагает высококачественные продукции. ",

      chemistryAccordionTitle1:
        "реагенты для буровых растворов на водной основе",
      chemistryAccordionTitle2: "реагенты и материалы для РУО",
      chemistryAccordionTitle3: "системы и концентраты буровых растворов ",
      chemistryAccordionTitle4:
        "реагенты и материалы для цементирования скважин ",
      chemistryAccordionTitle5: "водоизолирубщие, тампонирубщие составы",
      chemistryAccordionTitle6:
        "реагенты, материалы для капитального ремонта скважин ",
      chemistryAccordionTitle7: "химические реагенты специального назначения ",
      chemistryAccordionTitle8:
        "для регенерации буровых технологических жидкостей ",
      chemistryAccordionTitle9: "Катализатор и специальные продукты",
      chemistryAccordionTitle10: "Товарная химия",
      chemistryAccordionItem1_1:
        "стабилизаторы, регуляторы фильтрации и реологических свойст ",
      chemistryAccordionItem1_2:
        "смазочные, противоприхватные и антисальниковые добавки ",
      chemistryAccordionItem1_3: "ингибиторы глин",
      chemistryAccordionItem1_4: "пеногасители",
      chemistryAccordionItem1_5: "утяжилители",
      chemistryAccordionItem1_6:
        "нейтрализаторы сероводорода и кислых флюидов ",
      chemistryAccordionItem1_7: "составы для приготовления тяжелых жидкостей ",
      chemistryAccordionItem1_8: "ингибиторы коррозии и солеотлежений ",
      chemistryAccordionItem2_1:
        "состав для приготовления буровых эмульсий полиэмульсан",
      chemistryAccordionItem2_2: "эмульгатор полиойлчек стаб",
      chemistryAccordionItem2_3: "органобентонит полиойлчек гидрофоб",
      chemistryAccordionItem2_4: "понизитель фильтрации полиойлчек фильтр ",
      chemistryAccordionItem2_5: "регулятор вязкости полиойлчек вис ",
      chemistryAccordionItem2_6: "полиойлбарм ",
      chemistryAccordionItem3_1: "полиэконол",
      chemistryAccordionItem3_2: "система полибур-турбо ",
      chemistryAccordionItem3_3: "полиформ ",
      chemistryAccordionItem3_4: "коллоид-полимерная сухая смесь кпсс",
      chemistryAccordionItem4_1: "реагенты для цементирования ",
      chemistryAccordionItem4_2: "пластификаторы ",
      chemistryAccordionItem4_3:
        "стабилизирующая добавка для облегченных цементов ",
      chemistryAccordionItem4_4: "понизители водоотдачи ",
      chemistryAccordionItem4_5: "армирующая добавка",
      chemistryAccordionItem4_6: "расширяющая добавка ",
      chemistryAccordionItem4_7: "расширяющая добавка ",
      chemistryAccordionItem4_8:
        "составы для приготовления буферных жидкостей ",
      chemistryAccordionItem4_9: "пеногасители ",
      chemistryAccordionItem5_1: "полимерные композиции ",
      chemistryAccordionItem5_2: "тампонирующие составы ",
      chemistryAccordionItem6_1: "реагент полиплав ",
      chemistryAccordionItem6_2: "технологическая жидкость полирир ",
      chemistryAccordionItem6_3:
        "кремнийоргический полимерный состав полискреп ",
      chemistryAccordionItem6_4: "реагент полирр",
      chemistryAccordionItem6_5: "тампонажная сухая смесь политгп ",
      chemistryAccordionItem6_6: "тампонирующий материал полифильтрол",
      chemistryAccordionItem6_7: "состав для гулшения скважин полиаэрогель ",
      chemistryAccordionItem6_8:
        "состав для ликвидации поглощений полиблокатор-комби ",
      chemistryAccordionItem7_1: "гидрофобизатор полифоб ",
      chemistryAccordionItem7_2: "добавка для буровых растворов полипрон ",
      chemistryAccordionItem7_3: "полидеэмульзол ",
      chemistryAccordionItem7_4: "полидегидрат ",
      chemistryAccordionItem7_5:
        "связующая добавка для брикетированных субрик ",
      chemistryAccordionItem7_6: "смазка для металических форм бетонол",
      chemistryAccordionItem7_7: "полиойлфлекс ",
      chemistryAccordionItem7_8: "полибакцид",
      chemistryAccordionItem7_9: "реагент полигидросил (гидрофобизатор)",
      chemistryAccordionItem8_1: "буровой реагент полифлок ",
      chemistryAccordionItem8_2: "полиреоцит ",
      chemistryAccordionItem8_3: "реагент полицем экосорб ",
      chemistryAccordionItem9_1: "Активированный шарик глинозема",
      chemistryAccordionItem9_2: "Амины (МЭА/ДЭА/ТЭА/МДЭА)",
      chemistryAccordionItem9_3: "Диметилдисульфид (ДМДС)",
      chemistryAccordionItem9_4: "Этилмеркаптан",
      chemistryAccordionItem9_5: "Гликольамин (DGA)",
      chemistryAccordionItem9_6: "Гликоли (МЭГ, ДЭГ, ТЭГ)",
      chemistryAccordionItem9_7: "Измельчающие и галтовочные материалы",
      chemistryAccordionItem9_8: "Охранник Кровать Медиа",
      chemistryAccordionItem9_9: "Инертный керамический шарик",
      chemistryAccordionItem9_10: "Упаковочные материалы башни",
      chemistryAccordionItem9_11: "Пентаоксид ванадия",
      chemistryAccordionItem9_12: "Гранатовая крошка",
      chemistryAccordionItem10_1: "Кислоты",
      chemistryAccordionItem10_2: "Активированный уголь",
      chemistryAccordionItem10_3: "Сульфат алюминия",
      chemistryAccordionItem10_4: "Бикарбонат натрия",
      chemistryAccordionItem10_5: "Каустическая сода",
      chemistryAccordionItem10_6: "Гипохлорит натрия",
      chemistryAccordionItem10_7: " Полиалюминийхлорид (PAC)",
      chemistryAccordionItem10_8: "Хлорид калия",
      chemistryAccordionItem10_9: "Хлорид кальция",
      chemistryAccordionItem10_10: "Карбонат кальция",
      chemistryAccordionItem10_11: "и т. д.",

      equipmentAccordionTitle1:
        "Моторизованный башмак для развертки обсадных труб",
      equipmentAccordionTitle2: "Башмак турбо-развертки ",
      equipmentAccordionTitle3: "Скважинные фильтры",
      equipmentAccordionTitle4: "Инструменты для отбора керна",
      equipmentAccordionTitle5: "Буровой Яс",
      equipmentAccordionTitle6: "Ударный инструмент",
      equipmentAccordionTitle7: "Циркуляционный суб",
      equipmentAccordionTitle8: "Колебательний инструмент",

      equipmentAccordionItem1_1: "Несверлимый башмак",

      equipmentAccordionItem2_1: "SDT-TRS-450 ",
      equipmentAccordionItem2_2: "SDT-TRS-500 ",
      equipmentAccordionItem2_3: "SDT-TRS-550 ",
      equipmentAccordionItem2_4: "SDT-TRS-575 ",
      equipmentAccordionItem2_5: "SDT-TRS-662  ",

      equipmentAccordionItem3_1: "Сетчатые фильтры с фильтрующей рубашкой  ",
      equipmentAccordionItem3_2: "Скважинные экраны ",
      equipmentAccordionItem3_3: "Автономный контроль притока",

      equipmentAccordionItem5_1: "Гидравлический механический яс",
      equipmentAccordionItem5_2: "Гидравлический яс",
      equipmentAccordionItem5_3: "Гидравлический яс с механической защелкой",

      // INNOVATION TECHNOLOGIES PAGE WORDS =================================================================

      innSub:
        "Разрабатываем и внедряем передовые технологии для оптимизации процессов и создания экологически устойчивого будущего.",
      innTitle2: "Инновационные Технологии",
      innTitle: "Инновационные Технологии: Лидерство в Прогрессе",
      innTitle3: " Роботизированная технология очистки резервуаров",
      innTitle4: "Технология внутритрубной очистки",
      innTitle5: "Роботы-инспекторы",
      innTitle6: "Дистанционно управляемые подводные аппараты",
      innDesc1:
        "В современном мире инновации являются естественным и незаменимым процессом для существования промышленности. Условия, выстраивающиеся на рынке, говорят о том, что дальнейшее развитие государства и экономики не может обойтись без инновационного пути развития. В связи с этим наша компания предлагает роботизированные технические разработки мировых производителей для повышения конкурентоспособности предприятия. Развитие промышленности сопровождается улучшением ее технологического уровня, повышением экономической эффективности.",
      innDesc2:
        "Роботизированная установка для удаления нефтешлама из нефтяных резервуаров. Работающая на основе No Man Entry защита людей и окружающей среды, замывает стены, днище и кровлю РВС от донных отложений, а также обеспечивает дальнейшую переработку откачанных шламов. Имеющий европейский сертификат взрывозащиты – АТЕХ.o	проведения работ в режиме 24/7;o	высокой скорости откачки шлама и увеличенной производительности блока переработки;o	коротких сроков монтажа/демонтажа оборудования;o	отсутствия необходимости в подготовке площадки или использования крановой технике;Кратное сокращение объемов получаемых нефтеотходов, ведет к сокращению расходов на их транспортировку до полигона и дальнейшую утилизацию;100% безопасность в области охраны труда, промышленной, экологической безопасности;Проведение работ круглогодично при температуре от –25 до +70 °С;",
      innDesc3:
        "Внутритрубный роботизированная система предназначена для контроля и очистки сложных разветвленных секций трубопроводов. Движущие платформы, превышают по функционалу   уже существующие решения для диагностики и очистки. Система разработана для оценки текущего технического состояние трубопроводов для предотвращений аварий, человеческих жертв и предотвращения уронов экологии окружающей среды. ",
      innDesc4:
        "Внедрение интеллектуального четвероногого робота в нефтегазовой отрасли,интегририруется с традиционным лазерным оборудованием для обнаружения утечек метана, что делает традиционные инспекционные операции более безопасными и эффективными, способствуя цифровой трансформации в нефтегазовой отрасли. Между тем, мощные возможности робота  по сбору данных могут высвободить больше сотрудников для выполнения более сложной работы. Четвероногий робот может автоматически перемещаться, заряжаться, собирать данные, формировать отчет о проверке, находить источник аномальных утечек и помогать вовремя обнаруживать аномальные явления. ",
      innDesc5:
        "Телеуправляемый необитаемый подводный аппарат (ТНПА)  используются для картографии грунта, осмотровых работ, для спасательных операций, для остропки и извлечения крупных предметов со дна, для работ по обеспечиванию объектов нефтегазового комплекса (поддержка бурения, инспекция трасс газопроводов, осмотр структур на наличие поломок, выполнение операций с вентилями и задвижками), для научных приложений, для поддержки водолазных работ, для работ по поддержанию рыбных ферм, для археологических изысканий, для осмотра городских коммуникаций, для осмотра судов на наличие взрывчатых устройств[1] или контрабандных товаров, прикреплённых снаружи к борту и др. Круг решаемых задач постоянно расширяется. ",
    },
  },

  // TURKMEN LANGUAGE
  // TURKMEN LANGUAGE
  // TURKMEN LANGUAGE
  // TURKMEN LANGUAGE
  // TURKMEN LANGUAGE
  // TURKMEN LANGUAGE
  // TURKMEN LANGUAGE

  tm: {
    translation: {
      // Navbar section ends here .....

      home: "Baş sahypa",
      // Home translate
      homeTitle1: "Hoşgeldiňiz",
      homeTitle2: "Ajaýyp gelejek üçin innowasiýa tehnologiýalaryny ulanýarys",
      aboutUs: "BIZ BARADA",
      aboutUsText:
        " Teamhli toparyň adyndan sizi saýta çagyrýarys we minnetdarlygymyzy bildirýäris kompaniýamyz bilen gyzyklanmagyňyz üçin. ES Duýeli Depe -birleşdirýän häzirki zaman, dinamiki ösýän kompaniýa köp ýyllyk tejribesi bolan ýokary hünärli hünärmenler we ugruňyzdaky bilimler. Işlerine 2021-nji ýylda başlady daşky gurşawa täsire baha bermek hyzmatlaryny gurmak we bermek ýaly kompaniýalar üçin durnukly ösüşi öňe sürýän daşky gurşaw (EIA) Eni Türkmenistan, Hytaý Milli Nebit Kompaniýasynyň bölümi Türkmenistanda, Dragon Oil we Chalik Energy. Öňdebaryjy bilen hyzmatdaşlyk enjamlary, himiki serişdeleri, hyzmat kompaniýalaryny öndürijiler öndürýän nebit-gaz senagaty we tehnologiýa kompaniýalary ähli pudaklarda innowasiýa ösüşleri bize mümkinçilik berýär ýokary hilli önümleri, hyzmatlary we bazara çözgütleri hödürläň Türkmenistan. Işimizde aýratyn çemeleşmäni tapmaga synanyşýarys hemmeler üçin we uzak möhletli we özara peýdalydyr  hyzmatdaşlygy. Biz bilen habarlaşanyňyzdan soň bolarsyňyz diýip umyt edýäris yzygiderli müşderimiz.",
      constructionEcology: "Gurluşyk / Ekologiýa",
      oilGas: "Nebit we Gaz hyzmatlary",
      equipmentChemistry: "Enjamlar / Himiýa",
      innovativeTechnologies: "Innowasiýa Tehnologiýalary",
      workingHours: "Iş sagatlary",
      partnership:
        "Hyzmatdaşlyk bilelikde üstünlik gazanmagyň açarydyr, sebäbi bilelikde  diňe baglanyşyklar däl, geljegi hem döredýäris",
      contactUs: "Biz bilen habarlaşyň",
      fullName: "Doly ady",
      email: "E-poçta",
      message: "Hat",
      send: "Ugratmak",
      navigation: "Nawigasiýa",
      contact: "Aragatnaşyklar",
      address: "Aşgabat, köç. 1972 (Ataturk), 82-nji bina.",
      footerText:
        "Innowasiýa, tehnologiýa, netijeler: geljegiň işine bilelikde",

      //  Construction And Ecology page Words =====================================

      ecoTitle: "Ykdysady jemgyýet: Durnukly geljegi gurmak",
      ecoSubTitle:
        "Tapawut döredýäris, ertir üçin ekologiýany we täzeligi gorap saklaýarys.",
      ecoDescription:
        "Kompaniýamyz gurluşyk we ekologiýa boýunça ýöriteleşendir. Biz gurluşykda hil we howpsuzlyk ýörelgelerine eýerýäris taslamalar, aýratyn ähmiýetli ýaşaýyş, söwda we senagat desgalaryny gurmak innowasiýa usullary we daşky gurşawa bolan jogapkärçilik barada. IN ekologiýa pudagynda daşky gurşaw ýaly hyzmatlary edýäris gözden geçirmek, daşky gurşawa täsire baha bermek taslamalaryny ösdürmek daşky gurşaw, şeýle hem ähli daşky gurşaw, ykdysady we giňişleýin baha bermek desganyň çägindäki tebigy gurşawyň sosial parametrleri. Biziňki hünärmenler daşky gurşawa gözegçilik edýärler we zerur zatlary ýerine ýetirýärler öwrenmek üçin daşky gurşaw in engineering enerçiligi we geologiki gözlegler taslamanyň daşky gurşawa täsiri we daşky gurşawy hasaplamak wakalar. Mundan başga-da, suwy arassalamak tehnologiýalary bilen meşgullanýarys, suw çeşmelerinden netijeli peýdalanmak üçin çözgütleri hödürleýär we hapa suwlary arassalamak. Suw barha möhüm bolup barýan dünýäde sosial-ykdysady ösüş üçin çeşme, kompaniýamyz adamlara peýdaly tehnologiýalary bermäge çalyşýar  ",
      ecoDesc3:
        "Häzirki wagtda durmuş durmuş-ykdysady ösüş üçin gün-günden möhüm ähmiýete eýe bolanda, suw çeşmelerinden netijeli peýdalanmak we hapa suwlary arassalamak meselesi hemişe gün tertibinde durýar. Kompaniýa adamlara we tebigata peýdaly tehnologiýalary bermäge çalyşýar.",
      ecoT1: "Gurluşyk",
      ecoT2: "Ekologiýa",
      ecoT3: "Suwy arassalamak",
      ecoDesc1:
        "Gurluşyk wagtynda hil we howpsuzlyk taýdan özümizi tapawutlandyrýarys. Innowasiýa usullaryny we daşky gurşawa jogapkärçiligi ulanmaga ünsi çekip, açyk ýaşaýyş, täjirçilik we senagat taslamalaryny gurýarys.",
      ecoDesc2:
        "Kompaniýa daşky gurşawy bahalandyrmakda, EIA taslamasyny işläp düzmekde öz hyzmatlaryny hödürleýär, ykdysady desganyň çägindäki tebigy gurşawyň ähli daşky gurşaw, ykdysady, sosial parametrlerine giňişleýin baha berýär we taslama gözden geçirilende tassyklanýar. Hünärmenlerimiz sebitiň ekologiýasyna gözegçilik edýärler, obýektiň jikme-jiklikleriniň daşky gurşawa täsirini öwrenmek we daşky gurşawy goramak çärelerini hasaplamak üçin ähli zerur in engineeringenerçilik, daşky gurşaw we geologiki gözlegleri geçirýärler.",
      more: "Anyklamak",

      // OIL AND GAS SERVICES PAGE WORDS =================================================
      oilTitle: "Nebit we gaz hyzmatlary",
      oilSubTitle:
        "Energetika hyzmatlarynda we innowasiýalarda ýokary derejäni bermek",
      hideDesc: "Düşündirişi gizläň",
      showDesc: "Düşündirişi görkez",
      oilDesc1:
        "Nebit we gaz pudagyna hödürleýän hyzmatlarymyz, emele gelişiň aýratyn meýdan parametrlerini we meýdan şertlerini göz öňünde tutup, topraklaryň fiziki, himiki we süzgüç aýratynlyklaryny öwrenmäge mümkinçilik berýän giň mümkinçilikleri hödürlemäge mümkinçilik berýär.",

      carouselTitle1: "Adaty gidrawlik döwük",
      carouselTitle2: "Döwülen burawyň uly göwrümi",
      carouselTitle3: "Köp basgançakly gidrawlik döwüji buraw",
      carouselTitle4: "Köpük döwmek",
      carouselTitle5: "Azotyň döwülmegi",
      carouselTitle6: "Uglewodorod esasly gidrawlik döwük",
      carouselTitle7:
        "Birleşdirilen wilkalar bilen gidrawlik döwük (Plug & Perf)",
      carouselTitle8: "Abraziw deşikli buraw turbasynda MSHF",
      carouselTitle9: "Önümçilik we gapdal buraw toparlary",
      carouselSubTitle1: "Netijeli we subut edilen usul",
      carouselSubTitle2: "Önümçiligi ulaltmak",
      carouselSubTitle3: "Suw howdanyny höweslendirmek",
      carouselSubTitle4: "Formasiýa zeperiniň azalmagy",
      carouselSubTitle5: "Netijeliligi ýokarlandyrmak",
      carouselSubTitle6: "Ekologiýa taýdan arassa usul",
      carouselSubTitle7: "Takyk emele geliş gözegçiligi",
      carouselSubTitle8: "Netijelilik we köp taraplylyk",
      carouselSubTitle9: "Tejribeli toparlar",
      carouselDescription1:
        "Adaty gidrawliki döwmek prosesi, nebit we gaz çykarmak üçin ygtybarly we täsirli usuldyr. Gymmat bahaly serişdeleri çykarmaga mümkinçilik berýän suw howdanyndaky gaýalarda döwükler döretmek üçin ýokary basyşda suwuklyk sanjymyny öz içine alýar.",
      carouselDescription2:
        "Uly göwrümli gidrawlik döwük önümçiligi optimizirlemek üçin döredilen ýöriteleşdirilen usuldyr. Uly mukdarda suwuklyk sanjym etmek ukyby bilen, çuň ýerasty ýataklardan uglewodorodlara netijeli girýäris we çykarýarys.",
      carouselDescription3:
        "Köp basgançakly gidrawliki döwmek usulymyz, suw howdanynyň gyjyndyrylmagyny ýokarlandyrmak we nebitiň we gazyň dikeldilmegini gowulandyrmak üçin döwmegiň birnäçe tapgyryny öz içine alýar.",
      carouselDescription4:
        "Köpük döwülmegi, köpükleri döwüklere daşamak, suw howdanynyň zeperini azaltmak we uglewodorod akymyny güýçlendirmek üçin ulanylýan usuldyr.",
      carouselDescription5:
        "Azot gidrawlik döwülişi, azoty işleýän suwuklyk hökmünde ulanyp, gidrawliki döwmegiň netijeliligini ýokarlandyrmak üçin ulanylýar, bu suw howdanynyň zaýalanmagyna we nebitiň we gazyň dikeldilmegine sebäp bolýar.",
      carouselDescription6:
        "Uglewodorod esasly gidrawliki döwmek usulymyz, ekologiýa taýdan arassa uglewodorodlary işleýän suwuklyk hökmünde ulanýar, çeşmeleriň çykarylyşyny köpeltmek bilen daşky gurşawa täsirini azaldýar.",
      carouselDescription7:
        "“Plug & Perf” diýlip hem atlandyrylýan wilka we parf bilen mehaniki möhürlenen gidrawlik döwülişi (MSHF), suw howdanyna takyk gözegçilik we gowy optimizasiýa üçin ulanylýan usul.",
      carouselDescription8:
        "Buraw turbasynda abraziw ýa-da jemleýji perforasiýa bilen ýerine ýetirilen MSHF, gowy gatyşmak we höweslendirmek üçin täsirli we köp taraply usuly hödürleýär.",
      carouselDescription9:
        "Tejribeli buraw toparymyz, buraw taslamalarynda tejribe we netijeliligi üpjün edip, önümçilik burawlamak we gapdal burawlamak bilen meşgullanýar.",
      primaryService: "Ilkinji hyzmat",
      primaryService1: "Iledasalan turba tehnologiýalary",
      primaryService2: "Gidrawlik döwük",
      primaryService3: "Buraw we iş",
      primaryService4: "Suwuklyklary öldürmek",
      primaryService5: "OPP we RIR",
      primaryService6: "Suwuk azot öndürmek",
      primaryService7: "Guýulary ösdürmek we synag etmek",
      primaryService8: "Gowy gutarmak",
      primaryService9: "Täze tehnologiýalary ösdürmek",
      secondaryService: "Ikinji hyzmat",
      secondaryService1:
        "Portlary, ulag dyknyşyklaryny we ş.m. (DDM, bankalar, aýyryjylar, palçyk duzaklary)",
      secondaryService2:
        "Gidrawlik döwük portlaryny kommutasiýa guraly bilen açmak / ýapmak",
      secondaryService3: "Kiçijik diametrli gapdal buraw (Balyk süňkü)",
      secondaryService4:
        "Soganly turbalarda ANPD elektor enjamlary bilen aşaky deşik arassalamak",
      secondaryService5:
        "Balyk tutmak işi (Rotatorlar, Magnitler, standart däl gurallar)",
      secondaryService6: "Coapylan turbalarda perforasiýa (Abraziw, jemleýji)",
      secondaryService7:
        "Coapylan turbalarda GIS (Kabel, ýeke-täk gurallar bilen turba)",
      secondaryService8: "Aýlaw ulgamlary bilen GIS (Y-Tool)",
      secondaryService9: "Coollanan turbalarda jet nasoslarynyň ösüşi",
      secondaryService10: "Deňagramsyz KT burawlamak",
      serviceTitle1: "Iledasalan turba tehnologiýalary",
      serviceTitle2: "Gidrawlik döwük",
      serviceTitle3: "Buraw we iş",
      serviceTitle4: "Suwuklyklary öldürmek",
      serviceTitle5: "OPP we RIR",
      serviceTitle6: "Suwuk azot öndürmek",
      serviceTitle7: "Guýulary ösdürmek we synag etmek",
      serviceTitle8: "Gowy gutarmak",
      serviceTitle9: "Täze tehnologiýalary ösdürmek",
      serviceTitle10:
        "Portlary, ulag dyknyşyklaryny we ş.m. (DDM, bankalar, aýyryjylar, palçyk duzaklary)",
      serviceTitle11:
        "Gidrawlik döwük portlaryny kommutasiýa guraly bilen açmak / ýapmak",
      serviceTitle12: "Kiçijik diametrli gapdal buraw (Balyk süňkü)",
      serviceTitle13:
        "Soganly turbalarda ANPD elektor enjamlary bilen aşaky deşik arassalamak",
      serviceTitle14:
        "Balyk tutmak işi (Rotatorlar, Magnitler, standart däl gurallar)",
      serviceTitle15: "Coapylan turbalarda perforasiýa (Abraziw, jemleýji)",
      serviceTitle16:
        "Coapylan turbalarda GIS (Kabel, ýeke-täk gurallar bilen turba)",
      serviceTitle17: "Aýlaw ulgamlary bilen GIS (Y-Tool)",
      serviceTitle18: "Coollanan turbalarda jet nasoslarynyň ösüşi",
      serviceTitle19: "Deňagramsyz KT burawlamak",
      serviceDescription1:
        "Coiled Tubing Technologies, nebit we gaz pudagynda dürli guýy gatyşmak amallaryny ýerine ýetirmek üçin üznüksiz örtülen turbalary ulanmagy öz içine alýar. Bu tehnologiýa, arassalamak, azot urmak we başgalar ýaly artykmaçlyklary hödürleýär. Coapylan turba turbalary turbalary öz içine alýan rulon bilen enjamlaşdyrylandyr we birleşdirilen turba bölümleriniň zerurlygy bolmazdan guýa ýerleşdirilip bilner. Bu usul tygşytly we köptaraply bolup, ony bu ugurdaky köp sanly programma üçin amatly edýär.",
      serviceDescription2:
        "Gidrawlik döwük, döwmek diýlip hem atlandyrylýar, gaýalaryň emele gelmeginde döwükler döredip, suw howdanlaryndan uglewodorodlaryň öndürilmegini höweslendirmek üçin ulanylýan usul. Nebitiň ýa-da gazyň has erkin akmagyna mümkinçilik berýän çatryklary döretmek üçin guýyga ýokary basyşly suwuklyk sanjylýar. Bu amal guýynyň öndürijiligini ýokarlandyrmak we berk ýa-da adaty däl suw howdanlaryndan uglewodorodlary çykarmak üçin zerurdyr.",
      serviceDescription3:
        "Buraw we iş işleri täze guýulary burawlamagy we bar bolan guýulary abatlamagy ýa-da gowulandyrmagy öz içine alýar. Bu gözleg guýularyny burawlamak, bar bolan guýulary gaýtadan burawlamak we önümçiligi gowulandyrmak üçin tehniki hyzmat etmek ýaly çäreleri öz içine alýar. Tejribeli hünärmenler buraw we iş işleriniň netijeliligini we howpsuzlygyny üpjün etmek üçin ösen enjamlary we tehnologiýalary ulanýarlar.",
      serviceDescription4:
        "Suwuklyklary öldürmek, guýy gözegçilik amallarynda ulanylýan ýöriteleşdirilen suwuklyklaryň döredilmegine degişlidir. Öldüriji suwuklyklar, buraw, iş we beýleki amallar wagtynda basyşy we oňat durnuklylygy gözegçilikde saklamak üçin düzülendir. Dogry taýýarlanan öldüriji suwuklyklar guýynyň howpsuzlygyny we bitewiligini üpjün etmek üçin möhümdir.",
      serviceDescription5:
        "OPP (aşa basyşy goramak) we RIR (töwekgelçiligi kesgitlemek we azaltmak) nebit we gaz pudagynda möhüm howpsuzlyk çäreleri. OPP ulgamlary guýy işlerinde aşa basyş hadysalarynyň öňüni almak üçin döredildi, RIR bolsa uglewodorodlary burawlamak, öndürmek we daşamak bilen baglanyşykly töwekgelçilikleri ýüze çykarmagy we azaltmagy öz içine alýar. Bu howpsuzlyk çäreleri işçileri we daşky gurşawy goramak üçin möhümdir.",
      serviceDescription6:
        "Suwuk azotyň öndürilmegi nebit-gaz pudagynda möhüm prosesdir. Suwuk azot guýy höweslendirmek, turbageçirijileri arassalamak we sowadyjy enjamlar ýaly dürli programmalar üçin ulanylýar. Howanyň kriogen bölünişi bilen öndürilýär we köp pudakda möhüm rol oýnaýar.",
      serviceDescription7:
        "Guýularyň ösüşi we synagy uglewodorodlary gözlemekde we öndürmekde möhüm tapgyrdyr. Bu guýulary burawlamagy, suw howdanynyň häsiýetlerine baha bermegi we önümçilik potensialyny kesgitlemek üçin guýy synaglaryny geçirmegi öz içine alýar. Tejribeli toparlar gowy ösüşi optimizirlemek we uglewodorodlaryň netijeli çykarylmagyny üpjün etmek üçin ösen tehnologiýalary ulanýarlar.",
      serviceDescription8:
        "Guýy gutarmak, täze burawlanan guýyny önümçilik üçin taýýarlamakdyr. Bu uglewodorodlaryň ýer ýüzüne akmagyna ýol bermek üçin örtük, turbalar we gaplaýjylar ýaly zerur enjamlary gurmagy öz içine alýar. Guýyny tamamlamak guýyny önümçilige taýýarlamakda möhüm ädimdir.",
      serviceDescription9:
        "Nebit we gaz pudagynda täze tehnologiýalaryň ösüşi önümçilik usullaryny we daşky gurşawyň netijeliligini ýokarlandyrmak üçin dowam edýän gözlegleri we innowasiýalary öz içine alýar. Täzelikler netijeliligi ýokarlandyrmagy we daşky gurşawa täsirini azaltmagy maksat edinýän täze buraw usullaryny, suw howdanlaryny modellemegi we dowamly tejribeleri öz içine alýar.",
      serviceDescription10:
        "Portlary, ulag dyknyşyklaryny we degişli hyzmatlary guýmak gatyşmak prosesiniň bir bölegidir. Bu, guýydaky masştab, sement ýa-da galyndylar ýaly päsgelçilikleri aýyrmak üçin degirmen gurallaryny ulanmagy öz içine alýar. Bu amal guýynyň bitewiligini dikeltmäge we uglewodorod önümçiligini gowulandyrmaga kömek edýär.",
      serviceDescription11:
        "Gidrawlik döwük portlarynyň kommutasiýa guraly bilen açylmagy / ýapylmagy gidrawliki döwük amallarynda möhüm ädimdir. Guýy korpusynda portlaryň açylmagyna we ýapylmagyna gözegçilik etmek üçin ýöriteleşdirilen gurallar ulanylýar, bu suwuk suwuklyklary takyk sanjym etmäge we uglewodorodlaryň çykmagyna mümkinçilik berýär.",
      serviceDescription12:
        "Kiçijik diametrli gapdal buraw, köplenç balyk süňküni burawlamak diýlip atlandyrylýar, bar bolan guýulardan gapdal ýa-da ýodajyk guýularyny döretmek üçin ulanylýan usul. Bu usul goşmaça uglewodorod ätiýaçlyklaryna girmek ýa-da guýynyň önümçiligini optimallaşdyrmak üçin guýynyň gözegçilikde saklanmagyny öz içine alýar.",
      serviceDescription13:
        "ANPD elektor enjamlary bilen örtülen turbany aşaky arassalamak, guýudaky galyndylary we päsgelçilikleri aýyrmak üçin ulanylýan gowy gatyşma prosesi. ANPD (Annular Burun Pressure Differensial) elektor enjamlary guýudan bölejikleri bölüp çykarýan we daşaýan ýokary tizlikli suwuklyk akymyny döretmek üçin ulanylýar.",
      serviceDescription14:
        "Balykçylyk işi, guýyda ýitirilen buraw desgalary ýa-da gurallar ýaly enjamlary ýa-da zatlary gözlemegi öz içine alýar. Balyk tutmak prosesinde rotatorlar, magnitler we standart däl gurallar zatlary ele almak we almak, guýynyň bitewiligini we howpsuz amallaryny üpjün etmek üçin ulanylýar.",
      serviceDescription15:
        "Coapylan turbalarda deşik, guýy ýa-da suw howdany gaýalarynda deşik ýa-da perforasiýa döretmek usulydyr. Bu usul uglewodorod akymyna göni elýeterliligi üpjün edip, oňat öndürijiligi ýokarlandyrýar. Abraziw we jemleýji perforasiýa usullary hem belli bir guýynyň talaplaryna esaslanýar.",
      serviceDescription16:
        "Coiled Tubing-de geografiki maglumatlar ulgamlary (GIS) ýerleşiş maglumatlarynyň gowy gatyşma amallary bilen birleşmegini öz içine alýar. Bu tehnologiýa, guýy hyzmatlarynyň takyklygyny we netijeliligini ýokarlandyrmak üçin turba we kabel ulgamlary ýa-da özbaşdak gurallar bilen enjamlaşdyrylan örtükli turbalary ulanýar.",
      serviceDescription17:
        "Köplenç Y-Tool konfigurasiýalary bilen amala aşyrylýan aýlaw ulgamlary bilen GIS, örtülen turbalary we beýleki guýy gatyşma gurallaryny bir wagtda ýerleşdirmäge mümkinçilik berýär. Bu köpugurly guýy hyzmatlaryna we guýynyň içindäki amallara gözegçilik etmegi gowulandyrmaga mümkinçilik berýär.",
      serviceDescription18:
        "Coapylan turbalarda Jet nasoslarynyň ösüşi, gowy höweslendirmekde we önümçilikde täzelikdir. Jet nasoslary guýudaky uglewodorodlaryň akymyny ýokarlandyrmak üçin ulanylýar. Coapylan turba gurlanda, oňat öndürijiligi optimizirlemek üçin çeýe we täsirli çözgüt hödürleýärler.",
      serviceDescription19:
        "Deňagramsyz örtülen turbalar (KT) Burawlamak, buraw wagtynda suw howdanynyň basyşynyň aşagyndaky guýydaky basyşy saklaýan usuldyr. Bu emele geliş zyýanyny azaldýar we buraw netijeliligini ýokarlandyrýar. Adaty burawlamak amatly ýa-da howpsuz bolmadyk ýagdaýlarda ulanylýar.",
      //
      //
      //
      // EQUIPMENT AND CHEMISTRY PAGE WORDS ==========================================================

      chemistryTitle: "Enjamlar we Himiýa",
      chemistrySub:
        "Netijeli tehnologiki prosesler we daşky gurşawyň durnuklylygy üçin innowasion çözgütler",
      chemistryDesc1:
        "Himiki reagentler bilen üpjün edilende, esasy wezipämiz dürli çylşyrymly gaz, gaz kondensaty we nebit guýulary gurlanda zerurlyklary kanagatlandyrmakdyr. Reagentleriň giň topary, gaz we nebit guýularyny burawlamak, ösdürmek, düýpli abatlamak we abatlamak işlerinde dürli meseleleri çözmäge mümkinçilik berýär.",
      chemTitle1: "Enjamlar",
      chemTitle2: "Himiýa",
      chemistryDesc2:
        "Nebit we gaz pudagy üçin enjamlar bazara giň gerimde getirilýär. Tebigy baýlyklary çykarmagy ýönekeýleşdirmäge mümkinçilik berýär we ahyrky önümi almak üçin zerur bolan beýleki manipulýasiýalary ýerine ýetirmäge mümkinçilik berýär. Döwrebap in engineeringenerçilik çözgütleri, iş prosesleriniň howpsuzlygyny üpjün edýän we daşky gurşawa ýaramaz täsirini azaldýan enjamlar bilen üpjün etmäge mümkinçilik berýär.",
      chemistryDesc3:
        "Himiki reagentler bilen üpjün edilende, esasy wezipämiz dürli çylşyrymlylykdaky gaz, gaz kondensaty we nebit guýularyny gurmak zerurlyklaryny kanagatlandyrmakdyr. Reagentleriň giň topary, gaz we nebit guýularyny burawlamak, ösdürmek, düýpli abatlamak we abatlamak işlerinde dürli meseleleri çözmäge mümkinçilik berýär.",
      chemistryDesc:
        "Häzirki zaman nebit-gaz pudagy, önümçiligiň her bir döwründe - buraw guýularyndan we önümçilikden başlap, çig maly gaýtadan işlemek we soňraky daşamak ýaly ulanylýan himiki serişdeler we enjamlar bolmasa netijeli işläp bilmez. Bu nukdaýnazardan, kompaniýamyz hyzmatdaşlarymyzyň işini ýönekeýleşdirmek üçin zerur zatlary bermäge çalyşýar we ýokary hilli önümler hödürleýär.",

      chemistryAccordionTitle1: "suw esasly buraw suwuklyklary üçin reagentler",
      chemistryAccordionTitle2: "OBM üçin reagentler we materiallar",
      chemistryAccordionTitle3: "buraw suwuk ulgamlary we konsentratlar",
      chemistryAccordionTitle4:
        "guýulary sementlemek üçin reagentler we materiallar",
      chemistryAccordionTitle5: "suw geçirmeýän, tampon sürtýän birleşmeler",
      chemistryAccordionTitle6: "reagentler, gowy işlemek üçin materiallar",
      chemistryAccordionTitle7: "ýörite himiki maddalar",
      chemistryAccordionTitle8:
        "buraw prosesi suwuklyklarynyň täzelenmegi üçin",
      chemistryAccordionTitle9: "Katalyst we Ýörite önümler",
      chemistryAccordionTitle10: "Haryt himiýasy",
      chemistryAccordionItem1_1:
        "stabilizatorlar, süzgüç we reologiki aýratynlyklary sazlaýjylar",
      chemistryAccordionItem1_2:
        "ýaglamak, tutga garşy we möhürlere garşy goşundylar",
      chemistryAccordionItem1_3: "palçyk inhibitorlary",
      chemistryAccordionItem1_4: "töhmetçiler",
      chemistryAccordionItem1_5: "agramlar",
      chemistryAccordionItem1_6:
        "wodorod sulfidini we kislotaly suwuklyklary zyýansyzlandyryjylar",
      chemistryAccordionItem1_7:
        "agyr suwuklyklary taýýarlamak üçin kompozisiýalar",
      chemistryAccordionItem1_8: "poslama we duz ingibitorlaryna",
      chemistryAccordionItem2_1:
        "buraw emulsiýalary poliemulsany taýýarlamak üçin kompozisiýa",
      chemistryAccordionItem2_2: "emulsifikator polioilçek stub",
      chemistryAccordionItem2_3: "organobentonit polioilçek gidrofobik",
      chemistryAccordionItem2_4: "süzgüç reduktory polioil barlag süzgüji",
      chemistryAccordionItem2_5: "ýapyşyklygy sazlaýjy polioilçek vis",
      chemistryAccordionItem2_6: "polioilbarm",
      chemistryAccordionItem3_1: "polikonol",
      chemistryAccordionItem3_2: "polibur-turbo ulgamy",
      chemistryAccordionItem3_3: "poliforma",
      chemistryAccordionItem3_4: "kolloid-polimer gury garyndy KPSS",
      chemistryAccordionItem4_1: "sementlemek üçin reagentler",
      chemistryAccordionItem4_2: "plastifikatorlar",
      chemistryAccordionItem4_3:
        "ýeňil sementler üçin goşundylary durnuklaşdyrmak",
      chemistryAccordionItem4_4: "suwuklygyň ýitgileri",
      chemistryAccordionItem4_5: "güýçlendiriji goşundy",
      chemistryAccordionItem4_6: "giňeltmek goşundysy",
      chemistryAccordionItem4_7: "giňeltmek goşundysy",
      chemistryAccordionItem4_8:
        "bufer suwuklyklaryny taýýarlamak üçin kompozisiýalar",
      chemistryAccordionItem4_9: "töhmetçiler",
      chemistryAccordionItem5_1: "polimer kompozisiýalary",
      chemistryAccordionItem5_2: "birleşmeleri birikdirmek",
      chemistryAccordionItem6_1: "poliplaw reagenti",
      chemistryAccordionItem6_2: "suwuk ýuwujy",
      chemistryAccordionItem6_3: "silikon polimer düzümi poliskrep",
      chemistryAccordionItem6_4: "polir reagenti",
      chemistryAccordionItem6_5: "gury garyndy poligp",
      chemistryAccordionItem6_6: "material polifilterol dakmak",
      chemistryAccordionItem6_7: "polierogeli gowy söndürmek üçin kompozisiýa",
      chemistryAccordionItem6_8:
        "siňdiriş polibloker-kombi ýok etmek üçin kompozisiýa",
      chemistryAccordionItem7_1: "suwdan goraýan polifob",
      chemistryAccordionItem7_2: "buraw suwuklyklary polipron üçin goşundy",
      chemistryAccordionItem7_3: "polidemulsol",
      chemistryAccordionItem7_4: "polidehidrat",
      chemistryAccordionItem7_5: "çişirilen subrikler üçin hökmany goşundy",
      chemistryAccordionItem7_6: "betanol metal galyplary üçin çalgy",
      chemistryAccordionItem7_7: "polioilflex",
      chemistryAccordionItem7_8: "polibakterisid",
      chemistryAccordionItem7_9: "polihidrosil reagenti (suwdan goraýan)",
      chemistryAccordionItem8_1: "poliflok buraw reagenti",
      chemistryAccordionItem8_2: "polireositler",
      chemistryAccordionItem8_3: "reagent polisiýa ekosorb",
      chemistryAccordionItem9_1: "Işledilen alýumin monjugy",
      chemistryAccordionItem9_2: "Aminler (MEA / DEA / TEA / MDEA)",
      chemistryAccordionItem9_3: "Dimetil disulfid (DMDS)",
      chemistryAccordionItem9_4: "Etil merkaptan",
      chemistryAccordionItem9_5: "Glikolamin (DGA)",
      chemistryAccordionItem9_6: "Glikollar (MEG, DEG, TEG)",
      chemistryAccordionItem9_7: "üwürmek we ýykmak üçin materiallar",
      chemistryAccordionItem9_8: "Howpsuzlyk Goragçylary",
      chemistryAccordionItem9_9: "Keramiki topy salyň",
      chemistryAccordionItem9_10: "Minaranyň gaplaýyş materiallary",
      chemistryAccordionItem9_11: "Wanadiý pentoksidi",
      chemistryAccordionItem9_12: "Nar döwüldi",
      chemistryAccordionItem10_1: "Kislotalar",
      chemistryAccordionItem10_2: "Işjeň uglerod",
      chemistryAccordionItem10_3: "Alýumin sulfat",
      chemistryAccordionItem10_4: "Gazanyň bikarbonaty",
      chemistryAccordionItem10_5: "Kaustiki soda",
      chemistryAccordionItem10_6: "Natriý gipohlorit",
      chemistryAccordionItem10_7: "Polialýumin hlorid (PAC)",
      chemistryAccordionItem10_8: "Kaliý hloridi",
      chemistryAccordionItem10_9: "Kalsiý hlorid",
      chemistryAccordionItem10_10: "Kalsiý karbonat",
      chemistryAccordionItem10_11: "we ş.m.",

      equipmentAccordionTitle1: "Motorly örtük reamer köwşi",
      equipmentAccordionTitle2: "Turbo Ream Aýakgap (SDT-TRS)",
      equipmentAccordionTitle3: "Gowy süzgüçler",
      equipmentAccordionTitle4: "Gurallar",
      equipmentAccordionTitle5: "Burowoý Yas",
      equipmentAccordionTitle6: "Zerur guraly",
      equipmentAccordionTitle7: "Aýlanyş bölümi",
      equipmentAccordionTitle8: "WIBRASI TOA GURAMY",

      equipmentAccordionItem1_1: "Buraw däl aýakgap",

      equipmentAccordionItem2_1: "SDT-TRS-450 ",
      equipmentAccordionItem2_2: "SDT-TRS-500 ",
      equipmentAccordionItem2_3: "SDT-TRS-550 ",
      equipmentAccordionItem2_4: "SDT-TRS-575 ",
      equipmentAccordionItem2_5: "SDT-TRS-662  ",

      equipmentAccordionItem3_1: "Süzgüçli penjek bilen süzgüçler",
      equipmentAccordionItem3_2: "Gowy ekranlar",
      equipmentAccordionItem3_3: "Awtonom akym gözegçiligi",

      equipmentAccordionItem5_1: "Gidrawlik mehaniki banka",
      equipmentAccordionItem5_2: "Gidrawlik bankasy",
      equipmentAccordionItem5_3: "Mehaniki berkitme bilen gidrawlik banka",

      // INNOVATION TECHNOLOGIES PAGE WORDS =================================================================

      innSub:
        "Amallary optimizirlemek we ekologiýa taýdan durnukly geljegi döretmek üçin ösen tehnologiýalary ösdürýäris we durmuşa geçirýäris.",
      innTitle2: "Innowasiýa tehnologiýalary",
      innTitle: "Innowasiýa tehnologiýalary: Liderlik dowam edýär",
      innTitle3: "Tanklary arassalamak robot tehnologiýasy",
      innTitle4: "Arassalaýyş tehnologiýasy",
      innTitle5: "Robot gözegçileri",
      innTitle6: "Suwasty ulaglar uzakdan işleýär",
      innDesc1:
        "Häzirki zaman dünýäsinde innowasiýa, senagatyň bolmagy üçin tebigy we aýrylmaz bir prosesdir. Bazar şertleri, döwletiň we ykdysadyýetiň mundan beýläkki ösüşiniň innowasiýa ösüş ýoly bolmazdan edip bilmejekdigini görkezýär. Şunuň bilen baglylykda, kompaniýamyz kärhananyň bäsdeşlige ukyplylygyny ýokarlandyrmak üçin dünýä öndürijilerinden robot tehniki ösüşleri hödürleýär. Senagatyň ösüşi tehnologiki derejesini ýokarlandyrmak we ykdysady netijeliligi ýokarlandyrmak bilen utgaşýar.",
      innDesc2:
        "Nebit çüýşelerinden nebit galyndylaryny aýyrmak üçin robot gurnama. Adamlaryň girmezligi esasynda işlemek, adamlary we daşky gurşawy goramak RVS-iň diwarlaryny, aşaky we üçegini aşaky çökündilerden ýuwýar, şeýle hem çykarylan palçygyň mundan beýläk-de işlenmegini üpjün edýär. Partlamada partlamadan goramak şahadatnamasyna eýe bolmak - ATEX. o 24/7 iş alyp barmak; o palçyk nasosynyň ýokary tizligi we gaýtadan işleýän bölümiň öndürijiligini ýokarlandyrmak; o enjamlary gurnamagyň / sökmegiň gysga möhletleri; o ýer taýýarlamak ýa-da kran enjamlaryny ulanmak zerurlygy ýok; Öndürilen nebit galyndylarynyň mukdarynyň köp azalmagy ony poligona daşamak we mundan beýläk zyňmak üçin çykdajylaryň azalmagyna getirýär; Zähmeti goramak, senagat we daşky gurşaw howpsuzlygy babatynda 100% howpsuzlyk; –25-den +70 ° C-e çenli temperaturada ýylyň dowamynda iş alyp barmak;:",
      innDesc3:
        "Içerki robot ulgamy turbageçirijileriň çylşyrymly şahalanan bölümlerine gözegçilik etmek we arassalamak üçin niýetlenendir. Höweslendiriji platformalar diagnostika we arassalamak üçin bar bolan çözgütlerden has ýokarydyr. Ulgam, heläkçilikleriň, adam pidalarynyň we daşky gurşawa zeper ýetmeginiň öňüni almak üçin turbageçirijileriň häzirki tehniki ýagdaýyna baha bermek üçin döredildi.",
      innDesc4:
        "Nebit we gaz pudagynda dört aýakly akylly robotyň tanyşdyrylyşy, adaty barlag amallaryny has ygtybarly we has netijeli edip, nebit we gaz pudagynda sanly öwrülişigi ýeňilleşdirýän adaty lazer metany syzdyryjy enjamlar bilen birleşýär. Bu aralykda, robotyň güýçli maglumat ýygnamak mümkinçilikleri has çylşyrymly iş etmek üçin has köp işçini boşadyp biler. Dört aýakly robot awtomatiki hereket edip, zarýad alyp, maglumatlary ýygnap, gözleg hasabatyny döredip, adaty bolmadyk syzyşlaryň çeşmesini tapyp we adaty bolmadyk hadysalary wagtynda tapmaga kömek edip biler.",
      innDesc5:
        "Uzakdan dolandyrylýan adamsyz suwasty ulaglar (ROV) topragy kartalaşdyrmak, gözleg işleri, halas ediş işleri, aşakydan uly zatlary ýitileşdirmek we aýyrmak, nebit we gaz toplumy desgalaryny goldamak üçin (buraw goldawy, gaz turbageçirijileriniň barlaglary,) desgalary döwmek, klapan amallary), ylmy goşundylar, suwa çümmek goldawy, balyk hojalygyna hyzmat etmek, arheologiki gözlegler, şäher aragatnaşygyny barlamak, partlaýjy enjamlaryň barlygy üçin gämileri barlamak [1] ýa-da kontrabanda önümleri daşyna daňylýar we ş.m. çözülmeli meseleleriň gerimi yzygiderli giňelýär.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

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

      // INNOVATION TECHNOLOGIES PAGE WORDS =================================================================

      innTitle: "Innovative Technologies: Leadership in Progress",
      innTitle2: "Innovative technologies",
      innSub:
        "We develop and implement cutting-edge technologies to optimize processes and create an environmentally sustainable future",

      innTitle3: "Tank cleaning technology",
      innTitle4: "In-line cleaning technology",
      innTitle5: "Robot inspectors",
      innTitle6: "Remotely operated underwater vehicles",
      innDesc1:
        "In the modern world, innovation is a natural and indispensable process for the existence of industry. Market conditions indicate that the further development of the state and the economy cannot do without an innovative development path. In this regard, our company offers robotic technical developments from global manufacturers to enhance the competitiveness of the enterprise. The development of the industry is accompanied by improving its technological level and increasing economic efficiency.",
      innDesc2:
        "Mobile autonomous robotic complex for cleaning tanks, oil and gas and petrochemical equipment",
      innDesc3:
        "Robotic in-line cleaning systems for non-destructive testing and cleaning of complex branched pipeline sections. The Tubot robotic system is designed to assess the current technical condition of pipelines in order to prevent accidents, loss of life and damage to the environment.",
      innDesc4:
        "Founded in 2016, Unitree Robotics specializes in the research and development, production and sales of high-performance industrial-grade four-legged robots. Equipped with GPS, robotic arm, lidar and other tools and testing equipment, they can perform a wide range of jobs such as patrol, reconnaissance, material transportation, etc.",
      innDesc5:
        "Founded in 2016, Unitree Robotics specializes in the research and development, production and sales of high-performance, industrial-grade four-legged robots. Equipped with GPS, robotic arm, lidar and other tools and testing equipment, these robots can perform a variety of tasks including patrol, reconnaissance, material transport and more.",
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

      // INNOVATION TECHNOLOGIES PAGE WORDS =================================================================

      innSub:
        "Разрабатываем и внедряем передовые технологии для оптимизации процессов и создания экологически устойчивого будущего.",
      innTitle2: "Инновационные Технологии",
      innTitle: "Инновационные Технологии: Лидерство в Прогрессе",
      innTitle3: "Технология очистки резервуаров",
      innTitle4: "Технология внутритрубной очистки",
      innTitle5: "Роботы-инспекторы",
      innTitle6: "Дистанционно управляемые подводные аппараты",
      innDesc1:
        "В современном мире инновации являются естественным и незаменимым процессом для существования промышленности. Условия, выстраивающиеся на рынке, говорят о том, что дальнейшее развитие государства и экономики не может обойтись без инновационного пути развития. В связи с этим наша компания предлагает роботизированные технические разработки мировых производителей для повышения конкурентоспособности предприятия. Развитие промышленности сопровождается улучшением ее технологического уровня, повышением экономической эффективности.",
      innDesc2:
        "Мобильный автономный робототехнический комплекс для очистки резервуаров, нефтегазового и нефтехимического оборудования",
      innDesc3:
        "Робототехнические системы внутритрубной очистки для неразрушающего тестирования и очистки сложных разветвленных участков трубопроводов. Робототехническая система Tubot предназначена для оценки текущего технического состояния трубопроводов с целью предотвращения аварий, гибели людей и повреждения окружающей среды.",
      innDesc4:
        "Основанная в 2016 году, Unitree Robotics специализируется на исследованиях и разработках, производстве и продажах высокопроизводительных четырехногих роботов промышленного класса. Оборудованные GPS, роботическим манипулятором, лидаром и другими инструментами и испытательным оборудованием, они могут выполнять широкий спектр работ, таких как патрульный обход, разведка, транспортировка материалов и др.",
      innDesc5:
        "Основанная в 2016 году, компания Unitree Robotics специализируется на исследованиях и разработках, производстве и продажах четырехногих роботов промышленного класса высокой производительности. Оборудованные GPS, роботическим манипулятором, лидаром и другими инструментами и испытательным оборудованием, эти роботы могут выполнять разнообразные задачи, включая патрульный обход, разведку, транспортировку материалов и многое другое.",
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
      more: "Jikme-jik",

      // OIL AND GAS SERVICES PAGE WORDS =================================================
      oilTitle: "Nebit we gaz hyzmatlary",
      oilSubTitle:
        "Energetika hyzmatlarynda we innowasiýalarda ýokary derejäni bermek",
      hideDesc: "Düşündirişi gizläň",
      showDesc: "Düşündirişi görkez",
      oilDesc1:
        "Nebit we gaz pudagyna hödürleýän hyzmatlarymyz, emele gelişiň aýratyn meýdan parametrlerini we meýdan şertlerini göz öňünde tutup, topraklaryň fiziki, himiki we süzgüç aýratynlyklaryny öwrenmäge mümkinçilik berýän giň mümkinçilikleri hödürlemäge mümkinçilik berýär.",

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

      // INNOVATION TECHNOLOGIES PAGE WORDS =================================================================

      innSub:
        "Amallary optimizirlemek we ekologiýa taýdan durnukly geljegi döretmek üçin ösen tehnologiýalary ösdürýäris we durmuşa geçirýäris.",
      innTitle2: "Innowasiýa tehnologiýalary",
      innTitle: "Innowasiýa tehnologiýalary: Liderlik dowam edýär",
      innTitle3: "Tanklary arassalamak tehnologiýasy",
      innTitle4: "Arassalaýyş tehnologiýasy",
      innTitle5: "Robot gözegçileri",
      innTitle6: "Suwasty ulaglar uzakdan işleýär",
      innDesc1:
        "Häzirki zaman dünýäsinde innowasiýa, senagatyň bolmagy üçin tebigy we aýrylmaz bir prosesdir. Bazar şertleri, döwletiň we ykdysadyýetiň mundan beýläkki ösüşiniň innowasiýa ösüş ýoly bolmazdan edip bilmejekdigini görkezýär. Şunuň bilen baglylykda, kompaniýamyz kärhananyň bäsdeşlige ukyplylygyny ýokarlandyrmak üçin dünýä öndürijilerinden robot tehniki ösüşleri hödürleýär. Senagatyň ösüşi tehnologiki derejesini ýokarlandyrmak we ykdysady netijeliligi ýokarlandyrmak bilen utgaşýar.",
      innDesc2:
        "Baklary, nebit-gaz we nebithimiýa enjamlaryny arassalamak üçin ykjam awtonom robot toplumy",
      innDesc3:
        "Zyýan bermeýän synag we çylşyrymly şahaly turbageçiriji bölümlerini arassalamak üçin robot arassalaýyş ulgamlary. Tubot robot ulgamy, heläkçilikleriň, ömrüň ýitmeginiň we daşky gurşawa zeper ýetmeginiň öňüni almak üçin turbageçirijileriň häzirki tehniki ýagdaýyna baha bermek üçin döredildi.",
      innDesc4:
        "2016-njy ýylda döredilen “Unitree Robotics” ýokary öndürijilikli senagat derejeli dört aýakly robotlary gözlemek we ösdürmek, öndürmek we satmak bilen meşgullanýar. GPS, robot gol, lidar we beýleki gurallar we synag enjamlary bilen enjamlaşdyrylan patrul, gözleg, maddy transport we ş.m. ýaly köp sanly işi ýerine ýetirip biler.",
      innDesc5:
        "2016-njy ýylda döredilen “Unitree Robotics” ýokary öndürijilikli, senagat derejeli dört aýakly robotlary gözlemek we ösdürmek, öndürmek we satmak bilen meşgullanýar. GPS, robot gol, lidar we beýleki gurallar we synag enjamlary bilen enjamlaşdyrylan bu robotlar patrul, gözleg, maddy ulag we başgalar ýaly dürli işleri ýerine ýetirip biler.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

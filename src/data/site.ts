import { Sparkles, Mic, Speech, Brain, Activity } from 'lucide-react';
export const SERVICES = [
  {
    id: 'ses-bozukluklari',
    title: 'Ses Bozuklukları',
    shortDesc: 'Ses kısıklığı, ses yorgunluğu, nodül ve polip sonrası doğru ve sağlıklı ses kullanımına yönelik profesyonel ses terapisi.',
    icon: Mic,
    color: 'bg-teal-50 text-teal-700 border-teal-200',
    accent: '#48B2B0',
    audience: 'Çocuk, Ergen ve Yetişkinler (Özellikle Profesyonel Ses Kullanıcıları)',
    details: [
      'Ses hijyeni eğitimi ve doğru nefes kontrolü',
      'Ses teli nodülleri ve poliplerinde davranışsal ses terapisi',
      'Puberfoni (mutasyonel falsetto) ve ses inceliği terapisi',
      'LSVT (Lee Silverman Voice Treatment) sertifikalı yaklaşım'
    ]
  },
  {
    id: 'artikulasyon-bozuklugu',
    title: 'Artikülasyon ve Fonolojik Bozukluklar',
    shortDesc: 'Konuşma seslerinin yanlış üretimi, harf yutma veya seslerin yer değiştirmesi gibi konuşma anlaşılırlığını etkileyen durumların terapisi.',
    icon: Speech,
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    accent: '#4E6599',
    audience: 'Okul Öncesi, Okul Çağı Çocuklar ve Yetişkinler',
    details: [
      'R, S, Ş, K, L, Ç gibi konuşma seslerinin doğru üretimi',
      'PROMPT tekniği ile dokunsal-kinestetik uyaran desteği',
      'Konuşma anlaşılırlığının artırılması',
      'Okuma-yazma öncesi fonolojik farkındalık çalışmaları'
    ]
  },
  {
    id: 'gelisimsel-dil',
    title: 'Gelişimsel Dil Bozuklukları & Geç Konuşma',
    shortDesc: 'Yaşıtlarına göre konuşmaya geç başlayan, kelime dağarcığı sınırlı veya cümle kurmakta zorlanan çocuklar için erken müdahale programları.',
    icon: Sparkles,
    color: 'bg-amber-50 text-amber-700 border-amber-200',
    accent: '#D97706',
    audience: '0-6 Yaş Erken Çocukluk ve Okul Çağı',
    details: [
      'DIR Floortime (101 & 201) temelli oyun ve etkileşim terapisi',
      'ETEÇOM 2 (Etkileşim Temelli Erken Çocuklukta Müdahale Programı)',
      'Alıcı ve ifade edici dil becerilerinin desteklenmesi',
      'Aile merkezli danışmanlık ve ev içi iletişim stratejileri'
    ]
  },
  {
    id: 'akicilik-bozukluklari',
    title: 'Akıcılık Bozuklukları (Kekemelik & Hızlı Bozuk Konuşma)',
    shortDesc: 'Konuşma sırasında ses/hece tekrarları, uzatmalar, bloklar veya aşırı hızlı konuşmaya bağlı akıcılık sorunlarının bilimsel terapisi.',
    icon: Activity,
    color: 'bg-sky-50 text-sky-700 border-sky-200',
    accent: '#0284C7',
    audience: 'Okul Öncesi Çocuklar, Ergenler ve Yetişkinler',
    details: [
      'Okul öncesi dönemde aile katılımlı dolaylı/dolaysız terapiler',
      'Ergen ve yetişkin kekemeliğinde Bilişsel Davranışçı Yaklaşım ve Exposure',
      'Konuşma kaygısını azaltma ve özgüvenli iletişim kurma',
      'Takifemi (hızlı-bozuk konuşma) hız ve ritim kontrolü'
    ]
  },
  {
    id: 'edinilmis-dil',
    title: 'Edinilmiş Dil Bozuklukları (Afazi & Dizartri)',
    shortDesc: 'İnme (felç), travmatik beyin hasarı veya nörolojik hastalıklar sonrasında kaybedilen konuşma, anlama ve yutma becerilerinin rehabilitasyonu.',
    icon: Brain,
    color: 'bg-rose-50 text-rose-700 border-rose-200',
    accent: '#E11D48',
    audience: 'Yetişkin ve Geriatrik Bireyler',
    details: [
      'Afazi sonrası kelime bulma, anlama ve ifade becerilerinin geri kazanımı',
      'Dizartri ve apraksi kaynaklı motor konuşma terapisi',
      'Alternatif ve Destekleyici İletişim Sistemleri (ADİS)',
      'Nörolojik temelli yutma güçlükleri değerlendirmesi'
    ]
  }
];

export const SEMINARS = [
  { year: '2022', title: 'Floortime 201', instructor: 'Uzm. Dkt. Kemal Colay - Psk. Tuğçe Telcioğlu' },
  { year: '2021', title: 'Floortime 101', instructor: 'Uzm. Dkt. Egemen Nakışçı' },
  { year: '2020', title: 'PROMPT - Introduction to PROMPT', instructor: 'Uzm. Dkt. Nida Şanlı Colay' },
  { year: '2020', title: 'ETEÇOM 2 (Etkileşim Temelli Erken Çocuklukta Müdahale Programı)', instructor: 'Prof. Dr. İbrahim Halil Diken' },
  { year: '2020', title: 'LSVT (Lee Silverman Voice Treatment)', instructor: 'Uluslararası Sertifikasyon Programı' },
  { year: '2020', title: 'Ergen ve Yetişkin Kekemeliğinde Bilişsel Davranışçı Yaklaşım ve Exposure', instructor: 'Uzm. Dkt. Veysel Kızılboğa - Uzm. Psk. Dan. Mahmut Kızılboğa' },
  { year: '2019', title: 'Fleksibl Endoskopik Yutma Değerlendirmesi', instructor: 'Medipol Üniversitesi' },
  { year: '2019', title: '10. Ulusal Dil ve Konuşma Bozuklukları Kongresi', instructor: 'Medipol Üniversitesi' },
  { year: '2017', title: '9. Ulusal Dil ve Konuşma Bozuklukları Kongresi & Dünya Ses Günü Sempozyumu', instructor: 'Medipol Üniversitesi' },
  { year: '2015', title: 'Dünya Ses Günü Sempozyumu', instructor: 'Üsküdar Üniversitesi' }
];

export const ARTICLES = [
  {
    id: 1,
    title: 'Ses Terapisi Nedir? Ses Bozukluklarında Doğru Yaklaşım',
    category: 'Ses Bozuklukları',
    date: '18 Ocak 2025',
    readTime: '4 dk okuma',
    excerpt: 'Ses terapisi; ses kısıklığı, ses yorgunluğu ve ses teli nodülleri gibi sorunların önlenmesi, tedavisi ve sesin sağlıklı kullanımı ile ilgilenen bilimsel bir sağlık hizmetidir.',
    content: 'Sesimiz kimliğimizin ve iletişimimizin en temel parçasıdır. Özellikle öğretmenler, çağrı merkezi çalışanları, sanatçılar ve yoğun konuşma gerektiren meslek gruplarında ses tellerinin hatalı kullanımı zamanla nodül veya polip oluşumuna yol açabilir. Ses terapisi sürecinde kişiye özel ses hijyeni programı, nefes-ses koordinasyonu ve rezonans çalışmaları ile ses tellerine binen yük azaltılır.'
  },
  {
    id: 2,
    title: 'Dil ve Konuşma Terapisinde Erken Müdahale ve Bütüncül Yaklaşım',
    category: 'Gelişimsel Dil',
    date: '19 Ocak 2025',
    readTime: '5 dk okuma',
    excerpt: 'Dil ve konuşma bozuklukları, bireylerin iletişim becerilerini etkileyen, sosyal yaşamdan akademik başarıya kadar çeşitli alanlarda zorluklara neden olabilen durumlardır.',
    content: 'Erken çocukluk döneminde beyin plastisitesi en yüksek seviyededir. Çocuğun 2 yaşına gelmesine rağmen anlamlı kelimelerinin olmaması veya 3 yaşında basit cümleler kuramaması durumunda "bekleyelim, zamanla açılır" yaklaşımı yerine bir Dil ve Konuşma Terapisti tarafından yapılacak bilimsel değerlendirme büyük önem taşır.'
  },
  {
    id: 3,
    title: 'Kekemelik Terapisinde Güncel Bilimsel Yöntemler',
    category: 'Akıcılık Bozuklukları',
    date: '11 Ocak 2025',
    readTime: '4 dk okuma',
    excerpt: 'Kekemelik, bireyin konuşma akıcılığını etkileyen ve genellikle konuşma sırasında kelimelerin tekrarı, uzatılması ya da duraklamalar şeklinde ortaya çıkan bir konuşma bozukluğudur.',
    content: 'Kekemelik bir hastalık veya psikolojik bir zayıflık değil, nörogelişimsel temelli bir konuşma akıcılığı farklılığıdır. Çocukluk döneminde oyun temelli ve aile katılımlı yaklaşımlarla, ergen ve yetişkinlikte ise Bilişsel Davranışçı Terapi (BDT) ve konuşma yeniden yapılandırma teknikleriyle bireyin iletişim özgürlüğü desteklenir.'
  },
  {
    id: 4,
    title: 'PROMPT Tekniği Nedir ve Kimlere Uygulanır?',
    category: 'Terapi Yöntemleri',
    date: '04 Ocak 2025',
    readTime: '3 dk okuma',
    excerpt: 'Konuşma seslerini üretmekte zorlanan çocuklar için geliştirilen dokunsal-kinestetik uyaran temelli PROMPT tekniğinin çalışma prensipleri.',
    content: 'PROMPT (Prompts for Restructuring Oral Muscular Phonetic Targets), terapistin elleriyle çocuğun yüzündeki çene, dudak ve dil kaslarına nazik dokunsal ipuçları vererek doğru ses üretimini hissettirdiği özel bir terapi yaklaşımıdır. Özellikle konuşma apraksisi ve artikülasyon bozukluklarında oldukça etkilidir.'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    author: 'E. K. (Veli)',
    tag: 'Geç Konuşma Terapisi',
    rating: 5,
    text: 'Oğlum 3 yaşında olmasına rağmen konuşmuyordu. Bu da beni çok üzüyordu. Araştırmalarımda Asya Hanım’a ulaştım, kendisi işinde son derece başarılı; oğluma çok büyük faydası oldu. Çevremdeki insanlar bu değişimi hemen fark etti. Asya Hanım hem güler yüzlü hem çok profesyonel. Ulaşımı da çok merkezi, hiç zorluk çekmedik. Herkese tavsiye ederim.'
  },
  {
    id: 2,
    author: 'M. T. (Danışan)',
    tag: 'Yetişkin Kekemelik Terapisi',
    rating: 5,
    text: 'Uzun yıllardır kekemeliğim vardı ve sosyal hayatımı olumsuz yönde etkiliyordu. Asya Hanım’la geçirdiğimiz terapilerden sonra kekemeliğimde belirgin azalma oldu ve konuşma kaygımı yendim. Kendisine çok teşekkür ediyorum ve gönülden tavsiye ediyorum.'
  },
  {
    id: 3,
    author: 'S. A. (Veli)',
    tag: 'Gelişimsel Dil Terapisi',
    rating: 5,
    text: 'Asya Hanım’a sosyal medya üzerinden ulaştık. Kızım 3 yaşına gelmiş olmasına rağmen çok az kelimesi vardı. Çalışmaya başladıktan sonra kelimeleri arttı, artık yaşıtları gibi cümleler kurarak bizimle rahat iletişim kurmaya başladı. Konuşamadığı için sinirli olabiliyordu, şimdi çok daha uyumlu. Çocuklarla iletişimi çok güçlü, kızımla hemen bağ kurdular.'
  }
];

export const FAQS = [
  {
    q: 'Çocuğumun dil ve konuşma terapisine ihtiyacı olduğunu nasıl anlarım?',
    a: '18 aylıkken anlamlı kelimelerinin olmaması, 2 yaşında iki kelimeli basit ifadeler kuramaması, 3 yaşında söylediklerinin yabancılar tarafından anlaşılmaması, konuşurken sık sık ses/hece takılmaları yaşaması veya sesinin sürekli kısık çıkması durumunda bir Dil ve Konuşma Terapisti değerlendirmesi önerilir.'
  },
  {
    q: 'İlk değerlendirme seansında neler yapılıyor?',
    a: 'İlk görüşmede aileden veya danışandan detaylı gelişim öyküsü alınır. Ardından yaşa ve ihtiyaca uygun standart dil, artikülasyon, ses veya akıcılık değerlendirme testleri uygulanır. Sonuçlar detaylıca paylaşılarak kişiye özel terapi planı oluşturulur.'
  },
  {
    q: 'Terapi süreci ne kadar sürer?',
    a: 'Terapi süresi; bozukluğun türüne, şiddetine, bireyin yaşına ve ailenin/danışanın ev içi uygulamalara katılım düzeyine göre farklılık gösterir. İlk değerlendirme sonrasında tahmini süreç hakkında şeffaf bir bilgilendirme yapılmaktadır.'
  },
  {
    q: 'Merkezinize ulaşım nasıl sağlanır?',
    a: 'Merkezimiz İstanbul Maltepe’de (Altayçeşme Mah. Denizer Sok. No:1/8 Ada Ofis İş Merkezi) yer almaktadır. Maltepe Metro istasyonuna, Marmaray’a ve Bağdat Caddesi toplu taşıma hatlarına yürüme mesafesindedir.'
  }
];


export type Article = (typeof ARTICLES)[number];

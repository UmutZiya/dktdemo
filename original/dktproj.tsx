import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Award,
  GraduationCap,
  BookOpen,
  MessageCircle,
  ChevronRight,
  ChevronDown,
  Star,
  Calendar,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  HeartHandshake,
  Mic,
  Speech,
  Brain,
  Ear,
  Activity,
  Send,
  ExternalLink,
  Instagram,
  ShieldCheck,
  Quote
} from 'lucide-react';

// --- SCROLL REVEAL BİLEŞENİ (Hafif, zarif ve performanslı görünüm animasyonu) ---
const Reveal = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100';
    switch (direction) {
      case 'left':
        return '-translate-x-8 opacity-0';
      case 'right':
        return 'translate-x-8 opacity-0';
      case 'up':
      default:
        return 'translate-y-8 opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
};

// --- ÖZEL SES DALGASI LOGOSU (Mevcut markanın modernleştirilmiş vektör hali) ---
const BrandLogo = ({ light = false }) => (
  <div className="flex items-center gap-3 select-none">
    <div className="flex items-center gap-[3px] h-9 px-2.5 rounded-xl bg-gradient-to-tr from-[#5B72A6]/10 to-[#64C4C3]/20 border border-[#64C4C3]/30">
      {[12, 22, 16, 28, 18, 24, 14].map((height, idx) => (
        <span
          key={idx}
          style={{ height: `${height}px` }}
          className={`w-[3px] rounded-full transition-all duration-300 ${
            idx % 2 === 0
              ? light
                ? 'bg-[#8CE0DF]'
                : 'bg-[#48B2B0]'
              : light
              ? 'bg-white'
              : 'bg-[#4E6599]'
          }`}
        />
      ))}
    </div>
    <div className="flex flex-col">
      <span
        className={`text-lg sm:text-xl font-bold tracking-tight leading-none ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        Asya Ayyıldız
      </span>
      <span
        className={`text-[11px] font-medium tracking-wider uppercase mt-1 ${
          light ? 'text-teal-200' : 'text-[#4E6599]'
        }`}
      >
        Dil ve Konuşma Merkezi
      </span>
    </div>
  </div>
);

// --- VERİ SETLERİ (Mevcut sitedeki gerçek veriler) ---
const SERVICES = [
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

const SEMINARS = [
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

const ARTICLES = [
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

const TESTIMONIALS = [
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

const FAQS = [
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

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[0].id);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Form Durumu
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Ön Değerlendirme / Genel Bilgi',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page, serviceId = null) => {
    setActivePage(page);
    if (serviceId) setSelectedServiceId(serviceId);
    setSelectedArticle(null);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Form verilerinden düzenli WhatsApp mesaj şablonu oluştur
    const lines = [
      'Merhaba Asya Hanım, web siteniz üzerinden randevu / bilgi talebi oluşturmak istiyorum.',
      '',
      `👤 *Ad Soyad:* ${formData.name}`,
      `📞 *Telefon:* ${formData.phone}`,
      formData.email ? `✉️ *E-Posta:* ${formData.email}` : null,
      `📋 *Hizmet Alanı:* ${formData.service}`,
      formData.message ? `💬 *Mesaj:* ${formData.message}` : null
    ].filter(Boolean);

    const encodedMessage = encodeURIComponent(lines.join('\n'));
    const targetWhatsAppUrl = `https://wa.me/905345986181?text=${encodedMessage}`;

    // WhatsApp penceresini yeni sekmede aç
    window.open(targetWhatsAppUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Ön Değerlendirme / Genel Bilgi',
        message: ''
      });
    }, 400);
  };

  const whatsappUrl =
    'https://wa.me/905345986181?text=Merhaba%20Asya%20Han%C4%B1m%2C%20dil%20ve%20konu%C5%9Fma%20terapisi%20hakk%C4%B1nda%20bilgi%20ve%20randevu%20almak%20istiyorum.';

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-800 font-sans selection:bg-[#48B2B0]/20 selection:text-[#354978] flex flex-col">
      {/* --- ÜST İLETİŞİM ŞERİDİ (Top Bar) --- */}
      <div className="bg-[#3E5384] text-white/90 text-xs py-2.5 px-4 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="https://maps.google.com/?q=Altayçeşme+mah.+Denizer+sok.+No:1/8+Ada+Ofis+İş+Merkezi+Maltepe+İstanbul"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-teal-200 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#7CE0DF]" />
              <span>Altayçeşme Mah. Denizer Sok. No:1/8 Ada Ofis İş Merkezi, Maltepe / İstanbul</span>
            </a>
            <span className="flex items-center gap-1.5 text-white/80">
              <Clock className="w-3.5 h-3.5 text-[#7CE0DF]" />
              <span>Pzt - Cmt: 09:00 - 19:00</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+905345986181"
              className="flex items-center gap-1.5 font-medium hover:text-teal-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#7CE0DF]" />
              <span>+90 (534) 598 61 81</span>
            </a>
            <a
              href="mailto:info@dktasyaayyildiz.com"
              className="flex items-center gap-1.5 hover:text-teal-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#7CE0DF]" />
              <span>info@dktasyaayyildiz.com</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-1 rounded-full bg-white/10 hover:bg-[#48B2B0] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* --- ANA NAVİGASYON (Sticky Header) --- */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'
            : 'bg-white py-4 border-b border-slate-100/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => navigateTo('home')}
            className="text-left focus:outline-none group"
          >
            <BrandLogo />
          </button>

          {/* Masaüstü Menü */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { id: 'home', label: 'Ana Sayfa' },
              { id: 'about', label: 'Hakkımızda' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activePage === item.id
                    ? 'text-[#4E6599] bg-[#4E6599]/8 font-semibold'
                    : 'text-slate-600 hover:text-[#4E6599] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Hizmetlerimiz Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => navigateTo('services')}
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors ${
                  activePage === 'services'
                    ? 'text-[#4E6599] bg-[#4E6599]/8 font-semibold'
                    : 'text-slate-600 hover:text-[#4E6599] hover:bg-slate-50'
                }`}
              >
                <span>Hizmetlerimiz</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#48B2B0]' : ''
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-72 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1">
                    {SERVICES.map((srv) => {
                      const Icon = srv.icon;
                      return (
                        <button
                          key={srv.id}
                          onClick={() => navigateTo('services', srv.id)}
                          className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 flex items-start gap-3 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-[#48B2B0]/10 text-[#48B2B0] group-hover:bg-[#48B2B0] group-hover:text-white transition-colors mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-800 group-hover:text-[#4E6599]">
                              {srv.title}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              {srv.audience}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {[
              { id: 'blog', label: 'Makaleler & Rehber' },
              { id: 'contact', label: 'İletişim' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activePage === item.id
                    ? 'text-[#4E6599] bg-[#4E6599]/8 font-semibold'
                    : 'text-slate-600 hover:text-[#4E6599] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Sağ CTA Butonları */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+905345986181"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold text-[#4E6599] hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#48B2B0]" />
              <span>0534 598 61 81</span>
            </a>
            <button
              onClick={() => navigateTo('contact')}
              className="flex items-center gap-2 bg-[#4E6599] hover:bg-[#3E5384] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <Calendar className="w-4 h-4 text-[#8CE0DF]" />
              <span>Randevu Oluştur</span>
            </button>
          </div>

          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü Aç/Kapat"
            className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobil Açılır Menü */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-2 shadow-lg">
            <button
              onClick={() => navigateTo('home')}
              className={`block w-full text-left px-4 py-3 rounded-xl font-medium ${
                activePage === 'home' ? 'bg-[#4E6599]/10 text-[#4E6599]' : 'text-slate-700'
              }`}
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => navigateTo('about')}
              className={`block w-full text-left px-4 py-3 rounded-xl font-medium ${
                activePage === 'about' ? 'bg-[#4E6599]/10 text-[#4E6599]' : 'text-slate-700'
              }`}
            >
              Hakkımızda
            </button>
            <div className="px-4 py-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Hizmetlerimiz
              </div>
              <div className="space-y-1 pl-2 border-l-2 border-[#48B2B0]/40">
                {SERVICES.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => navigateTo('services', srv.id)}
                    className="block w-full text-left py-2 px-3 rounded-lg text-sm text-slate-600 hover:text-[#4E6599] hover:bg-slate-50"
                  >
                    {srv.title}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => navigateTo('blog')}
              className={`block w-full text-left px-4 py-3 rounded-xl font-medium ${
                activePage === 'blog' ? 'bg-[#4E6599]/10 text-[#4E6599]' : 'text-slate-700'
              }`}
            >
              Makaleler & Rehber
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`block w-full text-left px-4 py-3 rounded-xl font-medium ${
                activePage === 'contact' ? 'bg-[#4E6599]/10 text-[#4E6599]' : 'text-slate-700'
              }`}
            >
              İletişim
            </button>

            <div className="pt-3 grid grid-cols-2 gap-3">
              <a
                href="tel:+905345986181"
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-slate-800 font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-[#4E6599]" />
                <span>Hemen Ara</span>
              </a>
              <button
                onClick={() => navigateTo('contact')}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#4E6599] text-white font-semibold text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Randevu Al</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* --- SAYFA İÇERİKLERİ --- */}
      <main className="flex-grow">
        {/* ==================== 1. ANA SAYFA ==================== */}
        {activePage === 'home' && (
          <>
            {/* HERO BÖLÜMÜ */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#F4F8FB] via-white to-[#EDF7F7] pt-10 pb-20 lg:pt-16 lg:pb-28">
              {/* Hafif Dekoratif Arka Plan Şekilleri */}
              <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[520px] h-[520px] rounded-full bg-[#64C4C3]/10 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[420px] h-[420px] rounded-full bg-[#4E6599]/8 blur-3xl pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  {/* Sol Metin & CTA Alanı */}
                  <div className="lg:col-span-7 space-y-6">
                    <Reveal direction="up">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#48B2B0]/30 shadow-xs text-xs sm:text-sm font-medium text-[#3E5384]">
                        <ShieldCheck className="w-4 h-4 text-[#48B2B0]" />
                        <span>Maltepe / İstanbul • Uzman Dil ve Konuşma Terapisti</span>
                      </div>
                    </Reveal>

                    <Reveal direction="up" delay={100}>
                      <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.3] tracking-tight">
                        İletişimdeki Engelleri Birlikte Aşalım,{' '}
                        <span className="text-[#4E6599]">Sesinizi Özgürce</span> Duyurun.
                      </h1>
                    </Reveal>

                    <Reveal direction="up" delay={180}>
                      <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                        Çocuk, ergen ve yetişkinlerde dil, konuşma, ses ve akıcılık bozukluklarında;
                        bilimsel kanıta dayalı, güven veren ve bireye özel terapi yaklaşımlarıyla
                        yanınızdayız.
                      </p>
                    </Reveal>

                    <Reveal direction="up" delay={260}>
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                        <button
                          onClick={() => navigateTo('contact')}
                          className="inline-flex items-center justify-center gap-2.5 bg-[#4E6599] hover:bg-[#3E5384] text-white font-semibold px-7 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all text-base"
                        >
                          <Calendar className="w-5 h-5 text-[#8CE0DF]" />
                          <span>Ön Değerlendirme Randevusu Al</span>
                        </button>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-emerald-50 text-slate-800 border border-slate-200 hover:border-emerald-300 font-semibold px-6 py-4 rounded-2xl shadow-xs transition-all text-base"
                        >
                          <MessageCircle className="w-5 h-5 text-emerald-600" />
                          <span>WhatsApp’tan Sorun</span>
                        </a>
                      </div>
                    </Reveal>

                    {/* Güven Rozetleri */}
                    <Reveal direction="up" delay={340}>
                      <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/70 max-w-xl">
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-slate-900">Uzman</div>
                          <div className="text-xs sm:text-sm text-slate-500">Yüksek Lisans Derecesi</div>
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-slate-900">10+</div>
                          <div className="text-xs sm:text-sm text-slate-500">Uluslararası Sertifika</div>
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-slate-900">5.0 ★</div>
                          <div className="text-xs sm:text-sm text-slate-500">Danışan Memnuniyeti</div>
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  {/* Sağ Görsel / Uzman Kartı */}
                  <div className="lg:col-span-5">
                    <Reveal direction="left" delay={150}>
                      <div className="relative mx-auto max-w-md">
                        {/* Yumuşak Organik Işık Halesi */}
                        <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#4E6599]/20 via-[#64C4C3]/25 to-teal-100/40 blur-xl opacity-80 pointer-events-none" />

                        {/* Yüzen Üst Rozet (Klinik Onaylı) */}
                        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 absolute -top-4 -right-3 z-20">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-xs font-bold text-slate-800">Randevuya Açık</span>
                        </div>

                        {/* Ana Vitrin Kartı */}
                        <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(78,101,153,0.12)] border border-slate-100/90">
                          {/* Üst Kurumsal Kapak & Ses Dalgası Şeridi */}
                          <div className="bg-gradient-to-br from-[#3E5384] via-[#4E6599] to-[#3B8D99] p-6 sm:p-7 text-white relative overflow-hidden">
                            {/* Dekoratif Ses Dalgası Çizgileri */}
                            <div className="flex items-end gap-1.5 opacity-20 absolute right-5 bottom-3 h-14 pointer-events-none">
                              {[20, 42, 28, 52, 34, 46, 22, 38, 18].map((bar, idx) => (
                                <span
                                  key={idx}
                                  style={{ height: `${bar}px` }}
                                  className="w-1.5 rounded-full bg-white"
                                />
                              ))}
                            </div>

                            <div className="relative z-10">
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-medium text-teal-100 mb-2">
                                <Award className="w-3.5 h-3.5 text-[#8CE0DF]" />
                                <span>Kurucu & Uzman Dil ve Konuşma Terapisti</span>
                              </div>
                              <h2 className="text-2xl sm:text-[26px] font-bold tracking-tight text-white leading-snug">
                                Uzm. Dkt. Asya Ayyıldız
                              </h2>
                              <p className="text-xs sm:text-sm text-white/85 mt-1">
                                Üsküdar Üniversitesi Dil ve Konuşma Terapisi (YL)
                              </p>
                            </div>
                          </div>

                          {/* Orta Bölüm: Etkileşimli Sertifika & Yaklaşım Etiketleri */}
                          <div className="p-6 sm:p-7 space-y-5">
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                  Sertifikalı Terapi Yaklaşımları
                                </span>
                                <span className="text-[11px] font-semibold text-[#48B2B0]">
                                  Kanıta Dayalı
                                </span>
                              </div>

                              <div className="grid grid-cols-2 gap-2.5">
                                {[
                                  { title: 'DIR Floortime', sub: '101 & 201 Uygulayıcı' },
                                  { title: 'PROMPT Tekniği', sub: 'Dokunsal Konuşma' },
                                  { title: 'ETEÇOM 2', sub: 'Erken Çocukluk' },
                                  { title: 'LSVT & BDT', sub: 'Ses & Kekemelik' }
                                ].map((item, i) => (
                                  <div
                                    key={i}
                                    className="p-3 rounded-2xl bg-[#F8FAFC] hover:bg-[#EDF7F7]/70 border border-slate-100 hover:border-[#48B2B0]/30 transition-colors group"
                                  >
                                    <div className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-[#48B2B0] shrink-0" />
                                      <span className="text-xs font-bold text-slate-800 group-hover:text-[#3E5384]">
                                        {item.title}
                                      </span>
                                    </div>
                                    <div className="text-[11px] text-slate-500 mt-1 pl-5">
                                      {item.sub}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Alt Konum ve Özgeçmiş Çubuğu */}
                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-xl bg-[#4E6599]/10 text-[#4E6599] flex items-center justify-center shrink-0">
                                  <MapPin className="w-4 h-4" />
                                </div>
                                <div className="text-xs leading-tight">
                                  <span className="font-bold text-slate-900 block">
                                    Maltepe / İstanbul
                                  </span>
                                  <span className="text-slate-500 text-[11px]">
                                    Ada Ofis İş Merkezi No:1/8
                                  </span>
                                </div>
                              </div>

                              <button
                                onClick={() => navigateTo('about')}
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-[#4E6599] text-white text-xs font-semibold transition-colors shrink-0"
                              >
                                <span>Özgeçmiş</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </section>

            {/* HIZLI İLETİŞİM & ÖN DEĞERLENDİRME BANDI */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
              <Reveal direction="up">
                <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 sm:p-8 grid lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-4 space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#48B2B0]">
                      Hızlı Geri Dönüş
                    </span>
                    <h2 className="text-xl font-bold text-slate-900">
                      Sizi Arayalım, Süreci Birlikte Planlayalım
                    </h2>
                    <p className="text-sm text-slate-500">
                      Bilgilerinizi bırakın, uzmanımız gün içinde size dönüş yapsın.
                    </p>
                  </div>

                  <form
                    onSubmit={handleFormSubmit}
                    className="lg:col-span-8 grid sm:grid-cols-3 gap-3 items-end"
                  >
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Örn: Ayşe Yılmaz"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#4E6599] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Telefon Numaranız
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="05XX XXX XX XX"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#4E6599] focus:bg-white transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-3 px-5 rounded-xl bg-[#48B2B0] hover:bg-[#3B9E9C] text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2 h-[46px]"
                    >
                      {formStatus === 'success' ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Talebiniz Alındı</span>
                        </>
                      ) : (
                        <>
                          <span>Geri Arama İste</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </Reveal>
            </section>

            {/* UZMANLIK ALANLARIMIZ (Hizmetler Grid) */}
            <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal direction="up">
                <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#48B2B0]">
                    Uzmanlık Alanlarımız
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                    Bilimsel ve Kişiye Özel Terapi Hizmetleri
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Her bireyin iletişim yolculuğu benzersizdir. Kapsamlı değerlendirme sonrasında
                    yaşa ve ihtiyaca en uygun terapi yöntemlerini uyguluyoruz.
                  </p>
                </div>
              </Reveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Reveal key={service.id} direction="up" delay={index * 80}>
                      <div className="h-full bg-white rounded-2xl p-7 border border-slate-100 shadow-xs hover:shadow-md hover:border-[#48B2B0]/40 transition-all flex flex-col justify-between group">
                        <div>
                          <div className="flex items-center justify-between mb-5">
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center border ${service.color}`}
                            >
                              <Icon className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold text-slate-300 group-hover:text-[#48B2B0] transition-colors">
                              0{index + 1}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#4E6599] transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed mb-5">
                            {service.shortDesc}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs text-slate-500 font-medium truncate max-w-[180px]">
                            {service.audience}
                          </span>
                          <button
                            onClick={() => navigateTo('services', service.id)}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-[#4E6599] group-hover:translate-x-1 transition-transform"
                          >
                            <span>İncele</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}

                {/* Özel Değerlendirme Çağrı Kartı */}
                <Reveal direction="up" delay={400}>
                  <div className="h-full rounded-2xl p-7 bg-gradient-to-br from-[#4E6599] to-[#3B4F7D] text-white flex flex-col justify-between shadow-md">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                        <HeartHandshake className="w-6 h-6 text-[#8CE0DF]" />
                      </div>
                      <h3 className="text-xl font-bold">
                        Hangi Terapinin Uygun Olduğundan Emin Değil misiniz?
                      </h3>
                      <p className="text-sm text-white/85 leading-relaxed">
                        Kapsamlı dil ve konuşma değerlendirmesi ile çocuğunuzun veya kendinizin
                        ihtiyaçlarını birlikte belirleyelim.
                      </p>
                    </div>
                    <div className="pt-6">
                      <button
                        onClick={() => navigateTo('contact')}
                        className="w-full py-3.5 px-5 rounded-xl bg-white text-[#3E5384] hover:bg-teal-50 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                      >
                        <span>Bize Ulaşın</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* HAKKIMIZDA ÖZET BÖLÜMÜ */}
            <section className="py-20 bg-white border-y border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5">
                    <Reveal direction="left">
                      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#EDF7F7] to-[#E6ECF8] p-8 border border-slate-100">
                        <div className="aspect-[4/4] rounded-2xl bg-white shadow-inner flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                          <div className="w-24 h-24 rounded-full bg-[#4E6599]/10 flex items-center justify-center mb-4">
                            <GraduationCap className="w-12 h-12 text-[#4E6599]" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900">
                            Uzm. Dkt. Asya Ayyıldız
                          </h3>
                          <p className="text-sm text-[#48B2B0] font-medium mt-1">
                            Onur Öğrencisi & Yüksek Lisans Mezunu
                          </p>
                          <div className="mt-6 w-full space-y-2 text-left bg-slate-50 p-4 rounded-xl text-xs text-slate-600">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#48B2B0]" />
                              <span>Üsküdar Üniversitesi NP Feneryolu Tıp Merkezi</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#48B2B0]" />
                              <span>Erenköy Eğitim ve Araştırma Hastanesi</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#48B2B0]" />
                              <span>Florya İstanbul Aydın Üniversitesi Hastanesi</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  <div className="lg:col-span-7 space-y-6">
                    <Reveal direction="right">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#48B2B0]">
                        Uzmanımızı Tanıyın
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
                        Merhaba! Ben Uzman Dil ve Konuşma Terapisti Asya Ayyıldız
                      </h2>
                      <p className="text-slate-600 leading-relaxed mt-4">
                        Üsküdar Üniversitesi Dil ve Konuşma Terapisi bölümünden{' '}
                        <strong className="text-slate-800">onur öğrencisi</strong> olarak mezun
                        oldum. Lisans eğitimim süresince çeşitli rehabilitasyon merkezleri, rehberlik
                        araştırma merkezleri, Üsküdar Üniversitesi NP Feneryolu Tıp Merkezi, Florya
                        İstanbul Aydın Üniversitesi Hastanesi ve Erenköy Eğitim ve Araştırma
                        Hastanesi’nde yoğun gözlem ve uygulama stajları gerçekleştirdim.
                      </p>
                      <p className="text-slate-600 leading-relaxed mt-3">
                        Ardından Üsküdar Üniversitesi Dil ve Konuşma Terapisi{' '}
                        <strong className="text-slate-800">yüksek lisans eğitimimi</strong>{' '}
                        tamamlayarak uzmanlık unvanımı aldım. Floortime 101-201, PROMPT, ETEÇOM 2,
                        LSVT ve Bilişsel Davranışçı Yaklaşım gibi uluslararası geçerliliği olan
                        terapi yöntemlerini danışanlarımın ihtiyaçlarına göre bütüncül bir bakış
                        açısıyla uyguluyorum.
                      </p>

                      <div className="pt-6 flex flex-wrap gap-3">
                        <button
                          onClick={() => navigateTo('about')}
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4E6599] hover:bg-[#3E5384] text-white font-semibold text-sm transition-colors"
                        >
                          <span>Tüm Eğitim ve Sertifikalarım</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => navigateTo('contact')}
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 hover:border-[#48B2B0] text-slate-700 font-semibold text-sm transition-colors"
                        >
                          <span>Tanışma Randevusu Al</span>
                        </button>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </section>

            {/* ÇALIŞMA SÜRECİMİZ (4 Adım) */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal direction="up">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#48B2B0]">
                    Nasıl İlerliyoruz?
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                    4 Adımda Şeffaf ve Güvenilir Terapi Süreci
                  </h2>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: '01',
                    title: 'Ön Görüşme & Öykü',
                    desc: 'Ailenin veya danışanın beklentileri, gelişim öyküsü ve günlük iletişim dinamikleri detaylıca dinlenir.'
                  },
                  {
                    step: '02',
                    title: 'Bilimsel Değerlendirme',
                    desc: 'Standart testler ve klinik gözlemlerle dil, konuşma, ses veya akıcılık profili objektif olarak belirlenir.'
                  },
                  {
                    step: '03',
                    title: 'Bireysel Terapi Planı',
                    desc: 'Danışanın güçlü yönlerine ve hedeflerine uygun, oyun veya beceri temelli terapi programı oluşturulur.'
                  },
                  {
                    step: '04',
                    title: 'Aile İş Birliği & Takip',
                    desc: 'Terapi odasında kazanılan becerilerin günlük hayata aktarılması için aileye ve danışana düzenli rehberlik sunulur.'
                  }
                ].map((item, idx) => (
                  <Reveal key={item.step} direction="up" delay={idx * 90}>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs relative h-full">
                      <div className="w-11 h-11 rounded-full bg-[#EDF7F7] text-[#3B9E9C] font-bold flex items-center justify-center text-sm mb-4 border border-[#48B2B0]/20">
                        {item.step}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* DANIŞAN & VELİ YORUMLARI */}
            <section className="py-20 bg-[#F4F8FB] border-y border-slate-200/60">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal direction="up">
                  <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#48B2B0]">
                      Danışan Deneyimleri
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                      Ailelerimiz ve Danışanlarımız Ne Diyor?
                    </h2>
                  </div>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-6">
                  {TESTIMONIALS.map((review, idx) => (
                    <Reveal key={review.id} direction="up" delay={idx * 100}>
                      <div className="bg-white rounded-2xl p-7 shadow-xs border border-slate-100 h-full flex flex-col justify-between relative">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex gap-1 text-amber-400">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                              ))}
                            </div>
                            <Quote className="w-7 h-7 text-[#4E6599]/15" />
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed italic">
                            "{review.text}"
                          </p>
                        </div>

                        <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                          <div>
                            <div className="text-sm font-bold text-slate-900">{review.author}</div>
                            <div className="text-xs text-[#48B2B0] font-medium">{review.tag}</div>
                          </div>
                          <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                            Doğrulanmış Yorum
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            {/* BLOG / MAKALELER ÖZETİ */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal direction="up">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#48B2B0]">
                      Bilgi Köşesi
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1.5">
                      Güncel Makaleler ve Aile Rehberi
                    </h2>
                  </div>
                  <button
                    onClick={() => navigateTo('blog')}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4E6599] hover:text-[#3E5384]"
                  >
                    <span>Tüm Yazıları Gör</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Reveal>

              <div className="grid md:grid-cols-3 gap-6">
                {ARTICLES.slice(0, 3).map((article, idx) => (
                  <Reveal key={article.id} direction="up" delay={idx * 90}>
                    <article
                      onClick={() => {
                        setActivePage('blog');
                        setSelectedArticle(article);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col h-full"
                    >
                      <div className="h-44 bg-gradient-to-br from-[#4E6599]/10 via-[#64C4C3]/15 to-slate-100 p-6 flex flex-col justify-between relative">
                        <span className="self-start px-3 py-1 rounded-full bg-white/90 text-[#4E6599] text-xs font-semibold shadow-2xs">
                          {article.category}
                        </span>
                        <BookOpen className="w-10 h-10 text-[#4E6599]/30 self-end group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="text-xs text-slate-400 mb-2">
                            {article.date} • {article.readTime}
                          </div>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-[#4E6599] transition-colors mb-2.5">
                            {article.title}
                          </h3>
                          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                            {article.excerpt}
                          </p>
                        </div>
                        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#48B2B0]">
                          <span>Devamını Oku</span>
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* SIKÇA SORULAN SORULAR (SSS) */}
            <section className="py-16 bg-white border-t border-slate-100">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal direction="up">
                  <div className="text-center mb-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#48B2B0]">
                      Merak Edilenler
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                      Sıkça Sorulan Sorular
                    </h2>
                  </div>
                </Reveal>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <Reveal key={idx} direction="up" delay={idx * 60}>
                        <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-[#FAFBFD]">
                          <button
                            onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-slate-800 hover:text-[#4E6599] transition-colors"
                          >
                            <span className="text-sm sm:text-base">{faq.q}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-[#48B2B0] shrink-0 transition-transform duration-200 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-white">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )}

        {/* ==================== 2. HAKKIMIZDA SAYFASI ==================== */}
        {activePage === 'about' && (
          <div className="pb-20">
            {/* Sayfa Başlığı */}
            <section className="bg-gradient-to-r from-[#F4F8FB] to-[#EDF7F7] py-14 border-b border-slate-200/60">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                  <button onClick={() => navigateTo('home')} className="hover:text-[#4E6599]">
                    Ana Sayfa
                  </button>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[#4E6599] font-semibold">Hakkımızda</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Uzm. Dkt. Asya Ayyıldız Kimdir?
                </h1>
                <p className="text-slate-600 mt-2 max-w-2xl">
                  Akademik geçmişimiz, klinik staj deneyimlerimiz ve uluslararası terapi
                  sertifikalarımız.
                </p>
              </div>
            </section>

            {/* Biyografi & Klinik Deneyim */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5">
                  <Reveal direction="left">
                    <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm space-y-6">
                      <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#4E6599]/10 to-[#64C4C3]/20 flex flex-col items-center justify-center p-8 text-center">
                        <div className="w-28 h-28 rounded-full bg-white shadow-md flex items-center justify-center text-3xl font-bold text-[#4E6599] mb-4">
                          AA
                        </div>
                        <h2 className="text-xl font-bold text-slate-900">Uzm. Dkt. Asya Ayyıldız</h2>
                        <p className="text-sm text-[#48B2B0] font-semibold mt-1">
                          Dil ve Konuşma Terapisti
                        </p>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="flex items-start gap-3">
                          <GraduationCap className="w-5 h-5 text-[#4E6599] shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-bold text-slate-900">Yüksek Lisans</div>
                            <div className="text-xs text-slate-600">
                              Üsküdar Üniversitesi – Dil ve Konuşma Terapisi (Uzmanlık)
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-[#48B2B0] shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-bold text-slate-900">Lisans Derecesi</div>
                            <div className="text-xs text-slate-600">
                              Üsküdar Üniversitesi – Dil ve Konuşma Terapisi (Onur Öğrencisi)
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => navigateTo('contact')}
                        className="w-full py-3.5 rounded-xl bg-[#4E6599] hover:bg-[#3E5384] text-white font-semibold text-sm transition-colors"
                      >
                        Randevu ve Bilgi İçin Ulaşın
                      </button>
                    </div>
                  </Reveal>
                </div>

                <div className="lg:col-span-7 space-y-8">
                  <Reveal direction="up">
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xs space-y-4">
                      <h2 className="text-2xl font-bold text-slate-900">Eğitim ve Klinik Geçmiş</h2>
                      <p className="text-slate-600 leading-relaxed">
                        Üsküdar Üniversitesi Dil ve Konuşma Terapisi bölümünden{' '}
                        <strong>onur öğrencisi</strong> olarak mezun oldum. Lisans eğitimim
                        süresince çeşitli rehabilitasyon merkezleri, rehberlik araştırma merkezi,{' '}
                        <strong>Üsküdar Üniversitesi NP Feneryolu Tıp Merkezi</strong>,{' '}
                        <strong>Florya İstanbul Aydın Üniversitesi Hastanesi</strong> ve{' '}
                        <strong>Erenköy Eğitim ve Araştırma Hastanesi</strong>’nde gözlem ve
                        uygulama stajları yaptım.
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        Üsküdar Üniversitesi Dil ve Konuşma Terapisi yüksek lisans eğitimimi
                        tamamlayarak uzmanlığımı aldım. Şu anda İstanbul Maltepe’deki merkezimde
                        çocuk, ergen ve yetişkin danışanlarıma kanıta dayalı, etik ve bütüncül dil
                        ve konuşma terapisi hizmeti sunmaktayım.
                      </p>
                    </div>
                  </Reveal>

                  {/* Seminerler ve Kurslar Zaman Çizelgesi */}
                  <Reveal direction="up" delay={120}>
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xs">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 rounded-xl bg-[#48B2B0]/15 text-[#3B9E9C]">
                          <Award className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-slate-900">
                            Seminerler, Kurslar ve Sertifikalar
                          </h2>
                          <p className="text-xs text-slate-500">
                            Mesleki gelişim ve uluslararası sertifikasyon eğitimleri
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4 relative before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                        {SEMINARS.map((item, index) => (
                          <div key={index} className="relative flex items-start gap-4 pl-1">
                            <span className="px-2.5 py-1 rounded-lg bg-[#EDF7F7] text-[#3B9E9C] border border-[#48B2B0]/25 text-xs font-bold shrink-0 z-10">
                              {item.year}
                            </span>
                            <div className="bg-slate-50/80 rounded-xl p-3.5 flex-grow border border-slate-100">
                              <div className="text-sm font-bold text-slate-900">{item.title}</div>
                              <div className="text-xs text-slate-500 mt-1">{item.instructor}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== 3. HİZMETLERİMİZ SAYFASI ==================== */}
        {activePage === 'services' && (
          <div className="pb-20">
            <section className="bg-gradient-to-r from-[#F4F8FB] to-[#EDF7F7] py-14 border-b border-slate-200/60">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                  <button onClick={() => navigateTo('home')} className="hover:text-[#4E6599]">
                    Ana Sayfa
                  </button>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[#4E6599] font-semibold">Hizmetlerimiz</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Dil ve Konuşma Terapisi Hizmetlerimiz
                </h1>
                <p className="text-slate-600 mt-2 max-w-2xl">
                  Her yaş grubuna özel, bilimsel temelli değerlendirme ve terapi programlarımızı
                  detaylı inceleyin.
                </p>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
              <div className="grid lg:grid-cols-12 gap-8">
                {/* Sol Hizmet Seçim Menüsü */}
                <div className="lg:col-span-4 space-y-2">
                  {SERVICES.map((srv) => {
                    const Icon = srv.icon;
                    const isSelected = srv.id === selectedServiceId;
                    return (
                      <button
                        key={srv.id}
                        onClick={() => setSelectedServiceId(srv.id)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#4E6599] text-white border-[#4E6599] shadow-md'
                            : 'bg-white text-slate-700 border-slate-200/80 hover:border-[#48B2B0]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-xl ${
                              isSelected ? 'bg-white/15 text-[#8CE0DF]' : 'bg-slate-100 text-[#4E6599]'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-semibold text-sm">{srv.title}</span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 ${
                            isSelected ? 'text-white' : 'text-slate-400'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Sağ Seçili Hizmet Detay Kartı */}
                <div className="lg:col-span-8">
                  {SERVICES.filter((s) => s.id === selectedServiceId).map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.id}
                        className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm space-y-6"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-4 rounded-2xl border ${service.color}`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#48B2B0]">
                              Uzmanlık Alanı
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                              {service.title}
                            </h2>
                          </div>
                        </div>

                        <p className="text-slate-600 text-base leading-relaxed">
                          {service.shortDesc}
                        </p>

                        <div className="bg-[#F4F8FB] rounded-2xl p-5 border border-slate-100">
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                            Hedef Grup
                          </div>
                          <div className="text-sm font-semibold text-slate-800">
                            {service.audience}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-4">
                            Terapi Sürecinde Neler Yapıyoruz?
                          </h3>
                          <div className="grid sm:grid-cols-2 gap-3.5">
                            {service.details.map((detail, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                              >
                                <CheckCircle2 className="w-5 h-5 text-[#48B2B0] shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-700">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="text-sm text-slate-600">
                            Bu alanla ilgili ön değerlendirme randevusu oluşturmak için:
                          </div>
                          <div className="flex gap-3 w-full sm:w-auto">
                            <button
                              onClick={() => navigateTo('contact')}
                              className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-[#4E6599] hover:bg-[#3E5384] text-white font-semibold text-sm transition-colors"
                            >
                              Randevu Al
                            </button>
                            <a
                              href={whatsappUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex-1 sm:flex-initial px-5 py-3 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 font-semibold text-sm flex items-center justify-center gap-2"
                            >
                              <MessageCircle className="w-4 h-4" />
                              <span>WhatsApp</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== 4. MAKALELER & BLOG SAYFASI ==================== */}
        {activePage === 'blog' && (
          <div className="pb-20">
            <section className="bg-gradient-to-r from-[#F4F8FB] to-[#EDF7F7] py-14 border-b border-slate-200/60">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                  <button onClick={() => navigateTo('home')} className="hover:text-[#4E6599]">
                    Ana Sayfa
                  </button>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[#4E6599] font-semibold">Makaleler</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Bilgilendirici Makaleler & Rehber
                </h1>
                <p className="text-slate-600 mt-2 max-w-2xl">
                  Dil gelişimi, kekemelik, ses sağlığı ve erken müdahale yöntemleri hakkında bilimsel
                  yazılarımız.
                </p>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
              {selectedArticle ? (
                <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm space-y-6">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4E6599] hover:underline"
                  >
                    ← Tüm Makalelere Dön
                  </button>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="px-3 py-1 rounded-full bg-[#EDF7F7] text-[#3B9E9C] font-semibold">
                      {selectedArticle.category}
                    </span>
                    <span>{selectedArticle.date}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                    {selectedArticle.title}
                  </h2>
                  <p className="text-base font-medium text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-2xl border-l-4 border-[#48B2B0]">
                    {selectedArticle.excerpt}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {selectedArticle.content}
                  </p>
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-sm font-medium text-slate-800">
                      Konuyla ilgili uzman görüşü almak ister misiniz?
                    </div>
                    <button
                      onClick={() => navigateTo('contact')}
                      className="px-6 py-3 rounded-xl bg-[#4E6599] text-white font-semibold text-sm"
                    >
                      İletişime Geçin
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {ARTICLES.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => setSelectedArticle(art)}
                      className="bg-white rounded-2xl p-7 border border-slate-100 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                          <span className="px-3 py-1 rounded-full bg-[#EDF7F7] text-[#3B9E9C] font-semibold">
                            {art.category}
                          </span>
                          <span>{art.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#4E6599] transition-colors mb-3">
                          {art.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{art.excerpt}</p>
                      </div>
                      <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-[#4E6599]">
                        <span>Makaleyi Oku</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        )}

        {/* ==================== 5. İLETİŞİM & RANDEVU SAYFASI ==================== */}
        {activePage === 'contact' && (
          <div className="pb-20">
            <section className="bg-gradient-to-r from-[#F4F8FB] to-[#EDF7F7] py-14 border-b border-slate-200/60">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                  <button onClick={() => navigateTo('home')} className="hover:text-[#4E6599]">
                    Ana Sayfa
                  </button>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[#4E6599] font-semibold">İletişim</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Bize Ulaşın & Randevu Oluşturun
                </h1>
                <p className="text-slate-600 mt-2 max-w-2xl">
                  Sorularınız veya ön değerlendirme randevu talepleriniz için formu doldurabilir ya da
                  doğrudan telefon/WhatsApp üzerinden ulaşabilirsiniz.
                </p>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
              <div className="grid lg:grid-cols-12 gap-8">
                {/* Sol İletişim Formu */}
                <div className="lg:col-span-6">
                  <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-900 mb-1">İletişim & Randevu Formu</h2>
                    <p className="text-sm text-slate-500 mb-6">
                      Mesajınız doğrudan merkezimize iletilir ve en kısa sürede dönüş sağlanır.
                    </p>

                    {formStatus === 'success' ? (
                      <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                        <h3 className="text-lg font-bold text-emerald-900">
                          WhatsApp Mesajınız Hazırlandı!
                        </h3>
                        <p className="text-sm text-emerald-800">
                          Form bilgileriniz şablon olarak WhatsApp ekranında açıldı. Mesajı
                          göndererek uzmanımıza anında ulaşabilirsiniz.
                        </p>
                        <button
                          onClick={() => setFormStatus('idle')}
                          className="mt-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold"
                        >
                          Yeni Mesaj Oluştur
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            İsim Soyisim *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Adınız ve soyadınız"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#4E6599] focus:bg-white"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                              Telefon *
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="05XX XXX XX XX"
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#4E6599] focus:bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                              E-Posta
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="ornek@email.com"
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#4E6599] focus:bg-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            İlgilendiğiniz Hizmet Alanı
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#4E6599] focus:bg-white"
                          >
                            <option>Ön Değerlendirme / Genel Bilgi</option>
                            {SERVICES.map((s) => (
                              <option key={s.id} value={s.title}>
                                {s.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Mesajınız
                          </label>
                          <textarea
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Danışanın yaşı ve kısaca bilgi almak istediğiniz konu..."
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#4E6599] focus:bg-white"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={formStatus === 'submitting'}
                          className="w-full py-3.5 px-6 rounded-xl bg-[#4E6599] hover:bg-[#3E5384] text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4" />
                          <span>Gönder</span>
                        </button>
                      </form>
                    )}
                  </div>
                </div>

                {/* Sağ Adres, Harita & İletişim Kartı */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                    {/* Gerçek Google Haritalar Iframe Alanı */}
                    <div className="h-72 w-full bg-slate-100 relative overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.103613459219!2d29.1248378!3d40.9353963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6bd7e80a017%3A0x9ec2c273a39e6c03!2zQWx0YXnDp2XFn21lLCBEZW5pemVyIFNrLiBObzoxLCAzNDg0MyBNYWx0ZXBlL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1795675707277!5m2!1str!2str"
                        className="w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Asya Ayyıldız Dil ve Konuşma Merkezi Konumu"
                      />
                    </div>

                    {/* İletişim Detayları */}
                    <div className="p-7 space-y-4">
                      <div className="flex items-start gap-3.5">
                        <div className="p-2.5 rounded-xl bg-slate-100 text-[#4E6599]">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-400">Adres</div>
                          <div className="text-sm font-medium text-slate-800">
                            Altayçeşme Mah. Denizer Sok. No:1/8 - Ada Ofis İş Merkezi MALTEPE /
                            İSTANBUL
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <div className="p-2.5 rounded-xl bg-slate-100 text-[#48B2B0]">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-400">Telefon & WhatsApp</div>
                          <a
                            href="tel:+905345986181"
                            className="text-sm font-bold text-slate-900 hover:text-[#4E6599]"
                          >
                            +90 (534) 598 61 81
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <div className="p-2.5 rounded-xl bg-slate-100 text-[#4E6599]">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-400">E-Posta</div>
                          <a
                            href="mailto:info@dktasyaayyildiz.com"
                            className="text-sm font-medium text-slate-800 hover:text-[#4E6599]"
                          >
                            info@dktasyaayyildiz.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* --- ALT BİLGİ (Modern Kurumsal Footer) --- */}
      <footer className="bg-[#364975] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Marka & Adres */}
            <div className="lg:col-span-4 space-y-4">
              <BrandLogo light />
              <p className="text-sm text-white/75 leading-relaxed pt-2">
                Bilimsel kanıta dayalı yaklaşımlarla çocuk, ergen ve yetişkinlerde dil, konuşma,
                ses ve akıcılık bozuklukları alanında uzman terapi desteği.
              </p>
              <div className="space-y-2 text-sm text-white/85 pt-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#8CE0DF] shrink-0 mt-1" />
                  <span>Altayçeşme Mah. Denizer Sok. No:1/8 - Ada Ofis İş Merkezi MALTEPE</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#8CE0DF] shrink-0" />
                  <a href="tel:+905345986181" className="hover:text-white">
                    +90 (534) 598 61 81
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#8CE0DF] shrink-0" />
                  <a href="mailto:info@dktasyaayyildiz.com" className="hover:text-white">
                    info@dktasyaayyildiz.com
                  </a>
                </div>
              </div>
            </div>

            {/* Kurumsal */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#8CE0DF]">
                Kurumsal
              </h3>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li>
                  <button onClick={() => navigateTo('home')} className="hover:text-white">
                    Ana Sayfa
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('about')} className="hover:text-white">
                    Hakkımızda
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('services')} className="hover:text-white">
                    Hizmetlerimiz
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('blog')} className="hover:text-white">
                    Makaleler
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('contact')} className="hover:text-white">
                    İletişim
                  </button>
                </li>
              </ul>
            </div>

            {/* Hizmetlerimiz */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#8CE0DF]">
                Hizmetlerimiz
              </h3>
              <ul className="space-y-2.5 text-sm text-white/80">
                {SERVICES.map((srv) => (
                  <li key={srv.id}>
                    <button
                      onClick={() => navigateTo('services', srv.id)}
                      className="hover:text-white text-left"
                    >
                      {srv.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Makaleler */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#8CE0DF]">
                Popüler Konular
              </h3>
              <ul className="space-y-2.5 text-sm text-white/80">
                {[
                  'Ses Bozuklukları',
                  'Afazi Nedenleri',
                  'Geç Konuşma Terapisi',
                  'Artikülasyon Bozukluğu',
                  'Floortime Nedir?',
                  'Kekemelik Nedenleri',
                  'Prompt Tekniği Nedir?'
                ].map((topic, idx) => (
                  <li key={idx}>
                    <button onClick={() => navigateTo('blog')} className="hover:text-white text-left">
                      {topic}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <div>
              © {new Date().getFullYear()} Dil ve Konuşma Merkezi Asya Ayyıldız. Tüm Hakları
              Saklıdır.
            </div>
            <div>Bu web sitesi bilgilendirme amaçlıdır; tanı ve tedavi yerine geçmez.</div>
          </div>
        </div>
      </footer>

      {/* --- SABİT WHATSAPP CTA BUTONU --- */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile İletişime Geç"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-4 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all group"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-sm hidden sm:inline">WhatsApp İletişim</span>
      </a>
    </div>
  );
}
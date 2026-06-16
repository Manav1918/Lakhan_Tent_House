/* Lakhan Tent House & Sound - Frontend Logic & Translations */

// Multi-lingual Translation Dictionary
const translations = {
  hi: {
    // Navigation
    nav_home: "होम",
    nav_about: "हमारे बारे में",
    nav_services: "सेवाएं",
    nav_gallery: "गैलरी",
    nav_contact: "संपर्क",
    nav_book_btn: "अभी बुक करें",
    
    // Hero
    hero_tagline: "लखन टेंट हाउस एंड साउंड",
    hero_title: "आपके विशेष आयोजनों को <span>अविस्मरणीय</span> बनाते हैं",
    hero_sub: "झारखंड के हजारीबाग में प्रीमियम टेंट डेकोरेशन, हाई-क्वालिटी डीजे साउंड, शानदार स्टेज लाइटिंग और उत्कृष्ट कैटरिंग सेवाएं।",
    hero_book_cta: "बुकिंग शुरू करें",
    hero_services_cta: "हमारी सेवाएं देखें",
    
    // About
    about_subtitle: "लखन टेंट हाउस एंड साउंड",
    about_title: "30+ वर्षों से आपकी खुशियों का हमसफर",
    about_p1: "लखन टेंट हाउस एंड साउंड (सिंहरावां, हजारीबाग) विवाह, सगाई, जन्मदिन, धार्मिक उत्सवों और हर तरह के सामाजिक-सांस्कृतिक आयोजनों के लिए झारखंड की एक विश्वसनीय और प्रतिष्ठित फर्म है। हम हर आयोजन को बेहद खूबसूरती और भव्यता के साथ सजाते हैं।",
    about_p2: "हम न केवल सुंदर और प्रीमियम टेंट डिजाइन प्रदान करते हैं, बल्कि हमारे पास उत्तम साउंड सिस्टम, आकर्षक रंग-बिरंगी लाइट्स, और स्वादिष्ट भोजन के लिए प्रोफेशनल कैटरिंग की भी बेहतरीन व्यवस्था है। हमारा लक्ष्य आपके बजट में सबसे शानदार काम करके देना है।",
    about_hl1_title: "प्रीमियम सजावट",
    about_hl1_desc: "आधुनिक और पारंपरिक डिजाइनों का शानदार कॉम्बिनेशन।",
    about_hl2_title: "धमाकेदार साउंड",
    about_hl2_desc: "हाई-बेस साउंड, डीजे और आकर्षक लाइट्स का बेहतरीन तालमेल।",
    about_hl3_title: "बजट फ्रेंडली",
    about_hl3_desc: "बिना किसी छुपे शुल्क के, आपके बजट के अनुसार सर्वोत्तम डील्स।",
    about_hl4_title: "अनुभवी टीम",
    about_hl4_desc: "समय पर और बिना किसी परेशानी के काम पूरा करने के लिए प्रतिबद्ध।",
    
    // Services
    services_title: "हमारी प्रीमियम सेवाएं",
    services_subtitle: "हम आपके हर अवसर को सुंदर, संगीतमय और स्वादिष्ट बनाने के लिए सब कुछ प्रदान करते हैं",
    
    service_tents_title: "विवाह एवं उत्सव टेंट",
    service_tents_desc: "शाही शादी, तिलक, सगाई या धार्मिक कथाओं के लिए भव्य वाटरप्रूफ टेंट, सुंदर पर्दे, और आरामदायक सोफा-कुर्सी व्यवस्था।",
    service_tents_f1: "वाटरप्रूफ एवं हंगर टेंट",
    service_tents_f2: "शाही सिटिंग एवं वीआईपी सोफा",
    service_tents_f3: "थीम बेस्ड डेकोरेशन",
    
    service_sound_title: "डीजे एवं साउंड सिस्टम",
    service_sound_desc: "विवाह बारात, बर्थडे पार्टी या सांस्कृतिक कार्यक्रमों के लिए हाई-बेस स्पीकर, लाइव साउंड मिक्सर, और शानदार डिजिटल डीजे सेटअप।",
    service_sound_f1: "हाई-डेफिनिशन साउंड बॉक्स",
    service_sound_f2: "बारात के लिए स्पेशल डीजे गाड़ी",
    service_sound_f3: "वायरलेस माइक एवं कराओके",
    
    service_stages_title: "स्टेज एवं फ्लावर डेकोरेशन",
    service_stages_desc: "जयमाला स्टेज, सेल्फी पॉइंट और प्रवेश द्वार को ताजे या कृत्रिम फूलों, एलईडी लाइटों और शाही बैकड्रॉप के साथ आकर्षक रूप देना।",
    service_stages_f1: "जयमाला स्टेज सजावट",
    service_stages_f2: "थीम सेल्फी जोन",
    service_stages_f3: "ताजे और विदेशी फूलों की सजावट",
    
    service_lights_title: "लाइटिंग एवं इफेक्ट्स",
    service_lights_desc: "रात के समय आपके इवेंट को चमकाने के लिए एलईडी पार लाइट्स, मूविंग हेड्स, स्मोक मशीन, और पूरे ग्राउंड की खूबसूरत डेकोरेटिव लाइटिंग।",
    service_lights_f1: "शार्पी और लेजर लाइट्स",
    service_lights_f2: "फॉग और कोल्ड फायर इफेक्ट्स",
    service_lights_f3: "रंग-बिरंगी झालर एवं गेट लाइटिंग",
    
    service_catering_title: "प्रोफेशनल कैटरिंग",
    service_catering_desc: "सफाई के साथ तैयार किया गया स्वादिष्ट शाकाहारी और मांसाहारी भोजन, फैंसी क्रॉकरी, और आकर्षक फूड स्टॉल व वेटर सर्विस।",
    service_catering_f1: "स्वादिष्ट व्यंजन (शाकाहारी/मांसाहारी)",
    service_catering_f2: "प्रीमियम क्रॉकरी और टेबल सजावट",
    service_catering_f3: "ट्रेन और वेल-ड्रेस्ड वेटर स्टाफ",
    
    // Gallery
    gallery_title: "हमारा कार्य गैलरी",
    gallery_subtitle: "हमारे पिछले कुछ सफल आयोजनों और डेकोरेशन की झलकियां देखें",
    gallery_filter_all: "सभी तस्वीरें",
    gallery_filter_tents: "टेंट",
    gallery_filter_stages: "स्टेज",
    gallery_filter_sound: "साउंड व लाइट्स",
    gallery_filter_catering: "कैटरिंग",
    
    gallery_item_t1: "शाही शादी शाम टेंट",
    gallery_item_t2: "वाटरप्रूफ पंडाल सेटअप",
    gallery_item_s1: "प्रीमियम जयमाला स्टेज",
    gallery_item_s2: "फूलों का गेट डेकोरेशन",
    gallery_item_d1: "हाई-बेस साउंड सेटअप",
    gallery_item_d2: "पार्टी नाइट लाइटिंग",
    gallery_item_c1: "रॉयल बुफे काउंटर",
    gallery_item_c2: "फूड स्टॉल डेकोर",
    
    gallery_view_more: "और देखें",
    
    // Booking
    booking_title: "इवेंट बुकिंग एवं पूछताछ",
    booking_subtitle: "नीचे दी गई जानकारी भरें और सीधे व्हाट्सएप पर बुकिंग के लिए संपर्क करें। हम तुरंत उत्तर देंगे!",
    booking_label_name: "आपका शुभ नाम",
    booking_placeholder_name: "अपना पूरा नाम लिखें",
    booking_label_phone: "मोबाइल नंबर",
    booking_placeholder_phone: "10 अंकों का मोबाइल नंबर",
    booking_label_date: "इवेंट की तारीख",
    booking_label_location: "इवेंट का स्थान (पता)",
    booking_placeholder_location: "जहां इवेंट होना है (जैसे: सिंहरावां, हजारीबाग)",
    booking_label_guests: "मेहमानों की अनुमानित संख्या",
    booking_placeholder_guests: "जैसे: 200, 500, 1000+",
    booking_label_services: "आवश्यक सेवाएं चुनें (मल्टीपल चुन सकते हैं)",
    booking_tag_tents: "टेंट सजावट",
    booking_tag_sound: "डीजे और साउंड",
    booking_tag_stage: "स्टेज और फ्लावर्स",
    booking_tag_lights: "लाइटिंग",
    booking_tag_catering: "कैटरिंग / भोजन",
    booking_label_message: "विशेष निर्देश या संदेश (वैकल्पिक)",
    booking_placeholder_message: "यदि कोई विशेष मांग हो तो यहां लिखें...",
    booking_submit_btn: "व्हाट्सएप पर बुकिंग भेजें",
    
    // Contact & Map
    contact_title: "हमसे संपर्क करें",
    contact_subtitle: "आप कभी भी हमारे कार्यालय में आ सकते हैं या नीचे दिए गए माध्यमों से संपर्क कर सकते हैं",
    contact_address_title: "कार्यालय का पता",
    contact_address_desc: "लखन टेंट हाउस एंड साउंड, सिंहरावां (जीटी रोड के पास), बरही रोड, हजारीबाग, झारखंड - 825405",
    contact_phone_title: "कॉल करें / व्हाट्सएप करें",
    contact_phone_desc: "+91 99311 06136, +91 91993 11061",
    contact_hours_title: "कार्यालय का समय",
    contact_hours_desc: "प्रतिदिन सुबह 08:00 बजे से रात 10:00 बजे तक (सप्ताह के सातों दिन)",
    
    // Footer
    footer_desc: "लखन टेंट हाउस एंड साउंड झारखंड के हजारीबाग में अग्रणी टेंट, स्टेज, लाइट और साउंड डेकोरेटर हैं। हम आपकी खुशियों के अवसरों को भव्य और यादगार बनाते हैं।",
    footer_quick_links: "त्वरित लिंक्स",
    footer_services: "हमारी सेवाएं",
    footer_copy: "© 2026 लखन टेंट हाउस एंड साउंड। सर्वाधिकार सुरक्षित।",
    footer_design: "डिज़ाइन और डेवलप्ड बाय CID",

    // Verified Customer Portal
    nav_verified: "सत्यापित ग्राहक",
    ver_title: "हमारे सत्यापित ग्राहक",
    ver_subtitle: "वे ग्राहक जिन्होंने हमारे साथ 3 या अधिक इवेंट सफलतापूर्वक आयोजित किए हैं और विशेष लाभ प्राप्त कर रहे हैं",
    ver_badge_label: "सत्यापित ग्राहक",
    ver_signature_label: "हस्ताक्षर:",
    ver_feedback_1: `"लखन टेंट हाउस के साथ मैंने अपने परिवार में तीन शादियां आयोजित की हैं। उनकी टेंट की सजावट हमेशा लाजवाब होती है और साउंड सिस्टम बरही क्षेत्र में सबसे दमदार है। वे हकीकत में बहुत ही विश्वसनीय और पेशेवर हैं!"`,
    ver_feedback_2: `"हमारे अस्पताल के उद्घाटन, एनुअल फंक्शन और मेरी बेटी की शादी में लखन टेंट एंड साउंड ने काम किया है। उनकी लाइटिंग और स्टेज फ्लावर डेकोरेशन बरही और हजारीबाग में बेजोड़ है। समय के पाबंद हैं।"`,
    ver_feedback_3: `"हमने अपने बेटे के जन्मदिन, तिलक और गृह प्रवेश के अवसर पर इनकी कैटरिंग और टेंट सेवा का उपयोग किया। स्वादिष्ट भोजन और साफ-सफाई लाजवाब थी। 3 बुकिंग्स पूरी होने पर हमें मिला स्पेशल डिस्काउंट!"`,
    portal_title: "लखन सत्यापित ग्राहक बनें!",
    portal_desc: "हमारे साथ पंजीकृत हों और एक ही मोबाइल नंबर या ईमेल से कम से कम 3 सफल इवेंट बुकिंग पूरी करें। सत्यापित होते ही आपको मिलेंगे विशेष अधिकार:",
    portal_b1: "हर बुकिंग पर फ्लैट 10% की अतिरिक्त छूट",
    portal_b2: "त्योहारों और शादियों के सीजन में प्राथमिकता बुकिंग",
    portal_b3: "डीजे एवं साउंड सिस्टम में मुफ्त बेस/लाइट अपग्रेड",
    portal_b4: "सत्यापित ग्राहक प्रमाण पत्र एवं डिजिटल गोल्ड पास",
    tracker_reg_title: "रजिस्ट्रेशन / स्थिति जांचें",
    tracker_reg_btn: "रजिस्टर करें / चेक करें",
    tracker_progress_label: "आपकी बुकिंग प्रगति:",
    tracker_sim_btn: "बुकिंग सिम्युलेट करें (+1 बुकिंग)",
    tracker_exit_btn: "लॉगआउट",
    tracker_sim_note: "*नोट: यह सिम्युलेटर है। असली बुकिंग के लिए उपरोक्त 'व्हाट्सएप पर बुकिंग भेजें' का उपयोग करें। वही नंबर दर्ज करने पर काउंट अपडेट होगा।*",
    
    // Validation
    valid_name: "कृपया अपना नाम दर्ज करें",
    valid_phone: "कृपया वैध मोबाइल नंबर दर्ज करें",
    valid_date: "कृपया इवेंट की तारीख चुनें",
    valid_location: "कृपया इवेंट का स्थान दर्ज करें",
    valid_services: "कृपया कम से कम एक सेवा का चयन करें"
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_book_btn: "Book Now",
    
    // Hero
    hero_tagline: "Lakhan Tent House & Sound",
    hero_title: "Making Your Special Events <span>Unforgettable</span>",
    hero_sub: "Premium tent decoration, high-quality DJ sound, grand stage lighting, and professional catering services in Hazaribagh, Jharkhand.",
    hero_book_cta: "Start Booking",
    hero_services_cta: "Explore Services",
    
    // About
    about_subtitle: "Lakhan Tent House & Sound",
    about_title: "Crafting Your Celebrations for 10+ Years",
    about_p1: "Lakhan Tent House & Sound (Singhrawan, Hazaribagh) is a trusted and reputed firm in Jharkhand for weddings, engagements, birthday parties, religious festivals, and all kinds of social and cultural gatherings.",
    about_p2: "We do not just provide beautiful tents, but we also offer premium audio setups, dazzling stage lighting, and top-tier catering services. Our goal is to deliver the most stunning setups customized within your budget.",
    about_hl1_title: "Premium Decoration",
    about_hl1_desc: "A beautiful combination of modern and traditional design aesthetics.",
    about_hl2_title: "Powerful Sound",
    about_hl2_desc: "High-bass sound boxes, DJ, and professional event lights.",
    about_hl3_title: "Budget Friendly",
    about_hl3_desc: "Get the best deals customized according to your budget.",
    about_hl4_title: "Experienced Team",
    about_hl4_desc: "Committed to delivering timely and hassle-free services.",
    
    // Services
    services_title: "Our Premium Services",
    services_subtitle: "We provide everything needed to make your occasion elegant, musical, and delicious",
    
    service_tents_title: "Wedding & Festival Tents",
    service_tents_desc: "Grand waterproof tents, premium curtains, and comfortable seating arrangements for weddings, tilak, and religious functions.",
    service_tents_f1: "Waterproof & Hangar Tents",
    service_tents_f2: "Royal Seating & VIP Sofas",
    service_tents_f3: "Theme-Based Decorations",
    
    service_sound_title: "DJ & Sound System",
    service_sound_desc: "High-bass speakers, live sound mixers, and digital DJ setups for weddings, baaraats, birthdays, and stage shows.",
    service_sound_f1: "High-Definition Sound Boxes",
    service_sound_f2: "Special DJ Carriage for Baaraat",
    service_sound_f3: "Wireless Mics & Karaoke Systems",
    
    service_stages_title: "Stage & Flower Decor",
    service_stages_desc: "Stunning stage setups, wedding mandap decoration, selfie points, and gates adorned with fresh and artificial flowers.",
    service_stages_f1: "Wedding Stage Backdrops",
    service_stages_f2: "Theme Selfie Zones",
    service_stages_f3: "Fresh & Imported Flowers",
    
    service_lights_title: "Lighting & Effects",
    service_lights_desc: "Dazzling LED par lights, moving head sharpies, fog machines, cold fire works, and decorative lighting across the venue.",
    service_lights_f1: "Sharpy & Laser Lights",
    service_lights_f2: "Fog & Cold Fire Special Effects",
    service_lights_f3: "LED Gate & Venue Border Lighting",
    
    service_catering_title: "Professional Catering",
    service_catering_desc: "Hygienically prepared mouth-watering vegetarian and non-vegetarian menus, luxury dinnerware, and elegant buffet setups.",
    service_catering_f1: "Delicious Multi-Cuisine Food",
    service_catering_f2: "Premium Crockery & Table Setup",
    service_catering_f3: "Professional & Well-Dressed Staff",
    
    // Gallery
    gallery_title: "Our Work Gallery",
    gallery_subtitle: "Have a look at some of our successful events and decorations",
    gallery_filter_all: "All Photos",
    gallery_filter_tents: "Tents",
    gallery_filter_stages: "Stages",
    gallery_filter_sound: "Sound & Lights",
    gallery_filter_catering: "Catering",
    
    gallery_item_t1: "Royal Wedding Tent",
    gallery_item_t2: "Waterproof Pandal Setup",
    gallery_item_s1: "Premium Varmala Stage",
    gallery_item_s2: "Flower Entrance Gate",
    gallery_item_d1: "High-Bass DJ Stage",
    gallery_item_d2: "Party Lighting Effects",
    gallery_item_c1: "Grand Buffet Counters",
    gallery_item_c2: "Food Stalls Display",
    
    gallery_view_more: "View More",
    
    // Booking
    booking_title: "Event Booking & Inquiry",
    booking_subtitle: "Fill out the form below to initiate booking details directly on WhatsApp. We will reply instantly!",
    booking_label_name: "Your Name",
    booking_placeholder_name: "Enter your full name",
    booking_label_phone: "Mobile Number",
    booking_placeholder_phone: "10-digit mobile number",
    booking_label_date: "Event Date",
    booking_label_location: "Event Location (Address)",
    booking_placeholder_location: "Where is the event (e.g., Singhrawan, Hazaribagh)",
    booking_label_guests: "Approximate Guests",
    booking_placeholder_guests: "e.g., 200, 500, 1000+",
    booking_label_services: "Select Services Needed (Choose multiple)",
    booking_tag_tents: "Tent Decoration",
    booking_tag_sound: "DJ & Sound",
    booking_tag_stage: "Stage & Flowers",
    booking_tag_lights: "Lighting Setup",
    booking_tag_catering: "Catering & Buffet",
    booking_label_message: "Special Instructions (Optional)",
    booking_placeholder_message: "Specify any custom demands or details here...",
    booking_submit_btn: "Send Booking on WhatsApp",
    
    // Contact & Map
    contact_title: "Contact Us",
    contact_subtitle: "Visit our office or reach out to us through any of the channels below",
    contact_address_title: "Office Address",
    contact_address_desc: "Lakhan Tent House & Sound, Singhrawan (Near GT Road), Barhi Road, Hazaribagh, Jharkhand - 825405",
    contact_phone_title: "Call / WhatsApp Us",
    contact_phone_desc: "+91 99311 06136, +91 91993 11061",
    contact_hours_title: "Business Hours",
    contact_hours_desc: "Every day 08:00 AM to 10:00 PM (7 days a week)",
    
    // Footer
    footer_desc: "Lakhan Tent House & Sound is a premier tent, stage, sound, and lighting organizer in Hazaribagh, Jharkhand. We make your celebrations majestic and memorable.",
    footer_quick_links: "Quick Links",
    footer_services: "Our Services",
    footer_copy: "© 2026 Lakhan Tent House & Sound. All rights reserved.",
    footer_design: "Designed and Developed by CID",

    // Verified Customer Portal
    nav_verified: "Verified Clients",
    ver_title: "Our Verified Customers",
    ver_subtitle: "Clients who have successfully hosted 3 or more events with us and enjoy exclusive benefits",
    ver_badge_label: "Verified Client",
    ver_signature_label: "Signature:",
    ver_feedback_1: `"I have hosted three weddings in my family with Lakhan Tent House. Their tent decorations are always gorgeous and the sound system is the most powerful in Barhi area. They are extremely reliable and professional!"`,
    ver_feedback_2: `"Lakhan Tent & Sound managed the decoration and sound for our hospital inauguration, annual functions, and my daughter's wedding. Their lighting and stage flower work are unmatched in Barhi and Hazaribagh. Highly punctual."`,
    ver_feedback_3: `"We hired them for our son's birthday party, tilak ceremony, and housewarming. The catering food quality and cleanliness were outstanding. We unlocked a special verified customer discount on our third booking!"`,
    portal_title: "Become a Lakhan Verified Customer!",
    portal_desc: "Register with us and complete at least 3 successful event bookings using the same mobile number or email address. Once verified, you will unlock exclusive VIP benefits:",
    portal_b1: "Flat 10% extra discount on every booking",
    portal_b2: "Priority booking during peak wedding and festival seasons",
    portal_b3: "Free audio base/lighting upgrades on DJ sound systems",
    portal_b4: "Verified customer certificate and digital Gold Pass",
    tracker_reg_title: "Registration / Check Status",
    tracker_reg_btn: "Register / Check Status",
    tracker_progress_label: "Your Booking Progress:",
    tracker_sim_btn: "Simulate Booking (+1 Booking)",
    tracker_exit_btn: "Logout",
    tracker_sim_note: "*Note: This is a simulation. For actual bookings, use the 'Send Booking on WhatsApp' form above. Submitting with the same number will automatically update your count.*",
    
    // Validation
    valid_name: "Please enter your name",
    valid_phone: "Please enter a valid mobile number",
    valid_date: "Please select an event date",
    valid_location: "Please enter event location",
    valid_services: "Please select at least one service"
  }
};

let currentLang = localStorage.getItem("lth_language") || "hi";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize translation
  updateLanguageUI(currentLang);
  
  // Setup header scroll effect
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle logic
  const navToggle = document.getElementById("mobileNavToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-item a");
  
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    // Toggle icon classes if applicable (e.g. from hamburger to X)
    const toggleIcon = navToggle.querySelector("i");
    if (toggleIcon) {
      if (navMenu.classList.contains("active")) {
        toggleIcon.className = "bi bi-x-lg";
      } else {
        toggleIcon.className = "bi bi-list";
      }
    }
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      const toggleIcon = navToggle.querySelector("i");
      if (toggleIcon) toggleIcon.className = "bi bi-list";
    });
  });

  // Language switcher setup
  const btnHi = document.getElementById("langHi");
  const btnEn = document.getElementById("langEn");
  
  btnHi.addEventListener("click", () => switchLang("hi"));
  btnEn.addEventListener("click", () => switchLang("en"));

  // Gallery filtering logic
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active from all and add to this
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const filter = btn.getAttribute("data-filter");
      
      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");
        if (filter === "all" || itemCategory === filter) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 50);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.8)";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // Booking Form Interactive Multi-select Tag Logic
  const serviceTags = document.querySelectorAll(".service-tag");
  serviceTags.forEach(tag => {
    tag.addEventListener("click", () => {
      tag.classList.toggle("selected");
    });
  });

  // Form Submission Logic -> Whatsapp API
  const bookingForm = document.getElementById("bookingForm");
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Inputs
    const name = document.getElementById("bookingName").value.trim();
    const phone = document.getElementById("bookingPhone").value.trim();
    const date = document.getElementById("bookingDate").value;
    const location = document.getElementById("bookingLocation").value.trim();
    const guests = document.getElementById("bookingGuests").value.trim();
    const message = document.getElementById("bookingMessage").value.trim();
    
    // Services selected
    const selectedServices = [];
    serviceTags.forEach(tag => {
      if (tag.classList.contains("selected")) {
        // We use the language-dependent text or a standard name
        selectedServices.push(tag.getAttribute("data-service-name"));
      }
    });

    // Validations
    if (!name) {
      alert(translations[currentLang].valid_name);
      return;
    }
    if (!phone || phone.length < 10) {
      alert(translations[currentLang].valid_phone);
      return;
    }
    if (!date) {
      alert(translations[currentLang].valid_date);
      return;
    }
    if (!location) {
      alert(translations[currentLang].valid_location);
      return;
    }
    if (selectedServices.length === 0) {
      alert(translations[currentLang].valid_services);
      return;
    }

    // Build the WhatsApp message template based on active language
    let waMessage = "";
    if (currentLang === "hi") {
      waMessage += `*नया बुकिंग अनुरोध - लखन टेंट हाउस*\n\n`;
      waMessage += `👤 *नाम:* ${name}\n`;
      waMessage += `📞 *मोबाइल:* ${phone}\n`;
      waMessage += `📅 *तारीख:* ${date}\n`;
      waMessage += `📍 *स्थान:* ${location}\n`;
      if (guests) waMessage += `👥 *मेहमानों की संख्या:* ${guests}\n`;
      waMessage += `💼 *चयनित सेवाएं:* ${selectedServices.join(", ")}\n`;
      if (message) waMessage += `📝 *विशेष निर्देश:* ${message}\n`;
      waMessage += `\nकृपया इस बुकिंग की पुष्टि और विवरण के लिए संपर्क करें। धन्यवाद!`;
    } else {
      waMessage += `*New Booking Inquiry - Lakhan Tent House*\n\n`;
      waMessage += `👤 *Name:* ${name}\n`;
      waMessage += `📞 *Mobile:* ${phone}\n`;
      waMessage += `📅 *Date:* ${date}\n`;
      waMessage += `📍 *Location:* ${location}\n`;
      if (guests) waMessage += `👥 *Guests Count:* ${guests}\n`;
      waMessage += `💼 *Services Needed:* ${selectedServices.join(", ")}\n`;
      if (message) waMessage += `📝 *Instructions:* ${message}\n`;
      waMessage += `\nKindly revert with confirmation and quotation. Thank you!`;
    }

    // Auto-increment booking count for registered customers
    const db = JSON.parse(localStorage.getItem("lth_registered_users")) || {};
    if (db[phone]) {
      db[phone].bookingCount = (db[phone].bookingCount || 0) + 1;
      localStorage.setItem("lth_registered_users", JSON.stringify(db));
      if (window.renderTrackerDashboard) {
        window.renderTrackerDashboard();
      }
    }

    // Direct WhatsApp Link (wa.me/919931106136)
    const waBaseUrl = "https://wa.me/919931106136";
    const waUrl = `${waBaseUrl}?text=${encodeURIComponent(waMessage)}`;
    
    // Open in a new tab
    window.open(waUrl, "_blank");
  });

  // --- VERIFIED CUSTOMERS REGISTRATION & SIMULATION LOGIC ---
  const trackerRegistration = document.getElementById("trackerRegistration");
  const trackerDashboard = document.getElementById("trackerDashboard");
  const trackerRegForm = document.getElementById("trackerRegForm");
  const trackerUserName = document.getElementById("trackerUserName");
  const trackerUserEmail = document.getElementById("trackerUserEmail");
  const trackerUserPhone = document.getElementById("trackerUserPhone");
  const trackerProgressFill = document.getElementById("trackerProgressFill");
  const trackerProgressText = document.getElementById("trackerProgressText");
  const trackerBadge = document.getElementById("trackerBadge");
  const btnSimulateBooking = document.getElementById("btnSimulateBooking");
  const btnExitTracker = document.getElementById("btnExitTracker");

  function getUsersDB() {
    return JSON.parse(localStorage.getItem("lth_registered_users")) || {};
  }

  function saveUsersDB(db) {
    localStorage.setItem("lth_registered_users", JSON.stringify(db));
  }

  function getActiveUser() {
    const activePhone = localStorage.getItem("lth_active_user");
    if (!activePhone) return null;
    const db = getUsersDB();
    return db[activePhone] || null;
  }

  function renderTrackerDashboard() {
    const user = getActiveUser();
    if (!user) {
      if (trackerDashboard) trackerDashboard.style.display = "none";
      if (trackerRegistration) trackerRegistration.style.display = "block";
      return;
    }

    if (trackerRegistration) trackerRegistration.style.display = "none";
    if (trackerDashboard) trackerDashboard.style.display = "block";

    if (trackerUserName) trackerUserName.textContent = user.name;
    if (trackerUserEmail) trackerUserEmail.textContent = user.email;
    if (trackerUserPhone) trackerUserPhone.textContent = user.phone;

    const count = user.bookingCount || 0;
    const percentage = Math.min((count / 3) * 100, 100);
    if (trackerProgressFill) trackerProgressFill.style.width = `${percentage}%`;

    if (count >= 3) {
      if (trackerBadge) {
        trackerBadge.className = "tracker-badge verified";
        trackerBadge.innerHTML = '<i class="bi bi-patch-check-fill"></i>';
      }
      if (trackerProgressFill) trackerProgressFill.className = "progress-fill verified";
      
      if (trackerProgressText) {
        if (currentLang === "hi") {
          trackerProgressText.innerHTML = `<span style="color: #25d366; font-weight: bold;">सत्यापित ग्राहक (सफलतापूर्वक सत्यापित!)</span><br>कूपन कोड: <strong>LAKHANVIP10</strong> (१०% छूट)`;
        } else {
          trackerProgressText.innerHTML = `<span style="color: #25d366; font-weight: bold;">Verified Customer (Unlocked!)</span><br>Use Code: <strong>LAKHANVIP10</strong> (10% Off)`;
        }
      }
    } else {
      if (trackerBadge) {
        trackerBadge.className = "tracker-badge";
        trackerBadge.innerHTML = '<i class="bi bi-person-fill"></i>';
      }
      if (trackerProgressFill) trackerProgressFill.className = "progress-fill";
      
      const remaining = 3 - count;
      if (trackerProgressText) {
        if (currentLang === "hi") {
          trackerProgressText.innerHTML = `<strong>${count} / 3 बुकिंग</strong> | सत्यापित होने के लिए ${remaining} और बुकिंग की आवश्यकता है`;
        } else {
          trackerProgressText.innerHTML = `<strong>${count} / 3 Bookings</strong> | Need ${remaining} more booking(s) to verify`;
        }
      }
    }
  }

  // Expose function globally so updateLanguageUI can refresh it
  window.renderTrackerDashboard = renderTrackerDashboard;

  if (trackerRegForm) {
    trackerRegForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("trackerName").value.trim();
      const phone = document.getElementById("trackerPhone").value.trim();
      const email = document.getElementById("trackerEmail").value.trim();

      if (!name || !phone || !email) return;

      const db = getUsersDB();
      if (!db[phone]) {
        db[phone] = {
          name: name,
          phone: phone,
          email: email,
          bookingCount: 0
        };
        saveUsersDB(db);
      }

      localStorage.setItem("lth_active_user", phone);
      renderTrackerDashboard();
    });
  }

  if (btnSimulateBooking) {
    btnSimulateBooking.addEventListener("click", () => {
      const activePhone = localStorage.getItem("lth_active_user");
      if (!activePhone) return;

      const db = getUsersDB();
      if (db[activePhone]) {
        db[activePhone].bookingCount = (db[activePhone].bookingCount || 0) + 1;
        saveUsersDB(db);
        renderTrackerDashboard();
      }
    });
  }

  if (btnExitTracker) {
    btnExitTracker.addEventListener("click", () => {
      localStorage.removeItem("lth_active_user");
      renderTrackerDashboard();
    });
  }

  // Re-run tracker checker initially
  renderTrackerDashboard();
});

// Update page content based on language
function updateLanguageUI(lang) {
  document.documentElement.setAttribute("lang", lang);
  
  // Refresh tracker dashboard to apply language changes if loaded
  if (window.renderTrackerDashboard) {
    window.renderTrackerDashboard();
  }
  
  // Update translation toggle buttons UI
  const btnHi = document.getElementById("langHi");
  const btnEn = document.getElementById("langEn");
  if (lang === "hi") {
    btnHi.classList.add("active");
    btnEn.classList.remove("active");
  } else {
    btnEn.classList.add("active");
    btnHi.classList.remove("active");
  }

  // Find all elements with data-i18n
  const translatableElements = document.querySelectorAll("[data-i18n]");
  translatableElements.forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (translations[lang][key]) {
      // Check if element is an input with placeholder
      if (elem.tagName === "INPUT" || elem.tagName === "TEXTAREA") {
        elem.setAttribute("placeholder", translations[lang][key]);
      } else {
        elem.innerHTML = translations[lang][key];
      }
    }
  });
}

// Switch Language Function
function switchLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  localStorage.setItem("lth_language", lang);
  updateLanguageUI(lang);
}

import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: "💆‍♀️",
      title: "തൈലം മസാജ്",
      description: "ശാരീരികവും മാനസികമായി പുനരുജ്ജീവനം ലഭ്യമാക്കുന്ന പ്രത്യേക എണ്ണമസാജ്",
      features: ["അമ്മമാർക്കായി പ്രത്യേക രീതികൾ", "മാംസപേശി ശമനം", "വേദന കുറവ്", "ശാന്തമായ ഉറക്കം"]
    },
    {
      icon: "🥗",
      title: "ഡയറ്റ് (ആഹാരപദ്ധതി)",
      description: "ശരീര പുനർനിർമാണത്തിനും മുലയൂട്ടലിനും അനുയോജ്യമായ പോഷകാഹാര മാർഗ്ഗനിർദ്ദേശം",
      features: ["വ്യക്തിഗത പ്ലാൻ", "ആയുർവേദ അടിസ്ഥാനത്തിൽ", "ഡിറ്റോക്സ് & പോഷണം", "ദൈനംദിന മേൽനോട്ടം"]
    },
    {
      icon: "🌿",
      title: "ആയുർവേദ ചികിത്സകൾ",
      description: "ആയുർവേദശാസ്ത്രത്തിന്റെ അടിസ്ഥാനത്തിൽ സുരക്ഷിതവും ഫലപ്രദവുമായ ചികിത്സകൾ",
      features: ["പരിചയസമ്പന്നരായ വിദഗ്ധർ", "ശരീര-മനസ്സ് സാന്ത്വനം", "ഹോർമോൺ ബാലൻസ്", "ആരോഗ്യ പുനരുജ്ജീവനം"]
    },
    {
      icon: "🧘‍♀️",
      title: "യോഗ പരിശീലനം",
      description: "മൃദുവായ യോഗയും ശ്വാസ വ്യായാമങ്ങളും വഴി ശരീര-മനസ്സ് സമതുലനം",
      features: ["ശ്വാസാഭ്യാസം", "മൃദുവായ സ്‌ട്രെച്ചുകൾ"]
    },
    {
      icon: "👶",
      title: "സുരക്ഷിത പരിചരണം",
      description: "അമ്മക്കും കുഞ്ഞിനും ഒരുപോലെ സുരക്ഷിതവും കരുതലോടെയുള്ള പരിചരണം",
      features: ["24/7 മേൽനോട്ടം", "അവശ്യ സഹായം എപ്പോഴും"]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
          മാതൃത്വം ഇനി സുഖകരം — ധരിത്രി കൂടെയുണ്ട്
          </p>
        </div>

        <div className={`services-intro ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <p>
          കൂട്ടുകൂടാനൊരുങ്ങുന്ന ഓരോ മാതാവിനും പ്രസവാനന്തര കാലഘട്ടം വളരെ പ്രധാനമാണ്. ഈ സമയത്ത് ശാരീരികമായും മാനസികമായും ആവശ്യമായ വിശ്രമവും പരിചരണവും ലഭിക്കേണ്ടത് അത്യാവശ്യമാണ്. ധരിത്രി പോസ്റ്റ്നാറ്റൽ കെയർ സെൻറർ ഈ ആവശ്യത്തിനായി തന്നെ രൂപകൽപ്പന ചെയ്തതാണ്.
          </p>
          <p>
          അമ്മമാരുടെ ആരോഗ്യവും മനസ്സിന്റെ സമാധാനവും ഉറപ്പാക്കുന്നതിനായി ആയുർവേദശാസ്ത്രത്തിന്റെ അടിസ്ഥാനത്തിൽ പ്രത്യേക പരിചരണ രീതികളാണ് ഇവിടെ സ്വീകരിക്കുന്നത്. പരിചയസമ്പന്നരായ വിദഗ്ധർ നയിക്കുന്ന ചികിത്സയും തൈലം മസാജും വഴി ശരീരത്തിനും മനസ്സിനും പുനരുജ്ജീവനം നൽകുകയാണ് ഞങ്ങളുടെ ലക്ഷ്യം.
          </p>
          <p>
          ഇതിലൂടെ അമ്മമാർക്ക് പൂർണ്ണമായ വിശ്രമം, ആരോഗ്യവും, ആത്മവിശ്വാസവും ലഭ്യമാക്കുന്നു.
          </p>

          <div className="services-highlights">
            <h4>സേവനങ്ങളുടെ പ്രത്യേകതകൾ</h4>
          </div>
        </div>
        
        <div className={`services-grid ${isVisible ? 'animate-fadeInUp' : ''}`}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

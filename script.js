const { useState, useEffect, useRef } = React;

const DATA = {
  name: "Nishant Kumar",
  title: "Full Stack Developer / ML Engineer",
  tagline: "Building intelligent systems at the intersection of machine learning, data science, and full-stack engineering.",
  email: "nishantkrguddu77@gmail.com",
  phone: "+91 9931518514",
  linkedin: "https://www.linkedin.com/in/nishantkumar02/",
  github: "https://github.com/NISHANTKUMAR2004",
  resume: "https://drive.google.com/file/d/your-resume-link/view", // Add your resume link here
  services: [
    { icon: "🤖", title: "Machine Learning", desc: "Developing predictive models and AI solutions using Python, Scikit-learn, and deep learning frameworks." },
    { icon: "📊", title: "Data Analysis", desc: "Analyzing complex datasets, uncovering insights, and creating visualizations with Pandas and Matplotlib." },
    { icon: "💻", title: "Full Stack Development", desc: "Building scalable web applications with React, Node.js, and modern backend technologies." },
    { icon: "🔧", title: "API Development", desc: "Designing RESTful APIs and microservices for seamless data integration and communication." }
  ],
  projects: [
    {
      emoji: "🧠", title: "Rainfall Pattern Analysis", date: "NOV 2025",
      desc: "ML system for analyzing rainfall patterns using clustering algorithms. Processed historical climate data to identify patterns and predict weather trends.",
      tags: ["Python","Scikit-learn","Pandas","Matplotlib","Jupyter"],
      color: "linear-gradient(135deg,rgba(124,58,237,.12),rgba(99,102,241,.1))",
      badgeColor: "#7c3aed", badgeBg: "rgba(124,58,237,.1)",
      github: "https://github.com/NISHANTKUMAR2004",
    },
    {
      emoji: "🚨", title: "ReliefSync", date: "JAN 2026",
      desc: "AI-powered disaster response platform with real-time resource allocation and coordination using ML algorithms for optimization.",
      tags: ["React.js","Node.js","Express.js","PostgreSQL","JWT"],
      color: "linear-gradient(135deg,rgba(236,72,153,.1),rgba(251,113,133,.08))",
      badgeColor: "#ec4899", badgeBg: "rgba(236,72,153,.1)",
      github: "https://github.com/NISHANTKUMAR2004",
    },
    {
      emoji: "⚡", title: "Next ML Project", date: "UPCOMING",
      desc: "Currently developing advanced ML models combining computer vision and natural language processing for intelligent automation.",
      tags: ["Coming Soon"],
      color: "linear-gradient(135deg,rgba(249,115,22,.1),rgba(234,179,8,.08))",
      badgeColor: "#f97316", badgeBg: "rgba(249,115,22,.1)",
      github: "https://github.com/NISHANTKUMAR2004",
    }
  ],
  certs: [
    { icon:"🤖", org:"ORACLE", title:"Generative AI Professional", date:"Sept 2025", color:"#f97316", bg:"rgba(249,115,22,.1)" },
    { icon:"🌐", org:"GOOGLE", title:"Bits and Bytes of Computer Networking", date:"Apr 2024", color:"#4285f4", bg:"rgba(66,133,244,.1)" },
    { icon:"🖥️", org:"IBM", title:"Introduction to Hardware & Operating Systems", date:"Aug 2024", color:"#0062ff", bg:"rgba(0,98,255,.1)" },
    { icon:"📡", org:"UNIV. OF COLORADO", title:"Fundamentals of Network Communication", date:"Nov 2024", color:"#f59e0b", bg:"rgba(245,158,11,.1)" },
    { icon:"🧠", org:"COURSERA", title:"Machine Learning by Andrew Ng", date:"Dec 2024", color:"#7c3aed", bg:"rgba(124,58,237,.1)" },
    { icon:"📊", org:"UDEMY", title:"Python for Data Science", date:"Jan 2025", color:"#ec4899", bg:"rgba(236,72,153,.1)" },
  ],
  skillGroups: [
    { label:"ML/AI", icon:"🧠", color:"#7c3aed", items:["Scikit-learn","TensorFlow","Pandas","NumPy","Generative AI"] },
    { label:"Languages", icon:"⚙️", color:"#ec4899", items:["Python","C++","Java","JavaScript","SQL"] },
    { label:"Frontend", icon:"🎨", color:"#f97316", items:["React.js","HTML5","CSS3","JavaScript (ES6+)"] },
    { label:"Backend", icon:"🔧", color:"#06b6d4", items:["Node.js","Express.js","RESTful APIs","JWT Auth"] },
    { label:"Database", icon:"🗄️", color:"#f59e0b", items:["MySQL","PostgreSQL","MongoDB"] },
    { label:"Tools", icon:"🛠️", color:"#10b981", items:["Git / GitHub","Jupyter","VS Code","Linux"] },
  ],
  timeline: [
    { icon:"🎓", color:"rgba(124,58,237,.15)", dateColor:"#7c3aed", date:"AUG 2023 – PRESENT", title:"B.Tech Computer Science Engineering", org:"Lovely Professional University, Phagwara", orgColor:"#7c3aed", detail:"CGPA: 8.77 — Specializing in ML, DSA, and full-stack development." },
    { icon:"💼", color:"rgba(236,72,153,.12)", dateColor:"#ec4899", date:"JUN 2025 – JUL 2025", title:"Training — DSA with C++", org:"Center of Professional Enhancement, LPU", orgColor:"#ec4899", detail:"Intensive problem solving in algorithms and data structures." },
    { icon:"📐", color:"rgba(249,115,22,.12)", dateColor:"#f97316", date:"MAR 2022 – MAY 2023", title:"Intermediate (PCM) — 82%", org:"B.B.M College, Jehanabad, Bihar", orgColor:"#f97316", detail:"Strong foundation in Mathematics and Physics." },
    { icon:"🏫", color:"rgba(245,158,11,.12)", dateColor:"#f59e0b", date:"MAR 2019 – MAY 2020", title:"Matriculation — 94.8%", org:"D.A.V School, Patna, Bihar", orgColor:"#f59e0b", detail:"Exceptional academic performance." },
  ],
  achievements: [
    { num:"500+", label:"DSA Problems", sub:"GeeksForGeeks", color:"#7c3aed" },
    { num:"3★", label:"HackerRank", sub:"Problem Solving", color:"#ec4899" },
    { num:"8.77", label:"CGPA", sub:"LPU Engineering", color:"#f97316" },
    { num:"94.8%", label:"Matriculation", sub:"D.A.V School", color:"#f59e0b" },
  ]
};

function SkillBar({ label, pct, color }) {
  const ref = useRef(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) setW(pct); }, { threshold: .2 });
    if(ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="skill-row" ref={ref}>
      <div className="skill-label">
        <span style={{color:'#e2e8f0'}}>{label}</span>
        <span style={{fontFamily:'JetBrains Mono',fontSize:'12px',color}}>{pct}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{width:w+'%',background:`linear-gradient(90deg,${color},${color}88)`}}/>
      </div>
    </div>
  );
}

function Reveal({ children, delay=0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if(e.isIntersecting) { setTimeout(() => { if(ref.current) ref.current.classList.add('vis'); }, delay); }
    }, { threshold:.1 });
    if(ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return <div className="reveal" ref={ref}>{children}</div>;
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">NK/</div>
      <ul className="nav-links">
        {[['About','#about'],['Resume','#resume'],['Projects','#projects'],['Skills','#skills'],['Experience','#experience'],['Contact','#contact']].map(([l,h]) =>
          <li key={l}><a href={h}>{l}</a></li>
        )}
      </ul>
    </nav>
  );
}

function Hero() {
  const floats = [
    {t:'Python',s:{top:'20%',left:'5%'},d:0},
    {t:'TensorFlow',s:{top:'28%',right:'6%'},d:0.4},
    {t:'React.js',s:{bottom:'30%',left:'8%'},d:0.8},
    {t:'Scikit-learn',s:{bottom:'22%',right:'9%'},d:1.2},
    {t:'Node.js',s:{top:'55%',left:'3%'},d:1.6},
    {t:'ML/AI',s:{top:'16%',right:'16%'},d:2.0},
  ];
  return (
    <section id="hero" className="hero">
      <div style={{position:'relative',zIndex:2,maxWidth:'860px',margin:'0 auto'}}>
        <img src="profile.jpg" alt="Nishant Kumar" className="hero-image" />
        <div className="hero-pill"><div className="hero-pill-dot"/>&nbsp;Available for ML Projects</div>
        <h1 className="hero-name">
          <div className="line1">Nishant</div>
          <div className="line2">Kumar</div>
        </h1>
        <p className="hero-sub">Full Stack Developer &nbsp;·&nbsp; ML Engineer &nbsp;·&nbsp; CSE @ LPU</p>
        <p className="hero-tag">{DATA.tagline}</p>
        <div style={{display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
          <a href="#projects" className="btn-primary">View ML Projects →</a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
        </div>
        {floats.map(({t,s,d}) => (
          <div key={t} style={{...s,position:'absolute',padding:'6px 14px',borderRadius:'100px',border:'1px solid rgba(0,0,0,.08)',background:'rgba(255,255,255,.65)',backdropFilter:'blur(12px)',fontSize:'12px',fontWeight:'600',color:'#94a3b8',animation:`float-t ${5.5+d*.7}s ease-in-out ${d}s infinite alternate`}}>
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="sec">
      <div className="sec-inner">
        <Reveal>
          <div className="about-grid">
            <div>
              <div className="avatar-card">
                <div className="avatar-initials">NK</div>
                <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 40% 30%,rgba(124,58,237,.15),transparent 70%)'}}/>
              </div>
              <div style={{display:'flex',gap:'12px',marginTop:'20px',flexWrap:'wrap'}}>
                <a href={DATA.linkedin} target="_blank" className="social-link">LinkedIn</a>
                <a href={DATA.github} target="_blank" className="social-link">GitHub</a>
                <a href={`mailto:${DATA.email}`} className="social-link">Email</a>
              </div>
              <div style={{display:'flex',gap:'12px',marginTop:'18px',flexWrap:'wrap'}}>
                {[{n:'8.77',l:'CGPA',c:'#7c3aed'},{n:'500+',l:'DSA',c:'#ec4899'},{n:'6',l:'Certs',c:'#f97316'}].map(({n,l,c})=>(
                  <div key={l} className="stat-chip">
                    <div className="stat-num" style={{color:c}}>{n}</div>
                    <div style={{fontSize:'10px',color:'#94a3b8',letterSpacing:'.1em',marginTop:'3px'}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="sec-label">01 — About Me</div>
              <h2 className="sec-title">Crafting intelligent <span className="grad-text">systems.</span></h2>
              <p style={{color:'#cbd5e1',lineHeight:'1.8',marginBottom:'32px',fontSize:'16px'}}>
                CSE student at Lovely Professional University (CGPA: 8.77) with a passion for building ML-powered applications and full-stack systems. From training neural networks to architecting scalable APIs, I bridge the gap between AI and software engineering.
              </p>
              <SkillBar label="Machine Learning" pct={85} color="#7c3aed"/>
              <SkillBar label="Data Structures & Algorithms" pct={88} color="#ec4899"/>
              <SkillBar label="Full Stack Development" pct={82} color="#f97316"/>
              <SkillBar label="Database Design" pct={80} color="#06b6d4"/>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="sec" style={{background:'rgba(15,23,42,.3)',backdropFilter:'blur(4px)'}}>
      <div className="sec-inner">
        <Reveal>
          <div style={{textAlign:'center',marginBottom:'48px'}}>
            <div className="sec-label" style={{justifyContent:'center'}}>02 — Resume</div>
            <h2 className="sec-title">Download My <span className="grad-text">Resume.</span></h2>
            <p style={{color:'#cbd5e1',fontSize:'16px',maxWidth:'440px',margin:'0 auto',lineHeight:'1.7'}}>Get a detailed overview of my ML expertise, projects, and development experience.</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div style={{display:'flex',justifyContent:'center'}}>
            <a href={DATA.resume} target="_blank" className="btn-primary" style={{fontSize:'16px',padding:'16px 32px'}}>Download Resume 📄</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="sec">
      <div className="sec-inner">
        <Reveal>
          <div style={{textAlign:'center',marginBottom:'48px'}}>
            <div className="sec-label" style={{justifyContent:'center'}}>03 — Services</div>
            <h2 className="sec-title">What I <span className="grad-text">Offer.</span></h2>
            <p style={{color:'#cbd5e1',fontSize:'16px',maxWidth:'440px',margin:'0 auto',lineHeight:'1.7'}}>Specialized services combining ML expertise with full-stack development.</p>
          </div>
        </Reveal>
        <div className="proj-grid">
          {DATA.services.map((s,i) => (
            <Reveal key={s.title} delay={i*120}>
              <div className="proj-card" style={{textAlign:'center'}}>
                <div className="proj-hero" style={{background:'linear-gradient(135deg,rgba(124,58,237,.12),rgba(236,72,153,.1))'}}>
                  <span style={{fontSize:'60px'}}>{s.icon}</span>
                </div>
                <div className="proj-body">
                  <h3 style={{fontSize:'20px',fontWeight:'700',marginBottom:'8px',color:'#e2e8f0'}}>{s.title}</h3>
                  <p style={{color:'#cbd5e1',fontSize:'14px',lineHeight:'1.7'}}>{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="sec" style={{background:'rgba(15,23,42,.3)',backdropFilter:'blur(4px)'}}>
      <div className="sec-inner">
        <Reveal>
          <div style={{marginBottom:'52px'}}>
            <div className="sec-label">04 — Projects</div>
            <h2 className="sec-title">ML & Development <span className="grad-text">Projects.</span></h2>
          </div>
        </Reveal>
        <div className="proj-grid">
          {DATA.projects.map((p,i) => (
            <Reveal key={p.title} delay={i*120}>
              <div className="proj-card">
                <div className="proj-hero" style={{background:p.color}}>
                  <span>{p.emoji}</span>
                  <div className="proj-badge" style={{color:p.badgeColor,background:p.badgeBg}}>{p.date}</div>
                </div>
                <div className="proj-body">
                  <h3 style={{fontSize:'20px',fontWeight:'700',marginBottom:'8px',color:'#e2e8f0'}}>{p.title}</h3>
                  <p style={{color:'#cbd5e1',fontSize:'14px',lineHeight:'1.7',marginBottom:'16px'}}>{p.desc}</p>
                  <div style={{marginBottom:'20px'}}>{p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}</div>
                  <div style={{display:'flex',gap:'10px'}}>
                    <a href={p.github} target="_blank" className="btn-ghost" style={{fontSize:'11px',padding:'9px 18px'}}>GitHub →</a>
                    <a href="#" className="social-link" style={{fontSize:'11px',padding:'9px 18px'}}>Live Demo</a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="sec">
      <div className="sec-inner">
        <Reveal>
          <div style={{marginBottom:'44px'}}>
            <div className="sec-label">05 — Certifications</div>
            <h2 className="sec-title">Credentials & <span className="grad-text">Learning.</span></h2>
          </div>
        </Reveal>
        <div className="cert-scroll">
          {DATA.certs.map(c => (
            <div key={c.title} className="cert-card">
              <div className="cert-icon" style={{background:c.bg,border:`1px solid ${c.color}30`}}>{c.icon}</div>
              <div style={{fontFamily:'JetBrains Mono',fontSize:'9px',letterSpacing:'.2em',color:c.color,marginBottom:'7px',fontWeight:600}}>{c.org}</div>
              <h4 style={{fontSize:'15px',fontWeight:'700',marginBottom:'6px',lineHeight:'1.4',color:'#e2e8f0'}}>{c.title}</h4>
              <div style={{fontSize:'12px',color:'#94a3b8',marginBottom:'16px'}}>{c.date}</div>
              <a href="#" className="btn-ghost" style={{fontSize:'10px',padding:'7px 16px',color:c.color,borderColor:`${c.color}30`}}>Verify →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="sec" style={{background:'rgba(15,23,42,.3)'}}>
      <div className="sec-inner">
        <Reveal>
          <div style={{marginBottom:'52px'}}>
            <div className="sec-label">06 — Skills</div>
            <h2 className="sec-title">Tech Arsenal & <span className="grad-text">Expertise.</span></h2>
          </div>
        </Reveal>
        <div className="skills-grid">
          {DATA.skillGroups.map((g,i) => (
            <Reveal key={g.label} delay={i*80}>
              <div className="skill-group">
                <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'20px'}}>
                  <span style={{fontSize:'22px'}}>{g.icon}</span>
                  <div>
                    <div style={{fontFamily:'JetBrains Mono',fontSize:'9px',letterSpacing:'.2em',color:g.color,marginBottom:'2px',fontWeight:600}}>{g.label.toUpperCase()}</div>
                    <div style={{fontSize:'14px',fontWeight:'700',color:'#e2e8f0'}}>{g.label}</div>
                  </div>
                </div>
                {g.items.map(s => (
                  <div key={s} className="chip">
                    <div className="chip-dot" style={{background:g.color,boxShadow:`0 0 5px ${g.color}60`}}/>
                    {s}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const refs = useRef([]);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('vis'); });
    }, {threshold:.18});
    refs.current.forEach(r => { if(r) obs.observe(r); });
    return () => obs.disconnect();
  }, []);
  return (
    <section id="experience" className="sec">
      <div className="sec-inner">
        <Reveal>
          <div style={{marginBottom:'52px'}}>
            <div className="sec-label">07 — Experience & Education</div>
            <h2 className="sec-title">The journey <span className="grad-text">so far.</span></h2>
          </div>
        </Reveal>
        <div className="timeline">
          {DATA.timeline.map((t,i) => (
            <div key={t.title} className="tl-item" ref={el => refs.current[i]=el} style={{transitionDelay:i*.1+'s'}}>
              <div className="tl-dot" style={{background:t.color}}>{t.icon}</div>
              <div className="tl-card">
                <div style={{fontFamily:'JetBrains Mono',fontSize:'9px',letterSpacing:'.15em',color:t.dateColor,marginBottom:'7px',fontWeight:600}}>{t.date}</div>
                <h3 style={{fontSize:'18px',fontWeight:'700',marginBottom:'5px',color:'#e2e8f0'}}>{t.title}</h3>
                <p style={{color:t.orgColor,fontSize:'13px',fontWeight:'600',marginBottom:'8px'}}>{t.org}</p>
                <p style={{color:'#cbd5e1',fontSize:'14px',lineHeight:'1.7'}}>{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="sec" style={{background:'rgba(15,23,42,.3)',padding:'60px 40px'}}>
      <div className="sec-inner">
        <Reveal>
          <div style={{marginBottom:'40px'}}>
            <div className="sec-label">08 — Achievements</div>
            <h2 className="sec-title">Milestones & <span className="grad-text">Rankings.</span></h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="ach-grid">
            {DATA.achievements.map(a => (
              <div key={a.label} className="ach-card">
                <div className="ach-num" style={{color:a.color}}>{a.num}</div>
                <div style={{fontWeight:'700',fontSize:'14px',marginBottom:'4px',color:'#e2e8f0'}}>{a.label}</div>
                <div style={{fontSize:'12px',color:'#94a3b8'}}>{a.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="sec">
      <div className="sec-inner">
        <Reveal>
          <div style={{textAlign:'center',marginBottom:'48px'}}>
            <div className="sec-label" style={{justifyContent:'center'}}>09 — Contact</div>
            <h2 className="sec-title">Let's build <span className="grad-text">something.</span></h2>
            <p style={{color:'#cbd5e1',fontSize:'16px',maxWidth:'440px',margin:'0 auto',lineHeight:'1.7'}}>Have a project, opportunity, or just want to connect? My inbox is always open.</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="contact-card">
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
              <div className="input-wrap"><label>Name</label><input type="text" placeholder="Your name"/></div>
              <div className="input-wrap"><label>Email</label><input type="email" placeholder="you@example.com"/></div>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
              <div className="input-wrap"><label>Phone</label><input type="tel" placeholder="+1 (555) 123-4567"/></div>
              <div className="input-wrap"><label>Subject</label><input type="text" placeholder="Opportunity / Collaboration / Hello"/></div>
            </div>
            <div className="input-wrap"><label>Message</label><textarea rows="5" placeholder="Tell me about what you're building..."/></div>
            <div style={{display:'flex',gap:'14px',alignItems:'center',flexWrap:'wrap',marginTop:'4px'}}>
              <button onClick={()=>{setSent(true);setTimeout(()=>setSent(false),3000);}} className="btn-primary" style={{border:'none'}}>
                {sent ? 'Sent! ✓' : 'Send Message →'}
              </button>
              <a href={`mailto:${DATA.email}`} className="btn-ghost">{DATA.email}</a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div style={{display:'flex',gap:'12px',flexWrap:'wrap',justifyContent:'center',marginTop:'28px'}}>
            <a href={DATA.linkedin} target="_blank" className="social-link">LinkedIn</a>
            <a href={DATA.github} target="_blank" className="social-link">GitHub</a>
            <a href={`mailto:${DATA.email}`} className="social-link">Email</a>
            <a href={`tel:${DATA.phone}`} className="social-link">{DATA.phone}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-copy">© 2026 Nishant Kumar — Built with React & passion.</div>
      <div style={{display:'flex',gap:'10px'}}>
        <a href={DATA.linkedin} target="_blank" className="social-link" style={{padding:'7px 14px',fontSize:'11px'}}>LinkedIn</a>
        <a href={DATA.github} target="_blank" className="social-link" style={{padding:'7px 14px',fontSize:'11px'}}>GitHub</a>
        <a href={`mailto:${DATA.email}`} className="social-link" style={{padding:'7px 14px',fontSize:'11px'}}>Email</a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Resume/>
      <Services/>
      <Projects/>
      <Certificates/>
      <Skills/>
      <Experience/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

/* Custom cursor */
const dot = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx=0, my=0, rx=0, ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
(function animate() {
  dot.style.transform = `translate(${mx-5}px,${my-5}px)`;
  rx += (mx-rx) * .13;
  ry += (my-ry) * .13;
  ring.style.transform = `translate(${rx-16}px,${ry-16}px)`;
  requestAnimationFrame(animate);
})();

/* Progress bar */
window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.querySelector('.progress-fill').style.width = scrolled + '%';
});

/* Back to top */
const backTop = document.createElement('button');
backTop.className = 'btn-back-top';
backTop.innerHTML = '↑';
backTop.onclick = () => window.scrollTo({top:0, behavior:'smooth'});
document.body.appendChild(backTop);
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) backTop.classList.add('show');
  else backTop.classList.remove('show');
});

/* Loader */
(function(){
  const fill = document.getElementById('lfill');
  const txt = document.getElementById('ltxt');
  const loader = document.getElementById('loader');
  const stages = ['LOADING','PAINTING AURORA','BUILDING COMPONENTS','READY'];
  let p = 0;
  const iv = setInterval(() => {
    p += Math.random()*14 + 5;
    if(p > 100) p = 100;
    fill.style.width = p + '%';
    txt.textContent = stages[Math.min(Math.floor(p/34), 3)];
    if(p >= 100) {
      clearInterval(iv);
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        setTimeout(() => loader.remove(), 700);
      }, 350);
    }
  }, 90);
})();
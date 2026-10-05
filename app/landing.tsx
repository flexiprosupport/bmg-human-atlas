import {Activity,ArrowRight,BookOpen,Brain,Check,Compass,Expand,Heart,Layers3,Menu,Search,SunMoon,Users,X} from 'lucide-react';
import {useEffect,useState} from 'react';

interface LandingPageProps {onOpenExplorer:()=>void}
type LandingSection='features'|'education'|'about';

const systems=[['Muscular','muscular'],['Skeletal','skeletal'],['Nervous','nervous'],['Circulatory','circulatory'],['Respiratory','respiratory'],['Digestive','digestive'],['Urinary','urinary']] as const;
const sectionContent={
 features:{eyebrow:'WHAT YOU CAN DO',title:'Explore every layer',lead:'BMG Atlas makes detailed anatomy easier to explore with interactive tools built into the 3D viewer.',items:[{icon:Compass,title:'Orbit and zoom',text:'Rotate the body, zoom in for detail, and reset the camera at any time.'},{icon:Layers3,title:'Explore body systems',text:'Show or hide anatomical systems, or start with the skeleton and organ presets.'},{icon:Search,title:'Find structures',text:'Search anatomical names and reference identifiers, then jump to matching structures.'},{icon:Expand,title:'Explode the anatomy',text:'Separate visible structures into a spacious inventory and inspect individual pieces.'},{icon:Users,title:'Male and female references',text:'Switch between the available reference models in the same explorer.'},{icon:SunMoon,title:'Choose a theme',text:'Switch between dark and light appearance in the explorer.'}]},
 education:{eyebrow:'LEARN WITH THE ATLAS',title:'A hands-on anatomy reference',lead:'Use the 3D model to connect names, body systems, and spatial relationships as you explore.',items:[{icon:BookOpen,title:'Start with a system',text:'Choose a system such as skeletal, muscular, or respiratory to focus the view.'},{icon:Search,title:'Look up a structure',text:'Search a familiar name, select a result, and read its overview in the details panel.'},{icon:Expand,title:'Compare layers',text:'Hide surrounding systems or isolate a structure to see its position more clearly.'},{icon:Check,title:'Know its limits',text:'This is an educational reference. Coverage differs between models and it is not for diagnosis or treatment.'}]},
 about:{eyebrow:'ABOUT BMG ATLAS',title:'Human anatomy, explored in 3D',lead:'BMG Atlas is an interactive anatomy viewer for learners, educators, and curious minds.',items:[{icon:Activity,title:'Built for exploration',text:'Inspect a 3D anatomy reference, move around the model, and examine structures one at a time.'},{icon:Layers3,title:'One viewer, multiple layers',text:'Switch references, work with anatomical systems, and search named structures from the same interface.'},{icon:Heart,title:'Educational purpose',text:'The atlas supports visual learning and general exploration. It is not a diagnostic or surgical tool.'},{icon:Users,title:'Support',text:'Questions or feedback? Reach BMG Atlas support on Telegram at @BMG009.'}]}
} satisfies Record<LandingSection,{eyebrow:string;title:string;lead:string;items:{icon:typeof Activity;title:string;text:string}[]}>;

export default function LandingPage({onOpenExplorer}:LandingPageProps){
 const [section,setSection]=useState<LandingSection|null>(null),[mobileMenuOpen,setMobileMenuOpen]=useState(false);
 useEffect(()=>{if(!section)return;const close=(event:KeyboardEvent)=>{if(event.key==='Escape')setSection(null);};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close);},[section]);
 const enterExplorer=()=>{setSection(null);setMobileMenuOpen(false);onOpenExplorer();};
 const showSection=(next:LandingSection)=>{setSection(next);setMobileMenuOpen(false);};
 return <div className="landing-home">
  <header className="landing-header">
   <a className="landing-brand" href="/" aria-label="BMG Atlas home"><span className="landing-logo-crop"><img src="/bmg-atlas-logo.png" alt=""/></span><span>BMG Atlas</span></a>
   <nav className="landing-nav" aria-label="Main navigation"><button type="button" onClick={()=>showSection('features')}>Features</button><button type="button" onClick={enterExplorer}>Anatomy</button><button type="button" onClick={()=>showSection('education')}>Education</button><button type="button" onClick={()=>showSection('about')}>About</button></nav>
   <button type="button" className="landing-mobile-menu-toggle" aria-label={mobileMenuOpen?'Close navigation':'Open navigation'} aria-expanded={mobileMenuOpen} onClick={()=>setMobileMenuOpen(open=>!open)}>{mobileMenuOpen?<X size={19}/>:<Menu size={19}/>}</button>
   <button type="button" className="landing-cta landing-cta-small" onClick={enterExplorer}>Get Started <ArrowRight size={17}/></button>
  </header>
  {mobileMenuOpen&&<nav className="landing-mobile-menu" aria-label="Main navigation"><button type="button" onClick={()=>showSection('features')}>Features</button><button type="button" onClick={enterExplorer}>Anatomy</button><button type="button" onClick={()=>showSection('education')}>Education</button><button type="button" onClick={()=>showSection('about')}>About</button></nav>}
  <section className="landing-hero" aria-labelledby="landing-title">
   <div className="landing-copy">
    <div className="landing-overline"><span/> INTERACTIVE ANATOMY</div>
    <h1 id="landing-title"><span>BMG</span> Atlas</h1>
    <p className="landing-subtitle">Explore human anatomy in 3D</p>
    <p className="landing-description"><span className="desktop-description">A detailed anatomy explorer for learners, educators, and curious minds. Discover the human body one structure at a time.</span><span className="mobile-description">Explore human anatomy structure by structure.</span></p>
    <div className="landing-actions"><button type="button" className="landing-cta" onClick={enterExplorer}>Get Started <ArrowRight size={18}/></button><button type="button" className="landing-cta-secondary" onClick={enterExplorer}>Explore Anatomy</button></div>
   </div>
   <div className="landing-orbit" aria-hidden="true"/>
   <aside className="landing-systems" aria-label="Anatomical systems preview"><h2>Systems</h2>{systems.map(([name,key],i)=><div className={`landing-system-row ${i===0?'selected':''}`} key={key}><span className="landing-system-icon">{i===0?<Activity size={16}/>:i===1?<Layers3 size={16}/>:i===2?<Brain size={16}/>:<Heart size={16}/>}</span><span>{name}</span></div>)}</aside>
  </section>
  <div className="landing-features" id="features">
   <div><span className="landing-feature-icon"><Activity size={22}/></span><strong>Interactive 3D</strong><small>Explore every detail</small></div>
   <div><span className="landing-feature-icon"><Layers3 size={22}/></span><strong>Multiple Systems</strong><small>Study layer by layer</small></div>
   <div id="education"><span className="landing-feature-icon"><Brain size={22}/></span><strong>Built for Learning</strong><small>A deeper understanding</small></div>
  </div>
  <div className="landing-about" id="about">An educational anatomy explorer · Not for diagnosis or treatment</div>
  <div className="landing-floating-tools" aria-label="Support">
   <a className="landing-telegram" href="https://t.me/BMG009" target="_blank" rel="noreferrer" aria-label="Contact BMG Atlas support on Telegram at @BMG009"><svg className="telegram-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"/><path d="m18.35 6.75-2.2 10.38c-.16.74-.6.92-1.22.57l-3.38-2.49-1.63 1.57c-.18.18-.33.33-.67.33l.24-3.43 6.25-5.65c.27-.24-.06-.38-.43-.14l-7.73 4.87-3.33-1.04c-.72-.23-.73-.72.15-1.07l13.01-5.02c.6-.22 1.13.15.94 1.12Z"/></svg></a>
  </div>
  {section&&<div className="landing-section-backdrop" onClick={()=>setSection(null)}><section className="landing-section-dialog" role="dialog" aria-modal="true" aria-labelledby="landing-section-title" onClick={event=>event.stopPropagation()}><button type="button" className="landing-section-close" onClick={()=>setSection(null)} aria-label="Close section"><X size={20}/></button><div className="landing-section-eyebrow"><span/>{sectionContent[section].eyebrow}</div><h2 id="landing-section-title">{sectionContent[section].title}</h2><p className="landing-section-lead">{sectionContent[section].lead}</p><div className={`landing-section-items ${section}`}>
   {sectionContent[section].items.map(({icon:Icon,title,text})=><article className="landing-section-item" key={title}><span className="landing-section-item-icon"><Icon size={20}/></span><div><h3>{title}</h3><p>{text}</p></div></article>)}
  </div><div className="landing-section-actions"><button type="button" className="landing-cta" onClick={enterExplorer}>Open anatomy explorer <ArrowRight size={17}/></button>{section==='about'&&<a href="https://t.me/BMG009" target="_blank" rel="noreferrer">Contact support on Telegram</a>}</div></section></div>}
 </div>;
}

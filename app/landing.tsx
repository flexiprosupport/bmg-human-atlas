import {Activity,ArrowRight,Brain,Heart,Layers3,RotateCcw,ZoomIn,ZoomOut} from 'lucide-react';

interface LandingPageProps {onOpenExplorer:()=>void;onZoomIn:()=>void;onZoomOut:()=>void;onReset:()=>void}

const systems=[['Muscular','muscular'],['Skeletal','skeletal'],['Nervous','nervous'],['Circulatory','circulatory'],['Respiratory','respiratory'],['Digestive','digestive'],['Urinary','urinary']] as const;

export default function LandingPage({onOpenExplorer,onZoomIn,onZoomOut,onReset}:LandingPageProps){
 return <div className="landing-home">
  <header className="landing-header">
   <a className="landing-brand" href="/" aria-label="BMG Atlas home"><span className="landing-logo-crop"><img src="/bmg-atlas-logo.png" alt=""/></span><span>BMG Atlas</span></a>
   <nav className="landing-nav" aria-label="Main navigation"><a href="#features">Features</a><button type="button" onClick={onOpenExplorer}>Anatomy</button><a href="#education">Education</a><a href="#about">About</a></nav>
   <button type="button" className="landing-cta landing-cta-small" onClick={onOpenExplorer}>Get Started <ArrowRight size={17}/></button>
  </header>
  <section className="landing-hero" aria-labelledby="landing-title">
   <div className="landing-copy">
    <div className="landing-overline"><span/> INTERACTIVE ANATOMY</div>
    <h1 id="landing-title"><span>BMG</span> Atlas</h1>
    <p className="landing-subtitle">Explore human anatomy in 3D</p>
    <p className="landing-description">A detailed anatomy explorer for learners, educators, and curious minds. Discover the human body one structure at a time.</p>
    <div className="landing-actions"><button type="button" className="landing-cta" onClick={onOpenExplorer}>Get Started <ArrowRight size={18}/></button><button type="button" className="landing-cta-secondary" onClick={onOpenExplorer}>Explore Anatomy</button></div>
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
  <div className="landing-floating-tools" aria-label="Viewer tools">
   <div className="landing-zoom-controls"><button type="button" onClick={onZoomIn} aria-label="Zoom in"><ZoomIn size={20}/></button><button type="button" onClick={onZoomOut} aria-label="Zoom out"><ZoomOut size={20}/></button><button type="button" onClick={onReset} aria-label="Reset view"><RotateCcw size={18}/></button></div>
   <a className="landing-telegram" href="https://t.me/BMG009" target="_blank" rel="noreferrer" aria-label="Contact BMG Atlas support on Telegram at @BMG009"><svg className="telegram-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"/><path d="m18.35 6.75-2.2 10.38c-.16.74-.6.92-1.22.57l-3.38-2.49-1.63 1.57c-.18.18-.33.33-.67.33l.24-3.43 6.25-5.65c.27-.24-.06-.38-.43-.14l-7.73 4.87-3.33-1.04c-.72-.23-.73-.72.15-1.07l13.01-5.02c.6-.22 1.13.15.94 1.12Z"/></svg></a>
  </div>
 </div>;
}

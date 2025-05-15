import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button} from "@/components/button";
import Navbar from "@/components/Navbar";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   return (
    <>
    <Navbar/>
    <main className="font-sans">
      {/* Hero Section */}
      {/* <section className="relative h-screen text-white flex items-center justify-center text-center">
        <img
          src="/hero-background.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="z-10 bg-black bg-opacity-60 p-8 rounded-xl">
          <h1 className="text-5xl font-bold">NeuroScelte</h1>
          <p className="text-xl mt-4">Scopri come il tuo cervello influenza le decisioni di acquisto</p>
          <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">Inizia ora</button>
        </div>
      </section> */}
<section className="relative h-screen text-white flex items-center justify-center text-center ">
   <section className="absolute inset-0 w-full h-full overflow-hidden bg-gray-300">
   <motion.div
      className="absolute top-0 left-0 w-full h-full flex over flow-hidden"
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {/* Ripetizione della stessa immagine */}
    {[...Array(3)].map((_, index) => (
      <img
        key={index}
        src="/hero-image.svg"
        alt={`Hero  ${index + 1}`}
        className="w-full h-full object-cover flex-shrink-0"
      />
    ))}
  </motion.div> 
  </section>   
 
  <div className=" relative z-10 flex flex-col items-center justify-center h-full text-center ">
    <h1 className="text-white text-5xl font-bold"
  style={{
    WebkitTextStroke: "0.5px orange", // Bordo nero di 2px
    color: "white", // Colore interno del testo
  }}
>
  NeuroScelte</h1>
    <p className="text-white text-xl mt-4 font-semibold"
    style={{
    WebkitTextStroke: "0.25px orange", // Bordo nero di 2px
    color: "white",
    fontSize:18, // Colore interno del testo
  }}>
      Scopri come il tuo cervello influenza le decisioni di acquisto
    </p>
    <Button className="text-white mt-8 bg-orange-500 hover:bg-orange-600"
    onClick={() => {
      const section = document.getElementById("intro");
      section?.scrollIntoView({ behavior: "smooth" });
    }}
  >
      Inizia ora
    </Button>
  </div>
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white z-10" />
</section>

      {/* Cos'è il Neuromarketing */}
        <section id="intro" className="py-20 px-6 bg-white text-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Cos'è il Neuromarketing?</h2>
            <p className="text-lg leading-relaxed">
              Il neuromarketing è una disciplina che unisce neuroscienze, psicologia e marketing per analizzare come il cervello risponde a stimoli legati a pubblicità, packaging e branding. Comprendere queste risposte consente alle aziende di ottimizzare le proprie strategie comunicative, basandosi su ciò che cattura l’attenzione e genera emozione nei consumatori.
            </p>
            <img src="/brain-diagram.svg" alt="Schema cervello" className="mt-8 w-full max-w-md mx-auto" />
          </div>
        </section>
        
      {/* Come funziona il cervello */}
      <section className="py-20 px-6 bg-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <img src="/tre-cervelli-neuromarketing.png" alt="Funzionamento cervello" className="w-full" />
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
            <h2 className="text-black text-3xl font-semibold mb-4">Le 3 parti del cervello</h2>
            <ul className="text-black list-disc ml-6 text-lg space-y-2">
              <li><strong>Rettiliano</strong>: istinto e sopravvivenza</li>
              <li><strong>Limbico</strong>: emozioni e ricordi</li>
              <li><strong>Neocorteccia</strong>: logica e linguaggio</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition ">
            <h2 className="text-black text-3xl font-semibold mb-4">scopri come le grande azinede analizzano i tuoi comportamenti</h2>
            <ul className="text-black list-disc ml-6 text-lg space-y-2">
              <p>Qesto articolo presenta cinque tecniche di neuromarketing, tra cui il monitoraggio delle risposte emotive e l'influenza di colori e suoni. Un esempio pratico è l'uso di <strong>EEG</strong> e eye-tracking da parte di Levi's per analizzare le reazioni dei consumatori alle campagne pubblicitarie.	</p>
            </ul>
          </div>
        </div>
      </section>

      {/* Caso Apple */}
      <section className="py-20 px-6 bg-white text-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Il caso Apple: quando il neuromarketing diventa arte</h2>
            <img src="/jobs.png" alt="Steve Jobs" className="w-64 mx-auto mb-6 rounded shadow-lg" />
            <p className="text-lg leading-relaxed mb-4">
              Apple è considerata una delle aziende pioniere nell'utilizzo del neuromarketing. Steve Jobs ha compreso fin dagli inizi che la tecnologia doveva suscitare emozione, ispirazione e senso di appartenenza. I suoi keynote non presentavano solo prodotti, ma veri e propri racconti emozionali.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Dal packaging minimalista, pensato per stimolare curiosità e piacere nel disimballaggio, alla scelta dei materiali e dei colori nei punti vendita, Apple ha creato un ecosistema esperienziale. Il brand ha anche investito in tecnologie come il facial coding per analizzare le emozioni del pubblico, ottimizzando campagne e interfacce.
            </p>
            <p className="text-lg leading-relaxed">
              Un esempio iconico è lo spot dell’iPad Pro, dove le immagini cosmiche evocano stupore e meraviglia, e solo in chiusura si rivela che sono state osservate con un iPad. Questo storytelling visivo e emozionale eleva il prodotto, trasformando l'acquisto in un atto di espressione personale.
            </p>
          </div>
        </section>

      {/* Attenzione, Consapevolezza, Emozioni */}
      <section className="py-20 px-6 bg-white text-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">Attenzione, Consapevolezza ed Emozioni</h2>
            <p className="text-lg leading-relaxed mb-4">
              Le decisioni di acquisto sono spesso inconsce e guidate da tre elementi fondamentali: attenzione, consapevolezza ed emozioni. L'attenzione può essere spontanea (bottom-up) o volontaria (top-down), ed è fortemente influenzata da stimoli visivi come packaging e pubblicità. La consapevolezza richiede uno sforzo cognitivo maggiore ed è selettiva, mentre le emozioni sono reazioni automatiche che precedono il pensiero conscio.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Il celebre esperimento <strong>Coca Cola vs Pepsi</strong> dimostra il potere dei ricordi ed emozioni associati a un brand. Anche se il gusto della Pepsi risultava preferito nei test alla cieca, la maggior parte delle persone dichiarava di preferire Coca Cola quando veniva svelato il marchio, grazie all'efficacia delle sue campagne pubblicitarie emozionali.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-orange-400 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Attenzione</h3>
                <p>Può essere catturata da stimoli visivi come cambi di colore o forma del packaging. Essenziale per emergere nel caos comunicativo.</p>
              </div>
              <div className="p-6 bg-orange-400 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Consapevolezza</h3>
                <p>Permette di riconoscere un brand e associarlo a valori, esperienze e preferenze, anche a livello inconscio.</p>
              </div>
              <div className="p-6 bg-orange-400 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Emozioni</h3>
                <p>Spingono all’azione, restano nella memoria e possono cambiare la percezione del prodotto.</p>
              </div>
            </div>
          </div>
        </section>

        

      {/* Tecniche e strumenti */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-black text-3xl font-semibold mb-12">Strumenti principali</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: "/eye-tracking.svg", title: "Eye-Tracking", desc: "Analizza dove guardi mentre navighi" },
            { icon: "/eeg.svg", title: "EEG", desc: "Misura l'attività cerebrale" },
            { icon: "/facial-coding.svg", title: "Facial Coding", desc: "Rileva micro-espressioni facciali" },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <img src={item.icon} className="w-16 mx-auto mb-4" />
              <h3 className="text-xl text-black font-bold">{item.title}</h3>
              <p className="mt-2 text-black">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      

      {/* CTA Finale */}
      <section className="py-20 px-6 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-4">Pronto a sbloccare il potere nascosto dietro ogni decisione?</h2>
<p className="text-lg mb-6 max-w-2xl mx-auto">
  Unisciti al nostro percorso interattivo e scopri come neuroscienze e marketing si incontrano per influenzare ogni tuo acquisto. Testa in prima persona le tecniche più innovative.
</p>
<Button className="bg-orange-500 hover:bg-orange-600 text-lg px-6 py-3">Inizia il viaggio</Button>

      </section>
    </main>
    </>
  );
}

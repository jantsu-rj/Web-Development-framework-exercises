import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Notifications from './components/Notifications';
import SideSection from './components/SideSection';

function App() {


  const newsNotificationData = [
    {
      topic:'Lukijan mielipide', 
      body:'Lähes päivittäin saan kuulla potilaiden epäilyjä siitä, olenko oikea lääkäri'
    },
    {
      topic:'Päivän timantti', 
      body:'Reima Launonen kiipesi työväenluokasta yliopistoon, mutta huomasi pian olevansa kuin norsu posliinikaupassa – Kolme luokkahypyn tehnyttä kertoo, millainen kokemus yliopisto oli'
    },
  ]

  const mainNewsData = [
    {
      image: 'asd',
      topic: 'Koronatestaus',
      title: 'Kahdesti rokotettujen testaamisesta luovutaan laajalti – Hallitus kertoo uusista linjauksista, suora lähetys noin kello 13.45',
      category: 'Politiikka',
      time: '12:55',
    },
    {
      image: 'asd',
      topic: 'Kommentti',
      title: 'Eero Heinäluoma puhui vuonna 2003 vihreiden huume­ongelmasta, ja se pätee yhä – moni vihreä pelkää kannabiksen laillistamis­päätöksen olevan paha poliittinen virhe',
      category: 'Junkkari',
      time: '15:46',
    },
    {
      image: 'asd',
      topic: 'Päihteet',
      title: 'Muut puolueet tyrmäävät vihreiden ehdottaman kannabiksen laillistamisen – Näin eduskunta­ryhmien puheen­johtajat kertovat kannoistaan',
      category: 'Polittiikka',
      time: '13.9. 18:26',
    },
  
    
  ]
  
  const sideNewsData = [
    {
      number: '1',
      topic: 'Koronatestaus',
      title: 'Kahdesti rokotettujen testaamisesta luovutaan laajalti, kotitestien käyttöön tulossa ohjeistusta',
    },
    {
      number: '2',
      topic: 'Dokumentti',
      title: '15-vuotiasta Alanis Morissettea käytettiin seksuaalisesti hyväksi useita kertoja, laulaja kertoo dokumentissa: ”Kerroin asiasta muutamille ihmisille, mutta asia kaikui kuuroille korville”',
    },
    {
      number: '3',
      topic: 'Joukkoliikenne',
      title: 'HKL:n lakko pysäyttää metrot ja raitiovaunut kokonaan – Edes yksittäisiä vuoroja ei ajeta',
    },
    {
      number: '4',
      topic: 'Pankit',
      title: 'S-pankki sai valvojalta liki 1,7 miljoonan euron seuraamusmaksun',
    },
    {
      number: '5',
      topic: 'Ravintolarajoitukset',
      title: 'Valtioneuvosto päätti ravintola­rajoitusten kevennyksistä: Aukioloajat pitenevät, perustason alueilla istumapaikka­vaatimus poistuu',
    },
    {
      number: '6',
      topic: 'HS-analyysi',
      title: 'Vauras Norja harppasi vasemmalle, ja hurjasti vahvistunut ääri­vasemmisto vaatii öljyn­tuotannon lakkauttamista',
    },
    {
      number: '7',
      topic: 'Tuomiot',
      title: 'Helsingin seurakuntayhtymän lahjusjupakka: Liikemies osti koko perheelle lomamatkan Balille ja kymppitonnin moottoripyörät',
    },
  ]

  return (
    <div className={ styles.background }>
    <Header />
    {
      newsNotificationData.map(element => <Notifications topic={ element.topic } body={ element.body}/>)
    }
    <div className={ styles.sideBySide}> 
        <div className={ styles.mainContainer }>
        {
          mainNewsData.map(element => <MainSection topic={ element.topic } title={ element.title } category={ element.category } time={ element.time }/>)
        }
        </div>
        <div className={ styles.sideContainer }>
          <div className={ styles.title }>Luetuimmat <br/>
          ________________________</div>
          {
          sideNewsData.map(element => <SideSection number={ element.number } topic={ element.topic } title= { element.title }/>)
          }
        </div>
    </div>
  </div>
  );
}

export default App;

import logo from './logo.svg';
import QUestion from './Question';
import './App.css';

const questions=[
  {
    id: 1,
    title: "Is this a good product?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 2,
    title: "How much does it cost?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 3,
    title: "When can I get it?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  }
];

export default function App(){
  return(
    <>
      <h1>Accordian</h1>
      <div className='container'>
        <h2>Frequently Asked Questions</h2>
        <div className='questions'>
          {questions.map((question) => (
            <QUestion key={question.id} question={question}/>
          ))}
        </div>
      </div>
    </>
  )
}

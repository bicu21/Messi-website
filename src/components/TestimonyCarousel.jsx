
import React, { useState, useEffect } from 'react';

const testimony = [
  {
    id:1,
    image:'/images/peter.jpg',
    name:'Peter Drury',
    role:'British football commentator',
    quote:'"It was beautiful. He was the point of difference. He has always been the point of difference. Unparalleled."'
 
  },
  {
    id:2,
    image:'./images/Guardiola.jpg',
    name :'Pep Guardiola',
    role: 'Spanish football manager',
    quote:'"If you have messi in your team messi is number9,number10, number11,number7,number6,number5,number4"'

  },
  { 
    id:3,
    image:'./images/Xavi.jpg',
    name:'Xavier Hernández Creus',
    role:'Former team mate',
    quote:'"Barcelona and the Argentine national team cannot afford to allow 10 minutes to pass in a game without Leo Messi touching the ball."'


  },
  {
    id:4,
    image:'./images/guco.jpg',
    name:'Ronaldo de Assis Moreira',
    role:'Brazilian former footballer',
    quote:'"I knew Messi was a better player than me... I always tried to be a good influence on him."'


  },
  {
    id:5,
    image:'./images/morino.jpg',
    name: 'José Mário dos Santos Mourinho',
    role:'Portuguese football manager',
    quote:' "When Messi has the ball, defenders face an almost impossible challenge you are done."'
  },
  {
    id:6,
    image:'./images/zlatan.jpg',
    name: 'Zlatan Ibrahimović',
    role:'Swedish former footballer',
    quote:'"Messi plays with statues, not teammates. They run as if carrying bags of cement."'
  },
  {
    id:7,
    image:'images/cr.jpg',
    name:'Cristiano Ronaldo dos Santos Aveiro',
    role:'Portuguese footballer',
    quote:'"I like to see all the good footballers and he is one of them, it’s a good crack. I really enjoy seeing him play".'
  },
  {
    id:8,
    image:'images/Zidane.jpg',
    name:'Zinedine Zidane',
    role:'French association football manager',
    quote:'"It is just one word: ‘magic’."'
  }


];
const TestimonyCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % testimony.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { image, name, role, quote } = testimony[index];

  return(
    <div className="max-w-lg mx-auto p-6 border border-gray-500  rounded-lg shadow-lg bg-gray-900 text-center">
        <img src={image} alt={name} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
        <p className="text-lg text-white italic mb-2">{quote}</p>
        <h3 className="font-semibold text-white">{name}</h3>
        <p className="text-sm text-white">{role}</p>

    </div>

  )
};
export default TestimonyCarousel;
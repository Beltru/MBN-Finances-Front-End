import CountUp from 'react-countup';

export default function DineroCuenta({number, name}) {
  return (
    <div className="flex flex-col w-full items-center p-2 rounded-lg text-white">
      <div className="flex flex-col items-center text-2xl mb-4">
        <p className=''>{name}</p>
        <CountUp 
          end={number} 
          duration={2} 
          separator="," 
          prefix=" $" 
          className="text-3xl nofont"/>
      </div>
    </div>
  );
}
    
import CountUp from 'react-countup';

export default function DineroCuenta() {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg text-white">
      <div className="flex flex-col items-center text-2xl mb-4">
        <p>Dinero en cuenta:</p>
        <CountUp 
          end={142749} 
          duration={2} 
          separator="," 
          suffix=" $" 
          className="text-3xl font-bold"/>
       
      </div>
      <div className="text-2xl flex flex-col items-center">
        <p>Dinero transferido:</p>
        <CountUp 
          end={42798} 
          duration={2} 
          separator="," 
          suffix=" $" 
          className="text-3xl font-bold"/>
      </div>
    </div>
  );
}
    

import CountUp from 'react-countup';

export default function DineroCuenta() {
  return (
    <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg text-white">
      <div className="text-xl mb-4">
        <p>Dinero en cuenta:</p>
        <CountUp 
          end={142749} 
          duration={2} 
          separator="," 
          suffix=" $" 
          className="text-4xl font-bold"
        />
      </div>
      <div className="text-xl">
        <p>Dinero transferido:</p>
        <CountUp 
          end={42798} 
          duration={2} 
          separator="," 
          suffix=" $" 
          className="text-4xl font-bold"
        />
      </div>
    </div>
  );
}
    

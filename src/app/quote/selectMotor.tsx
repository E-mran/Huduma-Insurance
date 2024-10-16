import Select from "@/components/atoms/select";
import { useState } from "react";
import carsjson from "./cars.json";

interface CarsProps {
  make: string;
  models: string[];
}

const allCars: CarsProps[] = carsjson;
const allMakes = (): string[] => allCars.map((car) => car.make.toUpperCase());

function getModels(make: string): string[] {
  for (const car of allCars) {
    if (car.make.toLowerCase() == make.toLowerCase()) return car.models;
  }

  return [];
}

const SelectMotor = () => {
  const [makes, setMakes] = useState<string[]>(allMakes);
  const [models, setModels] = useState<string[]>([]);

  const handleInput = (input: string) => {
    console.log(input);
    if (makes.includes(input.toUpperCase())) {
      setModels(getModels(input));
    } else setModels([]);
  };

  return (
    <div className="flex flex-wrap gap-x-10 gap-y-8">
      <Select options={makes} placeholder="make" className="w-[300px]" onInput={handleInput} />
      <Select options={models} placeholder="model" className="w-[300px]" />
    </div>
  );
};

export default SelectMotor;

import React from 'react';
import { Card, CardContent } from "~/components/ui/card";

interface SlotProps {
  label: string;
  selectedStem?: string;
  isSelected: boolean;
  onSelect: () => void;
}

const Slot: React.FC<SlotProps> = ({ label, selectedStem, isSelected, onSelect }) => {
  return (
    <Card
      className={`w-24 h-24 flex text-2xl items-center justify-center cursor-pointer 
      ${isSelected ? 'bg-gray-300' : 'bg-white'} border border-gray-400`}
      onClick={onSelect}
    >
      <CardContent className="text-center">
        {selectedStem || label}
      </CardContent>
    </Card>
  );
};

export default Slot;

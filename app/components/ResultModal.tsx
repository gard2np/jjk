import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "~/components/ui/dialog";

interface ResultModalProps {
  isCorrect: boolean;
  onClose: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ isCorrect, onClose }) => {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isCorrect ? "🎉 정답입니다!" : "❌ 틀렸습니다."}</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ResultModal;

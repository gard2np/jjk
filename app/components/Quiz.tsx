import React, { useState } from 'react';
import { heavenlyStems, earthlyBranches, hiddenStems } from '~/data/stems';
import BranchCard from '~/components/BranchCard';
import Slot from '~/components/Slot';
import StemButton from '~/components/StemButton';
import StemsTable from '~/components/Stemstable'; // 지장간 표 추가
import { Button } from "~/components/ui/button";
import { CardFooter, CardTitle } from './ui/card';

const getRandomBranch = () => earthlyBranches[Math.floor(Math.random() * earthlyBranches.length)];

const Quiz: React.FC = () => {
  const [branch, setBranch] = useState(getRandomBranch());
  const [selectedSlot, setSelectedSlot] = useState<'initial' | 'middle' | 'final' | null>(null);
  const [answers, setAnswers] = useState<{ initial?: string; middle?: string; final?: string }>({});
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false); // 힌트(표) 표시 상태 추가

  const correctAnswer = hiddenStems[branch];

  const handleSlotClick = (slot: 'initial' | 'middle' | 'final') => {
    setSelectedSlot(slot);
  };

  const handleStemSelect = (stem: string) => {
    if (selectedSlot) {
      setAnswers((prev) => ({ ...prev, [selectedSlot]: stem }));
      setSelectedSlot(null);
    }
  };

  const handleSubmit = () => {
    setIsCorrect(
      answers.initial === correctAnswer.initial &&
      answers.middle === correctAnswer.middle &&
      answers.final === correctAnswer.final
    );
  };

  const handleGenerate = () => {
    setBranch(getRandomBranch());
    setAnswers({});
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between w-full overflow-hidden">
      
      {/* 메인 콘텐츠 */}
      <div className="p-6 flex flex-col items-center flex-grow w-full max-w-xl">
        <CardTitle className="w-full mt-4 mb-10 text-2xl font-bold text-center">
          지장간 암기 도우미
        </CardTitle>

        <BranchCard branch={branch} />

        <div className="flex space-x-4 mt-10">
          <Slot label="초기" selectedStem={answers.initial} isSelected={selectedSlot === 'initial'} onSelect={() => handleSlotClick('initial')} />
          {correctAnswer.middle && (
            <Slot label="중기" selectedStem={answers.middle} isSelected={selectedSlot === 'middle'} onSelect={() => handleSlotClick('middle')} />
          )}
          <Slot label="여기" selectedStem={answers.final} isSelected={selectedSlot === 'final'} onSelect={() => handleSlotClick('final')} />
        </div>

        <div className="grid grid-cols-5 gap-2 mt-10 w-full max-w-md">
          {heavenlyStems.map((stem) => (
            <StemButton key={stem} stem={stem} onClick={() => handleStemSelect(stem)} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center">
          <div className="flex justify-center">
            <Button className="mr-4 text-xl bg-gray-900 text-white p-4 rounded-lg" onClick={handleSubmit}>
              정답확인
            </Button>
            <Button className="mr-4 text-xl bg-gray-900 text-white p-4 rounded-lg" onClick={handleGenerate}>
              문제생성
            </Button>
          {/* ✅ 힌트 버튼 추가 */}
          <Button
            className="text-xl bg-teal-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setShowHint(!showHint)}
          >
            {showHint ? "힌트 닫기" : "힌트 보기"}
          </Button>
          </div>

          {/* ✅ 힌트(표) 표시 */}
          {showHint && <StemsTable />}
          
          {/* ✅ 정답 메시지 출력 */}
          {isCorrect !== null && (
            <div className={`mt-4 px-6 py-3 rounded-lg text-lg font-bold ${
              isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            }`}>
              {isCorrect ? '정답입니다! 🎉' : '틀렸습니다. 다시 시도해보세요! ❌'}
            </div>
          )}
        </div>
      </div>

      {/* ✅ Footer */}
      <div className="p-4 items-center text-center text-gray-500">
        <CardFooter>
          © 2025 사주 읽는 치히로 All rights reserved.
        </CardFooter>
      </div>
    </div>
  );
};

export default Quiz;

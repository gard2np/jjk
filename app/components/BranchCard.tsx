import React from 'react';
import { Card, CardContent } from "~/components/ui/card";

// 지지별 배경색 및 텍스트 색상 매핑
const branchStyles: Record<string, { bgColor: string; textColor: string }> = {
  '寅': { bgColor: 'bg-green-500', textColor: 'text-black' },
  '卯': { bgColor: 'bg-green-500', textColor: 'text-black' },
  '辰': { bgColor: 'bg-yellow-400', textColor: 'text-black' },
  '巳': { bgColor: 'bg-red-600', textColor: 'text-black' },
  '午': { bgColor: 'bg-red-600', textColor: 'text-black' },
  '未': { bgColor: 'bg-yellow-400', textColor: 'text-black' },
  '申': { bgColor: 'bg-gray-50', textColor: 'text-black' },
  '酉': { bgColor: 'bg-gray-50', textColor: 'text-black' },
  '戌': { bgColor: 'bg-yellow-400', textColor: 'text-black' },
  '亥': { bgColor: 'bg-slate-950', textColor: 'text-white' },
  '子': { bgColor: 'bg-slate-950', textColor: 'text-white' },
  '丑': { bgColor: 'bg-yellow-400', textColor: 'text-black' },
};

interface BranchCardProps {
  branch: string;
}

const BranchCard: React.FC<BranchCardProps> = ({ branch }) => {
  // 지지에 따른 배경색과 텍스트 색상을 가져오기 (기본값: 회색 배경 + 검은색 글씨)
  const { bgColor, textColor } = branchStyles[branch] || { bgColor: 'bg-gray-300', textColor: 'text-black' };

  return (
    <Card className={`w-36 p-4 font-bold text-6xl text-center ${bgColor} ${textColor}`}>
      <CardContent>
        {branch}
      </CardContent>
    </Card>
  );
};

export default BranchCard;

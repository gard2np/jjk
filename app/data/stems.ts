export const heavenlyStems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

export const earthlyBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

export const hiddenStems: Record<string, { initial: string, middle?: string, final: string }> = {
  '寅': { initial: '戊', middle: '丙', final: '甲' },
  '卯': { initial: '甲', final: '乙' },
  '辰': { initial: '乙', middle: '癸', final: '戊' },
  '巳': { initial: '戊', middle: '庚', final: '丙' },
  '午': { initial: '丙', final: '丁' },
  '未': { initial: '丁', middle: '乙', final: '己' }, 
  '申': { initial: '戊', middle: '壬', final: '庚' },
  '酉': { initial: '庚', final: '辛' },
  '戌': { initial: '辛', middle: '丁', final: '戊' }, 
  '亥': { initial: '戊', middle: '甲', final: '壬' },
  '子': { initial: '壬', final: '癸' }, 
  '丑': { initial: '癸', middle: '辛', final: '己' },
};

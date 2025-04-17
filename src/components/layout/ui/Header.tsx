import React from 'react';

interface IconTextElementProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  containerClassName?: string;
}

export const IconTextElement = ({
  icon: Icon,
  text,
  containerClassName = '',
}: IconTextElementProps) => {
  return (
    <div className={`flex flex-row items-center px-4 gap-4 w-full lg:w-3/4 h-16 text-violet-950 bg-stone-50 rounded-2xl ${containerClassName}`}>
      <div className='[--icon-size:24px] md:[--icon-size:28px] lg:[--icon-size:32px]'>
        <Icon className="w-[var(--icon-size)] h-[var(--icon-size)]" />
      </div>
      <span className="font-semibold text-base md:text-lg lg:text-2xl">{text}</span>
    </div>
  );
};
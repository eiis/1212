import React, { useEffect, useState } from 'react';

interface RedPacket{
  money: number;
  title: string;
  description: string;
  time: number[];
  status: string;
  restTime?: number;
}

type Props = {
  packet: RedPacket;
};

interface CountDown {
  hours: number | string;
  minutes: number | string;
  remainingSeconds: number | string;
}

const formatCountdown = (seconds: number): CountDown => {
  const hours = Math.floor(seconds / 3600) < 10 ? `0${Math.floor(seconds / 3600)}` : Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60)  < 10 ? `0${Math.floor((seconds % 3600) / 60)}` : Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60  < 10 ? `0${seconds % 60}` : seconds % 60;
  return{
    hours,
    minutes,
    remainingSeconds
  }
  // return `${hours}小时 ${minutes}分钟 ${remainingSeconds}秒`;
};

const formatTime = (timestamp: number) => {
  return new Date(timestamp).toLocaleString('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const countdownStyle = "flex text-center rounded-lg py-2 px-4 text-xs truncate text-orange-300";
const cutStyle = "w-[34px] h-[32px] rounded-sm text-xl flex justify-center items-center bg-[#FFE9B0] text-[#FF4000]"

const RedPacketItem: React.FC<Props> = ({ packet }) => {
  
  const { money, title, description, time, status, restTime } = packet;
  const [countdown, setCountdown] = useState<CountDown>(formatCountdown(restTime || 0));


  const startTime =formatTime(time[0]); // 开始时间
  const endTime = formatTime(time[1]); // 结束时间

  useEffect(() => {
    if (restTime === undefined) return;

    let currentRestTime = restTime;
    const timer = setInterval(() => {
      currentRestTime--;
      setCountdown(formatCountdown(currentRestTime));

      if (currentRestTime <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [restTime]);

  return (
    <div className="px-2 rounded-xl box-content flex items-center justify-between min-h-[100px] bg-center bg-no-repeat" style={{backgroundImage: `url('/bg.png')`,backgroundSize:'100% 100%'}}>
      <div className='flex flex-shrink-0 xs:min-w-[100px] min-w-[80px] justify-center items-center text-[#A45927]'>
        <span className="text-3xl font-bold">{money}</span>
        <span className="text-sm self-end pb-1">元</span>
      </div>
      <div className='flex-1 xs:min-w-[200px] min-w-[160px] text-[#FFE9B0] flex flex-col justify-between ml-2'>
        <div>
        <p className="text-lg font-bold">{title}</p>
        <p className="text-xs">{description}</p>
        </div>
        <div className=''>
        {restTime !== undefined ? (
          <div className='flex items-center'>
            <p>距结束:</p>
          <div className={countdownStyle}>
            <p className={cutStyle}>{`${countdown.hours}`}</p>
            <p className='flex items-center text-[##FFEDBE]'>:</p>
            <p className={cutStyle}>{`${countdown.minutes}`}</p>
            <p className='flex items-center text-[#FFEDBE'>:</p>
            <p className={cutStyle}>{`${countdown.remainingSeconds}`}</p>
          </div>
          </div>
        ) : (
          <p className="text-xs truncate text-orange-300">{`有效期：${startTime} - ${endTime}`}</p>
        )}
        </div>
      </div>
      <button className="text-4 flex-shrink-0 xs:min-w-[80px] min-w-[60px] text-[#A45927]  bg-[#FFE9B0] font-bold rounded-full py-2">
        {status}
      </button>
    </div>
  );
};

export default RedPacketItem;

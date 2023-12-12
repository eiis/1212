import React from 'react';
import RedPacketItem from './RedPacketItem';

interface RedPacket{
  money: number;
  title: string;
  description: string;
  time: number[];
  status: string;
  restTime?: number;
}

type Props = {
  packets: RedPacket[];
};

const RedPacketList: React.FC<Props> = ({ packets }) => {
  return (
    <div className="space-y-4 p-4">
      {packets.map((packet, index) => (
        <RedPacketItem key={index} packet={packet} />
      ))}
      {/* <img src='/bg.png' alt="" /> */}
    </div>
  );
};

export default RedPacketList;

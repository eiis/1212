import React from 'react';
import RedPacketItem from './RedPacketItem';
import type {RedPacket} from '../types/RedPacket'


type Props = {
  packets: RedPacket[];
};

const RedPacketList: React.FC<Props> = ({ packets }) => {
  return (
    <div className="space-y-4 p-4">
      {packets.map((packet, index) => (
        <RedPacketItem key={index} packet={packet} />
      ))}
    </div>
  );
};

export default RedPacketList;

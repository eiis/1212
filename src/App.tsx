import React from 'react';
import RedPacketList from './components/RedPacketList';
import list from './utils/1352.json'
import type {RedPacket} from './types/RedPacket'


const App: React.FC = () => {
  const packetData: RedPacket[] = list.list;

  return (
    <div className="w-screen flex items-center justify-center">
      <RedPacketList packets={packetData} />
    </div>
  );
};

export default App;

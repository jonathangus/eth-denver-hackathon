import { ConnectButton } from '@rainbow-me/rainbowkit';
import Holdings from '../components/Holdings';
import Recap from '../components/Recap';

const Page = () => {
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <div className="flex-col flex">
        <div className="self-end mt-4">
          <ConnectButton />
        </div>
        <div className="self-center md:w-[500px]">
          <Holdings />
        </div>
      </div>
    </div>
  );
};

export default Page;

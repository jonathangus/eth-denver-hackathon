import { ConnectButton } from '@rainbow-me/rainbowkit';
import Holdings from '../components/Holdings';
import Recap from '../components/Recap';
import { OnChainProvider } from '../context/OnChainStateContext';

const Page = () => {
  return (
    <OnChainProvider>
      <div style={{ display: 'grid', gap: 20 }}>
        <div className="flex-col flex">
          <div className="self-end mt-4">
            <ConnectButton />
          </div>
          <div className="self-center w-full">
            <Holdings />
          </div>
        </div>
      </div>
    </OnChainProvider>
  );
};

export default Page;

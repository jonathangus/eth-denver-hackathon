import { BigNumber, Contract, ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { useFeeData, useProvider, useSigner } from 'wagmi';
import { useSelectionStore } from '../stores/useSelectionStore';
import { useAccount } from 'wagmi';

const Recap = () => {
  const selected = useSelectionStore((state) => state.selected);
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const { data: fee } = useFeeData();
  const provider = useProvider();
  const [totalGas, setTotalGas] = useState(BigNumber.from(0));

  const receiver = '0xf3476b36fc9942083049c04e9404516703369ef3';

  const refresh = async () => {
    setTotalGas(BigNumber.from(0));
    const promises = selected.map(async (item) => {
      const nftContract = new Contract(
        item.contract_address,
        [
          'function transferFrom(address _from, address _to, uint256 _tokenId) external payable',
          // 'function transfer(address _to, uint256 _value) public returns (bool success)',
        ],
        signer
      );

      // @ts-ignore
      const tokenid = item.token_id;
      const data = await nftContract.populateTransaction.transferFrom(
        address,
        receiver,
        tokenid
      );
      console.log(':::', address, receiver, tokenid);
      console.log('DATA:', data);
      const gas = await provider.estimateGas(data);
      console.log('gas:', gas);

      return gas;
    });
    const gasData = await Promise.all(promises);
    const _totalGas = gasData.reduce(
      (prev, curr) => curr.add(prev),
      BigNumber.from(0)
    );
    setTotalGas(_totalGas);
  };

  let feeInWei = BigNumber.from(0);
  if (fee && totalGas.gt(0)) {
    feeInWei = fee.gasPrice.mul(totalGas);
  }

  useEffect(() => {
    refresh();
  }, [selected.length]);

  return (
    <>
      <div>Selected: {selected.length}</div>
      <div>Gas: {ethers.utils.formatEther(feeInWei)}</div>
    </>
  );
};

export default Recap;
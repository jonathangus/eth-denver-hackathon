import { ERC721Token, Token } from 'shared-config';
import NFTDisplay from './NFTDisplay';

type Props = {
  items: ERC721Token[];
};

const ERC721Holdings = ({ items }: Props) => {
  return (
    <div>
      <div className="grid grid-rows-1 gap-10	">
        {items.map((item, i) => (
          <div key={i}>
            <NFTDisplay nft={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ERC721Holdings;

import { ethers, network } from 'hardhat';
import { printDetails, writeDeploymentDetails } from '../utils/utils';
import MERC20_ABI from '../../abi/MockERC20.json';
import MERC721_ABI from '../../abi/MockERC721.json';
import MERC1155_ABI from '../../abi/MockERC1155.json';

async function main() {
  const JONT = '0x5abbdbfe7257e30ffd40903bdc7d2e27557db60d';
  const MORKE = '0xb17D45a7d3A130B44c9114A485DAFB721e08fCE7';
  const PILOU = '0x301933aEf6bB308f090087e9075ed5bFcBd3e0B3';

  const TESTERS = [JONT, MORKE, PILOU];

  const [deployer] = await ethers.getSigners();

  // Contract Factories
  const mockERC20Factory = await ethers.getContractFactory(
    'MockERC20',
    deployer
  );
  const mockERC721Factory = await ethers.getContractFactory(
    'MockERC721',
    deployer
  );

  const mockERC1155Factory = await ethers.getContractFactory(
    'MockERC1155',
    deployer
  );

  console.log('');
  console.log(
    '-------------------------------------------------------- MOCK ERC-20 DEPLOYMENT ---------------------------------------------------'
  );
  console.log('');

  const m20_1 = await mockERC20Factory.deploy();
  await m20_1.deployed();

  let txReceipt = await ethers.provider.send('eth_getTransactionReceipt', [
    m20_1.deployTransaction.hash,
  ]);
  writeDeploymentDetails(
    network.name,
    'MockERC20_1',
    m20_1.address,
    [],
    MERC20_ABI,
    +txReceipt.blockNumber
  );

  // Log deployment details to console
  printDetails(network.name, 'MockERC20_1', m20_1.address);

  const m20_2 = await mockERC20Factory.deploy();
  await m20_2.deployed();

  txReceipt = await ethers.provider.send('eth_getTransactionReceipt', [
    m20_2.deployTransaction.hash,
  ]);
  writeDeploymentDetails(
    network.name,
    'MockERC20_2',
    m20_2.address,
    [],
    MERC20_ABI,
    +txReceipt.blockNumber
  );

  // Log deployment details to console
  printDetails(network.name, 'MockERC20_2', m20_2.address);

  const m20_3 = await mockERC20Factory.deploy();
  await m20_3.deployed();

  txReceipt = await ethers.provider.send('eth_getTransactionReceipt', [
    m20_3.deployTransaction.hash,
  ]);
  writeDeploymentDetails(
    network.name,
    'MockERC20_3',
    m20_3.address,
    [],
    MERC20_ABI,
    +txReceipt.blockNumber
  );

  // Log deployment details to console
  printDetails(network.name, 'MockERC20_3', m20_3.address);

  const m20_4 = await mockERC20Factory.deploy();
  await m20_4.deployed();

  txReceipt = await ethers.provider.send('eth_getTransactionReceipt', [
    m20_4.deployTransaction.hash,
  ]);
  writeDeploymentDetails(
    network.name,
    'MockERC20_4',
    m20_4.address,
    [],
    MERC20_ABI,
    +txReceipt.blockNumber
  );

  // Log deployment details to console
  printDetails(network.name, 'MockERC20_4', m20_4.address);

  const m20_5 = await mockERC20Factory.deploy();
  await m20_5.deployed();

  txReceipt = await ethers.provider.send('eth_getTransactionReceipt', [
    m20_5.deployTransaction.hash,
  ]);
  writeDeploymentDetails(
    network.name,
    'MockERC20_5',
    m20_5.address,
    [],
    MERC20_ABI,
    +txReceipt.blockNumber
  );

  // Log deployment details to console
  printDetails(network.name, 'MockERC20_5', m20_5.address);

  const m20_6 = await mockERC20Factory.deploy();
  await m20_6.deployed();

  txReceipt = await ethers.provider.send('eth_getTransactionReceipt', [
    m20_6.deployTransaction.hash,
  ]);
  writeDeploymentDetails(
    network.name,
    'MockERC20_6',
    m20_6.address,
    [],
    MERC20_ABI,
    +txReceipt.blockNumber
  );

  // Log deployment details to console
  printDetails(network.name, 'MockERC20_6', m20_6.address);

  console.log('');
  console.log(
    '-------------------------------------------------------- MOCK ERC-721 DEPLOYMENT ---------------------------------------------------'
  );
  console.log('');

  const m721_1 = await mockERC721Factory.deploy();
  await m721_1.deployed();

  txReceipt = await ethers.provider.send('eth_getTransactionReceipt', [
    m721_1.deployTransaction.hash,
  ]);
  writeDeploymentDetails(
    network.name,
    'MockERC721_1',
    m721_1.address,
    [],
    MERC721_ABI,
    +txReceipt.blockNumber
  );

  // Log deployment details to console
  printDetails(network.name, 'MockERC721_1', m721_1.address);

  const m721_2 = await mockERC721Factory.deploy();
  await m721_2.deployed();

  txReceipt = await ethers.provider.send('eth_getTransactionReceipt', [
    m721_2.deployTransaction.hash,
  ]);
  writeDeploymentDetails(
    network.name,
    'MockERC721_2',
    m721_2.address,
    [],
    MERC721_ABI,
    +txReceipt.blockNumber
  );

  // Log deployment details to console
  printDetails(network.name, 'MockERC721_2', m721_2.address);

  const m721_3 = await mockERC721Factory.deploy();
  await m721_3.deployed();

  txReceipt = await ethers.provider.send('eth_getTransactionReceipt', [
    m721_3.deployTransaction.hash,
  ]);
  writeDeploymentDetails(
    network.name,
    'MockERC721_3',
    m721_3.address,
    [],
    MERC721_ABI,
    +txReceipt.blockNumber
  );

  // Log deployment details to console
  printDetails(network.name, 'MockERC721_3', m721_3.address);

  const m721_4 = await mockERC721Factory.deploy();
  await m721_4.deployed();

  txReceipt = await ethers.provider.send('eth_getTransactionReceipt', [
    m721_4.deployTransaction.hash,
  ]);
  writeDeploymentDetails(
    network.name,
    'MockERC721_4',
    m721_4.address,
    [],
    MERC721_ABI,
    +txReceipt.blockNumber
  );

  // Log deployment details to console
  printDetails(network.name, 'MockERC721_4', m721_4.address);

  const m721_5 = await mockERC721Factory.deploy();
  await m721_5.deployed();

  txReceipt = await ethers.provider.send('eth_getTransactionReceipt', [
    m721_5.deployTransaction.hash,
  ]);
  writeDeploymentDetails(
    network.name,
    'MockERC721_5',
    m721_5.address,
    [],
    MERC721_ABI,
    +txReceipt.blockNumber
  );

  // Log deployment details to console
  printDetails(network.name, 'MockERC721_5', m721_5.address);

  console.log('');
  console.log(
    '-------------------------------------------------------- MOCK ERC-721 DEPLOYMENT ---------------------------------------------------'
  );
  console.log('');

  const m1155_1 = await mockERC1155Factory.deploy();
  await m1155_1.deployed();

  txReceipt = await ethers.provider.send('eth_getTransactionReceipt', [
    m1155_1.deployTransaction.hash,
  ]);
  writeDeploymentDetails(
    network.name,
    'MockERC1155_1',
    m1155_1.address,
    [],
    MERC1155_ABI,
    +txReceipt.blockNumber
  );

  // Log deployment details to console
  printDetails(network.name, 'MockERC1155_1', m1155_1.address);

  const m1155_2 = await mockERC1155Factory.deploy();
  await m1155_2.deployed();

  txReceipt = await ethers.provider.send('eth_getTransactionReceipt', [
    m1155_2.deployTransaction.hash,
  ]);
  writeDeploymentDetails(
    network.name,
    'MockERC1155_2',
    m1155_2.address,
    [],
    MERC1155_ABI,
    +txReceipt.blockNumber
  );

  // Log deployment details to console
  printDetails(network.name, 'MockERC1155_2', m1155_2.address);

  const m1155_3 = await mockERC1155Factory.deploy();
  await m1155_3.deployed();

  txReceipt = await ethers.provider.send('eth_getTransactionReceipt', [
    m1155_3.deployTransaction.hash,
  ]);
  writeDeploymentDetails(
    network.name,
    'MockERC1155_3',
    m1155_3.address,
    [],
    MERC1155_ABI,
    +txReceipt.blockNumber
  );

  // Log deployment details to console
  printDetails(network.name, 'MockERC1155_3', m1155_3.address);

  const m1155_4 = await mockERC1155Factory.deploy();
  await m1155_4.deployed();

  txReceipt = await ethers.provider.send('eth_getTransactionReceipt', [
    m1155_4.deployTransaction.hash,
  ]);
  writeDeploymentDetails(
    network.name,
    'MockERC1155_4',
    m1155_4.address,
    [],
    MERC1155_ABI,
    +txReceipt.blockNumber
  );

  // Log deployment details to console
  printDetails(network.name, 'MockERC1155_4', m1155_4.address);

  const m1155_5 = await mockERC1155Factory.deploy();
  await m1155_5.deployed();

  txReceipt = await ethers.provider.send('eth_getTransactionReceipt', [
    m1155_5.deployTransaction.hash,
  ]);
  writeDeploymentDetails(
    network.name,
    'MockERC1155_5',
    m1155_5.address,
    [],
    MERC1155_ABI,
    +txReceipt.blockNumber
  );

  // Log deployment details to console
  printDetails(network.name, 'MockERC1155_5', m1155_5.address);

  console.log('');
  console.log(
    '-----------------------------------------------------------------------------------------------------------------------------------'
  );
  console.log('');

  for (let i = 0; i < TESTERS.length; i++) {
    await m20_1
      .connect(deployer)
      .mint(TESTERS[i], ethers.utils.parseEther('1000'));
    await m20_2
      .connect(deployer)
      .mint(TESTERS[i], ethers.utils.parseEther('1000'));
    await m20_3
      .connect(deployer)
      .mint(TESTERS[i], ethers.utils.parseEther('1000'));
    await m20_4
      .connect(deployer)
      .mint(TESTERS[i], ethers.utils.parseEther('1000'));
    await m20_5
      .connect(deployer)
      .mint(TESTERS[i], ethers.utils.parseEther('1000'));
    await m20_6
      .connect(deployer)
      .mint(TESTERS[i], ethers.utils.parseEther('1000'));

    console.log('MINTED ERC-20s for : ', TESTERS[i]);

    await m721_1.connect(deployer).mint(TESTERS[i]);
    await m721_1.connect(deployer).mint(TESTERS[i]);
    await m721_1.connect(deployer).mint(TESTERS[i]);
    await m721_2.connect(deployer).mint(TESTERS[i]);
    await m721_2.connect(deployer).mint(TESTERS[i]);
    await m721_2.connect(deployer).mint(TESTERS[i]);
    await m721_3.connect(deployer).mint(TESTERS[i]);
    await m721_3.connect(deployer).mint(TESTERS[i]);
    await m721_3.connect(deployer).mint(TESTERS[i]);
    await m721_3.connect(deployer).mint(TESTERS[i]);
    await m721_4.connect(deployer).mint(TESTERS[i]);
    await m721_4.connect(deployer).mint(TESTERS[i]);
    await m721_5.connect(deployer).mint(TESTERS[i]);
    await m721_5.connect(deployer).mint(TESTERS[i]);
    await m721_5.connect(deployer).mint(TESTERS[i]);

    console.log('MINTED ERC-721s for : ', TESTERS[i]);

    await m1155_1.connect(deployer).mintBatch(TESTERS[i], [0, 1, 2], [5, 5, 5]);
    await m1155_2.connect(deployer).mintBatch(TESTERS[i], [0, 1, 2], [5, 5, 5]);
    await m1155_3.connect(deployer).mintBatch(TESTERS[i], [0, 1, 2], [5, 5, 5]);
    await m1155_4.connect(deployer).mintBatch(TESTERS[i], [0, 1, 2], [5, 5, 5]);
    await m1155_5.connect(deployer).mintBatch(TESTERS[i], [0, 1, 2], [5, 5, 5]);
    
    console.log('MINTED ERC-1155s for : ', TESTERS[i]);
  }
}

main();
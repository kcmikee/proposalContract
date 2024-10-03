import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ProposalModule = buildModule("ProposalModule", (m) => {
  const deploy = m.contract("ProposalContract");

  return { deploy };
});

export default ProposalModule;

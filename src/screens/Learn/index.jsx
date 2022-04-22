import React, { useState } from "react";
import clsx from "clsx";

import Button from "../../components/Button";
import Section from "../../components/Section";
import MiniLayout from "../../layouts/MiniLayout";

const Learn = () => {
  const [btnState, setBtnState] = useState();

  console.log(btnState);

  return (
    <MiniLayout>
      <Section
        id="learn"
        className={clsx(
          btnState === "crypto" && "crypto",
          btnState === "nft" && "nft",
          "pt-0"
        )}
      >
        <div className="learn-main">
          <div className="d-flex justify-content-between align-items-center">
            <Button onClick={() => setBtnState("nft")} gradient>
              NFT
            </Button>
            <Button onClick={() => setBtnState("crypto")} gradient>
              Crypto
            </Button>
          </div>

          <p>
            Rift Learn is the best place to get up to speed on what and how NFTs
            work or learn about Crypto with easy to read, straight to the point
            guides on all you'll need to know. To start, select either NFT or
            Crypto.
          </p>
        </div>
      </Section>
    </MiniLayout>
  );
};

export default Learn;

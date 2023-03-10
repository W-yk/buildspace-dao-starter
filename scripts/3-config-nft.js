import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x444C1bE54bB4C8903d920cB76dfD7d4971D8fB1B", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "awesome",
        description: "This NFT will give you access to Thàn Tuā Tsînn!",
        image: readFileSync("scripts/assets/miao.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
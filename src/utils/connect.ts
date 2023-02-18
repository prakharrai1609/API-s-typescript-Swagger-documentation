import mongoose from "mongoose";
import config from "../../config/defaults";

async function connectDB() {
  const URI: string = config.URI;

  try {
    await mongoose.connect(URI);
    console.log("\n\n✅✅✅ Connected to DB ✅✅✅\n\n");
  } catch (err) {
    console.log("\n\n❌❌❌ Failed to connect to DB ❌❌❌\n\n");
    console.log(err);
    process.exit(1);
  }
}

export default connectDB;

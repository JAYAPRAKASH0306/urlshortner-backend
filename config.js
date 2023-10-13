import crypto from "crypto";

export default {
  JWT_SECRET: "urlshortner",
  EMAIL: "sidarthsidd123@gmail.com",
  EMAILPASSWORD: "tkfw dtjy jqty wbog",
  DATABASE_ATLAS_URL:
    "mongodb+srv://jayaprakash:16p25l0052@jp.djhe0bu.mongodb.net/Rest-auth",
};

const randomBytes = crypto.randomBytes(32); // Generates 32 random bytes
const secretKey = randomBytes.toString("base64");
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "djpizpiz9",
  api_key: "379344245962356",
  api_secret: "L3tIcE6yA78Wt40hYY3Kb5PXvz4",
});

const run = async () => {
  try {
    const res = await cloudinary.v2.uploader.upload(
      "https://res.cloudinary.com/demo/image/upload/sample.jpg"
    );
    console.log("SUCCESS:", res.secure_url);
  } catch (err) {
    console.log("ERROR:", err.message);
  }
};

run();
import mongoose from "mongoose";
import Contact  from "@/models/contact";
 export const connectDb = async () => {
  const username = "prishendre91";
  const password = "prishendre91";
  
  try {
    const { connection } = await mongoose.connect(
      `mongodb+srv://youtubenextjs.q3tgcik.mongodb.net/`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "userdata",
        user: username,
        pass: password,
      }
    );
    //Teasting and creating new user
    const contact = new Contact({
      username: "Test Name",
      email: "test123@gmail.com",
      phone: "7999122627",
      message: "This is testing ",
    });
    await contact.save();
    console.log("db connected...");
    console.log("user is created");
    // console.log(connection);
    console.log("Connected with host", connection.host);
  } catch (error) {
    console.log("faild to connect data", error);
  }
};

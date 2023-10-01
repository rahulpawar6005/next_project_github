import Herosection from "@/app/component/Herosection";

const About = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <Herosection title={"OUR STORY"} imageUrl={"/about1.svg"} />;
};

export default About;

import { assets } from "../assets/assets";
import NewsletterBox from "../Components/NewsletterBox";
import Title from "../Components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full max-w-[450px]"
          src={assets.about_img}
          alt="image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            BonApex was born out of passion and desire to revolutionize lorem
            ipsum dolor sit amet consectetur adipisicing elit. Porro ipsam nisi
            est explicabo neque autem nam ipsum numquam nulla accusantium earum
            dolores, ex sint consectetur doloribus nihil nostrum officiis!
            Commodi.
          </p>
          <p>
            Since our inception, we have worked,Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repellendus expedita cupiditate
            temporibus tempora ad veniam, dolor distinctio libero dolores, ipsum
            recusandae consequatur, beatae non repudiandae.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at BonApex is to empower customers with Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Natus ex soluta non
            molestias ipsa neque quas impedit consequuntur, perferendis vel
            sapiente tenetur, porro quam cupiditate.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            we meticulously select and vet each product to ensure it meets our
            lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quae repellat a soluta adipisci aliquid magni.
          </p>
        </div>

        <div className="border px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our friendly interfaces Lorem ipsum dolor sit, amet consectetur
            adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing
            elit,Natus eum pariatur quo voluptatem, laborum excepturi.
          </p>
        </div>

        <div className="border px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you Lorem
            ipsum dolor, sit amet consectetur adipisicing Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quam dolor autem unde temporibus.
            A, possimus.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;

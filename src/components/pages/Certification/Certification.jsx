import React from "react";
import image1 from "../../../images/certification/certification-01.jpg";
import image2 from "../../../images/certification/certification-02.jpg";
import image3 from "../../../images/certification/certification-03.jpg";
import image4 from "../../../images/certification/certification-04.jpg";
import CertificationItem from "./CertificationItem";


const certificationData = [
  {
    id: 1,
    image: image1,
    title: "Space Bootstrap 5 Multipurpose Template",
    link: "#0",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 2,
    image: image2,
    title: "eCommerce HTML Bootstrap 5 UI Kit",
    link: "#0",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 3,
    image: image3,
    title: "Basic – Tailwind CSS Template",
    link: "#0",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 4,
    image: image4,
    title: "Gearix Car repair App",
    link: "#0",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
];

const Certification = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {certificationData.map((certification, id) => (
          <CertificationItem certification={certification} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Certification;

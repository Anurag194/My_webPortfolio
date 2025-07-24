import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  image,
  description,
  subDescription,
  href,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center py-10 justify-between space-y-4 sm:flex sm:space-y-0
    "
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" alt="" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent to-transparent via-neutral-700 w-full h-[1px]" />
      {isHidden && (
        <ProjectDetails
          title={title}
          desciption={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;

import { useEffect, useState } from "react";

type PictureResponse = {
  message: string;
  status: string;
};

const DogPics = () => {
  // API: https://dog.ceo/dog-api/
  const [image, setImage] = useState<PictureResponse>({
    message: "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg",
    status: "success",
  });
  const [click, setClick] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const data: PictureResponse = await response.json();
        setImage(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [click]);

  const handleClick = () => {
    const newClick = click + 1;
    setClick(newClick);
  };

  return (
    <>
      <h3>TASK</h3>
      <ul>
        <li>
          Use the dog.ceo to fetch a random dog image and display that image on
          page load instead of the hardcoded one there now
        </li>
        <li>
          When the dog button is clicked, fetch a new dog image and render it on
          the UI instead
        </li>
      </ul>
      <div className="dog-pics">
        <img src={image.message} />
        <button onClick={handleClick}>🐶</button>
      </div>
    </>
  );
};

export default DogPics;

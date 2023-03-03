import { useEffect, useState } from "react";
import Catcher from "./catcher";
import Caught from "./caught";

const Dogs = () => {
  const [breeds, setBreeds] = useState([]);
  const [caught, setCaught] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        const options = Object.getOwnPropertyNames(data.message);
        setBreeds(options);
      })
      // FUTURE- handle errors
      .catch((e) => console.log(e));
  }, []);

  const handleSetCaught = (caughtBreed) => {
    fetch(`https://dog.ceo/api/breed/${caughtBreed}/images`)
      .then((res) => res.json())
      .then((data) => {
        // Filter caught list to see if we already have caught this breed
        const filtered = caught.filter((dog) => dog.breed === caughtBreed);
        // If we do, get the next image for this breed || get first image
        let newBreedImage = data.message[filtered.length];
        // Set a new object element to add to the caught array
        let newDog = { breed: caughtBreed, image: newBreedImage };
        // Finally add new dog breed to caught array
        handleAddingNewBreed(newDog);
      })
      // FUTURE- handle errors
      .catch((e) => console.log(e));
  };

  const handleCatchRandom = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        let newImageURL = data.message;
        // Get breed from image URL
        const breedStartIndex = newImageURL.indexOf("breeds/");
        let breed = newImageURL.substring(breedStartIndex + 7);
        const breedEndIndex = breed.indexOf("/");
        breed = breed.substring(0, breedEndIndex);
        let newDog = { breed: breed, image: newImageURL };
        // Finally add new dog breed to caught array
        handleAddingNewBreed(newDog);
      })
      // FUTURE- handle errors
      .catch((e) => console.log(e));
  };

  const handleAddingNewBreed = (newDog) => {
    // Finally add new dog breed to caught array
    let allDogs = [...caught];
    allDogs.unshift(newDog);
    setCaught(allDogs);
  };

  const handleRemove = (img) => {
    let allDogs = [...caught];
    allDogs = allDogs.filter((dog) => dog.image !== img);
    setCaught(allDogs);
  };

  const handleClearAll = () => {
    setCaught([]);
  };

  return (
    <>
      <Catcher
        setCaught={handleSetCaught}
        options={breeds}
        catchRandom={handleCatchRandom}
      />
      <Caught
        caught={caught}
        clearAll={handleClearAll}
        removeDog={handleRemove}
      />
    </>
  );
};

export default Dogs;

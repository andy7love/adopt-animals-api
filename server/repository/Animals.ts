import IAnimal from './IAnimal';

const animalsRepository: Array<IAnimal> = [
    {
        id: 1,
        name: 'Pepe'
    }
];

export const getNextId = () => {
    var animalWithHighestId = animalsRepository.sort((a, b) => b.id - a.id)[0];
    if (animalWithHighestId === undefined) {
      return 1; // List is empty, so use 1 as first animal id.
    } else {
      return animalWithHighestId.id + 1; // List is not empty, increase one to the highest id for the next animal.
    }
}

export default animalsRepository;
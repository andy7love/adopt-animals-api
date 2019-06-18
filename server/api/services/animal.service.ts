import Promise from 'bluebird';
import L from '../../common/logger'
import IAnimal from '../../repository/IAnimal';
import animalsRepository, { getNextId } from '../../repository/Animals';

export class AnimalService {
  all(): Promise<IAnimal[]> {
    L.info(animalsRepository, 'fetch all animals');
    return Promise.resolve(animalsRepository);
  }

  byId(id: number): Promise<IAnimal> {
    L.info(`fetch animal with id ${id}`);
    return Promise.resolve(animalsRepository.find(a => a.id === id));
  }

  create(animal: Omit<IAnimal, 'id'>): Promise<IAnimal> {
    L.info(`create animal with name ${animal.name}`);
    const newAnimal: IAnimal = {
      id: getNextId(),
      name: animal.name
    };
    animalsRepository.push(newAnimal)
    return Promise.resolve(newAnimal);
  }
}

export default new AnimalService();

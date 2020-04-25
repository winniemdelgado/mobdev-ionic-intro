import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
const STORAGE_KEY = 'favouriteEpsisodes';
 
@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
 
  constructor(private storage: Storage) { }
 
  getEpisodes() {
    return this.storage.get(STORAGE_KEY);
  }
 
  isFavourite(episode_id) {
    return this.getEpisodes().then(result => {
      return result && result.indexOf(episode_id) !== -1;
    });
  }
 
  favouriteEpisode(episode_id) {
    return this.getEpisodes().then(result => {
      if (result) {
        result.push(episode_id);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [episode_id]);
      }
    });
  }
 
  unfavouriteEpisode(episode_id) {
    return this.getEpisodes().then(result => {
      if (result) {
        var index = result.indexOf(episode_id);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
 
}

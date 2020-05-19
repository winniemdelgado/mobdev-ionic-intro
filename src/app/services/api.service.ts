import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get('https://thawing-journey-42669.herokuapp.com/assets/episodes.json')
    }

    getEpisode(id) {
        return this.http.get('https://thawing-journey-42669.herokuapp.com/assets/episode.json');
    }
    getCharacters() {
        return this.http.get('https://thawing-journey-42669.herokuapp.com/assets/characters.json')
    }

    getCharacter(char_id) {
        return this.http.get('https://thawing-journey-42669.herokuapp.com/assets/characters.json/assets/character.json');
    }
    getQuotes() {
        return this.http.get('https://thawing-journey-42669.herokuapp.com/assets/characters.json/assets/quotes.json')
    }

    getQuote(quote_id) {
        return this.http.get('https://thawing-journey-42669.herokuapp.com/assets/characters.json/assets/quote.json');
    } 
    
    getDeaths() {
        return this.http.get('https://thawing-journey-42669.herokuapp.com/assets/characters.json/assets/deaths.json')
    }
}

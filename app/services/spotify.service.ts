import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;
    private ACCESS_TOKEN : String;
    constructor(private _http:Http){
        this.ACCESS_TOKEN = 'BQCW2YoXg9np219tpl5Ah3cCWstzAOsjkHuqY2T6Ffu-FxMqY47EqH7rsLGGjw-W31Ff_nRcsy19z-tSOaJ0zCpXsbeno1SMUB3ZeQRdr8cO8KmWS1BsLkQvjZC92wBJ1b1KI_LEk4ethyq8P1cNYYf22k_JpeW-EVvdGTij20yrYiDjx8M&refresh_token=AQBtmmGJSaz_u3zZ69uimlQg76XBaBMRIwbbAksNx2a1tHJVt4AixS0OnF0dcF5UdNBlAAeSMy9L1DACCyPGI_ywrKkYbwQF8bBF4MK7e_qJteobwlY8UTGKXQY7-08MEAg';
    }
    
    searchMusic(str:string, type='artist'){
        let headers = new Headers();
        // tslint:disable-next-line:max-line-length
        let authToken = this.ACCESS_TOKEN;
        headers.append('Authorization', 'Bearer '+authToken);
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl, { headers })
            .map(res => res.json());
    }
    
    getArtist(id:string){

        let headers = new Headers();
        // tslint:disable-next-line:max-line-length
        let authToken = this.ACCESS_TOKEN;
        headers.append('Authorization', 'Bearer '+authToken);
        this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
        return this._http.get(this.artistUrl, { headers })
            .map(res => res.json());
    }
    
    getAlbums(artistId:string){

        let headers = new Headers();
        // tslint:disable-next-line:max-line-length
        let authToken = this.ACCESS_TOKEN;
        headers.append('Authorization', 'Bearer '+authToken);
        this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
        return this._http.get(this.albumsUrl, { headers })
            .map(res => res.json());
    }
    
    getAlbum(id:string){

        let headers = new Headers();
        // tslint:disable-next-line:max-line-length
        let authToken =this.ACCESS_TOKEN;
        headers.append('Authorization', 'Bearer '+authToken);
        this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
        return this._http.get(this.albumUrl, { headers })
            .map(res => res.json());
    }
}
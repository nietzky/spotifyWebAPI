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
        this.ACCESS_TOKEN = 'BQCbWKcQn5e-GoW4ZFbMifCtTDtJgDKy3cXBo8LYNW4F6j38SuyiWcJ3exFlIfbV--UxGKpFdy7wyiZTXA-Pn5ymNVXq7_3syHH9qCRFcATAyZabvv7p6l8U-nTK5CZz80LPWPL9XF8hiumHqBUqstoUGwPCoheFMPj98XSJndHutvAf-2Y&refresh_token=AQB_QIIV8vgL10aws8fFTuZxq0NbIRoEwQsYZ0flWsg0FNLkwzJNxXS4uMUrL2bbrSs3YSoWbqOvOCLn0FpMOhuN3VTbjrourI1PG6RFUVmH_VwqPyrGPlsuAQij2OoL9h4';
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
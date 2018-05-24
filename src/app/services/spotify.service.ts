import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
//Para map
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {

  artistas:any[]=[];
  urlSpotify:string='https://api.spotify.com/v1/';
  token:string="BQD-lg7FtrGoV5j-n1DL9P80toC9K11djD9NDU75hqycZSwxectPrVoYCnRL5xmmf-DoWx_wzCF_43GOLh8";
  country:string="US";

  constructor(public http:HttpClient) {
    console.log("Servicio spotify listo");
  }

  private getHeaders():HttpHeaders{
    let headers=new HttpHeaders({
      'authorization': 'Bearer '+this.token
    });
    return headers;
  }

  getTop(id:string)
  {
    let url=`${this.urlSpotify}artists/${id}/top-tracks?country=${this.country}`;

    return this.http.get(url,{ headers:this.getHeaders()});

  }

  getArtista(id:string)
  {
    let url=`${this.urlSpotify}artists/${id}`;

     return this.http.get(url,{ headers:this.getHeaders()});
  }

  getArtistas(termino:string)
  {
    let url=`${this.urlSpotify}search?query=${termino}&type=artist&limit=20`;

     return this.http.get(url,{ headers:this.getHeaders()})
     .map((resp:any) =>{
            this.artistas =resp.artists.items;
          return this.artistas;
     });
  }

}

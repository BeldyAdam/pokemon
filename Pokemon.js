export default class Pokemon {
    #nev="";
    #kep="";
    #mondat="";
    #szuloElem="";
    constructor(nev, kep, mondat, szuloElem){
        this.#nev = nev;
        this.#kep = kep;
        this.#mondat = mondat;
        this.#szuloElem = szuloElem;
  /*       this.#megjelenit(); */
    }

    get nev(){
        return this.#nev;
    }

    get kep(){
        return this.#kep;
    }

    get mondat(){
        return this.#mondat;
    }

    get szuloElem(){
        return this.#szuloElem;
    }

    set nev(nev){
        this.#nev = nev;
    }

    set kep(kep){
        this.#kep = kep;
    }

    set mondat(mondat){
        this.#mondat = mondat;
    }

    set szuloElem(szuloElem){
        this.#szuloElem = szuloElem;
    }

    #htmlOsszeallit(){
        let txt=`<div class="poki">
        <h3>${this.#nev}</h3>
        <img style="width:300px" src="${this.#kep}" alt="${this.#nev}">
        </div>`;
        return txt;
    }

    megjelenit(){
        this.szuloElem.append(this.#htmlOsszeallit());
    }

    beszel(){
        console.log(this.mondat);
    }
}
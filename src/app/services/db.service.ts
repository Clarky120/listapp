import { Injectable } from '@angular/core';
const PouchDB = require('pouchdb-browser').default;

@Injectable({
  providedIn: 'root'
})

export class DbService {
  public db;
  public currentList: listObject | undefined;

  constructor() { }

  connectToDB() {
    this.db = new PouchDB("listdb");
  }

  async createList(name: string) {
   await this.db?.put({
      _id: name,
      items: []
    }).then((res) => {
      if (res.ok) {
        console.log("New Item Added")
      }
    })
  }

  async updateList(list: doc) {
    await this.db?.put({
      _id: list._id,
      _rev: list._rev,
      items: list.items
    }).then((res) => {
      if (res.ok) {
        console.log("List Updated")
        list._rev = res.rev
      }
    })

    return list;
  }

  async deleteList(list: listObject) {
    await this.db?.get(list._id).then((doc) => {
      return this.db?.remove(doc);
    }).then((res) => {
      if (res?.ok) {
        console.log("Deleted list")
      }
    })
  }

  async getAllLists() {
    return (await this.db?.allDocs({include_docs: true}))?.rows || [];
  }

  async getList(key: string) {
    return await this.db?.get(key);
  }

  setActiveList(list: listObject) {
    this.currentList = list;
  }
}

export interface listObject {
  _id: string;
  key: string;
  value: rev;
  doc: doc;
}

export interface rev {
  rev: string
}

export interface doc {
  items: itemObject[];
  _id: string;
  _rev: string;
}

export interface itemObject {
  name: string;
  complete: boolean
}

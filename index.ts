'use strict';

import * as fs from 'fs';
import example from './lib/example';

console.log(example);

// Boolean
let isAuth: boolean = false;

// Number
let songCount: number = 6;

// String
let food: string = '雞腿';

// Any
let notSure: any = 'whatever it is';
notSure = 200;
notSure = false;
notSure = ['Anything', 'else'];

// Array
let playlist: string[] = ['Song1', 'Song2', 'Song3'];

// Function
function getAlbumName(albumId: number): string {
  return '派對動物';
}

// Void
function runaway(): void {
  alert('你只能戴上耳機，假裝自己離開了這個世界');
  // Will cause an error
  // return false;
}

// Object
let query: {
  url: string,
  timeout: number
};

query = {
  url: 'https://fake.com',
  timeout: 1000
};

// Function + Object
function fetchFromApi(query: {url: string, timeout: number}): string {
  return 'something';
}

fetchFromApi(query);

// Union Types
let SerialNumber: string | number;
SerialNumber = '123';
SerialNumber = 123;
// Error
// SerialNumber = [123];

// Assigned-before-use checking
// alert(SerialNumber);

// Enum Type
enum Identity {
  Follower,
  DJ,
  VIP
}

// 可以看到實作是透過 Object
let userIdentity: Identity = Identity.DJ;

// Interface
interface Fruit {
  name: string,
  price: number 
}

let banana: Fruit = {
  name: 'banana',
  price: 39
};

function pick(fruit: Fruit) {
  alert(fruit.name);
}

// Namespaces
namespace WebTeam {
  export class Member {
    private _name;
    constructor(name: string) {
      this._name = name;
    }
    public hello(): string {
      return `Hello from WebTeam ${this._name}`;
    }
  }
}

namespace BillingTeam {
  export class Member {
    private _name;
    constructor(name: string) {
      this._name = name;
    }
    public hello(): string {
      return `Hello from Billing ${this._name}`;
    }
  }
}

let member: WebTeam.Member = new WebTeam.Member('ajhsu');
console.log(member.hello());
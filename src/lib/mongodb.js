// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // MongoDB 연결 문자열
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
    throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
    // 개발 모드에서는 HMR(핫 모듈 교체)에 의한 모듈 리로드로 값이 유지되도록 전역 변수 사용
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // 생산 모드에서는 전역 변수 사용을 피하는 것이 좋음
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
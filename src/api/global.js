// pages/api/global.js
// import clientPromise from '../../lib/mongodb';
// import { Reader } from '@maxmind/geoip2-node';
/* 
export default async function handler(req, res) {
    if (req.method === 'GET') {

    }
    if (req.method === 'UPDATE') {
        try {
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || '128.101.101.101'; // Example IP
            // GeoLite2 데이터베이스를 열고 방문자의 IP 주소를 조회합니다.
            const reader = await Reader.open('public/GeoLite2-City.mmdb');
            const response = reader.city(ip); // 여기서 방문자의 IP 주소를 사용합니다.
            const countryName = response.country.names.en;

            console.log(response.country.isoCode);
            console.log("🚀 ~ countryName:", countryName);

            // 국가 ISO 코드를 사용하여 globalcount 테이블을 업데이트합니다.
            // await updateGlobalCount(response.country.isoCode);
            res.send(`Country ISO Code: ${response.country.isoCode}, Country Name: ${countryName}`);
            run().catch(console.dir, response.country.isoCode);
        } catch (err) {
            console.error('Error:', err);
            res.status(500).send('오류 발생: IP 정보를 검색하는 중 오류가 발생했습니다.');
        }
    }
}
 */

/************************************
 * connect to mongodb
 ************************************/
/* const uri = "mongodb+srv://root:<password>@cluster0.uopdn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    await client.close();
    }
} */
// run().catch(console.dir);

/************************************
 * updateGlobalCount
 ************************************/
/* export async function updateGlobalCount(isocode) {
    // Connect to the database
    const client = await clientPromise;
    const db = client.db("globalcount");

    try {
        db.collection('globalcount').updateOne(
            { country_name: isocode },
            { $inc: { count: 1 } },
            { upsert: true }
        );
        res.status(200).json({success: true, message: `Count updated for country: ${countryIsoCode}`});
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
} */
import Image from 'next/image'
import styles from './page.module.css';
const fetchUser= async ()=>{
  let resp= await fetch (`${process.env.HOST}/helloapi`, {cache:"no-cache"});
  resp = resp.json();
  return resp;
}
export default async function Home() {
  const users= await fetchUser()
  console.log(users);
  return (
    <main className={styles.main}>
      <h1>Deploy Next js project on vercel</h1>
      <Image src="/pic.jpg" alt='img' width={300} height={200}/>
      {
        users.result.map((item, ind)=>
        (
          <div key={ind}>
            <h1> {item.name}</h1>
            <h3>{item.age}</h3>
            <h3>{item.address}</h3>

          </div>
        )

        )
      }
      <p>this project is developed for testing purpose</p>
    </main>
  )
}

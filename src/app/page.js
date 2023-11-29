import Image from 'next/image'
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Deploy Next js project on vercel</h1>
      <Image src="/pic.jpg" alt='img' width={300} height={200}/>
      <p>this project is developed for testing purpose</p>
    </main>
  )
}

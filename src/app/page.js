
import Product from '@/components/products/product'
import styles from './page.module.css'
import Products from '@/components/products/products'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <Products></Products>
     
    </main>
  )
}

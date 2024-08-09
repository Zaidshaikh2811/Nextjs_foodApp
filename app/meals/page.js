import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react';



async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals}></MealsGrid>
}



export default function MealsPage() {


    return <>
        <header className={classes.header}>
            <h1>Delicious meals , created <span className={classes.highlight}>By You</span></h1>
            <p>Choose your Favorite Recipe and Cook ur by Yourself.it is easy and fun!</p>

            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share Your Favorite Recipe</Link>
            </p>

        </header>
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Meals Loading...</p>}>

                <Meals></Meals>
            </Suspense>
        </main>
    </>
}
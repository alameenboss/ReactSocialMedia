import React from 'react'
import Movie from '../Movie/Movie'
import Counter from '../Counter/Counter'
import Footer from '../Shared/Footer/Footer';
export default function Example() {
    return (
        <div>
        <hr></hr>
          <Counter></Counter>
          <hr></hr>
          <Movie></Movie>
          <Footer></Footer>
        </div>
    )
}

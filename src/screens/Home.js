import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


export default function Home() {

  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);

    // console.log(response[0], response[1]);

  }

  useEffect(() => {
    loadData()
  }, [])


  return (
    <div>
      <div> <Navbar></Navbar></div>
      <div> <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "fill " }}>
        <div className="carousel-inner" id='carousel'>
          <div class='carousel-caption' style={{ zIndex: "10" }}>
            <div class="d-flex justify-content-center">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
              { /* <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
            </div>
          </div>
          <div className="carousel-item active">
            <img src="https://media.istockphoto.com/id/1292629539/photo/paneer-tikka-masala-is-a-famous-indian-dish-served-over-a-rustic-wooden-background-selective.jpg?s=2048x2048&w=is&k=20&c=GcRz5K9aTBs7_jK9YIXnYRrAtHXcN-mOLJbTqsq4Iyw=" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item" >
            <img src="https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00=" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item" >
            <img src="https://media.istockphoto.com/id/1303119992/photo/pizza_margerita.jpg?s=612x612&w=0&k=20&c=0HZZMC10ySBYvMVAKUNzknkQ1E74q8NKwTV5_K6WK6M=" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>


      <div className='Container'>
        {
          foodCat.length > 0
            ? foodCat.map((data) => {
              return (<div className='row mb-3 '>
                <div key={data._id} className='fs-3 m-5'>
                  {data.CategoryName}
                </div>
                <hr></hr>
                {foodItem.length > 0 ?
                  foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())) )
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                          <Card foodItem={filterItems}
                            options={filterItems.options[0]}
                          ></Card>
                        </div>
                      )
                    })
                  : <div>No Such Data Found</div>}
              </div>
              )
            }) : ""
        }

      </div>

      <div><Footer></Footer></div>
    </div>
  )
}

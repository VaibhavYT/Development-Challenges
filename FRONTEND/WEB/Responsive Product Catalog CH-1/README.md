# Frontend Development Challenge 1: Responsive Product Catalog

Welcome to the Frontend Development Challenge 1! 🚀 In this challenge, you will create a responsive webpage that displays a product catalog using Bootstrap. The catalog should have the following features:

## My Solution
You can view my solution live [here](https://vaibhavyt.github.io/Development-Challenges/FRONTEND/WEB/Responsive%20Product%20Catalog%20CH-1/).

## Challenge Description

Your task is to build a webpage with the following components:

1. **Navigation Bar**: Create a navigation bar at the top with links to Home, Products, and Contact Us.

2. **Header**: Design an attractive header with a title and a brief description.

3. **Product Grid**: Implement a grid layout to display product cards. Each card should contain the following:

   - Product Image
   - Product Name
   - Product Price
   - "Buy Now" button

4. **Responsive Design**: Ensure that the product cards arrange themselves into multiple columns on larger screens and a single column on smaller screens. Make sure the page looks good on both desktop and mobile devices.

## Screenshots

**PC View**
[Uploading Respo<!DOCTYPE html>
<!-- saved from url=(0102)https://vaibhavyt.github.io/Development-Challenges/FRONTEND/WEB/Responsive%20Product%20Catalog%20CH-1/ -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Include Bootstrap CSS from a CDN (Content Delivery Network) -->
    <link href="./Responsive Product Catalog_files/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- Custom CSS for styling -->
    <style>
      /* Media query to center cards on screens with a maximum width of 768px */
      @media (max-width: 768px) {
        .center-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      }

      /* Styling for card images */
      .card img {
        max-width: 100%;
        height: auto;
        padding: 4px;
      }

      /* Padding for the page title */
      h1 {
        padding-top: 15px;
      }

      /* Rainbow color shadow on card hover */
      .card {
        transition: box-shadow 0.3s ease;
      }

      .card:hover {
        animation: rainbowShadow 3s infinite;
        transform: scale(1.05);
      }

      @keyframes rainbowShadow {
        0% {
          box-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
        }
        14% {
          box-shadow: 0 0 5px rgba(255, 127, 0, 0.8);
        }
        28% {
          box-shadow: 0 0 5px rgba(255, 255, 0, 0.8);
        }
        42% {
          box-shadow: 0 0 5px rgba(0, 255, 0, 0.8);
        }
        57% {
          box-shadow: 0 0 5px rgba(0, 0, 255, 0.8);
        }
        71% {
          box-shadow: 0 0 5px rgba(75, 0, 130, 0.8);
        }
        85% {
          box-shadow: 0 0 5px rgba(148, 0, 211, 0.8);
        }
        100% {
          box-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
        }
      }
    </style>

    <title>Responsive Product Catalog</title>
  </head>
  <body>
    <!-- Navigation bar using Bootstrap -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="https://vaibhavyt.github.io/Development-Challenges/FRONTEND/WEB/Responsive%20Product%20Catalog%20CH-1/#">Home</a>
        <!-- Navbar toggle button for mobile -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="https://vaibhavyt.github.io/Development-Challenges/FRONTEND/WEB/Responsive%20Product%20Catalog%20CH-1/#">Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="https://vaibhavyt.github.io/Development-Challenges/FRONTEND/WEB/Responsive%20Product%20Catalog%20CH-1/#">Contact Us</a>
            </li>

            <li class="nav-item"></li>
          </ul>
          <!-- Search form in the navbar -->
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <!-- Page Title -->
    <div class="container text-center">
      <h1>Welcome To Product Catalog Page</h1>
    </div>
    <!-- Container for Cards -->
    <div class="container col flex-sm-row">
      <div class="row center-cards">
        <div class="card m-3 " style="width: 18rem">
          <img src="./Responsive Product Catalog_files/bike.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Bike</h5>
            <p class="card-text">Buy this awesome Bike</p>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <p>$345.0</p>
              <button type="button" class="btn btn-dark">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card m-3 " style="width: 18rem">
          <img src="./Responsive Product Catalog_files/car.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Car</h5>
            <p class="card-text">Buy this awesome Car</p>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <p>$8985.0</p>
              <button type="button" class="btn btn-dark">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card m-3 " style="width: 18rem">
          <img src="./Responsive Product Catalog_files/chair.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Chair</h5>
            <p class="card-text">Buy this awesome Chair</p>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <p>$15.0</p>
              <button type="button" class="btn btn-dark">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card m-3 " style="width: 18rem">
          <img src="./Responsive Product Catalog_files/cycle.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Cycle</h5>
            <p class="card-text">Buy this awesome Cycle</p>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <p>$55.0</p>
              <button type="button" class="btn btn-dark">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card m-3 " style="width: 18rem">
          <img src="./Responsive Product Catalog_files/house.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">House</h5>
            <p class="card-text">Buy this awesome House</p>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <p>$345.0</p>
              <button type="button" class="btn btn-dark">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card m-3 " style="width: 18rem">
          <img src="./Responsive Product Catalog_files/keyboard.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Keyboard</h5>
            <p class="card-text">Buy this awesome Keyboard</p>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <p>$35.0</p>
              <button type="button" class="btn btn-dark">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card m-3 " style="width: 18rem">
          <img src="./Responsive Product Catalog_files/laptop.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Laptop</h5>
            <p class="card-text">Buy this awesome Laptop</p>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <p>$455.0</p>
              <button type="button" class="btn btn-dark">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card m-3 " style="width: 18rem">
          <img src="./Responsive Product Catalog_files/mouse.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Mouse</h5>
            <p class="card-text">Buy this awesome Mouse</p>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <p>$15.0</p>
              <button type="button" class="btn btn-dark">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card m-3 " style="width: 18rem">
          <img src="./Responsive Product Catalog_files/phone.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Phone</h5>
            <p class="card-text">Buy this awesome Phone</p>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <p>$95.0</p>
              <button type="button" class="btn btn-dark">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Include Bootstrap JS from a CDN -->
    <script src="./Responsive Product Catalog_files/bootstrap.bundle.min.js.download" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  

</body></html>nsive Product Catalog.html…]()




![Solution-1](https://github.com/VaibhavYT/Development-Challenges/assets/78371075/d42924ef-5f93-46c5-9184-d28639f2ef22)


**Mobile View**

![mobile-sol](https://github.com/VaibhavYT/Development-Challenges/assets/78371075/1470c9e1-b928-4b84-b439-0014a484c49f)


## Instructions

You can use Bootstrap's grid system, components, and utility classes to achieve this challenge. Feel free to create a simple example or ask for more specific guidance on any part of the challenge.

## Submission

When you have completed the challenge, share your code or describe your approach in this repository. You must follow contribution steps given on the main page.

## Feedback and Assistance

If you have any questions, need feedback, or require assistance, don't hesitate to reach out. Happy coding! 🔥

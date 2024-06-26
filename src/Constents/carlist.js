import cardimgcybertruck from "../Assets/card-img-Cybertruck-1x.avif"
import cardimgmodelx from "../Assets/card-img-Model-X.avif"
import cardimgmodely from "../Assets/card-img-Model-Y.avif"
import cardimgmodels from "../Assets/card-img-models.avif"
import cardimgmodels3 from "../Assets/card-img-models3.avif"
import modelsRed from "../Assets/model-s-red.webp"
import modelsBlue from "../Assets/model-s-blue.webp"
import modelsGray from "../Assets/model-s-gray.webp"
import modelsWhite from "../Assets/model-s-white.webp"
import modelsBlack from "../Assets/model-s-black.webp"
import model3Black from "../Assets/model-3-black.webp"
import model3Gray from "../Assets/model-3-gray.webp"
import model3White from "../Assets/model-3-white.webp"
import model3Red from "../Assets/model-3-red.webp"
import model3Blue from "../Assets/model-3-blue.webp"
import modelxBlack from "../Assets/model-x-black.webp"
import modelxBlue from "../Assets/model-x-blue.webp"
import modelxGray from "../Assets/model-x-gray.webp"
import modelxRed from "../Assets/model-x-red.webp"
import modelxWhite from "../Assets/model-x-white.webp"
import modelsplaidheroimg from "../Assets/model-splaid-heroimg.jpg"
import model3heroimg2 from "../Assets/model-3-heroimg.jpeg"
import modelxheroimg from "../Assets/model-x-heroimg.jpg"
import modelyheroimg from "../Assets/model-y-heroimg.webp"
import cybertruckheroimg from "../Assets/cybertruck-heroimg.avif"
import interiormodely from "../Assets/interior-model-y.jpeg"
import interiormodel3 from "../Assets/interior-model-3.jpeg"
import interiormodels from "../Assets/interior-model-s.jpeg"
import interiorcybertruck from "../Assets/interior-cybertruck.avif"
import interiormodelx from "../Assets/interior-model-x.jpeg"





  export const carList = [
    {
      "id": 1,
      "name": "Model S Plaid",
      "price": "$129,990",
      "range": "396 miles",
      "description": "The quickest accelerating car in production, with a sleek design and advanced technology.",
      "image_url": cardimgmodels3,
      "max_speed": "200 mph",
      "mileage": "102 MPGe",
      "dimensions": "196″ L x 77″ W x 57″ H",
      "motor_spec": "Tri Motor All-Wheel Drive",
      "battery_life": "100 kWh",
      "driving_mode": "Ludicrous Mode",
      "interior": interiormodels,
      "video_link":"https://www.tesla.com/sites/default/files/videos/Plaid-Range-Web-Desktop-8mb.mp4",
      "heroimg":modelsplaidheroimg,
      "colorOptions":[{
        "id":0,
        "name":"Blood Red",
        "colorUrl":modelsRed,
        "colorCode":"red"
      },
      {
        "id":1,
        "name":"Sea Blue",
        "colorUrl":modelsBlue,
        "colorCode":"blue"
      },
      {
        "id":2,
        "name":"Ash Gray",
        "colorUrl":modelsGray,
        "colorCode":"gray"
      },
      {
        "id":3,
        "name":"Pease White",
        "colorUrl":modelsWhite,
        "colorCode":"white"
      },
      {
        "id":4,
        "name":"Black Cat",
        "colorUrl":modelsBlack,
        "colorCode":"black"
      },
    ]
    },
    {
      "id": 2,
      "name": "  Model 3",
      "price": "$40,240",
      "range": "358 miles",
      "description": "An affordable electric car with great performance and advanced technology.",
      "image_url": cardimgmodely,
      "max_speed": "145 mph",
      "mileage": "132 MPGe",
      "dimensions": "185″ L x 73″ W x 57″ H",
      "motor_spec": "Dual Motor All-Wheel Drive",
      "battery_life": "75 kWh",
      "driving_mode": "Sport Mode",
      "interior": interiormodel3,
      "video_link":"https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-X-Interior-Carousel-4-Spacious-Cabin-Desktop.mp4",
      "heroimg":model3heroimg2,
      "colorOptions":[{
        "id":0,
        "name":"Blood Red",
        "colorUrl":model3Red,
        "colorCode":"red"
      },
      {
        "id":1,
        "name":"Sea Blue",
        "colorUrl":model3Blue,
        "colorCode":"blue"
      },
      {
        "id":2,
        "name":"Ash Gray",
        "colorUrl":model3Gray,
        "colorCode":"gray"
      },
      {
        "id":3,
        "name":"Pease White",
        "colorUrl":model3White,
        "colorCode":"white"
      },
      {
        "id":4,
        "name":"Black Cat",
        "colorUrl":model3Black,
        "colorCode":"black"
      },
    ]
    },
    {
      "id": 3,
      "name": "  Model X",
      "price": "$98,490",
      "range": "348 miles",
      "description": "A versatile and high-performance SUV with falcon-wing doors.",
      "image_url": cardimgmodelx,
      "max_speed": "155 mph",
      "mileage": "105 MPGe",
      "dimensions": "198″ L x 79″ W x 66″ H",
      "motor_spec": "Dual Motor All-Wheel Drive",
      "battery_life": "100 kWh",
      "driving_mode": "Ludicrous Mode",
      "interior": interiormodelx,
      "video_link":"https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-X-Interior-Carousel-1-Cinematic-Display-Desktop-Global.mp4",
      "heroimg":modelxheroimg,
      "colorOptions":[{
        "id":0,
        "name":"Blood Red",
        "colorUrl":modelxRed,
        "colorCode":"red"
      },
      {
        "id":1,
        "name":"Sea Blue",
        "colorUrl":modelxBlue,
        "colorCode":"blue"
      },
      {
        "id":2,
        "name":"Ash Gray",
        "colorUrl":modelxGray,
        "colorCode":"gray"
      },
      {
        "id":3,
        "name":"Pease White",
        "colorUrl":modelxWhite,
        "colorCode":"white"
      },
      {
        "id":4,
        "name":"Black Cat",
        "colorUrl":modelxBlack,
        "colorCode":"black"
      },
    ]
    },
    {
      "id": 4,
      "name": "  Model Y",
      "price": "$52,990",
      "range": "326 miles",
      "description": "A compact SUV with advanced safety features and versatile interior.",
      "image_url": cardimgmodels,
      "max_speed": "135 mph",
      "mileage": "121 MPGe",
      "dimensions": "187″ L x 75″ W x 64″ H",
      "motor_spec": "Dual Motor All-Wheel Drive",
      "battery_life": "75 kWh",
      "driving_mode": "Off-Road Assist",
      "video_link":"https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-Y-Charge-Deskop.mp4",
      "interior": interiormodely,
      "heroimg":modelyheroimg,
      "colorOptions":[{
        "id":0,
        "name":"Blood Red",
        "colorUrl":modelxRed,
        "colorCode":"red"
      },
      {
        "id":1,
        "name":"Sea Blue",
        "colorUrl":modelxBlue,
        "colorCode":"blue"
      },
      {
        "id":2,
        "name":"Ash Gray",
        "colorUrl":modelxGray,
        "colorCode":"gray"
      },
      {
        "id":3,
        "name":"Pease White",
        "colorUrl":modelxWhite,
        "colorCode":"white"
      },
      {
        "id":4,
        "name":"Black Cat",
        "colorUrl":modelxBlack,
        "colorCode":"black"
      },
    ]
    },
    {
      "id": 5,
      "name": "  Cyber Truck",
      "price": "$69,900",
      "range": "500 miles",
      "description": "A futuristic electric truck with unparalleled durability and performance.",
      "image_url": cardimgcybertruck,
      "max_speed": "130 mph",
      "mileage": "325 MPGe",
      "dimensions": "231″ L x 79″ W x 75″ H",
      "motor_spec": "Tri Motor All-Wheel Drive",
      "battery_life": "200 kWh",
      "driving_mode": "Adaptive Air Suspension",
      "interior": interiorcybertruck,
      "video_link":"https://digitalassets.tesla.com/tesla-contents/video/upload/Cybertruck-Beyond-Prepared-Desktop.mp4 ",
      "heroimg":cybertruckheroimg,
      "colorOptions":[{}]
    },
    
  ]


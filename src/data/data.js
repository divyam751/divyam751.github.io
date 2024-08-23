import chkralogo from "../images/logo/chakra.png";
import reduxlogo from "../images/logo/redux.png";
import scsslogo from "../images/logo/scss.png";
import nodejs from "../images/logo/nodejs.png";
export default function getProjects() {
  return [
    {
      id: 1,
      image: "CarRental.png",
      projectTitle: "🚗 CarRental",
      projectInfo:
        "Car Rental Website, a responsive platform designed to provide a seamless car rental experience.",
      techUsed: [
        "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        "https://miro.medium.com/v2/resize:fit:3614/1*5z5g2wKCOUqWHPBbFjNbfA.png",
        "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      ],
      projectLinkHosted: "https://dc-car-rental.vercel.app/",
      projectLinkGithub: "https://github.com/divyam751/CAR-Rental",
    },
    {
      id: 2,
      image: "FetchMaster.png",
      projectTitle: "👨‍🎓 FetchMaster",
      projectInfo:
        "Fetch-Master project is designed to simplify API requests by allowing users to create and manage different tabs for various requests, it support GET, POST, PUT, DELETE, and PATCH requests",
      techUsed: [
        "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        "https://miro.medium.com/v2/resize:fit:3614/1*5z5g2wKCOUqWHPBbFjNbfA.png",
        "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      ],
      projectLinkHosted: "https://fetch-master.vercel.app/",
      projectLinkGithub: "https://github.com/divyam751/FetchMaster",
    },

    {
      id: 3,
      image: "Voyawander.png",
      projectTitle: "✈️ Voyawander",
      projectInfo:
        "Voyawander, your ultimate travel companion! It's a full-stack project built to help you plan your dream trips.",
      // techUsed: `MongoDB | Express.js | React.js | Node.js  | Chakra UI`,
      techUsed: [
        "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
        "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        `${nodejs}`,
        `${chkralogo}`,
      ],
      projectLinkHosted: "https://dc-voyawander.vercel.app/",
      projectLinkGithub: "https://github.com/divyam751/Voyawander",
    },
    {
      id: 4,
      image: "KFC.png",
      projectTitle: "🐔 KFC-Clone",
      projectInfo:
        "Explore our virtual chicken paradise where you can browse our mouthwatering menu, This is a solo project that replicates the functionality and design of the famous fast-food restaurant, KFC.",
      techUsed: [
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        `${chkralogo}`,
        "https://cdn-icons-png.flaticon.com/512/2164/2164832.png",
        "https://miro.medium.com/v2/resize:fit:300/1*1RDFnS8FgAOQFegtuynxWw.png",
      ],
      projectLinkHosted: "https://dc-kfc.vercel.app/",
      projectLinkGithub: "https://github.com/divyam751/KFC",
    },
    {
      id: 5,
      image: "Moviewood.png",
      projectTitle: "🍿 MovieWood",
      projectInfo:
        "Moviewood, your go-to destination for all things movies and TV shows!,This project built using IMDB API ,offering users a comprehensive platform for discovering and exploring their favorite films and television series.",
      techUsed: [
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        `${reduxlogo}`,
        `${scsslogo}`,
        `https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/171_Imdb_logo_logos-512.png`,
      ],
      projectLinkHosted: "https://dc-moviewood.vercel.app/",
      projectLinkGithub: "https://github.com/divyam751/MovieWood",
    },
    {
      id: 6,
      image: "OverStock.png",
      projectTitle: "🪑 OverStock",
      projectInfo:
        "A leading online retailer offering a wide range of products, from furniture and home decor to electronics and fashion. Providing seamless shopping experience with competitive prices and excellent customer service.",
      techUsed: [
        "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        "https://miro.medium.com/v2/resize:fit:3614/1*5z5g2wKCOUqWHPBbFjNbfA.png",
        "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
      ],
      projectLinkHosted: "https://jade-cascaron-47a5f4.netlify.app/",
      projectLinkGithub:
        "https://github.com/divyam751/Project-overstock/tree/main/orignalsite",
    },
    {
      id: 7,
      image: "Portfolio.png",
      projectTitle: "🖥️ Portfolio",
      projectInfo:
        "My portfolio project showcases a culmination of my passion for design and development, weaving together elegant aesthetics with seamless functionality to create visually stunning and user-friendly experiences.",
      techUsed: [
        "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        "https://miro.medium.com/v2/resize:fit:3614/1*5z5g2wKCOUqWHPBbFjNbfA.png",
        "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      ],
      projectLinkGithub: "https://github.com/divyam751/divyam751.github.io",
      projectLinkHosted: "https://divyam751.github.io/",
    },
  ];
}

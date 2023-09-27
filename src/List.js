import img from "./new york.jpg"
import imgp from "./paris.jpg"
import imgs from "./san francisco.webp"

const cities= [{
    img : img,
    name : "New York",
    date : "Fri 27 Nov 2016 ",
    para : "Praesent tincideunt sed tellus ur reesss" ,
    buy : "Buy Tickets"},
    {
    img : imgp,
    name : "Paris",
    date : "Fri 27 Nov 2016 ",
    para : "Praesent tincideunt sed tellus ur reesss" ,
    buy : "Buy Tickets"
    },
    {
    img : imgs,
    name : "SanFrancisco",
    date : "Fri 27 Nov 2016 ",
    para : "Praesent tincideunt sed tellus ur reesss" ,
    buy : "Buy Tickets"
    }
];

export default function Card(){
    return (
        <div className="parent">{
        cities.map(city => (
            <div>
            <div className="row">
            <div className="column">
                <div className="card">
                <img src={city.img} height="400" width="400"/>
                <h3>{city.name}</h3>
                {city.date} <br/>
                {city.para} <br/><br/>
                <button>{city.buy}</button>
            </div>
        </div>
        </div>
        </div> 
        ))
        }
        </div>
    );
    }

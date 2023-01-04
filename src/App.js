import NavBar from './components/NavBar'
import CardDetails from './components/CardDetails';
import images1 from '../src/images/image1.jpg'
import images2 from '../src/images/image2.jpg'
import images3 from '../src/images/image3.jpeg'
import images4 from '../src/images/image4.jpg'
import NotFound from './components/NotFound';
import FormInput from './components/Form';

const App = () => {
     const data = [{title: 'title1', description: 'description 1', img: images1 },
     {title: 'title2', description: 'description 2', img: images2 },
     {title: 'title3', description: 'description 3', img: images3 },
     {title: 'title4', description: 'description 4', img: images4 }]

     const printTitle = () => {
          alert("This is from app.js file", );
     }
     const onChangeHandler=(e) => { //use for search an item in the array list
          console.log(e.target.value)
     }

     const ch = false // this will make the array available or not available
     return(
          <div>
               <NavBar />
               <FormInput />
               {
                    ch ? (  //OR data.length ? ():()
                         //if we change data.length to ch, const ch will be active either true or false.
                         data.map((item, index)=> { //index is a param / can be anyname / in here, we want to add an index for our data.
                              return(
                                   <CardDetails index={index} title={item.title} description={item.description} img={item.img} clickMe={printTitle} />
                                   // we use index if we don't have id in our data. look at the inspect
                              )        
                         })
                    ) : (<NotFound message='No Data Cards Found' color='info' />)
               }
          </div>
     )
   }

   export default App;
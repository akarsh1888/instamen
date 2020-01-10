import React from "react";
import { firestore as db } from "../../firebase/firebase.utils";

import "./styles.css";

class App extends React.Component {
  

    constructor() {
        super();
        
        this.state = {
            data: []
        };
    }








    
    //.where('name', '==', 'akarsh')
    componentDidMount() {
      

//       db.collection("cafes")
//       .where('city', '==', 'lko')
//       .orderBy('name')
//       .get()
//       .then(collctnsnapshotObj => {
//           collctnsnapshotObj.docs.forEach(docsnapshotObj => {
              
//               const uid = docsnapshotObj.id;
//               const name = docsnapshotObj.data().name;
//               const city = docsnapshotObj.data().city;

//               this.setState((prevState) => ({
//                   data: [...prevState.data, {name,city,uid}],
                  
//                 }) )
//             });
//         });
        
      
        // real time listener ..this fires whenever collection is updated
        db.collection('cafes')
            .orderBy('name')
            .onSnapshot(collctnsnapshotObj => {
            let arrayofdocsObj = collctnsnapshotObj.docChanges();
                //console.log(arrayofdocsObj);

                arrayofdocsObj.forEach((docsObj) => {
                    //each docmntsnapshotobj is printed
                    console.log(docsObj.doc.data());

                    if (docsObj.type === 'added') {

                        const id = docsObj.doc.id;
                        const name = docsObj.doc.data().name;
                        const city = docsObj.doc.data().city;

                        this.setState((prevState) => ({
                            data: [...prevState.data, { name, city, id }]
                        }))
                    }

                    else if (docsObj.type === 'removed') {


                        this.setState((prevState) => ({
                            data: prevState.data.filter(obj => obj.id !== docsObj.doc.id)
                        }))
                     }
                    
                })
            
        });



    }







    



    submitForm = (event) => {
        event.preventDefault();

        db.collection("cafes").add({
            name: event.target.name.value,
            city: event.target.city.value
        });

        event.target.name.value = '';
        event.target.city.value = '';
        
    }







    crossClick = (event) => {
        const id = event.target.getAttribute('id');
        db.collection('cafes').doc(id).delete();
    }
    

    






  render() {

      
    return (
      <div>
        <h1>Cloud Cafe</h1>

        <div className="content">
                <form onSubmit={this.submitForm} id="add-cafe-form">
                    <input type="text" name="name" placeholder="Cafe name"/>
                    <input type="text" name="city" placeholder="Cafe city"/>
                    <button>Add Cafe</button>
                </form>

                <ul id="cafe-list">
                {this.state.data.map((dataobj) => (
                    <li key={dataobj.id}>
                    <span>{dataobj.name}</span>
                    <span>{dataobj.city}</span>
                    
                    <span onClick={this.crossClick} id={dataobj.id} className='cross' role="img" aria-label="donut">
                            &#10060;
                    </span>
                    </li>))
                }
                </ul>
        </div>
            
      </div>
      );
      

  }

    
    
}

export default App;

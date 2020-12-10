import React from 'react';

 export class TrescZadania extends React.Component {
    constructor(){
        super();
        this.state={
            'pkt1' : 'tworzenie aplikacji za pomocą modułu "create-react-app",',
            'pkt2' : 'tworzenie komponentów funkcyjnych i klasowych,',
            'pkt3' : 'należy utworzyć komponent nadrzędny i dwa komponenty potomne,',
            'pkt4' : 'należy wykorzystać props (atrybuty, właściwosci) przy przekazywaniu danych do komponentu potomnego,',
            'pkt5' : 'należy wykorzystać state (stan) przy tworzeniu komponentu klasowego,',
            'pkt6' : 'należy dodać plik .css do wybranych komponentów,',
            'pkt7' : 'należy zastosować funkcję map() przy generowaniu komponentów i należy pamiętać o atrybucie key,',
            'pkt8' : 'należy zrealizowac wysyłanie funkcji za pomocą "props",',
            'pkt9' : 'plusy za wykorzystanie Bootstrapa lub react-bootstrap’a w create-react-app.',
        }
    }
    
    render() {
      return (
          <div className="wnetrze">
              <ul> 
              <li>{this.state.pkt1}</li>
              <li>{this.state.pkt2}</li>
              <li>{this.state.pkt3}</li>
              <li>{this.state.pkt4}</li>
              <li>{this.state.pkt5}</li>
              <li>{this.state.pkt6}</li>
              <li>{this.state.pkt7}</li>
              <li>{this.state.pkt8}</li>
              <li>{this.state.pkt9}</li>
              </ul>
          </div>
      );
    }
  }


import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

function App() {
  return (
    <div className="App">
      <TextAreaComponent width={200} 
      //placeholder='Enter your comments' 
      cssClass="e-success" floatLabelType='Never'
      rows={3} cols={50} resizeMode='Both'
      maxLength={8} readOnly={true} value='Comments'
      enabled={false}>
      </TextAreaComponent>
    </div>
  );
}

export default App;

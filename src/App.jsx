import classes from './App.module.css'
import UseExampleCustomized from './examples/UseExampleCustomized';
import UseExampleDefault from "./examples/UseExampleDefault";
import UseExampleFullyCustomized from './examples/UseExampleFullyCustomized';
import UseExampleWithRangesAndInputField from './examples/UseExampleWithRangesAndInputField';

function App() {


  return (
    <div className={classes.app}>
      <UseExampleDefault />
      <UseExampleWithRangesAndInputField/>
      <UseExampleCustomized/>
      <UseExampleFullyCustomized/>
    </div>
  )
}

export default App

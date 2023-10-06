import classes from './App.module.css'
import UseExampleDefault from "./examples/UseExampleDefault";
import UseExampleFullyCustomized from './examples/UseExampleFullyCustomized';
import UseExampleWithRangesAndInputField from './examples/UseExampleWithRangesAndInputField';

function App() {


  return (
    <div className={classes.app}>
      <UseExampleDefault />
      <UseExampleWithRangesAndInputField/>
      <UseExampleFullyCustomized/>
    </div>
  )
}

export default App

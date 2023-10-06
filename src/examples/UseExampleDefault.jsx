import DateInput from "../lib/DateInput";

function UseExampleDefault() {


    return (
        <div
        style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
            gap: "50px",
        }}>
            <h1>Basic version of the Date Picker</h1>
            <DateInput
                name="randomName"
                label="My Date"
            />
        </div>
    );
}

export default UseExampleDefault;
import DateInput from "../lib/DateInput";

function UseExampleWithRangesAndInputField() {

    return (
        <div
        style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
            gap: "50px",
        }}>
            <h1>Date Picker with a manual input field, a year range (1950 - 2030) and an error message</h1>
            <DateInput
                name="randomName"
                label="My Date"
                errorMsg="Random Error Message"
                yearsRangeMin={1950}
                yearsRangeMax={2030}
                dateInputField={true}
            />
        </div>
    );
}

export default UseExampleWithRangesAndInputField;
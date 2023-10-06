import DateInput from "../lib/DateInput";

function UseExampleFullyCustomized() {

    return (
        <div
        style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
            gap: "50px",
        }}>
            <h1>Fully (randomly) customized Date Picker</h1>
            <DateInput
                name="randomName"
                label="My Date"
                errorMsg="Random Error Message"
                yearsRangeMin={1950}
                yearsRangeMax={2030}
                defaultValue="2020-01-01"
                dateInputField={true}
                labelColor="#FF5733"
                focusedLabelColor="#45AAB8"
                boxShadowColor="#8A2BE2"
                fontColor="#2E8B57"
                selectedDayFontColor="#FFD700"
                previousNextMonthFontColor="#FFA07A"
                iconColor="#6495ED"
                backgroundColor="#F5DEB3"
                hoveredBackgroundColor="#7FFF00"
                selectedDayBackgroundColor="#FF4500"
                selectedMonthYearBackgroundColor="#D2691E"
                todayBackgroundColor="#A9A9A9"
                borderBottomColor="#4B0082"
            />
        </div>
    );
}

export default UseExampleFullyCustomized;
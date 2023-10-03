import DateInput from "../DateInput";

function UseExample() {


    return (
        <div>
            <DateInput
                name="randomName"
                label="Random Label"
                errorMsg="Random Error Message"
                yearsRangeMin={1950}
                yearsRangeMax={2030}
                defaultValue="2020-01-01"
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

export default UseExample;
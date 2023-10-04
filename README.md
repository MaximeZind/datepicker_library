# Modal Component

A customizable date input component with a date picker that opens and closes.

## Prerequisites

- [NodeJS (**version v20.0.0 or higher**)](https://nodejs.org/en/)
- [npm (**v9.6.4 or higher**)](https://www.npmjs.com/)
- [eslint (**version 1.4.0 or higher**)](https://eslint.org/)
- [vite (**version ^4.3.2 or higher**)](https://vitejs.dev/)
- [react (**version ^18.2.0 or higher**)](https://react.dev/)
- [react-router-dom (**version ^6.11.2 or higher**)](https://reactrouter.com/en/main)
- [prop-types (**version ^15.8.1 or higher**)](https://www.npmjs.com/package/prop-types)

## Installation

You can install this component via npm:

`npm install maximez_date_picker`

## Usage

# Import the component

`import {DateInput} from 'maximez_date_picker';`

# Include the DateInput component in your JSX

```                <DateInput name='name'
                    label='label'
                    errorMsg={startDateErrorMsg}
                    yearsRangeMin={1923}
                    yearsRangeMax={2023}
                    labelColor={colorPalette.quinaryColor}
                    focusedLabelColor={colorPalette.tertiaryColor}
                    boxShadowColor={colorPalette.senaryColor}
                    fontColor={colorPalette.tertiaryColor}
                    selectedDayFontColor={colorPalette.secondaryColor}
                    previousNextMonthFontColor={colorPalette.quinaryColor}
                    iconColor={colorPalette.tertiaryColor}
                    backgroundColor={colorPalette.secondaryColor}
                    hoveredBackgroundColor={colorPalette.primaryColor}
                    selectedDayBackgroundColor={colorPalette.quarternaryColor}
                    selectedMonthYearBackgroundColor={colorPalette.senaryColor}
                    todayBackgroundColor={colorPalette.senaryColor}
                    borderBottomColor={colorPalette.senaryColor} />```
```

# Customize the component by passing props

- `name`: The `name` attribute of the date input field.
- `label`: The label text for the date input.
- `errorMsg`: The error message to display (if any).
- `yearsRangeMin`: The minimum year available in the date picker.
- `yearsRangeMax`: The maximum year available in the date picker.
- `defaultValue`: The default value for the input (format: "MM/DD/YYYY").
- `labelColor`: The color of the label.
- `focusedLabelColor`: The color of the label when focused.
- `boxShadowColor`: The color of the input box shadow.
- `fontColor`: The color of the text in the input.
- `selectedDayFontColor`: The color of the selected day in the date picker.
- `previousNextMonthFontColor`: The color of the days in the previous/next month in the date picker.
- `iconColor`: The color of the calendar icon.
- `backgroundColor`: The background color of the input container.
- `hoveredBackgroundColor`: The background color when hovered.
- `selectedDayBackgroundColor`: The background color of the selected day in the date picker.
- `selectedMonthYearBackgroundColor`: The background color of the selected month/year in the date picker.
- `todayBackgroundColor`: The background color of today's date in the date picker.

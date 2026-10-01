// =========================
// File: js/calendar.js
// Dynamic Booking Calendar
// =========================
// ----- DOM Elements -----
const calendarGrid = document.getElementById("calendarGrid");
const calendarMonthLabel = document.getElementById("calendarMonthLabel");
const prevMonthBtn = document.getElementById("prevMonthBtn");
const nextMonthBtn = document.getElementById("nextMonthBtn");
const selectedDateText = document.getElementById("selectedDateText");
const timeSlots = document.getElementById("timeSlots");
const bookingForm = document.getElementById("bookingForm");
const customerName = document.getElementById("customerName");
const customerService = document.getElementById("customerService");
const selectedTimeInput = document.getElementById("selectedTimeInput");
const bookingMessage = document.getElementById("bookingMessage");

// ----- Calendar State ------
const today = new Date(); // 0-indexed (starts at 0 just like arrays) month jan-> 0, dec -> 11, days-> 0 sunday, saturday -> 6
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectedDate = null; // value will come from user selecting a date
let selectedTime = ""; // empty string will come back as "00:00" some methods we will use only work on strings so we turn numbers into strings using the String()

// ----- Time Slot Data -----
const weekdaySlots = [ // hours open on weekdays
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
];
const saturdaySlots = [ // hours open on saturdays
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
];

// Example booked data for practice
const bookedAppointments = {
    "2026-03-28": ["10:00 AM", "2:00 PM"],
    "2026-03-29": [],
};

// ----- Helpers -----
const getMonthName = (monthIndex) => {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return monthNames[monthIndex];
};
const formatDateKey = (year, month, day) => { // "2026-04-10" "2026-10-20"
    const safeMonth = String(month + 1).padStart(2, "0"); /* JavaScript's Date object numbers months 0-11 (Jan is 0). This Function
expects a "human" month input, so it adds 1 to convert back to 1-12 for display/storage. */
const safeDay = String(day).padStart(2, "0") /* pads the string on the left with "0" until it's 2 characters long. "8" → "08", but
"12" stays "12" (already length 3, nothing added). */
return `${year}-${safeMonth}-${safeDay}`;
};
const formatReadableDate = (year, month, day) => {
    const date = new Date(year, month, day);
    return date.toLocaleDateString("en-US", {
        weekday: "long", // Full name e.g. Monday, "short" --> Mon
        month: "long", // Full name e.g. August, "short" --> Aug
        day: "numeric", // just the number e.g. 3
        year: "numeric" // full 4-digit year, e.g. 2026
    });
}; // formatReadableDate(2026, 7, 3). new Date() uses 0-index months Jan-> 0, Feb -> 1, ... Dec-> 11
// Internally, months are being passed around 0-indexed to stay consistent with JS's new Date(), but only at the point of being dispalyed
// (formatDateKey) the month is returned for a human

const isPastDate = (year, month, day) => { // function used to determine which days to pass the disabled class to
    const compareDate = new Date(year, month, day);
    compareDate.setHours(0, 0, 0, 0);
    const todayOnly = new Date();
    todayOnly.setHours(0, 0, 0, 0);
    return compareDate < todayOnly; // returns a boolean value (true/false) for later functions or if statements
};

const isClosedDay = (year, month, day) => { // used to add the disabled class to all sundays in later if else statment
    const date = new Date(year, month, day);
    const weekday = date.getDay();
    // Sunday closed
    if (weekday === 0) {
        return true;
    }
    return false;
};

const getSlotsForDate = (year, month, day) => {
    const date = new Date(year, month, day);
    const weekday = date.getDay();
    if (weekday === 6) { // 0-sun, 1-mon, 2-tue, ... 6-sat
        return saturdaySlots; // an array of hours open on saturday
    }
    if (weekday === 0) { // closed sundays
        return []; // returns an empty array because there are  no timeslots for sundays
    }
    return weekdaySlots; // an array of hours open during the week
};

// ---- Render Calendar ----
const renderCalendar = () => {
    // The guard clause
    if (!calendarGrid || !calendarMonthLabel) return; // The guard clause
    // if the calendar is not (!) available, don't run!
    // if the monthlabel is not (!) available, dont run!

    // Update the label and clear old content
    calendarMonthLabel.textContent =`${getMonthName(currentMonth)} ${currentYear}`; /* gets the month from the currentMonth variable as a
    number and passes it to the getMonthName function as an argument*/
    calendarGrid.innerHTML= "";

    // Figuring out the grid shape
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // not 0-indexed. ..currentMonth, 1 starts on the first day of the month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // 0-indexed jan -> 0, dex -> 11

    // Padding with empty cells
    for (let i=0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.className = "calendar-empty";
        calendarGrid.appendChild(emptyCell);
    }

    // Building each day button
    for (let day = 1; day <= daysInMonth; day++) {
        const dayButton = document.createElement("button");
        dayButton.type = "button";
        dayButton.textContent = day;
        dayButton.className = "calendar-day";
        const dateKey = formatDateKey(currentYear, currentMonth, day);

        // Conditionally adding classes (styling hooks based on state)
        if(
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
        ) {
            dayButton.classList.add("today"); // gives the current day button a beige outline
        }
        if (
            isPastDate(currentYear, currentMonth, day) ||
            isClosedDay(currentYear, currentMonth, day)
        ) {
            dayButton.classList.add("disabled"); // greys out the days past and sundays when closed
        }
        if (
            selectedDate &&
            selectedDate.year === currentYear &&
            selectedDate.month === currentMonth &&
            selectedDate.day === day
        ) {
            dayButton.classList.add("selected"); // adds the selected class to the date clicked
        }

        // The click handler (a closure)
        dayButton.addEventListener("click", ()=> {
            if (isPastDate(currentYear, currentMonth, day)) return; // extra insurance, past dates are already disabled
            if (isClosedDay(currentYear, currentMonth, day)) return; // extra insurance, sundays are already disabled
            selectedDate = { // fills in the key/value pairs based on date selected by user
                year: currentYear, // 2026
                month: currentMonth, // August
                day: day, // 18
                key: dateKey, // "2026-08-18" format
            }; // this object is used to stroe the appointments and prevent double-booking (lines 280-290)
            selectedTime = "";
            selectedTimeInput.value = "";
            selectedDateText.textContent = formatReadableDate( // 0-indexed
                currentYear,
                currentMonth,
                day,
            );
            renderCalendar();
            renderTimeSlots();
            bookingMessage.textContent = ""; // recalling this function after the listeners are added to each button
            bookingMessage.className = "booking-message"; // recalling this function to render the timeSlots
        });
        calendarGrid.appendChild(dayButton); // where all buttons are added to the calendar grid
    }
};

// ----- Render Time Slots -----
const renderTimeSlots = () => { // fills in the time-slot buttons for whatever date the user picked
    if (!timeSlots) return;
    timeSlots.innerHTML = "";
    if (!selectedDate) { // catches if the date wasn't selected first, forces date selection before timeslot
        timeSlots.innerHTML = `<p class="selected-date-text">Choose a date first.</p>`;
        return;
    }
    const slots = getSlotsForDate( // passes available hours for the day against date selected by user
        selectedDate.year,
        selectedDate.month,
        selectedDate.day,
    );
    const bookedForDay = bookedAppointments[selectedDate.key] || []; /* Looks up what times are already booked for this specific date.
    Returns undefined if nothing's been booked yet. Undefined is falsy and we can't return undefined because of the .includes() we use
    with this info later in the code, would crash so we use the || operator to substitue for an empty array []; instead. */
    // Checks if there are previous booking for the seleceted date and if not, returns an empty array
    if (slots.length === 0) {
        timeSlots.innerHTML =`<p class="selected-date-text>No appointments available for
        this date.</p>`; // a redundancy just in case the CSS class or JS Guard gets loosened later by another dev(real-world  thinking)
        return; // shows a "no appointments available" message and exits early, skipping the loop that would try to render time slot buttons \ 
    } /* Important distinction slots = shop's hours that day(empty on sundays), bookedForDay = which of those hours are already taken (used
    later to disable specific buttons for time slots already booked) */
    for (let i = 0; i < slots.length; i++) {
        const slot = slots[i];
        const slotBtn = document.createElement("button");
        slotBtn.type="button";
        slotBtn.textContent= slot;
        slotBtn.className = "time-slot-btn";
        if (bookedForDay.includes(slot)) {
            slotBtn.classList.add("disabled");
            slotBtn.disabled = true;
            slotBtn.textContent = `${slot} - Booked`;
        }
        if (selectedTime === slot) {
            slotBtn.classList.add("selected");
        }
        slotBtn.addEventListener("click", () => {
            selectedTime = slot;
            selectedTimeInput.value = slot;
            renderTimeSlots();
        });
        timeSlots.appendChild(slotBtn);
    }
};

// ----- Month Navigation -----
if (prevMonthBtn) {
    prevMonthBtn.addEventListener("click", () => {
        currentMonth--; // decrements the month by 1 on click
        if (currentMonth < 0) { // handles year boundary
            currentMonth = 11; // if month is jan(0) and is decremented it doesn't go to -1 but 11(dec)
            currentYear--; // decrements the year by 1
        }
        renderCalendar(); // re-runs renderCalendar() the function from earlier that builds the whole grid
    });
}
if (nextMonthBtn) {
    nextMonthBtn.addEventListener("click", ()=> { // same but increments to the next year
        currentMonth++;
        if(currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });
}

// ----- Booking Submit -----
if (bookingForm) {
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault(); // prevents default behaviors for all events
        const nameValue = customerName.value.trim(); /* trim() strips whitespace around a string, e.g. "Alex" becomes "Alex" prevents
        copy and paste spaces from being included as part of their name */
        const serviceValue = customerService.value;
        const timeValue = selectedTimeInput.value;
        if (
            nameValue === "" ||
            serviceValue === "" ||
            !selectedDate ||
            timeValue === ""
        ) {
            bookingMessage.textContent =
            "Please choose a date, time, name, and service.";
            bookingMessage.className = "booking-message error";
            return;
        }
        if (!bookedAppointments[selectedDate.key]) { // reads as "if there's no array yet for this date..."
            bookedAppointments[selectedDate.key] = []; // ...then create one
        }
        if (bookedAppointments[selectedDate.key].includes(timeValue)) {
            bookingMessage.textContent =
            "That time was just taken. Please choose another.";
            bookingMessage.className = "booking-message error";
            renderTimeSlots();
            return;
        }
        bookedAppointments[selectedDate.key].push(timeValue); // adds the time selected to the booked appointments array
        bookingMessage.textContent = `${nameValue}, your ${serviceValue} appointment is
        booked for ${formatReadableDate(
            selectedDate.year,
            selectedDate.month,
            selectedDate.day
        )} at ${timeValue}.`;
        bookingMessage.className = "booking-message success";
        bookingForm.reset();
        selectedTime = "";
        selectedTimeInput.value = "";
        renderTimeSlots();
    });
}

// ----- App Start -----
renderCalendar();
renderTimeSlots();
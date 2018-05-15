// This is the Database of Upcoming Events
// Please Edit with Care.
//
// 8 Fields (surrounded by brackets[]) are used for EACH event:
// 	["Recurring", "Month", "Day", "Year", "StartTime", "EndTime", "Name", "Description"]
// 	Each event field must be be surrounded by quotation marks followed by a comma ("",) EXCEPT the "Description" field.
//	The "Description" field is surrounded by quotation marks only ("").
//
// Each event has a comma after the closing bracket IF another event is below it on the next line down.
//	Note: The last event in this file should NOT have a comma after the closing bracket
//
// The Recurring field uses:
//	"D" = Daily; "W" = Weekly; "M" = Monthly; "Y" = Yearly; "F" = Floating Holiday
//
// One Time only events should leave the Recurring field blank
//	(ex. "")
//
// Daily events do NOT require that anything be in the Month Day and Year fields
//	Everything in the Month Day and Year fields will be ignored
//
// Weekly events should have the day of the week field set to 1 - 7
//	1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thurday, 6=Friday, 7=Saturday
//
// "F"loating events uses:
//	the Month field for the Month.
//	the Day field as the Cardinal Occurrence
//		1=1st, 2=2nd, 3=3rd, 4=4th, 5=5th, 6=6th occurrence of the day listed next
//	the Year field as the Day of the week the event/holiday falls on
//		1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thurday, 6=Friday, 7=Saturday
//	example: "F",	"1",	"3",	"2", = Floating holiday in January on the 3rd Monday of that month.
//
//	Note: Easter has it's own special formula so Please don't change anything related to Easter below
//
// "Y"early events are specific dates that never change - the Year field is ignored
//	example - Christmas is: "12","25","",
events = new Array(
		["Y",	"1",	"1",	"2006",	"1:00 AM",	"12:00 PM",	"New Year's Day",	"Happy New Year CpE Lycans!"],
	["Y",	"6",	"12",	"2005",	"1:00 AM",	"12:59 PM",	"Araw ng Kalayaan",	"Independence Day of the Philippines"],
	["Y",	"2",	"25",	"2005",	"1:00 AM",	"12:59 PM",	"People Power Revolution",	""],
	["Y",	"4",	"9",	"2005",	"1:00 AM",	"12:59 PM",	"Araw ng Kagitingan",	"The Day of Valor"],
	["Y",	"5",	"1",	"2005",	"1:00 AM",	"12:59 PM",	"Labor Day",	""],
	["Y",	"8",	"21",	"2005",	"1:00 AM",	"12:59 PM",	"Ninoy Aquino Day",	""],
	["Y",	"8",	"28",	"2005",	"1:00 AM",	"12:59 PM",	"Araw ng mga Bayani",	"National Heroes Day"],
	["Y",	"11",	"1",	"2005",	"1:00 AM",	"12:59 PM",	"All Saints' Day",	"Undas"],
	["Y",	"11",	"2",	"2005",	"1:00 AM",	"12:59 PM",	"All Souls' Day",	"Undas"],
	["Y",	"11",	"30",	"2005",	"1:00 AM",	"12:59 PM",	"Bonifacio Day",	""],
	["Y",	"12",	"30",	"2005",	"1:00 AM",	"12:59 PM",	"Rizal Day",	""],
	["",	"2",	"16",	"2018",	"1:00 AM",	"12:59 PM",	"Chinese New Year",	"Kung Hei Fat Choi CpE Lycans!"],
	["",	"3",	"29",	"2018",	"1:00 AM",	"12:59 PM",	"Maundy Thursday",	""],
	["",	"3",	"30",	"2018",	"1:00 AM",	"12:59 PM",	"Good Friday",	""],
	["",	"3",	"31",	"2018",	"1:00 AM",	"12:59 PM",	"Black Saturday",	""],
	["",	"6",	"15",	"2018",	"1:00 AM",	"12:59 PM",	"Eid'l Fitr",	""],
	["",	"8",	"22",	"2018",	"1:00 AM",	"12:59 PM",	"Eidul Adha",	""],
	["Y",	"7",	"26",	"2005",	"1:00 AM",	"12:59 PM",	"Bulacan Foundation Day",	""],
	["Y",	"3",	"27",	"2005",	"1:00 AM",	"12:59 PM",	"Francisco Baltazar Day",	""],
	["Y",	"1",	"20",	"2005",	"1:00 AM",	"12:59 PM",	"First Republic of the Philippines",	"Commemoration of the anniversary of the inauguration of the First Republic of the Philippines"],
	["Y",	"2",	"3",	"2005",	"1:00 AM",	"12:59 PM",	"Blas Ople Day",	""],
	["Y",	"8",	"15",	"2005",	"1:00 AM",	"12:59 PM",	"Bulacan Foundation Day",	"Commemoration of the foundation day anniversary."],
	["Y",	"9",	"15",	"2005",	"1:00 AM",	"12:59 PM",	"Araw ng Kongreso ng Malolos",	""],
	["Y",	"12",	"25",	"2005",	"1:00 AM",	"12:59 PM",	"Christmas",	"Merry Christmas CpE Lycans!"]
// Please omit the final comma after the ] from the last line above unless you are going to add another event at this time.
);




